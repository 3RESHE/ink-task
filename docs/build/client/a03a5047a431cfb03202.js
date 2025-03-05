var InkAPI = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../node_modules/@stackpress/ink/dist/dom/Node.js
  var require_Node = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Node.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node2 = class {
        constructor() {
          this._parent = null;
        }
        get parent() {
          return this._parent;
        }
        get parentElement() {
          return this._parent;
        }
        set parent(parent) {
          this._parent = parent;
        }
      };
      exports.default = Node2;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Comment.js
  var require_Comment = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Comment.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
      var Comment = class extends Node_1.default {
        get nodeName() {
          return this.name;
        }
        get nodeType() {
          return this.type;
        }
        constructor(value) {
          super();
          this.name = "#comment";
          this.type = 8;
          this.value = value;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            value: this.value
          };
        }
        toString() {
          return `<!--${this.value}-->`;
        }
      };
      exports.default = Comment;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Doctype.js
  var require_Doctype = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Doctype.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
      var Doctype = class extends Node_1.default {
        get nodeName() {
          return this.name;
        }
        get nodeType() {
          return this.type;
        }
        constructor(value) {
          super();
          this.name = "#doctype";
          this.type = 10;
          this.value = value;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            value: this.value
          };
        }
        toString() {
          return `<!DOCTYPE ${this.value}>`;
        }
      };
      exports.default = Doctype;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Element.js
  var require_Element = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Element.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
      var selfClosingTags = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ];
      var Element2 = class _Element extends Node_1.default {
        get attributes() {
          return Object.fromEntries(this._attributes);
        }
        get childList() {
          return Array.from(this.children);
        }
        get elements() {
          return this.nodes.filter((node) => node instanceof _Element);
        }
        get nodeName() {
          return this.name.toUpperCase();
        }
        get nodes() {
          const nodes = [this];
          this._flatten(Array.from(this.children), nodes);
          return nodes;
        }
        get nodeType() {
          return this.type;
        }
        get parent() {
          return this._parent;
        }
        set parent(parent) {
          this._parent = parent;
        }
        constructor(name, attributes = {}, children2 = []) {
          super();
          this.type = 1;
          this._parent = null;
          this.name = name;
          this._attributes = new Map(Object.entries(attributes));
          this.children = new Set(children2.filter(Boolean));
        }
        appendChild(child) {
          this.children.add(child);
          child.parent = this;
          return this;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            attributes: Object.fromEntries(this._attributes.entries()),
            children: Array.from(this.children).map((child) => child.export())
          };
        }
        getAttribute(name) {
          return this._attributes.get(name);
        }
        hasAttribute(name) {
          return this._attributes.has(name);
        }
        removeAttribute(name) {
          this._attributes.delete(name);
          return this;
        }
        removeChild(child) {
          this.children.delete(child);
          child.parent = null;
          return;
        }
        setAttribute(name, value) {
          this._attributes.set(name, value);
          return this;
        }
        toString() {
          const entries = Array.from(this._attributes.entries());
          const attributes = entries.length > 0 ? " " + entries.map(([key, value]) => {
            if (typeof value === "string" && !/["<>\n]/.test(value)) {
              return `${key}="${value}"`;
            } else if (typeof value === "boolean") {
              return value ? key : "";
            }
          }).join(" ") : "";
          if (selfClosingTags.includes(this.name)) {
            return `<${this.name}${attributes} />`;
          }
          const children2 = Array.from(this.children.values()).map((child) => child.toString()).join("");
          return `<${this.name}${attributes}>${children2}</${this.name}>`;
        }
        _flatten(markup, nodes) {
          markup.forEach((node) => {
            nodes.push(node);
            if (node instanceof _Element) {
              this._flatten(Array.from(node.children), nodes);
            }
          });
        }
      };
      exports.default = Element2;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Text.js
  var require_Text = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Text.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
      var Text = class extends Node_1.default {
        get nodeName() {
          return "#text";
        }
        get nodeType() {
          return this.type;
        }
        get value() {
          return this._escape ? this._value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : this._value;
        }
        constructor(value, escape = false) {
          super();
          this.name = "#text";
          this.type = 3;
          this._escape = escape;
          this._value = value;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            value: this.value
          };
        }
        toString() {
          return this.value;
        }
      };
      exports.default = Text;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Document.js
  var require_Document = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Document.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Comment_1 = __importDefault(require_Comment());
      var Doctype_1 = __importDefault(require_Doctype());
      var Element_1 = __importDefault(require_Element());
      var Text_1 = __importDefault(require_Text());
      var Document = class _Document {
        static createComment(value, parent) {
          const node = new Comment_1.default(value);
          if (parent) {
            node.parent = parent;
          }
          return node;
        }
        static createDoctype(value = "html", parent) {
          const node = new Doctype_1.default(value);
          if (parent) {
            node.parent = parent;
          }
          return node;
        }
        static createElement(name, attributes = {}, children2 = [], parent) {
          const element = new Element_1.default(name, attributes, children2);
          if (parent) {
            element.parent = parent;
          }
          return element;
        }
        static createText(value, escape = false, parent) {
          const node = new Text_1.default(value, escape);
          if (parent) {
            node.parent = parent;
          }
          return node;
        }
        static import(data2, parent) {
          return data2.map((node) => {
            const { value } = node;
            const { name, attributes, children: children2 } = node;
            switch (node.type) {
              case 1:
                const element = this.createElement(name, attributes, [], parent);
                _Document.import(children2, element).forEach((child) => element.appendChild(child));
                return element;
              case 3:
                return this.createText(value, true, parent);
              case 8:
                return this.createComment(value, parent);
              case 10:
                return this.createDoctype(value, parent);
            }
            return null;
          }).filter(Boolean);
        }
        static load(children2) {
          return new _Document(children2);
        }
        get childList() {
          return Array.from(this.children);
        }
        get elements() {
          return this.nodes.filter((node) => node instanceof Element_1.default);
        }
        get nodes() {
          return Array.from(this.children).map((child) => child instanceof Element_1.default ? child.nodes : [child]).flat();
        }
        constructor(children2) {
          this.children = new Set(children2.filter(Boolean));
        }
        export() {
          return this.childList.map((child) => child.export());
        }
        toString() {
          return Array.from(this.children).map((child) => child.toString()).join("");
        }
      };
      exports.default = Document;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/data.js
  var require_data = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TemplateData = void 0;
      var TemplateData = class {
        constructor() {
          if (!window.__TEMPLATE_DATA__) {
            window.__TEMPLATE_DATA__ = {};
          }
        }
        clear() {
          window.__TEMPLATE_DATA__ = {};
          return this;
        }
        delete(key) {
          if (this.has(key)) {
            delete window.__TEMPLATE_DATA__[key];
            return true;
          }
          return false;
        }
        entries() {
          return Object.entries(window.__TEMPLATE_DATA__);
        }
        has(key) {
          return key in window.__TEMPLATE_DATA__;
        }
        get(key) {
          return window.__TEMPLATE_DATA__[key];
        }
        keys() {
          return Object.keys(window.__TEMPLATE_DATA__);
        }
        set(key, value) {
          window.__TEMPLATE_DATA__[key] = value;
          return this;
        }
        values() {
          return Object.values(window.__TEMPLATE_DATA__);
        }
      };
      exports.TemplateData = TemplateData;
      var data2 = new TemplateData();
      exports.default = data2;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/Emitter.js
  var require_Emitter = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/Emitter.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.match = exports.ClientEmitter = exports.events = void 0;
      exports.bindAttribute = bindAttribute;
      exports.unbindAttribute = unbindAttribute;
      var Registry_1 = __importDefault(require_Registry());
      exports.events = [
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mousemove",
        "mouseover",
        "mouseout",
        "wheel",
        "keydown",
        "keypress",
        "keyup",
        "blur",
        "change",
        "contextmenu",
        "focus",
        "input",
        "submit",
        "invalid",
        "reset",
        "search",
        "select",
        "copy",
        "cut",
        "paste",
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop",
        "scroll",
        "durationchange",
        "ended",
        "error",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "seeked",
        "seeking",
        "stalled",
        "suspend",
        "timeupdate",
        "volumechange",
        "waiting",
        "animationstart",
        "animationend",
        "animationiteration",
        "transitionend",
        "toggle"
      ];
      var ClientEmitter = class extends EventTarget {
        emit(event, target) {
          this.dispatchEvent(new CustomEvent(event, { detail: target }));
          return this;
        }
        on(event, callback) {
          if (event === "ready") {
            if (document.readyState !== "loading") {
              const event2 = new CustomEvent("ready");
              setTimeout(() => callback(event2), 1);
              return this;
            }
          }
          this.addEventListener(event, callback);
          return this;
        }
        once(event, callback) {
          const unbinder = (e) => {
            this.unbind(event, unbinder);
            callback(e);
          };
          this.on(event, unbinder);
          return this;
        }
        unbind(event, callback) {
          this.removeEventListener(event, callback);
          return this;
        }
      };
      exports.ClientEmitter = ClientEmitter;
      var match = (element, attribute, bind = true) => {
        return Array.from(element.querySelectorAll("*")).filter((element2) => {
          const node = Registry_1.default.get(element2);
          const matched = node && node.hasAttribute(attribute) && (!bind || !node.hasEvent(attribute));
          if (matched) {
            node.addEvent(attribute);
          }
          return matched;
        }).map((element2) => Registry_1.default.get(element2));
      };
      exports.match = match;
      function bindAttribute(name, bind) {
        emitter2.on("mounted", (e) => {
          if (!e.detail)
            return;
          const element = e.detail;
          (0, exports.match)(element.shadowRoot || element, name).forEach(bind);
        });
      }
      function unbindAttribute(name, bind) {
        emitter2.on("unmounted", (e) => {
          if (!e.detail)
            return;
          const element = e.detail;
          (0, exports.match)(element.shadowRoot || element, name, false).forEach(bind);
        });
      }
      var emitter2 = new ClientEmitter();
      exports.default = (() => {
        document.onreadystatechange = () => {
          if (document.readyState !== "loading") {
            emitter2.emit("ready");
          }
        };
        bindAttribute("mount", (element) => {
          const callback = element.getAttribute("mount");
          if (typeof callback === "function") {
            const event = new CustomEvent("mount", {
              detail: {
                node: element,
                target: element.element
              }
            });
            callback(event);
          }
        });
        unbindAttribute("unmount", (element) => {
          const callback = element.getAttribute("unmount");
          if (typeof callback === "function") {
            const event = new CustomEvent("unmount", {
              detail: {
                node: element,
                target: element.element
              }
            });
            callback(event);
          }
        });
        bindAttribute("if", (element) => {
          const condition = element.getAttribute("if");
          if (condition === false || condition === "false") {
            element.element.remove();
          } else if (typeof condition === "function" && !condition()) {
            element.element.remove();
          }
        });
        exports.events.forEach((event) => {
          bindAttribute(event, (element) => {
            const callback = element.getAttribute(event);
            if (typeof callback === "function") {
              element.element.removeEventListener(event, callback);
              element.element.addEventListener(event, callback);
            }
          });
          unbindAttribute(event, (element) => {
            const callback = element.getAttribute(event);
            if (typeof callback === "function") {
              element.element.removeEventListener(event, callback);
            }
          });
        });
        return emitter2;
      })();
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/Element.js
  var require_Element2 = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/Element.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Emitter_1 = __importDefault(require_Emitter());
      var ClientElement = class {
        get attributes() {
          return Object.assign({}, this._attributes);
        }
        get element() {
          return this._element;
        }
        get events() {
          return this._events;
        }
        constructor(element, attributes) {
          this._events = /* @__PURE__ */ new Set();
          this._element = element;
          this._attributes = attributes;
        }
        addEvent(event) {
          this._events.add(event);
          return this;
        }
        camel() {
          return Object.fromEntries(Object.entries(this._attributes).map(([key, value]) => {
            if (key === "class") {
              return ["className", value];
            }
            const camel = key.replace(/-([a-z])/g, (_2, letter) => letter.toUpperCase()).replaceAll("-", "");
            return [camel, value];
          }));
        }
        getAttribute(key) {
          return this._attributes[key];
        }
        hasAttribute(key) {
          return key in this._attributes;
        }
        hasEvent(event) {
          return this._events.has(event);
        }
        removeAttribute(key, silent = false) {
          const current = this.getAttribute(key);
          if (typeof current === "undefined") {
            return this;
          }
          delete this._attributes[key];
          if (!silent) {
            Emitter_1.default.emit("attribute-remove", {
              element: this,
              key,
              previous: current
            });
          }
          return this;
        }
        setAttribute(key, value, silent = false) {
          if (typeof value === "undefined") {
            return this.removeAttribute(key, silent);
          }
          const current = this.getAttribute(key);
          if (current === value) {
            return this;
          }
          this._attributes[key] = value;
          if (!silent) {
            if (typeof current === "undefined") {
              Emitter_1.default.emit("attribute-create", { element: this, key, value });
            } else {
              Emitter_1.default.emit("attribute-update", {
                element: this,
                key,
                value,
                previous: current
              });
            }
          }
          return this;
        }
        setAttributes(attributes, silent = false) {
          for (const [key, value] of Object.entries(attributes)) {
            this.setAttribute(key, value, silent);
          }
          const names = Object.keys(attributes);
          for (const key of Object.keys(this._attributes)) {
            if (!names.includes(key)) {
              this.removeAttribute(key, silent);
            }
          }
          return this;
        }
        tree(attributes, name, value) {
          if (!attributes) {
            attributes = Object.assign({}, this._attributes);
          }
          if (name) {
            const path = name.split("-");
            if (path.length > 0) {
              const key = path.shift();
              if (path.length > 0) {
                if (!attributes[key])
                  attributes[key] = {};
                this.tree(attributes[key], path.join("-"), value);
              } else {
                attributes[key] = value;
              }
            }
            return attributes;
          }
          const branch = {};
          for (const [name2, value2] of Object.entries(attributes)) {
            this.tree(branch, name2, value2);
          }
          return branch;
        }
      };
      exports.default = ClientElement;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/client.js
  var require_client = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/client.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = () => window.InkAPI;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/Registry.js
  var require_Registry = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/Registry.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Element_1 = __importDefault(require_Element2());
      var client_1 = __importDefault(require_client());
      var decoder = document.createElement("textarea");
      var decode = (value) => {
        decoder.innerHTML = value;
        return decoder.value;
      };
      var ClientRegistry28 = class _ClientRegistry {
        static get elements() {
          return this._elements;
        }
        static createComponent(tagname, definition, attributes = {}, children2 = []) {
          var _a;
          const { registered } = definition;
          if (!registered && !((_a = (0, client_1.default)()) === null || _a === void 0 ? void 0 : _a.elements[tagname])) {
            return this.createVirtualComponent(tagname, definition, attributes, children2);
          }
          const name = registered || tagname;
          const component = document.createElement(name);
          customElements.whenDefined(name).then(() => {
            customElements.upgrade(component);
            if (!component.initiated) {
              component.connectedCallback();
            }
          });
          const element = _ClientRegistry.register(component, attributes);
          element.setAttributes(attributes, true);
          for (const [name2, value] of Object.entries(attributes)) {
            if (typeof value === "string") {
              component.setAttribute(name2, value);
            } else if (value === true) {
              component.setAttribute(name2, "");
            }
          }
          this._cleanChildren(children2).forEach((child) => component.appendChild(child));
          return element;
        }
        static createElement(name, attributes = {}, children2 = []) {
          const element = document.createElement(name);
          for (const [name2, value] of Object.entries(attributes)) {
            if (typeof value === "string") {
              element.setAttribute(name2, value);
            } else if (value === true) {
              element.setAttribute(name2, "");
            }
          }
          this._cleanChildren(children2).forEach((child) => element.appendChild(child));
          return this.register(element, attributes);
        }
        static createText(value, escape = true) {
          return document.createTextNode(decode(value));
        }
        static createVirtualComponent(tagname, definition, attributes = {}, children2 = []) {
          const component = document.createElement(tagname);
          component.definition = definition;
          Object.setPrototypeOf(component, definition.prototype);
          component.constructor = definition.constructor;
          component.constructor.id = definition.id;
          component.constructor.tagname = definition.tagname;
          component.constructor.classname = definition.classname;
          if (definition.observedAttributes) {
            component.constructor.observedAttributes = definition.observedAttributes;
          }
          component.register(attributes, children2);
          return component.element;
        }
        static cloneElement(node, andChildren = false) {
          var _a;
          const component = node;
          if (component.definition) {
            const children2 = component.originalChildren || [];
            return this.createComponent(component.nodeName.toLowerCase(), component.definition, component.props || {}, andChildren ? children2.map((element) => this.cloneElement(element, andChildren)) : []).element;
          } else if (node instanceof HTMLElement) {
            const children2 = Array.from(node.childNodes);
            return this.createElement(node.nodeName.toLowerCase(), this.has(node) ? (_a = this.get(node)) === null || _a === void 0 ? void 0 : _a.attributes : Object.fromEntries(Array.from(node.attributes).map((attribute) => [attribute.name, attribute.value])), andChildren ? children2.map((element) => this.cloneElement(element, andChildren)) : []).element;
          }
          return node.cloneNode(andChildren);
        }
        static filter(callback) {
          const elements2 = [];
          this._elements.forEach((ink, html) => {
            if (callback(ink, html)) {
              elements2.push(ink);
            }
          });
          return elements2;
        }
        static get(element) {
          return this._elements.get(element) || null;
        }
        static has(element) {
          return this._elements.has(element);
        }
        static map(callback) {
          const elements2 = [];
          this._elements.forEach((ink, html) => {
            elements2.push(callback(ink, html));
          });
          return elements2;
        }
        static register(element, attributes, andChildren = false) {
          if (this.has(element)) {
            return this.get(element);
          }
          if (!attributes) {
            Array.from(element.attributes).forEach((attribute) => {
              attributes = attributes || {};
              attributes[attribute.name] = attribute.value !== "" ? attribute.value : true;
            });
          }
          const node = new Element_1.default(element, attributes || {});
          this._elements.set(element, node);
          if (andChildren) {
            Array.from(element.children).forEach((child) => {
              if (child instanceof Element) {
                this.register(child, void 0, true);
              }
            });
          }
          return node;
        }
        static _cleanChildren(children2) {
          return Array.from(children2).filter((child) => typeof child !== "undefined").map((child) => typeof child === "string" ? this.createText(child) : child instanceof Element_1.default ? child.element : child);
        }
      };
      ClientRegistry28._elements = /* @__PURE__ */ new Map();
      exports.default = ClientRegistry28;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/Document.js
  var require_Document2 = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/Document.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Document_1 = __importDefault(require_Document());
      var data_1 = __importDefault(require_data());
      var Registry_1 = __importDefault(require_Registry());
      var ClientDocument2 = class {
        constructor() {
          const template = document.querySelector("script[data-template]");
          if (!template) {
            throw new Error("TEMPLATE_DATA not found");
          }
          try {
            window.__TEMPLATE_DATA__ = JSON.parse(template.innerText.trim());
            Object.entries(window.__TEMPLATE_DATA__).forEach(([key, value]) => {
              data_1.default.set(key, value);
            });
          } catch (error) {
            throw new Error("TEMPLATE_DATA is not a valid JSON");
          }
        }
        bindings() {
          data_1.default.set("current", "document");
          const markup = this.template();
          data_1.default.delete("current");
          const sequence = Document_1.default.load(markup).elements;
          const entries = Array.from(sequence).map((el, id) => [String(id), el.attributes]).filter((entry) => Object.keys(entry[1]).length);
          return Object.fromEntries(entries);
        }
        sync() {
          const bindings = this.bindings();
          const map = Array.from(document.querySelectorAll("*"));
          for (const element of map) {
            const attributes = Object.fromEntries(Array.from(element.attributes).map((attribute) => [
              attribute.nodeName,
              attribute.nodeValue && attribute.nodeValue.length > 0 ? attribute.nodeValue : true
            ]));
            const id = String(Registry_1.default.elements.size);
            if (bindings[id]) {
              Object.assign(attributes, bindings[id]);
            }
            Registry_1.default.register(element, attributes);
          }
          return bindings;
        }
        _toNodeList(value) {
          if (typeof value === "object" && typeof value.nodeType === "number") {
            return [value];
          }
          if (Array.isArray(value)) {
            if (value.every((item) => typeof item === "object" && typeof item.nodeType === "number")) {
              return value;
            }
          }
          return [Registry_1.default.createText(String(value))];
        }
      };
      exports.default = ClientDocument2;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/Component.js
  var require_Component = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/Component.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Element_1 = __importDefault(require_Element2());
      var Registry_1 = __importDefault(require_Registry());
      var Emitter_1 = __importDefault(require_Emitter());
      var data_1 = __importDefault(require_data());
      var ClientComponent27 = class _ClientComponent extends HTMLElement {
        static get registered() {
          return customElements.getName(this);
        }
        static register() {
          customElements.define(this.tagname, this);
        }
        get attr() {
          return Object.fromEntries(Array.from(this.attributes).map((attr) => [attr.name, attr.value]));
        }
        get definition() {
          return this._definition || this.constructor;
        }
        get element() {
          if (!Registry_1.default.has(this)) {
            throw new Error(`Component ${this.metadata.classname} not mapped.`);
          }
          return Registry_1.default.get(this);
        }
        get initiated() {
          return this._initiated;
        }
        get metadata() {
          const { id, classname, tagname, registered, observedAttributes: observed = [] } = this.definition;
          return {
            id,
            tagname,
            classname,
            registered,
            observed
          };
        }
        get originalChildren() {
          return this._children;
        }
        get props() {
          return this.getAttributes();
        }
        get propsCamel() {
          return this.element.camel();
        }
        get propsTree() {
          return this.element.tree();
        }
        get virtual() {
          return this._virtual;
        }
        set props(props) {
          this.setAttributes(props);
        }
        set definition(definition) {
          this._definition = definition;
        }
        set originalChildren(children2) {
          if (typeof this._children === "undefined") {
            this._children = this._cleanChildren(children2 || []);
          }
        }
        constructor() {
          super();
          this._children = void 0;
          this._definition = null;
          this._initiated = false;
          this._observer = null;
          this._rendering = false;
          this._template = null;
          this._virtual = false;
          if (!Registry_1.default.has(this)) {
            const { registered } = this.metadata;
            if (!registered) {
              throw new Error(`Component ${this.metadata.classname} not registered in customElements.`);
            }
            const attributes = Object.fromEntries(Array.from(this.attributes).map((attr) => [attr.name, attr.value !== "" ? attr.value : true]));
            Registry_1.default.register(this, attributes);
          }
        }
        adoptedCallback() {
          this.render();
          this.emit("adopt", this);
        }
        attributeChangedCallback(name, prev, next) {
          if (this._rendering) {
            return;
          }
          const action = prev === null ? "add" : next === null ? "remove" : "update";
          if (next === null && this.hasAttribute(name)) {
            this.element.removeAttribute(name);
          } else if (next === "") {
            this.element.setAttribute(name, true);
          } else {
            this.element.setAttribute(name, next);
          }
          this.emit("attributechange", { action, name, prev, value: next, target: this });
        }
        clone(andChildren = false) {
          return this.cloneElement(this, andChildren);
        }
        cloneElement(element, andChildren = false) {
          return Registry_1.default.cloneElement(element, andChildren);
        }
        connectedCallback() {
          this.wait();
          this.emit("connect", this);
        }
        createComponent(tagname, definition, attributes = {}, children2 = []) {
          return Registry_1.default.createComponent(tagname, definition, attributes, children2);
        }
        createElement(name, attributes = {}, children2 = []) {
          return Registry_1.default.createElement(name, attributes, children2);
        }
        disconnectedCallback() {
          this.emit("disconnect", this);
        }
        emit(event, detail) {
          this.dispatchEvent(new CustomEvent(event, { detail }));
          return this;
        }
        getAttribute(name) {
          return this.element.getAttribute(name);
        }
        getAttributes() {
          return Object.assign({}, this.element.attributes);
        }
        getChildren(type = true) {
          if (type === true) {
            return Array.from(this.childNodes);
          } else if (type === false) {
            return this._children;
          } else if (type === null && this.shadowRoot) {
            return Array.from(this.shadowRoot.childNodes);
          }
          return [];
        }
        getElement(element) {
          return Registry_1.default.get(element);
        }
        getParentComponent() {
          let parent = this.parentElement;
          while (parent) {
            if (parent instanceof _ClientComponent) {
              return parent;
            }
            parent = parent.parentElement;
          }
          return null;
        }
        hasAttribute(name) {
          return this.element.hasAttribute(name);
        }
        on(event, callback) {
          this.removeEventListener(event, callback);
          this.addEventListener(event, callback);
          return this;
        }
        once(event, callback) {
          const unbinder = (e) => {
            this.removeEventListener(event, callback);
            callback(e);
          };
          this.on(event, unbinder);
          return this;
        }
        register(attributes = {}, children2 = []) {
          if (Registry_1.default.has(this)) {
            const element = Registry_1.default.get(this);
            element.setAttributes(attributes);
          } else {
            Registry_1.default.register(this, attributes);
          }
          for (const [name, value] of Object.entries(attributes)) {
            if (typeof value === "string" || value === true) {
              super.setAttribute(name, value === "" || value === name || value === true ? true : value);
            }
          }
          this._children = this._cleanChildren(children2);
          this._children.forEach((child) => this.appendChild(child));
          this._virtual = true;
          this.connectedCallback();
        }
        removeAttribute(name) {
          const prev = this.getAttribute(name);
          if (this.hasAttribute(name)) {
            this.element.removeAttribute(name);
          }
          if (super.hasAttribute(name)) {
            super.removeAttribute(name);
          }
          if (this._virtual && this.metadata.observed.includes(name)) {
            this.attributeChangedCallback(name, prev, null);
          }
        }
        render() {
          const parent = this.getParentComponent();
          if (parent && !parent.initiated) {
            return;
          } else if (this._rendering) {
            return;
          }
          this._rendering = true;
          const prev = data_1.default.get("current");
          data_1.default.set("current", this);
          if (!this._template) {
            this._template = this.template();
          } else {
            Emitter_1.default.emit("unmounted", this);
          }
          const children2 = this._template().filter(Boolean);
          const styles = this.styles();
          const mode = styles.length === 0 ? "light" : "shadow";
          const { light, shadow } = this._getChildren(children2, mode);
          if (shadow.length === 0 && mode === "light") {
            this.textContent = "";
            light.forEach((child) => this.appendChild(child));
          } else {
            if (!this.shadowRoot) {
              this.attachShadow({ mode: "open", delegatesFocus: true });
            }
            const style = document.createElement("style");
            style.innerText = styles;
            const shadowRoot = this.shadowRoot;
            shadowRoot.textContent = "";
            shadowRoot.appendChild(style);
            shadow.forEach((child) => shadowRoot.appendChild(child));
            if (light.length) {
              this.textContent = "";
              light.forEach((child) => this.appendChild(child));
            }
          }
          if (prev) {
            data_1.default.set("current", prev);
          } else {
            data_1.default.delete("current");
          }
          this._initiated = true;
          this._rendering = false;
          Emitter_1.default.emit("mounted", this);
          return this.shadowRoot ? this.shadowRoot.innerHTML : this.innerHTML;
        }
        setAttribute(name, value) {
          const prev = this.getAttribute(name);
          if (value === "" || value === true) {
            this.element.setAttribute(name, true);
            super.setAttribute(name, "");
          } else if (value === false) {
            this.element.setAttribute(name, value);
            super.removeAttribute(name);
          } else if (typeof value === "string") {
            this.element.setAttribute(name, value);
            super.setAttribute(name, value);
          } else {
            this.element.setAttribute(name, value);
          }
          if (this._virtual && this.metadata.observed.includes(name) && typeof value === "string") {
            this.attributeChangedCallback(name, prev, value);
          }
        }
        setAttributes(attributes) {
          Object.entries(attributes).forEach(([key, value]) => this.setAttribute(key, value));
        }
        unbind(event, callback) {
          this.removeEventListener(event, callback);
          return this;
        }
        wait() {
          if (document.readyState !== "loading") {
            this._update();
          } else {
            const next = () => {
              this._update();
              Emitter_1.default.unbind("ready", next);
            };
            Emitter_1.default.on("ready", next);
          }
        }
        _cleanChildren(children2) {
          return Array.from(children2).filter((child) => typeof child !== "undefined").map((child) => typeof child === "string" ? Registry_1.default.createText(child) : child instanceof Element_1.default ? child.element : child);
        }
        _getChildren(children2, mode) {
          const anyNodes = this._getTemplateNodes(children2);
          const lightNodes = this._getTemplateNodes(children2, "light");
          const shadowNodes = this._getTemplateNodes(children2, "shadow");
          const defaultNodes = anyNodes.length > 0 ? anyNodes : children2;
          return {
            light: lightNodes.length > 0 ? lightNodes : mode === "light" ? defaultNodes : [],
            shadow: shadowNodes.length > 0 ? shadowNodes : mode === "shadow" ? defaultNodes : []
          };
        }
        _getTemplateNodes(children2, type) {
          const template = children2.find((child) => this._isTemplate(child, type));
          if (!template)
            return [];
          return Array.from(template.childNodes || []);
        }
        _isTemplate(child, type) {
          if (child.nodeName !== "TEMPLATE")
            return false;
          const template = child;
          if (!type)
            return !template.hasAttribute("type");
          return type === template.getAttribute("type");
        }
        _toNodeList(value) {
          if (value instanceof Node) {
            return [value];
          }
          if (Array.isArray(value)) {
            if (value.every((item) => item instanceof Node)) {
              return value;
            }
          }
          return [Registry_1.default.createText(String(value))];
        }
        _update() {
          if (typeof this._children === "undefined") {
            this._children = this._cleanChildren(Array.from(this.childNodes || []));
          }
          if (!this._initiated) {
            this.render();
          }
        }
      };
      exports.default = ClientComponent27;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/Field.js
  var require_Field = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/Field.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Component_1 = __importDefault(require_Component());
      var ClientField = class extends Component_1.default {
        get field() {
          return this._field;
        }
        constructor() {
          super();
          this._field = this.attachInternals();
        }
        formAssociatedCallback(form) {
          this.emit("formassociate", this);
        }
        formDisabledCallback(disabled) {
          this.emit("formdisable", this);
        }
        formResetCallback() {
          this.emit("formreset", this);
        }
      };
      ClientField.formAssociated = true;
      exports.default = ClientField;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/component.js
  var require_component = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/component.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = component;
      var data_1 = __importDefault(require_data());
      function component(component2 = null, nullable = false) {
        if (!component2) {
          component2 = data_1.default.get("current");
          if (!component2) {
            if (!nullable) {
              throw new Error("Not called within a Ink component");
            }
            return null;
          }
        }
        return component2;
      }
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/env.js
  var require_env = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/env.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var data_1 = __importDefault(require_data());
      function env2(name) {
        const env3 = data_1.default.get("env") || {};
        if (name) {
          return env3[name] || null;
        }
        return env3;
      }
      exports.default = env2;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/props.js
  var require_props = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/props.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = props;
      var component_1 = __importDefault(require_component());
      var data_1 = __importDefault(require_data());
      function props(pointer = null) {
        const component = (0, component_1.default)(pointer, true);
        if (typeof component === "string") {
          return data_1.default.get("props") || {};
        }
        return component ? component.props : {};
      }
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/classnames.js
  var require_classnames = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/classnames.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.classlist = classlist2;
      exports.default = classnames;
      var component_1 = __importDefault(require_component());
      var props_1 = __importDefault(require_props());
      function classlist2(pointer = null) {
        var _a;
        if (pointer === "body") {
          return document.body.classList;
        } else if (pointer === "head") {
          return document.head.classList;
        } else if (pointer === "document") {
          return (_a = document.body.parentElement) === null || _a === void 0 ? void 0 : _a.classList;
        }
        const component = (0, component_1.default)(pointer);
        return component === null || component === void 0 ? void 0 : component.classList;
      }
      function classnames(pointer = null) {
        return (0, props_1.default)(pointer)["class"] || "";
      }
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/children.js
  var require_children = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/children.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.innerHTML = innerHTML;
      exports.innerText = innerText;
      exports.default = children2;
      var component_1 = __importDefault(require_component());
      function innerHTML(pointer = null) {
        const inner = children2(pointer);
        const wrapper = document.createElement("template");
        wrapper.append(...inner.map((child) => child.cloneNode(true)));
        return wrapper.innerHTML;
      }
      function innerText(pointer = null) {
        const inner = children2(pointer);
        const wrapper = document.createElement("template");
        wrapper.append(...inner.map((child) => child.cloneNode(true)));
        return wrapper.innerText;
      }
      function children2(pointer = null) {
        const component = (0, component_1.default)(pointer, true);
        return typeof component !== "string" && component ? component.originalChildren || [] : [];
      }
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client/api/signal.js
  var require_signal = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client/api/signal.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SignalRegistry = void 0;
      exports.default = signal;
      var component_1 = __importDefault(require_component());
      var SignalRegistry = class _SignalRegistry {
        static observe(component, value) {
          const methods = {
            getter: () => property.raw,
            setter: (value2) => value2
          };
          const listeners = /* @__PURE__ */ new Set();
          const property = {
            raw: value,
            change(callback) {
              listeners.add(callback);
              return property;
            },
            getter(callback) {
              methods.getter = callback;
              return property;
            },
            setter(callback) {
              methods.setter = callback;
              return property;
            }
          };
          Object.defineProperty(property, "value", {
            get() {
              return methods.getter();
            },
            set(value2) {
              const formatted = methods.setter(value2);
              const rerender = _SignalRegistry.serialize(formatted) !== _SignalRegistry.serialize(property.raw);
              property.raw = formatted;
              if (rerender) {
                listeners.forEach((listener) => listener(formatted));
                component.render();
              }
            }
          });
          const observer = this._observers.get(component);
          if (!observer) {
            this._observers.set(component, {
              observed: 1,
              values: [property]
            });
          } else {
            observer.observed++;
            observer.values.push(property);
          }
          return property;
        }
        static observer(component) {
          return this._observers.get(component) || null;
        }
        static serialize(value) {
          return JSON.stringify(value);
        }
      };
      exports.SignalRegistry = SignalRegistry;
      SignalRegistry._observers = /* @__PURE__ */ new Map();
      function signal(value, pointer = null) {
        const component = (0, component_1.default)(pointer);
        if (!component.initiated) {
          return SignalRegistry.observe(component, value);
        }
        const observer = SignalRegistry.observer(component);
        if (!observer) {
          throw new Error("Signal state mismatch");
        }
        const values = observer.values;
        return values[observer.observed++ % observer.values.length];
      }
    }
  });

  // ../../node_modules/@stackpress/ink/dist/style/StyleMap.js
  var require_StyleMap = __commonJS({
    "../../node_modules/@stackpress/ink/dist/style/StyleMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stylemap = stylemap;
      function stylemap(styles = {}) {
        return new StyleMap(Object.entries(styles));
      }
      var StyleMap = class _StyleMap extends Map {
        add(property, values) {
          if (!this.has(property)) {
            this.set(property, []);
          }
          const styles = this.get(property);
          if (typeof values === "string" || typeof values === "number") {
            styles.push(values);
          } else if (Array.isArray(values)) {
            styles.push(...values);
          }
          return this;
        }
        clone() {
          const stylemap2 = new _StyleMap();
          for (const [key, values] of this.entries()) {
            stylemap2.set(key, values.slice());
          }
          return stylemap2;
        }
        replaceAll(search, replace) {
          for (const [key, values] of this.entries()) {
            this.set(key, values.map((value) => {
              if (typeof value === "string") {
                return value.replaceAll(search, replace);
              }
              return value;
            }));
          }
          return this;
        }
      };
      exports.default = StyleMap;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/style/StyleSet.js
  var require_StyleSet = __commonJS({
    "../../node_modules/@stackpress/ink/dist/style/StyleSet.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.styleset = styleset;
      var StyleMap_1 = __importDefault(require_StyleMap());
      function styleset(styles = {}) {
        return new StyleSet24(Object.entries(styles));
      }
      var StyleSet24 = class extends Map {
        add(selector, property, values) {
          if (!this.has(selector)) {
            this.set(selector, new StyleMap_1.default());
          }
          const styles = this.get(selector);
          if (typeof values === "string") {
            styles.set(property, values.split(" "));
          } else if (Array.isArray(values)) {
            styles.set(property, values);
          }
          return this;
        }
        map(selector, map) {
          this.set(selector, map);
          return this;
        }
        toString() {
          const styleset2 = [];
          for (const [selector, styles] of this.entries()) {
            const definitions = [];
            for (const [property, values] of styles.entries()) {
              if (property && (values === null || values === void 0 ? void 0 : values.length)) {
                definitions.push(`${property}:${values.join(" ")}`);
              }
            }
            if (definitions.length) {
              styleset2.push(`${selector}{${definitions.join(";")}}`);
            }
          }
          return styleset2.join("");
        }
      };
      exports.default = StyleSet24;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/style/StyleSheet.js
  var require_StyleSheet = __commonJS({
    "../../node_modules/@stackpress/ink/dist/style/StyleSheet.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.breakpoints = void 0;
      exports.stylesheet = stylesheet;
      var StyleSet_1 = __importDefault(require_StyleSet());
      exports.breakpoints = {
        all: 0,
        xl4: 1920,
        xl3: 1536,
        xl2: 1280,
        xl: 1024,
        lg: 992,
        md: 767,
        sm: 420,
        xs: 360
      };
      function stylesheet() {
        return new StyleSheet();
      }
      var StyleSheet = class extends Map {
        add(media, selector, property, values) {
          if (!this.has(media)) {
            this.set(media, new StyleSet_1.default());
          }
          const styleset = this.get(media);
          styleset.add(selector, property, values);
          return this;
        }
        map(media, selector, map) {
          if (!this.has(media)) {
            this.set(media, new StyleSet_1.default());
          }
          const styleset = this.get(media);
          styleset.map(selector, map);
          return this;
        }
        toString() {
          var _a;
          const stylesheet2 = [];
          for (const [media, breakpoint] of Object.entries(exports.breakpoints)) {
            const styles = (_a = this.get(media)) === null || _a === void 0 ? void 0 : _a.toString();
            if (!styles) {
              continue;
            }
            if (media === "all") {
              stylesheet2.push(styles);
              continue;
            }
            stylesheet2.push(`@media (max-width:${breakpoint}px){${styles}}`);
          }
          return stylesheet2.join("");
        }
      };
      exports.default = StyleSheet;
    }
  });

  // ../../node_modules/@stackpress/lib/dist/Status.js
  var require_Status = __commonJS({
    "../../node_modules/@stackpress/lib/dist/Status.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getStatus = getStatus;
      var statuses = {
        CONTINUE: { code: 100, status: "Continue" },
        PROCESSING: { code: 102, status: "Processing" },
        OK: { code: 200, status: "OK" },
        CREATED: { code: 201, status: "Created" },
        ACCEPTED: { code: 202, status: "Accepted" },
        EMPTY: { code: 204, status: "No Content" },
        RESET: { code: 205, status: "Reset Content" },
        PARTIAL: { code: 206, status: "Partial Content" },
        MOVED: { code: 301, status: "Moved Permanently" },
        FOUND: { code: 302, status: "Found" },
        REDIRECT: { code: 303, status: "See Other" },
        CACHE: { code: 304, status: "Not Modified" },
        TEMPORARY: { code: 307, status: "Temporary Redirect" },
        PERMANENT: { code: 308, status: "Permanent Redirect" },
        ABORT: { code: 309, status: "Aborted" },
        BAD_REQUEST: { code: 400, status: "Bad Request" },
        UNAUTHORIZED: { code: 401, status: "Unauthorized" },
        FORBIDDEN: { code: 403, status: "Forbidden" },
        NOT_FOUND: { code: 404, status: "Not Found" },
        BAD_METHOD: { code: 405, status: "Method Not Allowed" },
        NOT_ACCEPTABLE: { code: 406, status: "Not Acceptable" },
        REQUEST_TIMEOUT: { code: 408, status: "Request Timeout" },
        CONFLICT: { code: 409, status: "Conflict" },
        GONE: { code: 410, status: "Gone" },
        LENGTH_REQUIRED: { code: 411, status: "Length Required" },
        TOO_LARGE: { code: 413, status: "Payload Too Large" },
        TOO_LONG: { code: 414, status: "URI Too Long" },
        UNSUPPORTED_TYPE: { code: 415, status: "Unsupported Media Type" },
        BAD_RANGE: { code: 416, status: "Range Not Satisfiable" },
        BAD_EXPECTATION: { code: 417, status: "Expectation Failed" },
        MISDIRECTED: { code: 421, status: "Misdirected Request" },
        UNPROCESSABLE: { code: 422, status: "Unprocessable Content" },
        LOCKED: { code: 423, status: "Locked" },
        BAD_DEPENDENCY: { code: 424, status: "Failed Dependency" },
        UPGRADE_REQUIRED: { code: 426, status: "Upgrade Required" },
        BAD_PRECONDITION: { code: 428, status: "Precondition Required" },
        TOO_MANY: { code: 429, status: "Too Many Requests" },
        HEADER_TOO_LARGE: { code: 431, status: "Request Header Fields Too Large" },
        LEGAL_REASONS: { code: 451, status: "Unavailable For Legal Reasons" },
        ERROR: { code: 500, status: "Internal Server Error" },
        NOT_IMPLEMENTED: { code: 501, status: "Not Implemented" },
        BAD_GATEWAY: { code: 502, status: "Bad Gateway" },
        UNAVAILABLE: { code: 503, status: "Service Unavailable" },
        RESPONSE_TIMEOUT: { code: 504, status: "Gateway Timeout" },
        BAD_VERSION: { code: 505, status: "HTTP Version Not Supported" },
        INSUFFICIENT_STORAGE: { code: 507, status: "Insufficient Storage" },
        INFINITE_LOOP: { code: 508, status: "Loop Detected" },
        NETWORK_AUTHENTICATION_REQUIRED: { code: 511, status: "Network Authentication Required" }
      };
      exports.default = statuses;
      function getStatus(code) {
        return Object.values(statuses).find((status) => status.code === code);
      }
    }
  });

  // ../../node_modules/@stackpress/lib/dist/Exception.js
  var require_Exception = __commonJS({
    "../../node_modules/@stackpress/lib/dist/Exception.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Status_1 = require_Status();
      var Exception = class _Exception extends Error {
        static for(message, ...values) {
          values.forEach(function(value) {
            message = message.replace("%s", String(value));
          });
          return new this(message);
        }
        static forErrors(errors) {
          const exception = new this("Invalid Parameters");
          exception.withErrors(errors);
          return exception;
        }
        static require(condition, message, ...values) {
          if (!condition) {
            for (const value of values) {
              message = message.replace("%s", value);
            }
            throw new this(message);
          }
        }
        static try(callback) {
          return {
            catch: (catcher) => {
              try {
                return callback();
              } catch (error) {
                if (error instanceof _Exception) {
                  return catcher(error, error.type);
                } else if (error instanceof Error) {
                  const e = _Exception.upgrade(error);
                  return catcher(e, e.type);
                } else if (typeof error === "string") {
                  const e = _Exception.for(error);
                  return catcher(e, e.type);
                }
                return catcher(error, "unknown");
              }
            }
          };
        }
        static upgrade(error, code = 500) {
          if (error instanceof _Exception) {
            return error;
          }
          const exception = new this(error.message, code);
          exception.name = error.name;
          exception.stack = error.stack;
          return exception;
        }
        get code() {
          return this._code;
        }
        get end() {
          return this._end;
        }
        get errors() {
          return Object.assign({}, this._errors);
        }
        get start() {
          return this._start;
        }
        get type() {
          return this._type;
        }
        constructor(message, code = 500) {
          var _a;
          super(message);
          this._errors = {};
          this._start = 0;
          this._end = 0;
          this.name = this.constructor.name;
          this._type = this.constructor.name;
          this._code = code;
          this._status = ((_a = (0, Status_1.getStatus)(code)) === null || _a === void 0 ? void 0 : _a.status) || "Unknown";
        }
        toJSON() {
          return JSON.stringify(this.toResponse(), null, 2);
        }
        toResponse(start = 0, end = 0) {
          const json = {
            code: this._code,
            status: this._status,
            error: this.message,
            start: this._start,
            end: this._end,
            stack: this.trace(start, end)
          };
          if (Object.keys(this._errors).length > 0) {
            json.errors = this._errors;
          }
          return json;
        }
        trace(start = 0, end = 0) {
          if (typeof this.stack !== "string") {
            return [];
          }
          const trace = this.stack.split("\n").slice(start, end || this.stack.length).map((line) => line.trim()).map((trace2) => {
            if (!trace2.startsWith("at")) {
              return false;
            }
            let [_2, method, location] = trace2.split(" ");
            if (!location) {
              location = `(${method})`;
              method = "<none>";
            }
            const [file, line, char] = location.substring(1, location.length - 1).split(":");
            return {
              method,
              file,
              line: parseInt(line) || 0,
              char: parseInt(char) || 0
            };
          }).filter(Boolean);
          return trace;
        }
        withCode(code) {
          this._code = code;
          return this;
        }
        withErrors(errors) {
          this._errors = errors;
          return this;
        }
        withPosition(start, end) {
          this._start = start;
          this._end = end;
          return this;
        }
      };
      exports.default = Exception;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/Exception.js
  var require_Exception2 = __commonJS({
    "../../node_modules/@stackpress/ink/dist/Exception.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Exception_1 = __importDefault(require_Exception());
      var InkException = class extends Exception_1.default {
      };
      exports.default = InkException;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/client.js
  var require_client2 = __commonJS({
    "../../node_modules/@stackpress/ink/dist/client.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || /* @__PURE__ */ function() {
        var ownKeys = function(o) {
          ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar = [];
            for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
            return ar;
          };
          return ownKeys(o);
        };
        return function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
          }
          __setModuleDefault(result, mod);
          return result;
        };
      }();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StyleSheet = exports.StyleSet = exports.StyleMap = exports.stylesheet = exports.styleset = exports.stylemap = exports.breakpoints = exports.emitter = exports.signal = exports.innerHTML = exports.innerText = exports.children = exports.classnames = exports.classlist = exports.props = exports.env = exports.data = exports.client = exports.component = exports.SignalRegistry = exports.ClientException = exports.ClientEmitter = exports.ClientElement = exports.ClientRegistry = exports.ClientComponent = exports.ClientField = exports.TemplateData = exports.DOMNode = exports.DOMText = exports.DOMElement = exports.DOMDocument = exports.DOMDoctype = exports.DOMComment = void 0;
      var Comment_1 = __importDefault(require_Comment());
      exports.DOMComment = Comment_1.default;
      var Doctype_1 = __importDefault(require_Doctype());
      exports.DOMDoctype = Doctype_1.default;
      var Document_1 = __importDefault(require_Document());
      exports.DOMDocument = Document_1.default;
      var Element_1 = __importDefault(require_Element());
      exports.DOMElement = Element_1.default;
      var Text_1 = __importDefault(require_Text());
      exports.DOMText = Text_1.default;
      var Node_1 = __importDefault(require_Node());
      exports.DOMNode = Node_1.default;
      var Field_1 = __importDefault(require_Field());
      exports.ClientField = Field_1.default;
      var Component_1 = __importDefault(require_Component());
      exports.ClientComponent = Component_1.default;
      var Registry_1 = __importDefault(require_Registry());
      exports.ClientRegistry = Registry_1.default;
      var Element_2 = __importDefault(require_Element2());
      exports.ClientElement = Element_2.default;
      var Emitter_1 = __importStar(require_Emitter());
      exports.emitter = Emitter_1.default;
      Object.defineProperty(exports, "ClientEmitter", { enumerable: true, get: function() {
        return Emitter_1.ClientEmitter;
      } });
      var client_1 = __importDefault(require_client());
      exports.client = client_1.default;
      var component_1 = __importDefault(require_component());
      exports.component = component_1.default;
      var data_1 = __importStar(require_data());
      exports.data = data_1.default;
      Object.defineProperty(exports, "TemplateData", { enumerable: true, get: function() {
        return data_1.TemplateData;
      } });
      var env_1 = __importDefault(require_env());
      exports.env = env_1.default;
      var props_1 = __importDefault(require_props());
      exports.props = props_1.default;
      var classnames_1 = __importStar(require_classnames());
      exports.classnames = classnames_1.default;
      Object.defineProperty(exports, "classlist", { enumerable: true, get: function() {
        return classnames_1.classlist;
      } });
      var children_1 = __importStar(require_children());
      exports.children = children_1.default;
      Object.defineProperty(exports, "innerHTML", { enumerable: true, get: function() {
        return children_1.innerHTML;
      } });
      Object.defineProperty(exports, "innerText", { enumerable: true, get: function() {
        return children_1.innerText;
      } });
      var signal_1 = __importStar(require_signal());
      exports.signal = signal_1.default;
      Object.defineProperty(exports, "SignalRegistry", { enumerable: true, get: function() {
        return signal_1.SignalRegistry;
      } });
      var StyleMap_1 = __importStar(require_StyleMap());
      exports.StyleMap = StyleMap_1.default;
      Object.defineProperty(exports, "stylemap", { enumerable: true, get: function() {
        return StyleMap_1.stylemap;
      } });
      var StyleSet_1 = __importStar(require_StyleSet());
      exports.StyleSet = StyleSet_1.default;
      Object.defineProperty(exports, "styleset", { enumerable: true, get: function() {
        return StyleSet_1.styleset;
      } });
      var StyleSheet_1 = __importStar(require_StyleSheet());
      exports.StyleSheet = StyleSheet_1.default;
      Object.defineProperty(exports, "stylesheet", { enumerable: true, get: function() {
        return StyleSheet_1.stylesheet;
      } });
      Object.defineProperty(exports, "breakpoints", { enumerable: true, get: function() {
        return StyleSheet_1.breakpoints;
      } });
      var Exception_1 = __importDefault(require_Exception2());
      exports.ClientException = Exception_1.default;
    }
  });

  // ../../node_modules/@stackpress/ink/index.js
  var require_ink = __commonJS({
    "../../node_modules/@stackpress/ink/index.js"(exports, module) {
      module.exports = { ...require_client2() };
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/color.js
  var require_color = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/color.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = color;
      function color(props, styles, initial = false, selector = ":host", property = "color") {
        const { color: color2, white, black, info, warning, success, error, muted, primary, secondary, theme } = props;
        const style = color2 ? color2 : theme ? `var(--${theme})` : white ? "var(--white)" : black ? "var(--black)" : info ? "var(--info)" : warning ? "var(--warning)" : success ? "var(--success)" : error ? "var(--error)" : muted ? "var(--muted)" : primary ? "var(--primary)" : secondary ? "var(--secondary)" : initial;
        if (style) {
          styles.add(selector, property, style);
        }
        return color2 ? "color" : white ? "white" : black ? "black" : info ? "info" : warning ? "warning" : success ? "success" : error ? "error" : muted ? "muted" : primary ? "primary" : secondary ? "secondary" : "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/curve.js
  var require_curve = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/curve.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = curve;
      function curve(props, styles, initial = false, selector = ":host") {
        const { curve: curve2, curved, rounded, pill } = props;
        const style = curve2 ? `${curve2}px` : curved ? "4px" : rounded ? "12px" : pill ? "10000px" : initial;
        if (style) {
          styles.add(selector, "border-radius", style);
          styles.add(selector, "overflow", "hidden");
        }
        return curve2 ? "curve" : curved ? "curved" : rounded ? "rounded" : pill ? "pill" : "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/display.js
  var require_display = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/display.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = display;
      function display(props, styles, initial = false, selector = ":host") {
        const { flex, none, inline, block, "inline-block": iblock, "inline-flex": iflex } = props;
        const style = flex ? "flex" : none ? "none" : block ? "block" : inline ? "inline" : iflex ? "inline-flex" : iblock ? "inline-block" : initial;
        if (style) {
          styles.add(selector, "display", style);
        }
        return style || "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/padding.js
  var require_padding = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/padding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = padding;
      function padding(props, styles, selector = ":host") {
        const { padding: padding2, "padding-x": paddingX, "padding-y": paddingY } = props;
        let set = false;
        if (!isNaN(parseInt(padding2))) {
          styles.add(selector, "padding", `${padding2}px`);
          set = true;
        }
        if (!isNaN(parseInt(paddingX))) {
          styles.add(selector, "padding-left", `${paddingX}px`);
          styles.add(selector, "padding-right", `${paddingX}px`);
          set = true;
        }
        if (!isNaN(parseInt(paddingY))) {
          styles.add(selector, "padding-top", `${paddingY}px`);
          styles.add(selector, "padding-bottom", `${paddingY}px`);
          set = true;
        }
        return set;
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/events.js
  var require_events = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/events.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.removeEvents = removeEvents2;
      var Emitter_1 = require_Emitter();
      function removeEvents2(props) {
        const attributes = Object.assign({}, props);
        for (const key in attributes) {
          if (Emitter_1.events.includes(key)) {
            delete attributes[key];
          }
        }
        return attributes;
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/align.js
  var require_align = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/align.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = align;
      function align(props, styles, initial = false, selector = ":host") {
        const { align: align2 } = props;
        if (align2) {
          styles.add(selector, "text-align", align2);
        } else if (initial) {
          styles.add(selector, "text-align", initial);
        }
        return align2 || "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/size.js
  var require_size = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/size.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = size;
      function size(props, styles, initial = false, selector = ":host", property = "font-size") {
        const { size: size2, xs, sm, md, lg, xl, xl2, xl3, xl4, xl5 } = props;
        const style = size2 ? `${size2}px` : xs ? "8px" : sm ? "12px" : md ? "16px" : lg ? "20px" : xl ? "24px" : xl2 ? "28px" : xl3 ? "32px" : xl4 ? "36px" : xl5 ? "40px" : initial;
        if (style) {
          styles.add(selector, property, style);
        }
        return size2 ? "size" : xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : xl2 ? "xl2" : xl3 ? "xl3" : xl4 ? "xl4" : xl5 ? "xl5" : "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/input.js
  var require_input = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/input.js"(exports) {
      "use strict";
      var __rest = exports && exports.__rest || function(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getProps = getProps3;
      exports.setDefaultStyles = setDefaultStyles3;
      exports.getHandlers = getHandlers3;
      var align_1 = __importDefault(require_align());
      var color_1 = __importDefault(require_color());
      var display_1 = __importDefault(require_display());
      var padding_1 = __importDefault(require_padding());
      var size_1 = __importDefault(require_size());
      function getProps3(host) {
        const _a = host.props, { change, update, flex, none, inline, block, "inline-block": iblock, "inline-flex": iflex, padding, "padding-x": paddingX, "padding-y": paddingY, color, white, black, info, warning, success, error, muted, primary, secondary, theme, size, xs, sm, md, lg, xl, xl2, xl3, xl4, xl5, align, style, "class": _2 } = _a, attributes = __rest(_a, ["change", "update", "flex", "none", "inline", "block", "inline-block", "inline-flex", "padding", "padding-x", "padding-y", "color", "white", "black", "info", "warning", "success", "error", "muted", "primary", "secondary", "theme", "size", "xs", "sm", "md", "lg", "xl", "xl2", "xl3", "xl4", "xl5", "align", "style", "class"]);
        const { background, border } = host.propsTree;
        return {
          change,
          update,
          flex,
          none,
          inline,
          block,
          "inline-block": iblock,
          "inline-flex": iflex,
          padding,
          "padding-x": paddingX,
          "padding-y": paddingY,
          color,
          white,
          black,
          info,
          warning,
          success,
          error,
          muted,
          primary,
          secondary,
          theme,
          size,
          xs,
          sm,
          md,
          lg,
          xl,
          xl2,
          xl3,
          xl4,
          xl5,
          background,
          border,
          align,
          attributes
        };
      }
      function setDefaultStyles3(props, styles) {
        const { background, border, error } = props;
        (0, display_1.default)(props, styles, "inline-block", ":host");
        if (background) {
          (0, color_1.default)(background, styles, "var(--white)", ":host", "background-color");
        } else {
          styles.add(":host", "background-color", "var(--white)");
        }
        styles.add(":host", "border-width", "1px");
        styles.add(":host", "border-style", "solid");
        if (error) {
          styles.add(":host", "border-color", "var(--error)");
        } else if (border) {
          (0, color_1.default)(border, styles, "var(--black)", ":host", "border-color");
        } else {
          styles.add(":host", "border-color", "var(--black)");
        }
        styles.add("::slotted(*)", "background", "transparent");
        styles.add("::slotted(*)", "border", "0");
        styles.add("::slotted(*)", "box-sizing", "border-box");
        styles.add("::slotted(*)", "font-family", "inherit");
        styles.add("::slotted(*)", "display", "block");
        styles.add("::slotted(*)", "height", "100%");
        styles.add("::slotted(*:focus)", "outline", "none");
        styles.add("::slotted(*)", "width", "100%");
        styles.add("::host([error]) ::slotted(*)", "color", "var(--error)");
        styles.add("::host([error]) ::slotted(*)", "border-color", "var(--error)");
        (0, align_1.default)(props, styles, "left", "::slotted(*)");
        (0, size_1.default)(props, styles, "inherit", "::slotted(*)", "font-size");
        (0, color_1.default)(props, styles, "var(--black)", "::slotted(*)", "color");
        const padding = (0, padding_1.default)(props, styles, "::slotted(*)");
        if (!padding) {
          styles.add("::slotted(*)", "padding", "7px");
        }
      }
      function getHandlers3(host, change, update) {
        const handlers = {
          change(e) {
            change && change(e);
            update && update(e.target.value);
          },
          attribute(e) {
            const { action, name, value, target } = e.detail;
            const input = target.querySelector("input");
            switch (action) {
              case "add":
              case "update":
                input === null || input === void 0 ? void 0 : input.setAttribute(name, value);
                break;
              case "remove":
                input === null || input === void 0 ? void 0 : input.removeAttribute(name);
                break;
            }
          }
        };
        host.on("attributechange", handlers.attribute);
        return handlers;
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/bold.js
  var require_bold = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/bold.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = bold;
      function bold(props, styles, selector = ":host") {
        const { bold: bold2 } = props;
        if (bold2) {
          styles.add(selector, "font-weight", "bold");
        }
        return bold2;
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/underline.js
  var require_underline = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/underline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = underline;
      function underline(props, styles, selector = ":host") {
        const { underline: underline2 } = props;
        if (underline2) {
          styles.add(selector, "text-decoration", "underline");
        } else {
          styles.add(selector, "text-decoration", "none");
        }
        return underline2;
      }
    }
  });

  // ink-document-client-resolver:C:\Users\anetu\dev\ink-task\packages\ink-web\src\pages\ui\index.ink
  var ui_exports = {};
  __export(ui_exports, {
    BUILD_ID: () => BUILD_ID,
    ClientRegistry: () => import_Registry27.default,
    TemplateDocument: () => TemplateDocument,
    components: () => components,
    data: () => import_data.default,
    elements: () => elements,
    emitter: () => import_Emitter.default
  });
  var import_Document = __toESM(require_Document());
  var import_Document2 = __toESM(require_Document2());
  var import_Registry27 = __toESM(require_Registry());
  var import_Emitter = __toESM(require_Emitter());
  var import_data = __toESM(require_data());

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\packages\ink-web\src\components\api\docs.ink
  var import_Registry = __toESM(require_Registry());
  var import_Component = __toESM(require_Component());
  var import_ink = __toESM(require_ink());
  var Docs_0ab1bce486b32e7cdafc = class extends import_Component.default {
    static id = "0ab1bce486b32e7cdafc";
    static tagname = "docs";
    static classname = "Docs_0ab1bce486b32e7cdafc";
    styles() {
      return ``;
    }
    template() {
      (0, import_ink.classlist)().add(
        "block",
        "w-full",
        "h-full",
        "scroll-y-auto",
        "scroll-x-hidden"
      );
      return () => [
        import_Registry.default.createText(`
`, false),
        import_Registry.default.createElement("article", { "class": `block p-10 tx-t-1` }, [
          ...this._toNodeList((0, import_ink.children)())
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\packages\ink-web\src\components\i18n\translate.ink
  var import_Registry2 = __toESM(require_Registry());
  var import_Component2 = __toESM(require_Component());

  // src/components/i18n/index.ts
  var _ = function(phrase, ...variables) {
    let translation = translate(phrase);
    for (let i = 0; i < variables.length; i++) {
      translation = translation.replace("%s", String(variables[i]));
    }
    return translation;
  };
  var translate = function(phrase) {
    return phrase;
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\packages\ink-web\src\components\i18n\translate.ink
  var Translate_794a00a5e900fca28310 = class extends import_Component2.default {
    static id = "794a00a5e900fca28310";
    static tagname = "translate";
    static classname = "Translate_794a00a5e900fca28310";
    styles() {
      return ``;
    }
    template() {
      const { trim = false, p = false, li = false, div = false } = this.props;
      const childlist = this.originalChildren;
      const phrase = [];
      const variables = [];
      for (const child of childlist) {
        if (typeof child === "string") {
          phrase.push(child);
        } else if (child instanceof Node && child.textContent) {
          phrase.push(child.textContent);
        } else {
          phrase.push("%s");
          variables.push(child);
        }
      }
      let words = phrase.join("");
      if (trim) {
        words = words.replace(/\s+/, " ").trim();
      }
      const chunks = translate(words).split("%s");
      const translations = [];
      for (let i = 0; i < chunks.length; i++) {
        translations.push(document.createTextNode(chunks[i]));
        if (variables[i]) {
          translations.push(variables[i]);
        }
      }
      return () => [
        import_Registry2.default.createText(`
    `, false),
        ...!!p ? [
          import_Registry2.default.createText(`
      `, false),
          import_Registry2.default.createElement("p", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_Registry2.default.createText(`
    `, false)
        ] : !!li ? [
          ,
          import_Registry2.default.createText(`
      `, false),
          import_Registry2.default.createElement("li", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_Registry2.default.createText(`
    `, false)
        ] : !!div ? [
          ,
          import_Registry2.default.createText(`
      `, false),
          import_Registry2.default.createElement("div", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_Registry2.default.createText(`
    `, false)
        ] : true ? [
          ,
          import_Registry2.default.createText(`
      `, false),
          ...this._toNodeList(translations),
          import_Registry2.default.createText(`
    `, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\panel.ink
  var import_Registry3 = __toESM(require_Registry());
  var import_Component3 = __toESM(require_Component());
  var Panel_c4c96a14064fc0c4d224 = class extends import_Component3.default {
    static id = "c4c96a14064fc0c4d224";
    static tagname = "panel";
    static classname = "Panel_c4c96a14064fc0c4d224";
    styles() {
      return ``;
    }
    template() {
      const panels = this.originalChildren;
      const section = {
        main: panels.find((panel) => panel.nodeName === "MAIN"),
        head: panels.find((panel) => panel.nodeName === "HEADER"),
        foot: panels.find((panel) => panel.nodeName === "FOOTER"),
        left: panels.find((panel) => panel.nodeName === "ASIDE" && panel.hasAttribute("left")),
        right: panels.find((panel) => panel.nodeName === "ASIDE" && panel.hasAttribute("right"))
      };
      const show = { left: false, right: false };
      this.toggle = (panel) => {
        show[panel] = !show[panel];
        setClassNames.all();
      };
      const setClassNames = {
        all() {
          section.main && this.main();
          section.head && this.head();
          section.foot && this.foot();
          section.left && this.left();
          section.right && this.right();
        },
        head() {
          const { classList } = section.head;
          classList.add("absolute", "top-0", "right-0", "h-60", "transition-500");
          if (section.left) {
            classList.remove("left-0");
            classList.add("left-226");
          } else {
            classList.remove("left-226");
            classList.add("left-0");
          }
          if (show.left) {
            classList.remove("md-left-0");
            classList.add("md-left-226");
          } else {
            classList.remove("md-left-226");
            classList.add("md-left-0");
          }
        },
        foot() {
          const { classList } = section.foot;
          classList.add("absolute", "bottom-0", "right-0", "h-60", "transition-500");
          if (section.left) {
            classList.remove("left-0");
            classList.add("left-226");
          } else {
            classList.remove("left-226");
            classList.add("left-0");
          }
          if (show.left) {
            classList.remove("md-left-0");
            classList.add("md-left-226");
          } else {
            classList.remove("md-left-226");
            classList.add("md-left-0");
          }
        },
        left() {
          const { classList } = section.left;
          classList.add("w-226", "absolute", "bottom-0", "left-0", "top-0", "transition-500");
          if (show.left) {
            classList.remove("md-left--226");
            classList.add("md-left-0");
          } else {
            classList.remove("md-left-0");
            classList.add("md-left--226");
          }
        },
        right() {
          const { classList } = section.right;
          classList.add("w-200", "absolute", "right-0", "transition-500");
          if (section.foot) {
            classList.remove("bottom-0");
            classList.add("bottom-60");
          } else {
            classList.remove("bottom-60");
            classList.add("bottom-0");
          }
          if (section.head) {
            classList.remove("top-0");
            classList.add("top-60");
          } else {
            classList.remove("top-60");
            classList.add("top-0");
          }
          if (show.right) {
            classList.remove("lg-right--200");
            classList.add("lg-right-0");
          } else {
            classList.remove("lg-right-0");
            classList.add("lg-right--200");
          }
        },
        main() {
          const { classList } = section.main;
          classList.add("absolute", "transition-500");
          if (section.head) {
            classList.remove("top-0");
            classList.add("top-60");
          } else {
            classList.remove("top-60");
            classList.add("top-0");
          }
          if (section.foot) {
            classList.remove("bottom-0");
            classList.add("bottom-60");
          } else {
            classList.remove("bottom-60");
            classList.add("bottom-0");
          }
          if (section.left) {
            classList.remove("left-0");
            classList.add("left-226");
          } else {
            classList.remove("left-226");
            classList.add("left-0");
          }
          if (section.right) {
            classList.remove("right-0");
            classList.add("right-200");
          } else {
            classList.remove("right-200");
            classList.add("right-0");
          }
          if (show.left) {
            classList.remove("md-left-0");
            classList.add("md-left-226");
          } else {
            classList.remove("md-left-226");
            classList.add("md-left-0");
          }
          if (show.right) {
            classList.remove("lg-right-0");
            classList.add("lg-right-200");
          } else {
            classList.remove("lg-right-200");
            classList.add("lg-right-0");
          }
        }
      };
      setClassNames.all();
      this.classList.add("block", "relative", "w-full", "vh", "scroll-hidden");
      return () => [
        import_Registry3.default.createText(`
`, false),
        ...this._toNodeList(panels)
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table.ink
  var import_Component9 = __toESM(require_Component());

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\table.ink
  var import_Registry4 = __toESM(require_Registry());
  var import_Component4 = __toESM(require_Component());
  var import_StyleSet = __toESM(require_StyleSet());
  var Table_cb9231b6c52140a254d4 = class extends import_Component4.default {
    static id = "cb9231b6c52140a254d4";
    static tagname = "table";
    static classname = "Table_cb9231b6c52140a254d4";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table");
      styles.add(":host", "width", "100%");
      return () => [
        import_Registry4.default.createText(`
`, false),
        import_Registry4.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table.ink
  var import_Registry9 = __toESM(require_Registry());
  var import_StyleSet6 = __toESM(require_StyleSet());

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\thead.ink
  var import_Registry6 = __toESM(require_Registry());
  var import_Component6 = __toESM(require_Component());

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\row.ink
  var import_Registry5 = __toESM(require_Registry());
  var import_Component5 = __toESM(require_Component());
  var import_StyleSet2 = __toESM(require_StyleSet());
  var Row_0b3723ad0a2356b54f11 = class extends import_Component5.default {
    static id = "0b3723ad0a2356b54f11";
    static tagname = "row";
    static classname = "Row_0b3723ad0a2356b54f11";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet2.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-row");
      return () => [
        import_Registry5.default.createText(`
`, false),
        import_Registry5.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\thead.ink
  var import_StyleSet3 = __toESM(require_StyleSet());
  var Thead_afbcee18613ce58fb77c = class extends import_Component6.default {
    static id = "afbcee18613ce58fb77c";
    static tagname = "thead";
    static classname = "Thead_afbcee18613ce58fb77c";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet3.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-header-group");
      return () => [
        import_Registry6.default.createText(`
`, false),
        import_Registry6.default.createComponent("table-row", Row_0b3723ad0a2356b54f11, {}, [
          import_Registry6.default.createElement("slot", {}, []).element
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\tbody.ink
  var import_Registry7 = __toESM(require_Registry());
  var import_Component7 = __toESM(require_Component());
  var import_StyleSet4 = __toESM(require_StyleSet());
  var Tbody_95f498c1427be6bf7334 = class extends import_Component7.default {
    static id = "95f498c1427be6bf7334";
    static tagname = "tbody";
    static classname = "Tbody_95f498c1427be6bf7334";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet4.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-row-group");
      return () => [
        import_Registry7.default.createText(`
`, false),
        import_Registry7.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\tfoot.ink
  var import_Registry8 = __toESM(require_Registry());
  var import_Component8 = __toESM(require_Component());
  var import_StyleSet5 = __toESM(require_StyleSet());
  var Tfoot_874bedd042c5f2db7353 = class extends import_Component8.default {
    static id = "874bedd042c5f2db7353";
    static tagname = "tfoot";
    static classname = "Tfoot_874bedd042c5f2db7353";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet5.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-footer-group");
      return () => [
        import_Registry8.default.createText(`
`, false),
        import_Registry8.default.createComponent("table-row", Row_0b3723ad0a2356b54f11, {}, [
          import_Registry8.default.createElement("slot", {}, []).element
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table.ink
  var Table_02bc3cbacda5727a0af3 = class extends import_Component9.default {
    static id = "02bc3cbacda5727a0af3";
    static tagname = "table";
    static classname = "Table_02bc3cbacda5727a0af3";
    styles() {
      return ``;
    }
    template() {
      const {
        //sticky props
        top,
        bottom,
        left,
        right,
        //section classes
        head,
        body,
        odd,
        even,
        foot
      } = this.props;
      const sticky = top || bottom || left || right;
      const headList = typeof head === "string" ? head.split(" ").filter(Boolean) : [];
      const footList = typeof foot === "string" ? foot.split(" ").filter(Boolean) : [];
      const bodyList = typeof body === "string" ? body.split(" ").filter(Boolean) : [];
      const oddList = typeof odd === "string" ? odd.split(" ").filter(Boolean) : [];
      const evenList = typeof even === "string" ? even.split(" ").filter(Boolean) : [];
      const styles = new import_StyleSet6.default();
      this.styles = () => styles.toString();
      styles.add(":host", "width", "100%");
      if (sticky) {
        styles.add(":host", "display", "block");
        styles.add(":host", "position", "relative");
        styles.add(":host", "overflow", "auto");
        styles.add(":host", "height", "100%");
      } else {
        styles.add(":host", "display", "table");
      }
      const rows = [];
      const headers = [];
      const footers = [];
      const children2 = this.originalChildren;
      for (const [i, child] of children2.entries()) {
        if (child.nodeName.includes("HEAD")) {
          headers.push(child);
        } else if (child.nodeName.includes("FOOT")) {
          footers.push(child);
        } else if (child.nodeName.includes("ROW")) {
          rows.push(child);
        }
      }
      for (const [i, header] of headers.entries()) {
        header.setAttribute("head", "");
        if (headList.length > 0) {
          header.classList.add(...headList);
        }
        if (top) {
          header.setAttribute("top", "");
        }
        if (left && i === 0) {
          header.setAttribute("left", "");
        }
        if (right && i === headers.length - 1) {
          header.setAttribute("right", "");
        }
      }
      for (const [i, footer] of footers.entries()) {
        footer.setAttribute("foot", "");
        if (footList.length > 0) {
          footer.classList.add(...footList);
        }
        if (bottom) {
          footer.setAttribute("bottom", "");
        }
        if (left && i === 0) {
          footer.setAttribute("left", "");
        }
        if (right && i === footers.length - 1) {
          footer.setAttribute("right", "");
        }
      }
      for (const [i, row] of rows.entries()) {
        row.setAttribute("row", "");
        Array.from(row.children || []).forEach((cell, j, cells) => {
          bodyList.length > 0 && cell?.classList?.add(...bodyList);
          oddList.length > 0 && i % 2 === 0 && cell?.classList?.add(...oddList);
          evenList.length > 0 && i % 2 === 1 && cell.classList?.add(...evenList);
          if (left && j === 0) {
            cell.setAttribute("left", "");
          }
          if (right && j === cells.length - 1) {
            cell.setAttribute("right", "");
          }
        });
      }
      this.innerText = "";
      headers.length && this.appendChild(
        import_Registry9.default.createComponent(
          "table-thead",
          Thead_afbcee18613ce58fb77c,
          {},
          headers
        ).element
      );
      rows.length && this.appendChild(
        import_Registry9.default.createComponent(
          "table-tbody",
          Tbody_95f498c1427be6bf7334,
          {},
          rows
        ).element
      );
      footers.length && this.appendChild(
        import_Registry9.default.createComponent(
          "table-tfoot",
          Tfoot_874bedd042c5f2db7353,
          {},
          footers
        ).element
      );
      return () => [
        import_Registry9.default.createText(`
`, false),
        ...!!sticky ? [
          import_Registry9.default.createText(`
  `, false),
          import_Registry9.default.createComponent("table-wrapper", Table_cb9231b6c52140a254d4, {}, [
            import_Registry9.default.createText(`
    `, false),
            import_Registry9.default.createElement("slot", {}, []).element,
            import_Registry9.default.createText(`
  `, false)
          ]).element,
          import_Registry9.default.createText(`
`, false)
        ] : true ? [
          ,
          import_Registry9.default.createText(`
  `, false),
          import_Registry9.default.createElement("slot", {}, []).element,
          import_Registry9.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\head.ink
  var import_Registry10 = __toESM(require_Registry());
  var import_Component10 = __toESM(require_Component());
  var import_StyleSet7 = __toESM(require_StyleSet());
  var Head_d8755504d9458a2c21da = class extends import_Component10.default {
    static id = "d8755504d9458a2c21da";
    static tagname = "head";
    static classname = "Head_d8755504d9458a2c21da";
    styles() {
      return ``;
    }
    template() {
      const {
        //wrapping
        nowrap,
        wrap1,
        wrap2,
        wrap3,
        wrap4,
        wrap5,
        //sticky
        top,
        left,
        right
      } = this.propsCamel;
      const styles = new import_StyleSet7.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-cell");
      styles.add(":host([top])", "position", "sticky");
      styles.add(":host([top])", "z-index", "1");
      styles.add(":host([left])", "position", "sticky");
      styles.add(":host([left])", "z-index", "2");
      styles.add(":host([right])", "position", "sticky");
      styles.add(":host([right])", "z-index", "2");
      styles.add(":host([top][left])", "z-index", "3");
      styles.add(":host([top][right])", "z-index", "3");
      if (typeof top === "string" || typeof top === "number") {
        styles.add(":host([top])", "top", top);
      } else {
        styles.add(":host([top])", "top", "0");
      }
      if (typeof left === "string" || typeof left === "number") {
        styles.add(":host([left])", "left", left);
      } else {
        styles.add(":host([left])", "left", "0");
      }
      if (typeof right === "string" || typeof right === "number") {
        styles.add(":host([right])", "right", right);
      } else {
        styles.add(":host([right])", "right", "0");
      }
      if (nowrap) {
        styles.add(":host", "white-space", "nowrap");
      }
      if (wrap1) {
        styles.add(".wrap", "width", "100px");
      } else if (wrap2) {
        styles.add(".wrap", "width", "200px");
      } else if (wrap3) {
        styles.add(".wrap", "width", "300px");
      } else if (wrap4) {
        styles.add(".wrap", "width", "400px");
      } else if (wrap5) {
        styles.add(".wrap", "width", "500px");
      }
      return () => [
        import_Registry10.default.createText(`
`, false),
        import_Registry10.default.createElement("slot", {}, []).element,
        import_Registry10.default.createText(`
`, false),
        ...!!(wrap1 || wrap2 || wrap3 || wrap4 || wrap5) ? [
          import_Registry10.default.createText(`
  `, false),
          import_Registry10.default.createElement("div", { "class": `wrap` }, []).element,
          import_Registry10.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\foot.ink
  var import_Registry11 = __toESM(require_Registry());
  var import_Component11 = __toESM(require_Component());
  var import_StyleSet8 = __toESM(require_StyleSet());
  var Foot_43347adfd209e799017e = class extends import_Component11.default {
    static id = "43347adfd209e799017e";
    static tagname = "foot";
    static classname = "Foot_43347adfd209e799017e";
    styles() {
      return ``;
    }
    template() {
      const {
        //wrapping
        nowrap,
        wrap1,
        wrap2,
        wrap3,
        wrap4,
        wrap5,
        //sticky
        bottom,
        left,
        right
      } = this.propsCamel;
      const styles = new import_StyleSet8.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-cell");
      styles.add(":host([bottom])", "position", "sticky");
      styles.add(":host([bottom])", "z-index", "1");
      styles.add(":host([left])", "position", "sticky");
      styles.add(":host([left])", "z-index", "2");
      styles.add(":host([right])", "position", "sticky");
      styles.add(":host([right])", "z-index", "2");
      styles.add(":host([bottom][left])", "z-index", "3");
      styles.add(":host([bottom][right])", "z-index", "3");
      if (typeof bottom === "string" || typeof bottom === "number") {
        styles.add(":host([bottom])", "bottom", bottom);
      } else {
        styles.add(":host([bottom])", "bottom", "0");
      }
      if (typeof left === "string" || typeof left === "number") {
        styles.add(":host([left])", "left", left);
      } else {
        styles.add(":host([left])", "left", "0");
      }
      if (typeof right === "string" || typeof right === "number") {
        styles.add(":host([right])", "right", right);
      } else {
        styles.add(":host([right])", "right", "0");
      }
      if (nowrap) {
        styles.add(":host", "white-space", "nowrap");
      }
      if (wrap1) {
        styles.add(".wrap", "width", "100px");
      } else if (wrap2) {
        styles.add(".wrap", "width", "200px");
      } else if (wrap3) {
        styles.add(".wrap", "width", "300px");
      } else if (wrap4) {
        styles.add(".wrap", "width", "400px");
      } else if (wrap5) {
        styles.add(".wrap", "width", "500px");
      }
      return () => [
        import_Registry11.default.createText(`
`, false),
        import_Registry11.default.createElement("slot", {}, []).element,
        import_Registry11.default.createText(`
`, false),
        ...!!(wrap1 || wrap2 || wrap3 || wrap4 || wrap5) ? [
          import_Registry11.default.createText(`
  `, false),
          import_Registry11.default.createElement("div", { "class": `wrap` }, []).element,
          import_Registry11.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\col.ink
  var import_Registry12 = __toESM(require_Registry());
  var import_Component12 = __toESM(require_Component());
  var import_StyleSet9 = __toESM(require_StyleSet());
  var Col_f45aa9d13a1588f1d9ab = class extends import_Component12.default {
    static id = "f45aa9d13a1588f1d9ab";
    static tagname = "col";
    static classname = "Col_f45aa9d13a1588f1d9ab";
    styles() {
      return ``;
    }
    template() {
      const {
        //wrapping
        nowrap,
        wrap1,
        wrap2,
        wrap3,
        wrap4,
        wrap5,
        //sticky
        left,
        right
      } = this.propsCamel;
      const styles = new import_StyleSet9.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-cell");
      styles.add(":host([left])", "position", "sticky");
      styles.add(":host([left])", "z-index", "2");
      styles.add(":host([right])", "position", "sticky");
      styles.add(":host([right])", "z-index", "2");
      if (typeof left === "string" || typeof left === "number") {
        styles.add(":host([left])", "left", left);
      } else {
        styles.add(":host([left])", "left", "0");
      }
      if (typeof right === "string" || typeof right === "number") {
        styles.add(":host([right])", "right", right);
      } else {
        styles.add(":host([right])", "right", "0");
      }
      if (nowrap) {
        styles.add(":host", "white-space", "nowrap");
      }
      if (wrap1) {
        styles.add(".wrap", "width", "100px");
      } else if (wrap2) {
        styles.add(".wrap", "width", "200px");
      } else if (wrap3) {
        styles.add(".wrap", "width", "300px");
      } else if (wrap4) {
        styles.add(".wrap", "width", "400px");
      } else if (wrap5) {
        styles.add(".wrap", "width", "500px");
      }
      return () => [
        import_Registry12.default.createText(`
`, false),
        import_Registry12.default.createElement("slot", {}, []).element,
        import_Registry12.default.createText(`
`, false),
        ...!!(wrap1 || wrap2 || wrap3 || wrap4 || wrap5) ? [
          import_Registry12.default.createText(`
  `, false),
          import_Registry12.default.createElement("div", { "class": `wrap` }, []).element,
          import_Registry12.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\form\button.ink
  var import_Registry13 = __toESM(require_Registry());
  var import_Component13 = __toESM(require_Component());
  var import_StyleSet10 = __toESM(require_StyleSet());
  var import_color = __toESM(require_color());
  var import_curve = __toESM(require_curve());
  var import_display = __toESM(require_display());
  var import_padding = __toESM(require_padding());
  var import_events = __toESM(require_events());
  var Button_8b2d9633875784010957 = class extends import_Component13.default {
    static id = "8b2d9633875784010957";
    static tagname = "button";
    static classname = "Button_8b2d9633875784010957";
    styles() {
      return `::slotted(button), ::slotted(a) {
    cursor: pointer;
    background: transparent;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    display: block;
    font-family: inherit;
    font-size: inherit;
    height: 100%;
    text-align: inherit;
    text-decoration: none;
    width: 100%;
  }`;
    }
    template() {
      const {
        //display
        flex,
        none,
        inline,
        block,
        "inline-block": iblock,
        "inline-flex": iflex,
        //spacing
        padding,
        "padding-x": paddingX,
        "padding-y": paddingY,
        //font color
        color,
        white,
        black,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        secondary,
        theme,
        //font size
        size,
        xs,
        sm,
        md,
        lg,
        xl,
        xl2,
        xl3,
        xl4,
        xl5,
        //curve
        curve,
        curved,
        rounded,
        pill,
        //layouts
        outline,
        solid,
        transparent,
        //others
        full,
        href,
        //dont need these
        style,
        "class": _2,
        //for the button
        ...attributes
      } = this.props;
      const styles = new import_StyleSet10.default();
      const css = this.styles();
      this.styles = () => css + styles.toString();
      const slotted = "::slotted(button), ::slotted(a)";
      (0, import_display.default)(this.props, styles, "inline-block", ":host");
      const pad = (0, import_padding.default)(this.props, styles, slotted);
      if (!pad) {
        xs ? styles.add(slotted, "padding", "2px 4px") : sm ? styles.add(slotted, "padding", "5px 10px") : md ? styles.add(slotted, "padding", "8px 16px") : lg ? styles.add(slotted, "padding", "12px 24px") : xl ? styles.add(slotted, "padding", "15px 30px") : xl2 ? styles.add(slotted, "padding", "18px 36px") : xl3 ? styles.add(slotted, "padding", "22px 44px") : xl4 ? styles.add(slotted, "padding", "26px 52px") : xl5 ? styles.add(slotted, "padding", "30px 60px") : null;
      }
      (0, import_curve.default)(this.props, styles, false, ":host");
      styles.add(":host", "text-align", "center");
      if (full) {
        styles.add(":host", "width", "100%");
      }
      if (outline || transparent) {
        (0, import_color.default)(this.props, styles, "var(--muted)", ":host", "color");
        (0, import_color.default)(this.props, styles, "var(--muted)", ":host", "border-color");
        styles.add(":host", "border-style", "solid");
        styles.add(":host", "border-width", "1px");
        if (outline) {
          styles.add(":host", "background-color", "var(--white)");
        }
      } else {
        styles.add(":host", "color", "var(--white)");
        (0, import_color.default)(this.props, styles, "var(--muted)", ":host", "background-color");
      }
      const children2 = this.getChildren(false);
      const attr = (0, import_events.removeEvents)(attributes);
      return () => [
        import_Registry13.default.createText(`
`, false),
        import_Registry13.default.createElement("template", { "type": `light` }, [
          import_Registry13.default.createText(`
  `, false),
          ...!!href ? [
            import_Registry13.default.createText(`
    `, false),
            import_Registry13.default.createElement("a", { ...attr, "href": href }, [
              ...this._toNodeList(children2)
            ]).element,
            import_Registry13.default.createText(`
  `, false)
          ] : true ? [
            ,
            import_Registry13.default.createText(`
    `, false),
            import_Registry13.default.createElement("button", { ...attr }, [
              ...this._toNodeList(children2)
            ]).element,
            import_Registry13.default.createText(`
  `, false)
          ] : [],
          import_Registry13.default.createText(`
`, false)
        ]).element,
        import_Registry13.default.createText(`
`, false),
        import_Registry13.default.createElement("template", { "type": `shadow` }, [
          import_Registry13.default.createText(`
  `, false),
          import_Registry13.default.createElement("slot", {}, []).element,
          import_Registry13.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\form\control.ink
  var import_Registry14 = __toESM(require_Registry());
  var import_Component14 = __toESM(require_Component());
  var import_StyleSet11 = __toESM(require_StyleSet());
  var Control_7df3c1a799ae50f9a174 = class extends import_Component14.default {
    static id = "7df3c1a799ae50f9a174";
    static tagname = "control";
    static classname = "Control_7df3c1a799ae50f9a174";
    styles() {
      return ``;
    }
    template() {
      const { label, error } = this.props;
      const styles = new import_StyleSet11.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "block");
      styles.add("label", "display", "block");
      styles.add("label", "padding-bottom", "3px");
      styles.add("div", "padding-top", "3px");
      styles.add("div", "font-size", "0.90rem");
      if (error) {
        styles.add(":host", "color", "var(--error)");
      }
      return () => [
        import_Registry14.default.createText(`
`, false),
        ...!!!!label ? [
          import_Registry14.default.createText(`
  `, false),
          import_Registry14.default.createElement("label", {}, [
            ...this._toNodeList(label)
          ]).element,
          import_Registry14.default.createText(`
`, false)
        ] : [],
        import_Registry14.default.createText(`
`, false),
        import_Registry14.default.createElement("slot", {}, []).element,
        import_Registry14.default.createText(`
`, false),
        ...!!(!!error && error?.length > 0) ? [
          import_Registry14.default.createText(`
  `, false),
          import_Registry14.default.createElement("div", {}, [
            ...this._toNodeList(error)
          ]).element,
          import_Registry14.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\field\input.ink
  var import_Registry15 = __toESM(require_Registry());
  var import_Component15 = __toESM(require_Component());
  var import_StyleSet12 = __toESM(require_StyleSet());
  var import_input = __toESM(require_input());
  var Input_cb7a6224432a087beaf2 = class extends import_Component15.default {
    static id = "cb7a6224432a087beaf2";
    static tagname = "input";
    static classname = "Input_cb7a6224432a087beaf2";
    static observedAttributes = ["accept", "autocomplete", "checked", "disabled", "max", "min", "multiple", "name", "pattern", "placeholder", "readonly", "required", "step", "type", "value"];
    styles() {
      return ``;
    }
    template() {
      const {
        //handlers
        change,
        update,
        //input attributes
        attributes,
        //the rest of the props
        ...props
      } = (0, import_input.getProps)(this);
      const styles = new import_StyleSet12.default();
      this.styles = () => styles.toString();
      (0, import_input.setDefaultStyles)(props, styles);
      const handlers = (0, import_input.getHandlers)(this, change, update);
      return () => [
        import_Registry15.default.createText(`
`, false),
        import_Registry15.default.createElement("template", { "type": `light` }, [
          import_Registry15.default.createText(`
  `, false),
          import_Registry15.default.createElement("input", { ...attributes, "change": handlers.change }).element,
          import_Registry15.default.createText(`
`, false)
        ]).element,
        import_Registry15.default.createText(`
`, false),
        import_Registry15.default.createElement("template", { "type": `shadow` }, [
          import_Registry15.default.createText(`
  `, false),
          import_Registry15.default.createElement("slot", {}, []).element,
          import_Registry15.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\field\textarea.ink
  var import_Registry16 = __toESM(require_Registry());
  var import_Component16 = __toESM(require_Component());
  var import_StyleSet13 = __toESM(require_StyleSet());
  var import_input2 = __toESM(require_input());
  var Textarea_8a2ce892dd22c3ebd0b9 = class extends import_Component16.default {
    static id = "8a2ce892dd22c3ebd0b9";
    static tagname = "textarea";
    static classname = "Textarea_8a2ce892dd22c3ebd0b9";
    static observedAttributes = ["disabled", "name", "placeholder", "readonly", "required", "rows"];
    styles() {
      return ``;
    }
    template() {
      const {
        //handlers
        change,
        update,
        //input attributes
        attributes,
        //the rest of the props
        ...props
      } = (0, import_input2.getProps)(this);
      const children2 = this.originalChildren;
      const styles = new import_StyleSet13.default();
      this.styles = () => styles.toString();
      (0, import_input2.setDefaultStyles)(props, styles);
      const handlers = (0, import_input2.getHandlers)(this, change, update);
      return () => [
        import_Registry16.default.createText(`
`, false),
        import_Registry16.default.createElement("template", { "type": `light` }, [
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("textarea", { ...attributes, "change": handlers.change }, [
            ...this._toNodeList(children2)
          ]).element,
          import_Registry16.default.createText(`
`, false)
        ]).element,
        import_Registry16.default.createText(`
`, false),
        import_Registry16.default.createElement("template", { "type": `shadow` }, [
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("slot", {}, []).element,
          import_Registry16.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\alert.ink
  var import_Registry17 = __toESM(require_Registry());
  var import_Component17 = __toESM(require_Component());
  var import_StyleSet14 = __toESM(require_StyleSet());
  var import_color2 = __toESM(require_color());
  var import_curve2 = __toESM(require_curve());
  var import_display2 = __toESM(require_display());
  var Alert_ba827f6c1d3753161701 = class extends import_Component17.default {
    static id = "ba827f6c1d3753161701";
    static tagname = "alert";
    static classname = "Alert_ba827f6c1d3753161701";
    styles() {
      return ``;
    }
    template() {
      const {
        //layouts
        outline,
        solid,
        transparent,
        //padding
        padding
      } = this.props;
      const styles = new import_StyleSet14.default();
      this.styles = () => styles.toString();
      (0, import_display2.default)(this.props, styles, "block", ":host");
      styles.add(":host", "padding", padding ? `${padding}px` : "16px");
      (0, import_curve2.default)(this.props, styles, false, ":host");
      if (outline || transparent) {
        (0, import_color2.default)(this.props, styles, "var(--muted)", ":host", "color");
        (0, import_color2.default)(this.props, styles, "var(--muted)", ":host", "border-color");
        styles.add(":host", "border-style", "solid");
        styles.add(":host", "border-width", "1px");
        if (outline) {
          styles.add(":host", "background-color", "var(--white)");
        }
      } else {
        styles.add(":host", "color", "var(--white)");
        (0, import_color2.default)(this.props, styles, "var(--muted)", ":host", "background-color");
      }
      return () => [
        import_Registry17.default.createText(`
`, false),
        import_Registry17.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\tab.ink
  var import_Registry18 = __toESM(require_Registry());
  var import_Component18 = __toESM(require_Component());
  var import_StyleSet15 = __toESM(require_StyleSet());
  var Tab_773b62de7e46341aea2d = class extends import_Component18.default {
    static id = "773b62de7e46341aea2d";
    static tagname = "tab";
    static classname = "Tab_773b62de7e46341aea2d";
    styles() {
      return ``;
    }
    template() {
      const handlers = {
        init: () => {
          const on = this.hasAttribute("on");
          this.classList.remove(...on ? inactiveList : activeList);
          this.classList.add(...on ? activeList : inactiveList);
          Array.from(document.querySelectorAll(selector)).forEach((content) => {
            content.style.display = on ? "block" : "none";
          });
        },
        activate: () => {
          Array.from(document.querySelectorAll(`[group="${group}"]`)).forEach((tab) => {
            const subselector = tab.getAttribute("selector");
            if (selector === subselector && !tab.hasAttribute("on")) {
              tab.setAttribute("on", "");
              Array.from(document.querySelectorAll(selector)).forEach((content) => {
                content.style.display = "block";
              });
              typeof tab.render === "function" && tab.render();
            } else if (selector !== subselector && tab.hasAttribute("on")) {
              tab.removeAttribute("on");
              Array.from(document.querySelectorAll(subselector)).forEach((content) => {
                content.style.display = "none";
              });
              typeof tab.render === "function" && tab.render();
            }
          });
        }
      };
      const {
        group,
        selector = "",
        active = "",
        inactive = "",
        //dont need these
        style,
        "class": _2,
        //get the rest
        ...attributes
      } = this.props;
      const activeList = active.split(" ");
      const inactiveList = inactive.split(" ");
      const styles = new import_StyleSet15.default();
      this.styles = () => styles.toString();
      styles.add(":host", "cursor", "pointer");
      styles.add("a", "display", "block");
      styles.add("a", "height", "100%");
      styles.add("a", "width", "100%");
      return () => [
        import_Registry18.default.createText(`
`, false),
        import_Registry18.default.createElement("a", { ...attributes, "click": handlers.activate, "mount": handlers.init }, [
          import_Registry18.default.createText(`
  `, false),
          import_Registry18.default.createElement("slot", {}, []).element,
          import_Registry18.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\icon.ink
  var import_Registry19 = __toESM(require_Registry());
  var import_Component19 = __toESM(require_Component());
  var import_StyleSet16 = __toESM(require_StyleSet());
  var import_color3 = __toESM(require_color());
  var import_display3 = __toESM(require_display());
  var import_size = __toESM(require_size());
  var Icon_33cb84912ffcb000a388 = class extends import_Component19.default {
    static id = "33cb84912ffcb000a388";
    static tagname = "icon";
    static classname = "Icon_33cb84912ffcb000a388";
    styles() {
      return ``;
    }
    template() {
      const { name, solid, brand } = this.props;
      const styles = new import_StyleSet16.default();
      this.styles = () => styles.toString();
      (0, import_display3.default)(this.props, styles, "inline-block", ":host");
      (0, import_color3.default)(this.props, styles, false, ":host", "color");
      (0, import_size.default)(this.props, styles, false, ":host", "font-size");
      const iconClass = ["fa-fw", `fa-${name}`];
      iconClass.push(brand ? "fa-brands" : "fa-solid");
      return () => [
        import_Registry19.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }).element,
        import_Registry19.default.createText(`
`, false),
        import_Registry19.default.createElement("i", { "class": iconClass.join(" ") }, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\badge.ink
  var import_Registry20 = __toESM(require_Registry());
  var import_Component20 = __toESM(require_Component());
  var import_StyleSet17 = __toESM(require_StyleSet());
  var import_color4 = __toESM(require_color());
  var import_curve3 = __toESM(require_curve());
  var import_display4 = __toESM(require_display());
  var Badge_04e709456157a0a384e7 = class extends import_Component20.default {
    static id = "04e709456157a0a384e7";
    static tagname = "badge";
    static classname = "Badge_04e709456157a0a384e7";
    styles() {
      return ``;
    }
    template() {
      const {
        //layouts
        outline,
        solid,
        transparent,
        //padding
        padding
      } = this.props;
      const styles = new import_StyleSet17.default();
      this.styles = () => styles.toString();
      (0, import_display4.default)(this.props, styles, "inline-block", ":host");
      styles.add(":host", "padding", padding ? `${padding}px` : "2px 8px");
      (0, import_curve3.default)(this.props, styles, false, ":host");
      if (outline || transparent) {
        (0, import_color4.default)(this.props, styles, "var(--muted)", ":host", "color");
        (0, import_color4.default)(this.props, styles, "var(--muted)", ":host", "border-color");
        styles.add(":host", "border-style", "solid");
        styles.add(":host", "border-width", "1px");
        if (outline) {
          styles.add(":host", "background-color", "var(--white)");
        }
      } else {
        styles.add(":host", "color", "var(--white)");
        (0, import_color4.default)(this.props, styles, "var(--muted)", ":host", "background-color");
      }
      return () => [
        import_Registry20.default.createText(`
`, false),
        import_Registry20.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\loader.ink
  var import_Registry21 = __toESM(require_Registry());
  var import_Component21 = __toESM(require_Component());
  var import_StyleSet18 = __toESM(require_StyleSet());
  var import_color5 = __toESM(require_color());
  var import_display5 = __toESM(require_display());
  var Loader_5cd70d17db973b221463 = class extends import_Component21.default {
    static id = "5cd70d17db973b221463";
    static tagname = "loader";
    static classname = "Loader_5cd70d17db973b221463";
    styles() {
      return ``;
    }
    template() {
      const {
        //shape
        size = 20,
        slice = 0,
        speed = 1e3,
        thickness = 2,
        //styles
        solid,
        dotted,
        dashed
      } = this.props;
      const styles = new import_StyleSet18.default();
      this.styles = () => keyframe + styles.toString();
      (0, import_display5.default)(this.props, styles, "inline-block", ":host");
      styles.add(":host", "margin-right", "5px");
      styles.add("i", "display", "inline-block");
      styles.add("i", "border-radius", "50%");
      styles.add("i", "animation", "spin 1s linear infinite");
      styles.add("i", "width", `${size}px`);
      styles.add("i", "height", `${size}px`);
      styles.add("i", "animation-duration", `${speed}ms`);
      styles.add("i", "border-width", `${thickness}px`);
      const style = solid ? "solid" : dotted ? "dotted" : dashed ? "dashed" : "solid";
      styles.add("i", "border-style", style);
      (0, import_color5.default)(this.props, styles, "var(--black)", "i", "border-bottom-color");
      (0, import_color5.default)(this.props, styles, "var(--black)", "i", "border-left-color");
      (0, import_color5.default)(this.props, styles, "var(--black)", "i", "border-right-color");
      (0, import_color5.default)(this.props, styles, "var(--black)", "i", "border-top-color");
      if (slice > 0) {
        styles.add("i", "border-right-color", "transparent");
      }
      if (slice > 1) {
        styles.add("i", "border-bottom-color", "transparent");
      }
      if (slice > 2) {
        styles.add("i", "border-left-color", "transparent");
      }
      const keyframe = `@keyframes spin{${`0%{transform:rotate(0deg)}`}${`100%{transform:rotate(360deg)}`}}`;
      return () => [
        import_Registry21.default.createText(`
`, false),
        import_Registry21.default.createElement("i", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\tooltip.ink
  var import_Registry22 = __toESM(require_Registry());
  var import_Component22 = __toESM(require_Component());
  var import_StyleSet19 = __toESM(require_StyleSet());
  var import_color6 = __toESM(require_color());
  var Tooltip_d05b34b2fdaa8443ca0f = class extends import_Component22.default {
    static id = "d05b34b2fdaa8443ca0f";
    static tagname = "tooltip";
    static classname = "Tooltip_d05b34b2fdaa8443ca0f";
    styles() {
      return ``;
    }
    template() {
      const handlers = {
        over: () => {
          const tip = this.shadowRoot?.querySelector("div");
          tip && (tip.style.display = "block");
        },
        out: () => {
          const tip = this.shadowRoot?.querySelector("div");
          tip && (tip.style.display = "none");
        },
        mount: () => {
          if (this.parentNode) {
            this.parentNode.addEventListener("mouseover", handlers.over);
            this.parentNode.addEventListener("mouseout", handlers.out);
          }
        },
        unmount: () => {
          if (this.parentNode) {
            this.parentNode.removeEventListener("mouseover", handlers.over);
            this.parentNode.removeEventListener("mouseout", handlers.out);
          }
        },
        numeric: (value) => {
          return !isNaN(parseFloat(value)) && isFinite(value);
        }
      };
      const {
        //position
        top,
        bottom,
        left,
        right,
        //colors
        color,
        white,
        black,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        secondary,
        //layout
        curved,
        curve,
        center,
        padding,
        opacity,
        width = "auto",
        //sub-props
        background
      } = this.propsTree;
      const styles = new import_StyleSet19.default();
      this.styles = () => styles.toString();
      styles.add(":host", "position", "relative");
      styles.add(":host", "display", "block");
      styles.add(":host", "width", "100%");
      (0, import_color6.default)(this.props, styles, false, ":host", "color");
      if (center) {
        styles.add(":host", "text-align", "center");
      }
      styles.add("div", "position", "absolute");
      styles.add("div", "display", "none");
      if (background) {
        (0, import_color6.default)(background, styles, false, "div", "background-color");
      }
      if (padding) {
        styles.add("div", "padding", `${padding}px`);
      }
      if (opacity) {
        styles.add(
          "div",
          "opacity",
          `${Math.min(Math.max(Number(opacity), 0), 100)}`
        );
      }
      if (curved) {
        styles.add("div", "border-radius", "4px");
      } else if (curve) {
        styles.add("div", "border-radius", `${curve}px`);
      }
      if (top === true) {
        styles.add("div", "top", "0");
      } else if (handlers.numeric(top)) {
        styles.add("div", "top", `${top}px`);
      } else if (typeof top === "string") {
        styles.add("div", "top", top);
      }
      if (right === true) {
        styles.add("div", "right", "0");
      } else if (handlers.numeric(right)) {
        styles.add("div", "right", `${right}px`);
      } else if (typeof right === "string") {
        styles.add("div", "right", right);
      }
      if (bottom === true) {
        styles.add("div", "bottom", "0");
      } else if (handlers.numeric(bottom)) {
        styles.add("div", "bottom", `${bottom}px`);
      } else if (typeof bottom === "string") {
        styles.add("div", "bottom", bottom);
      }
      if (left === true) {
        styles.add("div", "left", "0");
      } else if (handlers.numeric(left)) {
        styles.add("div", "left", `${left}px`);
      } else if (typeof left === "string") {
        styles.add("div", "left", left);
      }
      if (width === "auto") {
        styles.add("div", "width", "auto");
      } else if (width) {
        styles.add("div", "width", `${width}px`);
      }
      return () => [
        import_Registry22.default.createText(`
`, false),
        import_Registry22.default.createElement("div", { "mount": handlers.mount, "unmount": handlers.unmount }, [
          import_Registry22.default.createText(`
  `, false),
          import_Registry22.default.createElement("slot", {}, []).element,
          import_Registry22.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\pager.ink
  var import_Registry23 = __toESM(require_Registry());
  var import_Component23 = __toESM(require_Component());
  var import_StyleSet20 = __toESM(require_StyleSet());
  var import_bold = __toESM(require_bold());
  var import_color7 = __toESM(require_color());
  var import_display6 = __toESM(require_display());
  var import_size2 = __toESM(require_size());
  var import_underline = __toESM(require_underline());
  var Pager_ad6fe2ba5cdf028f153c = class extends import_Component23.default {
    static id = "ad6fe2ba5cdf028f153c";
    static tagname = "pager";
    static classname = "Pager_ad6fe2ba5cdf028f153c";
    styles() {
      return ``;
    }
    template() {
      const handlers = {
        click: (e) => {
          e.preventDefault();
          const page = e.target.innerText;
          handlers.select(Number(page));
          return false;
        },
        rewind: (e) => {
          e.preventDefault();
          handlers.select(1);
          return false;
        },
        forward: (e) => {
          e.preventDefault();
          handlers.select(Math.ceil(total / range));
          return false;
        },
        prev: (e) => {
          e.preventDefault();
          handlers.select(Math.max(1, state.current - 1));
          return false;
        },
        next: (e) => {
          e.preventDefault();
          handlers.select(Math.min(state.range[1], state.current + 1));
          return false;
        },
        select: (page) => {
          typeof select === "function" && select(page);
          Object.assign(
            state,
            handlers.calculate(total, (page - 1) * range, range, radius)
          );
          this.render();
        },
        calculate: (total2 = 0, start2 = 0, range2 = 50, radius2 = 2) => {
          const pages = Math.ceil(total2 / range2);
          const current = Math.ceil((start2 + 1) / range2);
          const numbers = Array.from({ length: pages }, (_2, i) => i + 1).filter(
            (page) => page >= current - radius2 && page <= current + radius2
          );
          const minmax = [numbers[0], numbers[numbers.length - 1]];
          return { current, numbers, range: minmax, pages };
        }
      };
      const {
        //variables
        total = 0,
        start = 0,
        range = 50,
        radius = 2,
        //flags
        next,
        prev,
        rewind,
        forward,
        //sub props (color)
        link,
        control,
        border,
        background,
        //layout
        square = 0,
        //default sizes (to pass to icon component)
        size,
        xs,
        sm,
        md,
        lg,
        xl,
        xl2,
        xl3,
        xl4,
        xl5,
        //default colors (to pass to icon component)
        color,
        white,
        black,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        secondary,
        //handlers
        page: select = () => {
        }
      } = this.propsTree;
      const styles = new import_StyleSet20.default();
      this.styles = () => styles.toString();
      (0, import_display6.default)(this.props, styles, "block", ":host");
      (0, import_size2.default)(this.props, styles, false, ":host", "font-size");
      (0, import_color7.default)(this.props, styles, false, ":host", "color");
      styles.add(".control, a, span", "display", "inline-block");
      styles.add(".control:not(:defined)", "display", "none");
      styles.add("a", "cursor", "pointer");
      if (square) {
        styles.add(".control, a, span", "display", "inline-flex");
        styles.add(".control, a, span", "align-items", "center");
        styles.add(".control, a, span", "justify-content", "center");
        styles.add(".control, a, span", "text-align", "center");
        styles.add(".control, a, span", "width", `${square}px`);
        styles.add(".control, a, span", "height", `${square}px`);
      }
      if (border) {
        styles.add(".control, a, span", "border-width", "1px");
        styles.add(".control, a, span", "border-style", "solid");
        (0, import_color7.default)(border, styles, false, ".control, a, span", "border-color");
      }
      if (background) {
        (0, import_color7.default)(background, styles, false, ".control, a, span", "background-color");
      }
      (0, import_bold.default)(this.props, styles, "span");
      (0, import_underline.default)(this.props, styles, "a");
      if (link) {
        (0, import_color7.default)(link, styles, false, "a", "color");
      }
      const state = handlers.calculate(total, start, range, radius);
      const iconProps = {
        //default sizes
        size,
        xs,
        sm,
        md,
        lg,
        xl,
        xl2,
        xl3,
        xl4,
        xl5,
        //default colors
        color,
        white,
        black,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        secondary,
        //custom icon props
        ...control || {}
      };
      return () => [
        import_Registry23.default.createText(`
`, false),
        ...!!(state.numbers.length > 1) ? [
          import_Registry23.default.createText(`
  `, false),
          ...!!(rewind && state.range[0] !== 1) ? [
            import_Registry23.default.createText(`
    `, false),
            import_Registry23.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...iconProps, "class": `control`, "name": `angles-left`, "click": handlers.rewind }).element,
            import_Registry23.default.createText(`
  `, false)
          ] : [],
          import_Registry23.default.createText(`
  `, false),
          ...!!(prev && state.current > 1) ? [
            import_Registry23.default.createText(`
    `, false),
            import_Registry23.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...iconProps, "class": `control`, "name": `angle-left`, "click": handlers.prev }).element,
            import_Registry23.default.createText(`
  `, false)
          ] : [],
          import_Registry23.default.createText(`
  `, false),
          ...Object.entries(state.numbers).map(([_2, page]) => [
            import_Registry23.default.createText(`
    `, false),
            ...!!(page === state.current) ? [
              import_Registry23.default.createText(`
      `, false),
              import_Registry23.default.createElement("span", {}, [
                ...this._toNodeList(page)
              ]).element,
              import_Registry23.default.createText(`
    `, false)
            ] : true ? [
              ,
              import_Registry23.default.createText(`
      `, false),
              import_Registry23.default.createElement("a", { "click": handlers.click }, [
                ...this._toNodeList(page)
              ]).element,
              import_Registry23.default.createText(`
    `, false)
            ] : [],
            import_Registry23.default.createText(`
  `, false)
          ]).flat(),
          import_Registry23.default.createText(`
  `, false),
          ...!!(next && state.current < state.pages) ? [
            import_Registry23.default.createText(`
    `, false),
            import_Registry23.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...iconProps, "class": `control`, "name": `angle-right`, "click": handlers.next }).element,
            import_Registry23.default.createText(`
  `, false)
          ] : [],
          import_Registry23.default.createText(`
  `, false),
          ...!!(forward && state.range[1] !== state.pages) ? [
            import_Registry23.default.createText(`
    `, false),
            import_Registry23.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...iconProps, "class": `control`, "name": `angles-right`, "click": handlers.forward }).element,
            import_Registry23.default.createText(`
  `, false)
          ] : [],
          import_Registry23.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\crumbs.ink
  var import_Registry24 = __toESM(require_Registry());
  var import_Component24 = __toESM(require_Component());
  var import_StyleSet21 = __toESM(require_StyleSet());
  var import_bold2 = __toESM(require_bold());
  var import_color8 = __toESM(require_color());
  var import_display7 = __toESM(require_display());
  var import_size3 = __toESM(require_size());
  var import_underline2 = __toESM(require_underline());
  var Crumbs_e4598fe781cc66b1ce2c = class extends import_Component24.default {
    static id = "e4598fe781cc66b1ce2c";
    static tagname = "crumbs";
    static classname = "Crumbs_e4598fe781cc66b1ce2c";
    styles() {
      return ``;
    }
    template() {
      const {
        //breadcrumbs list
        crumbs = [],
        //sub-props
        link,
        sep,
        icon,
        //default sizes (to pass to icon component)
        size,
        xs,
        sm,
        md,
        lg,
        xl,
        xl2,
        xl3,
        xl4,
        xl5,
        //default colors (to pass to icon component)
        color,
        white,
        black,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        secondary,
        //others
        spacing = 0
      } = this.propsTree;
      const styles = new import_StyleSet21.default();
      this.styles = () => styles.toString();
      const display = (0, import_display7.default)(this.props, styles, "block", ":host");
      if (display === "flex" || display === "inline-flex") {
        styles.add(":host", "align-items", "center");
      }
      (0, import_size3.default)(this.props, styles, false, ":host", "font-size");
      (0, import_color8.default)(this.props, styles, false, ":host", "color");
      styles.add("a", "cursor", "pointer");
      if (link) {
        (0, import_color8.default)(link, styles, false, "a", "color");
      }
      (0, import_underline2.default)(this.props, styles, "a");
      if (spacing) {
        styles.add(".sep", "margin", `0 ${spacing}px`);
      }
      (0, import_bold2.default)(this.props, styles, "span");
      const iconProps = icon || {
        //default sizes
        size,
        xs,
        sm,
        md,
        lg,
        xl,
        xl2,
        xl3,
        xl4,
        xl5,
        //default colors
        color,
        white,
        black,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        secondary
      };
      const sepProps = sep || {
        //default sizes
        size,
        xs,
        sm,
        md,
        lg,
        xl,
        xl2,
        xl3,
        xl4,
        xl5,
        //default colors
        color,
        white,
        black,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        secondary
      };
      return () => [
        import_Registry24.default.createText(`
`, false),
        ...Object.entries(crumbs).map(([index, crumb]) => [
          import_Registry24.default.createText(`
  `, false),
          ...!!crumb.icon ? [
            import_Registry24.default.createText(`
    `, false),
            import_Registry24.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...iconProps, "name": crumb.icon }).element,
            import_Registry24.default.createText(`
  `, false)
          ] : [],
          import_Registry24.default.createText(`
  `, false),
          ...!!(crumb.href && crumb.label) ? [
            import_Registry24.default.createText(`
    `, false),
            import_Registry24.default.createElement("a", { "href": crumb.href }, [
              ...this._toNodeList(crumb.label)
            ]).element,
            import_Registry24.default.createText(`
  `, false)
          ] : !!crumb.label ? [
            ,
            import_Registry24.default.createText(`
    `, false),
            import_Registry24.default.createElement("span", {}, [
              ...this._toNodeList(crumb.label)
            ]).element,
            import_Registry24.default.createText(`
  `, false)
          ] : [],
          import_Registry24.default.createText(`
  `, false),
          ...!!(index < crumbs.length - 1) ? [
            import_Registry24.default.createText(`
    `, false),
            import_Registry24.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...sepProps, "name": `chevron-right`, "class": `sep` }).element,
            import_Registry24.default.createText(`
  `, false)
          ] : [],
          import_Registry24.default.createText(`
`, false)
        ]).flat()
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\progress.ink
  var import_Registry25 = __toESM(require_Registry());
  var import_Component25 = __toESM(require_Component());
  var import_StyleSet22 = __toESM(require_StyleSet());
  var import_color9 = __toESM(require_color());
  var import_display8 = __toESM(require_display());
  var Progress_8f478149e608bd67287e = class extends import_Component25.default {
    static id = "8f478149e608bd67287e";
    static tagname = "progress";
    static classname = "Progress_8f478149e608bd67287e";
    static observedAttributes = ["width"];
    styles() {
      return ``;
    }
    template() {
      const { width = 0, height = 20, bg } = this.propsTree;
      const styles = new import_StyleSet22.default();
      this.styles = () => styles.toString();
      const children2 = this.originalChildren;
      styles.add(":host", "position", "relative");
      styles.add(":host", "overflow", "hidden");
      styles.add(":host", "height", `${height}px`);
      (0, import_display8.default)(this.props, styles, "block", ":host");
      styles.add(".bar", "height", "100%");
      if (!isNaN(Number(width))) {
        styles.add(".bar", "width", `${Math.min(
          Math.max(Number(width), 0),
          100
        )}%`);
      }
      styles.add(".bar", "transition", "width 500ms");
      if (bg) {
        (0, import_color9.default)(bg, styles, false, ":host", "background-color");
      }
      (0, import_color9.default)(this.props, styles, false, ".bar", "background-color");
      styles.add(".label", "position", "absolute");
      styles.add(".label", "top", "0");
      styles.add(".label", "bottom", "0");
      styles.add(".label", "left", "0");
      styles.add(".label", "right", "0");
      styles.add(".label", "display", "flex");
      styles.add(".label", "align-items", "center");
      styles.add(".label", "justify-content", "center");
      styles.add(".label", "text-align", "center");
      this.on("attributechange", (e) => {
        const { action, name, value, target } = e.detail;
        if (name !== "width") return;
        const bar = target.shadowRoot?.querySelector("div.bar");
        if (!bar) return;
        if (action === "remove") {
          bar.style.width = "0%";
          return;
        }
        if (isNaN(parseFloat(value))) return;
        bar.style.width = `${Math.min(
          Math.max(parseFloat(value), 0),
          100
        )}%`;
      });
      return () => [
        import_Registry25.default.createText(`
`, false),
        import_Registry25.default.createElement("div", { "class": `bar` }, []).element,
        import_Registry25.default.createText(`
`, false),
        ...!!children2.length ? [
          import_Registry25.default.createText(`
  `, false),
          import_Registry25.default.createElement("div", { "class": `label` }, [
            import_Registry25.default.createElement("slot", {}, []).element
          ]).element,
          import_Registry25.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\anetu\dev\ink-task\node_modules\@stackpress\ink-ui\element\notify.ink
  var import_Component26 = __toESM(require_Component());
  var import_Registry26 = __toESM(require_Registry());
  var import_StyleSet23 = __toESM(require_StyleSet());
  var Notify_ed7723389528abddbe70 = class extends import_Component26.default {
    static id = "ed7723389528abddbe70";
    static tagname = "notify";
    static classname = "Notify_ed7723389528abddbe70";
    styles() {
      return ``;
    }
    template() {
      const handlers = {
        //alert maker
        make: (type, message) => {
          const bar = import_Registry26.default.createElement(
            "div",
            { "class": "bar" }
          ).element;
          const progress = import_Registry26.default.createElement(
            "div",
            { "class": "progress" },
            [bar]
          ).element;
          const icon = import_Registry26.default.createComponent(
            "interface-icon",
            Icon_33cb84912ffcb000a388,
            {
              "class": "icon",
              none: type === "primary" || type === "secondary" || type === "muted",
              white: true,
              name: type === "info" ? "info-circle" : type === "warning" ? "exclamation-triangle" : type === "error" ? "times-circle" : type === "success" ? "check-circle" : "info-circle"
            }
          ).element;
          const close = import_Registry26.default.createComponent(
            "interface-icon",
            Icon_33cb84912ffcb000a388,
            {
              "class": "close",
              white: true,
              name: "times"
            }
          ).element;
          const alert = import_Registry26.default.createComponent(
            "interface-alert",
            Alert_ba827f6c1d3753161701,
            {
              "class": "alert",
              warning: type === "warning",
              error: type === "error",
              success: type === "success",
              primary: type === "primary",
              secondary: type === "secondary",
              muted: type === "muted",
              info: type === "info",
              solid: true,
              curved: true
            }
          ).element;
          const wrapper = import_Registry26.default.createElement("div", {
            "class": "message"
          }).element;
          wrapper.innerHTML = message;
          alert.appendChild(close);
          alert.appendChild(icon);
          alert.appendChild(wrapper);
          alert.appendChild(progress);
          return { bar, icon, close, progress, alert };
        },
        //notify function api
        notify: (type, message, timeout = 5e3) => {
          const {
            bar,
            close,
            progress,
            alert
          } = handlers.make(type, message);
          this.shadowRoot?.appendChild(alert);
          const state = { time: 0, progress: 0 };
          const interval = setInterval(() => {
            state.time += smooth;
            state.progress = Math.floor(state.time / timeout * 100);
            alert.style.opacity = String(
              (timeout - state.time) / timeout
            );
            bar.style.width = `${state.progress}%`;
            if (state.time >= timeout) {
              remove();
            }
          }, smooth);
          const remove = () => {
            this.shadowRoot?.removeChild(alert);
            clearInterval(interval);
          };
          close.addEventListener("click", remove);
        }
      };
      this.notify = handlers.notify;
      const {
        //position
        top,
        left,
        center,
        //transition
        fade,
        smooth = 10
      } = this.props;
      const styles = new import_StyleSet23.default();
      this.styles = () => styles.toString();
      styles.add(":host", "position", "fixed");
      styles.add(":host", "pointer-events", "none");
      top ? styles.add(":host", "top", "20px") : styles.add(":host", "bottom", "20px");
      if (left) {
        styles.add(":host", "left", "20px");
      } else if (center) {
        styles.add(":host", "left", "0");
        styles.add(":host", "right", "0");
      } else {
        styles.add(":host", "right", "20px");
      }
      styles.add(".alert", "width", "calc(100% - 32px)");
      styles.add(".alert", "position", "relative");
      styles.add(".alert", "margin-bottom", "8px");
      styles.add(".alert", "max-width", "288px");
      styles.add(".alert", "pointer-events", "auto");
      if (center) {
        styles.add(".alert", "margin-left", "auto");
        styles.add(".alert", "margin-right", "auto");
      }
      styles.add(".close", "display", "inline-block");
      styles.add(".close", "float", "right");
      styles.add(".close", "color", "white");
      styles.add(".close", "cursor", "pointer");
      styles.add(".close", "position", "relative");
      styles.add(".close", "top", "3px");
      styles.add(".icon", "display", "inline-block");
      styles.add(".icon", "color", "white");
      styles.add(".icon", "margin-right", "5px");
      styles.add(".progress", "height", "5px");
      styles.add(".progress", "width", "100%");
      styles.add(".bar", "width", "0%");
      styles.add(".bar", "height", "100%");
      styles.add(".bar", "background-color", "var(--muted)");
      styles.add(".message", "display", "inline-block");
      return () => [];
    }
  };

  // ink-document-client-resolver:C:\Users\anetu\dev\ink-task\packages\ink-web\src\pages\ui\index.ink
  var import_ink2 = __toESM(require_ink());
  var TemplateDocument = class _TemplateDocument extends import_Document2.default {
    static sync() {
      const document2 = new _TemplateDocument();
      return document2.sync();
    }
    template() {
      const url = "/ink/panel.html";
      const title = _("Ink UI - Web Components Meets Atomic Styles.");
      const description = _("Ink UI atomically generates CSS styles and provides out of box web components.");
      const toggle = () => {
        document.querySelector("panel-layout").toggle("left");
      };
      const crumbs = [
        { icon: "home", label: "Home", href: "/ink/index.html" },
        { icon: "book", label: "Docs" }
      ];
      return [
        import_Document.default.createText(`
`, false),
        import_Document.default.createElement("html", {}, [
          import_Document.default.createText(`
  `, false),
          ...[
            import_Document.default.createElement("head", {}, [
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "charset": `utf-8` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `viewport`, "content": `width=device-width, initial-scale=1` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("title", {}, [
                ...this._toNodeList(title)
              ]),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `description`, "content": description }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:title`, "content": title }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:description`, "content": description }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:image`, "content": `https://stackpress.github.io/ink/ink-logo.png` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:url`, "content": `https://stackpress.github.io/ink${url}` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:type`, "content": `website` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:card`, "content": `summary` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:site`, "content": `@stackpress` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:title`, "content": title }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:description`, "content": description }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:image`, "content": `https://stackpress.github.io/ink/ink-logo.png` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `favicon`, "href": `/ink/favicon.ico` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `shortcut icon`, "type": `image/png`, "href": `/ink/favicon.png` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/styles/global.css` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/build/client/${(0, import_ink2.env)("BUILD_ID")}.css` }),
              import_Document.default.createElement("script", { "data-template": true, "type": `text/json` }, [
                import_Document.default.createText(`__TEMPLATE_DATA__`, true)
              ]),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("script", { "src": `/ink/build/client/${(0, import_ink2.env)("BUILD_ID")}.js` }),
              import_Document.default.createText(`
  `, false),
              ...!!((0, import_ink2.env)("PUBLIC_ENV") === "development") ? [
                import_Document.default.createText(`
    `, false),
                import_Document.default.createElement("script", { "src": `/dev.js` }),
                import_Document.default.createText(`
  `, false)
              ] : [],
              import_Document.default.createText(`
`, false)
            ])
          ],
          import_Document.default.createText(`
  `, false),
          import_Document.default.createElement("body", { "class": `light bg-t-0 tx-t-1 tx-arial` }, [
            import_Document.default.createText(`
    `, false),
            import_Document.default.createElement("panel-layout", {}, [
              import_Document.default.createText(`
      `, false),
              import_Document.default.createElement("header", {}, [
                ...[
                  import_Document.default.createElement("menu", { "class": `flex flex-center-y px-20 py-15 m-0 bg-t-1` }, [
                    import_Document.default.createText(`
  `, false),
                    ...!!(url !== "/ink/index.html" && url !== "/ink/500.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("i", { "class": `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, "click": toggle }, []),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("div", { "class": `flex-grow` }, []),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "href": `/ink` }, [
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("img", { "alt": `Ink Logo`, "class": `h-26 mr-10`, "src": `/ink/ink-icon.png` }),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("nav", { "class": `flex flex-center-y` }, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `tx-primary`, "href": `/ink/docs/index.html` }, [
                        import_Document.default.createText(`Docs`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-5xl ml-10`, "href": `https://github.com/stackpress/ink`, "target": `_blank` }, [
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("i", { "class": `fab fa-github` }, []),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, "href": `https://www.npmjs.com/package/@stackpress/ink`, "target": `_blank` }, [
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("i", { "class": `fab fa-npm tx-white` }, []),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
`, false)
                  ])
                ]
              ]),
              import_Document.default.createText(`
      `, false),
              import_Document.default.createElement("aside", { "left": true }, [
                ...[
                  import_Document.default.createElement("header", { "class": `flex flex-center-y bg-t-2 py-15 pr-5 pl-10` }, [
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("a", { "href": `/ink` }, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("img", { "class": `h-26 mr-10`, "src": `/ink/ink-icon.png`, "alt": `Ink Logo` }),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("h3", { "class": `flex-grow m-0 tx-upper` }, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `tx-primary`, "href": `/ink` }, [
                        import_Document.default.createText(`Ink`, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("i", { "class": `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, "click": toggle }, []),
                    import_Document.default.createText(`
`, false)
                  ]),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("nav", { "class": `bg-t-1 scroll-auto h-calc-full-60` }, [
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("h6", { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }, [
                      import_Document.default.createText(`
    `, false),
                      ...this._toNodeList(_("Introduction")),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/index.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Documentation")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Documentation")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/getting-started.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/getting-started.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Getting Started")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/getting-started.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Getting Started")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`

  `, false),
                    import_Document.default.createElement("h6", { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }, [
                      import_Document.default.createText(`
    `, false),
                      ...this._toNodeList(_("Features")),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/markup-syntax.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/markup-syntax.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Markup Syntax")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/markup-syntax.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Markup Syntax")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/state-management.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/state-management.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("State Management")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/state-management.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("State Management")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/component-strategy.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/component-strategy.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Component Strategy")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/component-strategy.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Component Strategy")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/compiler-api.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/compiler-api.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Compiler API")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/compiler-api.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Compiler API")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/client-api.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/client-api.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Client API")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/client-api.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Client API")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`

  `, false),
                    import_Document.default.createElement("h6", { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }, [
                      import_Document.default.createText(`
    `, false),
                      ...this._toNodeList(_("Usage")),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/template-engine.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/template-engine.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Template Engine")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/template-engine.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Template Engine")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/single-page.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/single-page.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Single Page App")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/single-page.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Single Page App")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/static-site.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/static-site.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Static Site Generator")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/static-site.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Static Site Generator")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/component-publisher.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/component-publisher.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Component Publisher")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/component-publisher.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Component Publisher")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/docs/developer-tools.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/developer-tools.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Developer Tools")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/developer-tools.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Developer Tools")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`


    `, false),
                    import_Document.default.createElement("h6", { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }, [
                      import_Document.default.createText(`
    `, false),
                      ...this._toNodeList(_("UI")),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    ...!!(url === "/ui/index.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/ui/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Components")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/ui/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Components")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  
  
  `, false),
                    ...!!(url === "/docs/state-management.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/ui/form/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Form")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/ui/form/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Form")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`

  `, false),
                    ...!!(url === "/docs/client-api.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/ui/formats/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Formats")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 mb-100`, "href": `/ink/ui/formats/index.html` }, [
                        import_Document.default.createText(`
      `, false),
                        ...this._toNodeList(_("Formats")),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
`, false)
                  ])
                ]
              ]),
              import_Document.default.createText(`
      `, false),
              import_Document.default.createElement("main", {}, [
                import_Document.default.createText(`
        `, false),
                import_Document.default.createElement("api-docs", {}, [
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Components")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("section", { "class": `flex flex-wrap gap-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-alert", { "success": true }, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("element-icon", { "name": `check-circle` }),
                          import_Document.default.createText(`
                  Good News!
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/alert.html` }, [
                        import_Document.default.createText(`
                Alerts
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-badge", { "warning": true, "curved": true, "class": `mb-10` }, [
                          import_Document.default.createText(`999`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/badge.html` }, [
                        import_Document.default.createText(`
                Badges
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-crumbs", { "crumbs": crumbs, "block": true, "bold": true, "white": true, "underline": true, "icon-muted": true, "link-primary": true, "spacing": 2 }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/crumbs.html` }, [
                        import_Document.default.createText(`
                Crumbs
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `info-circle`, "class": `tx-info` }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `exclamation-triangle`, "class": `tx-warning` }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `times-circle`, "class": `tx-error` }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `check-circle`, "class": `tx-success` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/icon.html` }, [
                        import_Document.default.createText(`
                Icons
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-loader", { "success": true, "size": 5, "thickness": 5, "dotted": true }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-loader", { "info": true, "slice": 2 }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-loader", { "warning": true, "dashed": true }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-loader", { "error": true, "dashed": true, "thickness": 10, "size": 10, "speed": 1500 }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/loader.html` }, [
                        import_Document.default.createText(`
                Loaders
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-alert", { "error": true }, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("element-icon", { "name": `times-circle` }),
                          import_Document.default.createText(`
                  Errors on Submit
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/notify.html` }, [
                        import_Document.default.createText(`
                Notify
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-pager", { "total": 500, "range": 100, "start": 90, "show": 3, "next": true, "prev": true, "rewind": true, "forward": true, "white": true, "bold": true, "underline": true, "bg-info": true, "border-theme": `bd-2`, "square": 40, "select": console.log }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/pager.html` }, [
                        import_Document.default.createText(`
                Pager
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("div", { "class": `relative w-full h-full` }, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("header", { "class": `absolute top-0 left-20p right-0 h-50p b-solid b-t-1` }, [
                            import_Document.default.createElement("div", { "class": `p-5` }, [
                              import_Document.default.createText(`Head`, false)
                            ])
                          ]),
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("aside", { "class": `absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1` }, [
                            import_Document.default.createElement("div", { "class": `p-5` }, [
                              import_Document.default.createText(`Left`, false)
                            ])
                          ]),
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("aside", { "class": `absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1` }, [
                            import_Document.default.createElement("div", { "class": `p-5` }, [
                              import_Document.default.createText(`Right`, false)
                            ])
                          ]),
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("main", { "class": `absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1` }, [
                            import_Document.default.createElement("div", { "class": `p-5` }, [
                              import_Document.default.createText(`Main`, false)
                            ])
                          ]),
                          import_Document.default.createText(`
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/panel.html` }, [
                        import_Document.default.createText(`
                Panels
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-progress", { "width": 50, "info": true, "class": `bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/progress.html` }, [
                        import_Document.default.createText(`
                Progress Bars
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-muted`, "group": `http`, "selector": `#http-index-ts` }, [
                          import_Document.default.createText(`
                  Tab 1
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-muted`, "group": `http`, "selector": `#http-page-ink` }, [
                          import_Document.default.createText(`
                  Tab 2
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-muted`, "group": `http`, "selector": `#http-package-json` }, [
                          import_Document.default.createText(`
                  Tab 3
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/tab.html` }, [
                        import_Document.default.createText(`
                Tabs
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-layout", { "class": `h-90 w-250`, "top": true, "left": true, "head": `py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0`, "body": `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, "odd": `bg-t-1`, "even": `bg-t-0` }, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("table-row", { "col": `b-t-3 bg-t-3` }, [
                            import_Document.default.createText(`
                    `, false),
                            import_Document.default.createElement("table-col", { "nowrap": true }, [
                              import_Document.default.createText(`John Doe`, false)
                            ]),
                            import_Document.default.createText(`
                    `, false),
                            import_Document.default.createElement("table-col", {}, [
                              import_Document.default.createText(`21`, false)
                            ]),
                            import_Document.default.createText(`
                    `, false),
                            import_Document.default.createElement("table-col", { "wrap-5": true }, [
                              import_Document.default.createText(`
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit. Duis laoreet lectus eget enim rhoncus, vel 
                      volutpat eros tincidunt. In molestie nunc ut pulvinar 
                      sollicitudin.
                    `, false)
                            ]),
                            import_Document.default.createText(`
                    `, false),
                            import_Document.default.createElement("table-col", { "nowrap": true }, [
                              import_Document.default.createText(`
                      `, false),
                              import_Document.default.createElement("element-icon", { "name": `eye`, "class": `mr-5 tx-info` }),
                              import_Document.default.createText(`
                      `, false),
                              import_Document.default.createElement("element-icon", { "name": `edit`, "class": `mr-5 tx-warning` }),
                              import_Document.default.createText(`
                      `, false),
                              import_Document.default.createElement("element-icon", { "name": `trash`, "class": `tx-error` }),
                              import_Document.default.createText(`
                    `, false)
                            ]),
                            import_Document.default.createText(`
                  `, false)
                          ]),
                          import_Document.default.createText(`
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/table.html` }, [
                        import_Document.default.createText(`
                Tables
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                      import_Document.default.createText(`
             
              `, false),
                      import_Document.default.createElement("div", { "class": `bg-t-3 h-120 flex flex-center` }, [
                        import_Document.default.createText(`
               `, false),
                        import_Document.default.createElement("div", { "class": `tx-center` }, [
                          import_Document.default.createText(` Hover me! `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tip", { "background-info": true, "curved": true, "top": `-15`, "left": `50`, "padding": `5` }, [
                          import_Document.default.createText(`This is the first and last name`, false)
                        ]),
                        import_Document.default.createText(`
                
              `, false)
                      ]),
                      import_Document.default.createText(`
                
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/components/tooltip.html` }, [
                        import_Document.default.createText(`
                Tooltips
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
        `, false)
                ]),
                import_Document.default.createText(`
      `, false)
              ]),
              import_Document.default.createText(`
    `, false)
            ]),
            import_Document.default.createText(`
  `, false)
          ]),
          import_Document.default.createText(`
`, false)
        ])
      ];
    }
  };
  var components = {
    "ApiDocs_0ab1bce486b32e7cdafc": Docs_0ab1bce486b32e7cdafc,
    "I18nTranslate_794a00a5e900fca28310": Translate_794a00a5e900fca28310,
    "PanelLayout_c4c96a14064fc0c4d224": Panel_c4c96a14064fc0c4d224,
    "TableLayout_02bc3cbacda5727a0af3": Table_02bc3cbacda5727a0af3,
    "TableWrapper_cb9231b6c52140a254d4": Table_cb9231b6c52140a254d4,
    "TableHead_d8755504d9458a2c21da": Head_d8755504d9458a2c21da,
    "TableFoot_43347adfd209e799017e": Foot_43347adfd209e799017e,
    "TableRow_0b3723ad0a2356b54f11": Row_0b3723ad0a2356b54f11,
    "TableCol_f45aa9d13a1588f1d9ab": Col_f45aa9d13a1588f1d9ab,
    "ElementButton_8b2d9633875784010957": Button_8b2d9633875784010957,
    "ElementControl_7df3c1a799ae50f9a174": Control_7df3c1a799ae50f9a174,
    "ElementInput_cb7a6224432a087beaf2": Input_cb7a6224432a087beaf2,
    "ElementTextarea_8a2ce892dd22c3ebd0b9": Textarea_8a2ce892dd22c3ebd0b9,
    "ElementAlert_ba827f6c1d3753161701": Alert_ba827f6c1d3753161701,
    "ElementTab_773b62de7e46341aea2d": Tab_773b62de7e46341aea2d,
    "ElementIcon_33cb84912ffcb000a388": Icon_33cb84912ffcb000a388,
    "ElementBadge_04e709456157a0a384e7": Badge_04e709456157a0a384e7,
    "ElementLoader_5cd70d17db973b221463": Loader_5cd70d17db973b221463,
    "ElementTip_d05b34b2fdaa8443ca0f": Tooltip_d05b34b2fdaa8443ca0f,
    "ElementPager_ad6fe2ba5cdf028f153c": Pager_ad6fe2ba5cdf028f153c,
    "InterfaceIcon_33cb84912ffcb000a388": Icon_33cb84912ffcb000a388,
    "ElementCrumbs_e4598fe781cc66b1ce2c": Crumbs_e4598fe781cc66b1ce2c,
    "ElementProgress_8f478149e608bd67287e": Progress_8f478149e608bd67287e,
    "ElementNotify_ed7723389528abddbe70": Notify_ed7723389528abddbe70
  };
  var elements = {
    "api-docs": Docs_0ab1bce486b32e7cdafc,
    "i18n-translate": Translate_794a00a5e900fca28310,
    "panel-layout": Panel_c4c96a14064fc0c4d224,
    "table-layout": Table_02bc3cbacda5727a0af3,
    "table-head": Head_d8755504d9458a2c21da,
    "table-foot": Foot_43347adfd209e799017e,
    "table-row": Row_0b3723ad0a2356b54f11,
    "table-col": Col_f45aa9d13a1588f1d9ab,
    "element-button": Button_8b2d9633875784010957,
    "element-control": Control_7df3c1a799ae50f9a174,
    "element-input": Input_cb7a6224432a087beaf2,
    "element-textarea": Textarea_8a2ce892dd22c3ebd0b9,
    "element-alert": Alert_ba827f6c1d3753161701,
    "element-tab": Tab_773b62de7e46341aea2d,
    "element-icon": Icon_33cb84912ffcb000a388,
    "element-badge": Badge_04e709456157a0a384e7,
    "element-loader": Loader_5cd70d17db973b221463,
    "element-tip": Tooltip_d05b34b2fdaa8443ca0f,
    "element-pager": Pager_ad6fe2ba5cdf028f153c,
    "element-crumbs": Crumbs_e4598fe781cc66b1ce2c,
    "element-progress": Progress_8f478149e608bd67287e,
    "element-notify": Notify_ed7723389528abddbe70
  };
  var BUILD_ID = "a03a5047a431cfb03202";
  import_Emitter.default.once("ready", () => {
    TemplateDocument.sync();
    for (const [tagname, definition] of Object.entries(elements)) {
      if (!customElements.getName(definition)) {
        customElements.define(tagname, definition);
      }
    }
    import_Emitter.default.emit("mounted", document.body);
  });
  return __toCommonJS(ui_exports);
})();
