<link rel="import" type="component" href="./input.ink" name="field-input" />
<style>
  div {
    background-color: var(--white);
    border: 1px solid var(--black);
    border-top: 0;
    box-sizing: border-box;
    color: var(--black);
    display: flex;
    align-items: center;
    padding-right: 7px;
  }
  span {
    display: inline-block;
    flex-grow: 1;
    overflow: hidden;
    padding: 7px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  a {
    display: inline-block;
    flex-grow: 1;
    overflow: hidden;
    padding: 7px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--black);
    text-decoration: underline;
  }
  em {
    cursor: pointer;
    font-size: 20px;
    margin-top: -2px;
    color: var(--error);
  }
  img {
    height: 32px;
  }
  img + a {
    padding: 7px 4px;
  }
</style>
<script>
  import type { ChangeEvent } from '@stackpress/ink/dist/types';
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  import signal from '@stackpress/ink/dist/client/api/signal';
  const { 
    image,
    uploading = 'Uploading...',
    name,
    value = [],
    change,
    update,
    upload,
    //dont need these...
    style, 'class': _,
    ...attributes 
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  const css = this.styles();
  this.styles = () => css + styles.toString();
  //determine display
  setDisplay(this.props, styles, 'block');

  const state = signal({ queued: 0, uploaded: value });

  const handlers = {
    change: (e: ChangeEvent<HTMLInputElement>) => {
      if (upload && e.target.files?.length) {
        const pending = Array.from(e.target.files);
        const queued = state.value.queued + pending.length;
        const uploaded = Array.from(state.value.uploaded);
        state.value = { ...state.value, queued };
        upload(pending, urls => {
          uploaded.push(...urls);
          state.value = { 
            queued: Math.max(queued - urls.length, 0), 
            uploaded: [ ...uploaded ] 
          };
          console.log(state.value)
        });
      }
      change && change(e);
    },
    remove: (index: number) => {
      const queued = state.value.queued ? state.value.queued - 1: 0;
      const uploaded = [ ...state.value.uploaded ];
      uploaded.splice(index, 1);
      state.value = { queued, uploaded };
    }
  }
</script>
<template type="light">
  <if true={name}>
    <each value=url from={state.value.uploaded}>
      <input {name} type="hidden" value={url} />
    </each>
  </if>
</template>
<template type="shadow">
  <if true={image}>
    <field-input 
      {...attributes} 
      type="file" 
      accept="image/*" 
      change={handlers.change} 
      multiple 
    />
  <else />
    <field-input 
      {...attributes} 
      type="file" 
      change={handlers.change} 
      multiple 
    />
  </if>
  <if true={state.value.uploaded.length > 0}>
    <each key=i value=url from={state.value.uploaded}>
      <div>
        <if true={image}>
          <img src={url} alt="preview" />
        </if>
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        <em click={() => handlers.remove(i)}>
          &times;
        </em>
      </div>
    </each>
  </if>
  <if true={state.value.queued > 0}>
    <div><span>{uploading}</span></div>
  </if>
</template>
