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
<link rel="import" type="component" href="@stackpress/ink-ui/field/editor.ink" name="field-editor" />

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
    { label: 'Editor' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (value) => console.log('Updated content:', value);
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
            <a class="block tx-t-0" href="#Editor">{_('Editor')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicEditor">• {_('Basic Editor (name)')}</a>
              <a class="block tx-t-1" href="#editorWithValue">• {_('Editor with Value')}</a>
              <a class="block tx-t-1" href="#editorWithLang">• {_('Editor with Lang')}</a>
              <a class="block tx-t-1" href="#editorWithNumbers">• {_('Editor with Numbers')}</a>
              <a class="block tx-t-1" href="#changeEditor">• {_('Editor with Change')}</a>
              <a class="block tx-t-1" href="#updateEditor">• {_('Editor with Update')}</a>
              <a class="block tx-t-1" href="#styledEditor">• {_('Styled Editor (class, style)')}</a>
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

          <a name="Editor"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Editor')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Editor from '@stackpress/ink-ui/field/editor';
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
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission, passed to textarea.')}</table-col>
            </table-row>

            <table-row>
              <table-col>lang</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Editor mode: "htmlmixed" (default), "markdown", "css", "javascript", "json", "typescript".')}</table-col>
            </table-row>

            <table-row>
              <table-col>numbers</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If present, enables line numbers in the editor.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial content for the editor; overrides child content if set.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If present, disables the textarea and editor.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If present, makes the textarea and editor read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Handler called with change event when content updates.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with current editor content on change.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('CSS classes applied to the host element.')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles applied to the host element.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Editor (name) -->
          <a name="basicEditor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Editor (name)')}</h2>
          <div class="mb-10">{_('A basic editor with a form name, using default "htmlmixed" mode.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-200 flex justify-center align-center">
              <field-editor name="editor" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-editor name="editor" />
          `}</ide-code>

          <!-- Editor with Value -->
          <a name="editorWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Editor with Value')}</h2>
          <div class="mb-10">{_('An editor with initial HTML content.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-200 flex justify-center align-center">
              <field-editor name="editor" value="<p>Hello, world!</p>" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-editor name="editor" value="<p>Hello, world!</p>" />
          `}</ide-code>

          <!-- Editor with Lang -->
          <a name="editorWithLang"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Editor with Lang')}</h2>
          <div class="mb-10">{_('An editor in Markdown mode with initial content.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-200 flex justify-center align-center">
              <field-editor name="editor" lang="markdown" value="# Title\nText" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-editor name="editor" lang="markdown" value="# Title\nText" />
          `}</ide-code>

          <!-- Editor with Numbers -->
          <a name="editorWithNumbers"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Editor with Numbers')}</h2>
          <div class="mb-10">{_('An editor with line numbers enabled.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-200 flex justify-center align-center">
              <field-editor name="editor" numbers value="Line 1\nLine 2" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-editor name="editor" numbers value="Line 1\nLine 2" />
          `}</ide-code>

          <!-- Editor with Change -->
          <a name="changeEditor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Editor with Change')}</h2>
          <div class="mb-10">{_('An editor with a custom change handler.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-200 flex justify-center align-center">
              <field-editor name="editor" change={handleChange} value="<p>Edit me</p>" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Change event:', e.target.value);
            </script>
            <field-editor name="editor" change={handleChange} value="<p>Edit me</p>" />
          `}</ide-code>

          <!-- Editor with Update -->
          <a name="updateEditor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Editor with Update')}</h2>
          <div class="mb-10">{_('An editor with an update callback.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-200 flex justify-center align-center">
              <field-editor name="editor" update={handleUpdate} value="<p>Update me</p>" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpdate = (value) => console.log('Updated content:', value);
            </script>
            <field-editor name="editor" update={handleUpdate} value="<p>Update me</p>" />
          `}</ide-code>

          <!-- Styled Editor (class, style) -->
          <a name="styledEditor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Editor (class, style)')}</h2>
          <div class="mb-10">{_('An editor with custom class and style.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-200 flex justify-center align-center">
              <field-editor name="editor" value="<p>Styled</p>" class="w-300" style="border: 1px solid #007bff;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-editor name="editor" value="<p>Styled</p>" class="w-300" style="border: 1px solid #007bff;" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/datetime.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Datetime')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/file.html">
              {_('File')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>