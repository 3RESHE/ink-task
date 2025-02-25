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
            <a class="block tx-t-0" href="# Loaders">{_(' Loaders')}</a>
            <nav class="pl-20">
                <a class="block tx-t-1" href="#props">{_('Props')}</a>
                <a class="block tx-t-1" href="#types">{_('Types')}</a>
                <a class="block tx-t-1" href="#size">{_('Size')}</a>
                <a class="block tx-t-1" href="#color">{_('Color')}</a>
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


        
        <a name=" Loaders"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_(' Loaders')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Badge from '@stackpress/ink-ui/element/loader';
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
          <table-col>size</table-col>
          <table-col>Number</table-col>
          <table-col>No</table-col>
          <table-col>{_('Sets the width and height of the loader (default: 20px)')}</table-col>
        </table-row>

        <table-row>
          <table-col>slice</table-col>
          <table-col>Number</table-col>
          <table-col>No</table-col>
          <table-col>{_('Determines how many parts of the border are transparent (0-3)')}</table-col>
        </table-row>

        <table-row>
          <table-col>speed</table-col>
          <table-col>Number</table-col>
          <table-col>No</table-col>
          <table-col>{_('Sets the animation speed in milliseconds (default: 1000ms)')}</table-col>
        </table-row>

        <table-row>
          <table-col>thickness</table-col>
          <table-col>Number</table-col>
          <table-col>No</table-col>
          <table-col>{_('Sets the border thickness (default: 2px)')}</table-col>
        </table-row>

        <table-row>
          <table-col>solid</table-col>
          <table-col>Boolean</table-col>
          <table-col>No</table-col>
          <table-col>{_('Sets the border style to solid')}</table-col>
        </table-row>

        <table-row>
          <table-col>dotted</table-col>
          <table-col>Boolean</table-col>
          <table-col>No</table-col>
          <table-col>{_('Sets the border style to dotted')}</table-col>
        </table-row>

        <table-row>
          <table-col>dashed</table-col>
          <table-col>Boolean</table-col>
          <table-col>No</table-col>
          <table-col>{_('Sets the border style to dashed')}</table-col>
        </table-row>
      </layout-table>


    
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Types')}
          </h2>

          <div class="mb-10">
            Loaders support different border styles:  
            <span class="tx-italic p-3 b-solid">Solid</span>,  
            <span class="tx-italic p-3 b-dotted">Dotted</span>,  
            <span class="tx-italic p-3 b-dashed">Dashed</span>.
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader solid size="40" class="tx-primary"></element-loader>
            </div>
          </div>

          <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-loader solid size="40" class="tx-primary"></element-loader>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dotted size="40" class="tx-success"></element-loader>
            </div>
          </div>

          <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-loader dotted size="40" class="tx-success"></element-loader>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dashed size="40" class="tx-error"></element-loader>
            </div>
          </div>

          <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-loader dashed size="40" class="tx-error"></element-loader>
          `}</ide-code>

          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Size')}
          </h2>

          <div class="mb-10">
            Loaders can have custom sizes using the <code>size</code> prop.
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dotted size="60" class="tx-warning"></element-loader>
            </div>
          </div>

          <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-loader dotted size="60" class="tx-warning"></element-loader>
          `}</ide-code>

          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Speed')}
          </h2>

          <div class="mb-10">
            Control the animation speed using the <code>speed</code> prop (in milliseconds).
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader dashed size="40" speed="500" class="tx-info"></element-loader>
            </div>
          </div>

          <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-loader size="40" speed="500" class="tx-info"></element-loader>
          `}</ide-code>

          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Slice Effect')}
          </h2>

          <div class="mb-10">
            You can modify the loader by adjusting the <code>slice</code> prop (0-3).
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <element-loader info slice="2"></element-loader>
            </div>
          </div>

          <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-loader info slice="2"></element-loader>
          `}</ide-code>

            <h2 class="tx-primary tx-upper tx-30 py-20">
              {_('Custom Thickness & Border Styles')}
            </h2>

            <div class="mb-10">
              The <code>thickness</code> prop controls the border width, and <code>solid</code>, <code>dotted</code>, and <code>dashed</code> determine the border style.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-loader success size="5" thickness="5" dotted></element-loader>
              </div>
            </div>

            <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
              <element-loader success size="5" thickness="5" dotted></element-loader>
            `}</ide-code>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-loader warning dashed></element-loader>
              </div>
            </div>

            <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
              <element-loader warning dashed></element-loader>
            `}</ide-code>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-loader error dashed thickness="10" size="10" speed="1500"></element-loader>
              </div>
            </div>

            <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
              <element-loader error dashed thickness="10" size="10" speed="1500"></element-loader>
            `}</ide-code>



                        
          

            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/icons.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Icon')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/notify.html">
              {_('Notify')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>