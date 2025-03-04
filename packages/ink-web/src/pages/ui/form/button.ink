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
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="form-button"/>
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
    { icon: 'icons', label: 'Form', href: '/ink/ui/form/index.html' },
    { label: 'Buttons' }
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
            <a class="block tx-t-0" href="#Buttons">{_('Buttons')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#types">• {_('Types')}</a>
              <a class="block tx-t-1" href="#customColor">• {_('Custom Color')}</a>
              <a class="block tx-t-1" href="#rounded">• {_('Rounded')}</a>
              <a class="block tx-t-1" href="#padding">• {_('Padding')}</a>
              <a class="block tx-t-1" href="#transparent">• {_('Transparent')}</a>
              <a class="block tx-t-1" href="#outline">• {_('Outline ')}</a>
              <a class="block tx-t-1" href="#combine">• {_('Combine')}</a>
              
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


        <a name="Buttons"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_('Buttons')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
             <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Buttons from '@stackpress/ink-ui/element/Buttons';
            </ide-code>
          </ide-app>

      <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>


            <layout-table 
            top
            head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
            body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
            odd="bg-t-1"
            even="bg-t-0"
            >
            <table-head>{_('Property')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>

            <table-row>
                <table-col>flex</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Enables display: flex')}</table-col>
            </table-row>

            <table-row>
                <table-col>none</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets display: none')}</table-col>
            </table-row>

            <table-row>
                <table-col>inline</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets display: inline')}</table-col>
            </table-row>

            <table-row>
                <table-col>block</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets display: block')}</table-col>
            </table-row>

            <table-row>
                <table-col>inline-block</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets display: inline-block (default)')}</table-col>
            </table-row>

            <table-row>
                <table-col>inline-flex</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets display: inline-flex')}</table-col>
            </table-row>

            <table-row>
                <table-col>padding</table-col>
                <table-col>String</table-col>
                <table-col>No</table-col>
                <table-col>{_('Custom padding value')}</table-col>
            </table-row>

            <table-row>
                <table-col>color</table-col>
                <table-col>String</table-col>
                <table-col>No</table-col>
                <table-col>{_('Custom text color')}</table-col>
            </table-row>

            <table-row>
                <table-col>white</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets text color to white')}</table-col>
            </table-row>

            <table-row>
                <table-col>black</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets text color to black')}</table-col>
            </table-row>

            <table-row>
                <table-col>info</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Applies info color')}</table-col>
            </table-row>

            <table-row>
                <table-col>warning</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Applies warning color')}</table-col>
            </table-row>

            <table-row>
                <table-col>success</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Applies success color')}</table-col>
            </table-row>

            <table-row>
                <table-col>error</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Applies error color')}</table-col>
            </table-row>

            <table-row>
                <table-col>muted</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Applies muted color')}</table-col>
            </table-row>

            <table-row>
                <table-col>primary</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Applies primary color')}</table-col>
            </table-row>

            <table-row>
                <table-col>secondary</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Applies secondary color')}</table-col>
            </table-row>

            <table-row>
                <table-col>theme</table-col>
                <table-col>String</table-col>
                <table-col>No</table-col>
                <table-col>{_('Uses theme-based color')}</table-col>
            </table-row>

            <table-row>
                <table-col>outline</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Outlined style (border applied)')}</table-col>
            </table-row>

            <table-row>
                <table-col>solid</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Solid background (default)')}</table-col>
            </table-row>

            <table-row>
                <table-col>transparent</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Transparent background')}</table-col>
            </table-row>

            <table-row>
                <table-col>full</table-col>
                <table-col>Boolean</table-col>
                <table-col>No</table-col>
                <table-col>{_('Sets width to 100%')}</table-col>
            </table-row>

            <table-row>
                <table-col>href</table-col>
                <table-col>String</table-col>
                <table-col>No</table-col>
                <table-col>{_('If provided, renders as <a> instead of <button>')}</table-col>
            </table-row>

             <!-- Button Sizes -->
  <table-row>
    <table-col>xs</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('Extra small size')}</table-col>
  </table-row>

  <table-row>
    <table-col>sm</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('Small size')}</table-col>
  </table-row>

  <table-row>
    <table-col>md</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('Medium size (default)')}</table-col>
  </table-row>

  <table-row>
    <table-col>lg</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('Large size')}</table-col>
  </table-row>

  <table-row>
    <table-col>xl</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('Extra large size')}</table-col>
  </table-row>

  <table-row>
    <table-col>xl2</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('2x Extra large size')}</table-col>
  </table-row>

  <table-row>
    <table-col>xl3</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('3x Extra large size')}</table-col>
  </table-row>

  <table-row>
    <table-col>xl4</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('4x Extra large size')}</table-col>
  </table-row>

  <table-row>
    <table-col>xl5</table-col>
    <table-col>Boolean</table-col>
    <table-col>No</table-col>
    <table-col>{_('5x Extra large size')}</table-col>
  </table-row>

            </layout-table>


<a name="types"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Types')}</h2>

