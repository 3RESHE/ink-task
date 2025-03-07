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
<link rel="import" type="component" href="@stackpress/ink-ui/form/control.ink" name="form-control" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="field-input" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/checkbox.ink" name="field-checkbox" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/select.ink" name="field-select" />

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
    { label: 'Control' }
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
            <a class="block tx-t-0" href="#Control">{_('Control')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicControl">• {_('Basic Control')}</a>
              <a class="block tx-t-1" href="#controlWithError">• {_('Control with Error')}</a>
              <a class="block tx-t-1" href="#controlWithoutLabel">• {_('Control without Label')}</a>
              <a class="block tx-t-1" href="#controlWithCheckbox">• {_('Control with Checkbox')}</a>
              <a class="block tx-t-1" href="#controlWithSelect">• {_('Control with Select')}</a>
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

          <a name="Control"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Control')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Control from '@stackpress/ink-ui/form/control';
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
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text for the label above the slotted content. Omitted if empty or falsy.')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Error message below the slotted content. Shown only if non-empty; sets host color to var(--error) (red).')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes applied to the host element (e.g., "py-5 tx-bold").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles applied to the host element (e.g., "border: 1px solid red").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Control -->
          <a name="basicControl"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Control')}</h2>
          <div class="mb-10">{_('A simple control with a label and an input field.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <form-control label="Email">
                <field-input name="email" placeholder="Enter your email" />
              </form-control>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-control label="Email">
              <field-input name="email" placeholder="Enter your email" />
            </form-control>
          `}</ide-code>

          <!-- Control with Error -->
          <a name="controlWithError"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Control with Error')}</h2>
          <div class="mb-10">{_('A control displaying an error message below the input.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <form-control class="py-5" label="First Name*" error="Some Error">
                <field-input name="first" placeholder="Enter your first name" error />
              </form-control>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-control class="py-5" label="First Name*" error="Some Error">
              <field-input name="first" placeholder="Enter your first name" error />
            </form-control>
          `}</ide-code>

          <!-- Control without Label -->
          <a name="controlWithoutLabel"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Control without Label')}</h2>
          <div class="mb-10">{_('A control with no label, only an input and optional error.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <form-control error="Required">
                <field-input name="phone" placeholder="Enter phone number" />
              </form-control>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-control error="Required">
              <field-input name="phone" placeholder="Enter phone number" />
            </form-control>
          `}</ide-code>

          <!-- Control with Checkbox -->
          <a name="controlWithCheckbox"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Control with Checkbox')}</h2>
          <div class="mb-10">{_('A control wrapping a checkbox with a label and error feedback.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <form-control label="Agree to Terms" error="Must agree">
                <field-checkbox name="terms" value="yes" />
              </form-control>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-control label="Agree to Terms" error="Must agree">
              <field-checkbox name="terms" value="yes" />
            </form-control>
          `}</ide-code>

          <!-- Control with Select -->
          <a name="controlWithSelect"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Control with Select')}</h2>
          <div class="mb-10">{_('A control with a dropdown select input.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <form-control label="Country" class="w-200">
                <field-select name="country">
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                </field-select>
              </form-control>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-control label="Country" class="w-200">
              <field-select name="country">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
              </field-select>
            </form-control>
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/button.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Buttons')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/form/fieldset.html">
              {_('Fieldset')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>