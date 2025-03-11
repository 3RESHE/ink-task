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
<link rel="import" type="component" href="@stackpress/ink-ui/field/textlist.ink" name="field-textlist" />

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
    { label: 'Textlist' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (value) => console.log('Updated value:', value);
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
            <a class="block tx-t-0" href="#Textlist">{_('Textlist')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicTextlist">• {_('Basic Textlist Input')}</a>
              <a class="block tx-t-1" href="#styledTextlist">• {_('Styled Textlist Input')}</a>
              <a class="block tx-t-1" href="#preFilledTextlist">• {_('Pre-filled Textlist Input')}</a>
              <a class="block tx-t-1" href="#compactTextlist">• {_('Compact Textlist Input')}</a>
              <a class="block tx-t-1" href="#disabledTextlist">• {_('Disabled Textlist Input')}</a>
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

          <a name="Textlist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Textlist')}</h1>
          <ide-app title="Textlist" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Textlist from '@stackpress/ink-ui/field/textlist';
            </ide-code>
          </ide-app>

<!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-textlist>` component provides a dynamic list of text inputs that can be added or removed. Below are its props:')}</p>
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
              <table-col>{_('Name attribute for form submission (applied to each input).')}</table-col>
            </table-row>

            <table-row>
              <table-col>add</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Label for the "Add" button (defaults to "Add").')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>Array&lt;String&gt;</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial list of text values for the textlist (defaults to []).')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('CSS classes for the host element (use Ink utilities).')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (prefer Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Textlist Input -->
          <a name="basicTextlist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Textlist Input')}</h2>
          <div class="mb-10">{_('A basic textlist input with a default "Add" button and placeholder.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textlist 
                name="items" 
                placeholder="Enter an item..." 
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textlist 
              name="items" 
              placeholder="Enter an item..." 
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Styled Textlist Input -->
          <a name="styledTextlist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Textlist Input')}</h2>
          <div class="mb-10">{_('A styled textlist input with custom border, padding, and hover effects.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textlist 
                name="tasks" 
                add="Add Task" 
                placeholder="Enter a task..." 
                class="w-350 p-5 b-dashed b-t-2 c-6 tx-md tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textlist 
              name="tasks" 
              add="Add Task" 
              placeholder="Enter a task..." 
              class="w-350 p-5 b-dashed b-t-2 c-6 tx-md tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Pre-filled Textlist Input -->
          <a name="preFilledTextlist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Pre-filled Textlist Input')}</h2>
          <div class="mb-10">{_('A textlist input pre-filled with initial values and subtle styling.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textlist 
                name="todos" 
                value={["Buy groceries", "Finish project", "Call friend"]} 
                placeholder="Add another todo..." 
                class="w-300 b-solid b-t-1 c-4 transition-300 hover:b-primary" 
                style="cursor: text;"
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textlist 
              name="todos" 
              value={["Buy groceries", "Finish project", "Call friend"]} 
              placeholder="Add another todo..." 
              class="w-300 b-solid b-t-1 c-4 transition-300 hover:b-primary" 
              style="cursor: text;"
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Compact Textlist Input -->
          <a name="compactTextlist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Compact Textlist Input')}</h2>
          <div class="mb-10">{_('A compact textlist input with minimal styling and centered text inputs.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textlist 
                name="notes" 
                add="+" 
                value={["Note 1", "Note 2"]} 
                placeholder="Add a note..." 
                class="w-250 p-3 tx-center b-solid b-muted c-3" 
                style="cursor: text;"
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textlist 
              name="notes" 
              add="+" 
              value={["Note 1", "Note 2"]} 
              placeholder="Add a note..." 
              class="w-250 p-3 tx-center b-solid b-muted c-3" 
              style="cursor: text;"
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>



          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/textarea.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Textarea')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/time.html">
              {_('Time')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>