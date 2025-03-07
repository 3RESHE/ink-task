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
<link rel="import" type="component" href="@stackpress/ink-ui/element/loader.ink" name="element-loader" />
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
    { label: 'Loader' }
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
            <a class="block tx-t-0" href="#loaders">{_('Loaders')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#border-styles">• {_('Border Styles')}</a>
              <a class="block tx-t-1" href="#size">• {_('Size')}</a>
              <a class="block tx-t-1" href="#speed">• {_('Speed')}</a>
              <a class="block tx-t-1" href="#slice">• {_('Slice')}</a>
              <a class="block tx-t-1" href="#thickness">• {_('Thickness')}</a>
              <a class="block tx-t-1" href="#color">• {_('Color')}</a>
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

          <a name="loaders"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Loaders')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Loader from '@stackpress/ink-ui/element/loader';
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
              <table-col>size</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Width and height of the loader in pixels (default: 20)')}</table-col>
            </table-row>

            <table-row>
              <table-col>slice</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Number of transparent border sides (0–3, default: 0)')}</table-col>
            </table-row>

            <table-row>
              <table-col>speed</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Animation duration in milliseconds (default: 1000)')}</table-col>
            </table-row>

            <table-row>
              <table-col>thickness</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Border thickness in pixels (default: 2)')}</table-col>
            </table-row>

            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border style to solid (default if no style specified)')}</table-col>
            </table-row>

            <table-row>
              <table-col>dotted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border style to dotted')}</table-col>
            </table-row>

            <table-row>
              <table-col>dashed</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border style to dashed')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS color for the border (e.g., "red", "var(--primary)", default: "var(--black)")')}</table-col>
            </table-row>
          </layout-table>

          <a name="border-styles"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Border Styles')}</h2>
          <div class="mb-10">{_('Loaders support solid, dotted, and dashed border styles:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader solid size="40" color="var(--primary)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader solid size="40" color="var(--primary)" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dotted size="40" color="var(--success)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader dotted size="40" color="var(--success)" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dashed size="40" color="var(--error)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader dashed size="40" color="var(--error)" />
          `}</ide-code>

          <a name="size"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Size')}</h2>
          <div class="mb-10">{_('Adjust the loader’s size with the "size" prop:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader solid size="20" color="var(--info)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader solid size="20" color="var(--info)" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dotted size="60" color="var(--warning)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader dotted size="60" color="var(--warning)" />
          `}</ide-code>

          <a name="speed"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Speed')}</h2>
          <div class="mb-10">{_('Control the animation speed with the "speed" prop (in milliseconds):')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dashed size="40" speed="500" color="var(--info)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader dashed size="40" speed="500" color="var(--info)" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader solid size="40" speed="2000" color="var(--muted)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader solid size="40" speed="2000" color="var(--muted)" />
          `}</ide-code>

          <a name="slice"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Slice')}</h2>
          <div class="mb-10">{_('Create a sliced effect by setting "slice" from 0 to 3:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader size="40" slice="1" color="var(--primary)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader size="40" slice="1" color="var(--primary)" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader size="40" slice="2" color="var(--success)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader size="40" slice="2" color="var(--success)" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader size="40" slice="3" color="var(--error)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader size="40" slice="3" color="var(--error)" />
          `}</ide-code>

          <a name="thickness"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Thickness')}</h2>
          <div class="mb-10">{_('Adjust border thickness with the "thickness" prop:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader solid size="40" thickness="5" color="var(--warning)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader solid size="40" thickness="5" color="var(--warning)" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dashed size="40" thickness="10" color="var(--info)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader dashed size="40" thickness="10" color="var(--info)" />
          `}</ide-code>

          <a name="color"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Color')}</h2>
          <div class="mb-10">{_('Customize the loader’s border color with the "color" prop:')}</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader solid size="40" color="red" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader solid size="40" color="red" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dotted size="40" color="#facc15" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader dotted size="40" color="#facc15" />
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dashed size="40" color="var(--primary)" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader dashed size="40" color="var(--primary)" />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/icon.html">
              <element-icon name="chevron-left" color="var(--tx-1)" />
              {_('Icons')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/notify.html">
              {_('Notify')}
              <element-icon name="chevron-right" color="var(--tx-1)" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>