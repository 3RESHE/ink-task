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
<link rel="import" type="component" href="@stackpress/ink-ui/field/markdown.ink" name="field-markdown" />

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
    { label: 'Markdown' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (value) => console.log('Updated Markdown:', value);
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
            <a class="block tx-t-0" href="#Markdown">{_('Markdown')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicMarkdown">• {_('Basic Markdown Editor')}</a>
              <a class="block tx-t-1" href="#markdownWithValue">• {_('Markdown with Initial Value')}</a>
              <a class="block tx-t-1" href="#markdownWithNumbers">• {_('Markdown with Line Numbers')}</a>
              <a class="block tx-t-1" href="#markdownWithChange">• {_('Markdown with Change Event')}</a>
              <a class="block tx-t-1" href="#markdownWithUpdate">• {_('Markdown with Update Callback')}</a>
              <a class="block tx-t-1" href="#styledMarkdown">• {_('Styled Markdown Editor')}</a>
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

          <a name="Markdown"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Markdown')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Markdown from '@stackpress/ink-ui/field/markdown';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-markdown>` component provides a Markdown editor with edit and preview modes. Below are its props and their roles:')}</p>
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
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission, tied to a hidden textarea.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial Markdown content to display in the editor.')}</table-col>
            </table-row>

            <table-row>
              <table-col>numbers</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, displays line numbers in the editor for better navigation.')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Handler called with the change event when content is edited.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback invoked with the current Markdown content on change.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes applied to the host element.')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles applied to the host element (e.g., "min-height: 200px").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Markdown Editor -->
          <a name="basicMarkdown"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Markdown Editor')}</h2>
          <div class="mb-10">{_('A minimal Markdown editor with a form name, featuring edit and preview modes toggled via hover buttons.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-markdown name="markdown" style="min-height: 200px;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-markdown name="markdown" />
          `}</ide-code>

          <!-- Markdown with Initial Value -->
          <a name="markdownWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Markdown with Initial Value')}</h2>
          <div class="mb-10">{_('Loads the editor with initial Markdown content using the `value` prop, ready for editing or previewing.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-markdown name="markdown" value="# Hello\n**Bold** text" style="min-height: 200px;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-markdown name="markdown" value="# Hello\n**Bold** text" />
          `}</ide-code>

          <!-- Markdown with Line Numbers -->
          <a name="markdownWithNumbers"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Markdown with Line Numbers')}</h2>
          <div class="mb-10">{_('Adds line numbers to the editor with the `numbers` prop, aiding in longer Markdown documents.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-markdown name="markdown" numbers value="# Title\nLine 1\nLine 2" style="min-height: 200px;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-markdown name="markdown" numbers value="# Title\nLine 1\nLine 2" />
          `}</ide-code>

          <!-- Markdown with Change Event -->
          <a name="markdownWithChange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Markdown with Change Event')}</h2>
          <div class="mb-10">{_('Logs changes via the `change` prop, capturing editor input for real-time tracking or validation.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-markdown name="markdown" change={handleChange} value="Edit me" style="min-height: 200px;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Change event:', e.target.value);
            </script>
            <field-markdown name="markdown" change={handleChange} value="Edit me" />
          `}</ide-code>

          <!-- Markdown with Update Callback -->
          <a name="markdownWithUpdate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Markdown with Update Callback')}</h2>
          <div class="mb-10">{_('Uses the `update` prop to track Markdown content changes, ideal for syncing with external state.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-markdown name="markdown" update={handleUpdate} value="Update me" style="min-height: 200px;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpdate = (value) => console.log('Updated Markdown:', value);
            </script>
            <field-markdown name="markdown" update={handleUpdate} value="Update me" />
          `}</ide-code>

          <!-- Styled Markdown Editor -->
          <a name="styledMarkdown"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Markdown Editor')}</h2>
          <div class="mb-10">{_('A minimalist styled editor with a wide layout, soft border, and hover effect, enhancing usability and aesthetics.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-markdown 
                name="markdown" 
                class="w-400 bg-white tx-t-1" 
                style="border: 1px solid #e0e0e0; padding: 10px; transition: border-color 0.3s ease; min-height: 200px;" 
                onmouseover="this.style.borderColor='#888888'" 
                onmouseout="this.style.borderColor='#e0e0e0'" 
                value="# Styled Markdown"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-markdown 
              name="markdown" 
              class="w-400 bg-white tx-t-1" 
              style="border: 1px solid #e0e0e0; padding: 10px; transition: border-color 0.3s ease; min-height: 200px;" 
              onmouseover="this.style.borderColor='#888888'" 
              onmouseout="this.style.borderColor='#e0e0e0'" 
              value="# Styled Markdown"
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/input.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Input')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/mask.html">
              {_('Mask')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>