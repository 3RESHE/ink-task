<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  import {marked} from 'marked';
  import purify from 'dompurify';
  //extract props
  const { value } = this.props;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'block');
  const init = () => {
    this.innerHTML = purify.sanitize(marked.parse(value));
  }
</script>
<slot mount=init></slot>