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
    { label: 'Table' }
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
            {_(' Table')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
               <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim detab={12}>{`
                import Table, { Thead, Trow, Tcol } from '@stackpress/ink-ui/layout/table';
                `}</ide-code>
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
                  <table-col>nowrap</table-col>
                  <table-col>Boolean</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Prevents text wrapping inside table cells.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>wrap1</table-col>
                  <table-col>Boolean</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Sets a cell width of 100px for text wrapping.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>wrap2</table-col>
                  <table-col>Boolean</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Sets a cell width of 200px for text wrapping.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>wrap3</table-col>
                  <table-col>Boolean</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Sets a cell width of 300px for text wrapping.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>wrap4</table-col>
                  <table-col>Boolean</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Sets a cell width of 400px for text wrapping.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>wrap5</table-col>
                  <table-col>Boolean</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Sets a cell width of 500px for text wrapping.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>top</table-col>
                  <table-col>String | Number</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Makes the table header sticky at the top. Accepts a pixel or percentage value.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>bottom</table-col>
                  <table-col>String | Number</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Makes the table footer sticky at the bottom. Accepts a pixel or percentage value.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>left</table-col>
                  <table-col>String | Number</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Makes a column sticky on the left side. Accepts a pixel or percentage value.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>right</table-col>
                  <table-col>String | Number</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Makes a column sticky on the right side. Accepts a pixel or percentage value.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>head</table-col>
                  <table-col>String</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Custom class list for styling the table header.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>body</table-col>
                  <table-col>String</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Custom class list for styling the table body.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>odd</table-col>
                  <table-col>String</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Custom class list for styling odd table rows.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>even</table-col>
                  <table-col>String</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Custom class list for styling even table rows.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>foot</table-col>
                  <table-col>String</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Custom class list for styling the table footer.')}</table-col>
              </table-row>

              <table-row>
                  <table-col>sticky</table-col>
                  <table-col>Boolean</table-col>
                  <table-col>No</table-col>
                  <table-col>{_('Enables sticky positioning for headers, footers, or columns if any sticky props are set.')}</table-col>
              </table-row>

          </layout-table>




<h2 class="tx-primary tx-upper tx-30 py-20">
  {_('Table Component Examples')}
</h2>



<!-- Description for Example 1 -->
<div class="mb-10">
  The following example showcases a simple table layout using <code>layout-table</code>. 
  It includes a header row and multiple data rows with alternating background colors.
</div>


<!-- Table Example 1 -->
<layout-table 
  top
  head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
  body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('Name')}</table-head>
  <table-head>{_('Role')}</table-head>
  <table-head>{_('Status')}</table-head>

  <table-row>
    <table-col>John Doe</table-col>
    <table-col>Developer</table-col>
    <table-col>Active</table-col>
  </table-row>

  <table-row>
    <table-col>Jane Smith</table-col>
    <table-col>Designer</table-col>
    <table-col>Pending</table-col>
  </table-row>

  <table-row>
    <table-col>Michael Lee</table-col>
    <table-col>Manager</table-col>
    <table-col>Inactive</table-col>
  </table-row>
</layout-table>

<!-- Code for Example 1 -->
 <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
<layout-table 
  top
  head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
  body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('Name')}</table-head>
  <table-head>{_('Role')}</table-head>
  <table-head>{_('Status')}</table-head>

  <table-row>
    <table-col>John Doe</table-col>
    <table-col>Developer</table-col>
    <table-col>Active</table-col>
  </table-row>

  <table-row>
    <table-col>Jane Smith</table-col>
    <table-col>Designer</table-col>
    <table-col>Pending</table-col>
  </table-row>

  <table-row>
    <table-col>Michael Lee</table-col>
    <table-col>Manager</table-col>
    <table-col>Inactive</table-col>
  </table-row>
