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
            <a class="block tx-t-0" href="#pager">{_('Tab')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#TabExamples">• {_('Tab Examples')}</a>
              <a class="block tx-t-1" href="#HorizontalTabsWithDifferentActiveState">• {_('Horizontal Tabs with Different Active State')}</a>
              <a class="block tx-t-1" href="#CustomStyleTabs">• {_('Custom Style Tabs')}</a>
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
            {_('Tab')}
          </h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Tab from '@stackpress/ink-ui/element/tab';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
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
              <table-col>{_('Groups tabs together. Only one tab in a group can be active at a time. Must be unique per tab set (e.g., "http", "user").')}</table-col>
            </table-row>

            <table-row>
              <table-col>selector</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('CSS selector for content to show/hide when this tab is active (e.g., "#user-profile"). Leave empty if no content is controlled.')}</table-col>
            </table-row>

            <table-row>
              <table-col>active</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated class names applied when the tab is active (e.g., "bg-black tx-white"). Use atomic styles for customization.')}</table-col>
            </table-row>

            <table-row>
              <table-col>inactive</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated class names applied when the tab is inactive (e.g., "bg-t-1 tx-muted"). Contrasts with `active` for visual feedback.')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline CSS for the tab’s `<a>` element (e.g., "padding: 12px;"). Overrides default styles like `height: 100%`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Additional class names for the `<a>` element. Complements `active`/`inactive` classes.')}</table-col>
            </table-row>

            <table-row>
              <table-col>on</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the tab as active on mount. Only one tab per group should have `on`. Use as an attribute (e.g., `on=""`).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Tab Examples -->
          <a name="TabExamples"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Tab Examples')}</h2>
          <div class="mb-10">
            {_('Tabs group related content and toggle visibility using the `selector` prop. The `active` and `inactive` props style the tab states. Below are examples of horizontal tab layouts with content control.')}
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
              Index.ts
            </element-tab>
            <element-tab 
              class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
              active="bg-black tx-white"
              inactive="bg-t-1 tx-muted"  
              group="http" 
              selector="#http-page-ink"
            >
              Page.ink
            </element-tab>
            <element-tab 
              class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
              active="bg-black tx-white"
              inactive="bg-t-1 tx-muted"  
              group="http" 
              selector="#http-package-json"
            >
              Package.json
            </element-tab>
          </div>
          <div id="http-index-ts" class="p-10 bg-t-1">Content for Index.ts</div>
          <div id="http-page-ink" class="p-10 bg-t-1" style="display: none;">Content for Page.ink</div>
          <div id="http-package-json" class="p-10 bg-t-1" style="display: none;">Content for Package.json</div>

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
                Index.ts
              </element-tab>
              <element-tab 
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="http" 
                selector="#http-page-ink"
              >
                Page.ink
              </element-tab>
              <element-tab 
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="http" 
                selector="#http-package-json"
              >
                Package.json
              </element-tab>
            </div>
            <div id="http-index-ts" class="p-10 bg-t-1">Content for Index.ts</div>
            <div id="http-page-ink" class="p-10 bg-t-1" style="display: none;">Content for Page.ink</div>
            <div id="http-package-json" class="p-10 bg-t-1" style="display: none;">Content for Package.json</div>
          `}</ide-code>

          <!-- Horizontal Tabs with Different Active State -->
          <a name="HorizontalTabsWithDifferentActiveState"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Horizontal Tabs with Different Active State')}</h2>
          <div class="mb-10">
            {_('This example uses a red active state for a "user" group, with content toggling between profile, settings, and notifications.')}
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
          <div id="user-profile" class="p-10 bg-t-1">User Profile Content</div>
          <div id="user-settings" class="p-10 bg-t-1" style="display: none;">Settings Content</div>
          <div id="user-notifications" class="p-10 bg-t-1" style="display: none;">Notifications Content</div>

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
            <div id="user-profile" class="p-10 bg-t-1">User Profile Content</div>
            <div id="user-settings" class="p-10 bg-t-1" style="display: none;">Settings Content</div>
            <div id="user-notifications" class="p-10 bg-t-1" style="display: none;">Notifications Content</div>
          `}</ide-code>

          <!-- Custom Style Tabs -->
          <a name="CustomStyleTabs"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Style Tabs')}</h2>
          <div class="mb-10">
            {_('Use the `style` prop for inline CSS overrides, combined with `active`/`inactive` classes for state-specific styling. This example adds rounded corners and custom padding.')}
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
          <div id="custom-tab-1" class="p-10 bg-t-1">Content for Tab A</div>
          <div id="custom-tab-2" class="p-10 bg-t-1" style="display: none;">Content for Tab B</div>
          <div id="custom-tab-3" class="p-10 bg-t-1" style="display: none;">Content for Tab C</div>

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
            <div id="custom-tab-1" class="p-10 bg-t-1">Content for Tab A</div>
            <div id="custom-tab-2" class="p-10 bg-t-1" style="display: none;">Content for Tab B</div>
            <div id="custom-tab-3" class="p-10 bg-t-1" style="display: none;">Content for Tab C</div>
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/progress.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Progress Bars')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/table.html">
              {_('Tables')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>