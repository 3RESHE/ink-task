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
<link rel="import" type="component" href="@stackpress/ink-ui/element/pager.ink" name="element-pager" />
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
    { label: 'Pager' }
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
            <a class="block tx-t-0" href="#pager#">{_('Pager')}</a>
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
            {_(' Pager')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Badge from '@stackpress/ink-ui/element/pager';
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
                    <table-col>total</table-col>
                    <table-col>Number</table-col>
                    <table-col>Yes</table-col>
                    <table-col>{_('Total number of items to paginate.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>start</table-col>
                    <table-col>Number</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Start offset for pagination.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>range</table-col>
                    <table-col>Number</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Number of items per page.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>radius</table-col>
                    <table-col>Number</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Determines the number of page links to show around the current page.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>next</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Flag to show the "next" button.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>prev</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Flag to show the "previous" button.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>rewind</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Flag to show the "rewind" button.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>forward</table-col>
                    <table-col>Boolean</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Flag to show the "forward" button.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>link</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Custom color for the pagination link.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>control</table-col>
                    <table-col>Object</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Custom styles for pagination control elements.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>border</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Border color for pagination controls.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>background</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Background color for pagination controls.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>square</table-col>
                    <table-col>Number</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Defines the size of pagination controls if set.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>size</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Default size of the icon for pagination controls.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>xs, sm, md, lg, xl, xl2, xl3, xl4, xl5</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Various sizes for icon (pass to icon component).')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>color</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Default color for pagination controls.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>white, black, info, warning, success, error, muted, primary, secondary</table-col>
                    <table-col>String</table-col>
                    <table-col>No</table-col>
                    <table-col>{_('Color options for pagination components.')}</table-col>
                  </table-row>

                  <table-row>
                    <table-col>page (select)</table-col>
                    <table-col>Function</table-col>
                    <table-col>Yes</table-col>
                    <table-col>{_('Handler function to select a page.')}</table-col>
                  </table-row>
                </layout-table>


        <a name="PaginationExample"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Pagination Example')}
            </h2>

            <div class="mb-10">
            Pagination allows you to control the navigation through multiple pages with customizable styles and controls. Below is an example of a fully featured pagination component.
            </div>

            <div class="bg-t-3 h-120 flex flex-center">
            <element-pager 
                total={1000} 
                range={50} 
                start={0} 
                show={5} 
                next
                prev
                rewind
                forward
                white
                bold
                underline
                bg-info
                border-theme="bd-2"
                square={40}
                select={console.log}
            />
            </div>

            <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-pager 
            total={1000} 
            range={50} 
            start={0} 
            show={5} 
            next
            prev
            rewind
            forward
            white
            bold
            underline
            bg-info
            border-theme="bd-2"
            square={40}
            select={console.log}
            />
            `}</ide-code>


         <a name="CustomRangeAndPageSelection"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Range and Page Selection')}
            </h2>

            <div class="mb-10">
            Customize the range of items per page and the page selection. Here is an example where the pagination starts from the 90th item, with 100 items per page and a display of 3 pages at a time.
            </div>

            <div class="bg-t-3 h-120 flex flex-center">
            <element-pager 
                total={500} 
                range={100} 
                start={90} 
                show={3} 
                next
                prev
                rewind
                forward
                white
                bold
                underline
                bg-warning
                border-theme="bd-2"
                square={40}
                select={console.log}
            />
            </div>

            <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-pager 
            total={500} 
            range={100} 
            start={90} 
            show={3} 
            next
            prev
            rewind
            forward
            white
            bold
            underline
            bg-warning
            border-theme="bd-2"
            square={40}
            select={console.log}
            />
            `}</ide-code>


            <a name="CustomControlsAndStyles"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Controls and Styles')}
            </h2>

            <div class="mb-10">
            Pagination can have various styles for buttons like square and customizable borders. This example shows a pagination with square controls and different background colors for pagination elements.
            </div>

            <div class="bg-t-3 h-120 flex flex-center">
            <element-pager 
                total={500} 
                range={50} 
                start={0} 
                show={5} 
                next
                prev
                rewind
                forward
                white
                bold
                underline
                bg-success
                border-theme="bd-3"
                square={40}
                select={console.log}
            />
            </div>

            <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-pager 
            total={500} 
            range={50} 
            start={0} 
            show={5} 
            next
            prev
            rewind
            forward
            white
            bold
            underline
            bg-success
            border-theme="bd-3"
            square={40}
            select={console.log}
            />
            `}</ide-code>


         <a name="PaginationWithNoForwardOrRewind"></a>
            <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Pagination with No Forward or Rewind')}
            </h2>

            <div class="mb-10">
            You can control whether to show the forward or rewind buttons using the corresponding props. This example disables forward and rewind buttons.
            </div>

            <div class="bg-t-3 h-120 flex flex-center">
            <element-pager 
                total={500} 
                range={50} 
                start={0} 
                show={5} 
                next
                prev
                white
                bold
                underline
                bg-danger
                border-theme="bd-4"
                square={40}
                select={console.log}
            />
            </div>

            <ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
            <element-pager 
            total={500} 
            range={50} 
            start={0} 
            show={5} 
            next
            prev
            white
            bold
            underline
            bg-danger
            border-theme="bd-4"
            square={40}
            select={console.log}
            />
            `}</ide-code>

            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/notify.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Notify')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/panel.html">
              {_('Panels')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>