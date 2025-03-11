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
<link rel="import" type="component" href="@stackpress/ink-ui/field/datetime.ink" name="field-datetime" />

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
    { label: 'Datetime' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (datetime) => console.log('Updated datetime:', datetime);
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
            <a class="block tx-t-0" href="#Datetime">{_('Datetime')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicDatetime">• {_('Basic Datetime (name)')}</a>
              <a class="block tx-t-1" href="#datetimeWithValue">• {_('Datetime with Value')}</a>
              <a class="block tx-t-1" href="#disabledDatetime">• {_('Disabled Datetime')}</a>
              <a class="block tx-t-1" href="#readonlyDatetime">• {_('Readonly Datetime')}</a>
              <a class="block tx-t-1" href="#requiredDatetime">• {_('Required Datetime')}</a>
              <a class="block tx-t-1" href="#autocompleteDatetime">• {_('Autocomplete Datetime')}</a>
              <a class="block tx-t-1" href="#patternDatetime">• {_('Pattern Datetime')}</a>
              <a class="block tx-t-1" href="#changeDatetime">• {_('Datetime with Change')}</a>
              <a class="block tx-t-1" href="#updateDatetime">• {_('Datetime with Update')}</a>
              <a class="block tx-t-1" href="#styledDatetime">• {_('Styled Datetime (class, style)')}</a>
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

          <a name="Datetime"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Datetime')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Datetime from '@stackpress/ink-ui/field/datetime';
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
              <table-col>autocomplete</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets autocomplete behavior (e.g., "off").')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, disables the datetime input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pattern</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Validation pattern, though less relevant for type="datetime-local".')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, makes the datetime input read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, marks the datetime input as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String | Date</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial datetime value (e.g., "2025-03-07T14:30:00" or Date object). Normalized to "YYYY-MM-DDTHH:mm:ss".')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom change event handler, receives the event.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with normalized datetime string (e.g., "2025-03-07T14:30:00").')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes for the host element (e.g., "w-200").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the host element (e.g., "border: 2px solid blue").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Datetime (name) -->
          <a name="basicDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Datetime (name)')}</h2>
          <div class="mb-10">{_('A simple datetime picker with a form name.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" />
          `}</ide-code>

          <!-- Datetime with Value -->
          <a name="datetimeWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Datetime with Value')}</h2>
          <div class="mb-10">{_('A datetime picker with an initial value.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" value="2025-03-07T14:30:00" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" value="2025-03-07T14:30:00" />
          `}</ide-code>

          <!-- Disabled Datetime -->
          <a name="disabledDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled Datetime')}</h2>
          <div class="mb-10">{_('A disabled datetime picker with a value.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" value="2025-03-07T14:30:00" disabled />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" value="2025-03-07T14:30:00" disabled />
          `}</ide-code>

          <!-- Readonly Datetime -->
          <a name="readonlyDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Readonly Datetime')}</h2>
          <div class="mb-10">{_('A read-only datetime picker with a value.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" value="2025-03-07T14:30:00" readonly />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" value="2025-03-07T14:30:00" readonly />
          `}</ide-code>

          <!-- Required Datetime -->
          <a name="requiredDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Required Datetime')}</h2>
          <div class="mb-10">{_('A datetime picker marked as required.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" required />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" required />
          `}</ide-code>

          <!-- Autocomplete Datetime -->
          <a name="autocompleteDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Autocomplete Datetime')}</h2>
          <div class="mb-10">{_('A datetime picker with autocomplete disabled.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" autocomplete="off" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" autocomplete="off" />
          `}</ide-code>

          <!-- Pattern Datetime -->
          <a name="patternDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Pattern Datetime')}</h2>
          <div class="mb-10">{_('A datetime picker with a pattern (though less effective for type="datetime-local").')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" pattern="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" pattern="\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}" />
          `}</ide-code>

          <!-- Datetime with Change -->
          <a name="changeDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Datetime with Change')}</h2>
          <div class="mb-10">{_('A datetime picker with a custom change handler.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" change={handleChange} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Change event:', e.target.value);
            </script>
            <field-datetime name="datetime" change={handleChange} />
          `}</ide-code>

          <!-- Datetime with Update -->
          <a name="updateDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Datetime with Update')}</h2>
          <div class="mb-10">{_('A datetime picker with an update callback.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" update={handleUpdate} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpdate = (datetime) => console.log('Updated datetime:', datetime);
            </script>
            <field-datetime name="datetime" update={handleUpdate} />
          `}</ide-code>

          <!-- Styled Datetime (class, style) -->
          <a name="styledDatetime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Datetime (class, style)')}</h2>
          <div class="mb-10">{_('A styled datetime picker with custom class and inline styles.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-datetime name="datetime" value="2025-03-07T14:30:00" class="w-250 b-solid b-primary" style="padding: 5px;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-datetime name="datetime" value="2025-03-07T14:30:00" class="w-250 b-solid b-primary" style="padding: 5px;" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/date.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Date')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/editor.html">
              {_('Editor')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>