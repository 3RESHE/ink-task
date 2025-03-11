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
<link rel="import" type="component" href="@stackpress/ink-ui/field/mask.ink" name="field-mask" />

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
    { label: 'Mask' }
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
            <a class="block tx-t-0" href="#Mask">{_('Mask')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicMask">• {_('Basic Phone Mask')}</a>
              <a class="block tx-t-1" href="#aliasMask">• {_('Alias Mask (Date)')}</a>
              <a class="block tx-t-1" href="#regexMask">• {_('Regex Mask')}</a>
              <a class="block tx-t-1" href="#numericMask">• {_('Numeric Input Mask')}</a>
              <a class="block tx-t-1" href="#maskWithPlaceholder">• {_('Mask with Placeholder')}</a>
              <a class="block tx-t-1" href="#maskWithValidation">• {_('Mask with Validation')}</a>
              <a class="block tx-t-1" href="#maskWithChange">• {_('Mask with Change Event')}</a>
              <a class="block tx-t-1" href="#maskWithUpdate">• {_('Mask with Update Callback')}</a>
              <a class="block tx-t-1" href="#maskWithError">• {_('Mask with Error Handling')}</a>
              <a class="block tx-t-1" href="#styledMask">• {_('Styled Mask')}</a>
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

          <a name="Mask"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Mask')}</h1>
          <ide-app title="Mask" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Mask from '@stackpress/ink-ui/field/mask';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-mask>` component enhances inputs with custom masks using the `Inputmask` library. Below are its props for controlling masking and input behavior:')}</p>
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
              <table-col>{_('Name attribute for form submission, linking the input to form data.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial value of the masked input (e.g., "1234567890" for a phone mask).')}</table-col>
            </table-row>

            <table-row>
              <table-col>mask</table-col>
              <table-col>String/Array</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom mask pattern (e.g., "(999) 999-9999"). Use "9" for digits, "A" for letters, etc.')}</table-col>
            </table-row>

            <table-row>
              <table-col>regex</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regex pattern for masking (e.g., "^[0-9]{4}$" for 4 digits). Overrides `mask` if set.')}</table-col>
            </table-row>

            <table-row>
              <table-col>alias</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Predefined mask alias (e.g., "phone", "date", "email"). Simplifies common formats.')}</table-col>
            </table-row>

            <table-row>
              <table-col>repeat</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Repeats the mask pattern a specified number of times.')}</table-col>
            </table-row>

            <table-row>
              <table-col>greedy</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Forces the mask to be fully completed before allowing input to proceed.')}</table-col>
            </table-row>

            <table-row>
              <table-col>numericInput</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Fills numeric masks from right to left, ideal for numbers like currency.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rightAlign</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Aligns input text to the right within the field.')}</table-col>
            </table-row>

            <table-row>
              <table-col>definitions</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom mask character definitions (e.g., { "X": "[A-Z]" }). Extends mask syntax.')}</table-col>
            </table-row>

            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Hint text shown when the input is empty, guiding user input (e.g., "(123) 456-7890").')}</table-col>
            </table-row>

            <table-row>
              <table-col>autocomplete</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Controls browser autofill behavior (e.g., "off", "tel").')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the input, preventing interaction.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pattern</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regex pattern for HTML5 validation (e.g., "[0-9]{10}"). Works alongside mask.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the input read-only, displaying the mask without edits.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the input as required for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom handler for change events, receiving the event object.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with the current masked value after changes.')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback to handle errors, receiving an error message when validation fails.')}</table-col>
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

          <!-- Basic Phone Mask -->
          <a name="basicMask"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Phone Mask')}</h2>
          <div class="mb-10">{_('A simple phone number mask using the `mask` prop, formatting input as "(999) 999-9999".')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="phone" mask="(999) 999-9999" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask name="phone" mask="(999) 999-9999" />
          `}</ide-code>

          <!-- Alias Mask (Date) -->
          <a name="aliasMask"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Alias Mask (Date)')}</h2>
          <div class="mb-10">{_('Uses the `alias` prop for a predefined date mask, formatting as "mm/dd/yyyy".')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="date" alias="datetime" mask="mm/dd/yyyy" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask name="date" alias="datetime" mask="mm/dd/yyyy" />
          `}</ide-code>

          <!-- Regex Mask -->
          <a name="regexMask"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Regex Mask')}</h2>
          <div class="mb-10">{_('Applies a regex mask with `regex`, restricting input to exactly 4 digits (e.g., "1234").')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="code" regex="^[0-9]{4}$" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask name="code" regex="^[0-9]{4}$" />
          `}</ide-code>

          <!-- Numeric Input Mask -->
          <a name="numericMask"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Numeric Input Mask')}</h2>
          <div class="mb-10">{_('A numeric mask with `numericInput` for right-to-left entry, ideal for currency or codes.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="amount" mask="9999" numericInput />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask name="amount" mask="9999" numericInput />
          `}</ide-code>

          <!-- Mask with Placeholder -->
          <a name="maskWithPlaceholder"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Mask with Placeholder')}</h2>
          <div class="mb-10">{_('Adds a `placeholder` to guide the user on the expected format of the phone mask.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="phone" mask="(999) 999-9999" placeholder="(123) 456-7890" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask name="phone" mask="(999) 999-9999" placeholder="(123) 456-7890" />
          `}</ide-code>

          <!-- Mask with Validation -->
          <a name="maskWithValidation"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Mask with Validation')}</h2>
          <div class="mb-10">{_('Combines a phone mask with `required` and `pattern` for form validation, ensuring the input matches the mask format.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="phone" mask="(999) 999-9999" required pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask name="phone" mask="(999) 999-9999" required pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" />
          `}</ide-code>

          <!-- Mask with Change Event -->
          <a name="maskWithChange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Mask with Change Event')}</h2>
          <div class="mb-10">{_('Logs changes with the `change` prop, capturing masked input for real-time feedback.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="phone" mask="(999) 999-9999" change={handleChange} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Change event:', e.target.value);
            </script>
            <field-mask name="phone" mask="(999) 999-9999" change={handleChange} />
          `}</ide-code>

          <!-- Mask with Update Callback -->
          <a name="maskWithUpdate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Mask with Update Callback')}</h2>
          <div class="mb-10">{_('Tracks masked value changes with `update`, syncing with external state.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask name="phone" mask="(999) 999-9999" update={handleUpdate} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpdate = (value) => console.log('Updated value:', value);
            </script>
            <field-mask name="phone" mask="(999) 999-9999" update={handleUpdate} />
          `}</ide-code>

          <!-- Mask with Error Handling -->
          <a name="maskWithError"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Mask with Error Handling')}</h2>
          <div class="mb-10">{_('Uses the `error` prop to handle invalid input by validating the phone number format on change.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask 
                name="phone" 
                mask="(999) 999-9999" 
                change={(e) => {
                  const value = e.target.value;
                  const isValid = /^\(\d{3}\) \d{3}-\d{4}$/.test(value);
                  if (!isValid && value.length === 14) {
                    e.target.error('Invalid phone number format. Expected: (123) 456-7890');
                  }
                }}
                error={(message) => console.log('Error:', message)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask 
              name="phone" 
              mask="(999) 999-9999" 
              change={(e) => {
                const value = e.target.value;
                const isValid = /^\(\d{3}\) \d{3}-\d{4}$/.test(value);
                if (!isValid && value.length === 14) {
                  e.target.error('Invalid phone number format. Expected: (123) 456-7890');
                }
              }}
              error={(message) => console.log('Error:', message)}
            />
          `}</ide-code>

          <!-- Styled Mask -->
          <a name="styledMask"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Mask')}</h2>
          <div class="mb-10">{_('A minimalist styled mask with a wide layout, soft border, and hover effect via `class` and `style`.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-mask 
                name="phone" 
                mask="(999) 999-9999" 
                class="w-300 bg-primary tx-t-1" 
                style="border: 1px solid #e0e0e0; padding: 8px; transition: border-color 0.3s ease;" 
                onmouseover="this.style.borderColor='#888888'" 
                onmouseout="this.style.borderColor='#e0e0e0'" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-mask 
              name="phone" 
              mask="(999) 999-9999" 
              class="w-300 bg-primary tx-t-1" 
              style="border: 1px solid #e0e0e0; padding: 8px; transition: border-color 0.3s ease;" 
              onmouseover="this.style.borderColor='#888888'" 
              onmouseout="this.style.borderColor='#e0e0e0'" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/markdown.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Markdown')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/metadata.html">
              {_('Metadata')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>