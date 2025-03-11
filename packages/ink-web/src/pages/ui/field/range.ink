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
<link rel="import" type="component" href="@stackpress/ink-ui/field/range.ink" name="field-range" />

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
    { label: 'Range' }
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
            <a class="block tx-t-0" href="#Range">{_('Range')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicRange">• {_('Basic Range Input')}</a>
              <a class="block tx-t-1" href="#rangeWithLimits">• {_('Range with Limits')}</a>
              <a class="block tx-t-1" href="#styledRange">• {_('Styled Range Input')}</a>
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

          <a name="Range"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Range')}</h1>
          <ide-app title="Range" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Range from '@stackpress/ink-ui/field/range';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-range>` component provides a range slider input for selecting a numeric value within a defined range. Below are its props:')}</p>
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
              <table-col>{_('Initial value of the range input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>min</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Minimum value (defaults to 0).')}</table-col>
            </table-row>

            <table-row>
              <table-col>max</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Maximum value (defaults to 100).')}</table-col>
            </table-row>

            <table-row>
              <table-col>step</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Step interval (defaults to 1).')}</table-col>
            </table-row>

            <table-row>
              <table-col>width</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Width of the range slider in pixels (defaults to browser default).')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom handler for change events, receiving the selected value.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with the updated numeric value.')}</table-col>
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

          <!-- Basic Range Input -->
          <a name="basicRange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Range Input')}</h2>
          <div class="mb-10">{_('A basic range input with default settings.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-range name="volume" value="50" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-range name="volume" value="50" />
          `}</ide-code>

          <!-- Range with Limits -->
          <a name="rangeWithLimits"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Range with Limits')}</h2>
          <div class="mb-10">{_('A range input with custom `min`, `max`, and `step` settings.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-range 
                name="temperature" 
                value="25" 
                min="0" 
                max="50" 
                step="5" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-range 
              name="temperature" 
              value="25" 
              min="0" 
              max="50" 
              step="5" 
            />
          `}</ide-code>

          <!-- Styled Range Input -->
          <a name="styledRange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Range Input')}</h2>
          <div class="mb-10">{_('A styled range input with custom width, dynamic styling, and smooth transitions using Ink utilities and inline styles.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-range 
                name="brightness" 
                value="75" 
                class="w-300 bg-transparent tx-t-1 h-8 c-5 transition-300" 
                style="background: linear-gradient(to right, var(--primary) 75%, var(--t-2) 75%); accent-color: var(--primary); cursor: pointer;" 
                onmouseover="this.style.boxShadow='0 2px 8px var(--t-3)'; this.style.opacity='0.9'" 
                onmouseout="this.style.boxShadow='none'; this.style.opacity='1'" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-range 
              name="brightness" 
              value="75" 
              class="w-300 bg-transparent tx-t-1 h-8 c-5 transition-300" 
              style="background: linear-gradient(to right, var(--primary) 75%, var(--t-2) 75%); accent-color: var(--primary); cursor: pointer;" 
              onmouseover="this.style.boxShadow='0 2px 8px var(--t-3)'; this.style.opacity='0.9'" 
              onmouseout="this.style.boxShadow='none'; this.style.opacity='1'" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/radio.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Radio')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/rating.html">
              {_('Rating')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>