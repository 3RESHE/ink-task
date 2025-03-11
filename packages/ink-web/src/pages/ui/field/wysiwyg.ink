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
<link rel="import" type="component" href="@stackpress/ink-ui/field/wysiwyg.ink" name="field-wysiwyg" />

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
    { label: 'WYSIWYG' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (value) => console.log('Updated value:', value);
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
            <a class="block tx-t-0" href="#WYSIWYG">{_('WYSIWYG')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicWYSIWYG">• {_('Basic WYSIWYG Editor')}</a>
              <a class="block tx-t-1" href="#styledWYSIWYG">• {_('Styled WYSIWYG Editor')}</a>
              <a class="block tx-t-1" href="#minimalWYSIWYG">• {_('Minimal WYSIWYG Editor')}</a>
              <a class="block tx-t-1" href="#fullFeaturedWYSIWYG">• {_('Full-Featured WYSIWYG Editor')}</a>
              <a class="block tx-t-1" href="#preFilledWYSIWYG">• {_('Pre-filled WYSIWYG Editor')}</a>
              <a class="block tx-t-1" href="#disabledWYSIWYG">• {_('Disabled WYSIWYG Editor')}</a>
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

          <a name="WYSIWYG"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('WYSIWYG')}</h1>
          <ide-app title="WYSIWYG" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import WYSIWYG from '@stackpress/ink-ui/field/wysiwyg';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-wysiwyg>` component provides a rich text editor for creating formatted content. Use Ink utilities via the `class` prop to style it responsively. Below are its props:')}</p>
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
              <table-col>{_('Name attribute for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial content for the editor (defaults to "").')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the editor, preventing interaction.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the editor read-only, allowing view only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>history</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables undo/redo buttons (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>font</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables font family selection (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables font size selection (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>format</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables format block selection (e.g., headings, paragraph; default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>paragraph</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables paragraph style options (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>blockquote</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables blockquote button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables text style buttons (bold, italic, etc.; default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables font color selection (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>highlight</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables highlight color selection (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>text</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables text style options (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>remove</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables remove format button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>indent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables indent/outdent buttons (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>align</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables alignment options (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>rule</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables horizontal rule button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>list</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables ordered/unordered list buttons (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>lineheight</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables line height selection (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>table</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables table creation button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>link</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables link insertion button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>image</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables image insertion button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>video</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables video insertion button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>audio</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables audio insertion button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>fullscreen</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables fullscreen toggle button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>showblocks</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables show blocks toggle button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>code</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables code view toggle button (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>print</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables preview and print buttons (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>save</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables save and template buttons (default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>dir</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables direction toggle buttons (LTR/RTL; default: false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom handler for change events, receiving the event.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with the updated content.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for responsive styling (e.g., "w-full p-5 b-solid b-t-3 c-6").')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (use `class` with Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic WYSIWYG Editor -->
          <a name="basicWYSIWYG"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic WYSIWYG Editor')}</h2>
          <div class="mb-10">{_('A basic WYSIWYG editor with default Ink styling and common toolbar options.')}</div>
          <div class="basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-wysiwyg 
                name="content" 
                history 
                font 
                size 
                format 
                style 
                color 
                align 
                list 
                link 
                class="w-full p-4 b-solid b-t-2 c-4 tx-md" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-wysiwyg 
              name="content" 
              history 
              font 
              size 
              format 
              style 
              color 
              align 
              list 
              link 
              class="w-full p-4 b-solid b-t-2 c-4 tx-md" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Styled WYSIWYG Editor -->
          <a name="styledWYSIWYG"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled WYSIWYG Editor')}</h2>
          <div class="mb-10">{_('A styled WYSIWYG editor with responsive Ink utilities and hover effects.')}</div>
          <div class="basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-wysiwyg 
                name="article" 
                history 
                font 
                size 
                format 
                style 
                color 
                align 
                list 
                link 
                class="w-full min-h-300 p-6 b-solid b-t-3 c-6 tx-lg md:vw-90 sm:vw-95 shadow-md bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
                style="cursor: text;"
                change={handleChange}
                update={handleUpdate}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-wysiwyg 
              name="article" 
              history 
              font 
              size 
              format 
              style 
              color 
              align 
              list 
              link 
              class="w-full min-h-300 p-6 b-solid b-t-3 c-6 tx-lg md:vw-90 sm:vw-95 shadow-md bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
              style="cursor: text;"
              change={handleChange}
              update={handleUpdate}
            />
          `}</ide-code>

          <!-- Minimal WYSIWYG Editor -->
          <a name="minimalWYSIWYG"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Minimal WYSIWYG Editor')}</h2>
          <div class="mb-10">{_('A minimal WYSIWYG editor with limited toolbar options and Ink styling.')}</div>
          <div class="basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-wysiwyg 
                name="note" 
                style 
                color 
                align 
                class="w-full min-h-200 p-4 b-dashed b-t-1 c-4 tx-verdana" 
                style="cursor: text;"
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-wysiwyg 
              name="note" 
              style 
              color 
              align 
              class="w-full min-h-200 p-4 b-dashed b-t-1 c-4 tx-verdana" 
              style="cursor: text;"
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Full-Featured WYSIWYG Editor -->
          <a name="fullFeaturedWYSIWYG"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Full-Featured WYSIWYG Editor')}</h2>
          <div class="mb-10">{_('A full-featured WYSIWYG editor with all toolbar options, styled with Ink utilities and hover effects.')}</div>
          <div class="basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-wysiwyg 
                name="document" 
                history 
                font 
                size 
                format 
                paragraph 
                blockquote 
                style 
                color 
                highlight 
                text 
                remove 
                indent 
                align 
                rule 
                list 
                lineheight 
                table 
                link 
                image 
                video 
                audio 
                fullscreen 
                showblocks 
                code 
                print 
                save 
                dir 
                class="w-full min-h-400 p-8 b-solid b-t-4 c-8 tx-xl md:vw-90 sm:vw-95 lg:shadow-lg transition-300 hover:b-primary" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={handleUpdate}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-wysiwyg 
              name="document" 
              history 
              font 
              size 
              format 
              paragraph 
              blockquote 
              style 
              color 
              highlight 
              text 
              remove 
              indent 
              align 
              rule 
              list 
              lineheight 
              table 
              link 
              image 
              video 
              audio 
              fullscreen 
              showblocks 
              code 
              print 
              save 
              dir 
              class="w-full min-h-400 p-8 b-solid b-t-4 c-8 tx-xl md:vw-90 sm:vw-95 lg:shadow-lg transition-300 hover:b-primary" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={handleUpdate}
            />
          `}</ide-code>

          <!-- Pre-filled WYSIWYG Editor -->
          <a name="preFilledWYSIWYG"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Pre-filled WYSIWYG Editor')}</h2>
          <div class="mb-10">{_('A WYSIWYG editor pre-filled with initial content, styled with Ink.')}</div>
          <div class="basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-wysiwyg 
                name="blog" 
                value="<h1>Welcome</h1><p>This is a <b>pre-filled</b> editor with some content.</p>" 
                history 
                font 
                size 
                style 
                color 
                align 
                list 
                link 
                class="w-full min-h-300 p-6 b-solid b-t-3 c-6 tx-md transition-300 hover:b-primary" 
                style="cursor: text;"
                change={handleChange}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-wysiwyg 
              name="blog" 
              value="<h1>Welcome</h1><p>This is a <b>pre-filled</b> editor with some content.</p>" 
              history 
              font 
              size 
              style 
              color 
              align 
              list 
              link 
              class="w-full min-h-300 p-6 b-solid b-t-3 c-6 tx-md transition-300 hover:b-primary" 
              style="cursor: text;"
              change={handleChange}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Disabled WYSIWYG Editor -->
          <a name="disabledWYSIWYG"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled WYSIWYG Editor')}</h2>
          <div class="mb-10">{_('A disabled WYSIWYG editor with pre-filled content and muted styling.')}</div>
          <div class="basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-wysiwyg 
                name="lockedContent" 
                value="<p>This content is <i>locked</i> and cannot be edited.</p>" 
                disabled 
                class="w-full min-h-200 p-4 b-solid b-muted c-5 tx-muted" 
                style="cursor: not-allowed;"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-wysiwyg 
              name="lockedContent" 
              value="<p>This content is <i>locked</i> and cannot be edited.</p>" 
              disabled 
              class="w-full min-h-200 p-4 b-solid b-muted c-5 tx-muted" 
              style="cursor: not-allowed;"
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/time.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Time')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/text.html">
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