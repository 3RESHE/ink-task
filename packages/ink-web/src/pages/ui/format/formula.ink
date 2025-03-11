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
<link rel="import" type="component" href="@stackpress/ink-ui/format/formula.ink" name="format-formula" />

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
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Formula' }
  ];
  const variables = { x: 10, y: 20 };
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
            <a class="block tx-t-0" href="#Formula">{_('Formula')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#multiplicationFormula">• {_('Multiplication Formula')}</a>
              <a class="block tx-t-1" href="#divisionFormula">• {_('Division Formula')}</a>
              <a class="block tx-t-1" href="#additionFormula">• {_('Addition Formula')}</a>
              <a class="block tx-t-1" href="#subtractionFormula">• {_('Subtraction Formula')}</a>
              <a class="block tx-t-1" href="#indexFormula">• {_('Index-Style Formula')}</a>
              <a class="block tx-t-1" href="#smallFormula">• {_('Small Formula Display')}</a>
              <a class="block tx-t-1" href="#boldFormula">• {_('Bold Formula Display')}</a>
              <a class="block tx-t-1" href="#coloredFormula">• {_('Colored Formula Display')}</a>
              <a class="block tx-t-1" href="#blockFormula">• {_('Block Formula Display')}</a>
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

          <a name="Formula"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Formula')}</h1>
          <ide-app title="Formula" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Formula from '@stackpress/ink-ui/format/formula';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-formula>` component evaluates a mathematical formula using MDAS (Multiplication, Division, Addition, Subtraction) operations by replacing `{this}` with the `value` prop and `{key}` placeholders with values from the `data` prop, displaying the numeric result within an equation context. Unmatched placeholders are replaced with `0`, and invalid expressions return `0`. Use Ink utilities via the `class` prop for responsive styling, including `tx-*` classes for font sizes (e.g., `tx-xs` for 10px, `tx-md` for 14px). Default font-size is inherited.')}</p>
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
              <table-col>value</table-col>
              <table-col>Number/String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('The value to replace `{this}` in the formula (converted to a number, defaults to 0 if invalid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>formula</table-col>
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('The mathematical expression to evaluate, using `{this}` and `{key}` placeholders with MDAS operations (e.g., "{x} * {this} / {y} + {z} - 5").')}</table-col>
            </table-row>

            <table-row>
              <table-col>data</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('An object with key-value pairs to replace `{key}` placeholders (values converted to numbers, defaults to 0 if invalid). Defaults to {}.')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, applies bold font weight to the result. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the text color of the result (e.g., "var(--primary)", "#FF0000"). Defaults to inherited.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display style (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the font size of the result (e.g., "12px", "1rem"). Defaults to inherited.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for responsive styling (e.g., "p-4", "tx-md", "md:mr-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (use `class` with Ink utilities instead).')}</table-col>
            </table-row>

            <table-row>
              <table-col>Other attributes</table-col>
              <table-col>-</table-col>
              <table-col>No</table-col>
              <table-col>{_('Additional HTML attributes are passed to the underlying element.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Multiplication Formula -->
          <a name="multiplicationFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Multiplication Formula')}</h2>
          <div class="mb-10">{_('Evaluates a multiplication formula `{this} * 2` with a value of 5, resulting in 10.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              5 * 2 = <format-formula value="5" formula="{this} * 2" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              5 * 2 = <format-formula value="5" formula="{this} * 2" class="p-4" />
            </div>
          `}</ide-code>

          <!-- Division Formula -->
          <a name="divisionFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Division Formula')}</h2>
          <div class="mb-10">{_('Evaluates a division formula `{this} / 2` with a value of 10, resulting in 5.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              10 / 2 = <format-formula value="10" formula="{this} / 2" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              10 / 2 = <format-formula value="10" formula="{this} / 2" class="p-4" />
            </div>
          `}</ide-code>

          <!-- Addition Formula -->
          <a name="additionFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Addition Formula')}</h2>
          <div class="mb-10">{_('Evaluates an addition formula `{this} + 3` with a value of 7, resulting in 10.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              7 + 3 = <format-formula value="7" formula="{this} + 3" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              7 + 3 = <format-formula value="7" formula="{this} + 3" class="p-4" />
            </div>
          `}</ide-code>

          <!-- Subtraction Formula -->
          <a name="subtractionFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Subtraction Formula')}</h2>
          <div class="mb-10">{_('Evaluates a subtraction formula `{this} - 3` with a value of 10, resulting in 7.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              10 - 3 = <format-formula value="10" formula="{this} - 3" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              10 - 3 = <format-formula value="10" formula="{this} - 3" class="p-4" />
            </div>
          `}</ide-code>

          <!-- Index-Style Formula -->
          <a name="indexFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Index-Style Formula')}</h2>
          <div class="mb-10">{_('Matches the index example, evaluating `{x} + {this} + {y}` with `value=29`, `x=10`, `y=20`, resulting in 59 (bold).')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              10 + 29 + 20 = <format-formula value="29" formula="{x} + {this} + {y}" data={variables} bold />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              10 + 29 + 20 = <format-formula value="29" formula="{x} + {this} + {y}" data='{"x": 10, "y": 20}' bold />
            </div>
          `}</ide-code>

          <!-- Small Formula Display -->
          <a name="smallFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Small Formula Display')}</h2>
          <div class="mb-10">{_('Displays the result with a smaller font size using `tx-xs` (10px).')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              3 * 3 = <format-formula value="3" formula="{this} * 3" class="p-4 tx-xs b-solid bt-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              3 * 3 = <format-formula value="3" formula="{this} * 3" class="p-4 tx-xs b-solid bt-1" />
            </div>
          `}</ide-code>

          <!-- Bold Formula Display -->
          <a name="boldFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Bold Formula Display')}</h2>
          <div class="mb-10">{_('Displays the result with bold text and a border.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              4 * 4 = <format-formula value="4" formula="{this} * 4" bold class="p-4 b-solid bt-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              4 * 4 = <format-formula value="4" formula="{this} * 4" bold class="p-4 b-solid bt-2 c-4" />
            </div>
          `}</ide-code>

          <!-- Colored Formula Display -->
          <a name="coloredFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colored Formula Display')}</h2>
          <div class="mb-10">{_('Displays the result with a custom text color using the `color` prop.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              6 * 5 = <format-formula 
                value="6" 
                formula="{this} * 5" 
                color="var(--primary)" 
                class="p-4 tx-center bg-t-1 rounded" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              6 * 5 = <format-formula 
                value="6" 
                formula="{this} * 5" 
                color="var(--primary)" 
                class="p-4 tx-center bg-t-1 rounded" 
              />
            </div>
          `}</ide-code>

          <!-- Block Formula Display -->
          <a name="blockFormula"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Block Formula Display')}</h2>
          <div class="mb-10">{_('Displays the result as a block element with centered text and a background.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              8 * 6 = <format-formula 
                value="8" 
                formula="{this} * 6" 
                display="block" 
                class="p-4 tx-center bg-t-2 rounded" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <div class="bg-t-3 h-120 flex flex-center">
              8 * 6 = <format-formula 
                value="8" 
                formula="{this} * 6" 
                display="block" 
                class="p-4 tx-center bg-t-2 rounded" 
              />
            </div>
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/email.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Email')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/html.html">
              {_('HTML')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>