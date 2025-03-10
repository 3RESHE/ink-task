<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css" />
<style>
  :host {
    display: block;
    font-size: 14px;
    line-height: 20px;
  }
  :host([inline]) {
    display: inline !important;
  }
  :host([inline]),
  :host([inline]) > pre,
  :host([inline]) > pre > code {
    display: inline !important;
  }
  .snippet {
    background-color: #000000;
    color: #ABB2BF;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }
  :host([inline]) .line-numbers {
    position: static;
    padding-left: 0;
  }

  .line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }

  :host([inline]) .line-numbers .line-numbers-rows {
    display: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
  .pad {
    padding: 5px;
  }

  .terminal {
    background-color: #000000;
    color: #EFEFEF;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    height: 100%;
    padding: 10px;
  }
  .terminal span {
    color: #00FF00;
  }
</style>
<script>
  import Prism from 'prismjs';
  import { props, children } from '@stackpress/ink';

  const config = this.props;
  const { 
    lang = 'markup', 
    numbers = false, 
    inline = false,
    trim = false,
    ltrim = false,
    rtrim = false,
    detab = 0
  } = config;
  const childlist = children();
  let snippet = childlist[0]?.textContent || '';
  if (detab) {
    snippet = snippet.replace(
      new RegExp(`\\n {${detab}}`, 'g'), '\n'
    );
  }
  if (trim) {
    snippet = snippet.trim();
  } else if (ltrim) {
    snippet = snippet.replace(/^\s+/, '');
  } else if (rtrim) {
    snippet = snippet.replace(/\s+$/, '');
  }

  const highlight = event => {
    if (!snippet) {
      return;
    }
    const code = Prism.highlight(snippet, Prism.languages[lang], lang);

    event.detail.target.innerHTML = code;
    if (numbers) {
      const match = code.match(/\n(?!$)/g);
      const total = match ? match.length + 1 : 1;
      const lines = new Array(total + 1).join('<span></span>');
      const wrapper = document.createElement('span');
      wrapper.setAttribute('aria-hidden', 'true');
      wrapper.className = 'line-numbers-rows';
      wrapper.innerHTML = lines;
      event.detail.target.appendChild(wrapper);
    }
  };
</script>
<if true={lang === 'bash'}>
  <div class="terminal"><span>$</span> {childlist}</div>
<elif true={snippet} />
  <if true={numbers}>
    <pre class="snippet line-numbers"><code mount=highlight></code></pre>
  <else />
    <pre class="snippet pad"><code mount=highlight></code></pre>
  </if>
<else />
  <span>????</span>
</if>
