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
<link rel="import" type="component" href="@stackpress/ink-ui/format/markdown.ink" name="format-markdown" />

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
    { label: 'Markdown' }
  ];
  const basicMarkdown = '**Hello** World';
  const listMarkdown = '- Item 1\n- Item 2\n- Item 3';
  const linkMarkdown = '[Click Me](https://example.com)';
  const complexMarkdown = '# Heading\n**Bold Text**\n- Item 1\n- Item 2\n[Link](https://example.com)';
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
            <a class="block tx-t-0" href="#Markdown">{_('Markdown')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicMarkdown">• {_('Basic Markdown Format')}</a>
              <a class="block tx-t-1" href="#listMarkdown">• {_('List Markdown Format')}</a>
              <a class="block tx-t-1" href="#linkMarkdown">• {_('Link Markdown Format')}</a>
              <a class="block tx-t-1" href="#styledMarkdown">• {_('Styled Markdown Format')}</a>
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

          <a name="Markdown"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Markdown')}</h1>
          <ide-app title="Markdown" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Markdown from '@stackpress/ink-ui/format/markdown';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-markdown>` component transforms a Markdown string from the `value` prop into sanitized HTML, rendered within the component. The container’s display defaults to `block`, overridable via display props. Use the `class` prop with Ink utilities (e.g., `p-4`, `bg-t-2`, `scroll-y-auto`) to style the container and manage overflow or layout.')}</p>
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
              <table-col>{_('A string of Markdown text to parse and render as HTML.')}</table-col>
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
              <table-col>{_('Ink utility classes to style the container (e.g., "p-4", "bg-t-2", "scroll-y-auto").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the container (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Markdown Format -->
          <a name="basicMarkdown"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Markdown Format')}</h2>
          <div class="mb-10">{_('Renders simple Markdown text with default `block` display.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-markdown value={basicMarkdown} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-markdown value="**Hello** World" class="p-4" />
            `}
          </ide-code>

          <!-- List Markdown Format -->
          <a name="listMarkdown"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('List Markdown Format')}</h2>
          <div class="mb-10">{_('Renders a Markdown list as an HTML unordered list.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-markdown value={listMarkdown} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-markdown value="- Item 1\n- Item 2\n- Item 3" class="p-4" />
            `}
          </ide-code>

          <!-- Link Markdown Format -->
          <a name="linkMarkdown"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Link Markdown Format')}</h2>
          <div class="mb-10">{_('Renders a Markdown link as a clickable HTML anchor.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-markdown value={linkMarkdown} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-markdown value="[Click Me](https://example.com)" class="p-4" />
            `}
          </ide-code>

          <!-- Styled Markdown Format -->
          <a name="styledMarkdown"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Markdown Format')}</h2>
          <div class="mb-10">{_('Renders complex Markdown with a styled container, including padding, background, and borders.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-markdown value={complexMarkdown} class="p-4 bg-t-2 b-solid b-t-2 c-4 scroll-y-auto" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-markdown value="# Heading\n**Bold Text**\n- Item 1\n- Item 2\n[Link](https://example.com)" class="p-4 bg-t-2 b-solid b-t-2 c-4 scroll-y-auto" />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/list.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('List')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/phone.html">
              {_('Phone')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>