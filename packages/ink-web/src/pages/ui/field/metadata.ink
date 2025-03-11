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
<link rel="import" type="component" href="@stackpress/ink-ui/field/metadata.ink" name="field-metadata" />

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
    { icon: 'icons', label: 'Form', href: '/ink/ui/form/index.html' },
    { label: 'Metadata' }
  ];
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
              <a class="block tx-t-1" href="#basicMetadata">• {_('Basic Metadata')}</a>
              <a class="block tx-t-1" href="#metadataWithValues">• {_('Metadata with Initial Values')}</a>
              <a class="block tx-t-1" href="#customAddButton">• {_('Custom Add Button Text')}</a>
              <a class="block tx-t-1" href="#styledMetadata">• {_('Styled Metadata')}</a>
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
              import Metadata from '@stackpress/ink-ui/field/metadata';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-metadata>` component allows dynamic addition and removal of key-value pairs for form submission. Below are its props:')}</p>
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
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Base name for form submission (e.g., `metadata[key]`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>add</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text for the "Add" button. Defaults to "Add".')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial key-value pairs to populate the component. Defaults to `{}`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('CSS classes for the host element, styled via default utilities.')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the host element, overriding defaults.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Metadata -->
          <a name="basicMetadata"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Metadata')}</h2>
          <div class="mb-10">{_('A simple metadata field with default settings, allowing users to add key-value pairs.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-metadata name="metadata" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-metadata name="metadata" />
          `}</ide-code>

          <!-- Metadata with Initial Values -->
          <a name="metadataWithValues"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Metadata with Initial Values')}</h2>
          <div class="mb-10">{_('Pre-populates the metadata field with initial key-value pairs using the `value` prop.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-metadata name="metadata" value={{ "author": "John Doe", "date": "2023-10-01" }} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-metadata name="metadata" value={{ "author": "John Doe", "date": "2023-10-01" }} />
          `}</ide-code>

          <!-- Custom Add Button Text -->
          <a name="customAddButton"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Add Button Text')}</h2>
          <div class="mb-10">{_('Customizes the "Add" button text using the `add` prop.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-metadata name="metadata" add="Add New Pair" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-metadata name="metadata" add="Add New Pair" />
          `}</ide-code>

          <!-- Styled Metadata -->
          <a name="styledMetadata"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Metadata')}</h2>
          <div class="mb-10">{_('Applies custom styles to the metadata field using `class` and `style` props.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-metadata 
                name="metadata" 
                class="w-300 bg-white tx-t-1 c-10 p-15 b-solid b-t-2 transition-300 hover:b-primary" 
                style="border-color: var(--t-2); background: linear-gradient(135deg, #ffffff, #f9f9f9); box-shadow: 0 2px 6px var(--t-1);" 
                onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-3)'" 
                onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='0 2px 6px var(--t-1)'" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-metadata 
              name="metadata" 
              class="w-300 bg-white tx-t-1 c-10 p-15 b-solid b-t-2 transition-300 hover:b-primary" 
              style="border-color: var(--t-2); background: linear-gradient(135deg, #ffffff, #f9f9f9); box-shadow: 0 2px 6px var(--t-1);" 
              onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-3)'" 
              onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='0 2px 6px var(--t-1)'" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/mask.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Mask')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/number.html">
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