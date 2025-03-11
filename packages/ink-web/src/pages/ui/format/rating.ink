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
<link rel="import" type="component" href="@stackpress/ink-ui/format/rating.ink" name="format-rating" />

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
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Rating' }
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
            <a class="block tx-t-0" href="#Rating">{_('Rating')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicRating">• {_('Basic Rating Format')}</a>
              <a class="block tx-t-1" href="#ceilRating">• {_('Ceil Rounding Rating Format')}</a>
              <a class="block tx-t-1" href="#styledRating">• {_('Styled Rating Format')}</a>
              <a class="block tx-t-1" href="#noRemainderRating">• {_('No Remainder Rating Format')}</a>
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

          <a name="Rating"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Rating')}</h1>
          <ide-app title="Rating" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Rating from '@stackpress/ink-ui/format/rating';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-rating>` component displays a star rating using filled (`★`) and empty (`☆`) stars based on the `value` prop. The maximum number of stars is set by `max`, and `remainder` shows empty stars for remaining slots. The `value` can be rounded using the `round` prop ("round", "ceil", "floor"). The component’s display defaults to `inline-block`, overridable via display props. Use styling props (`color`, `size`, `bold`, `spacing`) or the `class` prop with Ink utilities (e.g., `p-4`, `bg-t-2`, `tx-warning`) to customize appearance.')}</p>
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
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>value</table-col>
              <table-col>Number/String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('The rating value to display (converted to a number).')}</table-col>
            </table-row>

            <table-row>
              <table-col>max</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('The maximum number of stars (defaults to the rounded `value`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>remainder</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, shows empty stars (`☆`) for remaining slots up to `max` (defaults to `false`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>round</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('The rounding method for `value` ("round", "ceil", "floor"). Defaults to "round".')}</table-col>
            </table-row>

            <table-row>
              <table-col>spacing</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('The letter spacing between stars in pixels (e.g., `2` for 2px).')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Defines the container’s display format (e.g., "block", "flex", "inline-block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the star color (e.g., "var(--tx-1)", "red").')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the font size (e.g., "16px", "14px").')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies bold styling to the stars if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes to style the container (e.g., "p-4", "bg-t-2", "tx-warning").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the container (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Rating Format -->
          <a name="basicRating"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Rating Format')}</h2>
          <div class="mb-10">{_('Renders a star rating with remainder stars, matching the reference example.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-rating class="tx-warning" value="3.5" max={5} remainder round="floor" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-rating class="tx-warning" value="3.5" max={5} remainder round="floor" />
            `}
          </ide-code>

          <!-- Ceil Rounding Rating Format -->
          <a name="ceilRating"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Ceil Rounding Rating Format')}</h2>
          <div class="mb-10">{_('Renders a star rating with `ceil` rounding to show different rounding behavior.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-rating class="tx-warning" value="3.5" max={5} remainder round="ceil" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-rating class="tx-warning" value="3.5" max={5} remainder round="ceil" />
            `}
          </ide-code>

          <!-- Styled Rating Format -->
          <a name="styledRating"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Rating Format')}</h2>
          <div class="mb-10">{_('Renders a star rating with custom styling (bold, color, spacing).')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-rating value="3.5" max={5} remainder round="floor" bold color="var(--tx-warning)" size="16px" spacing={2} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-rating value="3.5" max={5} remainder round="floor" bold color="var(--tx-warning)" size="16px" spacing={2} />
            `}
          </ide-code>

          <!-- No Remainder Rating Format -->
          <a name="noRemainderRating"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('No Remainder Rating Format')}</h2>
          <div class="mb-10">{_('Renders a star rating without remainder stars.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-rating class="tx-warning" value="3.5" max={5} round="floor" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-rating class="tx-warning" value="3.5" max={5} round="floor" />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/phone.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Phone')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/price.html">
              {_('Price')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>