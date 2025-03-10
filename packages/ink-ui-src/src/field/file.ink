<link rel="import" type="component" href="./input.ink" name="field-input" />
<style>
  div {
    background-color: var(--white);
    border: 1px solid var(--black);
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
    value,
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
  setDisplay(this.props, styles, 'inline-block');

  const state = signal({ uploading: false, url: value });

  const handlers = {
    change: (e: ChangeEvent<HTMLInputElement>) => {
      if (upload && e.target.files?.length) {
        state.value = { ...state.value, uploading: true };
        upload(e.target.files[0], url => {
          state.value = { url, uploading: false };
          update && update(url);
        });
      }
      
      change && change(e);
    },
    reset: () => {
      state.value = { uploading: false, url: undefined };
    }
  };
</script>
<template type="light">
  <if true={name && state.value.url}>
    <input {name} type="hidden" value={state.value.url} />
  </if>
</template>
<template type="shadow">
  <if true={!state.value.url && !state.value.uploading}>
    <if true={image}>
      <field-input {...attributes} type="file" accept="image/*" change={handlers.change} />
    <else />
      <field-input {...attributes} type="file" change={handlers.change} />
    </if>
  <elif true={!state.value.url && state.value.uploading} />
    <div><span>{uploading}</span></div>
  <elif true={state.value.url} />
    <div>
      <if true={image}>
        <img src={state.value.url} alt="preview" />
      </if>
      <a href={state.value.url} target="_blank" rel="noreferrer">
        {state.value.url}
      </a>
      <em click={handlers.reset}>&times;</em>
    </div>
  </if>
</template>
