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
        constructor(name, attributes = {}, children4 = []) {
          super();
          this.type = 1;
          this._parent = null;
          this.name = name;
          this._attributes = new Map(Object.entries(attributes));
          this.children = new Set(children4.filter(Boolean));
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
          const children4 = Array.from(this.children.values()).map((child) => child.toString()).join("");
          return `<${this.name}${attributes}>${children4}</${this.name}>`;
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
        static createElement(name, attributes = {}, children4 = [], parent) {
          const element = new Element_1.default(name, attributes, children4);
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
            const { name, attributes, children: children4 } = node;
            switch (node.type) {
              case 1:
                const element = this.createElement(name, attributes, [], parent);
                _Document.import(children4, element).forEach((child) => element.appendChild(child));
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
        static load(children4) {
          return new _Document(children4);
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
        constructor(children4) {
          this.children = new Set(children4.filter(Boolean));
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
      var ClientRegistry18 = class _ClientRegistry {
        static get elements() {
          return this._elements;
        }
        static createComponent(tagname, definition, attributes = {}, children4 = []) {
          var _a;
          const { registered } = definition;
          if (!registered && !((_a = (0, client_1.default)()) === null || _a === void 0 ? void 0 : _a.elements[tagname])) {
            return this.createVirtualComponent(tagname, definition, attributes, children4);
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
          this._cleanChildren(children4).forEach((child) => component.appendChild(child));
          return element;
        }
        static createElement(name, attributes = {}, children4 = []) {
          const element = document.createElement(name);
          for (const [name2, value] of Object.entries(attributes)) {
            if (typeof value === "string") {
              element.setAttribute(name2, value);
            } else if (value === true) {
              element.setAttribute(name2, "");
            }
          }
          this._cleanChildren(children4).forEach((child) => element.appendChild(child));
          return this.register(element, attributes);
        }
        static createText(value, escape = true) {
          return document.createTextNode(decode(value));
        }
        static createVirtualComponent(tagname, definition, attributes = {}, children4 = []) {
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
          component.register(attributes, children4);
          return component.element;
        }
        static cloneElement(node, andChildren = false) {
          var _a;
          const component = node;
          if (component.definition) {
            const children4 = component.originalChildren || [];
            return this.createComponent(component.nodeName.toLowerCase(), component.definition, component.props || {}, andChildren ? children4.map((element) => this.cloneElement(element, andChildren)) : []).element;
          } else if (node instanceof HTMLElement) {
            const children4 = Array.from(node.childNodes);
            return this.createElement(node.nodeName.toLowerCase(), this.has(node) ? (_a = this.get(node)) === null || _a === void 0 ? void 0 : _a.attributes : Object.fromEntries(Array.from(node.attributes).map((attribute) => [attribute.name, attribute.value])), andChildren ? children4.map((element) => this.cloneElement(element, andChildren)) : []).element;
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
        static _cleanChildren(children4) {
          return Array.from(children4).filter((child) => typeof child !== "undefined").map((child) => typeof child === "string" ? this.createText(child) : child instanceof Element_1.default ? child.element : child);
        }
      };
      ClientRegistry18._elements = /* @__PURE__ */ new Map();
      exports.default = ClientRegistry18;
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
      var ClientComponent17 = class _ClientComponent extends HTMLElement {
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
        set props(props3) {
          this.setAttributes(props3);
        }
        set definition(definition) {
          this._definition = definition;
        }
        set originalChildren(children4) {
          if (typeof this._children === "undefined") {
            this._children = this._cleanChildren(children4 || []);
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
        createComponent(tagname, definition, attributes = {}, children4 = []) {
          return Registry_1.default.createComponent(tagname, definition, attributes, children4);
        }
        createElement(name, attributes = {}, children4 = []) {
          return Registry_1.default.createElement(name, attributes, children4);
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
        register(attributes = {}, children4 = []) {
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
          this._children = this._cleanChildren(children4);
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
          const children4 = this._template().filter(Boolean);
          const styles = this.styles();
          const mode = styles.length === 0 ? "light" : "shadow";
          const { light, shadow } = this._getChildren(children4, mode);
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
        _cleanChildren(children4) {
          return Array.from(children4).filter((child) => typeof child !== "undefined").map((child) => typeof child === "string" ? Registry_1.default.createText(child) : child instanceof Element_1.default ? child.element : child);
        }
        _getChildren(children4, mode) {
          const anyNodes = this._getTemplateNodes(children4);
          const lightNodes = this._getTemplateNodes(children4, "light");
          const shadowNodes = this._getTemplateNodes(children4, "shadow");
          const defaultNodes = anyNodes.length > 0 ? anyNodes : children4;
          return {
            light: lightNodes.length > 0 ? lightNodes : mode === "light" ? defaultNodes : [],
            shadow: shadowNodes.length > 0 ? shadowNodes : mode === "shadow" ? defaultNodes : []
          };
        }
        _getTemplateNodes(children4, type) {
          const template = children4.find((child) => this._isTemplate(child, type));
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
      exports.default = ClientComponent17;
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
      exports.default = props3;
      var component_1 = __importDefault(require_component());
      var data_1 = __importDefault(require_data());
      function props3(pointer = null) {
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
      exports.default = children4;
      var component_1 = __importDefault(require_component());
      function innerHTML(pointer = null) {
        const inner = children4(pointer);
        const wrapper = document.createElement("template");
        wrapper.append(...inner.map((child) => child.cloneNode(true)));
        return wrapper.innerHTML;
      }
      function innerText(pointer = null) {
        const inner = children4(pointer);
        const wrapper = document.createElement("template");
        wrapper.append(...inner.map((child) => child.cloneNode(true)));
        return wrapper.innerText;
      }
      function children4(pointer = null) {
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
        return new StyleSet12(Object.entries(styles));
      }
      var StyleSet12 = class extends Map {
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
      exports.default = StyleSet12;
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

  // ../../node_modules/prismjs/prism.js
  var require_prism = __commonJS({
    "../../node_modules/prismjs/prism.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _2 = {
          /**
           * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
           * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
           * additional languages or plugins yourself.
           *
           * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
           *
           * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.manual = true;
           * // add a new <script> to load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          manual: _self2.Prism && _self2.Prism.manual,
          /**
           * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
           * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
           * own worker, you don't want it to do this.
           *
           * By setting this value to `true`, Prism will not add its own listeners to the worker.
           *
           * You obviously have to change this value before Prism executes. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.disableWorkerMessageHandler = true;
           * // Load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          /**
           * A namespace for utility methods.
           *
           * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
           * change or disappear at any time.
           *
           * @namespace
           * @memberof Prism
           */
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            /**
             * Returns the name of the type of the given value.
             *
             * @param {any} o
             * @returns {string}
             * @example
             * type(null)      === 'Null'
             * type(undefined) === 'Undefined'
             * type(123)       === 'Number'
             * type('foo')     === 'String'
             * type(true)      === 'Boolean'
             * type([1, 2])    === 'Array'
             * type({})        === 'Object'
             * type(String)    === 'Function'
             * type(/abc+/)    === 'RegExp'
             */
            type: function(o) {
              return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
             * Returns a unique number for the given object. Later calls will still return the same number.
             *
             * @param {Object} obj
             * @returns {number}
             */
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            /**
             * Creates a deep clone of the given object.
             *
             * The main intended use of this function is to clone language definitions.
             *
             * @param {T} o
             * @param {Record<number, any>} [visited]
             * @returns {T}
             * @template T
             */
            clone: function deepClone(o, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_2.util.type(o)) {
                case "Object":
                  id = _2.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = /** @type {Record<string, any>} */
                  {};
                  visited[id] = clone;
                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone[key] = deepClone(o[key], visited);
                    }
                  }
                  return (
                    /** @type {any} */
                    clone
                  );
                case "Array":
                  id = _2.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  /** @type {Array} */
                  /** @type {any} */
                  o.forEach(function(v, i) {
                    clone[i] = deepClone(v, visited);
                  });
                  return (
                    /** @type {any} */
                    clone
                  );
                default:
                  return o;
              }
            },
            /**
             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
             *
             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
             *
             * @param {Element} element
             * @returns {string}
             */
            getLanguage: function(element) {
              while (element) {
                var m = lang.exec(element.className);
                if (m) {
                  return m[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return "none";
            },
            /**
             * Sets the Prism `language-xxxx` class of the given element.
             *
             * @param {Element} element
             * @param {string} language
             * @returns {void}
             */
            setLanguage: function(element, language) {
              element.className = element.className.replace(RegExp(lang, "gi"), "");
              element.classList.add("language-" + language);
            },
            /**
             * Returns the script element that is currently executing.
             *
             * This does __not__ work for line script element.
             *
             * @returns {HTMLScriptElement | null}
             */
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if ("currentScript" in document && 1 < 2) {
                return (
                  /** @type {any} */
                  document.currentScript
                );
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i in scripts) {
                    if (scripts[i].src == src) {
                      return scripts[i];
                    }
                  }
                }
                return null;
              }
            },
            /**
             * Returns whether a given class is active for `element`.
             *
             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
             * given class is just the given class with a `no-` prefix.
             *
             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
             * ancestors have the given class or the negated version of it, then the default activation will be returned.
             *
             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
             * version of it, the class is considered active.
             *
             * @param {Element} element
             * @param {string} className
             * @param {boolean} [defaultActivation=false]
             * @returns {boolean}
             */
            isActive: function(element, className, defaultActivation) {
              var no = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          /**
           * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
           *
           * @namespace
           * @memberof Prism
           * @public
           */
          languages: {
            /**
             * The grammar for plain, unformatted text.
             */
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
             * Creates a deep copy of the language with the given id and appends the given tokens.
             *
             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
             * will be overwritten at its original position.
             *
             * ## Best practices
             *
             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
             *
             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
             *
             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
             * @param {Grammar} redef The new tokens to append.
             * @returns {Grammar} The new language created.
             * @public
             * @example
             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
             *     // at its original position
             *     'comment': { ... },
             *     // CSS doesn't have a 'color' token, so this token will be appended
             *     'color': /\b(?:red|green|blue)\b/
             * });
             */
            extend: function(id, redef) {
              var lang2 = _2.util.clone(_2.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            /**
             * Inserts tokens _before_ another token in a language definition or any other grammar.
             *
             * ## Usage
             *
             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
             * this:
             *
             * ```js
             * Prism.languages.markup.style = {
             *     // token
             * };
             * ```
             *
             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
             * before existing tokens. For the CSS example above, you would use it like this:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'cdata', {
             *     'style': {
             *         // token
             *     }
             * });
             * ```
             *
             * ## Special cases
             *
             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
             * will be ignored.
             *
             * This behavior can be used to insert tokens after `before`:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'comment', {
             *     'comment': Prism.languages.markup.comment,
             *     // tokens after 'comment'
             * });
             * ```
             *
             * ## Limitations
             *
             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
             * deleting properties which is necessary to insert at arbitrary positions.
             *
             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
             * Instead, it will create a new object and replace all references to the target object with the new one. This
             * can be done without temporarily deleting properties, so the iteration order is well-defined.
             *
             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
             * you hold the target object in a variable, then the value of the variable will not change.
             *
             * ```js
             * var oldMarkup = Prism.languages.markup;
             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
             *
             * assert(oldMarkup !== Prism.languages.markup);
             * assert(newMarkup === Prism.languages.markup);
             * ```
             *
             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
             * object to be modified.
             * @param {string} before The key to insert before.
             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
             * object to be modified.
             *
             * Defaults to `Prism.languages`.
             * @returns {Grammar} The new grammar object.
             * @public
             */
            insertBefore: function(inside, before, insert, root) {
              root = root || /** @type {any} */
              _2.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _2.languages.DFS(_2.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
              visited = visited || {};
              var objId = _2.util.objId;
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);
                  var property = o[i];
                  var propertyType = _2.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          /**
           * This is the most high-level function in Prism’s API.
           * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
           * each one of them.
           *
           * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
           *
           * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
           * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
           * @memberof Prism
           * @public
           */
          highlightAll: function(async, callback) {
            _2.highlightAllUnder(document, async, callback);
          },
          /**
           * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
           * {@link Prism.highlightElement} on each one of them.
           *
           * The following hooks will be run:
           * 1. `before-highlightall`
           * 2. `before-all-elements-highlight`
           * 3. All hooks of {@link Prism.highlightElement} for each element.
           *
           * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
           * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
           * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
           * @memberof Prism
           * @public
           */
          highlightAllUnder: function(container, async, callback) {
            var env2 = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _2.hooks.run("before-highlightall", env2);
            env2.elements = Array.prototype.slice.apply(env2.container.querySelectorAll(env2.selector));
            _2.hooks.run("before-all-elements-highlight", env2);
            for (var i = 0, element; element = env2.elements[i++]; ) {
              _2.highlightElement(element, async === true, env2.callback);
            }
          },
          /**
           * Highlights the code inside a single element.
           *
           * The following hooks will be run:
           * 1. `before-sanity-check`
           * 2. `before-highlight`
           * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
           * 4. `before-insert`
           * 5. `after-highlight`
           * 6. `complete`
           *
           * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
           * the element's language.
           *
           * @param {Element} element The element containing the code.
           * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
           * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
           * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
           * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
           *
           * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
           * asynchronous highlighting to work. You can build your own bundle on the
           * [Download page](https://prismjs.com/download.html).
           * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
           * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
           * @memberof Prism
           * @public
           */
          highlightElement: function(element, async, callback) {
            var language = _2.util.getLanguage(element);
            var grammar = _2.languages[language];
            _2.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _2.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env2 = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env2.highlightedCode = highlightedCode;
              _2.hooks.run("before-insert", env2);
              env2.element.innerHTML = env2.highlightedCode;
              _2.hooks.run("after-highlight", env2);
              _2.hooks.run("complete", env2);
              callback && callback.call(env2.element);
            }
            _2.hooks.run("before-sanity-check", env2);
            parent = env2.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env2.code) {
              _2.hooks.run("complete", env2);
              callback && callback.call(env2.element);
              return;
            }
            _2.hooks.run("before-highlight", env2);
            if (!env2.grammar) {
              insertHighlightedCode(_2.util.encode(env2.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_2.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env2.language,
                code: env2.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_2.highlight(env2.code, env2.grammar, env2.language));
            }
          },
          /**
           * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
           * and the language definitions to use, and returns a string with the HTML produced.
           *
           * The following hooks will be run:
           * 1. `before-tokenize`
           * 2. `after-tokenize`
           * 3. `wrap`: On each {@link Token}.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @param {string} language The name of the language definition passed to `grammar`.
           * @returns {string} The highlighted HTML.
           * @memberof Prism
           * @public
           * @example
           * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
           */
          highlight: function(text, grammar, language) {
            var env2 = {
              code: text,
              grammar,
              language
            };
            _2.hooks.run("before-tokenize", env2);
            if (!env2.grammar) {
              throw new Error('The language "' + env2.language + '" has no grammar.');
            }
            env2.tokens = _2.tokenize(env2.code, env2.grammar);
            _2.hooks.run("after-tokenize", env2);
            return Token.stringify(_2.util.encode(env2.tokens), env2.language);
          },
          /**
           * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
           * and the language definitions to use, and returns an array with the tokenized code.
           *
           * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
           *
           * This method could be useful in other contexts as well, as a very crude parser.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @returns {TokenStream} An array of strings and tokens, a token stream.
           * @memberof Prism
           * @public
           * @example
           * let code = `var foo = 0;`;
           * let tokens = Prism.tokenize(code, Prism.languages.javascript);
           * tokens.forEach(token => {
           *     if (token instanceof Prism.Token && token.type === 'number') {
           *         console.log(`Found numeric literal: ${token.content}`);
           *     }
           * });
           */
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          /**
           * @namespace
           * @memberof Prism
           * @public
           */
          hooks: {
            all: {},
            /**
             * Adds the given callback to the list of callbacks for the given hook.
             *
             * The callback will be invoked when the hook it is registered for is run.
             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
             *
             * One callback function can be registered to multiple hooks and the same hook multiple times.
             *
             * @param {string} name The name of the hook.
             * @param {HookCallback} callback The callback function which is given environment variables.
             * @public
             */
            add: function(name, callback) {
              var hooks = _2.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            /**
             * Runs a hook invoking all registered callbacks with the given environment variables.
             *
             * Callbacks will be invoked synchronously and in the order in which they were registered.
             *
             * @param {string} name The name of the hook.
             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
             * @public
             */
            run: function(name, env2) {
              var callbacks = _2.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i = 0, callback; callback = callbacks[i++]; ) {
                callback(env2);
              }
            }
          },
          Token
        };
        _self2.Prism = _2;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o, language) {
          if (typeof o == "string") {
            return o;
          }
          if (Array.isArray(o)) {
            var s = "";
            o.forEach(function(e) {
              s += stringify(e, language);
            });
            return s;
          }
          var env2 = {
            type: o.type,
            content: stringify(o.content, language),
            tag: "span",
            classes: ["token", o.type],
            attributes: {},
            language
          };
          var aliases = o.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env2.classes, aliases);
            } else {
              env2.classes.push(aliases);
            }
          }
          _2.hooks.run("wrap", env2);
          var attributes = "";
          for (var name in env2.attributes) {
            attributes += " " + name + '="' + (env2.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env2.tag + ' class="' + env2.classes.join(" ") + '"' + attributes + ">" + env2.content + "</" + env2.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j = 0; j < patterns.length; ++j) {
              if (rematch && rematch.cause == token + "," + j) {
                return;
              }
              var patternObj = patterns[j];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match || match.index >= text.length) {
                    break;
                  }
                  var from = match.index;
                  var to = match.index + match[0].length;
                  var p = pos;
                  p += currentNode.value.length;
                  while (from >= p) {
                    currentNode = currentNode.next;
                    p += currentNode.value.length;
                  }
                  p -= currentNode.value.length;
                  pos = p;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                    removeCount++;
                    p += k.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _2.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _2;
          }
          if (!_2.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_2.highlight(code, _2.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _2;
        }
        var script = _2.util.currentScript();
        if (script) {
          _2.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _2.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_2.manual) {
            _2.highlightAll();
          }
        }
        if (!_2.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _2;
      }(_self);
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Prism2;
      }
      if (typeof global !== "undefined") {
        global.Prism = Prism2;
      }
      Prism2.languages.markup = {
        "comment": {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        "prolog": {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        "doctype": {
          // https://www.w3.org/TR/xml/#NT-doctypedecl
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
              // see below
            },
            "string": {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
          }
        },
        "cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        "tag": {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            "tag": {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                "punctuation": /^<\/?/,
                "namespace": /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ]
              }
            },
            "punctuation": /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                "namespace": /^[^\s>\/:]+:/
              }
            }
          }
        },
        "entity": [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
      Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
      Prism2.hooks.add("wrap", function(env2) {
        if (env2.type === "entity") {
          env2.attributes["title"] = env2.content.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism2.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism2.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
        /**
         * Adds an pattern to highlight languages embedded in HTML attributes.
         *
         * An example of an inlined language is CSS with `style` attributes.
         *
         * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addAttribute('style', 'css');
         */
        value: function(attrName, lang) {
          Prism2.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(
              /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
              "i"
            ),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  "value": {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism2.languages[lang]
                  },
                  "punctuation": [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism2.languages.html = Prism2.languages.markup;
      Prism2.languages.mathml = Prism2.languages.markup;
      Prism2.languages.svg = Prism2.languages.markup;
      Prism2.languages.xml = Prism2.languages.extend("markup", {});
      Prism2.languages.ssml = Prism2.languages.xml;
      Prism2.languages.atom = Prism2.languages.xml;
      Prism2.languages.rss = Prism2.languages.xml;
      (function(Prism3) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism3.languages.css = {
          "comment": /\/\*[\s\S]*?\*\//,
          "atrule": {
            pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
            inside: {
              "rule": /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              "keyword": {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
              // See rest below
            }
          },
          "url": {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
              "function": /^url/i,
              "punctuation": /^\(|\)$/,
              "string": {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          "selector": {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
          },
          "string": {
            pattern: string,
            greedy: true
          },
          "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          "important": /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          "punctuation": /[(){};:,]/
        };
        Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
        var markup = Prism3.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism2);
      Prism2.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        "boolean": /\b(?:false|true)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.javascript = Prism2.languages.extend("clike", {
        "class-name": [
          Prism2.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": {
          pattern: RegExp(
            /(^|[^\w$])/.source + "(?:" + // constant
            (/NaN|Infinity/.source + "|" + // binary integer
            /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
            /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
          ),
          lookbehind: true
        },
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism2.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: RegExp(
            // lookbehind
            // eslint-disable-next-line regexp/no-dupe-characters-character-class
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
            // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
            // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
            // with the only syntax, so we have to define 2 different regex patterns.
            /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism2.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism2.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        },
        "string-property": {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        }
      });
      Prism2.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: "property"
        }
      });
      if (Prism2.languages.markup) {
        Prism2.languages.markup.tag.addInlined("script", "javascript");
        Prism2.languages.markup.tag.addAttribute(
          /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
          "javascript"
        );
      }
      Prism2.languages.js = Prism2.languages.javascript;
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = "Loading\u2026";
        var FAILURE_MESSAGE = function(status, message) {
          return "\u2716 Error " + status + " while fetching file: " + message;
        };
        var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
        var EXTENSIONS = {
          "js": "javascript",
          "py": "python",
          "rb": "ruby",
          "ps1": "powershell",
          "psm1": "powershell",
          "sh": "bash",
          "bat": "batch",
          "h": "c",
          "tex": "latex"
        };
        var STATUS_ATTR = "data-src-status";
        var STATUS_LOADING = "loading";
        var STATUS_LOADED = "loaded";
        var STATUS_FAILED = "failed";
        var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
        function loadFile(src, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", src, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                success(xhr.responseText);
              } else {
                if (xhr.status >= 400) {
                  error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                } else {
                  error(FAILURE_EMPTY_MESSAGE);
                }
              }
            }
          };
          xhr.send(null);
        }
        function parseRange(range) {
          var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
          if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];
            if (!comma) {
              return [start, start];
            }
            if (!end) {
              return [start, void 0];
            }
            return [start, Number(end)];
          }
          return void 0;
        }
        Prism2.hooks.add("before-highlightall", function(env2) {
          env2.selector += ", " + SELECTOR;
        });
        Prism2.hooks.add("before-sanity-check", function(env2) {
          var pre = (
            /** @type {HTMLPreElement} */
            env2.element
          );
          if (pre.matches(SELECTOR)) {
            env2.code = "";
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
            var code = pre.appendChild(document.createElement("CODE"));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute("data-src");
            var language = env2.language;
            if (language === "none") {
              var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
              language = EXTENSIONS[extension] || extension;
            }
            Prism2.util.setLanguage(code, language);
            Prism2.util.setLanguage(pre, language);
            var autoloader = Prism2.plugins.autoloader;
            if (autoloader) {
              autoloader.loadLanguages(language);
            }
            loadFile(
              src,
              function(text) {
                pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                var range = parseRange(pre.getAttribute("data-range"));
                if (range) {
                  var lines = text.split(/\r\n?|\n/g);
                  var start = range[0];
                  var end = range[1] == null ? lines.length : range[1];
                  if (start < 0) {
                    start += lines.length;
                  }
                  start = Math.max(0, Math.min(start - 1, lines.length));
                  if (end < 0) {
                    end += lines.length;
                  }
                  end = Math.max(0, Math.min(end, lines.length));
                  text = lines.slice(start, end).join("\n");
                  if (!pre.hasAttribute("data-start")) {
                    pre.setAttribute("data-start", String(start + 1));
                  }
                }
                code.textContent = text;
                Prism2.highlightElement(code);
              },
              function(error) {
                pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                code.textContent = error;
              }
            );
          }
        });
        Prism2.plugins.fileHighlight = {
          /**
           * Executes the File Highlight plugin for all matching `pre` elements under the given container.
           *
           * Note: Elements which are already loaded or currently loading will not be touched by this method.
           *
           * @param {ParentNode} [container=document]
           */
          highlight: function highlight(container) {
            var elements2 = (container || document).querySelectorAll(SELECTOR);
            for (var i = 0, element; element = elements2[i++]; ) {
              Prism2.highlightElement(element);
            }
          }
        };
        var logged = false;
        Prism2.fileHighlight = function() {
          if (!logged) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            logged = true;
          }
          Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      })();
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/color.js
  var require_color = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/color.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = color;
      function color(props3, styles, initial = false, selector = ":host", property = "color") {
        const { color: color2, white, black, info, warning, success, error, muted, primary, secondary, theme } = props3;
        const style = color2 ? color2 : theme ? `var(--${theme})` : white ? "var(--white)" : black ? "var(--black)" : info ? "var(--info)" : warning ? "var(--warning)" : success ? "var(--success)" : error ? "var(--error)" : muted ? "var(--muted)" : primary ? "var(--primary)" : secondary ? "var(--secondary)" : initial;
        if (style) {
          styles.add(selector, property, style);
        }
        return color2 ? "color" : white ? "white" : black ? "black" : info ? "info" : warning ? "warning" : success ? "success" : error ? "error" : muted ? "muted" : primary ? "primary" : secondary ? "secondary" : "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/display.js
  var require_display = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/display.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = display;
      function display(props3, styles, initial = false, selector = ":host") {
        const { flex, none, inline, block, "inline-block": iblock, "inline-flex": iflex } = props3;
        const style = flex ? "flex" : none ? "none" : block ? "block" : inline ? "inline" : iflex ? "inline-flex" : iblock ? "inline-block" : initial;
        if (style) {
          styles.add(selector, "display", style);
        }
        return style || "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/size.js
  var require_size = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/size.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = size;
      function size(props3, styles, initial = false, selector = ":host", property = "font-size") {
        const { size: size2, xs, sm, md, lg, xl, xl2, xl3, xl4, xl5 } = props3;
        const style = size2 ? `${size2}px` : xs ? "8px" : sm ? "12px" : md ? "16px" : lg ? "20px" : xl ? "24px" : xl2 ? "28px" : xl3 ? "32px" : xl4 ? "36px" : xl5 ? "40px" : initial;
        if (style) {
          styles.add(selector, property, style);
        }
        return size2 ? "size" : xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : xl2 ? "xl2" : xl3 ? "xl3" : xl4 ? "xl4" : xl5 ? "xl5" : "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/bold.js
  var require_bold = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/bold.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = bold;
      function bold(props3, styles, selector = ":host") {
        const { bold: bold2 } = props3;
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
      function underline(props3, styles, selector = ":host") {
        const { underline: underline2 } = props3;
        if (underline2) {
          styles.add(selector, "text-decoration", "underline");
        } else {
          styles.add(selector, "text-decoration", "none");
        }
        return underline2;
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/curve.js
  var require_curve = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/curve.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = curve;
      function curve(props3, styles, initial = false, selector = ":host") {
        const { curve: curve2, curved, rounded, pill } = props3;
        const style = curve2 ? `${curve2}px` : curved ? "4px" : rounded ? "12px" : pill ? "10000px" : initial;
        if (style) {
          styles.add(selector, "border-radius", style);
          styles.add(selector, "overflow", "hidden");
        }
        return curve2 ? "curve" : curved ? "curved" : rounded ? "rounded" : pill ? "pill" : "initial";
      }
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/padding.js
  var require_padding = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/padding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = padding;
      function padding(props3, styles, selector = ":host") {
        const { padding: padding2, "padding-x": paddingX, "padding-y": paddingY } = props3;
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

  // ../../node_modules/@stackpress/ink-ui/utilities/fieldset.js
  var require_fieldset = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/fieldset.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.buttonStyles = buttonStyles2;
      exports.borderStyles = borderStyles;
      exports.cloneElement = cloneElement;
      exports.getHandlers = getHandlers;
      var Registry_1 = __importDefault(require_Registry());
      var color_1 = __importDefault(require_color());
      var curve_1 = __importDefault(require_curve());
      var padding_1 = __importDefault(require_padding());
      function buttonStyles2(props3, styles) {
        const { size, xs, sm, md, lg, xl, xl2, xl3, xl4, xl5, outline, solid, transparent, full } = props3;
        const pad = (0, padding_1.default)(props3, styles, "button");
        if (!pad) {
          xs ? styles.add("button", "padding", "2px 4px") : sm ? styles.add("button", "padding", "5px 10px") : md ? styles.add("button", "padding", "8px 16px") : lg ? styles.add("button", "padding", "12px 24px") : xl ? styles.add("button", "padding", "15px 30px") : xl2 ? styles.add("button", "padding", "18px 36px") : xl3 ? styles.add("button", "padding", "22px 44px") : xl4 ? styles.add("button", "padding", "26px 52px") : xl5 ? styles.add("button", "padding", "30px 60px") : size ? styles.add("button", "padding", size) : styles.add("button", "padding", "5px 10px");
        }
        (0, curve_1.default)(props3, styles, false, "button");
        if (full) {
          styles.add("button", "width", "100%");
        }
        if (outline || transparent) {
          (0, color_1.default)(props3, styles, "var(--muted)", "button", "color");
          (0, color_1.default)(props3, styles, "var(--muted)", "button", "border-color");
          styles.add("button", "border-style", "solid");
          styles.add("button", "border-width", "1px");
          if (outline) {
            styles.add("button", "background-color", "var(--white)");
          }
        } else if (solid) {
          styles.add("button", "border", "0");
          styles.add("button", "color", "var(--white)");
          (0, color_1.default)(props3, styles, "var(--muted)", "button", "background-color");
        } else {
          styles.add("button", "border", "0");
          styles.add("button", "color", "var(--white)");
          (0, color_1.default)(props3, styles, "var(--muted)", "button", "background-color");
        }
      }
      function borderStyles(props3, styles) {
        const { border = {} } = props3;
        const color = (0, color_1.default)(border, styles, "transparent", "fieldset", "border-color");
        if (color === "initial") {
          styles.add("fieldset", "border", "0");
          styles.add("fieldset", "padding", "0");
          styles.add("fieldset", "margin", "0");
        } else {
          styles.add("fieldset", "border-style", "solid");
          styles.add("fieldset", "border-width", "1px");
        }
      }
      function cloneElement(node, prepare, andChildren = false) {
        const component = node;
        if (component.definition) {
          const children4 = component.originalChildren || [];
          const attributes = prepare(component);
          return Registry_1.default.createComponent(component.nodeName.toLowerCase(), component.definition, attributes || {}, andChildren ? children4.map((element) => cloneElement(element, prepare, andChildren)) : []).element;
        } else if (node instanceof HTMLElement) {
          const children4 = Array.from(node.childNodes);
          const attributes = prepare(component);
          return Registry_1.default.createElement(node.nodeName.toLowerCase(), attributes || {}, andChildren ? children4.map((element) => cloneElement(element, prepare, andChildren)) : []).element;
        }
        return node.cloneNode(andChildren);
      }
      function getHandlers(host, template) {
        const { name, legend } = host.props;
        const handlers = {
          add: (e) => {
            const shadow = host.shadowRoot;
            if (!shadow)
              return;
            const button = shadow.querySelector("button");
            if (!button)
              return;
            const { fieldset, slot } = handlers.create(host.childElementCount);
            button.before(fieldset);
            host.appendChild(slot);
          },
          create: (index, input = {}, errors = {}) => {
            input = (input === null || input === void 0 ? void 0 : input.constructor.name) === "Object" ? input : {};
            errors = (errors === null || errors === void 0 ? void 0 : errors.constructor.name) === "Object" ? errors : {};
            const fields = template.map((element) => cloneElement(element, (node) => {
              var _a;
              const component = node;
              const attributes = component.definition ? component.props || {} : node instanceof HTMLElement && Registry_1.default.has(node) ? ((_a = Registry_1.default.get(node)) === null || _a === void 0 ? void 0 : _a.attributes) || {} : node instanceof HTMLElement ? Object.fromEntries(Array.from(node.attributes).map((attribute) => [attribute.name, attribute.value])) : {};
              if (attributes.field) {
                attributes.name = `${name}[${index}][${attributes.field}]`;
                if (typeof input[attributes.field] !== "undefined") {
                  attributes.value = input[attributes.field];
                }
                if (typeof errors[attributes.field] === "string") {
                  attributes.error = errors[attributes.field];
                }
              } else if (attributes.control && typeof errors[attributes.control] === "string") {
                attributes.error = errors[attributes.control];
              }
              return attributes;
            }, true));
            const slot = Registry_1.default.createElement("div", { slot: `row-${index}` }, fields).element;
            const title = legend ? legend.replace("%s", index + 1) : void 0;
            const remove = Registry_1.default.createElement("a", {}, ["&times;"]).element;
            const label = legend ? Registry_1.default.createElement("span", {}, [title]).element : void 0;
            const fieldset = Registry_1.default.createElement("fieldset", {}, [
              Registry_1.default.createElement("legend", {}, [label, remove]).element,
              Registry_1.default.createElement("slot", { name: `row-${index}` }).element
            ]).element;
            remove.addEventListener("click", () => handlers.remove(fieldset, slot));
            return { fieldset, slot };
          },
          remove: (fieldset, slot) => {
            var _a;
            const shadow = host.shadowRoot;
            if (!shadow)
              return;
            fieldset.remove();
            slot.remove();
            shadow.querySelectorAll("fieldset slot").forEach((slot2, index) => {
              slot2.setAttribute("name", `row-${index}`);
            });
            host.querySelectorAll(":scope > div[slot]").forEach((slot2, index) => {
              slot2.setAttribute("slot", `row-${index}`);
              if (name) {
                Array.from(slot2.querySelectorAll("[name]")).forEach((element) => {
                  const key = element.getAttribute("data-key");
                  if (key) {
                    element.setAttribute("name", `${name}[${index}][${key}]`);
                  }
                });
              }
            });
            if (legend) {
              (_a = host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("fieldset legend span").forEach((span, index) => {
                span.textContent = legend.replace("%s", index + 1);
              });
            }
          },
          set: (input = {}, errors = {}) => {
            input = (input === null || input === void 0 ? void 0 : input.constructor.name) === "Object" ? input : {};
            errors = (errors === null || errors === void 0 ? void 0 : errors.constructor.name) === "Object" ? errors : {};
            const fields = template.map((element) => cloneElement(element, (node) => {
              var _a;
              const component = node;
              const attributes = component.definition ? component.props || {} : node instanceof HTMLElement && Registry_1.default.has(node) ? ((_a = Registry_1.default.get(node)) === null || _a === void 0 ? void 0 : _a.attributes) || {} : node instanceof HTMLElement ? Object.fromEntries(Array.from(node.attributes).map((attribute) => [attribute.name, attribute.value])) : {};
              if (attributes.field) {
                attributes.name = `${name}[${attributes.field}]`;
                if (typeof input[attributes.field] !== "undefined") {
                  attributes.value = input[attributes.field];
                }
                if (typeof errors[attributes.field] === "string") {
                  attributes.error = errors[attributes.field];
                }
              } else if (attributes.control && typeof errors[attributes.control] === "string") {
                attributes.error = errors[attributes.control];
              }
              return attributes;
            }, true));
            const slot = Registry_1.default.createElement("div", {}, fields).element;
            const fieldset = Registry_1.default.createElement("fieldset", {}, [
              Registry_1.default.createElement("slot").element
            ]).element;
            return { fieldset, slot };
          }
        };
        return handlers;
      }
    }
  });

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\field\metadata.ink
  var metadata_exports = {};
  __export(metadata_exports, {
    BUILD_ID: () => BUILD_ID,
    ClientRegistry: () => import_Registry17.default,
    TemplateDocument: () => TemplateDocument,
    components: () => components,
    data: () => import_data.default,
    elements: () => elements,
    emitter: () => import_Emitter.default
  });
  var import_Document = __toESM(require_Document());
  var import_Document2 = __toESM(require_Document2());
  var import_Registry17 = __toESM(require_Registry());
  var import_Emitter = __toESM(require_Emitter());
  var import_data = __toESM(require_data());

  // ink-component-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\components\api\docs.ink
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

  // ink-component-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\components\ide\app.ink
  var import_Registry2 = __toESM(require_Registry());
  var import_Component2 = __toESM(require_Component());
  var import_ink2 = __toESM(require_ink());
  var App_4ec139eab67151540039 = class extends import_Component2.default {
    static id = "4ec139eab67151540039";
    static tagname = "app";
    static classname = "App_4ec139eab67151540039";
    styles() {
      return ``;
    }
    template() {
      const { title, height } = (0, import_ink2.props)();
      const style = height ? `height:${height}px` : "";
      return () => [
        import_Registry2.default.createText(`
`, false),
        import_Registry2.default.createElement("div", { "class": `curved scroll-hidden shadow-0-0-10-0-0-0-5` }, [
          import_Registry2.default.createText(`
  `, false),
          import_Registry2.default.createElement("div", { "class": `relative flex flex-center-y gap-10 p-10 bg-t-1 tx-c-999999 tx-16` }, [
            import_Registry2.default.createText(`
    `, false),
            import_Registry2.default.createElement("span", { "class": `bg-h-999999 pill h-10 w-10` }, []).element,
            import_Registry2.default.createText(`
    `, false),
            import_Registry2.default.createElement("span", { "class": `bg-h-999999 pill h-10 w-10` }, []).element,
            import_Registry2.default.createText(`
    `, false),
            import_Registry2.default.createElement("span", { "class": `bg-h-999999 pill h-10 w-10` }, []).element,
            import_Registry2.default.createText(`
    `, false),
            import_Registry2.default.createElement("span", { "class": `flex flex-center h-full w-full absolute top-0 left-0` }, [
              import_Registry2.default.createText(`
      `, false),
              ...this._toNodeList(title),
              import_Registry2.default.createText(`
    `, false)
            ]).element,
            import_Registry2.default.createText(`
  `, false)
          ]).element,
          import_Registry2.default.createText(`
  `, false),
          import_Registry2.default.createElement("div", { "class": `bg-black tx-t-1 relative`, "style": style }, [
            ...this._toNodeList((0, import_ink2.children)())
          ]).element,
          import_Registry2.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\components\ide\code.ink
  var import_Registry3 = __toESM(require_Registry());
  var import_Component3 = __toESM(require_Component());
  var import_prismjs = __toESM(require_prism());
  var import_ink3 = __toESM(require_ink());
  var Code_5387662ecbed97347dd0 = class extends import_Component3.default {
    static id = "5387662ecbed97347dd0";
    static tagname = "code";
    static classname = "Code_5387662ecbed97347dd0";
    styles() {
      return `:host {
    display: block;
    font-size: 14px;
    line-height: 20px;
  }
  :host([inline]) {
    display: inline !important;
  }
  :host([inline]),
  :host([inline]) > pre,
  :host([inline]) > pre > code {
    display: inline !important;
  }
  .snippet {
    background-color: #000000;
    color: #ABB2BF;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }
  :host([inline]) .line-numbers {
    position: static;
    padding-left: 0;
  }

  .line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }

  :host([inline]) .line-numbers .line-numbers-rows {
    display: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
  .pad {
    padding: 5px;
  }

  .terminal {
    background-color: #000000;
    color: #EFEFEF;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    height: 100%;
    padding: 10px;
  }
  .terminal span {
    color: #00FF00;
  }`;
    }
    template() {
      const config = this.props;
      const {
        lang = "markup",
        numbers = false,
        inline = false,
        trim = false,
        ltrim = false,
        rtrim = false,
        detab = 0
      } = config;
      const childlist = (0, import_ink3.children)();
      let snippet = childlist[0]?.textContent || "";
      if (detab) {
        snippet = snippet.replace(
          new RegExp(`\\n {${detab}}`, "g"),
          "\n"
        );
      }
      if (trim) {
        snippet = snippet.trim();
      } else if (ltrim) {
        snippet = snippet.replace(/^\s+/, "");
      } else if (rtrim) {
        snippet = snippet.replace(/\s+$/, "");
      }
      const highlight = (event) => {
        if (!snippet) {
          return;
        }
        const code = import_prismjs.default.highlight(snippet, import_prismjs.default.languages[lang], lang);
        event.detail.target.innerHTML = code;
        if (numbers) {
          const match = code.match(/\n(?!$)/g);
          const total = match ? match.length + 1 : 1;
          const lines = new Array(total + 1).join("<span></span>");
          const wrapper = document.createElement("span");
          wrapper.setAttribute("aria-hidden", "true");
          wrapper.className = "line-numbers-rows";
          wrapper.innerHTML = lines;
          event.detail.target.appendChild(wrapper);
        }
      };
      return () => [
        import_Registry3.default.createElement("link", { "rel": `stylesheet`, "href": `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css` }).element,
        import_Registry3.default.createText(`
`, false),
        import_Registry3.default.createElement("link", { "rel": `stylesheet`, "href": `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css` }).element,
        import_Registry3.default.createText(`
`, false),
        ...!!(lang === "bash") ? [
          import_Registry3.default.createText(`
  `, false),
          import_Registry3.default.createElement("div", { "class": `terminal` }, [
            import_Registry3.default.createElement("span", {}, [
              import_Registry3.default.createText(`$`, false)
            ]).element,
            import_Registry3.default.createText(` `, false),
            ...this._toNodeList(childlist)
          ]).element,
          import_Registry3.default.createText(`
`, false)
        ] : !!snippet ? [
          ,
          import_Registry3.default.createText(`
  `, false),
          ...!!numbers ? [
            import_Registry3.default.createText(`
    `, false),
            import_Registry3.default.createElement("pre", { "class": `snippet line-numbers` }, [
              import_Registry3.default.createElement("code", { "mount": highlight }, []).element
            ]).element,
            import_Registry3.default.createText(`
  `, false)
          ] : true ? [
            ,
            import_Registry3.default.createText(`
    `, false),
            import_Registry3.default.createElement("pre", { "class": `snippet pad` }, [
              import_Registry3.default.createElement("code", { "mount": highlight }, []).element
            ]).element,
            import_Registry3.default.createText(`
  `, false)
          ] : [],
          import_Registry3.default.createText(`
`, false)
        ] : true ? [
          ,
          import_Registry3.default.createText(`
  `, false),
          import_Registry3.default.createElement("span", {}, [
            import_Registry3.default.createText(`????`, false)
          ]).element,
          import_Registry3.default.createText(`
`, false)
        ] : [],
        import_Registry3.default.createText(`
`, false)
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\components\i18n\translate.ink
  var import_Registry4 = __toESM(require_Registry());
  var import_Component4 = __toESM(require_Component());

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

  // ink-component-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\components\i18n\translate.ink
  var Translate_794a00a5e900fca28310 = class extends import_Component4.default {
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
        import_Registry4.default.createText(`
    `, false),
        ...!!p ? [
          import_Registry4.default.createText(`
      `, false),
          import_Registry4.default.createElement("p", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_Registry4.default.createText(`
    `, false)
        ] : !!li ? [
          ,
          import_Registry4.default.createText(`
      `, false),
          import_Registry4.default.createElement("li", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_Registry4.default.createText(`
    `, false)
        ] : !!div ? [
          ,
          import_Registry4.default.createText(`
      `, false),
          import_Registry4.default.createElement("div", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_Registry4.default.createText(`
    `, false)
        ] : true ? [
          ,
          import_Registry4.default.createText(`
      `, false),
          ...this._toNodeList(translations),
          import_Registry4.default.createText(`
    `, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\panel.ink
  var import_Registry5 = __toESM(require_Registry());
  var import_Component5 = __toESM(require_Component());
  var Panel_c4c96a14064fc0c4d224 = class extends import_Component5.default {
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
        import_Registry5.default.createText(`
`, false),
        ...this._toNodeList(panels)
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\element\icon.ink
  var import_Registry6 = __toESM(require_Registry());
  var import_Component6 = __toESM(require_Component());
  var import_StyleSet = __toESM(require_StyleSet());
  var import_color = __toESM(require_color());
  var import_display = __toESM(require_display());
  var import_size = __toESM(require_size());
  var Icon_33cb84912ffcb000a388 = class extends import_Component6.default {
    static id = "33cb84912ffcb000a388";
    static tagname = "icon";
    static classname = "Icon_33cb84912ffcb000a388";
    styles() {
      return ``;
    }
    template() {
      const { name, solid, brand } = this.props;
      const styles = new import_StyleSet.default();
      this.styles = () => styles.toString();
      (0, import_display.default)(this.props, styles, "inline-block", ":host");
      (0, import_color.default)(this.props, styles, false, ":host", "color");
      (0, import_size.default)(this.props, styles, false, ":host", "font-size");
      const iconClass = ["fa-fw", `fa-${name}`];
      iconClass.push(brand ? "fa-brands" : "fa-solid");
      return () => [
        import_Registry6.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }).element,
        import_Registry6.default.createText(`
`, false),
        import_Registry6.default.createElement("i", { "class": iconClass.join(" ") }, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\element\crumbs.ink
  var import_Registry7 = __toESM(require_Registry());
  var import_Component7 = __toESM(require_Component());
  var import_StyleSet2 = __toESM(require_StyleSet());
  var import_bold = __toESM(require_bold());
  var import_color2 = __toESM(require_color());
  var import_display2 = __toESM(require_display());
  var import_size2 = __toESM(require_size());
  var import_underline = __toESM(require_underline());
  var Crumbs_e4598fe781cc66b1ce2c = class extends import_Component7.default {
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
      const styles = new import_StyleSet2.default();
      this.styles = () => styles.toString();
      const display = (0, import_display2.default)(this.props, styles, "block", ":host");
      if (display === "flex" || display === "inline-flex") {
        styles.add(":host", "align-items", "center");
      }
      (0, import_size2.default)(this.props, styles, false, ":host", "font-size");
      (0, import_color2.default)(this.props, styles, false, ":host", "color");
      styles.add("a", "cursor", "pointer");
      if (link) {
        (0, import_color2.default)(link, styles, false, "a", "color");
      }
      (0, import_underline.default)(this.props, styles, "a");
      if (spacing) {
        styles.add(".sep", "margin", `0 ${spacing}px`);
      }
      (0, import_bold.default)(this.props, styles, "span");
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
        import_Registry7.default.createText(`
`, false),
        ...Object.entries(crumbs).map(([index, crumb]) => [
          import_Registry7.default.createText(`
  `, false),
          ...!!crumb.icon ? [
            import_Registry7.default.createText(`
    `, false),
            import_Registry7.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...iconProps, "name": crumb.icon }).element,
            import_Registry7.default.createText(`
  `, false)
          ] : [],
          import_Registry7.default.createText(`
  `, false),
          ...!!(crumb.href && crumb.label) ? [
            import_Registry7.default.createText(`
    `, false),
            import_Registry7.default.createElement("a", { "href": crumb.href }, [
              ...this._toNodeList(crumb.label)
            ]).element,
            import_Registry7.default.createText(`
  `, false)
          ] : !!crumb.label ? [
            ,
            import_Registry7.default.createText(`
    `, false),
            import_Registry7.default.createElement("span", {}, [
              ...this._toNodeList(crumb.label)
            ]).element,
            import_Registry7.default.createText(`
  `, false)
          ] : [],
          import_Registry7.default.createText(`
  `, false),
          ...!!(index < crumbs.length - 1) ? [
            import_Registry7.default.createText(`
    `, false),
            import_Registry7.default.createComponent("interface-icon", Icon_33cb84912ffcb000a388, { ...sepProps, "name": `chevron-right`, "class": `sep` }).element,
            import_Registry7.default.createText(`
  `, false)
          ] : [],
          import_Registry7.default.createText(`
`, false)
        ]).flat()
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table.ink
  var import_Component13 = __toESM(require_Component());

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\table.ink
  var import_Registry8 = __toESM(require_Registry());
  var import_Component8 = __toESM(require_Component());
  var import_StyleSet3 = __toESM(require_StyleSet());
  var Table_cb9231b6c52140a254d4 = class extends import_Component8.default {
    static id = "cb9231b6c52140a254d4";
    static tagname = "table";
    static classname = "Table_cb9231b6c52140a254d4";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet3.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table");
      styles.add(":host", "width", "100%");
      return () => [
        import_Registry8.default.createText(`
`, false),
        import_Registry8.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table.ink
  var import_Registry13 = __toESM(require_Registry());
  var import_StyleSet8 = __toESM(require_StyleSet());

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\thead.ink
  var import_Registry10 = __toESM(require_Registry());
  var import_Component10 = __toESM(require_Component());

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\row.ink
  var import_Registry9 = __toESM(require_Registry());
  var import_Component9 = __toESM(require_Component());
  var import_StyleSet4 = __toESM(require_StyleSet());
  var Row_0b3723ad0a2356b54f11 = class extends import_Component9.default {
    static id = "0b3723ad0a2356b54f11";
    static tagname = "row";
    static classname = "Row_0b3723ad0a2356b54f11";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet4.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-row");
      return () => [
        import_Registry9.default.createText(`
`, false),
        import_Registry9.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\thead.ink
  var import_StyleSet5 = __toESM(require_StyleSet());
  var Thead_afbcee18613ce58fb77c = class extends import_Component10.default {
    static id = "afbcee18613ce58fb77c";
    static tagname = "thead";
    static classname = "Thead_afbcee18613ce58fb77c";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet5.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-header-group");
      return () => [
        import_Registry10.default.createText(`
`, false),
        import_Registry10.default.createComponent("table-row", Row_0b3723ad0a2356b54f11, {}, [
          import_Registry10.default.createElement("slot", {}, []).element
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\tbody.ink
  var import_Registry11 = __toESM(require_Registry());
  var import_Component11 = __toESM(require_Component());
  var import_StyleSet6 = __toESM(require_StyleSet());
  var Tbody_95f498c1427be6bf7334 = class extends import_Component11.default {
    static id = "95f498c1427be6bf7334";
    static tagname = "tbody";
    static classname = "Tbody_95f498c1427be6bf7334";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet6.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-row-group");
      return () => [
        import_Registry11.default.createText(`
`, false),
        import_Registry11.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\tfoot.ink
  var import_Registry12 = __toESM(require_Registry());
  var import_Component12 = __toESM(require_Component());
  var import_StyleSet7 = __toESM(require_StyleSet());
  var Tfoot_874bedd042c5f2db7353 = class extends import_Component12.default {
    static id = "874bedd042c5f2db7353";
    static tagname = "tfoot";
    static classname = "Tfoot_874bedd042c5f2db7353";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet7.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-footer-group");
      return () => [
        import_Registry12.default.createText(`
`, false),
        import_Registry12.default.createComponent("table-row", Row_0b3723ad0a2356b54f11, {}, [
          import_Registry12.default.createElement("slot", {}, []).element
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table.ink
  var Table_02bc3cbacda5727a0af3 = class extends import_Component13.default {
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
      const styles = new import_StyleSet8.default();
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
      const children4 = this.originalChildren;
      for (const [i, child] of children4.entries()) {
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
        import_Registry13.default.createComponent(
          "table-thead",
          Thead_afbcee18613ce58fb77c,
          {},
          headers
        ).element
      );
      rows.length && this.appendChild(
        import_Registry13.default.createComponent(
          "table-tbody",
          Tbody_95f498c1427be6bf7334,
          {},
          rows
        ).element
      );
      footers.length && this.appendChild(
        import_Registry13.default.createComponent(
          "table-tfoot",
          Tfoot_874bedd042c5f2db7353,
          {},
          footers
        ).element
      );
      return () => [
        import_Registry13.default.createText(`
`, false),
        ...!!sticky ? [
          import_Registry13.default.createText(`
  `, false),
          import_Registry13.default.createComponent("table-wrapper", Table_cb9231b6c52140a254d4, {}, [
            import_Registry13.default.createText(`
    `, false),
            import_Registry13.default.createElement("slot", {}, []).element,
            import_Registry13.default.createText(`
  `, false)
          ]).element,
          import_Registry13.default.createText(`
`, false)
        ] : true ? [
          ,
          import_Registry13.default.createText(`
  `, false),
          import_Registry13.default.createElement("slot", {}, []).element,
          import_Registry13.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\head.ink
  var import_Registry14 = __toESM(require_Registry());
  var import_Component14 = __toESM(require_Component());
  var import_StyleSet9 = __toESM(require_StyleSet());
  var Head_d8755504d9458a2c21da = class extends import_Component14.default {
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
      const styles = new import_StyleSet9.default();
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
        import_Registry14.default.createText(`
`, false),
        import_Registry14.default.createElement("slot", {}, []).element,
        import_Registry14.default.createText(`
`, false),
        ...!!(wrap1 || wrap2 || wrap3 || wrap4 || wrap5) ? [
          import_Registry14.default.createText(`
  `, false),
          import_Registry14.default.createElement("div", { "class": `wrap` }, []).element,
          import_Registry14.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\layout\table\col.ink
  var import_Registry15 = __toESM(require_Registry());
  var import_Component15 = __toESM(require_Component());
  var import_StyleSet10 = __toESM(require_StyleSet());
  var Col_f45aa9d13a1588f1d9ab = class extends import_Component15.default {
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
      const styles = new import_StyleSet10.default();
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
        import_Registry15.default.createText(`
`, false),
        import_Registry15.default.createElement("slot", {}, []).element,
        import_Registry15.default.createText(`
`, false),
        ...!!(wrap1 || wrap2 || wrap3 || wrap4 || wrap5) ? [
          import_Registry15.default.createText(`
  `, false),
          import_Registry15.default.createElement("div", { "class": `wrap` }, []).element,
          import_Registry15.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\field\metadata.ink
  var import_Registry16 = __toESM(require_Registry());
  var import_Component16 = __toESM(require_Component());
  var import_StyleSet11 = __toESM(require_StyleSet());
  var import_display3 = __toESM(require_display());
  var import_fieldset = __toESM(require_fieldset());
  var Metadata_7a77cccac9ec06877cc1 = class extends import_Component16.default {
    static id = "7a77cccac9ec06877cc1";
    static tagname = "metadata";
    static classname = "Metadata_7a77cccac9ec06877cc1";
    styles() {
      return `a {
    align-items: center;
    color: var(--error);
    display: inline-flex;
    cursor: pointer;
    text-decoration: none;
    padding: 0 10px;
  }
  legend {
    display: inline-block;
    float: right;
    line-height: 20px;
  }
  button {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    margin-top: 7px;
    text-align: center;
  }
  fieldset {
    background-color: var(--white);
    border: 1px solid var(--black);
    display: flex;
    margin: 0 0 -1px 0;
    padding: 0;
  }
  input {
    border: 0;
    border-right: 1px solid var(--black);
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    padding: 7px;
  }
  input:focus {
    outline: none;
  }
  fieldset input {
    width: calc(65% - 21px);
  }
  fieldset input:first-child {
    width: calc(35% - 1px);
  }`;
    }
    template() {
      const { name, add = "Add", value = {} } = this.props;
      const styles = new import_StyleSet11.default();
      const css = this.styles();
      this.styles = () => css + styles.toString();
      (0, import_display3.default)(this.props, styles, "block", ":host");
      (0, import_fieldset.buttonStyles)(this.props, styles);
      const handlers = {
        add: (e) => {
          const shadow = this.shadowRoot;
          if (!shadow) return;
          const button = shadow.querySelector("button");
          if (!button) return;
          const { fieldset, field } = handlers.create(this.childElementCount);
          button.before(fieldset);
          this.appendChild(field);
        },
        create: (index, key, value2) => {
          const input = {
            key: this.createElement("input", { value: key }).element,
            value: this.createElement("input", { value: value2 }).element
          };
          const field = this.createElement("input", {
            type: "hidden",
            name: key ? `${name}[${key}]` : void 0,
            value: value2
          }).element;
          const remove = import_Registry16.default.createElement(
            "a",
            {},
            ["&times;"]
          ).element;
          const fieldset = import_Registry16.default.createElement("fieldset", {}, [
            input.key,
            input.value,
            remove
          ]).element;
          remove.addEventListener(
            "click",
            () => handlers.remove(fieldset, field)
          );
          input.key.addEventListener("change", () => {
            const key2 = input.key.value;
            if (key2.trim().length === 0) return;
            field.name = `${name}[${key2}]`;
            field.setAttribute("name", `${name}[${key2}]`);
          });
          input.value.addEventListener("change", () => {
            field.value = input.value.value;
            field.setAttribute("value", input.value.value);
          });
          return { fieldset, field };
        },
        remove: (fieldset, field) => {
          const shadow = this.shadowRoot;
          if (!shadow) return;
          fieldset.remove();
          field.remove();
        }
      };
      const rows = Object.entries(value).map(
        ([key, value2], index) => handlers.create(index, key, value2)
      );
      return () => [
        import_Registry16.default.createText(`
`, false),
        import_Registry16.default.createElement("template", { "type": `light` }, [
          import_Registry16.default.createText(`
  `, false),
          ...this._toNodeList(rows.map((row) => row.field)),
          import_Registry16.default.createText(`
`, false)
        ]).element,
        import_Registry16.default.createText(`
`, false),
        import_Registry16.default.createElement("template", { "type": `shadow` }, [
          import_Registry16.default.createText(`
  `, false),
          ...this._toNodeList(rows.map((row) => row.fieldset)),
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("button", { "type": `button`, "click": handlers.add }, [
            ...this._toNodeList(add)
          ]).element,
          import_Registry16.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\field\metadata.ink
  var import_ink4 = __toESM(require_ink());
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
        { icon: "book", label: "Docs", href: "/ink/docs/index.html" },
        { icon: "icons", label: "UI", href: "/ink/ui/index.html" },
        { icon: "icons", label: "Form", href: "/ink/ui/form/index.html" },
        { label: "Metadata" }
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
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/build/client/${(0, import_ink4.env)("BUILD_ID")}.css` }),
              import_Document.default.createElement("script", { "data-template": true, "type": `text/json` }, [
                import_Document.default.createText(`__TEMPLATE_DATA__`, true)
              ]),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("script", { "src": `/ink/build/client/${(0, import_ink4.env)("BUILD_ID")}.js` }),
              import_Document.default.createText(`
  `, false),
              ...!!((0, import_ink4.env)("PUBLIC_ENV") === "development") ? [
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
              import_Document.default.createElement("aside", { "right": true }, [
                import_Document.default.createText(`
        `, false),
                import_Document.default.createElement("menu", { "class": `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }, [
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h6", { "class": `tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("On this page")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("nav", { "class": `tx-14 tx-lh-32` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#Metadata` }, [
                      ...this._toNodeList(_("Metadata"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("nav", { "class": `pl-20` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#props` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Props"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#basicMetadata` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Basic Metadata"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#metadataWithValues` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Metadata with Initial Values"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#customAddButton` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Custom Add Button Text"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#styledMetadata` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Styled Metadata"))
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
      `, false),
              import_Document.default.createElement("main", {}, [
                import_Document.default.createText(`
        `, false),
                import_Document.default.createElement("api-docs", {}, [
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("nav", { "class": `p-10 bg-t-3 sticky top-0 z-50` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("element-crumbs", { "crumbs": crumbs, "block": true, "bold": true, "white": true, "sep-muted": true, "link-primary": true, "spacing": 2 }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `Metadata` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Metadata"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Metadata`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "lang": `js`, "trim": true }, [
                      import_Document.default.createText(`
              import Metadata from '@stackpress/ink-ui/field/metadata';
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          <!-- Props Section -->
          `, false),
                  import_Document.default.createElement("a", { "name": `props` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Props"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("p", { "class": `mb-20` }, [
                    ...this._toNodeList(_("The `<field-metadata>` component allows dynamic addition and removal of key-value pairs for form submission. Below are its props:"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0`, "body": `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, "odd": `bg-t-1`, "even": `bg-t-0` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Property"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Type"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Required"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Description"))
                    ]),
                    import_Document.default.createText(`

            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`name`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("Base name for form submission (e.g., `metadata[key]`)."))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`

            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`add`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_('Text for the "Add" button. Defaults to "Add".'))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`

            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`value`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Object`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("Initial key-value pairs to populate the component. Defaults to `{}`."))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`

            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`class`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("CSS classes for the host element, styled via default utilities."))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`

            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`style`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("Inline styles for the host element, overriding defaults."))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          <!-- Basic Metadata -->
          `, false),
                  import_Document.default.createElement("a", { "name": `basicMetadata` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Basic Metadata"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("A simple metadata field with default settings, allowing users to add key-value pairs."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third lg-basis-half md-basis-full mb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 p-10 flex flex-col items-center justify-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-metadata", { "name": `metadata` }),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full bg-black text-white`, "trim": true, "detab": 4 }, [
                    ...this._toNodeList(`
            <field-metadata name="metadata" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Metadata with Initial Values -->
          `, false),
                  import_Document.default.createElement("a", { "name": `metadataWithValues` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Metadata with Initial Values"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("Pre-populates the metadata field with initial key-value pairs using the `value` prop."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third lg-basis-half md-basis-full mb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 p-10 flex flex-col items-center justify-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-metadata", { "name": `metadata`, "value": { "author": "John Doe", "date": "2023-10-01" } }),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full bg-black text-white`, "trim": true, "detab": 4 }, [
                    ...this._toNodeList(`
            <field-metadata name="metadata" value={{ "author": "John Doe", "date": "2023-10-01" }} />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Custom Add Button Text -->
          `, false),
                  import_Document.default.createElement("a", { "name": `customAddButton` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Custom Add Button Text"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_('Customizes the "Add" button text using the `add` prop.'))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third lg-basis-half md-basis-full mb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 p-10 flex flex-col items-center justify-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-metadata", { "name": `metadata`, "add": `Add New Pair` }),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full bg-black text-white`, "trim": true, "detab": 4 }, [
                    ...this._toNodeList(`
            <field-metadata name="metadata" add="Add New Pair" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Styled Metadata -->
          `, false),
                  import_Document.default.createElement("a", { "name": `styledMetadata` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Styled Metadata"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("Applies custom styles to the metadata field using `class` and `style` props."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third lg-basis-half md-basis-full mb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 p-10 flex flex-col items-center justify-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-metadata", { "name": `metadata`, "class": `w-300 bg-white tx-t-1 c-10 p-15 b-solid b-t-2 transition-300 hover:b-primary`, "style": `border-color: var(--t-2); background: linear-gradient(135deg, #ffffff, #f9f9f9); box-shadow: 0 2px 6px var(--t-1);`, "onmouseover": `this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-3)'`, "onmouseout": `this.style.borderColor='var(--t-2)'; this.style.boxShadow='0 2px 6px var(--t-1)'` }),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full bg-black text-white`, "trim": true, "detab": 4 }, [
                    ...this._toNodeList(`
            <field-metadata 
              name="metadata" 
              class="w-300 bg-white tx-t-1 c-10 p-15 b-solid b-t-2 transition-300 hover:b-primary" 
              style="border-color: var(--t-2); background: linear-gradient(135deg, #ffffff, #f9f9f9); box-shadow: 0 2px 6px var(--t-1);" 
              onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-3)'" 
              onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='0 2px 6px var(--t-1)'" 
            />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Navigation -->
          `, false),
                  import_Document.default.createElement("nav", { "class": `flex` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/ui/field/mask.html` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }),
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Mask")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/ui/field/number.html` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Number")),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-right`, "theme": `tx-1` }),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("footer", { "class": `foot` }, []),
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
    "IdeApp_4ec139eab67151540039": App_4ec139eab67151540039,
    "IdeCode_5387662ecbed97347dd0": Code_5387662ecbed97347dd0,
    "I18nTranslate_794a00a5e900fca28310": Translate_794a00a5e900fca28310,
    "PanelLayout_c4c96a14064fc0c4d224": Panel_c4c96a14064fc0c4d224,
    "ElementIcon_33cb84912ffcb000a388": Icon_33cb84912ffcb000a388,
    "ElementCrumbs_e4598fe781cc66b1ce2c": Crumbs_e4598fe781cc66b1ce2c,
    "InterfaceIcon_33cb84912ffcb000a388": Icon_33cb84912ffcb000a388,
    "LayoutTable_02bc3cbacda5727a0af3": Table_02bc3cbacda5727a0af3,
    "TableWrapper_cb9231b6c52140a254d4": Table_cb9231b6c52140a254d4,
    "TableHead_d8755504d9458a2c21da": Head_d8755504d9458a2c21da,
    "TableRow_0b3723ad0a2356b54f11": Row_0b3723ad0a2356b54f11,
    "TableCol_f45aa9d13a1588f1d9ab": Col_f45aa9d13a1588f1d9ab,
    "FieldMetadata_7a77cccac9ec06877cc1": Metadata_7a77cccac9ec06877cc1
  };
  var elements = {
    "api-docs": Docs_0ab1bce486b32e7cdafc,
    "ide-app": App_4ec139eab67151540039,
    "ide-code": Code_5387662ecbed97347dd0,
    "i18n-translate": Translate_794a00a5e900fca28310,
    "panel-layout": Panel_c4c96a14064fc0c4d224,
    "element-icon": Icon_33cb84912ffcb000a388,
    "element-crumbs": Crumbs_e4598fe781cc66b1ce2c,
    "layout-table": Table_02bc3cbacda5727a0af3,
    "table-head": Head_d8755504d9458a2c21da,
    "table-row": Row_0b3723ad0a2356b54f11,
    "table-col": Col_f45aa9d13a1588f1d9ab,
    "field-metadata": Metadata_7a77cccac9ec06877cc1
  };
  var BUILD_ID = "07c0eb983c1ae9f7dcbe";
  import_Emitter.default.once("ready", () => {
    TemplateDocument.sync();
    for (const [tagname, definition] of Object.entries(elements)) {
      if (!customElements.getName(definition)) {
        customElements.define(tagname, definition);
      }
    }
    import_Emitter.default.emit("mounted", document.body);
  });
  return __toCommonJS(metadata_exports);
})();
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
