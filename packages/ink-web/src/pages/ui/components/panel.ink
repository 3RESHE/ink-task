<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="element-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="layout-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/badge.ink" name="element-badge" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
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
    { label: 'Panel' }
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
            <a class="block tx-t-0" href="#pager">{_('Panel')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#BasicPanelLayout">• {_('Basic Panel Layout')}</a>
              <a class="block tx-t-1" href="#PanelLayoutWithFooter">• {_('Panel Layout with Footer')}</a>
              <a class="block tx-t-1" href="#CenteredPanelLayout">• {_('Centered Panel Layout')}</a>
              <a class="block tx-t-1" href="#StickyHeader&Footer">• {_('Sticky Header & Footer')}</a>
              
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
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_(' Panel')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Panel from '@stackpress/ink-ui/element/panel';
            </ide-code>
          </ide-app>

                <a name="props"></a>
                <h2 class="tx-primary tx-upper tx-30 py-20">
                {_('Props')}
                </h2>
                
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
                    <table-col>main</table-col>
                    <table-col>HTMLElement</table-col>
                    <table-col>Yes</table-col>
                    <table-col>{_('Represents the main content panel (<main>).')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>head</table-col>
                    <table-col>HTMLElement</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Represents the header panel (<header>), if present.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>foot</table-col>
                    <table-col>HTMLElement</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Represents the footer panel (<footer>), if present.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>left</table-col>
                    <table-col>HTMLElement</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Represents the left sidebar (<aside left>), if present.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>right</table-col>
                    <table-col>HTMLElement</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Represents the right sidebar (<aside right>), if present.')}</table-col>
                  </table-row>
                </layout-table>





            <a name="BasicPanelLayout"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Basic Panel Layout')}
            </h2>

            <div class="mb-10">
           A simple panel layout with header, left sidebar, right sidebar, and main content in their correct positions.
            </div>

            <div class="bg-t-3 h-120">
              <div class="relative w-full h-full">
                <!-- Header -->
                <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
                  <div class="p-5">Header</div>
                </header>

                <!-- Left Sidebar -->
                <aside class="absolute w-20p top-50p bottom-0 left-0 b-solid b-t-1">
                  <div class="p-5">Left Sidebar</div>
                </aside>

                <!-- Right Sidebar -->
                <aside class="absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1">
                  <div class="p-5">Right Sidebar</div>
                </aside>

                <!-- Main Content -->
                <main class="absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1">
                  <div class="p-5">Main Content</div>
                </main>
              </div>
            </div>


            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
                        <div class="bg-t-3 h-120">
              <div class="relative w-full h-full">
                <!-- Header -->
                <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
                  <div class="p-5">Header</div>
                </header>

                <!-- Left Sidebar -->
                <aside class="absolute w-20p top-50p bottom-0 left-0 b-solid b-t-1">
                  <div class="p-5">Left Sidebar</div>
                </aside>

                <!-- Right Sidebar -->
                <aside class="absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1">
                  <div class="p-5">Right Sidebar</div>
                </aside>

                <!-- Main Content -->
                <main class="absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1">
                  <div class="p-5">Main Content</div>
                </main>
              </div>
            </div>
            `}</ide-code>


                        <a name="PanelLayoutWithFooter"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Panel Layout with Footer')}
            </h2>

            <div class="mb-10">
            A footer is added at the bottom of the structure.
            </div>

            <div class="bg-t-3 h-200">
              <div class="relative w-full h-full">
                <!-- Header -->
                <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
                  <div class="p-5">Header</div>
                </header>

                <!-- Left Sidebar -->
                <aside class="absolute w-20p top-50p bottom-60 left-0 b-solid b-t-1">
                  <div class="p-5">Left Sidebar</div>
                </aside>

                <!-- Right Sidebar -->
                <aside class="absolute w-30p top-50p bottom-60 right-0 b-solid b-t-1">
                  <div class="p-5">Right Sidebar</div>
                </aside>

                <!-- Main Content -->
                <main class="absolute top-50p bottom-60 left-20p right-30p b-solid b-t-1">
                  <div class="p-5">Main Content</div>
                </main>

                <!-- Footer -->
                <footer class="absolute bottom-0 left-0 right-0 h-60 b-solid b-t-1">
                  <div class="p-5">Footer</div>
                </footer>
              </div>
            </div>


            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
              <div class="bg-t-3 h-200">
                <div class="relative w-full h-full">
                  <!-- Header -->
                  <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
                    <div class="p-5">Header</div>
                  </header>

                  <!-- Left Sidebar -->
                  <aside class="absolute w-20p top-50p bottom-60 left-0 b-solid b-t-1">
                    <div class="p-5">Left Sidebar</div>
                  </aside>

                  <!-- Right Sidebar -->
                  <aside class="absolute w-30p top-50p bottom-60 right-0 b-solid b-t-1">
                    <div class="p-5">Right Sidebar</div>
                  </aside>

                  <!-- Main Content -->
                  <main class="absolute top-50p bottom-60 left-20p right-30p b-solid b-t-1">
                    <div class="p-5">Main Content</div>
                  </main>

                  <!-- Footer -->
                  <footer class="absolute bottom-0 left-0 right-0 h-60 b-solid b-t-1">
                    <div class="p-5">Footer</div>
                  </footer>
                </div>
              </div>
            `}</ide-code>


            <a name="CenteredPanelLayout"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Centered Panel Layout')}
            </h2>

            <div class="mb-10">
            A centered layout with only a header and main content.
            </div>

            <div class="bg-t-3 h-120 flex items-center justify-center">
              <div class="relative w-80p h-80p b-solid b-t-1">
                <!-- Header -->
                <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
                  <div class="p-5">Header</div>
                </header>

                <!-- Main Content -->
                <main class="absolute top-50p bottom-0 left-0 right-0 b-solid b-t-1">
                  <div class="p-5">Main Content</div>
                </main>
              </div>
            </div>


            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
              <div class="bg-t-3 h-120 flex items-center justify-center">
              <div class="relative w-80p h-80p b-solid b-t-1">
                <!-- Header -->
                <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
                  <div class="p-5">Header</div>
                </header>

                <!-- Main Content -->
                <main class="absolute top-50p bottom-0 left-0 right-0 b-solid b-t-1">
                  <div class="p-5">Main Content</div>
                </main>
              </div>
            </div>
            `}</ide-code>


            <a name="StickyHeader&Footer"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
              {_('Sticky Header & Footer')}
            </h2>

            <div class="mb-10">
              A header and footer that stay visible while scrolling.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="w-300 h-200 bg-t-3 b-solid b-1 p-2 relative flex flex-col">
                <!-- Sticky Header -->
                <header class="sticky top-0 left-0 right-0 h-50 bg-white b-solid b-b-1 z-10">
                  <div class="p-2">Sticky Header</div>
                </header>

                <!-- Scrollable Content -->
                <div class="flex-1 overflow-auto">
                  <main class="w-full p-2">
                    <p>Main Content (Scroll Down)</p>
                    <div class="h-400px"></div> <!-- Ensures scrolling -->
                  </main>
                </div>

                <!-- Sticky Footer -->
                <footer class="sticky bottom-0 left-0 right-0 h-50 bg-white b-solid b-t-1 z-10">
                  <div class="p-2">Sticky Footer</div>
                </footer>
              </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="w-300 h-200 bg-t-3 b-solid b-1 p-2 relative flex flex-col">
                  <!-- Sticky Header -->
                  <header class="sticky top-0 left-0 right-0 h-50 bg-white b-solid b-b-1 z-10">
                    <div class="p-2">Sticky Header</div>
                  </header>

                  <!-- Scrollable Content -->
                  <div class="flex-1 overflow-auto">
                    <main class="w-full p-2">
                      <p>Main Content (Scroll Down)</p>
                      <div class="h-400px"></div> <!-- Ensures scrolling -->
                    </main>
                  </div>

                  <!-- Sticky Footer -->
                  <footer class="sticky bottom-0 left-0 right-0 h-50 bg-white b-solid b-t-1 z-10">
                    <div class="p-2">Sticky Footer</div>
                  </footer>
                </div>
              </div>
            `}</ide-code>





            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/pager.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Pagers')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/progress.html">
              {_('Progress Bars')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>