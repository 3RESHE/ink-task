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
<link rel="import" type="component" href="@stackpress/ink-ui/field/slug.ink" name="field-slug" />

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
    { label: 'Slug' }
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
            <a class="block tx-t-0" href="#Slug">{_('Slug')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicSlug">• {_('Basic Slug Input')}</a>
              <a class="block tx-t-1" href="#camelSlug">• {_('CamelCase Slug Input')}</a>
              <a class="block tx-t-1" href="#styledSlug">• {_('Styled Slug Input')}</a>
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

          <a name="Slug"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Slug')}</h1>
          <ide-app title="Slug" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Slug from '@stackpress/ink-ui/field/slug';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-slug>` component provides a text input that transforms input into slugs (with dashes or underscores) or camelCase. Below are its props:')}</p>
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
              <table-col>{_('Initial value of the input (transformed on change).')}</table-col>
            </table-row>

            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text when input is empty.')}</table-col>
            </table-row>

            <table-row>
              <table-col>autocomplete</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Controls browser autofill behavior.')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the input.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pattern</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regular expression pattern for validation (e.g., "^[a-z0-9-]+$").')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the input read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the input as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>dash</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Uses dashes (`-`) for word separation (default true, overrides `line` and `camel`).')}</table-col>
            </table-row>

            <table-row>
              <table-col>line</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Uses underscores (`_`) for word separation (default false, overrides `dash` if true).')}</table-col>
            </table-row>

            <table-row>
              <table-col>camel</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Converts to camelCase (default false, overrides `dash` and `line` if true).')}</table-col>
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
              <table-col>{_('Callback with the transformed value.')}</table-col>
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

          <!-- Basic Slug Input -->
          <a name="basicSlug"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Slug Input')}</h2>
          <div class="mb-10">{_('A basic slug input with default dash separation.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-slug name="slug" value="Hello World" update={(value) => console.log('Transformed:', value)} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim detab={4}>{`
            <field-slug name="slug" value="Hello World" update={(value) => console.log('Transformed:', value)} />
          `}</ide-code>

          <!-- CamelCase Slug Input -->
          <a name="camelSlug"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('CamelCase Slug Input')}</h2>
          <div class="mb-10">{_('A slug input transformed to camelCase.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-slug name="camelSlug" value="Hello World" camel update={(value) => console.log('Transformed:', value)} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim detab={4}>{`
            <field-slug name="camelSlug" value="Hello World" camel update={(value) => console.log('Transformed:', value)} />
          `}</ide-code>

          <!-- Styled Slug Input -->
          <a name="styledSlug"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Slug Input')}</h2>
          <div class="mb-10">{_('A styled slug input with custom formatting and hover effects.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-slug 
                name="styledSlug" 
                value="Hello World Today" 
                dash 
                placeholder="Enter slug text" 
                pattern="^[a-z0-9-]+$" 
                class="w-300 p-5 b-solid b-t-2 c-5 tx-lg tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
                style="cursor: text;"
                update={(value) => console.log('Transformed:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim detab={4}>{`
            <field-slug 
              name="styledSlug" 
              value="Hello World Today" 
              dash 
              placeholder="Enter slug text" 
              pattern="^[a-z0-9-]+$" 
              class="w-300 p-5 b-solid b-t-2 c-5 tx-lg tx-t-1 bg-white transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
              style="cursor: text;"
              update={(value) => console.log('Transformed:', value)}
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/select.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Select')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/switch.html">
              {_('Switch')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>