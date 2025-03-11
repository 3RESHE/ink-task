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
<link rel="import" type="component" href="@stackpress/ink-ui/format/json.ink" name="format-json" />

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
    { label: 'JSON' }
  ];
  const simpleJson = { icon: 'book', label: 'Docs' };
  const arrayJson = ['apple', 'banana', 'cherry'];
  const largeJson = {
    id: 1,
    name: 'Example',
    items: [
      { id: 101, name: 'Item 1', active: true },
      { id: 102, name: 'Item 2', active: false },
      { id: 103, name: 'Item 3', active: true }
    ],
    metadata: { created: '2023-01-01', updated: '2023-12-31' }
  };
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
            <a class="block tx-t-0" href="#JSON">{_('JSON')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicJson">• {_('Basic JSON Format')}</a>
              <a class="block tx-t-1" href="#arrayJson">• {_('Array JSON Format')}</a>
              <a class="block tx-t-1" href="#styledJson">• {_('Styled JSON Format')}</a>
              <a class="block tx-t-1" href="#scrollableJson">• {_('Scrollable JSON Format')}</a>
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

          <a name="JSON"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('JSON')}</h1>
          <ide-app title="JSON" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import JSONFormat from '@stackpress/ink-ui/format/json';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-json>` component transforms a JSON-serializable value from the `value` prop into a formatted JSON string, displayed within a `<pre>` tag for readability. The container’s display format defaults to `block`, overridable via display props (e.g., `block`, `flex`, `inline-block`). Use the `class` prop with Ink utilities (e.g., `p-4`, `bg-t-2`, `scroll-y-auto`) to style the container and manage overflow or text formatting.')}</p>
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
              <table-col>Any</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('A JSON-serializable value (e.g., object, array, string) to format and display as a JSON string.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Defines the container’s display format (e.g., "block", "flex", "inline-block"). Defaults to "block". Can be set via props like `block`, `flex`, `inline-block`, etc.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes to style the container (e.g., "p-4", "bg-t-2", "scroll-y-auto").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the container (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic JSON Format -->
          <a name="basicJson"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic JSON Format')}</h2>
          <div class="mb-10">{_('Renders a simple JSON object with a basic `block` format.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-json value={simpleJson} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-json value={{ icon: 'book', label: 'Docs' }} class="p-4" />
            `}
          </ide-code>

          <!-- Array JSON Format -->
          <a name="arrayJson"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Array JSON Format')}</h2>
          <div class="mb-10">{_('Renders a JSON array, demonstrating handling of different data types.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-json value={arrayJson} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-json value={['apple', 'banana', 'cherry']} class="p-4" />
            `}
          </ide-code>

          <!-- Styled JSON Format -->
          <a name="styledJson"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled JSON Format')}</h2>
          <div class="mb-10">{_('Renders a JSON object with a styled container, including padding, background, and borders.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-json value={simpleJson} class="p-4 bg-t-2 b-solid b-t-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-json value={{ icon: 'book', label: 'Docs' }} class="p-4 bg-t-2 b-solid b-t-2 c-4" />
            `}
          </ide-code>

          <!-- Scrollable JSON Format -->
          <a name="scrollableJson"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Scrollable JSON Format')}</h2>
          <div class="mb-10">{_('Renders a larger JSON object with a scrollable container and custom display.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-json value={largeJson} flex class="p-4 tx-14 scroll-y-auto h-100 w-full bg-t-2 rounded" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-json value={{ id: 1, name: 'Example', items: [{ id: 101, name: 'Item 1', active: true }, { id: 102, name: 'Item 2', active: false }, { id: 103, name: 'Item 3', active: true }], metadata: { created: '2023-01-01', updated: '2023-12-31' } }} flex class="p-4 tx-14 scroll-y-auto h-100 w-full bg-t-2 rounded" />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/imagelist.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Image List')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/link.html">
              {_('Link')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>