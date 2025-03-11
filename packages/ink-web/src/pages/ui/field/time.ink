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
<link rel="import" type="component" href="@stackpress/ink-ui/field/time.ink" name="field-time" />

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
    { label: 'Time' }
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
            <a class="block tx-t-0" href="#Time">{_('Time')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicTime">• {_('Basic Time Input')}</a>
              <a class="block tx-t-1" href="#styledTime">• {_('Styled Time Input')}</a>
              <a class="block tx-t-1" href="#disabledTime">• {_('Disabled Time Input')}</a>
              <a class="block tx-t-1" href="#requiredTime">• {_('Required Time Input')}</a>
              <a class="block tx-t-1" href="#preFilledTime">• {_('Pre-filled Time Input')}</a>
              <a class="block tx-t-1" href="#readonlyTime">• {_('Readonly Time Input')}</a>
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

          <a name="Time"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Time')}</h1>
          <ide-app title="Time" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Time from '@stackpress/ink-ui/field/time';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-time>` component provides a time input field for selecting hours and minutes. Below are its props:')}</p>
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
              <table-col>autocomplete</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Controls autocomplete behavior (e.g., "on", "off"; default: "off").')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the time input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pattern</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regex pattern for input validation (e.g., "[0-2][0-9]:[0-5][0-9]").')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the time input read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the time input as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String | Date</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial value for the time input (e.g., "14:30" or Date object; default: empty).')}</table-col>
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

          <!-- Basic Time Input -->
          <a name="basicTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Time Input')}</h2>
          <div class="mb-10">{_('A basic time input with no initial value and event handlers.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-time 
                name="appointment" 
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-time 
              name="appointment" 
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Styled Time Input -->
          <a name="styledTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Time Input')}</h2>
          <div class="mb-10">{_('A styled time input with custom styling, hover effects, and event handlers.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-time 
                name="meeting" 
                class="w-200 p-5 b-solid b-t-2 c-5 tx-md tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-time 
              name="meeting" 
              class="w-200 p-5 b-solid b-t-2 c-5 tx-md tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Disabled Time Input -->
          <a name="disabledTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled Time Input')}</h2>
          <div class="mb-10">{_('A disabled time input with a pre-filled value and muted styling.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-time 
                name="event" 
                disabled 
                value="18:00" 
                class="w-200 p-5 tx-muted b-solid b-t-1 c-4" 
                style="cursor: not-allowed;"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-time 
              name="event" 
              disabled 
              value="18:00" 
              class="w-200 p-5 tx-muted b-solid b-t-1 c-4" 
              style="cursor: not-allowed;"
            />
          `}</ide-code>

          <!-- Required Time Input -->
          <a name="requiredTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Required Time Input')}</h2>
          <div class="mb-10">{_('A required time input with error styling and autocomplete disabled.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-time 
                name="deadline" 
                required 
                autocomplete="off" 
                class="w-200 p-5 b-solid b-error c-4 tx-md tx-t-2" 
                style="cursor: text;"
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-time 
              name="deadline" 
              required 
              autocomplete="off" 
              class="w-200 p-5 b-solid b-error c-4 tx-md tx-t-2" 
              style="cursor: text;"
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Pre-filled Time Input -->
          <a name="preFilledTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Pre-filled Time Input')}</h2>
          <div class="mb-10">{_('A pre-filled time input with a Date object value and hover effects.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-time 
                name="startTime" 
                value={new Date('2023-01-01T09:30:00')} 
                class="w-200 p-5 b-dashed b-t-1 c-6 tx-verdana tx-bold transition-300 hover:b-primary" 
                style="cursor: text;"
                change={(e) => console.log('Change event:', e.target.value)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-time 
              name="startTime" 
              value={new Date('2023-01-01T09:30:00')} 
              class="w-200 p-5 b-dashed b-t-1 c-6 tx-verdana tx-bold transition-300 hover:b-primary" 
              style="cursor: text;"
              change={(e) => console.log('Change event:', e.target.value)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Readonly Time Input -->
          <a name="readonlyTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Readonly Time Input')}</h2>
          <div class="mb-10">{_('A readonly time input with a pattern restriction and muted styling.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-time 
                name="fixedTime" 
                readonly 
                value="14:00" 
                pattern="[0-2][0-9]:[0-5][0-9]" 
                class="w-200 p-5 b-solid b-muted c-5 tx-muted tx-italic" 
                style="cursor: default;"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <field-time 
              name="fixedTime" 
              readonly 
              value="14:00" 
              pattern="[0-2][0-9]:[0-5][0-9]" 
              class="w-200 p-5 b-solid b-muted c-5 tx-muted tx-italic" 
              style="cursor: default;"
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/textlist.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Textlist')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/wysiwyg.html">
              {_('WYSIWYG')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>