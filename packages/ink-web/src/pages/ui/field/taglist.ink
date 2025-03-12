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
<link rel="import" type="component" href="@stackpress/ink-ui/field/taglist.ink" name="field-taglist" />

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
    { label: 'Taglist' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (value) => console.log('Updated tags:', value);
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
            <a class="block tx-t-0" href="#Taglist">{_('Taglist')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicTaglist">• {_('Basic Taglist Input')}</a>
              <a class="block tx-t-1" href="#themedTaglist">• {_('Themed Taglist Input')}</a>
              <a class="block tx-t-1" href="#styledTaglist">• {_('Styled Taglist Input')}</a>
              <a class="block tx-t-1" href="#errorTaglist">• {_('Error-Themed Taglist with Custom Color')}</a>
              <a class="block tx-t-1" href="#mutedTaglist">• {_('Muted Taglist with String Input')}</a>
              <a class="block tx-t-1" href="#secondaryTaglist">• {_('Secondary Taglist with Extensive Styling')}</a>
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

          <a name="Taglist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Taglist')}</h1>
          <ide-app title="Taglist" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Taglist from '@stackpress/ink-ui/field/taglist';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-taglist>` component provides a tag input field for managing tags. Below are its props:')}</p>
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
              <table-col>{_('Name attribute for form submission (generates hidden inputs per tag).')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>Array/String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial tags as an array or comma-separated string (default: `[]`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text for the input field.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the taglist input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the taglist read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the taglist as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets info color for tags.')}</table-col>
            </table-row>

            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets warning color for tags (default true).')}</table-col>
            </table-row>

            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets success color for tags.')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets error color for tags.')}</table-col>
            </table-row>

            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets muted color for tags.')}</table-col>
            </table-row>

            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets primary color for tags.')}</table-col>
            </table-row>

            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets secondary color for tags.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom color for tags (e.g., "#ff4444"; overrides other color props).')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom handler for change events on the input, receiving the event.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with the updated tag list (array) after add/remove.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('CSS classes for the host element (use Ink utilities).')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Inline styles (prefer Ink utilities instead).')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Taglist Input -->
          <a name="basicTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Taglist Input')}</h2>
          <div class="mb-10">{_('A basic taglist input with default warning color.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-taglist name="tags" value={["tag1", "tag2"]} warning />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="js" trim detab={4}>{`
            <field-taglist name="tags" value={["tag1", "tag2"]} warning />
          `}</ide-code>

          <!-- Themed Taglist Input -->
          <a name="themedTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Themed Taglist Input')}</h2>
          <div class="mb-10">{_('A themed taglist input with success color and placeholder.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-taglist 
                name="skills" 
                placeholder="Add skills..." 
                success 
                value="coding,design" 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="js" trim detab={4}>{`
            <field-taglist 
              name="skills" 
              placeholder="Add skills..." 
              success 
              value="coding,design"
            />
          `}</ide-code>

          <!-- Styled Taglist Input -->
          <a name="styledTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Taglist Input')}</h2>
          <div class="mb-10">{_('A styled taglist input with primary color, custom styling, and hover effects.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-taglist 
                name="categories" 
                primary
                placeholder="Enter categories..." 
                value={["tech", "news"]} 
                class="w-300 b-solid b-t-2 c-5 tx-lg bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)} 
                update={(value) => console.log('Updated tags:', value)} 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="js" trim detab={4}>{`
            <field-taglist 
              name="categories" 
              primary
              placeholder="Enter categories..." 
              value={["tech", "news"]} 
              class="w-300 b-solid b-t-2 c-5 tx-lg bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)} 
              update={(value) => console.log('Updated tags:', value)} 
            />
          `}</ide-code>

          <!-- Error-Themed Taglist with Custom Color -->
          <a name="errorTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Error-Themed Taglist with Custom Color')}</h2>
          <div class="mb-10">{_('A taglist with error theme overridden by a custom color.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-taglist 
                name="errors" 
                placeholder="Add error tags..." 
                error 
                color="#ff4444" 
                value={["bug", "crash"]} 
                update={(value) => console.log('Updated tags:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="js" trim detab={4}>{`
            <field-taglist 
              name="errors" 
              placeholder="Add error tags..." 
              error 
              color="#ff4444" 
              value={["bug", "crash"]} 
              update={(value) => console.log('Updated tags:', value)}
            />
          `}</ide-code>

          <!-- Muted Taglist with String Input -->
          <a name="mutedTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Muted Taglist with String Input')}</h2>
          <div class="mb-10">{_('A taglist with muted color theme using a comma-separated string input.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
          <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-taglist 
                name="labels" 
                placeholder="Add labels..." 
                muted 
                value="urgent,pending,review" 
                class="w-250"
                update={(value) => console.log('Updated tags:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="js" trim detab={4}>{`
            <field-taglist 
              name="labels" 
              placeholder="Add labels..." 
              muted 
              value="urgent,pending,review" 
              class="w-250"
              update={(value) => console.log('Updated tags:', value)}
            />
          `}</ide-code>

          <!-- Secondary Taglist with Extensive Styling -->
          <a name="secondaryTaglist"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Secondary Taglist with Extensive Styling')}</h2>
          <div class="mb-10">{_('A taglist with secondary color, extensive styling, and disabled state.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-taglist 
                name="topics" 
                secondary 
                placeholder="Add topics..." 
                value={["ai", "ml", "data"]} 
                disabled 
                class="w-300 p-5 b-solid b-t-2 c-5 tx-lg tx-muted bg-t-0 transition-300" 
                style="cursor: not-allowed;"
                update={(value) => console.log('Updated tags:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="js" trim detab={4}>{`
            <field-taglist 
              name="topics" 
              secondary 
              placeholder="Add topics..." 
              value={["ai", "ml", "data"]} 
              disabled 
              class="w-300 p-5 b-solid b-t-2 c-5 tx-lg tx-muted bg-t-0 transition-300" 
              style="cursor: not-allowed;"
              update={(value) => console.log('Updated tags:', value)}
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/switch.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Switch')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/textarea.html">
              {_('Textarea')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>