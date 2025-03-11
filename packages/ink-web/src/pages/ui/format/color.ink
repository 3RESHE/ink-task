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
<link rel="import" type="component" href="@stackpress/ink-ui/format/color.ink" name="format-color" />

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
              <a class="block tx-t-1" href="#swatchAndText">• {_('Swatch and Text')}</a>
              <a class="block tx-t-1" href="#swatchOnly">• {_('Swatch Only')}</a>
              <a class="block tx-t-1" href="#textOnly">• {_('Text Only')}</a>
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
          <ide-app title="Color" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Color from '@stackpress/ink-ui/format/color';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-color>` component displays a color value as a swatch, text, or both. Use `box-sm`, `box-md`, or `box-lg` to change the size of the color swatch, and `text-sm`, `text-md`, or `text-lg` to adjust the text size.')}</p>
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
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('The color value to display (e.g., "red", "#FF0000"). Used as the background color of the swatch and text content if `text` is enabled.')}</table-col>
            </table-row>

            <table-row>
              <table-col>box</table-col>
              <table-col>Object/Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, displays a color swatch. If an object or modifier (e.g., `box-md`), sets the swatch size. Defaults to false unless `text` is enabled.')}</table-col>
            </table-row>

            <table-row>
              <table-col>text</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, displays the color value as text. If a modifier (e.g., `text-md`), sets the text size. Defaults to true if `box` is enabled.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for styling (e.g., "p-4").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Swatch and Text -->
          <a name="swatchAndText"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Swatch and Text')}</h2>
          <div class="mb-10">{_('Displays both a color swatch and the color value as text in default and medium sizes.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-color value="red" class="p-4" /><br />
              <format-color box-md text-md value="red" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color value="red" class="p-4" /><br />
            <format-color box-md text-md value="red" class="p-4" />
          `}</ide-code>

          <!-- Swatch Only -->
          <a name="swatchOnly"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Swatch Only')}</h2>
          <div class="mb-10">{_('Displays only the color swatch, without text, in default and large sizes.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-color box value="blue" text={false} class="p-4" /><br />
              <format-color box-lg value="blue" text={false} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color box value="blue" text={false} class="p-4" /><br />
            <format-color box-lg value="blue" text={false} class="p-4" />
          `}</ide-code>

          <!-- Text Only -->
          <a name="textOnly"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Text Only')}</h2>
          <div class="mb-10">{_('Displays only the color value as text, without a swatch, in default and small sizes.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-color value="green" box={false} text class="p-4" /><br />
              <format-color value="green" box={false} text-sm class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color value="green" box={false} text class="p-4" /><br />
            <format-color value="green" box={false} text-sm class="p-4" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/index.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Formats Index')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/country.html">
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