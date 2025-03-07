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
<link rel="import" type="component" href="@stackpress/ink-ui/field/date.ink" name="field-date" />

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
    { label: 'Date' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (date) => console.log('Updated date:', date);
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
            <a class="block tx-t-0" href="#Date">{_('Date')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicDate">• {_('Basic Date (name)')}</a>
              <a class="block tx-t-1" href="#dateWithValue">• {_('Date with Value')}</a>
              <a class="block tx-t-1" href="#disabledDate">• {_('Disabled Date')}</a>
              <a class="block tx-t-1" href="#readonlyDate">• {_('Readonly Date')}</a>
              <a class="block tx-t-1" href="#requiredDate">• {_('Required Date')}</a>
              <a class="block tx-t-1" href="#autocompleteDate">• {_('Autocomplete Date')}</a>
              <a class="block tx-t-1" href="#patternDate">• {_('Pattern Date')}</a>
              <a class="block tx-t-1" href="#changeDate">• {_('Date with Change')}</a>
              <a class="block tx-t-1" href="#updateDate">• {_('Date with Update')}</a>
              <a class="block tx-t-1" href="#styledDate">• {_('Styled Date (class, style)')}</a>
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

          <a name="Date"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Date')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Date from '@stackpress/ink-ui/field/date';
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
              <table-col>{_('If true, disables the date input.')}</table-col>
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
              <table-col>{_('Validation pattern, though less relevant for type="date".')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, makes the date input read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, marks the date input as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String | Date</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial date value (e.g., "2025-03-07" or Date object). Normalized to "YYYY-MM-DD".')}</table-col>
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
              <table-col>{_('Callback with normalized date string (e.g., "2025-03-07").')}</table-col>
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

          <!-- Basic Date (name) -->
          <a name="basicDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Date (name)')}</h2>
          <div class="mb-10">{_('A simple date picker with a form name.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" />
          `}</ide-code>

          <!-- Date with Value -->
          <a name="dateWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Date with Value')}</h2>
          <div class="mb-10">{_('A date picker with an initial value.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" value="2025-03-07" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" value="2025-03-07" />
          `}</ide-code>

          <!-- Disabled Date -->
          <a name="disabledDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled Date')}</h2>
          <div class="mb-10">{_('A disabled date picker with a value.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" value="2025-03-07" disabled />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" value="2025-03-07" disabled />
          `}</ide-code>

          <!-- Readonly Date -->
          <a name="readonlyDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Readonly Date')}</h2>
          <div class="mb-10">{_('A read-only date picker with a value.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" value="2025-03-07" readonly />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" value="2025-03-07" readonly />
          `}</ide-code>

          <!-- Required Date -->
          <a name="requiredDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Required Date')}</h2>
          <div class="mb-10">{_('A date picker marked as required.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" required />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" required />
          `}</ide-code>

          <!-- Autocomplete Date -->
          <a name="autocompleteDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Autocomplete Date')}</h2>
          <div class="mb-10">{_('A date picker with autocomplete disabled.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" autocomplete="off" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" autocomplete="off" />
          `}</ide-code>

          <!-- Pattern Date -->
          <a name="patternDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Pattern Date')}</h2>
          <div class="mb-10">{_('A date picker with a pattern (though less effective for type="date").')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" pattern="\d{4}-\d{2}-\d{2}" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" pattern="\\d{4}-\\d{2}-\\d{2}" />
          `}</ide-code>

          <!-- Date with Change -->
          <a name="changeDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Date with Change')}</h2>
          <div class="mb-10">{_('A date picker with a custom change handler.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" change={handleChange} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Change event:', e.target.value);
            </script>
            <field-date name="date" change={handleChange} />
          `}</ide-code>

          <!-- Date with Update -->
          <a name="updateDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Date with Update')}</h2>
          <div class="mb-10">{_('A date picker with an update callback.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" update={handleUpdate} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpdate = (date) => console.log('Updated date:', date);
            </script>
            <field-date name="date" update={handleUpdate} />
          `}</ide-code>

          <!-- Styled Date (class, style) -->
          <a name="styledDate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Date (class, style)')}</h2>
          <div class="mb-10">{_('A styled date picker with custom class and inline styles.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-date name="date" value="2025-03-07" class="w-200 b-solid b-primary" style="padding: 5px;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-date name="date" value="2025-03-07" class="w-200 b-solid b-primary" style="padding: 5px;" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/currency.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Currency')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/form/datetime.html">
              {_('Datetime')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>