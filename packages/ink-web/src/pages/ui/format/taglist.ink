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
<link rel="import" type="component" href="@stackpress/ink-ui/format/taglist.ink" name="format-taglist" />
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
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Taglist' }
  ];
  const tags = ['Foo', 'bar', 'baz'];
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
            <a class="block tx-t-0" href="#Taglist">{_('Taglist')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicTaglist">• {_('Basic Taglist Format')}</a>
              <a class="block tx-t-1" href="#customColor">• {_('Custom Color Taglist Format')}</a>
              <a class="block tx-t-1" href="#styledTaglist">• {_('Styled Taglist Format')}</a>
              <a class="block tx-t-1" href="#defaultTheme">• {_('Default Theme Taglist Format')}</a>
              <a class="block tx-t-1" href="#transparentTaglist">• {_('Transparent Taglist Format')}</a>
              <a class="block tx-t-1" href="#advancedStyledTaglist">• {_('Advanced Styled Taglist Format')}</a>
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

          <a name="Taglist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Taglist')}</h1>
          <ide-app title="Taglist" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Taglist from '@stackpress/ink-ui/format/taglist';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-taglist>` component renders an array of strings from the `value` prop as a list of `<element-badge>` components, styled as tags. It supports various shape options (`curved`, `rounded`, `pill`) and color themes (`info`, `warning`, `success`, `error`, `muted`, `primary`, `secondary`, `color`). The default theme is `warning` if no color is specified. The component’s display defaults to `inline-block`, overridable via display props. Use styling props or the `class` prop with Ink utilities (e.g., `p-4`, `bg-t-2`) to customize appearance.')}</p>
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
              <table-col>Array</table-col>
              <table-col>No</table-col>
              <table-col>{_('The array of strings to render as tags (defaults to an empty array `[]`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>curved</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a curved shape to the badges.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a rounded shape to the badges.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pill</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a pill shape to the badges.')}</table-col>
            </table-row>

            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies an info color theme.')}</table-col>
            </table-row>

            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a warning color theme (default if no color specified).')}</table-col>
            </table-row>

            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a success color theme.')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies an error color theme.')}</table-col>
            </table-row>

            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a muted color theme.')}</table-col>
            </table-row>

            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a primary color theme.')}</table-col>
            </table-row>

            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a secondary color theme.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('A custom color value (e.g., "var(--tx-1)", "red") to override themes.')}</table-col>
            </table-row>

            <table-row>
              <table-col>outline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies an outline style to the badges.')}</table-col>
            </table-row>

            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a solid style to the badges.')}</table-col>
            </table-row>

            <table-row>
              <table-col>transparent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, applies a transparent style to the badges.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Defines the container’s display format (e.g., "block", "flex", "inline-block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes to style the container (e.g., "p-4", "bg-t-2").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the container (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Taglist Format -->
          <a name="basicTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Taglist Format')}</h2>
          <div class="mb-10">{_('Renders a taglist with pill-shaped badges, matching the reference example.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-taglist value={['Foo', 'bar']} pill />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-taglist value={['Foo', 'bar']} pill />
            `}
          </ide-code>

          <!-- Custom Color Taglist Format -->
          <a name="customColor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Color Taglist Format')}</h2>
          <div class="mb-10">{_('Renders a taglist with a custom color.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-taglist value={tags} pill success />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-taglist value={['Foo', 'bar', 'baz']} pill success />
            `}
          </ide-code>

          <!-- Styled Taglist Format -->
          <a name="styledTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Taglist Format')}</h2>
          <div class="mb-10">{_('Renders a taglist with multiple styling options.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-taglist value={['Foo', 'bar']} pill success outline />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-taglist value={['Foo', 'bar']} pill success outline />
            `}
          </ide-code>

          <!-- Default Theme Taglist Format -->
          <a name="defaultTheme"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Default Theme Taglist Format')}</h2>
          <div class="mb-10">{_('Renders a taglist with the default `warning` theme.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-taglist value={tags} pill />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-taglist value={['Foo', 'bar', 'baz']} pill />
            `}
          </ide-code>

          <!-- Transparent Taglist Format -->
          <a name="transparentTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Transparent Taglist Format')}</h2>
          <div class="mb-10">{_('Renders a taglist with a transparent style and pill shape.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-taglist value={tags} pill transparent error/>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-taglist value={['Foo', 'bar', 'baz']} pill transparent error />
            `}
          </ide-code>

          <!-- Advanced Styled Taglist Format -->
          <a name="advancedStyledTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Advanced Styled Taglist Format')}</h2>
          <div class="mb-10">{_('Renders a taglist with a mix of styles, colors, and shapes.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-taglist 
                value={['Foo', 'bar', 'baz']} 
                rounded 
                success 
                outline 
                solid  
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-taglist value={['Foo', 'bar', 'baz']} rounded success outline solid />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/table.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Table')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/text.html">
              {_('Text')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>