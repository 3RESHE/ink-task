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
            <a class="block tx-t-0" href="#pager">{_('Table')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#OutlineExample">• {_('Outline Example')}</a>
              <a class="block tx-t-1" href="#TableWithAdditionalColumn">• {_('Table with Additional Column')}</a>
              <a class="block tx-t-1" href="#TableWithBorders">• {_('Table with Borders')}</a>
              <a class="block tx-t-1" href="#StripedTable">• {_('Striped Table')}</a>
              <a class="block tx-t-1" href="#TableWithStatusLabels">• {_('Table with Status Labels')}</a>
              <a class="block tx-t-1" href="#ResponsiveTable">• {_('Responsive Table')}</a>
              <a class="block tx-t-1" href="#TableWithCustomColumnWidths">• {_('Table with Custom Column Widths')}</a>
              <a class="block tx-t-1" href="#TableWithIcons">• {_('Table with Icons')}</a>
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
            {_('Table')}
          </h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim detab={12}>{`
              import Table from '@stackpress/ink-ui/layout/table';
            `}</ide-code>
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
              <table-col>top</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the table header sticky at the top. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.')}</table-col>
            </table-row>

            <table-row>
              <table-col>bottom</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the table footer sticky at the bottom. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.')}</table-col>
            </table-row>

            <table-row>
              <table-col>left</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the first column sticky on the left. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.')}</table-col>
            </table-row>

            <table-row>
              <table-col>right</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the last column sticky on the right. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.')}</table-col>
            </table-row>

            <table-row>
              <table-col>head</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated class names applied to table headers (e.g., "bg-primary tx-white").')}</table-col>
            </table-row>

            <table-row>
              <table-col>body</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated class names applied to all body cells (e.g., "py-12 px-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>odd</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated class names applied to odd-numbered rows in the body (e.g., "bg-t-0").')}</table-col>
            </table-row>

            <table-row>
              <table-col>even</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated class names applied to even-numbered rows in the body (e.g., "bg-t-1").')}</table-col>
            </table-row>

            <table-row>
              <table-col>foot</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated class names applied to table footers (e.g., "bg-t-2").')}</table-col>
            </table-row>

            <table-row>
              <table-col>nowrap</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Prevents text wrapping in cells when set (e.g., nowrap=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)')}</table-col>
            </table-row>

            <table-row>
              <table-col>wrap1</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a fixed width of 100px for cells (e.g., wrap1=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)')}</table-col>
            </table-row>

            <table-row>
              <table-col>wrap2</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a fixed width of 200px for cells (e.g., wrap2=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)')}</table-col>
            </table-row>

            <table-row>
              <table-col>wrap3</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a fixed width of 300px for cells (e.g., wrap3=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)')}</table-col>
            </table-row>

            <table-row>
              <table-col>wrap4</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a fixed width of 400px for cells (e.g., wrap4=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)')}</table-col>
            </table-row>

            <table-row>
              <table-col>wrap5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a fixed width of 500px for cells (e.g., wrap5=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)')}</table-col>
            </table-row>
          </layout-table>

          <!-- Outline Example -->
          <a name="OutlineExample"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Outline Example')}</h2>
          <div class="mb-10">
            {_('A simple table using layout-table with alternating row colors.')}
          </div>
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

          <!-- Table with Additional Column -->
          <a name="TableWithAdditionalColumn"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Additional Column')}</h2>
          <div class="mb-10">
            {_('This example demonstrates a table with a more detailed layout, including an additional column for contact information.')}
          </div>
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

          <!-- Table with Borders -->
          <a name="TableWithBorders"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Borders')}</h2>
          <div class="mb-10">
            {_('This table includes a solid border around all cells for better visibility.')}
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

          <!-- Striped Table -->
          <a name="StripedTable"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Striped Table')}</h2>
          <div class="mb-10">
            {_('A striped table helps differentiate rows by alternating background colors.')}
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

          <!-- Table with Status Labels -->
          <a name="TableWithStatusLabels"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Status Labels')}</h2>
          <div class="mb-10">
            {_('A table with status labels and buttons for better user experience.')}
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

          <!-- Responsive Table -->
          <a name="ResponsiveTable"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Responsive Table')}</h2>
          <div class="mb-10">
            {_('This table is responsive and allows horizontal scrolling on smaller screens when wrapped in an overflow container.')}
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

          <!-- Table with Custom Column Widths -->
          <a name="TableWithCustomColumnWidths"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Custom Column Widths')}</h2>
          <div class="mb-10">
            {_('This example demonstrates how to set custom column widths using atomic classes or wrap props.')}
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

          <!-- Table with Icons -->
          <a name="TableWithIcons"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Icons')}</h2>
          <div class="mb-10">
            {_('This table uses element-icon components for statuses and action buttons.')}
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
              <table-col>
                <span class="flex items-center">
                  <element-icon name="check-circle" class="tx-success mr-6"></element-icon> Active
                </span>
              </table-col>
              <table-col>
                <element-icon name="eye" class="mr-5 tx-info" />
                <element-icon name="edit" class="mr-5 tx-warning" />
                <element-icon name="trash" class="tx-error" />
              </table-col>
            </table-row>
            <table-row>
              <table-col>Mary Jane</table-col>
              <table-col>mary@example.com</table-col>
              <table-col>
                <span class="flex items-center">
                  <element-icon name="clock" class="tx-warning mr-6"></element-icon> Pending
                </span>
              </table-col>
              <table-col>
                <element-icon name="eye" class="mr-5 tx-info" />
                <element-icon name="edit" class="mr-5 tx-warning" />
                <element-icon name="trash" class="tx-error" />
              </table-col>
            </table-row>
            <table-row>
              <table-col>Mike Brown</table-col>
              <table-col>mike@example.com</table-col>
              <table-col>
                <span class="flex items-center">
                  <element-icon name="times-circle" class="tx-error mr-6"></element-icon> Suspended
                </span>
              </table-col>
              <table-col>
                <element-icon name="eye" class="mr-5 tx-info" />
                <element-icon name="edit" class="mr-5 tx-warning" />
                <element-icon name="trash" class="tx-error" />
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
                <table-col>
                  <span class="flex items-center">
                    <element-icon name="check-circle" class="tx-success mr-6"></element-icon> Active
                  </span>
                </table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
              <table-row>
                <table-col>Mary Jane</table-col>
                <table-col>mary@example.com</table-col>
                <table-col>
                  <span class="flex items-center">
                    <element-icon name="clock" class="tx-warning mr-6"></element-icon> Pending
                  </span>
                </table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
              <table-row>
                <table-col>Mike Brown</table-col>
                <table-col>mike@example.com</table-col>
                <table-col>
                  <span class="flex items-center">
                    <element-icon name="times-circle" class="tx-error mr-6"></element-icon> Suspended
                  </span>
                </table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
            </layout-table>
          `}</ide-code>


          <a name="TableWithStickyFooter"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Sticky Footer')}</h2>
          <div class="mb-10">
            {_('This table uses the `bottom` prop to make the footer sticky at the bottom.')}
          </div>
          <layout-table 
            top
            bottom
            head="py-12 px-10 bg-primary tx-white"
            body="py-12 px-10"
            foot="py-12 px-10 bg-t-2 tx-white"
            odd="bg-t-0"
            even="bg-t-1"
          >
            <table-head>{_('ID')}</table-head>
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Score')}</table-head>
            <table-row>
              <table-col>1</table-col>
              <table-col>Alex</table-col>
              <table-col>85</table-col>
            </table-row>
            <table-row>
              <table-col>2</table-col>
              <table-col>Blake</table-col>
              <table-col>92</table-col>
            </table-row>
            <table-row>
              <table-col>3</table-col>
              <table-col>Casey</table-col>
              <table-col>78</table-col>
            </table-row>
            <table-foot>{_('Total')}</table-foot>
            <table-foot>-</table-foot>
            <table-foot>255</table-foot>
          </layout-table>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <layout-table 
              top
              bottom
              head="py-12 px-10 bg-primary tx-white"
              body="py-12 px-10"
              foot="py-12 px-10 bg-t-2 tx-white"
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head>{_('ID')}</table-head>
              <table-head>{_('Name')}</table-head>
              <table-head>{_('Score')}</table-head>
              <table-row>
                <table-col>1</table-col>
                <table-col>Alex</table-col>
                <table-col>85</table-col>
              </table-row>
              <table-row>
                <table-col>2</table-col>
                <table-col>Blake</table-col>
                <table-col>92</table-col>
              </table-row>
              <table-row>
                <table-col>3</table-col>
                <table-col>Casey</table-col>
                <table-col>78</table-col>
              </table-row>
              <table-foot>{_('Total')}</table-foot>
              <table-foot>-</table-foot>
              <table-foot>255</table-foot>
            </layout-table>
          `}</ide-code>


<a name="TableWithStickyColumns"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Sticky Columns')}</h2>
<div class="mb-10">
  {_('This table uses `left` and `right` props to make the first and last columns sticky. Extra columns are added to demonstrate horizontal scrolling within an overflow container.')}
</div>
<div class="overflow-auto">
  <layout-table 
    top
    left
    right
    head="py-12 px-10 bg-primary tx-white"
    body="py-12 px-10"
    odd="bg-t-0"
    even="bg-t-1"
  >
    <table-head>{_('ID')}</table-head>
    <table-head>{_('First Name')}</table-head>
    <table-head>{_('Last Name')}</table-head>
    <table-head>{_('Email')}</table-head>
    <table-head>{_('Phone')}</table-head>
    <table-head>{_('Address')}</table-head>
    <table-head>{_('City')}</table-head>
    <table-head>{_('Country')}</table-head>
    <table-head>{_('Join Date')}</table-head>
    <table-head>{_('Status')}</table-head>
    <table-row>
      <table-col>1</table-col>
      <table-col>Emma</table-col>
      <table-col>Wilson</table-col>
      <table-col>emma@example.com</table-col>
      <table-col>+1-555-123-4567</table-col>
      <table-col>123 Maple St</table-col>
      <table-col>New York</table-col>
      <table-col>USA</table-col>
      <table-col>2024-01-15</table-col>
      <table-col>Active</table-col>
    </table-row>
    <table-row>
      <table-col>2</table-col>
      <table-col>Liam</table-col>
      <table-col>Chen</table-col>
      <table-col>liam@example.com</table-col>
      <table-col>+1-555-987-6543</table-col>
      <table-col>456 Oak Ave</table-col>
      <table-col>Toronto</table-col>
      <table-col>Canada</table-col>
      <table-col>2024-03-22</table-col>
      <table-col>Pending</table-col>
    </table-row>
    <table-row>
      <table-col>3</table-col>
      <table-col>Olivia</table-col>
      <table-col>Patel</table-col>
      <table-col>olivia@example.com</table-col>
      <table-col>+44-20-7946-0958</table-col>
      <table-col>789 Pine Rd</table-col>
      <table-col>London</table-col>
      <table-col>UK</table-col>
      <table-col>2023-11-10</table-col>
      <table-col>Inactive</table-col>
    </table-row>
  </layout-table>
</div>
<ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
  <div class="overflow-auto">
    <layout-table 
      top
      left
      right
      head="py-12 px-10 bg-primary tx-white"
      body="py-12 px-10"
      odd="bg-t-0"
      even="bg-t-1"
    >
      <table-head>{_('ID')}</table-head>
      <table-head>{_('First Name')}</table-head>
      <table-head>{_('Last Name')}</table-head>
      <table-head>{_('Email')}</table-head>
      <table-head>{_('Phone')}</table-head>
      <table-head>{_('Address')}</table-head>
      <table-head>{_('City')}</table-head>
      <table-head>{_('Country')}</table-head>
      <table-head>{_('Join Date')}</table-head>
      <table-head>{_('Status')}</table-head>
      <table-row>
        <table-col>1</table-col>
        <table-col>Emma</table-col>
        <table-col>Wilson</table-col>
        <table-col>emma@example.com</table-col>
        <table-col>+1-555-123-4567</table-col>
        <table-col>123 Maple St</table-col>
        <table-col>New York</table-col>
        <table-col>USA</table-col>
        <table-col>2024-01-15</table-col>
        <table-col>Active</table-col>
      </table-row>
      <table-row>
        <table-col>2</table-col>
        <table-col>Liam</table-col>
        <table-col>Chen</table-col>
        <table-col>liam@example.com</table-col>
        <table-col>+1-555-987-6543</table-col>
        <table-col>456 Oak Ave</table-col>
        <table-col>Toronto</table-col>
        <table-col>Canada</table-col>
        <table-col>2024-03-22</table-col>
        <table-col>Pending</table-col>
      </table-row>
      <table-row>
        <table-col>3</table-col>
        <table-col>Olivia</table-col>
        <table-col>Patel</table-col>
        <table-col>olivia@example.com</table-col>
        <table-col>+44-20-7946-0958</table-col>
        <table-col>789 Pine Rd</table-col>
        <table-col>London</table-col>
        <table-col>UK</table-col>
        <table-col>2023-11-10</table-col>
        <table-col>Inactive</table-col>
      </table-row>
    </layout-table>
  </div>
`}</ide-code>


<a name="TableWithCustomColumnWidths"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Custom Column Widths')}</h2>
<div class="mb-10">
  {_('This example uses `wrap1` to `wrap5` props to set fixed column widths on `<table-col>` elements.')}
</div>
<layout-table 
  top
  head="py-12 px-10 bg-t-1 b-solid b-black"
  body="py-12 px-10"
  odd="bg-t-0"
  even="bg-t-1"
>
  <table-head wrap1>{_('ID')}</table-head>
  <table-head wrap3>{_('Name')}</table-head>
  <table-head wrap2>{_('Department')}</table-head>
  <table-head wrap2>{_('Salary')}</table-head>
  <table-row>
    <table-col wrap1>1</table-col>
    <table-col wrap3>David Green</table-col>
    <table-col wrap2>HR</table-col>
    <table-col wrap2>$50,000</table-col>
  </table-row>
  <table-row>
    <table-col wrap1>2</table-col>
    <table-col wrap3>Anna Taylor</table-col>
    <table-col wrap2>IT</table-col>
    <table-col wrap2>$75,000</table-col>
  </table-row>
  <table-row>
    <table-col wrap1>3</table-col>
    <table-col wrap3>Michael Scott</table-col>
    <table-col wrap2>Sales</table-col>
    <table-col wrap2>$65,000</table-col>
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
    <table-head wrap1>{_('ID')}</table-head>
    <table-head wrap3>{_('Name')}</table-head>
    <table-head wrap2>{_('Department')}</table-head>
    <table-head wrap2>{_('Salary')}</table-head>
    <table-row>
      <table-col wrap1>1</table-col>
      <table-col wrap3>David Green</table-col>
      <table-col wrap2>HR</table-col>
      <table-col wrap2>$50,000</table-col>
    </table-row>
    <table-row>
      <table-col wrap1>2</table-col>
      <table-col wrap3>Anna Taylor</table-col>
      <table-col wrap2>IT</table-col>
      <table-col wrap2>$75,000</table-col>
    </table-row>
    <table-row>
      <table-col wrap1>3</table-col>
      <table-col wrap3>Michael Scott</table-col>
      <table-col wrap2>Sales</table-col>
      <table-col wrap2>$65,000</table-col>
    </table-row>
  </layout-table>
`}</ide-code>
          <!-- Navigation -->
          <nav class="flex">
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