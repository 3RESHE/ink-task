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
<link rel="import" type="component" href="@stackpress/ink-ui/field/file.ink" name="field-file" />

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
    { label: 'File' }
  ];
  const handleChange = (e) => console.log('Selected file:', e.target.files[0]?.name);
  const handleUpdate = (url) => console.log('Uploaded URL:', url);
  const handleUpload = (file, callback) => {
    setTimeout(() => callback(`https://example.com/uploads/${file.name}`), 1000);
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
            <a class="block tx-t-0" href="#File">{_('File')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicFile">• {_('Basic File Input')}</a>
              <a class="block tx-t-1" href="#imageFile">• {_('Image-Only File Input')}</a>
              <a class="block tx-t-1" href="#fileWithValue">• {_('File with Initial URL')}</a>
              <a class="block tx-t-1" href="#fileWithUploading">• {_('File with Custom Uploading Text')}</a>
              <a class="block tx-t-1" href="#fileWithChange">• {_('File with Change Event')}</a>
              <a class="block tx-t-1" href="#fileWithUpdate">• {_('File with Update Callback')}</a>
              <a class="block tx-t-1" href="#fileWithUpload">• {_('File with Upload Handler')}</a>
              <a class="block tx-t-1" href="#styledFile">• {_('Styled File Input')}</a>
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

          <a name="File"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('File')}</h1>
          <ide-app title="Editor" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import File from '@stackpress/ink-ui/field/file';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-file>` component provides a file upload interface with states for selection, uploading, and display. Below are its props and their roles:')}</p>
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
              <table-col>{_('Sets the name attribute for a hidden `<input>` that stores the uploaded file URL, integrating with forms.')}</table-col>
            </table-row>

            <table-row>
              <table-col>image</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('When present, restricts the file input to image types (sets `accept="image/*"`) and displays a preview of the uploaded image.')}</table-col>
            </table-row>

            <table-row>
              <table-col>uploading</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom text displayed while a file is uploading. Defaults to "Uploading...". Useful for localization or branding.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial URL of a file, bypassing the upload step. Displays the file link and optional image preview.')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Called when a file is selected, receiving the change event. Useful for tracking file selection before upload.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback invoked with the uploaded file URL after a successful upload. Ideal for updating state or triggering actions.')}</table-col>
            </table-row>

            <table-row>
              <table-col>upload</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Handles file upload logic. Takes the selected file and a callback to set the URL. Required for uploading functionality.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes applied to the component’s host element, allowing layout and style adjustments.')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles applied to the host element, overriding default styles for precise control.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic File Input -->
          <a name="basicFile"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic File Input')}</h2>
          <div class="mb-10">{_('A minimal file input with a form name, ready to accept any file type and store its URL in a hidden input once uploaded.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-file name="file" />
          `}</ide-code>

          <!-- Image-Only File Input -->
          <a name="imageFile"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Image-Only File Input')}</h2>
          <div class="mb-10">{_('Restricts the input to image files and previews the uploaded image. The `image` prop ensures only images are selectable.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" image />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-file name="file" image />
          `}</ide-code>

          <!-- File with Initial URL -->
          <a name="fileWithValue"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('File with Initial URL')}</h2>
          <div class="mb-10">{_('Displays an existing file URL with a clickable link and reset option. The `value` prop sets the initial state, skipping upload.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" value="https://images.wsj.net/im-580612/8SR" image />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-file name="file" value="https://images.wsj.net/im-580612/8SR" image />
          `}</ide-code>

          <!-- File with Custom Uploading Text -->
          <a name="fileWithUploading"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('File with Custom Uploading Text')}</h2>
          <div class="mb-10">{_('Customizes the text shown during upload with the `uploading` prop. Pair with `upload` to see it in action (simulated here).')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" uploading="Processing your file..." upload={handleUpload} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpload = (file, callback) => {
                setTimeout(() => callback("https://example.com/uploads/" + file.name), 1000);
              };
            </script>
            <field-file name="file" uploading="Processing your file..." upload={handleUpload} />
          `}</ide-code>

          <!-- File with Change Event -->
          <a name="fileWithChange"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('File with Change Event')}</h2>
          <div class="mb-10">{_('Triggers a `change` handler when a file is selected, logging the file name. Useful for pre-upload validation or feedback.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" change={handleChange} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleChange = (e) => console.log('Selected file:', e.target.files[0]?.name);
            </script>
            <field-file name="file" change={handleChange} />
          `}</ide-code>

          <!-- File with Update Callback -->
          <a name="fileWithUpdate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('File with Update Callback')}</h2>
          <div class="mb-10">{_('Calls the `update` function with the uploaded URL after upload completes. Requires `upload` to process the file.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" update={handleUpdate} upload={handleUpload} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpdate = (url) => console.log('Uploaded URL:', url);
              const handleUpload = (file, callback) => {
                setTimeout(() => callback("https://example.com/uploads/" + file.name), 1000);
              };
            </script>
            <field-file name="file" update={handleUpdate} upload={handleUpload} />
          `}</ide-code>

          <!-- File with Upload Handler -->
          <a name="fileWithUpload"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('File with Upload Handler')}</h2>
          <div class="mb-10">{_('Uses the `upload` prop to handle file uploads, simulating a 1-second delay before returning a URL.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" upload={handleUpload} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <script>
              const handleUpload = (file, callback) => {
                setTimeout(() => callback("https://example.com/uploads/" + file.name), 1000);
              };
            </script>
            <field-file name="file" upload={handleUpload} />
          `}</ide-code>

          <!-- Styled File Input -->
          <a name="styledFile"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled File Input')}</h2>
          <div class="mb-10">{_('Customizes appearance with `class` and `style`, adjusting width and border for a unique look.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 h-100 flex justify-center align-center">
              <field-file name="file" class="w-300" style="border: 2px dashed #007bff;" />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-file name="file" class="w-300" style="border: 2px dashed #007bff;" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/editor.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Editor')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/filelist.html">
              {_('Filelist')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>