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

  const url = '/ink/ui/field/editor.html';
  const title = _('Ink UI - Editor Field');
  const description = _('A CodeMirror-based code editor field with syntax highlighting and customization.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Editor Field' }
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
          <h6 class="tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper">{_('On this page')}</h6>
          <nav class="tx-14 tx-lh-32">
            <a class="block tx-t-0" href="#editor">{_('Editor Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#languages">• {_('Languages')}</a>
              <a class="block tx-t-1" href="#custom">• {_('Custom Styling')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="editor"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Editor Field')}</h1>
          <ide-app title="Editor Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import EditorField from '@stackpress/ink-ui/field/editor';
            </ide-code>
          </ide-app>

          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table top head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>
            <table-row>
              <table-col>lang</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('CodeMirror mode (e.g., "javascript", "htmlmixed", "markdown", default: "htmlmixed")')}</table-col>
            </table-row>
            <table-row>
              <table-col>numbers</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Show line numbers (default: false)')}</table-col>
            </table-row>
            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial code content')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback for change event (receives ChangeEvent)')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with updated code string')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple editor field with default HTML mode.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-editor name="basic-editor" value="<p>Hello World</p>" class="w-200 h-80" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-editor name="basic-editor" value="<p>Hello World</p>" class="w-200 h-80" />
          `}</ide-code>

          <a name="languages"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Languages')}</h2>
          <div class="mb-10">Editor field with different languages and line numbers.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-editor name="js-editor" lang="javascript" value="console.log('Hi');" numbers={true} class="w-200 h-80" />
            <field-editor name="css-editor" lang="css" value="body { color: blue; }" numbers={true} class="w-200 h-80" />
            <field-editor name="md-editor" lang="markdown" value="# Title" numbers={true} class="w-200 h-80" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-editor name="js-editor" lang="javascript" value="console.log('Hi');" numbers={true} class="w-200 h-80" />
            <field-editor name="css-editor" lang="css" value="body { color: blue; }" numbers={true} class="w-200 h-80" />
            <field-editor name="md-editor" lang="markdown" value="# Title" numbers={true} class="w-200 h-80" />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">Editor field with custom styling, JavaScript mode, and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-editor 
              lang="javascript"
              class="w-200 h-80 scroll-auto b-solid b-primary rounded"
              numbers={true}
              name="custom-editor" 
              value="ink.render(true);" 
              update={(value) => console.log('Updated code:', value)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-editor 
              lang="javascript"
              class="w-200 h-80 scroll-auto b-solid b-primary rounded"
              numbers={true}
              name="custom-editor" 
              value="ink.render(true);" 
              update={(value) => console.log('Updated code:', value)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/datetime.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Datetime Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/file.html">
              {_('File Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>