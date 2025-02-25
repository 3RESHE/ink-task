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
    { label: 'Icons' }
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
            <a class="block tx-t-0" href="#icons">{_('Icons')}</a>
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


        
        <a name="icons"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_('Icons')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Badge from '@stackpress/ink-ui/element/icon';
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
                <table-col>name</table-col>
                <table-col>String</table-col>
                <table-col>Yes</table-col>
                <table-col>{_('Icon name, e.g., "home", "user", "bell"')}</table-col>
            </table-row>

            <table-row>
                <table-col>solid</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Uses solid style (default)')}</table-col>
            </table-row>

            <table-row>
                <table-col>brand</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Uses brand style (e.g., social media logos)')}</table-col>
            </table-row>

            <table-row>
                <table-col>size</table-col>
                <table-col>String</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets font-size, e.g., "16px", "2rem"')}</table-col>
            </table-row>

            <table-row>
                <table-col>color</table-col>
                <table-col>String</table-col>
                <table-col>No</table-col>
                <table-col>{_('Custom color, accepts named colors or HEX')}</table-col>
            </table-row>

            <table-row>
                <table-col>class</table-col>
                <table-col>String</table-col>
                <table-col>No</table-col>
                <table-col>{_('Additional CSS classes for styling (e.g., "tx-info", "tx-warning")')}</table-col>
            </table-row>
            
            </layout-table>



        <a name="types"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">
          {_('Types')}
        </h2>

        <div class="mb-10">
          Icons have different types based on their usage:
          <span class="tx-info tx-italic p-3">info</span>,
          <span class="tx-warning tx-italic p-3">warning</span>,
          <span class="tx-success tx-italic p-3">success</span>,
          <span class="tx-error tx-italic p-3">error</span>.
        </div>

        <div class="basis-third-10 lg-basis-half-10 md-basis-full">
          <div class="bg-t-3 pt-10 pb-10 flex flex-center">
            <element-icon name="info-circle" class="tx-info" />
          </div>
        </div>

        <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
          <element-icon name="info-circle" class="tx-info" />
        `}</ide-code>

        <div class="basis-third-10 lg-basis-half-10 md-basis-full">
          <div class="bg-t-3 pt-10 pb-10 flex flex-center">
            <element-icon name="exclamation-triangle" class="tx-warning" />
          </div>
        </div>

        <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
          <element-icon name="exclamation-triangle" class="tx-warning" />
        `}</ide-code>

        <div class="basis-third-10 lg-basis-half-10 md-basis-full">
          <div class="bg-t-3 pt-10 pb-10 flex flex-center">
            <element-icon name="check-circle" class="tx-success" />
          </div>
        </div>

        <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
          <element-icon name="check-circle" class="tx-success" />
        `}</ide-code>

        <div class="basis-third-10 lg-basis-half-10 md-basis-full">
          <div class="bg-t-3 pt-10 pb-10 flex flex-center">
            <element-icon name="times-circle" class="tx-error" />
          </div>
        </div>

        <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
          <element-icon name="times-circle" class="tx-error" />
        `}</ide-code>



            <a name="basic"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Basic Icons')}
            </h2>

            <div class="mb-10">
            The <code>name</code> prop determines which icon to display.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-icon name="home"></element-icon>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="home"></element-icon>
            `}</ide-code>



            <a name="types"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Solid vs. Brand Icons')}
            </h2>

            <div class="mb-10">
            Use <code>solid</code> for default icons and <code>brand</code> for logos and trademarks.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-icon name="user" solid></element-icon>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="user" solid></element-icon>
            `}</ide-code>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-icon name="github" brand></element-icon>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="github" brand></element-icon>
            `}</ide-code>



            <a name="size"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Sizes')}
            </h2>

            <div class="mb-10">
            Use the <code>size</code> prop to control the icon size.
            </div>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-icon name="bell" size="16"></element-icon>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="bell" size="16"></element-icon>
            `}</ide-code>

            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
                <element-icon name="bell" size="32"></element-icon>
            </div>
            </div>

            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="bell" size="32"></element-icon>
            `}</ide-code>


        <a name="color"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">
        {_('Custom Colors')}
        </h2>

        <div class="mb-10">
        The <code>color</code> prop allows changing the icon color.
        </div>

        <div class="basis-third-10 lg-basis-half-10 md-basis-full">
        <div class="bg-t-3 pt-10 pb-10 flex flex-center">
            <element-icon name="heart" color="red"></element-icon>
        </div>
        </div>

        <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
        <element-icon name="heart" color="red"></element-icon>
        `}</ide-code>

        <div class="basis-third-10 lg-basis-half-10 md-basis-full">
        <div class="bg-t-3 pt-10 pb-10 flex flex-center">
            <element-icon name="star" color="#facc15"></element-icon>
        </div>
        </div>

        <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
        <element-icon name="star" color="#facc15"></element-icon>
        `}</ide-code>

            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/crumbs.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Crumbs')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/loader.html">
              {_('Loaders')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>