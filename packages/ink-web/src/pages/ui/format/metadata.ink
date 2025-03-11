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
<link rel="import" type="component" href="@stackpress/ink-ui/format/metadata.ink" name="format-metadata" />

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
    { label: 'Metadata' }
  ];
  const metadata = {
    created_at: '2023-01-01',
    updated_at: '2023-12-31',
    author_name: 'John Doe'
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
            <a class="block tx-t-0" href="#Metadata">{_('Metadata')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicMetadata">• {_('Basic Metadata Format')}</a>
              <a class="block tx-t-1" href="#formattedMetadata">• {_('Formatted Metadata Format')}</a>
              <a class="block tx-t-1" href="#styledMetadata">• {_('Styled Metadata Format')}</a>
              <a class="block tx-t-1" href="#borderedMetadata">• {_('Bordered Metadata Format')}</a>
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

          <a name="Metadata"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Metadata')}</h1>
          <ide-app title="Metadata" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Metadata from '@stackpress/ink-ui/format/metadata';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-metadata>` component transforms an object of key-value pairs from the `value` prop into a formatted table, displaying metadata in a two-column layout (key and value). The table spans the full width by default. Use props like `padding`, `align`, `background-theme`, `stripe-theme`, and `border-theme` to customize the appearance, and `format` to transform keys into a readable format (e.g., `created_at` to `Created At`). Additional styling can be applied via the `class` prop with Ink utilities.')}</p>
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
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('An object of key-value pairs to display as metadata (defaults to an empty object).')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the padding of table cells in pixels (e.g., `10` for 10px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>align</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the text alignment of table cells (e.g., "center", "left", "right").')}</table-col>
            </table-row>

            <table-row>
              <table-col>format</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, formats keys by converting underscores/hyphens to spaces and capitalizing words (e.g., `created_at` to `Created At`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>background-theme</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the background color for all table cells using a theme value (e.g., "bg-1" maps to `var(--bg-1)`). Internally maps to the `background` prop.')}</table-col>
            </table-row>

            <table-row>
              <table-col>stripe-theme</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the background color for odd-numbered rows to create a striping effect (e.g., "bg-2" maps to `var(--bg-2)`). Internally maps to the `stripe` prop.')}</table-col>
            </table-row>

            <table-row>
              <table-col>border-theme</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the border-top color for table cells and enables a 1px solid border-top (e.g., "black"). Internally maps to the `border` prop.')}</table-col>
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

          <!-- Basic Metadata Format -->
          <a name="basicMetadata"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Metadata Format')}</h2>
          <div class="mb-10">{_('Renders a simple metadata table with default styling.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto">
              <format-metadata value={metadata} padding="10" align="center" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-metadata value={{ created_at: '2023-01-01', updated_at: '2023-12-31', author_name: 'John Doe' }} padding="10" align="center" />
            `}
          </ide-code>

          <!-- Formatted Metadata Format -->
          <a name="formattedMetadata"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Formatted Metadata Format')}</h2>
          <div class="mb-10">{_('Renders a metadata table with formatted keys (e.g., `created_at` to `Created At`).')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto">
              <format-metadata value={metadata} padding="10" align="center" format />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-metadata value={{ created_at: '2023-01-01', updated_at: '2023-12-31', author_name: 'John Doe' }} padding="10" align="center" format />
            `}
          </ide-code>

          <!-- Styled Metadata Format -->
          <a name="styledMetadata"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Metadata Format')}</h2>
          <div class="mb-10">{_('Renders a metadata table with custom padding, alignment, background, and striping.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto">
              <format-metadata 
                value={metadata} 
                padding="10" 
                align="center" 
                background-theme="bg-1" 
                stripe-theme="bg-2" 
                format 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-metadata value={{ created_at: '2023-01-01', updated_at: '2023-12-31', author_name: 'John Doe' }} padding="10" align="center" background-theme="bg-1" stripe-theme="bg-2" format />
            `}
          </ide-code>

          <!-- Bordered Metadata Format -->
          <a name="borderedMetadata"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Bordered Metadata Format')}</h2>
          <div class="mb-10">{_('Renders a metadata table with a border-top and additional styling.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto">
              <format-metadata 
                value={metadata} 
                padding="10" 
                align="center" 
                background-theme="bg-1" 
                stripe-theme="bg-2" 
                border-theme="black" 
                format 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-metadata value={{ created_at: '2023-01-01', updated_at: '2023-12-31', author_name: 'John Doe' }} padding="10" align="center" background-theme="bg-1" stripe-theme="bg-2" border-theme="black" format />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/list.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('List')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/number.html">
              {_('Number')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>