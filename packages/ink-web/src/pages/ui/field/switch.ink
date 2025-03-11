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
<link rel="import" type="component" href="@stackpress/ink-ui/field/switch.ink" name="field-switch" />

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
    { label: 'Switch' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.checked);
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
            <a class="block tx-t-0" href="#Switch">{_('Switch')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicSwitch">• {_('Basic Switch Input')}</a>
              <a class="block tx-t-1" href="#themedSwitch">• {_('Themed Switch Input')}</a>
              <a class="block tx-t-1" href="#styledSwitch">• {_('Styled Switch Input')}</a>
              <a class="block tx-t-1" href="#yesNoSwitch">• {_('Yes/No Switch with Orange Theme')}</a>
              <a class="block tx-t-1" href="#disabledSwitch">• {_('Smooth Sun/Moon Switch (Disabled)')}</a>
              <a class="block tx-t-1" href="#customSwitch">• {_('Custom Labeled Switch')}</a>
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

          <a name="Switch"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Switch')}</h1>
          <ide-app title="Switch" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Switch from '@stackpress/ink-ui/field/switch';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('The `<field-switch>` component provides a toggle switch with customizable styles and labels. Below are its props:')}</p>
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
              <table-col>checked</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial checked state of the switch (default false).')}</table-col>
            </table-row>

            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the switch.')}</table-col>
            </table-row>

            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the switch read-only.')}</table-col>
            </table-row>

            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the switch as required.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Value submitted when checked (default "on").')}</table-col>
            </table-row>

            <table-row>
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text label displayed next to the switch.')}</table-col>
            </table-row>

            <table-row>
              <table-col>onoff</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays "ON" and "OFF" labels.')}</table-col>
            </table-row>

            <table-row>
              <table-col>yesno</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays "YES" and "NO" labels.')}</table-col>
            </table-row>

            <table-row>
              <table-col>checkex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays check (✓) and cross (✖) symbols (default true).')}</table-col>
            </table-row>

            <table-row>
              <table-col>sunmoon</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays sun (☼) and moon (☽) symbols.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Rounds the switch track and knob.')}</table-col>
            </table-row>

            <table-row>
              <table-col>ridge</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds a ridged pattern ("|||") to the knob.')}</table-col>
            </table-row>

            <table-row>
              <table-col>smooth</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the knob smooth (empty content).')}</table-col>
            </table-row>

            <table-row>
              <table-col>blue</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies blue theme colors.')}</table-col>
            </table-row>

            <table-row>
              <table-col>orange</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies orange theme colors.')}</table-col>
            </table-row>

            <table-row>
              <table-col>green</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies green theme colors.')}</table-col>
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
              <table-col>{_('Callback with the updated checked state (true/false).')}</table-col>
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

          <!-- Basic Switch Input -->
          <a name="basicSwitch"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Switch Input')}</h2>
          <div class="mb-10">{_('A basic switch input with default check/cross symbols.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-switch 
                name="toggle" 
                label="Toggle Me" 
                change={(e) => console.log('Change event:', e.target.checked)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={4}>{`
            <field-switch 
              name="toggle" 
              label="Toggle Me" 
              change={(e) => console.log('Change event:', e.target.checked)}
            />
          `}</ide-code>

          <!-- Themed Switch Input -->
          <a name="themedSwitch"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Themed Switch Input')}</h2>
          <div class="mb-10">{_('A themed switch input with "ON/OFF" labels and green color scheme.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-switch 
                name="themeToggle" 
                label="Theme" 
                onoff 
                green 
                checked 
                change={(e) => console.log('Change event:', e.target.checked)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={4}>{`
            <field-switch 
              name="themeToggle" 
              label="Theme" 
              onoff 
              green 
              checked 
              change={(e) => console.log('Change event:', e.target.checked)}
            />
          `}</ide-code>

          <!-- Styled Switch Input -->
          <a name="styledSwitch"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Switch Input')}</h2>
          <div class="mb-10">{_('A styled switch with sun/moon symbols, rounded corners, and hover effects.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-switch 
                name="modeSwitch" 
                label="Mode" 
                sunmoon 
                rounded 
                blue 
                class="tx-lg tx-t-1 transition-300 hover:scale-105" 
                style="cursor: pointer;"
                change={(e) => console.log('Change event:', e.target.checked)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={4}>{`
            <field-switch 
              name="modeSwitch" 
              label="Mode" 
              sunmoon 
              rounded 
              blue 
              class="tx-lg tx-t-1 transition-300 hover:scale-105" 
              style="cursor: pointer;"
              change={(e) => console.log('Change event:', e.target.checked)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Yes/No Switch with Orange Theme -->
          <a name="yesNoSwitch"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Yes/No Switch with Orange Theme')}</h2>
          <div class="mb-10">{_('A switch with "YES/NO" labels, orange theme, and ridged knob.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-switch 
                name="yesNoSwitch" 
                label="Agree?" 
                yesno 
                orange 
                ridge 
                change={(e) => console.log('Change event:', e.target.checked)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={4}>{`
            <field-switch 
              name="yesNoSwitch" 
              label=" Agree?" 
              yesno 
              orange 
              ridge 
              change={(e) => console.log('Change event:', e.target.checked)}
            />
          `}</ide-code>

          <!-- Smooth Sun/Moon Switch (Disabled) -->
          <a name="disabledSwitch"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Smooth Sun/Moon Switch (Disabled)')}</h2>
          <div class="mb-10">{_('A disabled switch with sun/moon symbols and a smooth knob.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-switch 
                name="disabledSwitch" 
                label="Day/Night" 
                sunmoon 
                smooth 
                disabled 
                checked 
                class="tx-muted"
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={4}>{`
            <field-switch 
              name="disabledSwitch" 
              label="Day/Night" 
              sunmoon 
              smooth 
              disabled 
              checked 
              class="tx-muted"
            />
          `}</ide-code>

          <!-- Custom Labeled Switch -->
          <a name="customSwitch"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Labeled Switch')}</h2>
          <div class="mb-10">{_('A switch with custom label, check/cross symbols, custom value, and hover effects.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-switch 
                name="customSwitch" 
                label="Enable Feature" 
                value="enabled" 
                checkex 
                blue 
                checked 
                class="tx-lg tx-t-2 transition-300 hover:shadow-0-2-8-t-3" 
                style="cursor: pointer;"
                change={(e) => console.log('Change event:', e.target.checked)}
                update={(value) => console.log('Updated value:', value)}
              />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={4}>{`
            <field-switch 
              name="customSwitch" 
              label="Enable Feature" 
              value="enabled" 
              checkex 
              blue 
              checked 
              class="tx-lg tx-t-2 transition-300 hover:shadow-0-2-8-t-3" 
              style="cursor: pointer;"
              change={(e) => console.log('Change event:', e.target.checked)}
              update={(value) => console.log('Updated value:', value)}
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/slug.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Slug')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/taglist.html">
              {_('Taglist')}
              <element-icon name="chevron-right" theme="/blue" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>