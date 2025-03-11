<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="layout-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/textarea.ink" name="field-textarea" />

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
    { label: 'Textarea' }
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
            <a class="block tx-t-0" href="#Textarea">{_('Textarea')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicTextarea">• {_('Basic Textarea Input')}</a>
              <a class="block tx-t-1" href="#readonlyTextarea">• {_('Readonly Textarea Input')}</a>
              <a class="block tx-t-1" href="#styledTextarea">• {_('Styled Textarea Input')}</a>
              <a class="block tx-t-1" href="#disabledTextarea">• {_('Disabled Textarea Input')}</a>
              <a class="block tx-t-1" href="#requiredTextarea">• {_('Required Textarea Input')}</a>
              <a class="block tx-t-1" href="#customTextarea">• {_('Custom Styled Textarea Input')}</a>
              <a class="block tx-t-1" href="#themedTextarea">• {_('Themed Textarea Input')}</a>
              <a class="block tx-t-1" href="#compactTextarea">• {_('Compact Textarea Input')}</a>
              <a class="block tx-t-1" href="#largeTextarea">• {_('Large Textarea with Overflow')}</a>
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

          <a name="Textarea"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Textarea')}</h1>
          <ide-app title="Textarea" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Textarea from '@stackpress/ink-ui/field/textarea';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-textarea>` component provides a textarea input for multi-line text. Below are its props:')}</p>
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
              <table-col>{_('Initial value of the textarea (can also be set via inner content).')}</table-col>
            </table-row>

            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text for the textarea.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the textarea.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the textarea read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the textarea as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rows</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Number of visible rows in the textarea (default: 2).')}</table-col>
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
              <table-col>{_('Callback with the updated value.')}</table-col>
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

          <!-- Basic Textarea Input -->
          <a name="basicTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Textarea Input')}</h2>
          <div class="mb-10">{_('A basic textarea input with a placeholder and initial value.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                name="description" 
                value="Initial description text." 
                placeholder="Enter your description..." 
                rows={3} 
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              name="description" 
              value="Initial description text." 
              placeholder="Enter your description..." 
              rows={3} 
            />
          `}</ide-code>

          <!-- Readonly Textarea Input -->
          <a name="readonlyTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Readonly Textarea Input')}</h2>
          <div class="mb-10">{_('A readonly textarea input with pre-filled content.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                readonly 
                rows={4} 
                value="This is a readonly textarea.\nYou cannot edit this content."
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              readonly 
              rows={4} 
              value="This is a readonly textarea.\nYou cannot edit this content."
            />
          `}</ide-code>

          <!-- Styled Textarea Input -->
          <a name="styledTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Textarea Input')}</h2>
          <div class="mb-10">{_('A styled textarea input with custom styling, hover effects, and event handlers.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                name="notes" 
                placeholder="Add your notes..." 
                rows={5} 
                class="w-300 p-5 b-solid b-t-2 c-5 tx-lg tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              name="notes" 
              placeholder="Add your notes..." 
              rows={5} 
              class="w-300 p-5 b-solid b-t-2 c-5 tx-lg tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Disabled Textarea Input -->
          <a name="disabledTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled Textarea Input')}</h2>
          <div class="mb-10">{_('A disabled textarea input with pre-filled content and cursor styling.')}</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                disabled 
                rows={3} 
                class="w-300 tx-muted cursor-not-allowed"
              >
                This textarea is disabled.
                You cannot interact with it.
              </field-textarea>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
                disabled 
                rows={3} 
                class="w-300 tx-muted cursor-not-allowed"
            >
                This textarea is disabled.
                You cannot interact with it.
            </field-textarea>
          `}</ide-code>

          <!-- Required Textarea Input -->
          <a name="requiredTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Required Textarea Input')}</h2>
          <div class="mb-10">{_('A required textarea input with minimal rows and simple styling.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                name="feedback" 
                placeholder="Your feedback is required..." 
                required 
                rows={2} 
                class="w-250 p-3 b-solid b-error c-4" 
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              name="feedback" 
              placeholder="Your feedback is required..." 
              required 
              rows={2} 
              class="w-250 p-3 b-solid b-error c-4" 
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Custom Styled Textarea Input -->
          <a name="customTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styled Textarea Input')}</h2>
          <div class="mb-10">{_('A custom styled textarea with large rows, hover effects, and event feedback.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                name="journal" 
                placeholder="Write your journal entry..." 
                rows={10} 
                class="w-400 p-6 b-dashed b-t-3 c-8 tx-md tx-t-2 bg-t-1 shadow-0-2-8-t-3 resize-none transition-300 hover:b-primary" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              name="journal" 
              placeholder="Write your journal entry..." 
              rows={10} 
              class="w-400 p-6 b-dashed b-t-3 c-8 tx-md tx-t-2 bg-t-1 shadow-0-2-8-t-3 resize-none transition-300 hover:b-primary" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Themed Textarea Input -->
          <a name="themedTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Themed Textarea Input')}</h2>
          <div class="mb-10">{_('A themed textarea with a muted background and italic text.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                name="comments" 
                placeholder="Add your comments..." 
                rows={4} 
                class="w-350 p-4 bg-muted tx-italic b-solid b-t-1 c-6" 
                style="cursor: text;"
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              name="comments" 
              placeholder="Add your comments..." 
              rows={4} 
              class="w-350 p-4 bg-muted tx-italic b-solid b-t-1 c-6" 
              style="cursor: text;"
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Compact Textarea Input -->
          <a name="compactTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Compact Textarea Input')}</h2>
          <div class="mb-10">{_('A compact textarea with centered text and custom line height.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                name="summary" 
                placeholder="Write a summary..." 
                rows={2} 
                class="w-300 p-3 tx-center tx-lh-20 b-solid b-t-2 c-4" 
                style="cursor: text;"
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              name="summary" 
              placeholder="Write a summary..." 
              rows={2} 
              class="w-300 p-3 tx-center tx-lh-20 b-solid b-t-2 c-4" 
              style="cursor: text;"
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Large Textarea with Overflow -->
          <a name="largeTextarea"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Large Textarea with Overflow')}</h2>
          <div class="mb-10">{_('A large textarea with overflow handling and bold Verdana font.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-textarea 
                name="article" 
                placeholder="Write your article..." 
                rows={8} 
                class="w-400 p-5 b-solid b-t-1 c-6 tx-bold tx-verdana scroll-y-auto h-200" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-textarea 
              name="article" 
              placeholder="Write your article..." 
              rows={8} 
              class="w-400 p-5 b-solid b-t-1 c-6 tx-bold tx-verdana scroll-y-auto h-200" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/taglist.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Taglist')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/textlist.html">
              {_('Textlist')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>