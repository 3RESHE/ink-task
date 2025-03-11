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
<link rel="import" type="component" href="@stackpress/ink-ui/format/country.ink" name="format-country" />

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
    { label: 'Country' }
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
            <a class="block tx-t-0" href="#Country">{_('Country')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicCountry">• {_('Basic Country')}</a>
              <a class="block tx-t-1" href="#flagOnlyCountry">• {_('Flag-Only Country')}</a>
              <a class="block tx-t-1" href="#textOnlyCountry">• {_('Text-Only Country')}</a>
              <a class="block tx-t-1" href="#smallCountry">• {_('Small Country Display')}</a>
              <a class="block tx-t-1" href="#mediumCountry">• {_('Medium Country Display')}</a>
              <a class="block tx-t-1" href="#largeCountry">• {_('Large Country Display')}</a>
              <a class="block tx-t-1" href="#extraLargeCountry">• {_('Extra Large Country Display')}</a>
              <a class="block tx-t-1" href="#coloredCountry">• {_('Colored Country Display')}</a>

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

          <a name="Country"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Country')}</h1>
          <ide-app title="Country" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Country from '@stackpress/ink-ui/format/country';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-country>` component displays a country flag and/or name based on a country code. Use Ink utilities via the `class` prop for responsive styling.')}</p>
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
              <table-col>{_('The country code (e.g., "us", "ph") to display. Must match a valid code in `intl.json`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>flag</table-col>
              <table-col>Object | Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, displays the country flag. If an object, specifies sizing (e.g., `{ size: "md" }`). Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>text</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, displays the country name. Defaults to true.')}</table-col>
            </table-row>

            <table-row>
              <table-col>flag-*</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Size modifier for the flag (e.g., "sm", "md", "lg"). Sets height (default: 16px if `flag` is true).')}</table-col>
            </table-row>

            <table-row>
              <table-col>text-*</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Size modifier for the text (e.g., "sm", "md", "lg"). Sets font-size (default: inherited if `text` is true).')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, applies bold font weight to the text. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the text color (e.g., "red", "#FF0000", "var(--primary)"). Defaults to inherited.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display style (e.g., "inline-flex", "block"). Defaults to "inline-flex".')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for responsive styling (e.g., "mr-10 p-4").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Country -->
          <a name="basicCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Country')}</h2>
          <div class="mb-10">{_('A basic country display with default flag and text sizes.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country value="us" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country value="us" class="p-4" />
          `}</ide-code>

          <!-- Flag-Only Country -->
          <a name="flagOnlyCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Flag-Only Country')}</h2>
          <div class="mb-10">{_('A country display with only the flag, no name.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country flag value="jp" text={false} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country flag value="jp" text={false} class="p-4" />
          `}</ide-code>

          <!-- Text-Only Country -->
          <a name="textOnlyCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Text-Only Country')}</h2>
          <div class="mb-10">{_('A country display with only the name, no flag.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country value="fr" flag={false} text class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country value="fr" flag={false} text class="p-4" />
          `}</ide-code>

          <!-- Small Country Display -->
          <a name="smallCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Small Country Display')}</h2>
          <div class="mb-10">{_('A country display with small flag and text sizes.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country flag-xs text-xs value="it" class="p-4 b-solid b-t-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country flag-xs text-xs value="it" class="p-4 b-solid b-t-1" />
          `}</ide-code>

          <!-- Medium Country Display -->
          <a name="mediumCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Medium Country Display')}</h2>
          <div class="mb-10">{_('A country display with medium flag and text sizes, with a border.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country flag-md text-md value="es" class="p-4 b-solid b-t-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country flag-md text-md value="es" class="p-4 b-solid b-t-2 c-4" />
          `}</ide-code>

          <!-- Large Country Display -->
          <a name="largeCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Large Country Display')}</h2>
          <div class="mb-10">{_('A country display with large flag and text sizes.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country flag-lg text-lg value="de" class="p-4 mr-10" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country flag-lg text-lg value="de" class="p-4 mr-10" />
          `}</ide-code>

          <!-- Extra Large Country Display -->
          <a name="extraLargeCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Extra Large Country Display')}</h2>
          <div class="mb-10">{_('A country display with extra-large flag and text sizes, bolded.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country flag-xl text-xl bold value="br" class="p-4 b-solid b-t-3 c-6 shadow-2-4-6-8-000000" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country flag-xl text-xl bold value="br" class="p-4 b-solid b-t-3 c-6 shadow-2-4-6-8-000000" />
          `}</ide-code>

          <!-- Colored Country Display -->
          <a name="coloredCountry"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colored Country Display')}</h2>
          <div class="mb-10">{_('A country display with a custom text color and block display.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-country 
                flag-md 
                text-md 
                value="ph" 
                color="var(--primary)" 
                display="block" 
                class="p-4 tx-center bg-t-1 rounded" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-country 
              flag-md 
              text-md 
              value="ph" 
              color="var(--primary)" 
              display="block" 
              class="p-4 tx-center bg-t-1 rounded" 
            />
          `}</ide-code>


          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/color.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Color')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/currency.html">
              {_('Currency')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>