</layout-table>
`}</ide-code>

<!-- Description for Example 2 -->
<div class="mb-10">
  This example demonstrates a table with a more detailed layout, 
  including an additional column for contact information.
</div>

<!-- Table Example 2 -->
<layout-table 
  top
  head="py-16 px-12 bg-primary tx-white b-solid b-black bt-1 bb-0 bx-0" 
  body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
  odd="bg-t-0"
  even="bg-t-2"
>
  <table-head>{_('Employee')}</table-head>
  <table-head>{_('Department')}</table-head>
  <table-head>{_('Status')}</table-head>
  <table-head>{_('Contact')}</table-head>

  <table-row>
    <table-col>Alice Johnson</table-col>
    <table-col>HR</table-col>
    <table-col>Active</table-col>
    <table-col>alice@example.com</table-col>
  </table-row>

  <table-row>
    <table-col>Bob Williams</table-col>
    <table-col>Engineering</table-col>
    <table-col>On Leave</table-col>
    <table-col>bob@example.com</table-col>
  </table-row>

  <table-row>
    <table-col>Sarah Brown</table-col>
    <table-col>Marketing</table-col>
    <table-col>Active</table-col>
    <table-col>sarah@example.com</table-col>
  </table-row>
</layout-table>

<!-- Code for Example 2 -->
 <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
<layout-table 
  top
  head="py-16 px-12 bg-primary tx-white b-solid b-black bt-1 bb-0 bx-0" 
  body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
  odd="bg-t-0"
  even="bg-t-2"
>
  <table-head>{_('Employee')}</table-head>
  <table-head>{_('Department')}</table-head>
  <table-head>{_('Status')}</table-head>
  <table-head>{_('Contact')}</table-head>

  <table-row>
    <table-col>Alice Johnson</table-col>
    <table-col>HR</table-col>
    <table-col>Active</table-col>
    <table-col>alice@example.com</table-col>
  </table-row>

  <table-row>
    <table-col>Bob Williams</table-col>
    <table-col>Engineering</table-col>
    <table-col>On Leave</table-col>
    <table-col>bob@example.com</table-col>
  </table-row>

  <table-row>
    <table-col>Sarah Brown</table-col>
    <table-col>Marketing</table-col>
    <table-col>Active</table-col>
    <table-col>sarah@example.com</table-col>
  </table-row>
</layout-table>
`}</ide-code>


<div class="mb-10">
  This table includes a solid border around all cells for better visibility.
</div>

<layout-table 
  top
  head="py-12 px-10 bg-t-1 b-solid b-black bt-1 bx-1"
  body="py-12 px-10 b-solid b-black bt-1 bx-1"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('ID')}</table-head>
  <table-head>{_('Name')}</table-head>
  <table-head>{_('Age')}</table-head>
  <table-head>{_('Country')}</table-head>

  <table-row>
    <table-col>1</table-col>
    <table-col>Emily Watson</table-col>
    <table-col>29</table-col>
    <table-col>USA</table-col>
  </table-row>

  <table-row>
    <table-col>2</table-col>
    <table-col>Omar Ali</table-col>
    <table-col>35</table-col>
    <table-col>UAE</table-col>
  </table-row>

  <table-row>
    <table-col>3</table-col>
    <table-col>Chen Wei</table-col>
    <table-col>41</table-col>
    <table-col>China</table-col>
  </table-row>
</layout-table>


<!-- Code for Example 1 -->
 <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
<layout-table 
  top
  head="py-12 px-10 bg-t-1 b-solid b-black bt-1 bx-1"
  body="py-12 px-10 b-solid b-black bt-1 bx-1"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('ID')}</table-head>
  <table-head>{_('Name')}</table-head>
  <table-head>{_('Age')}</table-head>
  <table-head>{_('Country')}</table-head>

  <table-row>
    <table-col>1</table-col>
    <table-col>Emily Watson</table-col>
    <table-col>29</table-col>
    <table-col>USA</table-col>
  </table-row>

  <table-row>
    <table-col>2</table-col>
    <table-col>Omar Ali</table-col>
    <table-col>35</table-col>
    <table-col>UAE</table-col>
  </table-row>

  <table-row>
    <table-col>3</table-col>
    <table-col>Chen Wei</table-col>
    <table-col>41</table-col>
    <table-col>China</table-col>
  </table-row>
