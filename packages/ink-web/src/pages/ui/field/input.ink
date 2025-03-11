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
    { label: 'Input' }
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
            <a class="block tx-t-0" href="#Input">{_('Input')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicInput">• {_('Basic Text Input')}</a>
              <a class="block tx-t-1" href="#fileInput">• {_('File Input')}</a>
              <a class="block tx-t-1" href="#checkboxInput">• {_('Checkbox Input')}</a>
              <a class="block tx-t-1" href="#numberInput">• {_('Number Input')}</a>
              <a class="block tx-t-1" href="#inputWithValidation">• {_('Input with Validation')}</a>
              <a class="block tx-t-1" href="#inputWithChange">• {_('Input with Change Event')}</a>
              <a class="block tx-t-1" href="#inputWithUpdate">• {_('Input with Update Callback')}</a>
              <a class="block tx-t-1" href="#styledInput">• {_('Styled Input')}</a>
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

          <a name="Input"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Input')}</h1>
          <ide-app title="Input" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Input from '@stackpress/ink-ui/field/input';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-input>` component is a flexible wrapper for native `<input>` elements, supporting various types and attributes. Here’s how its props work:')}</p>
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
              <table-col>type</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the input type (e.g., "text", "file", "checkbox", "number"). Defaults to "text" if unset.')}</table-col>
            </table-row>

            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission, tying the input to form data.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial value of the input. For "checkbox" or "radio", use "checked" instead.')}</table-col>
            </table-row>

            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Hint text shown when the input is empty, guiding user input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>accept</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('File types allowed for "file" inputs (e.g., "image/*"). Ignored for other types.')}</table-col>
            </table-row>

            <table-row>
              <table-col>autocomplete</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Controls browser autofill behavior (e.g., "on", "off", "email").')}</table-col>
            </table-row>

            <table-row>
              <table-col>checked</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets initial checked state for "checkbox" or "radio" inputs.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the input, preventing interaction.')}</table-col>
            </table-row>

            <table-row>
              <table-col>max</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Maximum value for numeric or date inputs (e.g., "100").')}</table-col>
            </table-row>

            <table-row>
              <table-col>min</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Minimum value for numeric or date inputs (e.g., "0").')}</table-col>
            </table-row>

            <table-row>
              <table-col>multiple</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Allows multiple file selections for "file" inputs.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pattern</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regex pattern for input validation (e.g., "[0-9]{3}").')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the input read-only, allowing viewing but not editing.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the input as required for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>step</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Increment step for numeric inputs (e.g., "0.1").')}</table-col>
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
              <table-col>{_('Callback with the current input value after changes.')}</table-col>
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

          <!-- Basic Text Input -->
          <a name="basicInput"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Text Input')}</h2>
          <div class="mb-10">{_('A simple text input with a name and placeholder, ideal for basic form fields like usernames or comments.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input name="text" placeholder="Enter text" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-input name="text" placeholder="Enter text" />
          `}</ide-code>

          <!-- File Input -->
          <a name="fileInput"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('File Input')}</h2>
          <div class="mb-10">{_('A file input with `accept` and `multiple`, allowing selection of multiple images for upload.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input type="file" name="files" accept="image/*" multiple />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-input type="file" name="files" accept="image/*" multiple />
          `}</ide-code>

          <!-- Checkbox Input -->
          <a name="checkboxInput"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Checkbox Input')}</h2>
          <div class="mb-10">{_('A checkbox with an initial checked state, useful for toggles or boolean form options.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input type="checkbox" name="agree" checked />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-input type="checkbox" name="agree" checked />
          `}</ide-code>

          <!-- Number Input -->
          <a name="numberInput"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Number Input')}</h2>
          <div class="mb-10">{_('A numeric input with `min`, `max`, and `step`, perfect for controlled ranges like quantities.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input type="number" name="quantity" min="0" max="100" step="5" value="10" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-input type="number" name="quantity" min="0" max="100" step="5" value="10" />
          `}</ide-code>

          <!-- Input with Validation -->
          <a name="inputWithValidation"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Input with Validation')}</h2>
          <div class="mb-10">{_('A text input with `pattern` and `required`, enforcing a three-digit format (e.g., "123").')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input type="text" name="code" pattern="[0-9]{3}" required placeholder="Enter 3 digits" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-input type="text" name="code" pattern="[0-9]{3}" required placeholder="Enter 3 digits" />
          `}</ide-code>

          <!-- Input with Change Event -->
          <a name="inputWithChange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Input with Change Event')}</h2>
          <div class="mb-10">{_('Logs changes with the `change` prop, capturing user input for real-time feedback or validation.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input name="text" change={handleChange} placeholder="Type here" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Change event:', e.target.value);
            </script>
            <field-input name="text" change={handleChange} placeholder="Type here" />
          `}</ide-code>

          <!-- Input with Update Callback -->
          <a name="inputWithUpdate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Input with Update Callback')}</h2>
          <div class="mb-10">{_('Uses `update` to track the current value, ideal for syncing state or triggering actions.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input name="text" update={handleUpdate} placeholder="Type here" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpdate = (value) => console.log('Updated value:', value);
            </script>
            <field-input name="text" update={handleUpdate} placeholder="Type here" />
          `}</ide-code>

          <!-- Styled Input -->
          <a name="styledInput"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Input')}</h2>
          <div class="mb-10">{_('A minimalist styled input with a wide layout, soft border, and hover effect via `class` and `style`.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-input 
                name="text" 
                class="w-300 bg-white tx-t-1 rounded-5" 
                style="border: 1px solid #e0e0e0; padding: 8px; transition: border-color 0.3s ease;" 
                onmouseover="this.style.borderColor='#888888'" 
                onmouseout="this.style.borderColor='#e0e0e0'" 
                placeholder="Enter text" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-input 
              name="text" 
              class="w-300 bg-white tx-t-1 rounded-5" 
              style="border: 1px solid #e0e0e0; padding: 8px; transition: border-color 0.3s ease;" 
              onmouseover="this.style.borderColor='#888888'" 
              onmouseout="this.style.borderColor='#e0e0e0'" 
              placeholder="Enter text" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/filelist.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Filelist')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/knob.html">
              {_('Knob')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>