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
<link rel="import" type="component" href="@stackpress/ink-ui/format/link.ink" name="format-link" />

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
    { label: 'Link' }
  ];
  const linkUrl = 'https://example.com';
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
            <a class="block tx-t-0" href="#Link">{_('Link')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicLink">• {_('Basic Link Format')}</a>
              <a class="block tx-t-1" href="#styledLink">• {_('Styled Link Format')}</a>
              <a class="block tx-t-1" href="#attributedLink">• {_('Attributed Link Format')}</a>
              <a class="block tx-t-1" href="#blockLink">• {_('Block Link Format')}</a>
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

          <a name="Link"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Link')}</h1>
          <ide-app title="Link" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Link from '@stackpress/ink-ui/format/link';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-link>` component transforms a URL from the `value` prop into a formatted `<a>` element. The `value` is used as the `href` attribute, and an optional `label` prop defines the link text (defaults to the `value` if omitted). The container’s display defaults to `inline-block`, overridable via display props (e.g., `block`, `flex`). Use styling props (`bold`, `color`, `underline`, `size`) or the `class` prop with Ink utilities (e.g., `p-4`, `bg-t-2`) to customize appearance.')}</p>
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
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('The URL or link target to use as the `href` attribute.')}</table-col>
            </table-row>

            <table-row>
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('The text to display for the link (defaults to the `value` if omitted).')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Defines the container’s display format (e.g., "block", "flex", "inline-block"). Defaults to "inline-block". Can be set via props like `block`, `flex`, etc.')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies bold styling to the link text if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the link text color (e.g., "red", "var(--tx-1)").')}</table-col>
            </table-row>

            <table-row>
              <table-col>underline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies underline styling to the link text if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the font size (e.g., "16px", "14px"). Defaults to "13px".')}</table-col>
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

            <table-row>
              <table-col>Other attributes</table-col>
              <table-col>-</table-col>
              <table-col>No</table-col>
              <table-col>{_('HTML attributes (e.g., `target`, `rel`) passed to the `<a>` tag.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Link Format -->
          <a name="basicLink"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Link Format')}</h2>
          <div class="mb-10">{_('Renders a simple link with default `inline-block` display and 13px font size.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-link value={linkUrl} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-link value="https://example.com" class="p-4" />
            `}
          </ide-code>

          <!-- Styled Link Format -->
          <a name="styledLink"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Link Format')}</h2>
          <div class="mb-10">{_('Renders a link with bold, underlined text and a custom color.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-link value={linkUrl} label="Click Me" bold underline color="var(--tx-2)" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-link value="https://example.com" label="Click Me" bold underline color="var(--tx-2)" class="p-4" />
            `}
          </ide-code>

          <!-- Attributed Link Format -->
          <a name="attributedLink"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Attributed Link Format')}</h2>
          <div class="mb-10">{_('Renders a link with additional attributes and a custom label.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-link value={linkUrl} label="Open Example" target="_blank" rel="noopener" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-link value="https://example.com" label="Open Example" target="_blank" rel="noopener" class="p-4" />
            `}
          </ide-code>

          <!-- Block Link Format -->
          <a name="blockLink"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Block Link Format')}</h2>
          <div class="mb-10">{_('Renders a link with a `block` display and additional styling.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-link value={linkUrl} label="Block Link" block class="p-4 bg-t-2 b-solid b-t-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-link value="https://example.com" label="Block Link" block class="p-4 bg-t-2 b-solid b-t-2 c-4" />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/json.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('JSON')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/list.html">
              {_('List')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>