</layout-table>
`}</ide-code>


<div class="mb-10">
  A striped table helps differentiate rows by alternating background colors.
</div>

<layout-table 
  top
  head="py-12 px-10 bg-t-2 tx-white"
  body="py-12 px-10"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('Product')}</table-head>
  <table-head>{_('Category')}</table-head>
  <table-head>{_('Price')}</table-head>
  <table-head>{_('Stock')}</table-head>

  <table-row>
    <table-col>iPhone 13</table-col>
    <table-col>Electronics</table-col>
    <table-col>$799</table-col>
    <table-col>In Stock</table-col>
  </table-row>

  <table-row>
    <table-col>Nike Sneakers</table-col>
    <table-col>Fashion</table-col>
    <table-col>$120</table-col>
    <table-col>Limited Stock</table-col>
  </table-row>

  <table-row>
    <table-col>Samsung TV</table-col>
    <table-col>Electronics</table-col>
    <table-col>$999</table-col>
    <table-col>Out of Stock</table-col>
  </table-row>
</layout-table>


<!-- Code for Example 1 -->
 <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
<layout-table 
  top
  head="py-12 px-10 bg-t-2 tx-white"
  body="py-12 px-10"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('Product')}</table-head>
  <table-head>{_('Category')}</table-head>
  <table-head>{_('Price')}</table-head>
  <table-head>{_('Stock')}</table-head>

  <table-row>
    <table-col>iPhone 13</table-col>
    <table-col>Electronics</table-col>
    <table-col>$799</table-col>
    <table-col>In Stock</table-col>
  </table-row>

  <table-row>
    <table-col>Nike Sneakers</table-col>
    <table-col>Fashion</table-col>
    <table-col>$120</table-col>
    <table-col>Limited Stock</table-col>
  </table-row>

  <table-row>
    <table-col>Samsung TV</table-col>
    <table-col>Electronics</table-col>
    <table-col>$999</table-col>
    <table-col>Out of Stock</table-col>
  </table-row>
</layout-table>

`}</ide-code>



<div class="mb-10">
  A table with status labels and icons for better user experience.
</div>

<layout-table 
  top
  head="py-12 px-10 bg-primary tx-white"
  body="py-12 px-10"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('User')}</table-head>
  <table-head>{_('Email')}</table-head>
  <table-head>{_('Status')}</table-head>
  <table-head>{_('Actions')}</table-head>

  <table-row>
    <table-col>John Doe</table-col>
    <table-col>john@example.com</table-col>
    <table-col><span class="bg-success tx-white py-4 px-8 rounded">Active</span></table-col>
    <table-col>
      <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
      <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
    </table-col>
  </table-row>

  <table-row>
    <table-col>Mary Jane</table-col>
    <table-col>mary@example.com</table-col>
    <table-col><span class="bg-warning tx-white py-4 px-8 rounded">Pending</span></table-col>
    <table-col>
      <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
      <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
    </table-col>
  </table-row>

  <table-row>
    <table-col>Mike Brown</table-col>
    <table-col>mike@example.com</table-col>
    <table-col><span class="bg-error tx-white py-4 px-8 rounded">Suspended</span></table-col>
    <table-col>
      <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
      <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
    </table-col>
  </table-row>
</layout-table>



 <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
<layout-table 
  top
  head="py-12 px-10 bg-primary tx-white"
  body="py-12 px-10"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head>{_('User')}</table-head>
  <table-head>{_('Email')}</table-head>
  <table-head>{_('Status')}</table-head>
  <table-head>{_('Actions')}</table-head>

  <table-row>
    <table-col>John Doe</table-col>
    <table-col>john@example.com</table-col>
    <table-col><span class="bg-success tx-white py-4 px-8 rounded">Active</span></table-col>
    <table-col>
      <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
      <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
    </table-col>
  </table-row>

  <table-row>
    <table-col>Mary Jane</table-col>
    <table-col>mary@example.com</table-col>
    <table-col><span class="bg-warning tx-white py-4 px-8 rounded">Pending</span></table-col>
    <table-col>
      <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
      <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
    </table-col>
  </table-row>

  <table-row>
    <table-col>Mike Brown</table-col>
    <table-col>mike@example.com</table-col>
    <table-col><span class="bg-error tx-white py-4 px-8 rounded">Suspended</span></table-col>
    <table-col>
      <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
      <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
    </table-col>
  </table-row>
