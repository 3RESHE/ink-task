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
<link rel="import" type="component" href="@stackpress/ink-ui/element/progress.ink" name="element-progress" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tab.ink" name="element-tab" />

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
    { label: 'Tab' }
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
            <a class="block tx-t-0" href="#pager#">{_('Tab')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">{_('Props')}</a>
              <a class="block tx-t-1" href="#PaginationExample">{_('Pagination Example')}</a>
              <a class="block tx-t-1" href="#CustomRangeAndPageSelection">{_('Custom Range and Page Selection')}</a>
              <a class="block tx-t-1" href="#CustomControlsAndStyles">{_('Custom Controls and Styles')}</a>
              <a class="block tx-t-1" href="#PaginationWithNoForwardOrRewind">{_('Pagination with No Forward or Rewind')}</a>
              
            </nav>
          </nav>
        </menu>
      </aside>



      <main>
        <nav class="p-10 bg-t-3">
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
        <api-docs>


        
        <a name="pager"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_(' Tab')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Badge from '@stackpress/ink-ui/element/tab';
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
                <table-head>{_('Property')}</table-head>
                <table-head>{_('Type')}</table-head>
                <table-head>{_('Required')}</table-head>
                <table-head>{_('Notes')}</table-head>

                <table-row>
                    <table-col>group</table-col>
                    <table-col>String</table-col>
                    <table-col>Yes</table-col>
                    <table-col>{_('Defines the group of tabs this tab belongs to.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>selector</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('The selector used to show or hide content based on the tab selected.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>active</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Class names to apply when the tab is active.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>inactive</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Class names to apply when the tab is inactive.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>style</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Inline style for custom styling of the tab.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>class</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('CSS class name(s) to apply to the tab element.')}</table-col>
                </table-row>

                </layout-table>



                  <h2 class="tx-primary tx-upper tx-30 py-20">
                        {_('Tab Examples')}
                    </h2>

                   
                    <div class="mb-10">
                        {_('This example demonstrates a tab group with three tabs. The active tab is styled with a black background and white text, while the inactive tabs have a muted background. Each tab belongs to the "http" group, and custom selectors are used to show or hide specific content for each tab.')}
                    </div>

                  
                    <div class="bg-t-3 h-120 flex flex-center">
                        <element-tab 
                            on
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-black tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-index-ts"
                        >
                            Tab 1
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-black tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-page-ink"
                        >
                            Tab 2
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-black tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-package-json"
                        >
                            Tab 3
                        </element-tab>
                    </div>

                    <!-- Example 1: Code -->
                    <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
                    <div class="bg-t-3 h-120 flex flex-center">
                        <element-tab 
                            on
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-black tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-index-ts"
                        >
                            Tab 1
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-black tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-page-ink"
                        >
                            Tab 2
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-black tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-package-json"
                        >
                            Tab 3
                        </element-tab>
                    </div>
                    `}</ide-code>

                    <!-- Example 2: Description -->
                    <div class="mb-10">
                        {_('This example shows a tab group with active and inactive tabs, each with custom styles for padding, borders, and background colors. The active tab has a bold black background with white text, while the inactive tabs have a softer, muted appearance.')}
                    </div>

                  
                    <div class="bg-t-3 h-120 flex flex-center">
                        <element-tab 
                            on
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-primary tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-index-ts"
                        >
                            Tab 1
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-primary tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-page-ink"
                        >
                            Tab 2
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-primary tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-package-json"
                        >
                            Tab 3
                        </element-tab>
                    </div>

                   
                    <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
                    <div class="bg-t-3 h-120 flex flex-center">
                        <element-tab 
                            on
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-primary tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-index-ts"
                        >
                            Tab 1
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-primary tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-page-ink"
                        >
                            Tab 2
                        </element-tab>
                        <element-tab 
                            class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                            active="bg-primary tx-white"
                            inactive="bg-t-1 tx-muted"  
                            group="http" 
                            selector="#http-package-json"
                        >
                            Tab 3
                        </element-tab>
                    </div>
                    `}</ide-code>


                <h2 class="tx-primary tx-upper tx-30 py-20">
                  {_('Horizontal Tabs with Different Active State')}
                </h2>

               
                <div class="mb-10">
                  {_('This example demonstrates a set of horizontal tabs with a "group" of "user". The active tab has a red background and white text, while the inactive tabs have a gray background with muted text.')}
                </div>

              
                <div class="bg-t-3 h-120 flex flex-center">
                  <element-tab 
                    on
                    class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                    active="bg-red-500 tx-white"
                    inactive="bg-gray-300 tx-muted"  
                    group="user" 
                    selector="#user-profile"
                  >
                    Profile
                  </element-tab>
                  <element-tab 
                    class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                    active="bg-red-500 tx-white"
                    inactive="bg-gray-300 tx-muted"  
                    group="user" 
                    selector="#user-settings"
                  >
                    Settings
                  </element-tab>
                  <element-tab 
                    class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                    active="bg-red-500 tx-white"
                    inactive="bg-gray-300 tx-muted"  
                    group="user" 
                    selector="#user-notifications"
                  >
                    Notifications
                  </element-tab>
                </div>

                <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
                <div class="bg-t-3 h-120 flex flex-center">
                  <element-tab 
                    on
                    class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                    active="bg-red-500 tx-white"
                    inactive="bg-gray-300 tx-muted"  
                    group="user" 
                    selector="#user-profile"
                  >
                    Profile
                  </element-tab>
                  <element-tab 
                    class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                    active="bg-red-500 tx-white"
                    inactive="bg-gray-300 tx-muted"  
                    group="user" 
                    selector="#user-settings"
                  >
                    Settings
                  </element-tab>
                  <element-tab 
                    class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                    active="bg-red-500 tx-white"
                    inactive="bg-gray-300 tx-muted"  
                    group="user" 
                    selector="#user-notifications"
                  >
                    Notifications
                  </element-tab>
                </div>
                `}</ide-code>



              <h2 class="tx-primary tx-upper tx-30 py-20">
                {_('Custom Style Tabs')}
              </h2>

           
              <div class="mb-10">
                {_('This example demonstrates tabs with custom styles using the "style" prop. The tabs are styled with inline CSS for custom padding, border radius, and font size. The active tab is styled with a green background and white text, while the inactive tabs have a gray background.')}
              </div>

              <div class="bg-t-3 h-120 flex flex-center">
                <element-tab 
                  on
                  style="padding: 12px 24px; border-radius: 8px; font-size: 16px;"
                  active="bg-green-500 tx-white"
                  inactive="bg-gray-300 tx-primary"  
                  group="custom" 
                  selector="#custom-tab-1"
                >
                  Tab A
                </element-tab>
                <element-tab 
                  style="padding: 12px 24px; border-radius: 8px; font-size: 16px;"
                  active="bg-green-500 tx-white"
                  inactive="bg-gray-300 tx-primary"  
                  group="custom" 
                  selector="#custom-tab-2"
                >
                  Tab B
                </element-tab>
                <element-tab 
                  style="padding: 12px 24px; border-radius: 8px; font-size: 16px;"
                  active="bg-green-500 tx-white"
                  inactive="bg-gray-300 tx-primary"  
                  group="custom" 
                  selector="#custom-tab-3"
                >
                  Tab C
                </element-tab>
              </div>

    
              <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
              <div class="bg-t-3 h-120 flex flex-center">
                <element-tab 
                  on
                  style="padding: 12px 24px; border-radius: 8px; font-size: 16px;"
                  active="bg-green-500 tx-white"
                  inactive="bg-gray-300 tx-primary"  
                  group="custom" 
                  selector="#custom-tab-1"
                >
                  Tab A
                </element-tab>
                <element-tab 
                  style="padding: 12px 24px; border-radius: 8px; font-size: 16px;"
                  active="bg-green-500 tx-white"
                  inactive="bg-gray-300 tx-primary"  
                  group="custom" 
                  selector="#custom-tab-2"
                >
                  Tab B
                </element-tab>
                <element-tab 
                  style="padding: 12px 24px; border-radius: 8px; font-size: 16px;"
                  active="bg-green-500 tx-white"
                  inactive="bg-gray-300 tx-primary"  
                  group="custom" 
                  selector="#custom-tab-3"
                >
                  Tab C
                </element-tab>
              </div>
              `}</ide-code>

            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/progress.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Progress Bars')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/tooltip.html">
              {_('Tooltips')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>