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
<link rel="import" type="component" href="@stackpress/ink-ui/field/number.ink" name="field-number" />

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
    { label: 'Number' }
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
            <a class="block tx-t-0" href="#Number">{_('Number')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicNumber">• {_('Basic Number Input')}</a>
              <a class="block tx-t-1" href="#numberWithRange">• {_('Number with Range')}</a>
              <a class="block tx-t-1" href="#formattedNumber">• {_('Formatted Number')}</a>
              <a class="block tx-t-1" href="#styledNumber">• {_('Styled Number Input')}</a>
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

          <a name="Number"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Number')}</h1>
          <ide-app title="Number" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Number from '@stackpress/ink-ui/field/number';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-number>` component enhances a number input with formatting and validation. Below are its props:')}</p>
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
              <table-col>{_('Name attribute for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial value of the number input (numeric only).')}</table-col>
            </table-row>

            <table-row>
              <table-col>min</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Minimum allowed value (numeric only).')}</table-col>
            </table-row>

            <table-row>
              <table-col>max</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Maximum allowed value (numeric only).')}</table-col>
            </table-row>

            <table-row>
              <table-col>step</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Step interval for increment/decrement (numeric).')}</table-col>
            </table-row>

            <table-row>
              <table-col>separator</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Thousands separator (defaults to ",").')}</table-col>
            </table-row>

            <table-row>
              <table-col>decimal</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Decimal separator (defaults to ".").')}</table-col>
            </table-row>

            <table-row>
              <table-col>absolute</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Forces absolute values (defaults to false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom handler for change events (numeric only).')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with the formatted numeric value.')}</table-col>
            </table-row>

            <table-row>
              <table-col>background</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color for the host element (prefer `bg-*` utilities).')}</table-col>
            </table-row>

            <table-row>
              <table-col>border</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Border color for the host element (prefer `b-*` utilities).')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean/String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Toggles error state (Boolean) or sets error message (String) for styling/validation.')}</table-col>
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

            <table-row>
              <table-col>autocomplete</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Controls browser autofill behavior.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pattern</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regex pattern for HTML5 validation (numeric).')}</table-col>
            </table-row>

            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text for the input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the input read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the input as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>type</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Input type (defaults to "number" for numeric input only).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Number Input -->
          <a name="basicNumber"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Number Input')}</h2>
          <div class="mb-10">{_('A simple number input accepting only numeric values.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-number name="quantity" value="1234" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-number name="quantity" value="1234" />
          `}</ide-code>

          <!-- Number with Range -->
          <a name="numberWithRange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Number with Range')}</h2>
          <div class="mb-10">{_('A number input with `min`, `max`, and `step` constraints, accepting only numeric values.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-number name="price" value="50" min="0" max="100" step="5" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-number name="price" value="50" min="0" max="100" step="5" />
          `}</ide-code>

          <!-- Formatted Number -->
          <a name="formattedNumber"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Formatted Number')}</h2>
          <div class="mb-10">{_('A number input with custom `separator` and `decimal` formatting, accepting only numeric values.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-number name="amount" value="1234567.89" separator="." decimal="," />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-number name="amount" value="1234567.89" separator="." decimal="," />
          `}</ide-code>

          <!-- Styled Number Input -->
          <a name="styledNumber"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Number Input')}</h2>
          <div class="mb-10">{_('A styled number input with error state, background, border, and Ink utilities.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-number 
                name="quantity" 
                value="1234" 
                error
                class="w-200 bg-muted b-primary c-5 p-5 transition-300" 
                style="box-shadow: 0 2px 6px var(--t-1);"
                onmouseover="this.style.boxShadow='0 4px 12px var(--t-3)'" 
                onmouseout="this.style.boxShadow='0 2px 6px var(--t-1)'" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-number 
              name="quantity" 
              value="1234" 
              error
              class="w-200 bg-muted b-primary c-5 p-5 transition-300" 
              style="box-shadow: 0 2px 6px var(--t-1);"
              onmouseover="this.style.boxShadow='0 4px 12px var(--t-3)'" 
              onmouseout="this.style.boxShadow='0 2px 6px var(--t-1)'" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/metadata.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Metadata')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/password.html">
              {_('Password')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>