</layout-table>
`}</ide-code>

<div class="mb-10">
  This table is responsive and allows horizontal scrolling on smaller screens.
</div>

<div class="overflow-auto">
  <layout-table 
    top
    head="py-12 px-10 bg-primary tx-white"
    body="py-12 px-10"
    odd="bg-t-0"
    even="bg-t-1"
  >
    <table-head>{_('Order ID')}</table-head>
    <table-head>{_('Customer')}</table-head>
    <table-head>{_('Total')}</table-head>
    <table-head>{_('Date')}</table-head>
    <table-head>{_('Status')}</table-head>

    <table-row>
      <table-col>#1001</table-col>
      <table-col>Jane Smith</table-col>
      <table-col>$200</table-col>
      <table-col>2025-02-28</table-col>
      <table-col><span class="bg-success tx-white py-4 px-8 rounded">Completed</span></table-col>
    </table-row>

    <table-row>
      <table-col>#1002</table-col>
      <table-col>Robert White</table-col>
      <table-col>$150</table-col>
      <table-col>2025-02-27</table-col>
      <table-col><span class="bg-warning tx-white py-4 px-8 rounded">Pending</span></table-col>
    </table-row>

    <table-row>
      <table-col>#1003</table-col>
      <table-col>Sarah Connor</table-col>
      <table-col>$300</table-col>
      <table-col>2025-02-26</table-col>
      <table-col><span class="bg-error tx-white py-4 px-8 rounded">Canceled</span></table-col>
    </table-row>
  </layout-table>
</div>


 <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
<div class="overflow-auto">
  <layout-table 
    top
    head="py-12 px-10 bg-primary tx-white"
    body="py-12 px-10"
    odd="bg-t-0"
    even="bg-t-1"
  >
    <table-head>{_('Order ID')}</table-head>
    <table-head>{_('Customer')}</table-head>
    <table-head>{_('Total')}</table-head>
    <table-head>{_('Date')}</table-head>
    <table-head>{_('Status')}</table-head>

    <table-row>
      <table-col>#1001</table-col>
      <table-col>Jane Smith</table-col>
      <table-col>$200</table-col>
      <table-col>2025-02-28</table-col>
      <table-col><span class="bg-success tx-white py-4 px-8 rounded">Completed</span></table-col>
    </table-row>

    <table-row>
      <table-col>#1002</table-col>
      <table-col>Robert White</table-col>
      <table-col>$150</table-col>
      <table-col>2025-02-27</table-col>
      <table-col><span class="bg-warning tx-white py-4 px-8 rounded">Pending</span></table-col>
    </table-row>

    <table-row>
      <table-col>#1003</table-col>
      <table-col>Sarah Connor</table-col>
      <table-col>$300</table-col>
      <table-col>2025-02-26</table-col>
      <table-col><span class="bg-error tx-white py-4 px-8 rounded">Canceled</span></table-col>
    </table-row>
  </layout-table>
</div>
`}</ide-code>


<div class="mb-10">
  This example demonstrates how to set custom column widths.
</div>

<layout-table 
  top
  head="py-12 px-10 bg-t-1 b-solid b-black"
  body="py-12 px-10"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head class="w-10">{_('ID')}</table-head>
  <table-head class="w-40">{_('Name')}</table-head>
  <table-head class="w-25">{_('Department')}</table-head>
  <table-head class="w-25">{_('Salary')}</table-head>

  <table-row>
    <table-col>1</table-col>
    <table-col>David Green</table-col>
    <table-col>HR</table-col>
    <table-col>$50,000</table-col>
  </table-row>

  <table-row>
    <table-col>2</table-col>
    <table-col>Anna Taylor</table-col>
    <table-col>IT</table-col>
    <table-col>$75,000</table-col>
  </table-row>

  <table-row>
    <table-col>3</table-col>
    <table-col>Michael Scott</table-col>
    <table-col>Sales</table-col>
    <table-col>$65,000</table-col>
  </table-row>
</layout-table>



 <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
<layout-table 
  top
  head="py-12 px-10 bg-t-1 b-solid b-black"
  body="py-12 px-10"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head class="w-10">{_('ID')}</table-head>
  <table-head class="w-40">{_('Name')}</table-head>
  <table-head class="w-25">{_('Department')}</table-head>
  <table-head class="w-25">{_('Salary')}</table-head>

  <table-row>
    <table-col>1</table-col>
    <table-col>David Green</table-col>
    <table-col>HR</table-col>
    <table-col>$50,000</table-col>
  </table-row>

  <table-row>
    <table-col>2</table-col>
    <table-col>Anna Taylor</table-col>
    <table-col>IT</table-col>
    <table-col>$75,000</table-col>
  </table-row>

  <table-row>
    <table-col>3</table-col>
    <table-col>Michael Scott</table-col>
    <table-col>Sales</table-col>
    <table-col>$65,000</table-col>
  </table-row>
</layout-table>
`}</ide-code>






            nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/tab.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Tabs')}
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