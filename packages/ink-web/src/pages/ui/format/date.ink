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
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/date.ink" name="format-date" />

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
    { label: 'Date' }
  ];
  const pastDate = new Date('2024-12-25T10:00:00').toISOString();
  const recentDate = new Date(Date.now() - 5 * 60 * 1000).toISOString(); // 5 minutes ago
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
            <a class="block tx-t-0" href="#Date">{_('Date')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#defaultFormat">• {_('Default Format')}</a>
              <a class="block tx-t-1" href="#customFormats">• {_('Custom Formats')}</a>
              <a class="block tx-t-1" href="#relativeTimeAgo">• {_('Relative Time (Ago)')}</a>
              <a class="block tx-t-1" href="#shortRelativeTime">• {_('Short Relative Time')}</a>
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

          <a name="Date"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Date')}</h1>
          <ide-app title="Date" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Date from '@stackpress/ink-ui/format/date';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-date>` component formats dates using the `dayjs` library, supporting the default format, custom Day.js-compatible formats, and relative time displays.')}</p>
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
              <table-col>String/Number/Date</table-col>
              <table-col>No</table-col>
              <table-col>{_('The date to format (e.g., ISO string, timestamp). Defaults to the current date.')}</table-col>
            </table-row>

            <table-row>
              <table-col>locale</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('The locale for formatting (e.g., "en", "fr"). Defaults to "en".')}</table-col>
            </table-row>

            <table-row>
              <table-col>format</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('The date format using Day.js tokens (e.g., "YYYY-MM-DD"). Use "ago" for relative time or "a" for short relative time. Defaults to "MMMM D, YYYY, h:mm:ss a".')}</table-col>
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

          <!-- Default Format -->
          <a name="defaultFormat"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Default Format')}</h2>
          <div class="mb-10">{_('Displays the current date in the default format (MMMM D, YYYY, h:mm:ss a).')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-date class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-date class="p-4" />
          `}</ide-code>

          <!-- Custom Formats -->
          <a name="customFormats"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Formats')}</h2>
          <div class="mb-10">{_('Displays a specific date in various Day.js-compatible formats.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-date value={pastDate} format="YYYY-MM-DD" class="p-4" /> |
              <format-date value={pastDate} format="DD/MM/YYYY" class="p-4" /> |
              <format-date value={pastDate} format="D MMM YYYY" class="p-4" /> |
              <format-date value={pastDate} format="HH:mm:ss" class="p-4" /> |
              <format-date value={pastDate} format="dddd, MMMM D, YYYY" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-date value="2024-12-25T10:00:00.000Z" format="YYYY-MM-DD" class="p-4" />
            <format-date value="2024-12-25T10:00:00.000Z" format="DD/MM/YYYY" class="p-4" />
            <format-date value="2024-12-25T10:00:00.000Z" format="D MMM YYYY" class="p-4" />
            <format-date value="2024-12-25T10:00:00.000Z" format="HH:mm:ss" class="p-4" />
            <format-date value="2024-12-25T10:00:00.000Z" format="dddd, MMMM D, YYYY" class="p-4" />
          `}</ide-code>

          <!-- Relative Time (Ago) -->
          <a name="relativeTimeAgo"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Relative Time (Ago)')}</h2>
          <div class="mb-10">{_('Displays a date as relative time using the "ago" format.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-date value={recentDate} format="ago" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <!-- Assuming the date is 5 minutes ago -->
            <format-date value={recentDate} format="ago" class="p-4" />
          `}</ide-code>

          <!-- Short Relative Time -->
          <a name="shortRelativeTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Short Relative Time')}</h2>
          <div class="mb-10">{_('Displays a date as short relative time using the "a" format.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-date value={recentDate} format="a" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <!-- Assuming the date is 5 minutes ago -->
            <format-date value={recentDate} format="a" class="p-4" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/currency.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Currency')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/email.html">
              {_('Email')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>