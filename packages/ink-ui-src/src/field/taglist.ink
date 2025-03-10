<style>
  div {
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--black);
    box-sizing: border-box;
    display: flex;
    max-width: 100%;
    overflow: auto;
    padding-bottom: 5px;
    padding-left: 4px;
    padding-top: 5px;
    width: 100%;
  }
  span {
    align-items: center;
    border-radius: 4px;
    color: var(--white);
    display: inline-block;
    margin-right: 2px;
    padding: 2px 4px;
    white-space: nowrap;
  }
  em {
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-style: normal;
    padding-left: 5px;
  }
  input {
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    height: 100%;
    min-width: 50%;
    padding: 0;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
</style>
<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setAlign from '../utilities/style/align';
  import setColor from '../utilities/style/color';
  import setDisplay from '../utilities/style/display';
  import setPadding from '../utilities/style/padding';
  import setSize from '../utilities/style/size';
  import signal from '@stackpress/ink/dist/client/api/signal';
  //separate component related props from field attributes
  const { 
    info,   warning,     success, 
    error,  muted,       primary, 
    color,  secondary,   placeholder,
    change, update,      value = [],
    name
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  const css = this.styles();
  this.styles = () => css + styles.toString();
  //set default styles
  //determine display
  setDisplay(this.props, styles, 'block', ':host');
  //determine background colors for span
  setColor(this.props, styles, 'var(--warning)', 'span', 'background-color');
  const state = signal(typeof value === 'string' 
    ? value.split(',').filter(value => value.length > 0)
    : Array.from(value)
  );
  //set handlers
  const handlers = {
    change: (e: ChangeEvent<HTMLInputElement>) => {
      change && change(e);
    },
    remove: (index: number) => {
      //update the state without the removed tag
      state.value = state.value.filter((tag, i) => i !== index);
      //this will cause to re-render the component
      //trigger the update event
      update && update(state.value);
    },
    edit: (e: KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;
      const value = e.target.value.trim();
      //if enter or comma
      if ((key === 'Enter' || key === ',') 
        //and there's a value
        && value.length > 0
        //and the value is not already in the tag list
        && !state.value.includes(value)
      ) {
        //prevent form submission
        e.preventDefault();
        //add the value to the tag list
        state.value = [ ...state.value, value ];
        //this will cause to re-render the component
        //so we need to re-focus the input
        this.shadowRoot?.querySelector('input')?.focus();
        //trigger the update event
        update && update(state.value);
      //if backspace
      } else if (key === 'Backspace' 
        //and the input is empty
        && e.target.value.length === 0
        //and there are tags
        && state.value.length > 0
      ) {
        //prevent form submission
        e.preventDefault();
        //make a copy of the tags
        const tags = [ ...state.value ];
        //remove the last tag and get the value
        const value = tags.pop() || '';
        //update the tags list
        state.value = tags;
        //this will cause to re-render the component
        //so get the new input
        const input = this.shadowRoot?.querySelector('input');
        //it should be there
        if (input) {
          //set the value and focus
          input.value = value;
          input.focus();
        }
        //trigger the update event
        update && update(tags);
      }
      //prevent form submission
      return false;
    }
  };
</script>
<template type="light">
  <if true={name}>
    <each value=tag key=i from={state.value}>
      <input type="hidden" {name} value={tag} />
    </each>
  </if>
</template>
<template type="shadow">
  <div>
    <each value=tag key=i from={state.value}>
      <span>
        {tag}
        <em click={() => handlers.remove(Number(i))}>&times;</em>
      </span>
    </each>
    <input
      placeholder={placeholder}
      keydown={handlers.edit}
      keyup={handlers.save}
      change={handlers.change}
    />
  </div>
</template>