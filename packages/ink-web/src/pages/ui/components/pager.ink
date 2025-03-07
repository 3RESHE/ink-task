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
<link rel="import" type="component" href="@stackpress/ink-ui/element/pager.ink" name="element-pager" />
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
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Pager' }
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
            <a class="block tx-t-0" href="#pager">{_('Pager')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Pagination')}</a>
              <a class="block tx-t-1" href="#range-radius">• {_('Range & Radius')}</a>
              <a class="block tx-t-1" href="#controls">• {_('Navigation Controls')}</a>
              <a class="block tx-t-1" href="#styling">• {_('Styling Options')}</a>
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

          <a name="pager"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Pager')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Pager from '@stackpress/ink-ui/element/pager';
            </ide-code>
          </ide-app>

          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table 
            top
            head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
            body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
            odd="bg-t-0"
            even="bg-t-1"
          >
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>

            <table-row>
              <table-col>total</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Total items to paginate (default: 0)')}</table-col>
            </table-row>

            <table-row>
              <table-col>start</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Starting offset (default: 0)')}</table-col>
            </table-row>

            <table-row>
              <table-col>range</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Items per page (default: 50)')}</table-col>
            </table-row>

            <table-row>
              <table-col>radius</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Pages shown around current page (default: 2)')}</table-col>
            </table-row>

            <table-row>
              <table-col>next</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Show "next" button')}</table-col>
            </table-row>

            <table-row>
              <table-col>prev</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Show "previous" button')}</table-col>
            </table-row>

            <table-row>
              <table-col>rewind</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Show "rewind to first" button')}</table-col>
            </table-row>

            <table-row>
              <table-col>forward</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Show "forward to last" button')}</table-col>
            </table-row>

            <table-row>
              <table-col>link</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles for page links (e.g., { color: "var(--primary)" })')}</table-col>
            </table-row>

            <table-row>
              <table-col>control</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles for navigation icons (e.g., { color: "var(--info)" })')}</table-col>
            </table-row>

            <table-row>
              <table-col>border</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Border styles (e.g., { color: "var(--muted)" })')}</table-col>
            </table-row>

            <table-row>
              <table-col>background</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background styles (e.g., { color: "var(--info)" })')}</table-col>
            </table-row>

            <table-row>
              <table-col>square</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Width/height of controls/links in pixels (default: 0, no square)')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom font/icon size in pixels')}</table-col>
            </table-row>

            <table-row>
              <table-col>xs, sm, md, lg, xl, xl2, xl3, xl4, xl5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Predefined size variants (escalating from extra-small to extra-large)')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Default text/icon color (e.g., "red", "var(--primary)")')}</table-col>
            </table-row>

            <table-row>
              <table-col>white, black, info, warning, success, error, muted, primary, secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Predefined color variants')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Bold text for current page')}</table-col>
            </table-row>

            <table-row>
              <table-col>underline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Underline page links')}</table-col>
            </table-row>

            <table-row>
              <table-col>page</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when a page is selected (default: no-op)')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Pagination')}</h2>
          <div class="mb-10">{_('A simple pager with default settings:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-pager total={100} range={10} next prev page={console.log} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={100} range={10} next prev page={console.log} />
          `}</ide-code>

          <a name="range-radius"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Range & Radius')}</h2>
          <div class="mb-10">{_('Customize items per page ("range") and visible pages ("radius"):')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-pager total={500} range={100} radius={1} start={200} next prev page={console.log} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={500} range={100} radius={1} start={200} next prev page={console.log} />
          `}</ide-code>

          <a name="controls"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Navigation Controls')}</h2>
          <div class="mb-10">{_('Add rewind and forward buttons for full navigation:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-pager total={1000} range={50} rewind forward next prev page={console.log} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={1000} range={50} rewind forward next prev page={console.log} />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-pager total={500} range={50} next prev page={console.log} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={500} range={50} next prev page={console.log} />
          `}</ide-code>

          <a name="styling"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styling Options')}</h2>
          <div class="mb-10">{_('Style the pager with colors, borders, and square shapes:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-pager 
                total={1000} 
                range={50} 
                next prev rewind forward 
                link={{ color: "primary" }} 
                background={{ color: 'var(--info)' }} 
                border={{ color: 'success' }} 
                square={40} 
                bold 
                page={console.log} 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager 
              total={1000} 
              range={50} 
              next prev rewind forward 
              link={{ color: 'var(--primary)' }} 
              background={{ color: 'var(--info)' }} 
              border={{ color: 'var(--muted)' }} 
              square={40} 
              bold 
              page={console.log} 
            />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-pager 
                total={500} 
                range={50} 
                next prev 
                color="var(--success)" 
                underline 
                square={30} 
                page={console.log} 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager 
              total={500} 
              range={50} 
              next prev 
              color="var(--success)" 
              underline 
              square={30} 
              page={console.log} 
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/notify.html">
              <element-icon name="chevron-left" color="var(--tx-1)" />
              {_('Notify')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/panel.html">
              {_('Panels')}
              <element-icon name="chevron-right" color="var(--tx-1)" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>