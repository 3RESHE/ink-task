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
    { label: 'Crumbs' }
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
            <a class="block tx-t-0" href="#breadcrumbs">{_('Breadcrumbs')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic-usage">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#link-styling">• {_('Link Styling')}</a>
              <a class="block tx-t-1" href="#separator-variants">• {_('Separator Variants')}</a>
              <a class="block tx-t-1" href="#icon-styling">• {_('Icon Styling')}</a>
              <a class="block tx-t-1" href="#size-variants">• {_('Size Variants')}</a>
              <a class="block tx-t-1" href="#spacing-and-customizations">• {_('Spacing & Customization')}</a>
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
        <a name="breadcrumbs"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Breadcrumbs')}</h1>

          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Crumbs from '@stackpress/ink-ui/element/crumbs';
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
              <table-col>crumbs</table-col>
              <table-col>Array</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('List of breadcrumb items with labels, icons, and links')}</table-col>
            </table-row>
            <table-row>
              <table-col>block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display breadcrumbs as a block element')}</table-col>
            </table-row>
            <table-row>
              <table-col>link</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles and properties for breadcrumb links')}</table-col>
            </table-row>
            <table-row>
              <table-col>sep</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles and properties for separators')}</table-col>
            </table-row>
            <table-row>
              <table-col>icon</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles and properties for icons')}</table-col>
            </table-row>
            <table-row>
              <table-col>xs, sm, md, lg, xl, xl2, xl3, xl4, xl5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Size variations for icons and separators')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Color for icons and separators')}</table-col>
            </table-row>
            <table-row>
              <table-col>white, black, info, warning, success, error, muted, primary, secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Color variations for icons and separators')}</table-col>
            </table-row>
            <table-row>
              <table-col>spacing</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Spacing between separator icons')}</table-col>
            </table-row>
          </layout-table>


 <a name="basic-usage"></a>
<!-- Basic Usage -->
<h3 class="tx-24 mt-20">Basic Usage</h3>
<div class="mb-10">Responsive breadcrumb layout inside a container:</div>
<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 h-120 flex flex-center p-10 rounded-2xl shadow-md">
    <element-crumbs crumbs={crumbs} block bold white underline icon-muted link-primary spacing={2} />
  </div>
</div>
  <ide-code numbers class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<script>
        const crumbs = [
          { icon: 'home', label: 'Home', href: '/ink/index.html' },
          { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
          { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
          { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
          { label: 'Crumbs' }
        ];
  </script>

  <div class="basis-third-10 lg-basis-half-10 md-basis-full">
    <div class="bg-t-3 h-120 flex flex-center p-10 rounded-2xl shadow-md">
      <element-crumbs 
        crumbs={crumbs} 
        block 
        bold 
        white 
        underline
        icon-muted
        link-primary
        spacing={2}
      />
    </div>
    <a 
      class="block tx-center tx-primary p-10 b-solid b-t-3 b-1 hover-bg-t-2 rounded-b-2xl transition-all" 
      href="/ink/ui/components/crumbs.html"
    >
      Crumbs
    </a>
  </div>`}
        </ide-code>

          <!-- Link Styling -->
           <a name="link-styling"></a>
          <h3 class="tx-24 mt-20">Link Styling</h3>
          <div class="mb-10">Example with colored link:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} link-warning block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} link-warning block />`}</ide-code>


          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} link-success block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} link-success block />`}</ide-code>

          <!-- Separator Variants -->
           <a name="separator-variants"></a>
          <h3 class="tx-24 mt-20">Separator Variants</h3>
          <div class="mb-10">Example with muted separator:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} sep-muted link-primary />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} sep-muted link-primary />`}</ide-code>
          <div class="mb-10">Example with colored separator:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} sep-success link-primary />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} sep-success link-primary />`}</ide-code>

                    <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} sep-warning link-primary />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} sep-warning link-primary />`}</ide-code>

          <!-- Icon Styling -->
           <a name="icon-styling"></a>
          <h3 class="tx-24 mt-20">Icon Styling</h3>
          <div class="mb-10">Example with muted icons:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} icon-muted link-primary block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} icon-muted link-primary block />`}</ide-code>

          <div class="mb-10">Example with colored icons:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} icon-success link-primary block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} icon-success link-primary block />`}</ide-code>
                    <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} icon-warning link-primary block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} icon-warning link-primary block />`}</ide-code>

          <!-- Size Variants -->
           <a name="size-variants"></a>
          <h3 class="tx-24 mt-20">Size Variants</h3>
          <div class="mb-10">Example with different sizes:</div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} link-primary block lg/>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} link-primary block lg/>`}</ide-code>

                    <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} link-primary block xs/>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} link-primary block xs/>`}</ide-code>

          <!-- Spacing & Customization -->
           <a name="spacing-and-customization"></a>
          <h3 class="tx-24 mt-20">Spacing & Customization</h3>
          <div class="mb-10">Example with spacing:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} spacing={5} link-primary block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} spacing={5} link-primary block />`}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} spacing={2} link-primary block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} spacing={2} link-primary block />`}</ide-code>

          <div class="mb-10">Example with custom colors:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} color="white" link-primary block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`<element-crumbs crumbs={crumbs} color="white" link-primary block />`}</ide-code>

          <div class="mb-10">Example with link styling:</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-crumbs crumbs={crumbs} link={{color: 'salmon'}} block />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim>{`
          <element-crumbs crumbs={crumbs} link={{color: 'salmon'}} block />`}
          </ide-code>


          
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/badge.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Badges')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/icon.html">
              {_('Icons')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>

      
      </main>
    </panel-layout>
  </body>
</html>
