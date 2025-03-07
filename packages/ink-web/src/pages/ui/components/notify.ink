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
<link rel="import" type="component" href="@stackpress/ink-ui/element/notify.ink" name="element-notify" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="element-button"/>


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
    { label: 'Notify' }
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
            <a class="block tx-t-0" href="# Notify">{_(' Notify')}</a>
            <nav class="pl-20">
                <a class="block tx-t-1" href="#props">• {_('Props')}</a>
                <a class="block tx-t-1" href="#types">• {_('Types')}</a>
                <a class="block tx-t-1" href="#size">• {_('Size')}</a>
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

        <a name="Notify"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_(' Notify')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Notify from '@stackpress/ink-ui/element/notify';
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
                    <table-col>top</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Positions the notification at the top (default is bottom).')}</table-col>
                </table-row>

                <table-row>
                    <table-col>left</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Aligns the notification to the left (default is right).')}</table-col>
                </table-row>

                <table-row>
                    <table-col>center</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Centers the notification horizontally.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>fade</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Enables fade transition effect.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>smooth</table-col>
                    <table-col>Number</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Controls transition smoothness (default: 10ms).')}</table-col>
                </table-row>

                <table-row>
                    <table-col>type</table-col>
                    <table-col>String</table-col>
                    <table-col>Yes</table-col>
                    <table-col>{_('Defines the notification type: "info", "warning", "error", "success", "primary", "secondary", "muted".')}</table-col>
                </table-row>

                <table-row>
                    <table-col>message</table-col>
                    <table-col>String</table-col>
                    <table-col>Yes</table-col>
                    <table-col>{_('Sets the notification message.')}</table-col>
                </table-row>

                <table-row>
                    <table-col>timeout</table-col>
                    <table-col>Number</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Duration before the notification disappears (default: 5000ms).')}</table-col>
                </table-row>
                </layout-table>

          <a name="variants"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Notification Variants')}
          </h2>

          <div class="mb-10">
            Notifications can have different variants: 
            <span class="tx-info tx-italic p-3">info</span>,
            <span class="tx-warning tx-italic p-3">warning</span>,
            <span class="tx-success tx-italic p-3">success</span>,
            <span class="tx-error tx-italic p-3">error</span>,
            <span class="tx-primary tx-italic p-3">primary</span>,
            <span class="tx-secondary tx-italic p-3">secondary</span>,
            <span class="tx-muted tx-italic p-3">muted</span>.
          </div>

          <element-notify></element-notify>

          <div class="grid gap-10">
            <element-button onclick="document.querySelector('element-notify').notify('info', 'Information alert!')">
              Show Info
            </element-button>

            <element-button onclick="document.querySelector('element-notify').notify('warning', 'Warning alert!')">
              Show Warning
            </element-button>

            <element-button onclick="document.querySelector('element-notify').notify('success', 'Success alert!')">
              Show Success
            </element-button>

            <element-button onclick="document.querySelector('element-notify').notify('error', 'Error alert!')">
              Show Error
            </element-button>
          </div>

          <ide-code trim detab={12}>{`
            <element-button onclick="document.querySelector('element-notify').notify('info', 'Information alert!')">
              Show Info
            </element-button>
          `}</ide-code>

          <a name="position"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Customizing Notification Position')}
          </h2>

          <div class="mb-10">
            Set notifications to appear at different positions using <code>top</code>, <code>left</code>, or <code>center</code>.
          </div>

          <element-notify top></element-notify>
          <element-notify left></element-notify>
          <element-notify center></element-notify>

          <div class="grid gap-10">
            <element-button onclick="document.querySelector('element-notify[top]').notify('info', 'Notification at the top!')">
              Show Top
            </element-button>

            <element-button onclick="document.querySelector('element-notify[left]').notify('info', 'Notification on the left!')">
              Show Left
            </element-button>

            <element-button onclick="document.querySelector('element-notify[center]').notify('info', 'Centered notification!')">
              Show Center
            </element-button>
          </div>

          <ide-code trim detab={12}>{`
            <element-notify top></element-notify>
            <element-notify left></element-notify>
            <element-notify center></element-notify>
          `}</ide-code>

          <a name="smooth"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Adding Smooth Transitions')}
          </h2>

          <div class="mb-10">
            Use <code>fade</code> and <code>smooth</code> attributes to enable transition effects.
          </div>

          <element-notify fade smooth="15"></element-notify>

          <div class="grid gap-10">
            <element-button onclick="document.querySelector('element-notify[fade]').notify('info', 'Smooth fade effect!')">
              Show Smooth
            </element-button>
          </div>

          <ide-code trim detab={12}>{`
            <element-notify fade smooth="15"></element-notify>

            <element-button onclick="document.querySelector('element-notify[fade]').notify('info', 'Smooth fade effect!')">
              Show Smooth
            </element-button>
          `}</ide-code>

          <a name="timeout"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Timeout')}
          </h2>

          <div class="mb-10">
            Control how long notifications stay visible using a timeout value.
          </div>

          <element-notify></element-notify>

          <div class="grid gap-10">
            <element-button onclick="document.querySelector('element-notify').notify('info', 'This disappears in 8 seconds!', 8000)">
              Show 8s Notification
            </element-button>

            <element-button onclick="document.querySelector('element-notify').notify('info', 'Quick 3-second alert!', 3000)">
              Show 3s Notification
            </element-button>
          </div>

          <ide-code trim detab={12}>{`
            <element-button onclick="document.querySelector('element-notify').notify('info', 'This disappears in 8 seconds!', 8000)">
              Show 8s Notification
            </element-button>
          `}</ide-code>

          <a name="dismiss"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Dismissible Notifications')}
          </h2>

          <div class="mb-10">
            Notifications can be manually dismissed using a close button.
          </div>

          <element-notify></element-notify>

          <div class="grid gap-10">
            <element-button onclick="document.querySelector('element-notify').notify('info', 'Click the close icon to dismiss!')">
              Show Dismissible
            </element-button>
          </div>

          <ide-code trim detab={12}>{`
            <element-button onclick="document.querySelector('element-notify').notify('info', 'Click the close icon to dismiss!')">
              Show Dismissible
            </element-button>
          `}</ide-code>

          <a name="icons"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Notifications with Icons')}
          </h2>

          <div class="mb-10">
            Notifications can include icons using <code>interface-icon</code>.
          </div>

          <element-notify></element-notify>

          <div class="grid gap-10">
            <element-button onclick="document.querySelector('element-notify').notify('info', 'ℹ️ Info with icon!')">
              Show Info Icon
            </element-button>

            <element-button onclick="document.querySelector('element-notify').notify('warning', '⚠️ Warning with icon!')">
              Show Warning Icon
            </element-button>

            <element-button onclick="document.querySelector('element-notify').notify('success', '✅ Success with icon!')">
              Show Success Icon
            </element-button>

            <element-button onclick="document.querySelector('element-notify').notify('error', '❌ Error with icon!')">
              Show Error Icon
            </element-button>
          </div>

          <ide-code trim detab={12}>{`
            <element-button onclick="document.querySelector('element-notify').notify('info', 'ℹ️ Info with icon!')">
              Show Info Icon
            </element-button>
          `}</ide-code>






            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/loader.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Loaders')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/pager.html">
              {_('Pagers')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>

  
  </body>
</html>