<div class="mb-10">
  Buttons come in different types:  
  <span class="bg-primary tx-italic p-3">primary</span>,  
  <span class="bg-secondary tx-italic p-3">secondary</span>,  
  <span class="bg-success tx-italic p-3">success</span>,  
  <span class="bg-warning tx-italic p-3">warning</span>,  
  <span class="bg-error tx-italic p-3">error</span>, and  
  <span class="bg-muted tx-italic p-3">muted</span>.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button primary>Primary</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button primary>Primary</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button secondary>Secondary</form-button> 
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button secondary>Secondary</form-button> 
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button success>Success</form-button> 
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button success>Success</form-button> 
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button warning>Warning</form-button> 
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button warning>Warning</form-button> 
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button error>Error</form-button> 
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
<form-button error>Error</form-button> 
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button muted>Muted</form-button> 
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button muted>Muted</form-button> 
`}</ide-code>


<a name="customColor"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Color')}</h2>

<div class="mb-10">
  Buttons can have custom CSS-compatible colors, including HEX codes and named colors using the <code>color</code> attribute.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button color="salmon">Salmon</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button color="salmon">Salmon</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button color="steelblue">Steel Blue</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button color="steelblue">Steel Blue</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button color="#4CAF50">Custom Green</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button color="#4CAF50">Custom Green</form-button>
`}</ide-code>


<a name="sizes"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Sizes')}</h2>

<div class="mb-10">
  Buttons have multiple size options:  
  <span class=" tx-italic p-3">xs</span>,  
  <span class=" tx-italic p-3">sm</span>,  
  <span class=" tx-italic p-3">md</span>,  
  <span class=" tx-italic p-3">lg</span>,  
  <span class="tx-italic p-3">xl</span>,  
  <span class=" tx-italic p-3">xl2</span>,  
  <span class=" tx-italic p-3">xl3</span>,  
  <span class=" tx-italic p-3">xl4</span>,  
  and <span class=" tx-italic p-3">xl5</span>.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button xs primary>Extra Small</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button xs primary>Extra Small</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button sm success>Small</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button sm success>Small</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button md primary>Medium</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button md primary>Medium</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button lg warning>Large</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button lg warning>Large</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button xl error>Extra Large</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button xl error>Extra Large</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button xl2 secondary>2XL</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button xl2 secondary>2XL</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button xl3 muted>3XL</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button xl3 muted>3XL</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button xl4 primary>4XL</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button xl4 primary>4XL</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button xl5 secondary>5XL</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button xl5 secondary>5XL</form-button>
`}</ide-code>



<a name="rounded"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Rounded')}</h2>

<div class="mb-10">
  Buttons can have different border styles:  
  <span class="bg-info tx-italic p-3">curved</span>,  
  <span class="bg-info tx-italic p-3">rounded</span>,  
  and <span class="bg-info tx-italic p-3">pill</span>.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button primary curved>Curved</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button primary curved>Curved</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button secondary rounded>Rounded</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button secondary rounded>Rounded</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button success pill>Pill</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button success pill>Pill</form-button>
`}</ide-code>

<a name="outline"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Outline')}</h2>

<div class="mb-10">
  Buttons can use an outline style instead of a solid background.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button outline primary>Primary Outline</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button outline primary>Primary Outline</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button outline warning>Warning Outline</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button outline warning>Warning Outline</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button outline error>Error Outline</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button outline error>Error Outline</form-button>
`}</ide-code>

<a name="transparent"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Transparent')}</h2>

<div class="mb-10">
  Transparent buttons remove the background but retain the border.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button transparent info>Transparent Info</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button transparent info>Transparent Info</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button transparent success>Transparent Success</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button transparent success>Transparent Success</form-button>
`}</ide-code>

<a name="fullWidth"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Full Width')}</h2>

<div class="mb-10">
  Adding <span class="tx-italic p-3">full</span> makes the button take up the entire width.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center w-full">
    <form-button full primary>Full Width</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button full primary>Full Width</form-button>
`}</ide-code>

<a name="combining"></a>
<h2 class="tx-primary tx-upper tx-30 py-20">{_('Combining Props')}</h2>

<div class="mb-10">
  You can combine multiple props like <span class="tx-italic p-3">outline</span>, <span class="tx-italic p-3">rounded</span>, and <span class="tx-italic p-3">full</span> for unique styles.
</div>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center w-full">
    <form-button outline rounded full success>Success Rounded Outline</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button outline rounded full success>Success Rounded Outline</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button transparent curved primary>Curved Transparent</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button transparent curved primary>Curved Transparent</form-button>
`}</ide-code>

<div class="basis-third-10 lg-basis-half-10 md-basis-full">
  <div class="bg-t-3 pt-10 pb-10 flex flex-center">
    <form-button outline pill warning>Pill Outline Warning</form-button>
  </div>
</div>

<ide-code class="scroll-y-auto mb-10 w-full bg-black text-white">{`
<form-button outline pill warning>Pill Outline Warning</form-button>
`}</ide-code>






          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/index.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Form')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/form/control.html">
              {_('Controls')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>