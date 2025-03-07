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
<link rel="import" type="component" href="@stackpress/ink-ui/field/currency.ink" name="field-currency" />

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
    { label: 'Currency' }
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
            <a class="block tx-t-0" href="#Currency">{_('Currency')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicCurrency">• {_('Basic Currency')}</a>
              <a class="block tx-t-1" href="#currencyWithValue">• {_('Currency with Value')}</a>
              <a class="block tx-t-1" href="#customPlaceholder">• {_('Custom Placeholder')}</a>
              <a class="block tx-t-1" href="#styledCurrency">• {_('Styled Currency')}</a>
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

          <a name="Currency"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Currency')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Currency from '@stackpress/ink-ui/field/currency';
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
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for hidden inputs in form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial selected currency code (e.g., "USD"). Single selection only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text shown when no currency is selected. Defaults to "Select Country" (should be "Select Currency").')}</table-col>
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

          <!-- Basic Currency -->
          <a name="basicCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Currency')}</h2>
          <div class="mb-10">{_('A simple currency selector with default placeholder.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-currency name="currency" class="relative z-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-currency name="currency" class="relative z-1" />
          `}</ide-code>

          <!-- Currency with Value -->
          <a name="currencyWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Currency with Value')}</h2>
          <div class="mb-10">{_('A currency selector with an initial selected value.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-currency name="currency" value="PHP" class="relative z-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-currency name="currency" value="PHP" class="relative z-1" />
          `}</ide-code>

          <!-- Custom Placeholder -->
          <a name="customPlaceholder"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Placeholder')}</h2>
          <div class="mb-10">{_('A currency selector with a custom placeholder text.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-currency name="currency" placeholder="Choose a Currency" class="relative z-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-currency name="currency" placeholder="Choose a Currency" class="relative z-1" />
          `}</ide-code>

          <!-- Styled Currency -->
          <a name="styledCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Currency')}</h2>
          <div class="mb-10">{_('A currency selector with custom width and styling.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <field-currency name="currency" value="EUR" class="w-200 relative z-1" style="border-color: var(--primary);" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-currency name="currency" value="EUR" class="w-200 relative z-1" style="border-color: var(--primary);" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/country.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Country')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/date.html">
              {_('Date')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>