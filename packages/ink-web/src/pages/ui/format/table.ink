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
<link rel="import" type="component" href="@stackpress/ink-ui/format/table.ink" name="format-table" />

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
    { label: 'Table' }
  ];
  const table = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
  ];

    const stripes = [ 'bg-t-2', 'bg-t-3' ];
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
            <a class="block tx-t-0" href="#Table">{_('Table')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicTable">• {_('Basic Table Format')}</a>
              <a class="block tx-t-1" href="#stickyHeader">• {_('Sticky Header Table Format')}</a>
              <a class="block tx-t-1" href="#themedTable">• {_('Themed Table Format')}</a>
              <a class="block tx-t-1" href="#simpleTable">• {_('Simple Table Format')}</a>
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

          <a name="Table"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Table')}</h1>
          <ide-app title="Table" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Table from '@stackpress/ink-ui/format/table';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-table>` component renders an array of objects as a styled HTML table. Headers are derived from the first object’s keys, and rows from subsequent objects’ values. The component supports sticky positioning, custom padding, alignment, and theming for background, headers, stripes, and borders. The display defaults to `block`, overridable via display props. Use styling props or Ink utility classes (e.g., `p-4`, `bg-t-2`) to customize appearance.')}</p>
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
              <table-col>No</table-col>
              <table-col>{_('An array of objects representing table rows (defaults to an empty array `[]`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>top</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, makes the header row sticky at the top.')}</table-col>
            </table-row>

            <table-row>
              <table-col>left</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, makes the first column sticky on the left.')}</table-col>
            </table-row>

            <table-row>
              <table-col>right</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, makes the last column sticky on the right.')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Padding for cells in pixels (e.g., `10` for 10px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>align</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text alignment for cells ("left", "center", "right").')}</table-col>
            </table-row>

            <table-row>
              <table-col>background</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color or theme for all cells (e.g., "bg-1").')}</table-col>
            </table-row>

            <table-row>
              <table-col>border</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Border-top color or theme for cells (e.g., "black").')}</table-col>
            </table-row>

            <table-row>
              <table-col>header</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color or theme for header cells (e.g., "bg-2").')}</table-col>
            </table-row>

            <table-row>
              <table-col>stripe</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color or theme for alternating rows (e.g., "bg-2").')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Defines the container’s display format (e.g., "block", "flex"). Defaults to "block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the text color (e.g., "var(--tx-1)", "red").')}</table-col>
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

          <!-- Basic Table Format -->
          <a name="basicTable"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Table Format')}</h2>
          <div class="mb-10">{_('Renders a table with custom padding, alignment, and theming, matching the reference example.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-table 
                value={table} 
                padding="10"
                align="center"
                background-theme="bg-1"
                stripe-theme="bg-2"
                header-theme="bg-2"
                border-theme="black"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-table 
                value={table} 
                padding="10"
                align="center"
                background-theme="bg-1"
                stripe-theme="bg-2"
                header-theme="bg-2"
                border-theme="black"
              />
            `}
          </ide-code>

          <!-- Sticky Header Table Format -->
          <a name="stickyHeader"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sticky Header Table Format')}</h2>
          <div class="mb-10">{_('Renders a table with a sticky header.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center" style="height: 200px;">
              <format-table 
                value={table} 
                top 
                padding="10"
                align="center"
                background-theme="bg-1"
                stripe-theme="bg-2"
                header-theme="bg-2"
                border-theme="black"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-table 
                value={table} 
                top 
                padding="10"
                align="center"
                background-theme="bg-1"
                stripe-theme="bg-2"
                header-theme="bg-2"
                border-theme="black"
              />
            `}
          </ide-code>

          <!-- Themed Table Format -->
          <a name="themedTable"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Themed Table Format')}</h2>
          <div class="mb-10">{_('Renders a table with custom colors and alignment.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-table 
                value={table} 
                padding="5"
                align="left"
                background="var(--bg-3)"
                stripe="var(--bg-4)"
                header="var(--bg-4)"
                border="var(--tx-1)"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-table 
                value={table} 
                padding="5"
                align="left"
                background="var(--bg-3)"
                stripe="var(--bg-4)"
                header="var(--bg-4)"
                border="var(--tx-1)"
              />
            `}
          </ide-code>

          <!-- Simple Table Format -->
          <a name="simpleTable"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Simple Table Format')}</h2>
          <div class="mb-10">{_('Renders a basic table with default styles.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-table value={table} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-table value={table} />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/separated.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Separated')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/taglist.html">
              {_('Taglist')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>