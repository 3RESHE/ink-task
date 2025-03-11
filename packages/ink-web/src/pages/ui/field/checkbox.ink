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
<link rel="import" type="component" href="@stackpress/ink-ui/field/checkbox.ink" name="field-checkbox" />

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
    { label: 'Checkbox' }
  ];
  const handleClick = (e) => console.log('Clicked:', e.target.checked);
  const logValue = (e) => console.log('Value:', e.target.checked ? e.target.value : 'unchecked');
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
            <a class="block tx-t-0" href="#Checkbox">{_('Checkbox')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicCheckbox">• {_('Basic Checkbox')}</a>
              <a class="block tx-t-1" href="#checkedCheckbox">• {_('Checked Checkbox')}</a>
              <a class="block tx-t-1" href="#disabledCheckbox">• {_('Disabled Checkbox')}</a>
              <a class="block tx-t-1" href="#styledCheckbox">• {_('Styled Checkbox')}</a>
              <a class="block tx-t-1" href="#checkboxWithHandler">• {_('Checkbox with Handler')}</a>
              <a class="block tx-t-1" href="#requiredCheckbox">• {_('Required Checkbox')}</a>
              <a class="block tx-t-1" href="#checkboxWithValue">• {_('Checkbox with Value')}</a>
              <a class="block tx-t-1" href="#shapeColorCombo">• {_('Shape and Color Combo')}</a>
              <a class="block tx-t-1" href="#multipleCheckboxes">• {_('Multiple Checkboxes in Form')}</a>
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

          <a name="Checkbox"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Checkbox')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Checkbox from '@stackpress/ink-ui/field/checkbox';
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
              <table-col>{_('Text displayed next to the checkbox. Defaults to an empty string.')}</table-col>
            </table-row>

            <table-row>
              <table-col>checked</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, the checkbox is initially checked.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, disables the checkbox.')}</table-col>
            </table-row>

            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, makes the checkbox read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, marks the checkbox as required for form validation.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Value submitted when the checkbox is checked.')}</table-col>
            </table-row>

            <table-row>
              <table-col>click</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom click event handler for the checkbox.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display style of the host (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>orange</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, applies an orange color variant to the checkbox.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, applies rounded styling to the checkbox.')}</table-col>
            </table-row>

            <table-row>
              <table-col>square</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, applies square styling to the checkbox (assumed supported by setStyles).')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes for the host element (e.g., "mr-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the host element (e.g., "margin: 10px").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Checkbox -->
          <a name="basicCheckbox"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Checkbox')}</h2>
          <div class="mb-10">{_('A simple checkbox with a label.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-checkbox name="active" label="Active" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-checkbox name="active" label="Active" />
          `}</ide-code>

          <!-- Checked Checkbox -->
          <a name="checkedCheckbox"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Checked Checkbox')}</h2>
          <div class="mb-10">{_('A checkbox that is initially checked.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-checkbox name="agree" label="I Agree" checked />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-checkbox name="agree" label="I Agree" checked />
          `}</ide-code>

          <!-- Disabled Checkbox -->
          <a name="disabledCheckbox"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled Checkbox')}</h2>
          <div class="mb-10">{_('A disabled checkbox that cannot be interacted with.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-checkbox name="terms" label="Accept Terms" disabled />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-checkbox name="terms" label="Accept Terms" disabled />
          `}</ide-code>

          <!-- Styled Checkbox -->
          <a name="styledCheckbox"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Checkbox')}</h2>
          <div class="mb-10">{_('A checkbox with custom styling, such as color and shape variants.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-checkbox name="subscribe" label="Subscribe" orange rounded />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-checkbox name="subscribe" label="Subscribe" orange rounded />
          `}</ide-code>

          <!-- Checkbox with Handler -->
          <a name="checkboxWithHandler"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Checkbox with Handler')}</h2>
          <div class="mb-10">{_('A checkbox with a custom click event handler.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-checkbox name="notify" label="Notify Me" click={handleClick} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleClick = (e) => console.log('Clicked:', e.target.checked);
            </script>
            <field-checkbox name="notify" label="Notify Me" click={handleClick} />
          `}</ide-code>

          <!-- Required Checkbox -->
          <a name="requiredCheckbox"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Required Checkbox')}</h2>
          <div class="mb-10">{_('A checkbox marked as required for form submission.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-checkbox name="consent" label="Consent Required" required />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-checkbox name="consent" label="Consent Required" required />
          `}</ide-code>

          <!-- Checkbox with Value -->
          <a name="checkboxWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Checkbox with Value')}</h2>
          <div class="mb-10">{_('A checkbox with a specific value logged on change.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center">
              <field-checkbox name="feature" label="Enable Feature" value="feature_on" click={logValue} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const logValue = (e) => console.log('Value:', e.target.checked ? e.target.value : 'unchecked');
            </script>
            <field-checkbox name="feature" label="Enable Feature" value="feature_on" click={logValue} />
          `}</ide-code>

          <!-- Shape and Color Combo -->
          <a name="shapeColorCombo"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Shape and Color Combo')}</h2>
          <div class="mb-10">{_('A checkbox combining different shapes and colors.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center gap-20">
              <field-checkbox name="option1" label="Rounded Orange" orange rounded />
              <field-checkbox name="option2" label="Square Default" square />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-checkbox name="option1" label="Rounded Orange" orange rounded />
            <field-checkbox name="option2" label="Square Default" square />
          `}</ide-code>

          <!-- Multiple Checkboxes in Form -->
          <a name="multipleCheckboxes"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Multiple Checkboxes in Form')}</h2>
          <div class="mb-10">{_('A group of checkboxes in a form with varied states and styles.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex justify-center align-center flex-col gap-10">
              <field-checkbox name="hobbies" label="Reading" value="reading" checked orange rounded />
              <field-checkbox name="hobbies" label="Gaming" value="gaming" />
              <field-checkbox name="hobbies" label="Traveling" value="traveling" disabled />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-checkbox name="hobbies" label="Reading" value="reading" checked orange rounded />
            <field-checkbox name="hobbies" label="Gaming" value="gaming" />
            <field-checkbox name="hobbies" label="Traveling" value="traveling" disabled />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/fieldset.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Fieldset')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/color.html">
              {_('Color')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>