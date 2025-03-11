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
<link rel="import" type="component" href="@stackpress/ink-ui/format/currency.ink" name="format-currency" />

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
    { label: 'Currency' }
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
            <a class="block tx-t-0" href="#Currency">{_('Currency')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicCurrency">• {_('Basic Currency')}</a>
              <a class="block tx-t-1" href="#flagOnlyCurrency">• {_('Flag-Only Currency')}</a>
              <a class="block tx-t-1" href="#textOnlyCurrency">• {_('Text-Only Currency')}</a>
              <a class="block tx-t-1" href="#smallCurrency">• {_('Small Currency Display')}</a>
              <a class="block tx-t-1" href="#mediumCurrency">• {_('Medium Currency Display')}</a>
              <a class="block tx-t-1" href="#largeCurrency">• {_('Large Currency Display')}</a>
              <a class="block tx-t-1" href="#extraLargeCurrency">• {_('Extra Large Currency Display')}</a>
              <a class="block tx-t-1" href="#coloredCurrency">• {_('Colored Currency Display')}</a>

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

          <a name="Currency"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Currency')}</h1>
          <ide-app title="Currency" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Currency from '@stackpress/ink-ui/format/currency';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-currency>` component displays a country flag and currency name based on a currency code. Use Ink utilities via the `class` prop for responsive styling. Note: Flag sizes default to 16px and text sizes map to font-size based on Ink\'s `xsizes` (e.g., xs: 10px, md: 14px, xl: 22px).')}</p>
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
              <table-col>{_('The currency code (e.g., "usd", "php") to display. Special case: "usd" maps to "US" country code.')}</table-col>
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
              <table-col>{_('If true, displays the currency name. Defaults to true.')}</table-col>
            </table-row>

            <table-row>
              <table-col>flag-*</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Size modifier for the flag (e.g., "xs", "md", "xl"). Sets height (default: 16px if `flag` is true).')}</table-col>
            </table-row>

            <table-row>
              <table-col>text-*</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Size modifier for the text (e.g., "sm", "lg", "2xl"). Sets font-size (e.g., sm: 12px, lg: 18px).')}</table-col>
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
              <table-col>{_('Sets the text color (e.g., "var(--primary)", "#FF0000"). Defaults to inherited.')}</table-col>
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
              <table-col>{_('Ink utility classes for responsive styling (e.g., "p-4", "md:mr-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Currency -->
          <a name="basicCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Currency')}</h2>
          <div class="mb-10">{_('A basic currency display with default flag and text sizes.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency value="usd" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency value="usd" class="p-4" />
          `}</ide-code>

          <!-- Flag-Only Currency -->
          <a name="flagOnlyCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Flag-Only Currency')}</h2>
          <div class="mb-10">{_('A currency display with only the flag, no name.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency flag value="php" text={false} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency flag value="php" text={false} class="p-4" />
          `}</ide-code>

          <!-- Text-Only Currency -->
          <a name="textOnlyCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Text-Only Currency')}</h2>
          <div class="mb-10">{_('A currency display with only the name, no flag.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency value="eur" flag={false} text class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency value="eur" flag={false} text class="p-4" />
          `}</ide-code>

          <!-- Small Currency Display -->
          <a name="smallCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Small Currency Display')}</h2>
          <div class="mb-10">{_('A currency display with small flag and text sizes.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency flag-xs text-xs value="jpy" class="p-4 b-solid b-t-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency flag-xs text-xs value="jpy" class="p-4 b-solid b-t-1" />
          `}</ide-code>

          <!-- Medium Currency Display -->
          <a name="mediumCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Medium Currency Display')}</h2>
          <div class="mb-10">{_('A currency display with medium flag and text sizes, with a border.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency flag-md text-md value="gbp" class="p-4 b-solid b-t-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency flag-md text-md value="gbp" class="p-4 b-solid b-t-2 c-4" />
          `}</ide-code>

          <!-- Large Currency Display -->
          <a name="largeCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Large Currency Display')}</h2>
          <div class="mb-10">{_('A currency display with large flag and text sizes.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency flag-lg text-lg value="cad" class="p-4 mr-10" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency flag-lg text-lg value="cad" class="p-4 mr-10" />
          `}</ide-code>

          <!-- Extra Large Currency Display -->
          <a name="extraLargeCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Extra Large Currency Display')}</h2>
          <div class="mb-10">{_('A currency display with extra-large flag and text sizes, bolded.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency flag-xl text-xl bold value="aud" class="p-4 b-solid b-t-3 c-6 shadow-2-4-6-8-000000" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency flag-xl text-xl bold value="aud" class="p-4 b-solid b-t-3 c-6 shadow-2-4-6-8-000000" />
          `}</ide-code>

          <!-- Colored Currency Display -->
          <a name="coloredCurrency"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colored Currency Display')}</h2>
          <div class="mb-10">{_('A currency display with a custom text color and block display.')}</div>
          <div class="basis-third lg:basis-half md:basis-full mb-20">
            <div class="bg-t-3 p-10 flex justify-center items-center">
              <format-currency 
                flag-md 
                text-md 
                value="chf" 
                color="var(--primary)" 
                display="block" 
                class="p-4 tx-center bg-t-1 rounded" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-currency 
              flag-md 
              text-md 
              value="chf" 
              color="var(--primary)" 
              display="block" 
              class="p-4 tx-center bg-t-1 rounded" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/country.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Country')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/date.html">
              {_('Date')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>