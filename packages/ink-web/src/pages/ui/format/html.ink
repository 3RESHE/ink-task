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
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/html.ink" name="format-html" />

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
    { label: 'HTML' }
  ];
  const htmlSample = '<h1><strong style="color: green">Hello</strong> World</h1>';
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
            <a class="block tx-t-0" href="#HTML">{_('HTML')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicHTML">• {_('Basic HTML')}</a>
              <a class="block tx-t-1" href="#styledHTML">• {_('Styled HTML')}</a>
              <a class="block tx-t-1" href="#smallHTML">• {_('Small HTML Display')}</a>
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

          <a name="HTML"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('HTML')}</h1>
          <ide-app title="HTML" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import HTML from '@stackpress/ink-ui/format/html';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-html>` component renders sanitized HTML content from the `value` prop, preventing XSS attacks using DOMPurify. Use Ink utilities via the `class` prop for responsive styling, including `tx-*` classes for font sizes (e.g., `tx-xs` for 10px, `tx-md` for 14px). Default font-size is inherited.')}</p>
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
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('The HTML content to render (sanitized by DOMPurify).')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for responsive styling (e.g., "p-4", "tx-md", "md:mr-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (use `class` with Ink utilities instead).')}</table-col>
            </table-row>

            <table-row>
              <table-col>Other attributes</table-col>
              <table-col>-</table-col>
              <table-col>No</table-col>
              <table-col>{_('Additional HTML attributes are passed to the underlying `<span>` element.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic HTML -->
          <a name="basicHTML"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic HTML')}</h2>
          <div class="mb-10">{_('Renders a simple HTML string with default styling.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-html value="<p>Hello World</p>" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-html value="<p>Hello World</p>" class="p-4" />
          `}</ide-code>

          <!-- Styled HTML -->
          <a name="styledHTML"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled HTML')}</h2>
          <div class="mb-10">{_('Renders HTML with inline styles that are preserved after sanitization.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-html value={htmlSample} class="p-4 b-solid b-t-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-html value="<h1><strong style='color: green'>Hello</strong> World</h1>" class="p-4 b-solid b-t-2 c-4" />
          `}</ide-code>

          <!-- Small HTML Display -->
          <a name="smallHTML"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Small HTML Display')}</h2>
          <div class="mb-10">{_('Renders HTML with a smaller font size using `tx-xs` (10px).')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-html value="<p>Small Text</p>" class="p-4 tx-xs b-solid b-t-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-html value="<p>Small Text</p>" class="p-4 tx-xs b-solid b-t-1" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/formula.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Formula')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/image.html">
              {_('Image')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>