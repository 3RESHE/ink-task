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
<link rel="import" type="component" href="@stackpress/ink-ui/element/tooltip.ink" name="element-tip" />
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
    { label: 'Tooltips' }
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
            {_(' Tooltips')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Badge from '@stackpress/ink-ui/element/panel';
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
                        <table-col>top</table-col>
                        <table-col>Boolean/String/Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Positions the tooltip at the top. Can be a boolean, number (px), or string (e.g., "10px").')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>bottom</table-col>
                        <table-col>Boolean/String/Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Positions the tooltip at the bottom. Can be a boolean, number (px), or string (e.g., "10px").')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>left</table-col>
                        <table-col>Boolean/String/Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Positions the tooltip to the left. Can be a boolean, number (px), or string (e.g., "10px").')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>right</table-col>
                        <table-col>Boolean/String/Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Positions the tooltip to the right. Can be a boolean, number (px), or string (e.g., "10px").')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>color</table-col>
                        <table-col>String</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text color (e.g., "info", "primary", "success").')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>white</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to white.')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>black</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to black.')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>info</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to an informational color (blue).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>warning</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to a warning color (yellow).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>success</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to a success color (green).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>error</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to an error color (red).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>muted</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to a muted color (gray).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>primary</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to a primary color (brand color).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>secondary</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the tooltip text to a secondary color.')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>curved</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Applies a curved border to the tooltip.')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>curve</table-col>
                        <table-col>Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Specifies the radius of the tooltip\'s border.')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>center</table-col>
                        <table-col>Boolean</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Centers the tooltip text.')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>padding</table-col>
                        <table-col>Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the padding inside the tooltip (in pixels).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>opacity</table-col>
                        <table-col>Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Adjusts the opacity of the tooltip (0-100).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>width</table-col>
                        <table-col>String/Number</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the width of the tooltip. If "auto", it adjusts automatically. Can also be a number (px).')}</table-col>
                    </table-row>

                    <table-row>
                        <table-col>background</table-col>
                        <table-col>String</table-col>
                        <table-col>No</table-col>
                        <table-col>{_('Sets the background color of the tooltip.')}</table-col>
                    </table-row>

                    </layout-table>


<h2 class="tx-primary tx-upper tx-30 py-20">
  {_('Tooltip with Info Background')}
</h2>

<div class="mb-10">
  {_('This example demonstrates a tooltip with an info background. It appears above the text with curved corners, some padding, and an opacity of 80%. The tooltip shows when you hover over the "Hover me!" text, positioned above it.')}
</div>

<!-- Boxed Tooltip Example -->
<div class="bg-t-3 h-120 flex flex-center p-20 mb-20">
  <div class="tx-center tooltip-trigger">
    Hover me!
    <element-tip 
      background-info
      curved
      top="-30"
      left="50"
      padding="5"
      opacity="80"
      width="150"
    >
      This is the first and last name
    </element-tip>
  </div>
</div>

<ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
  <element-tip 
    background-info
    curved
    top="-30"
    left="50"
    padding="5"
    opacity="80"
    width="150"
  >
    This is the first and last name
  </element-tip>
`}</ide-code>

<h2 class="tx-primary tx-upper tx-30 py-20">
  {_('Tooltip with Success Background')}
</h2>

<div class="mb-10">
  {_('This example shows a tooltip with a success background (green). The tooltip is positioned to the bottom-right of the element, with a subtle curve and padding.')}
</div>

<!-- Boxed Tooltip Example -->
<div class="bg-t-3 h-120 flex flex-center p-20 mb-20">
  <div class="tx-center tooltip-trigger">
    Hover me to see success tooltip!
    <element-tip 
      background-success
      curved
      bottom="10" 
      right="10"  
      padding="10"
      opacity="90"
    >
      Successfully completed!
    </element-tip>
  </div>
</div>

<ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
  <element-tip 
    background-success
    curved
    bottom="10"
    right="10"
    padding="10"
    opacity="90"
  >
    Successfully completed!
  </element-tip>
`}</ide-code>

<h2 class="tx-primary tx-upper tx-30 py-20">
  {_('Tooltip with Error Background')}
</h2>

<div class="mb-10">
  {_('This example demonstrates a tooltip with an error background (red) that appears on hover. The tooltip has custom width, and the text is displayed with some padding and a background color. It appears above the text and is aligned centrally.')}
</div>

<!-- Boxed Tooltip Example -->
<div class="bg-t-3 h-120 flex flex-center p-20 mb-20">
  <div class="tx-center tooltip-trigger">
    Hover me to see error tooltip!
    <element-tip 
      background-error
      curved
      top="20"    
      left="50"
      padding="8"
      opacity="95"
      width="180"
    >
      An error has occurred.
    </element-tip>
  </div>
</div>

<ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
  <element-tip 
    background-error
    curved
    top="20"
    left="50"
    padding="8"
    opacity="95"
    width="180"
  >
    An error has occurred.
  </element-tip>
`}</ide-code>

<h2 class="tx-primary tx-upper tx-30 py-20">
  {_('Tooltip with Warning Background')}
</h2>

<div class="mb-10">
  {_('This example features a tooltip with a warning background (yellow). It appears to the right of the trigger element and has a larger font size for better visibility.')}
</div>

<!-- Boxed Tooltip Example -->
<div class="bg-t-3 h-120 flex flex-center p-20 mb-20">
  <div class="tx-center tooltip-trigger">
    Hover me to see warning tooltip!
    <element-tip 
      background-warning
      curved
      right="20"  
      padding="12"
      opacity="85"
      width="200"
    >
      Please take caution!
    </element-tip>
  </div>
</div>

<ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
  <element-tip 
    background-warning
    curved
    right="20"
    padding="12"
    opacity="85"
    width="200"
  >
    Please take caution!
  </element-tip>
`}</ide-code>

<h2 class="tx-primary tx-upper tx-30 py-20">
  {_('Tooltip with Centered Text and Curved Border')}
</h2>

<div class="mb-10">
  {_('This example demonstrates a tooltip with a centered alignment, and the tooltip has a curved border. The tooltip will be displayed above the text, with subtle styling.')}
</div>

<!-- Boxed Tooltip Example -->
<div class="bg-t-3 h-120 flex flex-center p-20 mb-20">
  <div class="tx-center tooltip-trigger">
    Hover over me!
    <element-tip 
      background-muted
      curved
      top="-20"   
      padding="8"
      opacity="80"
      width="120"
      center
    >
      Information about this text.
    </element-tip>
  </div>
</div>

<ide-code class="scroll-y-auto" class="mb-10" trim detab={12}>{`
  <element-tip 
    background-muted
    curved
    top="-20"
    padding="8"
    opacity="80"
    width="120"
    center
  >
    Information about this text.
  </element-tip>
`}</ide-code>





            

            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/tab.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Tab')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/alert.html">
              {_('Alert')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>