<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="layout-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/list.ink" name="format-list" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/panel.html';
  const title = _('Ink UI - Web Components Meets Atomic Styles.');
  const description = _('Ink UI atomically generates CSS styles and provides out of box web components.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'List' }
  ];
  const listItems = ['Item 1', 'Item 2', 'Item 3'];
</script>

<html>
  <html-head />
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <aside left><html-aside /></aside>
      <aside right>
        <menu class="m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto">
          <h6 class="tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper">
            {_('On this page')}
          </h6>
          <nav class="tx-14 tx-lh-32">
            <a class="block tx-t-0" href="#List">{_('List')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicUnorderedList">• {_('Basic Unordered List Format')}</a>
              <a class="block tx-t-1" href="#orderedList">• {_('Ordered List Format')}</a>
              <a class="block tx-t-1" href="#indentedList">• {_('Indented List Format')}</a>
              <a class="block tx-t-1" href="#spacedList">• {_('Spaced List Format')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs 
              crumbs={crumbs} 
              block 
              bold 
              white 
              sep-muted
              link-primary
              spacing={2}
            />
          </nav>

          <a name="List"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('List')}</h1>
          <ide-app title="List" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import List from '@stackpress/ink-ui/format/list';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-list>` component transforms an array of strings from the `value` prop into a formatted list, rendered as either an `<ol>` (ordered) or `<ul>` (unordered) based on the `ordered` prop. The container’s display defaults to `block`, overridable via display props. Use `indent` and `spacing` props to customize the list’s padding, or the `class` prop with Ink utilities (e.g., `p-4`, `bg-t-2`) to style the container.')}</p>
          <layout-table 
            top
            head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
            body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
            odd="bg-t-1"
            even="bg-t-0"
          >
            <table-head>{_('Property')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>value</table-col>
              <table-col>Array</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('An array of strings to render as list items.')}</table-col>
            </table-row>

            <table-row>
              <table-col>ordered</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, renders an ordered list (`<ol>`); if `false` or omitted, renders an unordered list (`<ul>`). Defaults to `false`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>indent</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the left padding of the list in pixels (e.g., `20` for 20px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>spacing</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the vertical padding between list items in pixels (e.g., `10` for 10px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Defines the container’s display format (e.g., "block", "flex"). Defaults to "block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes to style the container (e.g., "p-4", "bg-t-2").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the container (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Unordered List Format -->
          <a name="basicUnorderedList"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Unordered List Format')}</h2>
          <div class="mb-10">{_('Renders a simple unordered list (`<ul>`) with default `block` display.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-list value={listItems} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-list value={['Item 1', 'Item 2', 'Item 3']} class="p-4" />
            `}
          </ide-code>

          <!-- Ordered List Format -->
          <a name="orderedList"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Ordered List Format')}</h2>
          <div class="mb-10">{_('Renders an ordered list (`<ol>`) with numbered items.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-list value={listItems} ordered class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-list value={['Item 1', 'Item 2', 'Item 3']} ordered class="p-4" />
            `}
          </ide-code>

          <!-- Indented List Format -->
          <a name="indentedList"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Indented List Format')}</h2>
          <div class="mb-10">{_('Renders an unordered list with custom indentation.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-list value={listItems} indent={20} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-list value={['Item 1', 'Item 2', 'Item 3']} indent={20} class="p-4" />
            `}
          </ide-code>

          <!-- Spaced List Format -->
          <a name="spacedList"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Spaced List Format')}</h2>
          <div class="mb-10">{_('Renders an ordered list with custom spacing between items.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-list value={listItems} ordered spacing={10} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-list value={['Item 1', 'Item 2', 'Item 3']} ordered spacing={10} class="p-4" />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/link.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Link')}
            </a>
            <a class="flex-grow tx-right tx-primary py-20" href="/ink/ui/format/markdown.html">
              {_('Markdown')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>