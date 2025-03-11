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
<link rel="import" type="component" href="@stackpress/ink-ui/format/email.ink" name="format-email" />

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
    { label: 'Email' }
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
            <a class="block tx-t-0" href="#Email">{_('Email')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicEmail">• {_('Basic Email')}</a>
              <a class="block tx-t-1" href="#labeledEmail">• {_('Labeled Email')}</a>
              <a class="block tx-t-1" href="#smallEmail">• {_('Small Email Display')}</a>
              <a class="block tx-t-1" href="#mediumEmail">• {_('Medium Email Display')}</a>
              <a class="block tx-t-1" href="#largeEmail">• {_('Large Email Display')}</a>
              <a class="block tx-t-1" href="#coloredEmail">• {_('Colored Email Display')}</a>
              <a class="block tx-t-1" href="#noUnderlineEmail">• {_('No Underline Email')}</a>
              <a class="block tx-t-1" href="#blockEmail">• {_('Block Email Display')}</a>
              <a class="block tx-t-1" href="#responsiveEmail">• {_('Responsive Email Display')}</a>
              <a class="block tx-t-1" href="#enhancedEmail">• {_('Enhanced Email with Attributes')}</a>
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

          <a name="Email"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Email')}</h1>
          <ide-app title="Email" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Email from '@stackpress/ink-ui/format/email';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<format-email>` component creates a clickable email link (`mailto:`) with customizable styling and additional HTML attributes. The default font-size is 13px, overridable via the `size` prop or `tx-*` classes. The link is underlined by default, controllable via the `underline` prop.')}</p>
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
              <table-col>{_('The email address for the `mailto:` link (e.g., "user@example.com").')}</table-col>
            </table-row>

            <table-row>
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('The display text for the link. Defaults to the `value` if not provided.')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, applies bold font weight to the text. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the text color of the link (e.g., "var(--primary)", "#FF0000"). Defaults to inherited.')}</table-col>
            </table-row>

            <table-row>
              <table-col>underline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, underlines the link. Defaults to true.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display style (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String/Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the font size of the link (e.g., "12px", "1rem"). Defaults to 13px.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for responsive styling (e.g., "p-4", "tx-md", "md:mr-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (use `class` with Ink utilities instead).')}</table-col>
            </table-row>

            <table-row>
              <table-col>Other attributes</table-col>
              <table-col>-</table-col>
              <table-col>No</table-col>
              <table-col>{_('Additional HTML attributes (e.g., `target`, `rel`, `title`) are passed to the `<a>` tag.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Email -->
          <a name="basicEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Email')}</h2>
          <div class="mb-10">{_('A basic email link with the default 13px font size and underlined text.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email value="user@example.com" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email value="user@example.com" class="p-4" />
          `}</ide-code>

          <!-- Labeled Email -->
          <a name="labeledEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Labeled Email')}</h2>
          <div class="mb-10">{_('An email link with a custom label instead of the email address.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email value="support@example.com" label="Contact Support" class="p-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email value="support@example.com" label="Contact Support" class="p-4" />
          `}</ide-code>

          <!-- Small Email Display -->
          <a name="smallEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Small Email Display')}</h2>
          <div class="mb-10">{_('An email link with a smaller font size using `tx-xs` (10px).')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email value="small@example.com" class="p-4 tx-xs b-solid b-t-1" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email value="small@example.com" class="p-4 tx-xs b-solid b-t-1" />
          `}</ide-code>

          <!-- Medium Email Display -->
          <a name="mediumEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Medium Email Display')}</h2>
          <div class="mb-10">{_('An email link with a medium font size using `tx-md` (14px) and a border.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email value="medium@example.com" class="p-4 tx-md b-solid b-t-2 c-4" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email value="medium@example.com" class="p-4 tx-md b-solid b-t-2 c-4" />
          `}</ide-code>

          <!-- Large Email Display -->
          <a name="largeEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Large Email Display')}</h2>
          <div class="mb-10">{_('An email link with a larger font size using `tx-lg` (18px) and bold styling.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email value="large@example.com" bold class="p-4 tx-lg mr-10" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email value="large@example.com" bold class="p-4 tx-lg mr-10" />
          `}</ide-code>

          <!-- Colored Email Display -->
          <a name="coloredEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colored Email Display')}</h2>
          <div class="mb-10">{_('An email link with a custom text color using the `color` prop.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email 
                value="color@example.com" 
                color="var(--primary)" 
                class="p-4 tx-center bg-t-1 rounded" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email 
              value="color@example.com" 
              color="var(--primary)" 
              class="p-4 tx-center bg-t-1 rounded" 
            />
          `}</ide-code>

          <!-- No Underline Email -->
          <a name="noUnderlineEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('No Underline Email')}</h2>
          <div class="mb-10">{_('An email link with the underline removed using `underline={false}`.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email 
                value="nounderline@example.com" 
                underline={false} 
                class="p-4 b-solid b-t-2 c-4" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email 
              value="nounderline@example.com" 
              underline={false} 
              class="p-4 b-solid b-t-2 c-4" 
            />
          `}</ide-code>

          <!-- Block Email Display -->
          <a name="blockEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Block Email Display')}</h2>
          <div class="mb-10">{_('An email link as a block element with centered text and a background.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email 
                value="block@example.com" 
                display="block" 
                class="p-4 tx-center bg-t-2 rounded" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email 
              value="block@example.com" 
              display="block" 
              class="p-4 tx-center bg-t-2 rounded" 
            />
          `}</ide-code>

          <!-- Responsive Email Display -->
          <a name="responsiveEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Responsive Email Display')}</h2>
          <div class="mb-10">{_('An email link that adjusts font size based on screen size (small on mobile, large on desktop).')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email 
                value="responsive@example.com" 
                class="p-4 md:tx-sm lg:tx-lg" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email 
              value="responsive@example.com" 
              class="p-4 md:tx-sm lg:tx-lg" 
            />
          `}</ide-code>

          <!-- Enhanced Email with Attributes -->
          <a name="enhancedEmail"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Enhanced Email with Attributes')}</h2>
          <div class="mb-10">{_('An email link with additional HTML attributes like `target` and `title` for enhanced functionality.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full mb-20">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-email 
                value="enhanced@example.com" 
                label="Email Support" 
                target="_blank" 
                title="Opens email client in a new tab" 
                class="p-4 b-solid b-t-2 c-4" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <format-email 
              value="enhanced@example.com" 
              label="Email Support" 
              target="_blank" 
              title="Opens email client in a new tab" 
              class="p-4 b-solid b-t-2 c-4" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/date.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Date')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/formula.html">
              {_('Formula')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>