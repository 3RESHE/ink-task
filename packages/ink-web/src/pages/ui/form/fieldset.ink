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
<link rel="import" type="component" href="@stackpress/ink-ui/form/fieldset.ink" name="form-fieldset" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="field-input" />

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
    { label: 'Fieldset' }
  ];
  const sampleData = [
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Smith' }
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
            <a class="block tx-t-0" href="#Fieldset">{_('Fieldset')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicFieldset">• {_('Basic Fieldset')}</a>
              <a class="block tx-t-1" href="#multipleFieldset">• {_('Multiple Fieldset')}</a>
              <a class="block tx-t-1" href="#fieldWithErrors">• {_('Fieldset with Errors')}</a>
              <a class="block tx-t-1" href="#styledFieldset">• {_('Styled Fieldset')}</a>
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

          <a name="Fieldset"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Fieldset')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Fieldset from '@stackpress/ink-ui/form/fieldset';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>

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
            <table-head>{_('Notes')}</table-head>

            <table-row>
              <table-col>multiple</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, allows multiple rows with an "Add" button. Inputs become an empty array if undefined.')}</table-col>
            </table-row>

                <table-row>
                <table-col>inputs</table-col>
                <table-col>Object | Array&lt;Object&gt;</table-col>
                <table-col>No</table-col>
                <table-col>{_('Data for each row. Single object if multiple=false, array if multiple=true. Defaults to [{}] if invalid.')}</table-col>
                </table-row>

                <table-row>
                <table-col>errors</table-col>
                <table-col>Object | Array&lt;Object&gt;</table-col>
                <table-col>No</table-col>
                <table-col>{_('Error data per row. Matches inputs structure. Defaults to [{}] if invalid.')}</table-col>
                </table-row>


            <table-row>
              <table-col>add</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text for the "Add" button when multiple=true. Defaults to "Add".')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display style of the host (e.g., "block", "inline"). Defaults to "block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>border</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies border styles (e.g., "solid", "dashed"). Handled by Ink UI utilities.')}</table-col>
            </table-row>

            <table-row>
              <table-col>radius</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border radius (e.g., "md", "lg"). Handled by Ink UI utilities.')}</table-col>
            </table-row>

            <table-row>
              <table-col>button</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles the "Add" button (e.g., "primary", "success"). Requires multiple=true.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes for the host element (e.g., "p-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the host element (e.g., "margin: 10px").')}</table-col>
            </table-row>
          </layout-table>



          <!-- Multiple Fieldset -->
            <a name="multipleFieldset"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">{_('Multiple Fieldset')}</h2>
            <div class="mb-10">{_('A fieldset with multiple rows and an "Add" button.')}</div>

            <!-- Container with proper spacing -->
            <div class="basis-third-10 lg-basis-half-10 md-basis-full p-10">
            <div class="bg-t-3 min-h-120 flex flex-col flex-center gap-10 p-12 rounded-4">
                <form-fieldset legend="Users" multiple inputs={sampleData} add="Add User">
                <field-input name="first" placeholder="First Name" />
                <field-input name="last" placeholder="Last Name" />
                </form-fieldset>
            </div>
            </div>

            <!-- IDE Code Block -->
            <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white p-6 rounded-4" trim detab={4}>{`
            <script>
                const sampleData = [
                { first: 'John', last: 'Doe' },
                { first: 'Jane', last: 'Smith' }
                ];
            </script>
            <form-fieldset legend="Users" multiple inputs={sampleData} add="Add User">
                <field-input name="first" placeholder="First Name" />
                <field-input name="last" placeholder="Last Name" />
            </form-fieldset>
            `}</ide-code>



            <!-- Styled Fieldset -->
            <a name="styledFieldset"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Fieldset')}</h2>
            <div class="mb-10">{_('A multiple fieldset with an "Add" button to append single-input rows.')}</div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 min-h-120 flex flex-col flex-center gap-10 p-12 rounded-4">
                <form-fieldset 
                legend="Contacts" 
                multiple 
                class="p-10" 
                border="solid" 
                radius="md" 
                add="New Contact"
                >
                <field-input name="email" placeholder="Email Address" class="w-full" />
                </form-fieldset>
            </div>
            </div>
            <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-fieldset 
                legend="Contacts" 
                multiple 
                class="p-10" 
                border="solid" 
                radius="md" 
                add="New Contact"
            >
                <field-input name="email" placeholder="Email Address" class="w-full" />
            </form-fieldset>
`}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/control.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Control')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/checkbox.html">
              {_('Checkbox')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>