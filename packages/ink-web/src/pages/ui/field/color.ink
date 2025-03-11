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
<link rel="import" type="component" href="@stackpress/ink-ui/field/color.ink" name="field-color" />

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
    { label: 'Color' }
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
            <a class="block tx-t-0" href="#Color">{_('Color')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicColor">• {_('Basic Color')}</a>
              <a class="block tx-t-1" href="#colorWithValue">• {_('Color with Value')}</a>
              <a class="block tx-t-1" href="#requiredColor">• {_('Required Color')}</a>
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

          <a name="Color"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Color')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full mw-full bg-black tx-white" lang="js" trim>
              import Color from '@stackpress/ink-ui/field/color';
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
              <table-col>{_('Sets autocomplete behavior (e.g., "off"). Synced to both inputs.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, disables the color picker and text input.')}</table-col>
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
              <table-col>{_('If true, makes both inputs read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, marks both inputs as required for form validation.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial color value (e.g., "#ff0000"). Synced between picker and text input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display style of the host (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
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

          <!-- Basic Color -->
          <a name="basicColor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Color')}</h2>
          <div class="mb-10">{_('A simple color picker with a text input.')}</div>
          <div class="basis-calc-third-10 lg-basis-calc-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex align-center justify-center">
              <field-color name="color" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black tx-white" trim detab={4}>{`
            <field-color name="color" />
          `}</ide-code>

          <!-- Color with Value -->
          <a name="colorWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Color with Value')}</h2>
          <div class="mb-10">{_('A color picker with an initial value.')}</div>
          <div class="basis-calc-third-10 lg-basis-calc-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex align-center justify-center">
              <field-color name="color" value="#ff0000" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black tx-white" trim detab={4}>{`
            <field-color name="color" value="#ff0000" />
          `}</ide-code>

          <!-- Required Color -->
          <a name="requiredColor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Required Color')}</h2>
          <div class="mb-10">{_('A color field marked as required for form validation.')}</div>
          <div class="basis-calc-third-10 lg-basis-calc-half-10 md-basis-full">
            <div class="bg-t-3 h-120 flex align-center justify-center">
              <field-color name="color" required class="w-200" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black tx-white" trim detab={4}>{`
            <field-color name="color" required class="w-200" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/checkbox.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Checkbox')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/country.html">
              {_('Country')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>