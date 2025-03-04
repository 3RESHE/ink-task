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
<link rel="import" type="component" href="@stackpress/ink-ui/element/notify.ink" name="element-notify" />

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
      </nav
        <a name=" Notify"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_(' Notify')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Badge from '@stackpress/ink-ui/element/notify';
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

            
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Notification Types')}
            </h2>

            <div class="mb-10">
            Notifications support different types:  
          <span class="tx-info tx-italic p-3">info</span>,
          <span class="tx-warning tx-italic p-3">warning</span>,
          <span class="tx-success tx-italic p-3">success</span>,
          <span class="tx-error tx-italic p-3">error</span>.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-notify type="info" message="This is an info notification!" timeout="5000"></element-notify>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify type="info" message="This is an info notification!" timeout="5000"></element-notify>
            `}</ide-code>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-notify type="warning" message="This is a warning notification!" timeout="5000"></element-notify>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify type="warning" message="This is a warning notification!" timeout="5000"></element-notify>
            `}</ide-code>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-notify type="error" message="This is an error notification!" timeout="5000"></element-notify>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify type="error" message="This is an error notification!" timeout="5000"></element-notify>
            `}</ide-code>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-notify type="success" message="This is a success notification!" timeout="5000"></element-notify>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify type="success" message="This is a success notification!" timeout="5000"></element-notify>
            `}</ide-code>

            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Position')}
            </h2>

            <div class="mb-10">
            Notifications can be positioned at the top, bottom, left, right, or center using the respective props.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-notify top left message="Positioned at the top left!" timeout="5000"></element-notify>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify top left message="Positioned at the top left!" timeout="5000"></element-notify>
            `}</ide-code>

            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Timeout')}
            </h2>

            <div class="mb-10">
            You can control the duration of the notification before it disappears using the <code>timeout</code> prop.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-notify type="info" message="Custom timeout notification!" timeout="8000"></element-notify>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify type="info" message="Custom timeout notification!" timeout="8000"></element-notify>
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