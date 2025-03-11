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
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/image.ink" name="format-image" />

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
    { label: 'Image' }
  ];
  const imageUrl = 'https://images.wsj.net/im-580612/8SR';
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
            <a class="block tx-t-0" href="#Image">{_('Image')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicImage">• {_('Basic Image Format')}</a>
              <a class="block tx-t-1" href="#attributedImage">• {_('Attributed Image Format')}</a>
              <a class="block tx-t-1" href="#styledImage">• {_('Styled Image Format')}</a>
              <a class="block tx-t-1" href="#blockImage">• {_('Block Image Format')}</a>
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

          <a name="Image"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Image')}</h1>
          <ide-app title="Image" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Image from '@stackpress/ink-ui/format/image';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-image>` component transforms an image source from the `value` prop into a formatted `<img>` element. The input `value` is used as the `src` attribute, while additional props are processed into attributes (e.g., `alt`, `width`) with a default `loading="lazy"` applied if not specified. The container’s display format defaults to `inline-block`, overridable via the `display` prop. Use the `class` prop with Ink utilities (e.g., `p-4`, `w-50`, `md:w-full`) to further format the container responsively.')}</p>
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
              <table-col>{_('The image source URL or data URI to format as the `src` attribute.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Defines the container’s display format (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes to format the container (e.g., "p-4", "w-50", "md:w-full").')}</table-col>
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
              <table-col>{_('HTML attributes (e.g., `alt`, `width`, `height`, `loading`) formatted and passed to the `<img>` tag, with `loading="lazy"` as default if omitted.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Image Format -->
          <a name="basicImage"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Image Format')}</h2>
          <div class="mb-10">{_('Renders an image with a basic `inline-block` format and default lazy loading.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-image width="70" value={imageUrl} class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-image width="70" value="https://images.wsj.net/im-580612/8SR" class="p-4" />
            `}
          </ide-code>

          <!-- Attributed Image Format -->
          <a name="attributedImage"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Attributed Image Format')}</h2>
          <div class="mb-10">{_('Renders an image with additional attributes, formatting it with alt text and a specified width.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-image value={imageUrl} alt="Placeholder Image" width="200" class="p-4 w-auto" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-image value="https://images.wsj.net/im-580612/8SR" alt="Placeholder Image" width="200" class="p-4 w-auto" />
            `}
          </ide-code>

          <!-- Styled Image Format -->
          <a name="styledImage"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Image Format')}</h2>
          <div class="mb-10">{_('Renders an image with a styled container format, including padding and a border.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-image width="70" value={imageUrl} alt="Styled Image" class="p-4 b-solid b-t-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-image width="70" value="https://images.wsj.net/im-580612/8SR" alt="Styled Image" class="p-4 b-solid b-t-2 c-4" />
            `}
          </ide-code>

          <!-- Block Image Format -->
          <a name="blockImage"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Block Image Format')}</h2>
          <div class="mb-10">{_('Renders an image with a block-level format and centered alignment.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-image width="70" value={imageUrl} display="block" class="p-4 tx-center bg-t-2 rounded" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-image width="70" value="https://images.wsj.net/im-580612/8SR" display="block" class="p-4 tx-center bg-t-2 rounded" />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/html.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('HTML')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/imagelist.html">
              {_('Imagelist')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>