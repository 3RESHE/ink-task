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
<link rel="import" type="component" href="@stackpress/ink-ui/element/progress.ink" name="element-progress" />
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
    { label: 'Progress' }
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
            <a class="block tx-t-0" href="#progress">{_('Progress')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#BasicProgressBar">• {_('Basic Progress Bar')}</a>
              <a class="block tx-t-1" href="#ProgressBarColors">• {_('Progress Bar Colors')}</a>
              <a class="block tx-t-1" href="#Full-WidthProgressBar">• {_('Full-Width Progress Bar')}</a>
              <a class="block tx-t-1" href="#StatusIndicators">• {_('Status Indicators')}</a>
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

          <a name="progress"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_('Progress')}
          </h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Progress from '@stackpress/ink-ui/element/progress';
            </ide-code>
          </ide-app>

          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Props')}
          </h2>
          <layout-table top head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>

            <table-row>
              <table-col>width</table-col>
              <table-col>Number</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Defines the width of the progress bar, from 0 to 100%.')}</table-col>
            </table-row>

            <table-row>
              <table-col>height</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the height of the progress bar in pixels (default: 20).')}</table-col>
            </table-row>

            <table-row>
              <table-col>bg</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the background color of the progress container (e.g., "muted", "primary").')}</table-col>
            </table-row>

            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies the "info" color style to the progress bar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies the "success" color style to the progress bar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies the "warning" color style to the progress bar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies the "error" color style to the progress bar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>children</table-col>
              <table-col>Slot</table-col>
              <table-col>No</table-col>
              <table-col>{_('Allows custom label text to be displayed within the progress bar.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Progress Bar -->
          <a name="BasicProgressBar"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Progress Bar')}</h2>
          <div class="mb-10">
            {_('A simple progress bar with 50% width, "info" color, and a muted background. It has rounded corners and a height of 20px for a clean, minimal look.')}
          </div>

          <div class="bg-t-3 h-120 flex flex-center">
            <element-progress width={50} info class="bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={50} info class="bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20" />
          `}</ide-code>

          <!-- Progress Bar with Different Colors -->
          <a name="ProgressBarColors"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Progress Bar Colors')}</h2>
          <div class="mb-10">
            {_('A progress bar with 75% width, "success" color, and a primary-colored background. The height is set to 30px, giving it a taller appearance.')}
          </div>

          <div class="bg-t-3 h-120 flex flex-center">
            <element-progress width={75} success class="bg-primary rounded tx-13 h-30 tx-lh-30 w-full-30" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={75} success class="bg-primary rounded tx-13 h-30 tx-lh-30 w-full-30" />
          `}</ide-code>

          <div class="mb-10">
            {_('A progress bar with a width of 40%, the "warning" color, and a height of 10px for a thinner, more compact look.')}
          </div>

          <div class="bg-t-3 h-120 flex flex-center">
            <element-progress width={40} warning class="bg-warning rounded tx-13 h-10 tx-lh-10 w-full-10" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={40} warning class="bg-warning rounded tx-13 h-10 tx-lh-10 w-full-10" />
          `}</ide-code>

          <!-- Full-Width Progress Bar -->
          <a name="Full-WidthProgressBar"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Full-Width Progress Bar')}</h2>
          <div class="mb-10">
            {_('A 100% width progress bar with the "success" color, a height of 20px, and a full-length progress bar to indicate completion.')}
          </div>

          <div class="bg-t-3 h-120 flex flex-center">
            <element-progress width={100} success class="bg-success rounded tx-13 h-20 tx-lh-20 w-full-20" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={100} success class="bg-success rounded tx-13 h-20 tx-lh-20 w-full-20" />
          `}</ide-code>

          <!-- Status Indicators -->
          <a name="StatusIndicators"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Status Indicators')}</h2>
          <div class="mb-10">
            {_('A progress bar with a 20% width, a height of 10px, and an "error" background color to indicate a negative status or issue.')}
          </div>

          <div class="bg-t-3 h-120 flex flex-center">
            <element-progress width={20} class="rounded bg-error tx-13 h-10 tx-lh-10 w-full-10" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={20} class="rounded bg-error tx-13 h-10 tx-lh-10 w-full-10" />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/panel.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Panels')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/tab.html">
              {_('Tabs')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>