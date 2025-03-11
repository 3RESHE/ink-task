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
<link rel="import" type="component" href="@stackpress/ink-ui/field/radio.ink" name="field-radio" />

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
    { label: 'Radio' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
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
            <a class="block tx-t-0" href="#Radio">{_('Radio')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicRadio">• {_('Basic Radio Group')}</a>
              <a class="block tx-t-1" href="#radioWithDefault">• {_('Radio with Default Selection')}</a>
              <a class="block tx-t-1" href="#disabledRadio">• {_('Disabled Radio Button')}</a>
              <a class="block tx-t-1" href="#styledRadio">• {_('Styled Radio Button')}</a>
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

          <a name="Radio"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Radio')}</h1>
          <ide-app title="Radio" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Radio from '@stackpress/ink-ui/field/radio';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-radio>` component provides a radio button input for selecting a single option from a group. Below are its props:')}</p>
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
              <table-col>{_('Name attribute linking radio buttons in a group for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Value of the radio button, submitted when selected.')}</table-col>
            </table-row>

            <table-row>
              <table-col>checked</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the initial checked state of the radio button.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the radio button, preventing interaction.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the radio group as required (enforced at form level).')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom handler for change events, receiving the selected value.')}</table-col>
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
              <table-col>{_('Inline styles for the host element (prefer Ink utilities).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Radio Group -->
          <a name="basicRadio"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Radio Group')}</h2>
          <div class="mb-10">{_('A simple radio group with multiple options.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-radio name="option" value="yes">Yes</field-radio>
              <field-radio name="option" value="no">No</field-radio>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-radio name="option" value="yes">Yes</field-radio>
            <field-radio name="option" value="no">No</field-radio>
          `}</ide-code>

          <!-- Radio with Default Selection -->
          <a name="radioWithDefault"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Radio with Default Selection')}</h2>
          <div class="mb-10">{_('A radio group with a pre-selected option using the `checked` prop.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-radio name="choice" value="yes" checked>Yes</field-radio>
              <field-radio name="choice" value="no">No</field-radio>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-radio name="choice" value="yes" checked>Yes</field-radio>
            <field-radio name="choice" value="no">No</field-radio>
          `}</ide-code>

          <!-- Disabled Radio Button -->
          <a name="disabledRadio"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled Radio Button')}</h2>
          <div class="mb-10">{_('A radio group with a disabled option.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-radio name="status" value="active">Active</field-radio>
              <field-radio name="status" value="inactive" disabled>Inactive</field-radio>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-radio name="status" value="active">Active</field-radio>
            <field-radio name="status" value="inactive" disabled>Inactive</field-radio>
          `}</ide-code>

          <!-- Styled Radio Button -->
          <a name="styledRadio"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Radio Button')}</h2>
          <div class="mb-10">{_('A styled radio group with custom `class` and `style` props.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-radio 
                name="option" 
                value="yes" 
                label="Yes" 
                class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
                style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;" 
                onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
                onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
              />
                            <field-radio 
                name="option" 
                value="no" 
                label="No" 
                class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
                style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;" 
                onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
                onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white"  trim detab={4}>{`
    <field-radio 
        name="option" 
        value="yes" 
        label="Yes" 
        class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
        style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;" 
        onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
        onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
      />
    <field-radio 
        name="option" 
        value="no" 
        label="No" 
        class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
        style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;" 
        onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
        onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
      />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/password.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Password')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/range.html">
              {_('Range')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>