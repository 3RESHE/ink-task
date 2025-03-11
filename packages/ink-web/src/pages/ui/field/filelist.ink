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
<link rel="import" type="component" href="@stackpress/ink-ui/field/filelist.ink" name="field-filelist" />

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
    { label: 'Filelist' }
  ];
  const handleChange = (e) => console.log('Selected files:', Array.from(e.target.files).map(f => f.name));
  const handleUpload = (files, callback) => {
    setTimeout(() => callback(files.map(f => `https://example.com/uploads/${f.name}`)), 1000);
  };
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
            <a class="block tx-t-0" href="#Filelist">{_('Filelist')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicFilelist">• {_('Basic Filelist Input')}</a>
              <a class="block tx-t-1" href="#imageFilelist">• {_('Image-Only Filelist')}</a>
              <a class="block tx-t-1" href="#filelistWithValue">• {_('Filelist with Initial URLs')}</a>
              <a class="block tx-t-1" href="#filelistWithUploading">• {_('Filelist with Custom Uploading Text')}</a>
              <a class="block tx-t-1" href="#filelistWithChange">• {_('Filelist with Change Event')}</a>
              <a class="block tx-t-1" href="#filelistWithUpload">• {_('Filelist with Upload Handler')}</a>
              <a class="block tx-t-1" href="#styledFilelist">• {_('Styled Filelist Input')}</a>
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

          <a name="Filelist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Filelist')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Filelist from '@stackpress/ink-ui/field/filelist';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-filelist>` component allows uploading and managing multiple files, displaying them as a list with optional previews. Here’s how each prop shapes its behavior:')}</p>
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
              <table-col>{_('Sets the name attribute for hidden `<input>` elements, one per uploaded URL, enabling form submission of multiple files.')}</table-col>
            </table-row>

            <table-row>
              <table-col>image</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Restricts the input to image files (`accept="image/*"`) and shows a 32px-high preview for each uploaded image.')}</table-col>
            </table-row>

            <table-row>
              <table-col>uploading</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text shown when files are being uploaded. Defaults to "Uploading...". Customize it for clarity or localization.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>Array</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial array of file URLs to display. Defaults to an empty array. Each URL gets a link and optional preview.')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Triggered when files are selected, receiving the change event. Useful for pre-upload processing or logging.')}</table-col>
            </table-row>

            <table-row>
              <table-col>upload</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Handles uploading multiple files. Receives an array of files and a callback to return their URLs. Essential for upload functionality.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes for the host element, allowing layout tweaks like width or spacing.')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles for the host element, overriding defaults for precise visual control.')}</table-col>
            </table-row>
          </layout-table>
          <p class="mt-20 tx-muted">{_('Note: The `update` prop exists but is unused in the current implementation. It’s included for potential future enhancements.')}</p>

          <!-- Basic Filelist Input -->
          <a name="basicFilelist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Filelist Input')}</h2>
          <div class="mb-10">{_('A simple multi-file input with a form name. It accepts any file type and stores URLs in hidden inputs for form submission.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-150 flex justify-center align-center">
              <field-filelist name="files" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-filelist name="files" />
          `}</ide-code>

          <!-- Image-Only Filelist -->
          <a name="imageFilelist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Image-Only Filelist')}</h2>
          <div class="mb-10">{_('Limits selection to images and previews them after upload. The `image` prop ensures only image files are accepted.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-150 flex justify-center align-center">
              <field-filelist name="files" image />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-filelist name="files" image />
          `}</ide-code>

          <!-- Filelist with Initial URLs -->
          <a name="filelistWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Filelist with Initial URLs')}</h2>
          <div class="mb-10">{_('Displays a pre-populated list of URLs using the `value` prop. Each URL has a link and preview (if `image`), with a remove option.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-150 flex justify-center align-center">
              <field-filelist 
                name="files" 
                image 
                value={["https://images.wsj.net/im-580612/8SR", "https://images.wsj.net/im-580612/8SR"]} 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-filelist 
              name="files" 
              image 
              value={["https://example.com/image1.jpg", "https://example.com/image2.jpg"]} 
            />
          `}</ide-code>

          <!-- Filelist with Custom Uploading Text -->
          <a name="filelistWithUploading"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Filelist with Custom Uploading Text')}</h2>
          <div class="mb-10">{_('Shows custom text during upload via `uploading`. Pair with `upload` to see it while files process (simulated here).')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-150 flex justify-center align-center">
              <field-filelist name="files" uploading="Processing files..." upload={handleUpload} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpload = (files, callback) => {
                setTimeout(() => callback(files.map(f => "https://example.com/uploads/" + f.name)), 1000);
              };
            </script>
            <field-filelist name="files" uploading="Processing files..." upload={handleUpload} />
          `}</ide-code>

          <!-- Filelist with Change Event -->
          <a name="filelistWithChange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Filelist with Change Event')}</h2>
          <div class="mb-10">{_('Logs selected file names with the `change` prop. Great for pre-upload validation or user feedback.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-150 flex justify-center align-center">
              <field-filelist name="files" change={handleChange} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Selected files:', Array.from(e.target.files).map(f => f.name));
            </script>
            <field-filelist name="files" change={handleChange} />
          `}</ide-code>

          <!-- Filelist with Upload Handler -->
          <a name="filelistWithUpload"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Filelist with Upload Handler')}</h2>
          <div class="mb-10">{_('Uses `upload` to process multiple files, adding their URLs to the list after a simulated 1-second delay.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-150 flex justify-center align-center">
              <field-filelist name="files" upload={handleUpload} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpload = (files, callback) => {
                setTimeout(() => callback(files.map(f => "https://example.com/uploads/" + f.name)), 1000);
              };
            </script>
            <field-filelist name="files" upload={handleUpload} />
          `}</ide-code>

        <!-- Styled Filelist Input -->
        <a name="styledFilelist"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Filelist Input')}</h2>
        <div class="mb-10">{_('Customizes the file list with a wider layout, rounded corners, and a vibrant border using `class` and `style`. Enhances visibility for multiple files.')}</div>
        <div class="basis-third-10 lg-basis-half-10 md-basis-full">
        <div class="bg-t-3 h-150 flex justify-center align-center">
            <field-filelist 
            name="files" 
            class="w-400 bg-t-0 rounded-10" 
            style="border: 3px solid #ff4081; padding: 10px;" 
            />
        </div>
        </div>
        <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
        <field-filelist 
            name="files" 
            class="w-400 bg-t-0 rounded-10" 
            style="border: 3px solid #ff4081; padding: 10px;" 
        />
        `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/file.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('File')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/input.html">
              {_('Input')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>