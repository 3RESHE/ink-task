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
<link rel="import" type="component" href="@stackpress/ink-ui/format/overflow.ink" name="format-overflow" />

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
    { label: 'Overflow' }
  ];
  const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
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
            <a class="block tx-t-0" href="#Overflow">{_('Overflow')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicOverflow">• {_('Basic Overflow Format')}</a>
              <a class="block tx-t-1" href="#wordOverflow">• {_('Word-Based Overflow Format')}</a>
              <a class="block tx-t-1" href="#styledOverflow">• {_('Styled Overflow Format')}</a>
              <a class="block tx-t-1" href="#fullTextOverflow">• {_('Full Text Overflow Format')}</a>
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

          <a name="Overflow"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Overflow')}</h1>
          <ide-app title="Overflow" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              {`
                import Overflow from '@stackpress/ink-ui/format/overflow';
              `}
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-overflow>` component truncates a string from the `value` prop based on a specified `length`, either by character count (default) or word count (if `words` is `true`). An ellipsis (`…`) can be appended with the `hellip` prop. The component’s display defaults to `inline-block`, overridable via display props. Use styling props (`color`, `size`, `bold`) or the `class` prop with Ink utilities (e.g., `p-4`, `bg-t-2`) to customize appearance.')}</p>
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
              <table-col>{_('The string to truncate.')}</table-col>
            </table-row>

            <table-row>
              <table-col>length</table-col>
              <table-col>Number/String</table-col>
              <table-col>No</table-col>
              <table-col>{_('The maximum length (characters or words) to display. Converted to a number; defaults to `undefined` if invalid.')}</table-col>
            </table-row>

            <table-row>
              <table-col>words</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, truncates by word count instead of character count (defaults to `false`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>hellip</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If `true`, appends an ellipsis (`…`) when the string is truncated (defaults to `false`).')}</table-col>
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
              <table-col>{_('Sets the text color (e.g., "var(--tx-1)", "red").')}</table-col>
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
              <table-col>{_('Applies bold styling to the text if `true`.')}</table-col>
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

          <!-- Basic Overflow Format -->
          <a name="basicOverflow"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Overflow Format')}</h2>
          <div class="mb-10">{_('Renders a truncated string with character-based length, matching the reference example.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-overflow value="Lorem Ipsum" length={8} hellip />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-overflow value="Lorem Ipsum" length={8} hellip />
            `}
          </ide-code>

          <!-- Word-Based Overflow Format -->
          <a name="wordOverflow"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Word-Based Overflow Format')}</h2>
          <div class="mb-10">{_('Renders a truncated string by word count with an ellipsis.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-overflow value={longText} length={3} words hellip />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-overflow value="Lorem Ipsum is simply dummy text of the printing and typesetting industry." length={3} words hellip />
            `}
          </ide-code>

          <!-- Styled Overflow Format -->
          <a name="styledOverflow"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Overflow Format')}</h2>
          <div class="mb-10">{_('Renders a truncated string with custom styling (bold, color, size).')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-overflow value="Lorem Ipsum" length={8} hellip bold color="var(--tx-2)" size="16px" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-overflow value="Lorem Ipsum" length={8} hellip bold color="var(--tx-2)" size="16px" />
            `}
          </ide-code>

          <!-- Full Text Overflow Format -->
          <a name="fullTextOverflow"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Full Text Overflow Format')}</h2>
          <div class="mb-10">{_('Renders the full string when the length exceeds the string length.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-auto flex flex-center">
              <format-overflow value="Lorem Ipsum" length={20} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>
            {`
              <format-overflow value="Lorem Ipsum" length={20} />
            `}
          </ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/number.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Number')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/phone.html">
              {_('Phone')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>