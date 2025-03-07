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
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="form-button" />

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
              <a class="block tx-t-1" href="#sizes">• {_('Sizes')}</a>
              <a class="block tx-t-1" href="#rounded">• {_('Rounded')}</a>
              <a class="block tx-t-1" href="#padding">• {_('Padding')}</a>
              <a class="block tx-t-1" href="#transparent">• {_('Transparent')}</a>
              <a class="block tx-t-1" href="#outline">• {_('Outline')}</a>
              <a class="block tx-t-1" href="#fullWidth">• {_('Full Width')}</a>
              <a class="block tx-t-1" href="#combining">• {_('Combining Props')}</a>
              <a class="block tx-t-1" href="#href">• {_('Href')}</a>
              <a class="block tx-t-1" href="#flexDisplay">• {_('Flex Display')}</a>
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
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Button from '@stackpress/ink-ui/form/button';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
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
              <table-col>{_('Sets display to "flex".')}</table-col>
            </table-row>

            <table-row>
              <table-col>none</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "none".')}</table-col>
            </table-row>

            <table-row>
              <table-col>inline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "inline".')}</table-col>
            </table-row>

            <table-row>
              <table-col>block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>inline-block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "inline-block" (default).')}</table-col>
            </table-row>

            <table-row>
              <table-col>inline-flex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "inline-flex".')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom padding (e.g., "10px", "1em 2em"). Overrides size-based padding.')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding-x</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets horizontal padding (e.g., "20px"). Overrides size-based padding for x-axis.')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding-y</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets vertical padding (e.g., "15px"). Overrides size-based padding for y-axis.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom color for text (outline/transparent) or background (solid). E.g., "red", "#fff".')}</table-col>
            </table-row>

            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text to white (outline/transparent) or background to white (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text to black (outline/transparent) or background to black (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets info color for text (outline/transparent) or background (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets warning color for text (outline/transparent) or background (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets success color for text (outline/transparent) or background (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets error color for text (outline/transparent) or background (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets muted color for text (outline/transparent) or background (solid). Default for solid.')}</table-col>
            </table-row>

            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets primary color for text (outline/transparent) or background (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets secondary color for text (outline/transparent) or background (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>theme</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a theme-based color (e.g., "t-1") for text (outline/transparent) or background (solid).')}</table-col>
            </table-row>

            <table-row>
              <table-col>xs</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Extra small size (padding: 2px 4px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>sm</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Small size (padding: 5px 10px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>md</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Medium size (padding: 8px 16px, default if no size specified).')}</table-col>
            </table-row>

            <table-row>
              <table-col>lg</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Large size (padding: 12px 24px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>xl</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Extra large size (padding: 15px 30px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>xl2</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('2x Extra large size (padding: 18px 36px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>xl3</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('3x Extra large size (padding: 22px 44px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>xl4</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('4x Extra large size (padding: 26px 52px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>xl5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('5x Extra large size (padding: 30px 60px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>curve</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom border radius in pixels (e.g., 10 for "10px").')}</table-col>
            </table-row>

            <table-row>
              <table-col>curved</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border radius to 4px.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border radius to 8px.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pill</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border radius to 999px for pill shape.')}</table-col>
            </table-row>

            <table-row>
              <table-col>outline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets outline style with colored border and white background.')}</table-col>
            </table-row>

            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets solid style with colored background and white text (default).')}</table-col>
            </table-row>

            <table-row>
              <table-col>transparent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets transparent background with colored border and text.')}</table-col>
            </table-row>

            <table-row>
              <table-col>full</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets width to 100%.')}</table-col>
            </table-row>

            <table-row>
              <table-col>href</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Renders as an <a> tag with the specified URL instead of a <button>.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Types -->
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button primary>Primary</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button secondary>Secondary</form-button> 
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button secondary>Secondary</form-button> 
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button success>Success</form-button> 
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button success>Success</form-button> 
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button warning>Warning</form-button> 
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button muted>Muted</form-button> 
          `}</ide-code>

          <!-- Custom Color -->
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button color="salmon">Salmon</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button color="steelblue">Steel Blue</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button color="steelblue">Steel Blue</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button color="#4CAF50">Custom Green</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button color="#4CAF50">Custom Green</form-button>
          `}</ide-code>

          <!-- Sizes -->
          <a name="sizes"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sizes')}</h2>
          <div class="mb-10">
            Buttons have multiple size options:  
            <span class="tx-italic p-3">xs</span>,  
            <span class="tx-italic p-3">sm</span>,  
            <span class="tx-italic p-3">md</span>,  
            <span class="tx-italic p-3">lg</span>,  
            <span class="tx-italic p-3">xl</span>,  
            <span class="tx-italic p-3">xl2</span>,  
            <span class="tx-italic p-3">xl3</span>,  
            <span class="tx-italic p-3">xl4</span>,  
            and <span class="tx-italic p-3">xl5</span>.
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button xs primary>Extra Small</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button xs primary>Extra Small</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button sm success>Small</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button sm success>Small</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button md primary>Medium</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button md primary>Medium</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button lg warning>Large</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button lg warning>Large</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button xl error>Extra Large</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button xl error>Extra Large</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button xl2 secondary>2XL</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button xl2 secondary>2XL</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button xl3 muted>3XL</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button xl3 muted>3XL</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button xl4 primary>4XL</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button xl4 primary>4XL</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button xl5 secondary>5XL</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button xl5 secondary>5XL</form-button>
          `}</ide-code>

          <!-- Rounded -->
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button primary curved>Curved</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button secondary rounded>Rounded</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button secondary rounded>Rounded</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button success pill>Pill</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button success pill>Pill</form-button>
          `}</ide-code>

          <!-- Padding -->
          <a name="padding"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Padding')}</h2>
          <div class="mb-10">
            Buttons can use custom padding with <code>padding</code>, <code>padding-x</code>, or <code>padding-y</code>, overriding size-based defaults.
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button primary padding="20px">Custom Padding</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button primary padding="20px">Custom Padding</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button success padding-x="30px">Wide Padding-X</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button success padding-x="30px">Wide Padding-X</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button warning padding-y="15px">Tall Padding-Y</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button warning padding-y="15px">Tall Padding-Y</form-button>
          `}</ide-code>

          <!-- Transparent -->
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button transparent info>Transparent Info</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button transparent success>Transparent Success</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button transparent success>Transparent Success</form-button>
          `}</ide-code>

          <!-- Outline -->
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button outline primary>Primary Outline</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button outline warning>Warning Outline</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button outline warning>Warning Outline</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button outline error>Error Outline</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button outline error>Error Outline</form-button>
          `}</ide-code>

          <!-- Full Width -->
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button full primary>Full Width</form-button>
          `}</ide-code>

          <!-- Combining Props -->
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
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button outline rounded full success>Success Rounded Outline</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button transparent curved primary>Curved Transparent</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button transparent curved primary>Curved Transparent</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button outline pill warning>Pill Outline Warning</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button outline pill warning>Pill Outline Warning</form-button>
          `}</ide-code>

          <!-- Href -->
          <a name="href"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Href')}</h2>
          <div class="mb-10">
            Buttons can act as links using the <code>href</code> attribute.
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button class="mr-5" md primary curved href="https://example.com" target="_blank">Visit Example</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button class="mr-5" md primary curved href="https://example.com" target="_blank">Visit Example</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button class="mr-5" md success rounded transparent href="https://stackpress.io">Go to StackPress</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button class="mr-5" md success rounded transparent href="https://stackpress.io">Go to StackPress</form-button>
          `}</ide-code>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button class="mr-5" md warning rounded href="https://github.com" target="_blank">GitHub</form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button class="mr-5" md warning rounded href="https://github.com" target="_blank">GitHub</form-button>
          `}</ide-code>

          <!-- Flex Display -->
          <a name="flexDisplay"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Flex Display')}</h2>
          <div class="mb-10">
            Use <code>flex</code> to enable flexbox display for aligning slotted content.
          </div>

          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center">
              <form-button flex primary>
                <element-icon name="star" class="mr-5" />
                Flex Button
              </form-button>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <form-button flex primary>
              <element-icon name="star" class="mr-5" />
              Flex Button
            </form-button>
          `}</ide-code>

          <!-- Navigation -->
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