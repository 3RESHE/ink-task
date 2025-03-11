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

  // ../../node_modules/codemirror/lib/codemirror.js
  var require_codemirror = __commonJS({
    "../../node_modules/codemirror/lib/codemirror.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = global2 || self, global2.CodeMirror = factory());
      })(exports, function() {
        "use strict";
        var userAgent = navigator.userAgent;
        var platform = navigator.platform;
        var gecko = /gecko\/\d/i.test(userAgent);
        var ie_upto10 = /MSIE \d/.test(userAgent);
        var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
        var edge = /Edge\/(\d+)/.exec(userAgent);
        var ie = ie_upto10 || ie_11up || edge;
        var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
        var webkit = !edge && /WebKit\//.test(userAgent);
        var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
        var chrome = !edge && /Chrome\/(\d+)/.exec(userAgent);
        var chrome_version = chrome && +chrome[1];
        var presto = /Opera\//.test(userAgent);
        var safari = /Apple Computer/.test(navigator.vendor);
        var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
        var phantom = /PhantomJS/.test(userAgent);
        var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
        var android = /Android/.test(userAgent);
        var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
        var mac = ios || /Mac/.test(platform);
        var chromeOS = /\bCrOS\b/.test(userAgent);
        var windows = /win/i.test(platform);
        var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
        if (presto_version) {
          presto_version = Number(presto_version[1]);
        }
        if (presto_version && presto_version >= 15) {
          presto = false;
          webkit = true;
        }
        var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
        var captureRightClick = gecko || ie && ie_version >= 9;
        function classTest(cls) {
          return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
        }
        var rmClass = function(node, cls) {
          var current = node.className;
          var match = classTest(cls).exec(current);
          if (match) {
            var after = current.slice(match.index + match[0].length);
            node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
          }
        };
        function removeChildren(e) {
          for (var count = e.childNodes.length; count > 0; --count) {
            e.removeChild(e.firstChild);
          }
          return e;
        }
        function removeChildrenAndAdd(parent, e) {
          return removeChildren(parent).appendChild(e);
        }
        function elt(tag, content, className, style) {
          var e = document.createElement(tag);
          if (className) {
            e.className = className;
          }
          if (style) {
            e.style.cssText = style;
          }
          if (typeof content == "string") {
            e.appendChild(document.createTextNode(content));
          } else if (content) {
            for (var i2 = 0; i2 < content.length; ++i2) {
              e.appendChild(content[i2]);
            }
          }
          return e;
        }
        function eltP(tag, content, className, style) {
          var e = elt(tag, content, className, style);
          e.setAttribute("role", "presentation");
          return e;
        }
        var range;
        if (document.createRange) {
          range = function(node, start, end, endNode) {
            var r = document.createRange();
            r.setEnd(endNode || node, end);
            r.setStart(node, start);
            return r;
          };
        } else {
          range = function(node, start, end) {
            var r = document.body.createTextRange();
            try {
              r.moveToElementText(node.parentNode);
            } catch (e) {
              return r;
            }
            r.collapse(true);
            r.moveEnd("character", end);
            r.moveStart("character", start);
            return r;
          };
        }
        function contains(parent, child) {
          if (child.nodeType == 3) {
            child = child.parentNode;
          }
          if (parent.contains) {
            return parent.contains(child);
          }
          do {
            if (child.nodeType == 11) {
              child = child.host;
            }
            if (child == parent) {
              return true;
            }
          } while (child = child.parentNode);
        }
        function activeElt(rootNode2) {
          var doc2 = rootNode2.ownerDocument || rootNode2;
          var activeElement;
          try {
            activeElement = rootNode2.activeElement;
          } catch (e) {
            activeElement = doc2.body || null;
          }
          while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
            activeElement = activeElement.shadowRoot.activeElement;
          }
          return activeElement;
        }
        function addClass(node, cls) {
          var current = node.className;
          if (!classTest(cls).test(current)) {
            node.className += (current ? " " : "") + cls;
          }
        }
        function joinClasses(a, b) {
          var as = a.split(" ");
          for (var i2 = 0; i2 < as.length; i2++) {
            if (as[i2] && !classTest(as[i2]).test(b)) {
              b += " " + as[i2];
            }
          }
          return b;
        }
        var selectInput = function(node) {
          node.select();
        };
        if (ios) {
          selectInput = function(node) {
            node.selectionStart = 0;
            node.selectionEnd = node.value.length;
          };
        } else if (ie) {
          selectInput = function(node) {
            try {
              node.select();
            } catch (_e) {
            }
          };
        }
        function doc(cm) {
          return cm.display.wrapper.ownerDocument;
        }
        function root(cm) {
          return rootNode(cm.display.wrapper);
        }
        function rootNode(element) {
          return element.getRootNode ? element.getRootNode() : element.ownerDocument;
        }
        function win(cm) {
          return doc(cm).defaultView;
        }
        function bind(f) {
          var args = Array.prototype.slice.call(arguments, 1);
          return function() {
            return f.apply(null, args);
          };
        }
        function copyObj(obj, target, overwrite) {
          if (!target) {
            target = {};
          }
          for (var prop2 in obj) {
            if (obj.hasOwnProperty(prop2) && (overwrite !== false || !target.hasOwnProperty(prop2))) {
              target[prop2] = obj[prop2];
            }
          }
          return target;
        }
        function countColumn(string, end, tabSize, startIndex, startValue) {
          if (end == null) {
            end = string.search(/[^\s\u00a0]/);
            if (end == -1) {
              end = string.length;
            }
          }
          for (var i2 = startIndex || 0, n = startValue || 0; ; ) {
            var nextTab = string.indexOf("	", i2);
            if (nextTab < 0 || nextTab >= end) {
              return n + (end - i2);
            }
            n += nextTab - i2;
            n += tabSize - n % tabSize;
            i2 = nextTab + 1;
          }
        }
        var Delayed = function() {
          this.id = null;
          this.f = null;
          this.time = 0;
          this.handler = bind(this.onTimeout, this);
        };
        Delayed.prototype.onTimeout = function(self2) {
          self2.id = 0;
          if (self2.time <= +/* @__PURE__ */ new Date()) {
            self2.f();
          } else {
            setTimeout(self2.handler, self2.time - +/* @__PURE__ */ new Date());
          }
        };
        Delayed.prototype.set = function(ms, f) {
          this.f = f;
          var time = +/* @__PURE__ */ new Date() + ms;
          if (!this.id || time < this.time) {
            clearTimeout(this.id);
            this.id = setTimeout(this.handler, ms);
            this.time = time;
          }
        };
        function indexOf(array, elt2) {
          for (var i2 = 0; i2 < array.length; ++i2) {
            if (array[i2] == elt2) {
              return i2;
            }
          }
          return -1;
        }
        var scrollerGap = 50;
        var Pass = { toString: function() {
          return "CodeMirror.Pass";
        } };
        var sel_dontScroll = { scroll: false }, sel_mouse = { origin: "*mouse" }, sel_move = { origin: "+move" };
        function findColumn(string, goal, tabSize) {
          for (var pos = 0, col = 0; ; ) {
            var nextTab = string.indexOf("	", pos);
            if (nextTab == -1) {
              nextTab = string.length;
            }
            var skipped = nextTab - pos;
            if (nextTab == string.length || col + skipped >= goal) {
              return pos + Math.min(skipped, goal - col);
            }
            col += nextTab - pos;
            col += tabSize - col % tabSize;
            pos = nextTab + 1;
            if (col >= goal) {
              return pos;
            }
          }
        }
        var spaceStrs = [""];
        function spaceStr(n) {
          while (spaceStrs.length <= n) {
            spaceStrs.push(lst(spaceStrs) + " ");
          }
          return spaceStrs[n];
        }
        function lst(arr) {
          return arr[arr.length - 1];
        }
        function map(array, f) {
          var out = [];
          for (var i2 = 0; i2 < array.length; i2++) {
            out[i2] = f(array[i2], i2);
          }
          return out;
        }
        function insertSorted(array, value, score) {
          var pos = 0, priority = score(value);
          while (pos < array.length && score(array[pos]) <= priority) {
            pos++;
          }
          array.splice(pos, 0, value);
        }
        function nothing() {
        }
        function createObj(base, props3) {
          var inst;
          if (Object.create) {
            inst = Object.create(base);
          } else {
            nothing.prototype = base;
            inst = new nothing();
          }
          if (props3) {
            copyObj(props3, inst);
          }
          return inst;
        }
        var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function isWordCharBasic(ch) {
          return /\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
        }
        function isWordChar(ch, helper) {
          if (!helper) {
            return isWordCharBasic(ch);
          }
          if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) {
            return true;
          }
          return helper.test(ch);
        }
        function isEmpty(obj) {
          for (var n in obj) {
            if (obj.hasOwnProperty(n) && obj[n]) {
              return false;
            }
          }
          return true;
        }
        var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function isExtendingChar(ch) {
          return ch.charCodeAt(0) >= 768 && extendingChars.test(ch);
        }
        function skipExtendingChars(str, pos, dir) {
          while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) {
            pos += dir;
          }
          return pos;
        }
        function findFirst(pred, from, to) {
          var dir = from > to ? -1 : 1;
          for (; ; ) {
            if (from == to) {
              return from;
            }
            var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
            if (mid == from) {
              return pred(mid) ? from : to;
            }
            if (pred(mid)) {
              to = mid;
            } else {
              from = mid + dir;
            }
          }
        }
        function iterateBidiSections(order, from, to, f) {
          if (!order) {
            return f(from, to, "ltr", 0);
          }
          var found = false;
          for (var i2 = 0; i2 < order.length; ++i2) {
            var part = order[i2];
            if (part.from < to && part.to > from || from == to && part.to == from) {
              f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i2);
              found = true;
            }
          }
          if (!found) {
            f(from, to, "ltr");
          }
        }
        var bidiOther = null;
        function getBidiPartAt(order, ch, sticky) {
          var found;
          bidiOther = null;
          for (var i2 = 0; i2 < order.length; ++i2) {
            var cur = order[i2];
            if (cur.from < ch && cur.to > ch) {
              return i2;
            }
            if (cur.to == ch) {
              if (cur.from != cur.to && sticky == "before") {
                found = i2;
              } else {
                bidiOther = i2;
              }
            }
            if (cur.from == ch) {
              if (cur.from != cur.to && sticky != "before") {
                found = i2;
              } else {
                bidiOther = i2;
              }
            }
          }
          return found != null ? found : bidiOther;
        }
        var bidiOrdering = /* @__PURE__ */ function() {
          var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
          var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
          function charType(code) {
            if (code <= 247) {
              return lowTypes.charAt(code);
            } else if (1424 <= code && code <= 1524) {
              return "R";
            } else if (1536 <= code && code <= 1785) {
              return arabicTypes.charAt(code - 1536);
            } else if (1774 <= code && code <= 2220) {
              return "r";
            } else if (8192 <= code && code <= 8203) {
              return "w";
            } else if (code == 8204) {
              return "b";
            } else {
              return "L";
            }
          }
          var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
          var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
          function BidiSpan(level, from, to) {
            this.level = level;
            this.from = from;
            this.to = to;
          }
          return function(str, direction) {
            var outerType = direction == "ltr" ? "L" : "R";
            if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) {
              return false;
            }
            var len = str.length, types = [];
            for (var i2 = 0; i2 < len; ++i2) {
              types.push(charType(str.charCodeAt(i2)));
            }
            for (var i$12 = 0, prev = outerType; i$12 < len; ++i$12) {
              var type = types[i$12];
              if (type == "m") {
                types[i$12] = prev;
              } else {
                prev = type;
              }
            }
            for (var i$22 = 0, cur = outerType; i$22 < len; ++i$22) {
              var type$1 = types[i$22];
              if (type$1 == "1" && cur == "r") {
                types[i$22] = "n";
              } else if (isStrong.test(type$1)) {
                cur = type$1;
                if (type$1 == "r") {
                  types[i$22] = "R";
                }
              }
            }
            for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
              var type$2 = types[i$3];
              if (type$2 == "+" && prev$1 == "1" && types[i$3 + 1] == "1") {
                types[i$3] = "1";
              } else if (type$2 == "," && prev$1 == types[i$3 + 1] && (prev$1 == "1" || prev$1 == "n")) {
                types[i$3] = prev$1;
              }
              prev$1 = type$2;
            }
            for (var i$4 = 0; i$4 < len; ++i$4) {
              var type$3 = types[i$4];
              if (type$3 == ",") {
                types[i$4] = "N";
              } else if (type$3 == "%") {
                var end = void 0;
                for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {
                }
                var replace = i$4 && types[i$4 - 1] == "!" || end < len && types[end] == "1" ? "1" : "N";
                for (var j = i$4; j < end; ++j) {
                  types[j] = replace;
                }
                i$4 = end - 1;
              }
            }
            for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
              var type$4 = types[i$5];
              if (cur$1 == "L" && type$4 == "1") {
                types[i$5] = "L";
              } else if (isStrong.test(type$4)) {
                cur$1 = type$4;
              }
            }
            for (var i$6 = 0; i$6 < len; ++i$6) {
              if (isNeutral.test(types[i$6])) {
                var end$1 = void 0;
                for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {
                }
                var before = (i$6 ? types[i$6 - 1] : outerType) == "L";
                var after = (end$1 < len ? types[end$1] : outerType) == "L";
                var replace$1 = before == after ? before ? "L" : "R" : outerType;
                for (var j$1 = i$6; j$1 < end$1; ++j$1) {
                  types[j$1] = replace$1;
                }
                i$6 = end$1 - 1;
              }
            }
            var order = [], m;
            for (var i$7 = 0; i$7 < len; ) {
              if (countsAsLeft.test(types[i$7])) {
                var start = i$7;
                for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {
                }
                order.push(new BidiSpan(0, start, i$7));
              } else {
                var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
                for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {
                }
                for (var j$2 = pos; j$2 < i$7; ) {
                  if (countsAsNum.test(types[j$2])) {
                    if (pos < j$2) {
                      order.splice(at, 0, new BidiSpan(1, pos, j$2));
                      at += isRTL;
                    }
                    var nstart = j$2;
                    for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {
                    }
                    order.splice(at, 0, new BidiSpan(2, nstart, j$2));
                    at += isRTL;
                    pos = j$2;
                  } else {
                    ++j$2;
                  }
                }
                if (pos < i$7) {
                  order.splice(at, 0, new BidiSpan(1, pos, i$7));
                }
              }
            }
            if (direction == "ltr") {
              if (order[0].level == 1 && (m = str.match(/^\s+/))) {
                order[0].from = m[0].length;
                order.unshift(new BidiSpan(0, 0, m[0].length));
              }
              if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
                lst(order).to -= m[0].length;
                order.push(new BidiSpan(0, len - m[0].length, len));
              }
            }
            return direction == "rtl" ? order.reverse() : order;
          };
        }();
        function getOrder(line, direction) {
          var order = line.order;
          if (order == null) {
            order = line.order = bidiOrdering(line.text, direction);
          }
          return order;
        }
        var noHandlers = [];
        var on = function(emitter2, type, f) {
          if (emitter2.addEventListener) {
            emitter2.addEventListener(type, f, false);
          } else if (emitter2.attachEvent) {
            emitter2.attachEvent("on" + type, f);
          } else {
            var map2 = emitter2._handlers || (emitter2._handlers = {});
            map2[type] = (map2[type] || noHandlers).concat(f);
          }
        };
        function getHandlers(emitter2, type) {
          return emitter2._handlers && emitter2._handlers[type] || noHandlers;
        }
        function off(emitter2, type, f) {
          if (emitter2.removeEventListener) {
            emitter2.removeEventListener(type, f, false);
          } else if (emitter2.detachEvent) {
            emitter2.detachEvent("on" + type, f);
          } else {
            var map2 = emitter2._handlers, arr = map2 && map2[type];
            if (arr) {
              var index = indexOf(arr, f);
              if (index > -1) {
                map2[type] = arr.slice(0, index).concat(arr.slice(index + 1));
              }
            }
          }
        }
        function signal(emitter2, type) {
          var handlers = getHandlers(emitter2, type);
          if (!handlers.length) {
            return;
          }
          var args = Array.prototype.slice.call(arguments, 2);
          for (var i2 = 0; i2 < handlers.length; ++i2) {
            handlers[i2].apply(null, args);
          }
        }
        function signalDOMEvent(cm, e, override) {
          if (typeof e == "string") {
            e = { type: e, preventDefault: function() {
              this.defaultPrevented = true;
            } };
          }
          signal(cm, override || e.type, cm, e);
          return e_defaultPrevented(e) || e.codemirrorIgnore;
        }
        function signalCursorActivity(cm) {
          var arr = cm._handlers && cm._handlers.cursorActivity;
          if (!arr) {
            return;
          }
          var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
          for (var i2 = 0; i2 < arr.length; ++i2) {
            if (indexOf(set, arr[i2]) == -1) {
              set.push(arr[i2]);
            }
          }
        }
        function hasHandler(emitter2, type) {
          return getHandlers(emitter2, type).length > 0;
        }
        function eventMixin(ctor) {
          ctor.prototype.on = function(type, f) {
            on(this, type, f);
          };
          ctor.prototype.off = function(type, f) {
            off(this, type, f);
          };
        }
        function e_preventDefault(e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        function e_stopPropagation(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else {
            e.cancelBubble = true;
          }
        }
        function e_defaultPrevented(e) {
          return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
        }
        function e_stop(e) {
          e_preventDefault(e);
          e_stopPropagation(e);
        }
        function e_target(e) {
          return e.target || e.srcElement;
        }
        function e_button(e) {
          var b = e.which;
          if (b == null) {
            if (e.button & 1) {
              b = 1;
            } else if (e.button & 2) {
              b = 3;
            } else if (e.button & 4) {
              b = 2;
            }
          }
          if (mac && e.ctrlKey && b == 1) {
            b = 3;
          }
          return b;
        }
        var dragAndDrop = function() {
          if (ie && ie_version < 9) {
            return false;
          }
          var div = elt("div");
          return "draggable" in div || "dragDrop" in div;
        }();
        var zwspSupported;
        function zeroWidthElement(measure) {
          if (zwspSupported == null) {
            var test = elt("span", "\u200B");
            removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
            if (measure.firstChild.offsetHeight != 0) {
              zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
            }
          }
          var node = zwspSupported ? elt("span", "\u200B") : elt("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
          node.setAttribute("cm-text", "");
          return node;
        }
        var badBidiRects;
        function hasBadBidiRects(measure) {
          if (badBidiRects != null) {
            return badBidiRects;
          }
          var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062EA"));
          var r0 = range(txt, 0, 1).getBoundingClientRect();
          var r1 = range(txt, 1, 2).getBoundingClientRect();
          removeChildren(measure);
          if (!r0 || r0.left == r0.right) {
            return false;
          }
          return badBidiRects = r1.right - r0.right < 3;
        }
        var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function(string) {
          var pos = 0, result = [], l = string.length;
          while (pos <= l) {
            var nl = string.indexOf("\n", pos);
            if (nl == -1) {
              nl = string.length;
            }
            var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
            var rt = line.indexOf("\r");
            if (rt != -1) {
              result.push(line.slice(0, rt));
              pos += rt + 1;
            } else {
              result.push(line);
              pos = nl + 1;
            }
          }
          return result;
        } : function(string) {
          return string.split(/\r\n?|\n/);
        };
        var hasSelection = window.getSelection ? function(te) {
          try {
            return te.selectionStart != te.selectionEnd;
          } catch (e) {
            return false;
          }
        } : function(te) {
          var range2;
          try {
            range2 = te.ownerDocument.selection.createRange();
          } catch (e) {
          }
          if (!range2 || range2.parentElement() != te) {
            return false;
          }
          return range2.compareEndPoints("StartToEnd", range2) != 0;
        };
        var hasCopyEvent = function() {
          var e = elt("div");
          if ("oncopy" in e) {
            return true;
          }
          e.setAttribute("oncopy", "return;");
          return typeof e.oncopy == "function";
        }();
        var badZoomedRects = null;
        function hasBadZoomedRects(measure) {
          if (badZoomedRects != null) {
            return badZoomedRects;
          }
          var node = removeChildrenAndAdd(measure, elt("span", "x"));
          var normal = node.getBoundingClientRect();
          var fromRange = range(node, 0, 1).getBoundingClientRect();
          return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
        }
        var modes = {}, mimeModes = {};
        function defineMode(name, mode) {
          if (arguments.length > 2) {
            mode.dependencies = Array.prototype.slice.call(arguments, 2);
          }
          modes[name] = mode;
        }
        function defineMIME(mime, spec) {
          mimeModes[mime] = spec;
        }
        function resolveMode(spec) {
          if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
            spec = mimeModes[spec];
          } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
            var found = mimeModes[spec.name];
            if (typeof found == "string") {
              found = { name: found };
            }
            spec = createObj(found, spec);
            spec.name = found.name;
          } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
            return resolveMode("application/xml");
          } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
            return resolveMode("application/json");
          }
          if (typeof spec == "string") {
            return { name: spec };
          } else {
            return spec || { name: "null" };
          }
        }
        function getMode(options, spec) {
          spec = resolveMode(spec);
          var mfactory = modes[spec.name];
          if (!mfactory) {
            return getMode(options, "text/plain");
          }
          var modeObj = mfactory(options, spec);
          if (modeExtensions.hasOwnProperty(spec.name)) {
            var exts = modeExtensions[spec.name];
            for (var prop2 in exts) {
              if (!exts.hasOwnProperty(prop2)) {
                continue;
              }
              if (modeObj.hasOwnProperty(prop2)) {
                modeObj["_" + prop2] = modeObj[prop2];
              }
              modeObj[prop2] = exts[prop2];
            }
          }
          modeObj.name = spec.name;
          if (spec.helperType) {
            modeObj.helperType = spec.helperType;
          }
          if (spec.modeProps) {
            for (var prop$1 in spec.modeProps) {
              modeObj[prop$1] = spec.modeProps[prop$1];
            }
          }
          return modeObj;
        }
        var modeExtensions = {};
        function extendMode(mode, properties) {
          var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
          copyObj(properties, exts);
        }
        function copyState(mode, state) {
          if (state === true) {
            return state;
          }
          if (mode.copyState) {
            return mode.copyState(state);
          }
          var nstate = {};
          for (var n in state) {
            var val = state[n];
            if (val instanceof Array) {
              val = val.concat([]);
            }
            nstate[n] = val;
          }
          return nstate;
        }
        function innerMode(mode, state) {
          var info;
          while (mode.innerMode) {
            info = mode.innerMode(state);
            if (!info || info.mode == mode) {
              break;
            }
            state = info.state;
            mode = info.mode;
          }
          return info || { mode, state };
        }
        function startState(mode, a1, a2) {
          return mode.startState ? mode.startState(a1, a2) : true;
        }
        var StringStream = function(string, tabSize, lineOracle) {
          this.pos = this.start = 0;
          this.string = string;
          this.tabSize = tabSize || 8;
          this.lastColumnPos = this.lastColumnValue = 0;
          this.lineStart = 0;
          this.lineOracle = lineOracle;
        };
        StringStream.prototype.eol = function() {
          return this.pos >= this.string.length;
        };
        StringStream.prototype.sol = function() {
          return this.pos == this.lineStart;
        };
        StringStream.prototype.peek = function() {
          return this.string.charAt(this.pos) || void 0;
        };
        StringStream.prototype.next = function() {
          if (this.pos < this.string.length) {
            return this.string.charAt(this.pos++);
          }
        };
        StringStream.prototype.eat = function(match) {
          var ch = this.string.charAt(this.pos);
          var ok;
          if (typeof match == "string") {
            ok = ch == match;
          } else {
            ok = ch && (match.test ? match.test(ch) : match(ch));
          }
          if (ok) {
            ++this.pos;
            return ch;
          }
        };
        StringStream.prototype.eatWhile = function(match) {
          var start = this.pos;
          while (this.eat(match)) {
          }
          return this.pos > start;
        };
        StringStream.prototype.eatSpace = function() {
          var start = this.pos;
          while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
            ++this.pos;
          }
          return this.pos > start;
        };
        StringStream.prototype.skipToEnd = function() {
          this.pos = this.string.length;
        };
        StringStream.prototype.skipTo = function(ch) {
          var found = this.string.indexOf(ch, this.pos);
          if (found > -1) {
            this.pos = found;
            return true;
          }
        };
        StringStream.prototype.backUp = function(n) {
          this.pos -= n;
        };
        StringStream.prototype.column = function() {
          if (this.lastColumnPos < this.start) {
            this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
            this.lastColumnPos = this.start;
          }
          return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        };
        StringStream.prototype.indentation = function() {
          return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        };
        StringStream.prototype.match = function(pattern, consume, caseInsensitive) {
          if (typeof pattern == "string") {
            var cased = function(str) {
              return caseInsensitive ? str.toLowerCase() : str;
            };
            var substr = this.string.substr(this.pos, pattern.length);
            if (cased(substr) == cased(pattern)) {
              if (consume !== false) {
                this.pos += pattern.length;
              }
              return true;
            }
          } else {
            var match = this.string.slice(this.pos).match(pattern);
            if (match && match.index > 0) {
              return null;
            }
            if (match && consume !== false) {
              this.pos += match[0].length;
            }
            return match;
          }
        };
        StringStream.prototype.current = function() {
          return this.string.slice(this.start, this.pos);
        };
        StringStream.prototype.hideFirstChars = function(n, inner) {
          this.lineStart += n;
          try {
            return inner();
          } finally {
            this.lineStart -= n;
          }
        };
        StringStream.prototype.lookAhead = function(n) {
          var oracle = this.lineOracle;
          return oracle && oracle.lookAhead(n);
        };
        StringStream.prototype.baseToken = function() {
          var oracle = this.lineOracle;
          return oracle && oracle.baseToken(this.pos);
        };
        function getLine(doc2, n) {
          n -= doc2.first;
          if (n < 0 || n >= doc2.size) {
            throw new Error("There is no line " + (n + doc2.first) + " in the document.");
          }
          var chunk = doc2;
          while (!chunk.lines) {
            for (var i2 = 0; ; ++i2) {
              var child = chunk.children[i2], sz = child.chunkSize();
              if (n < sz) {
                chunk = child;
                break;
              }
              n -= sz;
            }
          }
          return chunk.lines[n];
        }
        function getBetween(doc2, start, end) {
          var out = [], n = start.line;
          doc2.iter(start.line, end.line + 1, function(line) {
            var text = line.text;
            if (n == end.line) {
              text = text.slice(0, end.ch);
            }
            if (n == start.line) {
              text = text.slice(start.ch);
            }
            out.push(text);
            ++n;
          });
          return out;
        }
        function getLines(doc2, from, to) {
          var out = [];
          doc2.iter(from, to, function(line) {
            out.push(line.text);
          });
          return out;
        }
        function updateLineHeight(line, height) {
          var diff = height - line.height;
          if (diff) {
            for (var n = line; n; n = n.parent) {
              n.height += diff;
            }
          }
        }
        function lineNo(line) {
          if (line.parent == null) {
            return null;
          }
          var cur = line.parent, no = indexOf(cur.lines, line);
          for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
            for (var i2 = 0; ; ++i2) {
              if (chunk.children[i2] == cur) {
                break;
              }
              no += chunk.children[i2].chunkSize();
            }
          }
          return no + cur.first;
        }
        function lineAtHeight(chunk, h) {
          var n = chunk.first;
          outer: do {
            for (var i$12 = 0; i$12 < chunk.children.length; ++i$12) {
              var child = chunk.children[i$12], ch = child.height;
              if (h < ch) {
                chunk = child;
                continue outer;
              }
              h -= ch;
              n += child.chunkSize();
            }
            return n;
          } while (!chunk.lines);
          var i2 = 0;
          for (; i2 < chunk.lines.length; ++i2) {
            var line = chunk.lines[i2], lh = line.height;
            if (h < lh) {
              break;
            }
            h -= lh;
          }
          return n + i2;
        }
        function isLine(doc2, l) {
          return l >= doc2.first && l < doc2.first + doc2.size;
        }
        function lineNumberFor(options, i2) {
          return String(options.lineNumberFormatter(i2 + options.firstLineNumber));
        }
        function Pos(line, ch, sticky) {
          if (sticky === void 0) sticky = null;
          if (!(this instanceof Pos)) {
            return new Pos(line, ch, sticky);
          }
          this.line = line;
          this.ch = ch;
          this.sticky = sticky;
        }
        function cmp(a, b) {
          return a.line - b.line || a.ch - b.ch;
        }
        function equalCursorPos(a, b) {
          return a.sticky == b.sticky && cmp(a, b) == 0;
        }
        function copyPos(x) {
          return Pos(x.line, x.ch);
        }
        function maxPos(a, b) {
          return cmp(a, b) < 0 ? b : a;
        }
        function minPos(a, b) {
          return cmp(a, b) < 0 ? a : b;
        }
        function clipLine(doc2, n) {
          return Math.max(doc2.first, Math.min(n, doc2.first + doc2.size - 1));
        }
        function clipPos(doc2, pos) {
          if (pos.line < doc2.first) {
            return Pos(doc2.first, 0);
          }
          var last = doc2.first + doc2.size - 1;
          if (pos.line > last) {
            return Pos(last, getLine(doc2, last).text.length);
          }
          return clipToLen(pos, getLine(doc2, pos.line).text.length);
        }
        function clipToLen(pos, linelen) {
          var ch = pos.ch;
          if (ch == null || ch > linelen) {
            return Pos(pos.line, linelen);
          } else if (ch < 0) {
            return Pos(pos.line, 0);
          } else {
            return pos;
          }
        }
        function clipPosArray(doc2, array) {
          var out = [];
          for (var i2 = 0; i2 < array.length; i2++) {
            out[i2] = clipPos(doc2, array[i2]);
          }
          return out;
        }
        var SavedContext = function(state, lookAhead) {
          this.state = state;
          this.lookAhead = lookAhead;
        };
        var Context = function(doc2, state, line, lookAhead) {
          this.state = state;
          this.doc = doc2;
          this.line = line;
          this.maxLookAhead = lookAhead || 0;
          this.baseTokens = null;
          this.baseTokenPos = 1;
        };
        Context.prototype.lookAhead = function(n) {
          var line = this.doc.getLine(this.line + n);
          if (line != null && n > this.maxLookAhead) {
            this.maxLookAhead = n;
          }
          return line;
        };
        Context.prototype.baseToken = function(n) {
          if (!this.baseTokens) {
            return null;
          }
          while (this.baseTokens[this.baseTokenPos] <= n) {
            this.baseTokenPos += 2;
          }
          var type = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n
          };
        };
        Context.prototype.nextLine = function() {
          this.line++;
          if (this.maxLookAhead > 0) {
            this.maxLookAhead--;
          }
        };
        Context.fromSaved = function(doc2, saved, line) {
          if (saved instanceof SavedContext) {
            return new Context(doc2, copyState(doc2.mode, saved.state), line, saved.lookAhead);
          } else {
            return new Context(doc2, copyState(doc2.mode, saved), line);
          }
        };
        Context.prototype.save = function(copy) {
          var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state;
        };
        function highlightLine(cm, line, context, forceToEnd) {
          var st = [cm.state.modeGen], lineClasses = {};
          runMode(
            cm,
            line.text,
            cm.doc.mode,
            context,
            function(end, style) {
              return st.push(end, style);
            },
            lineClasses,
            forceToEnd
          );
          var state = context.state;
          var loop = function(o2) {
            context.baseTokens = st;
            var overlay = cm.state.overlays[o2], i2 = 1, at = 0;
            context.state = true;
            runMode(cm, line.text, overlay.mode, context, function(end, style) {
              var start = i2;
              while (at < end) {
                var i_end = st[i2];
                if (i_end > end) {
                  st.splice(i2, 1, end, st[i2 + 1], i_end);
                }
                i2 += 2;
                at = Math.min(end, i_end);
              }
              if (!style) {
                return;
              }
              if (overlay.opaque) {
                st.splice(start, i2 - start, end, "overlay " + style);
                i2 = start + 2;
              } else {
                for (; start < i2; start += 2) {
                  var cur = st[start + 1];
                  st[start + 1] = (cur ? cur + " " : "") + "overlay " + style;
                }
              }
            }, lineClasses);
            context.state = state;
            context.baseTokens = null;
            context.baseTokenPos = 1;
          };
          for (var o = 0; o < cm.state.overlays.length; ++o) loop(o);
          return { styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null };
        }
        function getLineStyles(cm, line, updateFrontier) {
          if (!line.styles || line.styles[0] != cm.state.modeGen) {
            var context = getContextBefore(cm, lineNo(line));
            var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
            var result = highlightLine(cm, line, context);
            if (resetState) {
              context.state = resetState;
            }
            line.stateAfter = context.save(!resetState);
            line.styles = result.styles;
            if (result.classes) {
              line.styleClasses = result.classes;
            } else if (line.styleClasses) {
              line.styleClasses = null;
            }
            if (updateFrontier === cm.doc.highlightFrontier) {
              cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier);
            }
          }
          return line.styles;
        }
        function getContextBefore(cm, n, precise) {
          var doc2 = cm.doc, display = cm.display;
          if (!doc2.mode.startState) {
            return new Context(doc2, true, n);
          }
          var start = findStartLine(cm, n, precise);
          var saved = start > doc2.first && getLine(doc2, start - 1).stateAfter;
          var context = saved ? Context.fromSaved(doc2, saved, start) : new Context(doc2, startState(doc2.mode), start);
          doc2.iter(start, n, function(line) {
            processLine(cm, line.text, context);
            var pos = context.line;
            line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
            context.nextLine();
          });
          if (precise) {
            doc2.modeFrontier = context.line;
          }
          return context;
        }
        function processLine(cm, text, context, startAt) {
          var mode = cm.doc.mode;
          var stream = new StringStream(text, cm.options.tabSize, context);
          stream.start = stream.pos = startAt || 0;
          if (text == "") {
            callBlankLine(mode, context.state);
          }
          while (!stream.eol()) {
            readToken(mode, stream, context.state);
            stream.start = stream.pos;
          }
        }
        function callBlankLine(mode, state) {
          if (mode.blankLine) {
            return mode.blankLine(state);
          }
          if (!mode.innerMode) {
            return;
          }
          var inner = innerMode(mode, state);
          if (inner.mode.blankLine) {
            return inner.mode.blankLine(inner.state);
          }
        }
        function readToken(mode, stream, state, inner) {
          for (var i2 = 0; i2 < 10; i2++) {
            if (inner) {
              inner[0] = innerMode(mode, state).mode;
            }
            var style = mode.token(stream, state);
            if (stream.pos > stream.start) {
              return style;
            }
          }
          throw new Error("Mode " + mode.name + " failed to advance stream.");
        }
        var Token = function(stream, type, state) {
          this.start = stream.start;
          this.end = stream.pos;
          this.string = stream.current();
          this.type = type || null;
          this.state = state;
        };
        function takeToken(cm, pos, precise, asArray) {
          var doc2 = cm.doc, mode = doc2.mode, style;
          pos = clipPos(doc2, pos);
          var line = getLine(doc2, pos.line), context = getContextBefore(cm, pos.line, precise);
          var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
          if (asArray) {
            tokens = [];
          }
          while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
            stream.start = stream.pos;
            style = readToken(mode, stream, context.state);
            if (asArray) {
              tokens.push(new Token(stream, style, copyState(doc2.mode, context.state)));
            }
          }
          return asArray ? tokens : new Token(stream, style, context.state);
        }
        function extractLineClasses(type, output) {
          if (type) {
            for (; ; ) {
              var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!lineClass) {
                break;
              }
              type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
              var prop2 = lineClass[1] ? "bgClass" : "textClass";
              if (output[prop2] == null) {
                output[prop2] = lineClass[2];
              } else if (!new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)").test(output[prop2])) {
                output[prop2] += " " + lineClass[2];
              }
            }
          }
          return type;
        }
        function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
          var flattenSpans = mode.flattenSpans;
          if (flattenSpans == null) {
            flattenSpans = cm.options.flattenSpans;
          }
          var curStart = 0, curStyle = null;
          var stream = new StringStream(text, cm.options.tabSize, context), style;
          var inner = cm.options.addModeClass && [null];
          if (text == "") {
            extractLineClasses(callBlankLine(mode, context.state), lineClasses);
          }
          while (!stream.eol()) {
            if (stream.pos > cm.options.maxHighlightLength) {
              flattenSpans = false;
              if (forceToEnd) {
                processLine(cm, text, context, stream.pos);
              }
              stream.pos = text.length;
              style = null;
            } else {
              style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
            }
            if (inner) {
              var mName = inner[0].name;
              if (mName) {
                style = "m-" + (style ? mName + " " + style : mName);
              }
            }
            if (!flattenSpans || curStyle != style) {
              while (curStart < stream.start) {
                curStart = Math.min(stream.start, curStart + 5e3);
                f(curStart, curStyle);
              }
              curStyle = style;
            }
            stream.start = stream.pos;
          }
          while (curStart < stream.pos) {
            var pos = Math.min(stream.pos, curStart + 5e3);
            f(pos, curStyle);
            curStart = pos;
          }
        }
        function findStartLine(cm, n, precise) {
          var minindent, minline, doc2 = cm.doc;
          var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1e3 : 100);
          for (var search = n; search > lim; --search) {
            if (search <= doc2.first) {
              return doc2.first;
            }
            var line = getLine(doc2, search - 1), after = line.stateAfter;
            if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc2.modeFrontier)) {
              return search;
            }
            var indented = countColumn(line.text, null, cm.options.tabSize);
            if (minline == null || minindent > indented) {
              minline = search - 1;
              minindent = indented;
            }
          }
          return minline;
        }
        function retreatFrontier(doc2, n) {
          doc2.modeFrontier = Math.min(doc2.modeFrontier, n);
          if (doc2.highlightFrontier < n - 10) {
            return;
          }
          var start = doc2.first;
          for (var line = n - 1; line > start; line--) {
            var saved = getLine(doc2, line).stateAfter;
            if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
              start = line + 1;
              break;
            }
          }
          doc2.highlightFrontier = Math.min(doc2.highlightFrontier, start);
        }
        var sawReadOnlySpans = false, sawCollapsedSpans = false;
        function seeReadOnlySpans() {
          sawReadOnlySpans = true;
        }
        function seeCollapsedSpans() {
          sawCollapsedSpans = true;
        }
        function MarkedSpan(marker, from, to) {
          this.marker = marker;
          this.from = from;
          this.to = to;
        }
        function getMarkedSpanFor(spans, marker) {
          if (spans) {
            for (var i2 = 0; i2 < spans.length; ++i2) {
              var span = spans[i2];
              if (span.marker == marker) {
                return span;
              }
            }
          }
        }
        function removeMarkedSpan(spans, span) {
          var r;
          for (var i2 = 0; i2 < spans.length; ++i2) {
            if (spans[i2] != span) {
              (r || (r = [])).push(spans[i2]);
            }
          }
          return r;
        }
        function addMarkedSpan(line, span, op) {
          var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = /* @__PURE__ */ new WeakSet()));
          if (inThisOp && line.markedSpans && inThisOp.has(line.markedSpans)) {
            line.markedSpans.push(span);
          } else {
            line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
            if (inThisOp) {
              inThisOp.add(line.markedSpans);
            }
          }
          span.marker.attachLine(line);
        }
        function markedSpansBefore(old, startCh, isInsert) {
          var nw;
          if (old) {
            for (var i2 = 0; i2 < old.length; ++i2) {
              var span = old[i2], marker = span.marker;
              var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
              if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
                var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
              }
            }
          }
          return nw;
        }
        function markedSpansAfter(old, endCh, isInsert) {
          var nw;
          if (old) {
            for (var i2 = 0; i2 < old.length; ++i2) {
              var span = old[i2], marker = span.marker;
              var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
              if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
                var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
                (nw || (nw = [])).push(new MarkedSpan(
                  marker,
                  startsBefore ? null : span.from - endCh,
                  span.to == null ? null : span.to - endCh
                ));
              }
            }
          }
          return nw;
        }
        function stretchSpansOverChange(doc2, change) {
          if (change.full) {
            return null;
          }
          var oldFirst = isLine(doc2, change.from.line) && getLine(doc2, change.from.line).markedSpans;
          var oldLast = isLine(doc2, change.to.line) && getLine(doc2, change.to.line).markedSpans;
          if (!oldFirst && !oldLast) {
            return null;
          }
          var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
          var first = markedSpansBefore(oldFirst, startCh, isInsert);
          var last = markedSpansAfter(oldLast, endCh, isInsert);
          var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
          if (first) {
            for (var i2 = 0; i2 < first.length; ++i2) {
              var span = first[i2];
              if (span.to == null) {
                var found = getMarkedSpanFor(last, span.marker);
                if (!found) {
                  span.to = startCh;
                } else if (sameLine) {
                  span.to = found.to == null ? null : found.to + offset;
                }
              }
            }
          }
          if (last) {
            for (var i$12 = 0; i$12 < last.length; ++i$12) {
              var span$1 = last[i$12];
              if (span$1.to != null) {
                span$1.to += offset;
              }
              if (span$1.from == null) {
                var found$1 = getMarkedSpanFor(first, span$1.marker);
                if (!found$1) {
                  span$1.from = offset;
                  if (sameLine) {
                    (first || (first = [])).push(span$1);
                  }
                }
              } else {
                span$1.from += offset;
                if (sameLine) {
                  (first || (first = [])).push(span$1);
                }
              }
            }
          }
          if (first) {
            first = clearEmptySpans(first);
          }
          if (last && last != first) {
            last = clearEmptySpans(last);
          }
          var newMarkers = [first];
          if (!sameLine) {
            var gap = change.text.length - 2, gapMarkers;
            if (gap > 0 && first) {
              for (var i$22 = 0; i$22 < first.length; ++i$22) {
                if (first[i$22].to == null) {
                  (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$22].marker, null, null));
                }
              }
            }
            for (var i$3 = 0; i$3 < gap; ++i$3) {
              newMarkers.push(gapMarkers);
            }
            newMarkers.push(last);
          }
          return newMarkers;
        }
        function clearEmptySpans(spans) {
          for (var i2 = 0; i2 < spans.length; ++i2) {
            var span = spans[i2];
            if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false) {
              spans.splice(i2--, 1);
            }
          }
          if (!spans.length) {
            return null;
          }
          return spans;
        }
        function removeReadOnlyRanges(doc2, from, to) {
          var markers = null;
          doc2.iter(from.line, to.line + 1, function(line) {
            if (line.markedSpans) {
              for (var i3 = 0; i3 < line.markedSpans.length; ++i3) {
                var mark = line.markedSpans[i3].marker;
                if (mark.readOnly && (!markers || indexOf(markers, mark) == -1)) {
                  (markers || (markers = [])).push(mark);
                }
              }
            }
          });
          if (!markers) {
            return null;
          }
          var parts = [{ from, to }];
          for (var i2 = 0; i2 < markers.length; ++i2) {
            var mk = markers[i2], m = mk.find(0);
            for (var j = 0; j < parts.length; ++j) {
              var p = parts[j];
              if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) {
                continue;
              }
              var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
              if (dfrom < 0 || !mk.inclusiveLeft && !dfrom) {
                newParts.push({ from: p.from, to: m.from });
              }
              if (dto > 0 || !mk.inclusiveRight && !dto) {
                newParts.push({ from: m.to, to: p.to });
              }
              parts.splice.apply(parts, newParts);
              j += newParts.length - 3;
            }
          }
          return parts;
        }
        function detachMarkedSpans(line) {
          var spans = line.markedSpans;
          if (!spans) {
            return;
          }
          for (var i2 = 0; i2 < spans.length; ++i2) {
            spans[i2].marker.detachLine(line);
          }
          line.markedSpans = null;
        }
        function attachMarkedSpans(line, spans) {
          if (!spans) {
            return;
          }
          for (var i2 = 0; i2 < spans.length; ++i2) {
            spans[i2].marker.attachLine(line);
          }
          line.markedSpans = spans;
        }
        function extraLeft(marker) {
          return marker.inclusiveLeft ? -1 : 0;
        }
        function extraRight(marker) {
          return marker.inclusiveRight ? 1 : 0;
        }
        function compareCollapsedMarkers(a, b) {
          var lenDiff = a.lines.length - b.lines.length;
          if (lenDiff != 0) {
            return lenDiff;
          }
          var aPos = a.find(), bPos = b.find();
          var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
          if (fromCmp) {
            return -fromCmp;
          }
          var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
          if (toCmp) {
            return toCmp;
          }
          return b.id - a.id;
        }
        function collapsedSpanAtSide(line, start) {
          var sps = sawCollapsedSpans && line.markedSpans, found;
          if (sps) {
            for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
              sp = sps[i2];
              if (sp.marker.collapsed && (start ? sp.from : sp.to) == null && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
                found = sp.marker;
              }
            }
          }
          return found;
        }
        function collapsedSpanAtStart(line) {
          return collapsedSpanAtSide(line, true);
        }
        function collapsedSpanAtEnd(line) {
          return collapsedSpanAtSide(line, false);
        }
        function collapsedSpanAround(line, ch) {
          var sps = sawCollapsedSpans && line.markedSpans, found;
          if (sps) {
            for (var i2 = 0; i2 < sps.length; ++i2) {
              var sp = sps[i2];
              if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
                found = sp.marker;
              }
            }
          }
          return found;
        }
        function conflictingCollapsedRange(doc2, lineNo2, from, to, marker) {
          var line = getLine(doc2, lineNo2);
          var sps = sawCollapsedSpans && line.markedSpans;
          if (sps) {
            for (var i2 = 0; i2 < sps.length; ++i2) {
              var sp = sps[i2];
              if (!sp.marker.collapsed) {
                continue;
              }
              var found = sp.marker.find(0);
              var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
              var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
              if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) {
                continue;
              }
              if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) || fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0)) {
                return true;
              }
            }
          }
        }
        function visualLine(line) {
          var merged;
          while (merged = collapsedSpanAtStart(line)) {
            line = merged.find(-1, true).line;
          }
          return line;
        }
        function visualLineEnd(line) {
          var merged;
          while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
          }
          return line;
        }
        function visualLineContinued(line) {
          var merged, lines;
          while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
            (lines || (lines = [])).push(line);
          }
          return lines;
        }
        function visualLineNo(doc2, lineN) {
          var line = getLine(doc2, lineN), vis = visualLine(line);
          if (line == vis) {
            return lineN;
          }
          return lineNo(vis);
        }
        function visualLineEndNo(doc2, lineN) {
          if (lineN > doc2.lastLine()) {
            return lineN;
          }
          var line = getLine(doc2, lineN), merged;
          if (!lineIsHidden(doc2, line)) {
            return lineN;
          }
          while (merged = collapsedSpanAtEnd(line)) {
            line = merged.find(1, true).line;
          }
          return lineNo(line) + 1;
        }
        function lineIsHidden(doc2, line) {
          var sps = sawCollapsedSpans && line.markedSpans;
          if (sps) {
            for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
              sp = sps[i2];
              if (!sp.marker.collapsed) {
                continue;
              }
              if (sp.from == null) {
                return true;
              }
              if (sp.marker.widgetNode) {
                continue;
              }
              if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc2, line, sp)) {
                return true;
              }
            }
          }
        }
        function lineIsHiddenInner(doc2, line, span) {
          if (span.to == null) {
            var end = span.marker.find(1, true);
            return lineIsHiddenInner(doc2, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
          }
          if (span.marker.inclusiveRight && span.to == line.text.length) {
            return true;
          }
          for (var sp = void 0, i2 = 0; i2 < line.markedSpans.length; ++i2) {
            sp = line.markedSpans[i2];
            if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to && (sp.to == null || sp.to != span.from) && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc2, line, sp)) {
              return true;
            }
          }
        }
        function heightAtLine(lineObj) {
          lineObj = visualLine(lineObj);
          var h = 0, chunk = lineObj.parent;
          for (var i2 = 0; i2 < chunk.lines.length; ++i2) {
            var line = chunk.lines[i2];
            if (line == lineObj) {
              break;
            } else {
              h += line.height;
            }
          }
          for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
            for (var i$12 = 0; i$12 < p.children.length; ++i$12) {
              var cur = p.children[i$12];
              if (cur == chunk) {
                break;
              } else {
                h += cur.height;
              }
            }
          }
          return h;
        }
        function lineLength(line) {
          if (line.height == 0) {
            return 0;
          }
          var len = line.text.length, merged, cur = line;
          while (merged = collapsedSpanAtStart(cur)) {
            var found = merged.find(0, true);
            cur = found.from.line;
            len += found.from.ch - found.to.ch;
          }
          cur = line;
          while (merged = collapsedSpanAtEnd(cur)) {
            var found$1 = merged.find(0, true);
            len -= cur.text.length - found$1.from.ch;
            cur = found$1.to.line;
            len += cur.text.length - found$1.to.ch;
          }
          return len;
        }
        function findMaxLine(cm) {
          var d = cm.display, doc2 = cm.doc;
          d.maxLine = getLine(doc2, doc2.first);
          d.maxLineLength = lineLength(d.maxLine);
          d.maxLineChanged = true;
          doc2.iter(function(line) {
            var len = lineLength(line);
            if (len > d.maxLineLength) {
              d.maxLineLength = len;
              d.maxLine = line;
            }
          });
        }
        var Line = function(text, markedSpans, estimateHeight2) {
          this.text = text;
          attachMarkedSpans(this, markedSpans);
          this.height = estimateHeight2 ? estimateHeight2(this) : 1;
        };
        Line.prototype.lineNo = function() {
          return lineNo(this);
        };
        eventMixin(Line);
        function updateLine(line, text, markedSpans, estimateHeight2) {
          line.text = text;
          if (line.stateAfter) {
            line.stateAfter = null;
          }
          if (line.styles) {
            line.styles = null;
          }
          if (line.order != null) {
            line.order = null;
          }
          detachMarkedSpans(line);
          attachMarkedSpans(line, markedSpans);
          var estHeight = estimateHeight2 ? estimateHeight2(line) : 1;
          if (estHeight != line.height) {
            updateLineHeight(line, estHeight);
          }
        }
        function cleanUpLine(line) {
          line.parent = null;
          detachMarkedSpans(line);
        }
        var styleToClassCache = {}, styleToClassCacheWithMode = {};
        function interpretTokenStyle(style, options) {
          if (!style || /^\s*$/.test(style)) {
            return null;
          }
          var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
          return cache[style] || (cache[style] = style.replace(/\S+/g, "cm-$&"));
        }
        function buildLineContent(cm, lineView) {
          var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
          var builder = {
            pre: eltP("pre", [content], "CodeMirror-line"),
            content,
            col: 0,
            pos: 0,
            cm,
            trailingSpace: false,
            splitSpaces: cm.getOption("lineWrapping")
          };
          lineView.measure = {};
          for (var i2 = 0; i2 <= (lineView.rest ? lineView.rest.length : 0); i2++) {
            var line = i2 ? lineView.rest[i2 - 1] : lineView.line, order = void 0;
            builder.pos = 0;
            builder.addToken = buildToken;
            if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction))) {
              builder.addToken = buildTokenBadBidi(builder.addToken, order);
            }
            builder.map = [];
            var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
            insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
            if (line.styleClasses) {
              if (line.styleClasses.bgClass) {
                builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
              }
              if (line.styleClasses.textClass) {
                builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
              }
            }
            if (builder.map.length == 0) {
              builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));
            }
            if (i2 == 0) {
              lineView.measure.map = builder.map;
              lineView.measure.cache = {};
            } else {
              (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
              (lineView.measure.caches || (lineView.measure.caches = [])).push({});
            }
          }
          if (webkit) {
            var last = builder.content.lastChild;
            if (/\bcm-tab\b/.test(last.className) || last.querySelector && last.querySelector(".cm-tab")) {
              builder.content.className = "cm-tab-wrap-hack";
            }
          }
          signal(cm, "renderLine", cm, lineView.line, builder.pre);
          if (builder.pre.className) {
            builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");
          }
          return builder;
        }
        function defaultSpecialCharPlaceholder(ch) {
          var token = elt("span", "\u2022", "cm-invalidchar");
          token.title = "\\u" + ch.charCodeAt(0).toString(16);
          token.setAttribute("aria-label", token.title);
          return token;
        }
        function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
          if (!text) {
            return;
          }
          var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
          var special = builder.cm.state.specialChars, mustWrap = false;
          var content;
          if (!special.test(text)) {
            builder.col += text.length;
            content = document.createTextNode(displayText);
            builder.map.push(builder.pos, builder.pos + text.length, content);
            if (ie && ie_version < 9) {
              mustWrap = true;
            }
            builder.pos += text.length;
          } else {
            content = document.createDocumentFragment();
            var pos = 0;
            while (true) {
              special.lastIndex = pos;
              var m = special.exec(text);
              var skipped = m ? m.index - pos : text.length - pos;
              if (skipped) {
                var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
                if (ie && ie_version < 9) {
                  content.appendChild(elt("span", [txt]));
                } else {
                  content.appendChild(txt);
                }
                builder.map.push(builder.pos, builder.pos + skipped, txt);
                builder.col += skipped;
                builder.pos += skipped;
              }
              if (!m) {
                break;
              }
              pos += skipped + 1;
              var txt$1 = void 0;
              if (m[0] == "	") {
                var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
                txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
                txt$1.setAttribute("role", "presentation");
                txt$1.setAttribute("cm-text", "	");
                builder.col += tabWidth;
              } else if (m[0] == "\r" || m[0] == "\n") {
                txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar"));
                txt$1.setAttribute("cm-text", m[0]);
                builder.col += 1;
              } else {
                txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
                txt$1.setAttribute("cm-text", m[0]);
                if (ie && ie_version < 9) {
                  content.appendChild(elt("span", [txt$1]));
                } else {
                  content.appendChild(txt$1);
                }
                builder.col += 1;
              }
              builder.map.push(builder.pos, builder.pos + 1, txt$1);
              builder.pos++;
            }
          }
          builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
          if (style || startStyle || endStyle || mustWrap || css || attributes) {
            var fullStyle = style || "";
            if (startStyle) {
              fullStyle += startStyle;
            }
            if (endStyle) {
              fullStyle += endStyle;
            }
            var token = elt("span", [content], fullStyle, css);
            if (attributes) {
              for (var attr in attributes) {
                if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class") {
                  token.setAttribute(attr, attributes[attr]);
                }
              }
            }
            return builder.content.appendChild(token);
          }
          builder.content.appendChild(content);
        }
        function splitSpaces(text, trailingBefore) {
          if (text.length > 1 && !/  /.test(text)) {
            return text;
          }
          var spaceBefore = trailingBefore, result = "";
          for (var i2 = 0; i2 < text.length; i2++) {
            var ch = text.charAt(i2);
            if (ch == " " && spaceBefore && (i2 == text.length - 1 || text.charCodeAt(i2 + 1) == 32)) {
              ch = "\xA0";
            }
            result += ch;
            spaceBefore = ch == " ";
          }
          return result;
        }
        function buildTokenBadBidi(inner, order) {
          return function(builder, text, style, startStyle, endStyle, css, attributes) {
            style = style ? style + " cm-force-border" : "cm-force-border";
            var start = builder.pos, end = start + text.length;
            for (; ; ) {
              var part = void 0;
              for (var i2 = 0; i2 < order.length; i2++) {
                part = order[i2];
                if (part.to > start && part.from <= start) {
                  break;
                }
              }
              if (part.to >= end) {
                return inner(builder, text, style, startStyle, endStyle, css, attributes);
              }
              inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
              startStyle = null;
              text = text.slice(part.to - start);
              start = part.to;
            }
          };
        }
        function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
          var widget = !ignoreWidget && marker.widgetNode;
          if (widget) {
            builder.map.push(builder.pos, builder.pos + size, widget);
          }
          if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
            if (!widget) {
              widget = builder.content.appendChild(document.createElement("span"));
            }
            widget.setAttribute("cm-marker", marker.id);
          }
          if (widget) {
            builder.cm.display.input.setUneditable(widget);
            builder.content.appendChild(widget);
          }
          builder.pos += size;
          builder.trailingSpace = false;
        }
        function insertLineContent(line, builder, styles) {
          var spans = line.markedSpans, allText = line.text, at = 0;
          if (!spans) {
            for (var i$12 = 1; i$12 < styles.length; i$12 += 2) {
              builder.addToken(builder, allText.slice(at, at = styles[i$12]), interpretTokenStyle(styles[i$12 + 1], builder.cm.options));
            }
            return;
          }
          var len = allText.length, pos = 0, i2 = 1, text = "", style, css;
          var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
          for (; ; ) {
            if (nextChange == pos) {
              spanStyle = spanEndStyle = spanStartStyle = css = "";
              attributes = null;
              collapsed = null;
              nextChange = Infinity;
              var foundBookmarks = [], endStyles = void 0;
              for (var j = 0; j < spans.length; ++j) {
                var sp = spans[j], m = sp.marker;
                if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
                  foundBookmarks.push(m);
                } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
                  if (sp.to != null && sp.to != pos && nextChange > sp.to) {
                    nextChange = sp.to;
                    spanEndStyle = "";
                  }
                  if (m.className) {
                    spanStyle += " " + m.className;
                  }
                  if (m.css) {
                    css = (css ? css + ";" : "") + m.css;
                  }
                  if (m.startStyle && sp.from == pos) {
                    spanStartStyle += " " + m.startStyle;
                  }
                  if (m.endStyle && sp.to == nextChange) {
                    (endStyles || (endStyles = [])).push(m.endStyle, sp.to);
                  }
                  if (m.title) {
                    (attributes || (attributes = {})).title = m.title;
                  }
                  if (m.attributes) {
                    for (var attr in m.attributes) {
                      (attributes || (attributes = {}))[attr] = m.attributes[attr];
                    }
                  }
                  if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0)) {
                    collapsed = sp;
                  }
                } else if (sp.from > pos && nextChange > sp.from) {
                  nextChange = sp.from;
                }
              }
              if (endStyles) {
                for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2) {
                  if (endStyles[j$1 + 1] == nextChange) {
                    spanEndStyle += " " + endStyles[j$1];
                  }
                }
              }
              if (!collapsed || collapsed.from == pos) {
                for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2) {
                  buildCollapsedSpan(builder, 0, foundBookmarks[j$2]);
                }
              }
              if (collapsed && (collapsed.from || 0) == pos) {
                buildCollapsedSpan(
                  builder,
                  (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                  collapsed.marker,
                  collapsed.from == null
                );
                if (collapsed.to == null) {
                  return;
                }
                if (collapsed.to == pos) {
                  collapsed = false;
                }
              }
            }
            if (pos >= len) {
              break;
            }
            var upto = Math.min(len, nextChange);
            while (true) {
              if (text) {
                var end = pos + text.length;
                if (!collapsed) {
                  var tokenText = end > upto ? text.slice(0, upto - pos) : text;
                  builder.addToken(
                    builder,
                    tokenText,
                    style ? style + spanStyle : spanStyle,
                    spanStartStyle,
                    pos + tokenText.length == nextChange ? spanEndStyle : "",
                    css,
                    attributes
                  );
                }
                if (end >= upto) {
                  text = text.slice(upto - pos);
                  pos = upto;
                  break;
                }
                pos = end;
                spanStartStyle = "";
              }
              text = allText.slice(at, at = styles[i2++]);
              style = interpretTokenStyle(styles[i2++], builder.cm.options);
            }
          }
        }
        function LineView(doc2, line, lineN) {
          this.line = line;
          this.rest = visualLineContinued(line);
          this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
          this.node = this.text = null;
          this.hidden = lineIsHidden(doc2, line);
        }
        function buildViewArray(cm, from, to) {
          var array = [], nextPos;
          for (var pos = from; pos < to; pos = nextPos) {
            var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
            nextPos = pos + view.size;
            array.push(view);
          }
          return array;
        }
        var operationGroup = null;
        function pushOperation(op) {
          if (operationGroup) {
            operationGroup.ops.push(op);
          } else {
            op.ownsGroup = operationGroup = {
              ops: [op],
              delayedCallbacks: []
            };
          }
        }
        function fireCallbacksForOps(group) {
          var callbacks = group.delayedCallbacks, i2 = 0;
          do {
            for (; i2 < callbacks.length; i2++) {
              callbacks[i2].call(null);
            }
            for (var j = 0; j < group.ops.length; j++) {
              var op = group.ops[j];
              if (op.cursorActivityHandlers) {
                while (op.cursorActivityCalled < op.cursorActivityHandlers.length) {
                  op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
                }
              }
            }
          } while (i2 < callbacks.length);
        }
        function finishOperation(op, endCb) {
          var group = op.ownsGroup;
          if (!group) {
            return;
          }
          try {
            fireCallbacksForOps(group);
          } finally {
            operationGroup = null;
            endCb(group);
          }
        }
        var orphanDelayedCallbacks = null;
        function signalLater(emitter2, type) {
          var arr = getHandlers(emitter2, type);
          if (!arr.length) {
            return;
          }
          var args = Array.prototype.slice.call(arguments, 2), list;
          if (operationGroup) {
            list = operationGroup.delayedCallbacks;
          } else if (orphanDelayedCallbacks) {
            list = orphanDelayedCallbacks;
          } else {
            list = orphanDelayedCallbacks = [];
            setTimeout(fireOrphanDelayed, 0);
          }
          var loop = function(i3) {
            list.push(function() {
              return arr[i3].apply(null, args);
            });
          };
          for (var i2 = 0; i2 < arr.length; ++i2)
            loop(i2);
        }
        function fireOrphanDelayed() {
          var delayed = orphanDelayedCallbacks;
          orphanDelayedCallbacks = null;
          for (var i2 = 0; i2 < delayed.length; ++i2) {
            delayed[i2]();
          }
        }
        function updateLineForChanges(cm, lineView, lineN, dims) {
          for (var j = 0; j < lineView.changes.length; j++) {
            var type = lineView.changes[j];
            if (type == "text") {
              updateLineText(cm, lineView);
            } else if (type == "gutter") {
              updateLineGutter(cm, lineView, lineN, dims);
            } else if (type == "class") {
              updateLineClasses(cm, lineView);
            } else if (type == "widget") {
              updateLineWidgets(cm, lineView, dims);
            }
          }
          lineView.changes = null;
        }
        function ensureLineWrapped(lineView) {
          if (lineView.node == lineView.text) {
            lineView.node = elt("div", null, null, "position: relative");
            if (lineView.text.parentNode) {
              lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
            }
            lineView.node.appendChild(lineView.text);
            if (ie && ie_version < 8) {
              lineView.node.style.zIndex = 2;
            }
          }
          return lineView.node;
        }
        function updateLineBackground(cm, lineView) {
          var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
          if (cls) {
            cls += " CodeMirror-linebackground";
          }
          if (lineView.background) {
            if (cls) {
              lineView.background.className = cls;
            } else {
              lineView.background.parentNode.removeChild(lineView.background);
              lineView.background = null;
            }
          } else if (cls) {
            var wrap = ensureLineWrapped(lineView);
            lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
            cm.display.input.setUneditable(lineView.background);
          }
        }
        function getLineContent(cm, lineView) {
          var ext = cm.display.externalMeasured;
          if (ext && ext.line == lineView.line) {
            cm.display.externalMeasured = null;
            lineView.measure = ext.measure;
            return ext.built;
          }
          return buildLineContent(cm, lineView);
        }
        function updateLineText(cm, lineView) {
          var cls = lineView.text.className;
          var built = getLineContent(cm, lineView);
          if (lineView.text == lineView.node) {
            lineView.node = built.pre;
          }
          lineView.text.parentNode.replaceChild(built.pre, lineView.text);
          lineView.text = built.pre;
          if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
            lineView.bgClass = built.bgClass;
            lineView.textClass = built.textClass;
            updateLineClasses(cm, lineView);
          } else if (cls) {
            lineView.text.className = cls;
          }
        }
        function updateLineClasses(cm, lineView) {
          updateLineBackground(cm, lineView);
          if (lineView.line.wrapClass) {
            ensureLineWrapped(lineView).className = lineView.line.wrapClass;
          } else if (lineView.node != lineView.text) {
            lineView.node.className = "";
          }
          var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
          lineView.text.className = textClass || "";
        }
        function updateLineGutter(cm, lineView, lineN, dims) {
          if (lineView.gutter) {
            lineView.node.removeChild(lineView.gutter);
            lineView.gutter = null;
          }
          if (lineView.gutterBackground) {
            lineView.node.removeChild(lineView.gutterBackground);
            lineView.gutterBackground = null;
          }
          if (lineView.line.gutterClass) {
            var wrap = ensureLineWrapped(lineView);
            lineView.gutterBackground = elt(
              "div",
              null,
              "CodeMirror-gutter-background " + lineView.line.gutterClass,
              "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + dims.gutterTotalWidth + "px"
            );
            cm.display.input.setUneditable(lineView.gutterBackground);
            wrap.insertBefore(lineView.gutterBackground, lineView.text);
          }
          var markers = lineView.line.gutterMarkers;
          if (cm.options.lineNumbers || markers) {
            var wrap$1 = ensureLineWrapped(lineView);
            var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
            gutterWrap.setAttribute("aria-hidden", "true");
            cm.display.input.setUneditable(gutterWrap);
            wrap$1.insertBefore(gutterWrap, lineView.text);
            if (lineView.line.gutterClass) {
              gutterWrap.className += " " + lineView.line.gutterClass;
            }
            if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"])) {
              lineView.lineNumber = gutterWrap.appendChild(
                elt(
                  "div",
                  lineNumberFor(cm.options, lineN),
                  "CodeMirror-linenumber CodeMirror-gutter-elt",
                  "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + cm.display.lineNumInnerWidth + "px"
                )
              );
            }
            if (markers) {
              for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
                var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
                if (found) {
                  gutterWrap.appendChild(elt(
                    "div",
                    [found],
                    "CodeMirror-gutter-elt",
                    "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"
                  ));
                }
              }
            }
          }
        }
        function updateLineWidgets(cm, lineView, dims) {
          if (lineView.alignable) {
            lineView.alignable = null;
          }
          var isWidget = classTest("CodeMirror-linewidget");
          for (var node = lineView.node.firstChild, next = void 0; node; node = next) {
            next = node.nextSibling;
            if (isWidget.test(node.className)) {
              lineView.node.removeChild(node);
            }
          }
          insertLineWidgets(cm, lineView, dims);
        }
        function buildLineElement(cm, lineView, lineN, dims) {
          var built = getLineContent(cm, lineView);
          lineView.text = lineView.node = built.pre;
          if (built.bgClass) {
            lineView.bgClass = built.bgClass;
          }
          if (built.textClass) {
            lineView.textClass = built.textClass;
          }
          updateLineClasses(cm, lineView);
          updateLineGutter(cm, lineView, lineN, dims);
          insertLineWidgets(cm, lineView, dims);
          return lineView.node;
        }
        function insertLineWidgets(cm, lineView, dims) {
          insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
          if (lineView.rest) {
            for (var i2 = 0; i2 < lineView.rest.length; i2++) {
              insertLineWidgetsFor(cm, lineView.rest[i2], lineView, dims, false);
            }
          }
        }
        function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
          if (!line.widgets) {
            return;
          }
          var wrap = ensureLineWrapped(lineView);
          for (var i2 = 0, ws = line.widgets; i2 < ws.length; ++i2) {
            var widget = ws[i2], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
            if (!widget.handleMouseEvents) {
              node.setAttribute("cm-ignore-events", "true");
            }
            positionLineWidget(widget, node, lineView, dims);
            cm.display.input.setUneditable(node);
            if (allowAbove && widget.above) {
              wrap.insertBefore(node, lineView.gutter || lineView.text);
            } else {
              wrap.appendChild(node);
            }
            signalLater(widget, "redraw");
          }
        }
        function positionLineWidget(widget, node, lineView, dims) {
          if (widget.noHScroll) {
            (lineView.alignable || (lineView.alignable = [])).push(node);
            var width = dims.wrapperWidth;
            node.style.left = dims.fixedPos + "px";
            if (!widget.coverGutter) {
              width -= dims.gutterTotalWidth;
              node.style.paddingLeft = dims.gutterTotalWidth + "px";
            }
            node.style.width = width + "px";
          }
          if (widget.coverGutter) {
            node.style.zIndex = 5;
            node.style.position = "relative";
            if (!widget.noHScroll) {
              node.style.marginLeft = -dims.gutterTotalWidth + "px";
            }
          }
        }
        function widgetHeight(widget) {
          if (widget.height != null) {
            return widget.height;
          }
          var cm = widget.doc.cm;
          if (!cm) {
            return 0;
          }
          if (!contains(document.body, widget.node)) {
            var parentStyle = "position: relative;";
            if (widget.coverGutter) {
              parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
            }
            if (widget.noHScroll) {
              parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
            }
            removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
          }
          return widget.height = widget.node.parentNode.offsetHeight;
        }
        function eventInWidget(display, e) {
          for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
            if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == display.sizer && n != display.mover) {
              return true;
            }
          }
        }
        function paddingTop(display) {
          return display.lineSpace.offsetTop;
        }
        function paddingVert(display) {
          return display.mover.offsetHeight - display.lineSpace.offsetHeight;
        }
        function paddingH(display) {
          if (display.cachedPaddingH) {
            return display.cachedPaddingH;
          }
          var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
          var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
          var data2 = { left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight) };
          if (!isNaN(data2.left) && !isNaN(data2.right)) {
            display.cachedPaddingH = data2;
          }
          return data2;
        }
        function scrollGap(cm) {
          return scrollerGap - cm.display.nativeBarWidth;
        }
        function displayWidth(cm) {
          return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
        }
        function displayHeight(cm) {
          return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
        }
        function ensureLineHeights(cm, lineView, rect) {
          var wrapping = cm.options.lineWrapping;
          var curWidth = wrapping && displayWidth(cm);
          if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
            var heights = lineView.measure.heights = [];
            if (wrapping) {
              lineView.measure.width = curWidth;
              var rects = lineView.text.firstChild.getClientRects();
              for (var i2 = 0; i2 < rects.length - 1; i2++) {
                var cur = rects[i2], next = rects[i2 + 1];
                if (Math.abs(cur.bottom - next.bottom) > 2) {
                  heights.push((cur.bottom + next.top) / 2 - rect.top);
                }
              }
            }
            heights.push(rect.bottom - rect.top);
          }
        }
        function mapFromLineView(lineView, line, lineN) {
          if (lineView.line == line) {
            return { map: lineView.measure.map, cache: lineView.measure.cache };
          }
          if (lineView.rest) {
            for (var i2 = 0; i2 < lineView.rest.length; i2++) {
              if (lineView.rest[i2] == line) {
                return { map: lineView.measure.maps[i2], cache: lineView.measure.caches[i2] };
              }
            }
            for (var i$12 = 0; i$12 < lineView.rest.length; i$12++) {
              if (lineNo(lineView.rest[i$12]) > lineN) {
                return { map: lineView.measure.maps[i$12], cache: lineView.measure.caches[i$12], before: true };
              }
            }
          }
        }
        function updateExternalMeasurement(cm, line) {
          line = visualLine(line);
          var lineN = lineNo(line);
          var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
          view.lineN = lineN;
          var built = view.built = buildLineContent(cm, view);
          view.text = built.pre;
          removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
          return view;
        }
        function measureChar(cm, line, ch, bias) {
          return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
        }
        function findViewForLine(cm, lineN) {
          if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) {
            return cm.display.view[findViewIndex(cm, lineN)];
          }
          var ext = cm.display.externalMeasured;
          if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size) {
            return ext;
          }
        }
        function prepareMeasureForLine(cm, line) {
          var lineN = lineNo(line);
          var view = findViewForLine(cm, lineN);
          if (view && !view.text) {
            view = null;
          } else if (view && view.changes) {
            updateLineForChanges(cm, view, lineN, getDimensions(cm));
            cm.curOp.forceUpdate = true;
          }
          if (!view) {
            view = updateExternalMeasurement(cm, line);
          }
          var info = mapFromLineView(view, line, lineN);
          return {
            line,
            view,
            rect: null,
            map: info.map,
            cache: info.cache,
            before: info.before,
            hasHeights: false
          };
        }
        function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
          if (prepared.before) {
            ch = -1;
          }
          var key = ch + (bias || ""), found;
          if (prepared.cache.hasOwnProperty(key)) {
            found = prepared.cache[key];
          } else {
            if (!prepared.rect) {
              prepared.rect = prepared.view.text.getBoundingClientRect();
            }
            if (!prepared.hasHeights) {
              ensureLineHeights(cm, prepared.view, prepared.rect);
              prepared.hasHeights = true;
            }
            found = measureCharInner(cm, prepared, ch, bias);
            if (!found.bogus) {
              prepared.cache[key] = found;
            }
          }
          return {
            left: found.left,
            right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom
          };
        }
        var nullRect = { left: 0, right: 0, top: 0, bottom: 0 };
        function nodeAndOffsetInLineMap(map2, ch, bias) {
          var node, start, end, collapse, mStart, mEnd;
          for (var i2 = 0; i2 < map2.length; i2 += 3) {
            mStart = map2[i2];
            mEnd = map2[i2 + 1];
            if (ch < mStart) {
              start = 0;
              end = 1;
              collapse = "left";
            } else if (ch < mEnd) {
              start = ch - mStart;
              end = start + 1;
            } else if (i2 == map2.length - 3 || ch == mEnd && map2[i2 + 3] > ch) {
              end = mEnd - mStart;
              start = end - 1;
              if (ch >= mEnd) {
                collapse = "right";
              }
            }
            if (start != null) {
              node = map2[i2 + 2];
              if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right")) {
                collapse = bias;
              }
              if (bias == "left" && start == 0) {
                while (i2 && map2[i2 - 2] == map2[i2 - 3] && map2[i2 - 1].insertLeft) {
                  node = map2[(i2 -= 3) + 2];
                  collapse = "left";
                }
              }
              if (bias == "right" && start == mEnd - mStart) {
                while (i2 < map2.length - 3 && map2[i2 + 3] == map2[i2 + 4] && !map2[i2 + 5].insertLeft) {
                  node = map2[(i2 += 3) + 2];
                  collapse = "right";
                }
              }
              break;
            }
          }
          return { node, start, end, collapse, coverStart: mStart, coverEnd: mEnd };
        }
        function getUsefulRect(rects, bias) {
          var rect = nullRect;
          if (bias == "left") {
            for (var i2 = 0; i2 < rects.length; i2++) {
              if ((rect = rects[i2]).left != rect.right) {
                break;
              }
            }
          } else {
            for (var i$12 = rects.length - 1; i$12 >= 0; i$12--) {
              if ((rect = rects[i$12]).left != rect.right) {
                break;
              }
            }
          }
          return rect;
        }
        function measureCharInner(cm, prepared, ch, bias) {
          var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
          var node = place.node, start = place.start, end = place.end, collapse = place.collapse;
          var rect;
          if (node.nodeType == 3) {
            for (var i$12 = 0; i$12 < 4; i$12++) {
              while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) {
                --start;
              }
              while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) {
                ++end;
              }
              if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
                rect = node.parentNode.getBoundingClientRect();
              } else {
                rect = getUsefulRect(range(node, start, end).getClientRects(), bias);
              }
              if (rect.left || rect.right || start == 0) {
                break;
              }
              end = start;
              start = start - 1;
              collapse = "right";
            }
            if (ie && ie_version < 11) {
              rect = maybeUpdateRectForZooming(cm.display.measure, rect);
            }
          } else {
            if (start > 0) {
              collapse = bias = "right";
            }
            var rects;
            if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1) {
              rect = rects[bias == "right" ? rects.length - 1 : 0];
            } else {
              rect = node.getBoundingClientRect();
            }
          }
          if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
            var rSpan = node.parentNode.getClientRects()[0];
            if (rSpan) {
              rect = { left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom };
            } else {
              rect = nullRect;
            }
          }
          var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
          var mid = (rtop + rbot) / 2;
          var heights = prepared.view.measure.heights;
          var i2 = 0;
          for (; i2 < heights.length - 1; i2++) {
            if (mid < heights[i2]) {
              break;
            }
          }
          var top = i2 ? heights[i2 - 1] : 0, bot = heights[i2];
          var result = {
            left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
            right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
            top,
            bottom: bot
          };
          if (!rect.left && !rect.right) {
            result.bogus = true;
          }
          if (!cm.options.singleCursorHeightPerLine) {
            result.rtop = rtop;
            result.rbottom = rbot;
          }
          return result;
        }
        function maybeUpdateRectForZooming(measure, rect) {
          if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure)) {
            return rect;
          }
          var scaleX = screen.logicalXDPI / screen.deviceXDPI;
          var scaleY = screen.logicalYDPI / screen.deviceYDPI;
          return {
            left: rect.left * scaleX,
            right: rect.right * scaleX,
            top: rect.top * scaleY,
            bottom: rect.bottom * scaleY
          };
        }
        function clearLineMeasurementCacheFor(lineView) {
          if (lineView.measure) {
            lineView.measure.cache = {};
            lineView.measure.heights = null;
            if (lineView.rest) {
              for (var i2 = 0; i2 < lineView.rest.length; i2++) {
                lineView.measure.caches[i2] = {};
              }
            }
          }
        }
        function clearLineMeasurementCache(cm) {
          cm.display.externalMeasure = null;
          removeChildren(cm.display.lineMeasure);
          for (var i2 = 0; i2 < cm.display.view.length; i2++) {
            clearLineMeasurementCacheFor(cm.display.view[i2]);
          }
        }
        function clearCaches(cm) {
          clearLineMeasurementCache(cm);
          cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
          if (!cm.options.lineWrapping) {
            cm.display.maxLineChanged = true;
          }
          cm.display.lineNumChars = null;
        }
        function pageScrollX(doc2) {
          if (chrome && android) {
            return -(doc2.body.getBoundingClientRect().left - parseInt(getComputedStyle(doc2.body).marginLeft));
          }
          return doc2.defaultView.pageXOffset || (doc2.documentElement || doc2.body).scrollLeft;
        }
        function pageScrollY(doc2) {
          if (chrome && android) {
            return -(doc2.body.getBoundingClientRect().top - parseInt(getComputedStyle(doc2.body).marginTop));
          }
          return doc2.defaultView.pageYOffset || (doc2.documentElement || doc2.body).scrollTop;
        }
        function widgetTopHeight(lineObj) {
          var ref = visualLine(lineObj);
          var widgets = ref.widgets;
          var height = 0;
          if (widgets) {
            for (var i2 = 0; i2 < widgets.length; ++i2) {
              if (widgets[i2].above) {
                height += widgetHeight(widgets[i2]);
              }
            }
          }
          return height;
        }
        function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
          if (!includeWidgets) {
            var height = widgetTopHeight(lineObj);
            rect.top += height;
            rect.bottom += height;
          }
          if (context == "line") {
            return rect;
          }
          if (!context) {
            context = "local";
          }
          var yOff = heightAtLine(lineObj);
          if (context == "local") {
            yOff += paddingTop(cm.display);
          } else {
            yOff -= cm.display.viewOffset;
          }
          if (context == "page" || context == "window") {
            var lOff = cm.display.lineSpace.getBoundingClientRect();
            yOff += lOff.top + (context == "window" ? 0 : pageScrollY(doc(cm)));
            var xOff = lOff.left + (context == "window" ? 0 : pageScrollX(doc(cm)));
            rect.left += xOff;
            rect.right += xOff;
          }
          rect.top += yOff;
          rect.bottom += yOff;
          return rect;
        }
        function fromCoordSystem(cm, coords, context) {
          if (context == "div") {
            return coords;
          }
          var left = coords.left, top = coords.top;
          if (context == "page") {
            left -= pageScrollX(doc(cm));
            top -= pageScrollY(doc(cm));
          } else if (context == "local" || !context) {
            var localBox = cm.display.sizer.getBoundingClientRect();
            left += localBox.left;
            top += localBox.top;
          }
          var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
          return { left: left - lineSpaceBox.left, top: top - lineSpaceBox.top };
        }
        function charCoords(cm, pos, context, lineObj, bias) {
          if (!lineObj) {
            lineObj = getLine(cm.doc, pos.line);
          }
          return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
        }
        function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
          lineObj = lineObj || getLine(cm.doc, pos.line);
          if (!preparedMeasure) {
            preparedMeasure = prepareMeasureForLine(cm, lineObj);
          }
          function get(ch2, right) {
            var m = measureCharPrepared(cm, preparedMeasure, ch2, right ? "right" : "left", varHeight);
            if (right) {
              m.left = m.right;
            } else {
              m.right = m.left;
            }
            return intoCoordSystem(cm, lineObj, m, context);
          }
          var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
          if (ch >= lineObj.text.length) {
            ch = lineObj.text.length;
            sticky = "before";
          } else if (ch <= 0) {
            ch = 0;
            sticky = "after";
          }
          if (!order) {
            return get(sticky == "before" ? ch - 1 : ch, sticky == "before");
          }
          function getBidi(ch2, partPos2, invert) {
            var part = order[partPos2], right = part.level == 1;
            return get(invert ? ch2 - 1 : ch2, right != invert);
          }
          var partPos = getBidiPartAt(order, ch, sticky);
          var other = bidiOther;
          var val = getBidi(ch, partPos, sticky == "before");
          if (other != null) {
            val.other = getBidi(ch, other, sticky != "before");
          }
          return val;
        }
        function estimateCoords(cm, pos) {
          var left = 0;
          pos = clipPos(cm.doc, pos);
          if (!cm.options.lineWrapping) {
            left = charWidth(cm.display) * pos.ch;
          }
          var lineObj = getLine(cm.doc, pos.line);
          var top = heightAtLine(lineObj) + paddingTop(cm.display);
          return { left, right: left, top, bottom: top + lineObj.height };
        }
        function PosWithInfo(line, ch, sticky, outside, xRel) {
          var pos = Pos(line, ch, sticky);
          pos.xRel = xRel;
          if (outside) {
            pos.outside = outside;
          }
          return pos;
        }
        function coordsChar(cm, x, y) {
          var doc2 = cm.doc;
          y += cm.display.viewOffset;
          if (y < 0) {
            return PosWithInfo(doc2.first, 0, null, -1, -1);
          }
          var lineN = lineAtHeight(doc2, y), last = doc2.first + doc2.size - 1;
          if (lineN > last) {
            return PosWithInfo(doc2.first + doc2.size - 1, getLine(doc2, last).text.length, null, 1, 1);
          }
          if (x < 0) {
            x = 0;
          }
          var lineObj = getLine(doc2, lineN);
          for (; ; ) {
            var found = coordsCharInner(cm, lineObj, lineN, x, y);
            var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
            if (!collapsed) {
              return found;
            }
            var rangeEnd = collapsed.find(1);
            if (rangeEnd.line == lineN) {
              return rangeEnd;
            }
            lineObj = getLine(doc2, lineN = rangeEnd.line);
          }
        }
        function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
          y -= widgetTopHeight(lineObj);
          var end = lineObj.text.length;
          var begin = findFirst(function(ch) {
            return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y;
          }, end, 0);
          end = findFirst(function(ch) {
            return measureCharPrepared(cm, preparedMeasure, ch).top > y;
          }, begin, end);
          return { begin, end };
        }
        function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
          if (!preparedMeasure) {
            preparedMeasure = prepareMeasureForLine(cm, lineObj);
          }
          var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
          return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop);
        }
        function boxIsAfter(box, x, y, left) {
          return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x;
        }
        function coordsCharInner(cm, lineObj, lineNo2, x, y) {
          y -= heightAtLine(lineObj);
          var preparedMeasure = prepareMeasureForLine(cm, lineObj);
          var widgetHeight2 = widgetTopHeight(lineObj);
          var begin = 0, end = lineObj.text.length, ltr = true;
          var order = getOrder(lineObj, cm.doc.direction);
          if (order) {
            var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)(cm, lineObj, lineNo2, preparedMeasure, order, x, y);
            ltr = part.level != 1;
            begin = ltr ? part.from : part.to - 1;
            end = ltr ? part.to : part.from - 1;
          }
          var chAround = null, boxAround = null;
          var ch = findFirst(function(ch2) {
            var box = measureCharPrepared(cm, preparedMeasure, ch2);
            box.top += widgetHeight2;
            box.bottom += widgetHeight2;
            if (!boxIsAfter(box, x, y, false)) {
              return false;
            }
            if (box.top <= y && box.left <= x) {
              chAround = ch2;
              boxAround = box;
            }
            return true;
          }, begin, end);
          var baseX, sticky, outside = false;
          if (boxAround) {
            var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
            ch = chAround + (atStart ? 0 : 1);
            sticky = atStart ? "after" : "before";
            baseX = atLeft ? boxAround.left : boxAround.right;
          } else {
            if (!ltr && (ch == end || ch == begin)) {
              ch++;
            }
            sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" : measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight2 <= y == ltr ? "after" : "before";
            var coords = cursorCoords(cm, Pos(lineNo2, ch, sticky), "line", lineObj, preparedMeasure);
            baseX = coords.left;
            outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
          }
          ch = skipExtendingChars(lineObj.text, ch, 1);
          return PosWithInfo(lineNo2, ch, sticky, outside, x - baseX);
        }
        function coordsBidiPart(cm, lineObj, lineNo2, preparedMeasure, order, x, y) {
          var index = findFirst(function(i2) {
            var part2 = order[i2], ltr2 = part2.level != 1;
            return boxIsAfter(cursorCoords(
              cm,
              Pos(lineNo2, ltr2 ? part2.to : part2.from, ltr2 ? "before" : "after"),
              "line",
              lineObj,
              preparedMeasure
            ), x, y, true);
          }, 0, order.length - 1);
          var part = order[index];
          if (index > 0) {
            var ltr = part.level != 1;
            var start = cursorCoords(
              cm,
              Pos(lineNo2, ltr ? part.from : part.to, ltr ? "after" : "before"),
              "line",
              lineObj,
              preparedMeasure
            );
            if (boxIsAfter(start, x, y, true) && start.top > y) {
              part = order[index - 1];
            }
          }
          return part;
        }
        function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
          var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
          var begin = ref.begin;
          var end = ref.end;
          if (/\s/.test(lineObj.text.charAt(end - 1))) {
            end--;
          }
          var part = null, closestDist = null;
          for (var i2 = 0; i2 < order.length; i2++) {
            var p = order[i2];
            if (p.from >= end || p.to <= begin) {
              continue;
            }
            var ltr = p.level != 1;
            var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
            var dist = endX < x ? x - endX + 1e9 : endX - x;
            if (!part || closestDist > dist) {
              part = p;
              closestDist = dist;
            }
          }
          if (!part) {
            part = order[order.length - 1];
          }
          if (part.from < begin) {
            part = { from: begin, to: part.to, level: part.level };
          }
          if (part.to > end) {
            part = { from: part.from, to: end, level: part.level };
          }
          return part;
        }
        var measureText;
        function textHeight(display) {
          if (display.cachedTextHeight != null) {
            return display.cachedTextHeight;
          }
          if (measureText == null) {
            measureText = elt("pre", null, "CodeMirror-line-like");
            for (var i2 = 0; i2 < 49; ++i2) {
              measureText.appendChild(document.createTextNode("x"));
              measureText.appendChild(elt("br"));
            }
            measureText.appendChild(document.createTextNode("x"));
          }
          removeChildrenAndAdd(display.measure, measureText);
          var height = measureText.offsetHeight / 50;
          if (height > 3) {
            display.cachedTextHeight = height;
          }
          removeChildren(display.measure);
          return height || 1;
        }
        function charWidth(display) {
          if (display.cachedCharWidth != null) {
            return display.cachedCharWidth;
          }
          var anchor = elt("span", "xxxxxxxxxx");
          var pre = elt("pre", [anchor], "CodeMirror-line-like");
          removeChildrenAndAdd(display.measure, pre);
          var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
          if (width > 2) {
            display.cachedCharWidth = width;
          }
          return width || 10;
        }
        function getDimensions(cm) {
          var d = cm.display, left = {}, width = {};
          var gutterLeft = d.gutters.clientLeft;
          for (var n = d.gutters.firstChild, i2 = 0; n; n = n.nextSibling, ++i2) {
            var id = cm.display.gutterSpecs[i2].className;
            left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
            width[id] = n.clientWidth;
          }
          return {
            fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth
          };
        }
        function compensateForHScroll(display) {
          return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
        }
        function estimateHeight(cm) {
          var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
          var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
          return function(line) {
            if (lineIsHidden(cm.doc, line)) {
              return 0;
            }
            var widgetsHeight = 0;
            if (line.widgets) {
              for (var i2 = 0; i2 < line.widgets.length; i2++) {
                if (line.widgets[i2].height) {
                  widgetsHeight += line.widgets[i2].height;
                }
              }
            }
            if (wrapping) {
              return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
            } else {
              return widgetsHeight + th;
            }
          };
        }
        function estimateLineHeights(cm) {
          var doc2 = cm.doc, est = estimateHeight(cm);
          doc2.iter(function(line) {
            var estHeight = est(line);
            if (estHeight != line.height) {
              updateLineHeight(line, estHeight);
            }
          });
        }
        function posFromMouse(cm, e, liberal, forRect) {
          var display = cm.display;
          if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") {
            return null;
          }
          var x, y, space = display.lineSpace.getBoundingClientRect();
          try {
            x = e.clientX - space.left;
            y = e.clientY - space.top;
          } catch (e$1) {
            return null;
          }
          var coords = coordsChar(cm, x, y), line;
          if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
            var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
            coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
          }
          return coords;
        }
        function findViewIndex(cm, n) {
          if (n >= cm.display.viewTo) {
            return null;
          }
          n -= cm.display.viewFrom;
          if (n < 0) {
            return null;
          }
          var view = cm.display.view;
          for (var i2 = 0; i2 < view.length; i2++) {
            n -= view[i2].size;
            if (n < 0) {
              return i2;
            }
          }
        }
        function regChange(cm, from, to, lendiff) {
          if (from == null) {
            from = cm.doc.first;
          }
          if (to == null) {
            to = cm.doc.first + cm.doc.size;
          }
          if (!lendiff) {
            lendiff = 0;
          }
          var display = cm.display;
          if (lendiff && to < display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers > from)) {
            display.updateLineNumbers = from;
          }
          cm.curOp.viewChanged = true;
          if (from >= display.viewTo) {
            if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo) {
              resetView(cm);
            }
          } else if (to <= display.viewFrom) {
            if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
              resetView(cm);
            } else {
              display.viewFrom += lendiff;
              display.viewTo += lendiff;
            }
          } else if (from <= display.viewFrom && to >= display.viewTo) {
            resetView(cm);
          } else if (from <= display.viewFrom) {
            var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
            if (cut) {
              display.view = display.view.slice(cut.index);
              display.viewFrom = cut.lineN;
              display.viewTo += lendiff;
            } else {
              resetView(cm);
            }
          } else if (to >= display.viewTo) {
            var cut$1 = viewCuttingPoint(cm, from, from, -1);
            if (cut$1) {
              display.view = display.view.slice(0, cut$1.index);
              display.viewTo = cut$1.lineN;
            } else {
              resetView(cm);
            }
          } else {
            var cutTop = viewCuttingPoint(cm, from, from, -1);
            var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
            if (cutTop && cutBot) {
              display.view = display.view.slice(0, cutTop.index).concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN)).concat(display.view.slice(cutBot.index));
              display.viewTo += lendiff;
            } else {
              resetView(cm);
            }
          }
          var ext = display.externalMeasured;
          if (ext) {
            if (to < ext.lineN) {
              ext.lineN += lendiff;
            } else if (from < ext.lineN + ext.size) {
              display.externalMeasured = null;
            }
          }
        }
        function regLineChange(cm, line, type) {
          cm.curOp.viewChanged = true;
          var display = cm.display, ext = cm.display.externalMeasured;
          if (ext && line >= ext.lineN && line < ext.lineN + ext.size) {
            display.externalMeasured = null;
          }
          if (line < display.viewFrom || line >= display.viewTo) {
            return;
          }
          var lineView = display.view[findViewIndex(cm, line)];
          if (lineView.node == null) {
            return;
          }
          var arr = lineView.changes || (lineView.changes = []);
          if (indexOf(arr, type) == -1) {
            arr.push(type);
          }
        }
        function resetView(cm) {
          cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
          cm.display.view = [];
          cm.display.viewOffset = 0;
        }
        function viewCuttingPoint(cm, oldN, newN, dir) {
          var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
          if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size) {
            return { index, lineN: newN };
          }
          var n = cm.display.viewFrom;
          for (var i2 = 0; i2 < index; i2++) {
            n += view[i2].size;
          }
          if (n != oldN) {
            if (dir > 0) {
              if (index == view.length - 1) {
                return null;
              }
              diff = n + view[index].size - oldN;
              index++;
            } else {
              diff = n - oldN;
            }
            oldN += diff;
            newN += diff;
          }
          while (visualLineNo(cm.doc, newN) != newN) {
            if (index == (dir < 0 ? 0 : view.length - 1)) {
              return null;
            }
            newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
            index += dir;
          }
          return { index, lineN: newN };
        }
        function adjustView(cm, from, to) {
          var display = cm.display, view = display.view;
          if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
            display.view = buildViewArray(cm, from, to);
            display.viewFrom = from;
          } else {
            if (display.viewFrom > from) {
              display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
            } else if (display.viewFrom < from) {
              display.view = display.view.slice(findViewIndex(cm, from));
            }
            display.viewFrom = from;
            if (display.viewTo < to) {
              display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
            } else if (display.viewTo > to) {
              display.view = display.view.slice(0, findViewIndex(cm, to));
            }
          }
          display.viewTo = to;
        }
        function countDirtyView(cm) {
          var view = cm.display.view, dirty = 0;
          for (var i2 = 0; i2 < view.length; i2++) {
            var lineView = view[i2];
            if (!lineView.hidden && (!lineView.node || lineView.changes)) {
              ++dirty;
            }
          }
          return dirty;
        }
        function updateSelection(cm) {
          cm.display.input.showSelection(cm.display.input.prepareSelection());
        }
        function prepareSelection(cm, primary) {
          if (primary === void 0) primary = true;
          var doc2 = cm.doc, result = {};
          var curFragment = result.cursors = document.createDocumentFragment();
          var selFragment = result.selection = document.createDocumentFragment();
          var customCursor = cm.options.$customCursor;
          if (customCursor) {
            primary = true;
          }
          for (var i2 = 0; i2 < doc2.sel.ranges.length; i2++) {
            if (!primary && i2 == doc2.sel.primIndex) {
              continue;
            }
            var range2 = doc2.sel.ranges[i2];
            if (range2.from().line >= cm.display.viewTo || range2.to().line < cm.display.viewFrom) {
              continue;
            }
            var collapsed = range2.empty();
            if (customCursor) {
              var head = customCursor(cm, range2);
              if (head) {
                drawSelectionCursor(cm, head, curFragment);
              }
            } else if (collapsed || cm.options.showCursorWhenSelecting) {
              drawSelectionCursor(cm, range2.head, curFragment);
            }
            if (!collapsed) {
              drawSelectionRange(cm, range2, selFragment);
            }
          }
          return result;
        }
        function drawSelectionCursor(cm, head, output) {
          var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);
          var cursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor"));
          cursor.style.left = pos.left + "px";
          cursor.style.top = pos.top + "px";
          cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
          if (/\bcm-fat-cursor\b/.test(cm.getWrapperElement().className)) {
            var charPos = charCoords(cm, head, "div", null, null);
            var width = charPos.right - charPos.left;
            cursor.style.width = (width > 0 ? width : cm.defaultCharWidth()) + "px";
          }
          if (pos.other) {
            var otherCursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
            otherCursor.style.display = "";
            otherCursor.style.left = pos.other.left + "px";
            otherCursor.style.top = pos.other.top + "px";
            otherCursor.style.height = (pos.other.bottom - pos.other.top) * 0.85 + "px";
          }
        }
        function cmpCoords(a, b) {
          return a.top - b.top || a.left - b.left;
        }
        function drawSelectionRange(cm, range2, output) {
          var display = cm.display, doc2 = cm.doc;
          var fragment = document.createDocumentFragment();
          var padding = paddingH(cm.display), leftSide = padding.left;
          var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
          var docLTR = doc2.direction == "ltr";
          function add(left, top, width, bottom) {
            if (top < 0) {
              top = 0;
            }
            top = Math.round(top);
            bottom = Math.round(bottom);
            fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px"));
          }
          function drawForLine(line, fromArg, toArg) {
            var lineObj = getLine(doc2, line);
            var lineLen = lineObj.text.length;
            var start, end;
            function coords(ch, bias) {
              return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
            }
            function wrapX(pos, dir, side) {
              var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
              var prop2 = dir == "ltr" == (side == "after") ? "left" : "right";
              var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
              return coords(ch, prop2)[prop2];
            }
            var order = getOrder(lineObj, doc2.direction);
            iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir, i2) {
              var ltr = dir == "ltr";
              var fromPos = coords(from, ltr ? "left" : "right");
              var toPos = coords(to - 1, ltr ? "right" : "left");
              var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
              var first = i2 == 0, last = !order || i2 == order.length - 1;
              if (toPos.top - fromPos.top <= 3) {
                var openLeft = (docLTR ? openStart : openEnd) && first;
                var openRight = (docLTR ? openEnd : openStart) && last;
                var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
                var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
                add(left, fromPos.top, right - left, fromPos.bottom);
              } else {
                var topLeft, topRight, botLeft, botRight;
                if (ltr) {
                  topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
                  topRight = docLTR ? rightSide : wrapX(from, dir, "before");
                  botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
                  botRight = docLTR && openEnd && last ? rightSide : toPos.right;
                } else {
                  topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
                  topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
                  botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
                  botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
                }
                add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
                if (fromPos.bottom < toPos.top) {
                  add(leftSide, fromPos.bottom, null, toPos.top);
                }
                add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
              }
              if (!start || cmpCoords(fromPos, start) < 0) {
                start = fromPos;
              }
              if (cmpCoords(toPos, start) < 0) {
                start = toPos;
              }
              if (!end || cmpCoords(fromPos, end) < 0) {
                end = fromPos;
              }
              if (cmpCoords(toPos, end) < 0) {
                end = toPos;
              }
            });
            return { start, end };
          }
          var sFrom = range2.from(), sTo = range2.to();
          if (sFrom.line == sTo.line) {
            drawForLine(sFrom.line, sFrom.ch, sTo.ch);
          } else {
            var fromLine = getLine(doc2, sFrom.line), toLine = getLine(doc2, sTo.line);
            var singleVLine = visualLine(fromLine) == visualLine(toLine);
            var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
            var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
            if (singleVLine) {
              if (leftEnd.top < rightStart.top - 2) {
                add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
                add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
              } else {
                add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
              }
            }
            if (leftEnd.bottom < rightStart.top) {
              add(leftSide, leftEnd.bottom, null, rightStart.top);
            }
          }
          output.appendChild(fragment);
        }
        function restartBlink(cm) {
          if (!cm.state.focused) {
            return;
          }
          var display = cm.display;
          clearInterval(display.blinker);
          var on2 = true;
          display.cursorDiv.style.visibility = "";
          if (cm.options.cursorBlinkRate > 0) {
            display.blinker = setInterval(function() {
              if (!cm.hasFocus()) {
                onBlur(cm);
              }
              display.cursorDiv.style.visibility = (on2 = !on2) ? "" : "hidden";
            }, cm.options.cursorBlinkRate);
          } else if (cm.options.cursorBlinkRate < 0) {
            display.cursorDiv.style.visibility = "hidden";
          }
        }
        function ensureFocus(cm) {
          if (!cm.hasFocus()) {
            cm.display.input.focus();
            if (!cm.state.focused) {
              onFocus(cm);
            }
          }
        }
        function delayBlurEvent(cm) {
          cm.state.delayingBlurEvent = true;
          setTimeout(function() {
            if (cm.state.delayingBlurEvent) {
              cm.state.delayingBlurEvent = false;
              if (cm.state.focused) {
                onBlur(cm);
              }
            }
          }, 100);
        }
        function onFocus(cm, e) {
          if (cm.state.delayingBlurEvent && !cm.state.draggingText) {
            cm.state.delayingBlurEvent = false;
          }
          if (cm.options.readOnly == "nocursor") {
            return;
          }
          if (!cm.state.focused) {
            signal(cm, "focus", cm, e);
            cm.state.focused = true;
            addClass(cm.display.wrapper, "CodeMirror-focused");
            if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
              cm.display.input.reset();
              if (webkit) {
                setTimeout(function() {
                  return cm.display.input.reset(true);
                }, 20);
              }
            }
            cm.display.input.receivedFocus();
          }
          restartBlink(cm);
        }
        function onBlur(cm, e) {
          if (cm.state.delayingBlurEvent) {
            return;
          }
          if (cm.state.focused) {
            signal(cm, "blur", cm, e);
            cm.state.focused = false;
            rmClass(cm.display.wrapper, "CodeMirror-focused");
          }
          clearInterval(cm.display.blinker);
          setTimeout(function() {
            if (!cm.state.focused) {
              cm.display.shift = false;
            }
          }, 150);
        }
        function updateHeightsInViewport(cm) {
          var display = cm.display;
          var prevBottom = display.lineDiv.offsetTop;
          var viewTop = Math.max(0, display.scroller.getBoundingClientRect().top);
          var oldHeight = display.lineDiv.getBoundingClientRect().top;
          var mustScroll = 0;
          for (var i2 = 0; i2 < display.view.length; i2++) {
            var cur = display.view[i2], wrapping = cm.options.lineWrapping;
            var height = void 0, width = 0;
            if (cur.hidden) {
              continue;
            }
            oldHeight += cur.line.height;
            if (ie && ie_version < 8) {
              var bot = cur.node.offsetTop + cur.node.offsetHeight;
              height = bot - prevBottom;
              prevBottom = bot;
            } else {
              var box = cur.node.getBoundingClientRect();
              height = box.bottom - box.top;
              if (!wrapping && cur.text.firstChild) {
                width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1;
              }
            }
            var diff = cur.line.height - height;
            if (diff > 5e-3 || diff < -5e-3) {
              if (oldHeight < viewTop) {
                mustScroll -= diff;
              }
              updateLineHeight(cur.line, height);
              updateWidgetHeight(cur.line);
              if (cur.rest) {
                for (var j = 0; j < cur.rest.length; j++) {
                  updateWidgetHeight(cur.rest[j]);
                }
              }
            }
            if (width > cm.display.sizerWidth) {
              var chWidth = Math.ceil(width / charWidth(cm.display));
              if (chWidth > cm.display.maxLineLength) {
                cm.display.maxLineLength = chWidth;
                cm.display.maxLine = cur.line;
                cm.display.maxLineChanged = true;
              }
            }
          }
          if (Math.abs(mustScroll) > 2) {
            display.scroller.scrollTop += mustScroll;
          }
        }
        function updateWidgetHeight(line) {
          if (line.widgets) {
            for (var i2 = 0; i2 < line.widgets.length; ++i2) {
              var w = line.widgets[i2], parent = w.node.parentNode;
              if (parent) {
                w.height = parent.offsetHeight;
              }
            }
          }
        }
        function visibleLines(display, doc2, viewport) {
          var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
          top = Math.floor(top - paddingTop(display));
          var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;
          var from = lineAtHeight(doc2, top), to = lineAtHeight(doc2, bottom);
          if (viewport && viewport.ensure) {
            var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
            if (ensureFrom < from) {
              from = ensureFrom;
              to = lineAtHeight(doc2, heightAtLine(getLine(doc2, ensureFrom)) + display.wrapper.clientHeight);
            } else if (Math.min(ensureTo, doc2.lastLine()) >= to) {
              from = lineAtHeight(doc2, heightAtLine(getLine(doc2, ensureTo)) - display.wrapper.clientHeight);
              to = ensureTo;
            }
          }
          return { from, to: Math.max(to, from + 1) };
        }
        function maybeScrollWindow(cm, rect) {
          if (signalDOMEvent(cm, "scrollCursorIntoView")) {
            return;
          }
          var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
          var doc2 = display.wrapper.ownerDocument;
          if (rect.top + box.top < 0) {
            doScroll = true;
          } else if (rect.bottom + box.top > (doc2.defaultView.innerHeight || doc2.documentElement.clientHeight)) {
            doScroll = false;
          }
          if (doScroll != null && !phantom) {
            var scrollNode = elt("div", "\u200B", null, "position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + rect.left + "px; width: " + Math.max(2, rect.right - rect.left) + "px;");
            cm.display.lineSpace.appendChild(scrollNode);
            scrollNode.scrollIntoView(doScroll);
            cm.display.lineSpace.removeChild(scrollNode);
          }
        }
        function scrollPosIntoView(cm, pos, end, margin) {
          if (margin == null) {
            margin = 0;
          }
          var rect;
          if (!cm.options.lineWrapping && pos == end) {
            end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
            pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
          }
          for (var limit = 0; limit < 5; limit++) {
            var changed = false;
            var coords = cursorCoords(cm, pos);
            var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
            rect = {
              left: Math.min(coords.left, endCoords.left),
              top: Math.min(coords.top, endCoords.top) - margin,
              right: Math.max(coords.left, endCoords.left),
              bottom: Math.max(coords.bottom, endCoords.bottom) + margin
            };
            var scrollPos = calculateScrollPos(cm, rect);
            var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
            if (scrollPos.scrollTop != null) {
              updateScrollTop(cm, scrollPos.scrollTop);
              if (Math.abs(cm.doc.scrollTop - startTop) > 1) {
                changed = true;
              }
            }
            if (scrollPos.scrollLeft != null) {
              setScrollLeft(cm, scrollPos.scrollLeft);
              if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) {
                changed = true;
              }
            }
            if (!changed) {
              break;
            }
          }
          return rect;
        }
        function scrollIntoView(cm, rect) {
          var scrollPos = calculateScrollPos(cm, rect);
          if (scrollPos.scrollTop != null) {
            updateScrollTop(cm, scrollPos.scrollTop);
          }
          if (scrollPos.scrollLeft != null) {
            setScrollLeft(cm, scrollPos.scrollLeft);
          }
        }
        function calculateScrollPos(cm, rect) {
          var display = cm.display, snapMargin = textHeight(cm.display);
          if (rect.top < 0) {
            rect.top = 0;
          }
          var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
          var screen2 = displayHeight(cm), result = {};
          if (rect.bottom - rect.top > screen2) {
            rect.bottom = rect.top + screen2;
          }
          var docBottom = cm.doc.height + paddingVert(display);
          var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
          if (rect.top < screentop) {
            result.scrollTop = atTop ? 0 : rect.top;
          } else if (rect.bottom > screentop + screen2) {
            var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen2);
            if (newTop != screentop) {
              result.scrollTop = newTop;
            }
          }
          var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
          var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
          var screenw = displayWidth(cm) - display.gutters.offsetWidth;
          var tooWide = rect.right - rect.left > screenw;
          if (tooWide) {
            rect.right = rect.left + screenw;
          }
          if (rect.left < 10) {
            result.scrollLeft = 0;
          } else if (rect.left < screenleft) {
            result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10));
          } else if (rect.right > screenw + screenleft - 3) {
            result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw;
          }
          return result;
        }
        function addToScrollTop(cm, top) {
          if (top == null) {
            return;
          }
          resolveScrollToPos(cm);
          cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
        }
        function ensureCursorVisible(cm) {
          resolveScrollToPos(cm);
          var cur = cm.getCursor();
          cm.curOp.scrollToPos = { from: cur, to: cur, margin: cm.options.cursorScrollMargin };
        }
        function scrollToCoords(cm, x, y) {
          if (x != null || y != null) {
            resolveScrollToPos(cm);
          }
          if (x != null) {
            cm.curOp.scrollLeft = x;
          }
          if (y != null) {
            cm.curOp.scrollTop = y;
          }
        }
        function scrollToRange(cm, range2) {
          resolveScrollToPos(cm);
          cm.curOp.scrollToPos = range2;
        }
        function resolveScrollToPos(cm) {
          var range2 = cm.curOp.scrollToPos;
          if (range2) {
            cm.curOp.scrollToPos = null;
            var from = estimateCoords(cm, range2.from), to = estimateCoords(cm, range2.to);
            scrollToCoordsRange(cm, from, to, range2.margin);
          }
        }
        function scrollToCoordsRange(cm, from, to, margin) {
          var sPos = calculateScrollPos(cm, {
            left: Math.min(from.left, to.left),
            top: Math.min(from.top, to.top) - margin,
            right: Math.max(from.right, to.right),
            bottom: Math.max(from.bottom, to.bottom) + margin
          });
          scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
        }
        function updateScrollTop(cm, val) {
          if (Math.abs(cm.doc.scrollTop - val) < 2) {
            return;
          }
          if (!gecko) {
            updateDisplaySimple(cm, { top: val });
          }
          setScrollTop(cm, val, true);
          if (gecko) {
            updateDisplaySimple(cm);
          }
          startWorker(cm, 100);
        }
        function setScrollTop(cm, val, forceScroll) {
          val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
          if (cm.display.scroller.scrollTop == val && !forceScroll) {
            return;
          }
          cm.doc.scrollTop = val;
          cm.display.scrollbars.setScrollTop(val);
          if (cm.display.scroller.scrollTop != val) {
            cm.display.scroller.scrollTop = val;
          }
        }
        function setScrollLeft(cm, val, isScroller, forceScroll) {
          val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
          if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) {
            return;
          }
          cm.doc.scrollLeft = val;
          alignHorizontally(cm);
          if (cm.display.scroller.scrollLeft != val) {
            cm.display.scroller.scrollLeft = val;
          }
          cm.display.scrollbars.setScrollLeft(val);
        }
        function measureForScrollbars(cm) {
          var d = cm.display, gutterW = d.gutters.offsetWidth;
          var docH = Math.round(cm.doc.height + paddingVert(cm.display));
          return {
            clientHeight: d.scroller.clientHeight,
            viewHeight: d.wrapper.clientHeight,
            scrollWidth: d.scroller.scrollWidth,
            clientWidth: d.scroller.clientWidth,
            viewWidth: d.wrapper.clientWidth,
            barLeft: cm.options.fixedGutter ? gutterW : 0,
            docHeight: docH,
            scrollHeight: docH + scrollGap(cm) + d.barHeight,
            nativeBarWidth: d.nativeBarWidth,
            gutterWidth: gutterW
          };
        }
        var NativeScrollbars = function(place, scroll, cm) {
          this.cm = cm;
          var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
          var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
          vert.tabIndex = horiz.tabIndex = -1;
          place(vert);
          place(horiz);
          on(vert, "scroll", function() {
            if (vert.clientHeight) {
              scroll(vert.scrollTop, "vertical");
            }
          });
          on(horiz, "scroll", function() {
            if (horiz.clientWidth) {
              scroll(horiz.scrollLeft, "horizontal");
            }
          });
          this.checkedZeroWidth = false;
          if (ie && ie_version < 8) {
            this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
          }
        };
        NativeScrollbars.prototype.update = function(measure) {
          var needsH = measure.scrollWidth > measure.clientWidth + 1;
          var needsV = measure.scrollHeight > measure.clientHeight + 1;
          var sWidth = measure.nativeBarWidth;
          if (needsV) {
            this.vert.style.display = "block";
            this.vert.style.bottom = needsH ? sWidth + "px" : "0";
            var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
            this.vert.firstChild.style.height = Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
          } else {
            this.vert.scrollTop = 0;
            this.vert.style.display = "";
            this.vert.firstChild.style.height = "0";
          }
          if (needsH) {
            this.horiz.style.display = "block";
            this.horiz.style.right = needsV ? sWidth + "px" : "0";
            this.horiz.style.left = measure.barLeft + "px";
            var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
            this.horiz.firstChild.style.width = Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
          } else {
            this.horiz.style.display = "";
            this.horiz.firstChild.style.width = "0";
          }
          if (!this.checkedZeroWidth && measure.clientHeight > 0) {
            if (sWidth == 0) {
              this.zeroWidthHack();
            }
            this.checkedZeroWidth = true;
          }
          return { right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0 };
        };
        NativeScrollbars.prototype.setScrollLeft = function(pos) {
          if (this.horiz.scrollLeft != pos) {
            this.horiz.scrollLeft = pos;
          }
          if (this.disableHoriz) {
            this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
          }
        };
        NativeScrollbars.prototype.setScrollTop = function(pos) {
          if (this.vert.scrollTop != pos) {
            this.vert.scrollTop = pos;
          }
          if (this.disableVert) {
            this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
          }
        };
        NativeScrollbars.prototype.zeroWidthHack = function() {
          var w = mac && !mac_geMountainLion ? "12px" : "18px";
          this.horiz.style.height = this.vert.style.width = w;
          this.horiz.style.visibility = this.vert.style.visibility = "hidden";
          this.disableHoriz = new Delayed();
          this.disableVert = new Delayed();
        };
        NativeScrollbars.prototype.enableZeroWidthBar = function(bar, delay, type) {
          bar.style.visibility = "";
          function maybeDisable() {
            var box = bar.getBoundingClientRect();
            var elt2 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2) : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
            if (elt2 != bar) {
              bar.style.visibility = "hidden";
            } else {
              delay.set(1e3, maybeDisable);
            }
          }
          delay.set(1e3, maybeDisable);
        };
        NativeScrollbars.prototype.clear = function() {
          var parent = this.horiz.parentNode;
          parent.removeChild(this.horiz);
          parent.removeChild(this.vert);
        };
        var NullScrollbars = function() {
        };
        NullScrollbars.prototype.update = function() {
          return { bottom: 0, right: 0 };
        };
        NullScrollbars.prototype.setScrollLeft = function() {
        };
        NullScrollbars.prototype.setScrollTop = function() {
        };
        NullScrollbars.prototype.clear = function() {
        };
        function updateScrollbars(cm, measure) {
          if (!measure) {
            measure = measureForScrollbars(cm);
          }
          var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
          updateScrollbarsInner(cm, measure);
          for (var i2 = 0; i2 < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i2++) {
            if (startWidth != cm.display.barWidth && cm.options.lineWrapping) {
              updateHeightsInViewport(cm);
            }
            updateScrollbarsInner(cm, measureForScrollbars(cm));
            startWidth = cm.display.barWidth;
            startHeight = cm.display.barHeight;
          }
        }
        function updateScrollbarsInner(cm, measure) {
          var d = cm.display;
          var sizes = d.scrollbars.update(measure);
          d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
          d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
          d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";
          if (sizes.right && sizes.bottom) {
            d.scrollbarFiller.style.display = "block";
            d.scrollbarFiller.style.height = sizes.bottom + "px";
            d.scrollbarFiller.style.width = sizes.right + "px";
          } else {
            d.scrollbarFiller.style.display = "";
          }
          if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
            d.gutterFiller.style.display = "block";
            d.gutterFiller.style.height = sizes.bottom + "px";
            d.gutterFiller.style.width = measure.gutterWidth + "px";
          } else {
            d.gutterFiller.style.display = "";
          }
        }
        var scrollbarModel = { "native": NativeScrollbars, "null": NullScrollbars };
        function initScrollbars(cm) {
          if (cm.display.scrollbars) {
            cm.display.scrollbars.clear();
            if (cm.display.scrollbars.addClass) {
              rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
            }
          }
          cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function(node) {
            cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
            on(node, "mousedown", function() {
              if (cm.state.focused) {
                setTimeout(function() {
                  return cm.display.input.focus();
                }, 0);
              }
            });
            node.setAttribute("cm-not-content", "true");
          }, function(pos, axis) {
            if (axis == "horizontal") {
              setScrollLeft(cm, pos);
            } else {
              updateScrollTop(cm, pos);
            }
          }, cm);
          if (cm.display.scrollbars.addClass) {
            addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
          }
        }
        var nextOpId = 0;
        function startOperation(cm) {
          cm.curOp = {
            cm,
            viewChanged: false,
            // Flag that indicates that lines might need to be redrawn
            startHeight: cm.doc.height,
            // Used to detect need to update scrollbar
            forceUpdate: false,
            // Used to force a redraw
            updateInput: 0,
            // Whether to reset the input textarea
            typing: false,
            // Whether this reset should be careful to leave existing text (for compositing)
            changeObjs: null,
            // Accumulated changes, for firing change events
            cursorActivityHandlers: null,
            // Set of handlers to fire cursorActivity on
            cursorActivityCalled: 0,
            // Tracks which cursorActivity handlers have been called already
            selectionChanged: false,
            // Whether the selection needs to be redrawn
            updateMaxLine: false,
            // Set when the widest line needs to be determined anew
            scrollLeft: null,
            scrollTop: null,
            // Intermediate scroll position, not pushed to DOM yet
            scrollToPos: null,
            // Used to scroll to a specific position
            focus: false,
            id: ++nextOpId,
            // Unique ID
            markArrays: null
            // Used by addMarkedSpan
          };
          pushOperation(cm.curOp);
        }
        function endOperation(cm) {
          var op = cm.curOp;
          if (op) {
            finishOperation(op, function(group) {
              for (var i2 = 0; i2 < group.ops.length; i2++) {
                group.ops[i2].cm.curOp = null;
              }
              endOperations(group);
            });
          }
        }
        function endOperations(group) {
          var ops = group.ops;
          for (var i2 = 0; i2 < ops.length; i2++) {
            endOperation_R1(ops[i2]);
          }
          for (var i$12 = 0; i$12 < ops.length; i$12++) {
            endOperation_W1(ops[i$12]);
          }
          for (var i$22 = 0; i$22 < ops.length; i$22++) {
            endOperation_R2(ops[i$22]);
          }
          for (var i$3 = 0; i$3 < ops.length; i$3++) {
            endOperation_W2(ops[i$3]);
          }
          for (var i$4 = 0; i$4 < ops.length; i$4++) {
            endOperation_finish(ops[i$4]);
          }
        }
        function endOperation_R1(op) {
          var cm = op.cm, display = cm.display;
          maybeClipScrollbars(cm);
          if (op.updateMaxLine) {
            findMaxLine(cm);
          }
          op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null || op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom || op.scrollToPos.to.line >= display.viewTo) || display.maxLineChanged && cm.options.lineWrapping;
          op.update = op.mustUpdate && new DisplayUpdate(cm, op.mustUpdate && { top: op.scrollTop, ensure: op.scrollToPos }, op.forceUpdate);
        }
        function endOperation_W1(op) {
          op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
        }
        function endOperation_R2(op) {
          var cm = op.cm, display = cm.display;
          if (op.updatedDisplay) {
            updateHeightsInViewport(cm);
          }
          op.barMeasure = measureForScrollbars(cm);
          if (display.maxLineChanged && !cm.options.lineWrapping) {
            op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
            cm.display.sizerWidth = op.adjustWidthTo;
            op.barMeasure.scrollWidth = Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
            op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
          }
          if (op.updatedDisplay || op.selectionChanged) {
            op.preparedSelection = display.input.prepareSelection();
          }
        }
        function endOperation_W2(op) {
          var cm = op.cm;
          if (op.adjustWidthTo != null) {
            cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
            if (op.maxScrollLeft < cm.doc.scrollLeft) {
              setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
            }
            cm.display.maxLineChanged = false;
          }
          var takeFocus = op.focus && op.focus == activeElt(root(cm));
          if (op.preparedSelection) {
            cm.display.input.showSelection(op.preparedSelection, takeFocus);
          }
          if (op.updatedDisplay || op.startHeight != cm.doc.height) {
            updateScrollbars(cm, op.barMeasure);
          }
          if (op.updatedDisplay) {
            setDocumentHeight(cm, op.barMeasure);
          }
          if (op.selectionChanged) {
            restartBlink(cm);
          }
          if (cm.state.focused && op.updateInput) {
            cm.display.input.reset(op.typing);
          }
          if (takeFocus) {
            ensureFocus(op.cm);
          }
        }
        function endOperation_finish(op) {
          var cm = op.cm, display = cm.display, doc2 = cm.doc;
          if (op.updatedDisplay) {
            postUpdateDisplay(cm, op.update);
          }
          if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos)) {
            display.wheelStartX = display.wheelStartY = null;
          }
          if (op.scrollTop != null) {
            setScrollTop(cm, op.scrollTop, op.forceScroll);
          }
          if (op.scrollLeft != null) {
            setScrollLeft(cm, op.scrollLeft, true, true);
          }
          if (op.scrollToPos) {
            var rect = scrollPosIntoView(
              cm,
              clipPos(doc2, op.scrollToPos.from),
              clipPos(doc2, op.scrollToPos.to),
              op.scrollToPos.margin
            );
            maybeScrollWindow(cm, rect);
          }
          var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
          if (hidden) {
            for (var i2 = 0; i2 < hidden.length; ++i2) {
              if (!hidden[i2].lines.length) {
                signal(hidden[i2], "hide");
              }
            }
          }
          if (unhidden) {
            for (var i$12 = 0; i$12 < unhidden.length; ++i$12) {
              if (unhidden[i$12].lines.length) {
                signal(unhidden[i$12], "unhide");
              }
            }
          }
          if (display.wrapper.offsetHeight) {
            doc2.scrollTop = cm.display.scroller.scrollTop;
          }
          if (op.changeObjs) {
            signal(cm, "changes", cm, op.changeObjs);
          }
          if (op.update) {
            op.update.finish();
          }
        }
        function runInOp(cm, f) {
          if (cm.curOp) {
            return f();
          }
          startOperation(cm);
          try {
            return f();
          } finally {
            endOperation(cm);
          }
        }
        function operation(cm, f) {
          return function() {
            if (cm.curOp) {
              return f.apply(cm, arguments);
            }
            startOperation(cm);
            try {
              return f.apply(cm, arguments);
            } finally {
              endOperation(cm);
            }
          };
        }
        function methodOp(f) {
          return function() {
            if (this.curOp) {
              return f.apply(this, arguments);
            }
            startOperation(this);
            try {
              return f.apply(this, arguments);
            } finally {
              endOperation(this);
            }
          };
        }
        function docMethodOp(f) {
          return function() {
            var cm = this.cm;
            if (!cm || cm.curOp) {
              return f.apply(this, arguments);
            }
            startOperation(cm);
            try {
              return f.apply(this, arguments);
            } finally {
              endOperation(cm);
            }
          };
        }
        function startWorker(cm, time) {
          if (cm.doc.highlightFrontier < cm.display.viewTo) {
            cm.state.highlight.set(time, bind(highlightWorker, cm));
          }
        }
        function highlightWorker(cm) {
          var doc2 = cm.doc;
          if (doc2.highlightFrontier >= cm.display.viewTo) {
            return;
          }
          var end = +/* @__PURE__ */ new Date() + cm.options.workTime;
          var context = getContextBefore(cm, doc2.highlightFrontier);
          var changedLines = [];
          doc2.iter(context.line, Math.min(doc2.first + doc2.size, cm.display.viewTo + 500), function(line) {
            if (context.line >= cm.display.viewFrom) {
              var oldStyles = line.styles;
              var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc2.mode, context.state) : null;
              var highlighted = highlightLine(cm, line, context, true);
              if (resetState) {
                context.state = resetState;
              }
              line.styles = highlighted.styles;
              var oldCls = line.styleClasses, newCls = highlighted.classes;
              if (newCls) {
                line.styleClasses = newCls;
              } else if (oldCls) {
                line.styleClasses = null;
              }
              var ischange = !oldStyles || oldStyles.length != line.styles.length || oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
              for (var i2 = 0; !ischange && i2 < oldStyles.length; ++i2) {
                ischange = oldStyles[i2] != line.styles[i2];
              }
              if (ischange) {
                changedLines.push(context.line);
              }
              line.stateAfter = context.save();
              context.nextLine();
            } else {
              if (line.text.length <= cm.options.maxHighlightLength) {
                processLine(cm, line.text, context);
              }
              line.stateAfter = context.line % 5 == 0 ? context.save() : null;
              context.nextLine();
            }
            if (+/* @__PURE__ */ new Date() > end) {
              startWorker(cm, cm.options.workDelay);
              return true;
            }
          });
          doc2.highlightFrontier = context.line;
          doc2.modeFrontier = Math.max(doc2.modeFrontier, context.line);
          if (changedLines.length) {
            runInOp(cm, function() {
              for (var i2 = 0; i2 < changedLines.length; i2++) {
                regLineChange(cm, changedLines[i2], "text");
              }
            });
          }
        }
        var DisplayUpdate = function(cm, viewport, force) {
          var display = cm.display;
          this.viewport = viewport;
          this.visible = visibleLines(display, cm.doc, viewport);
          this.editorIsHidden = !display.wrapper.offsetWidth;
          this.wrapperHeight = display.wrapper.clientHeight;
          this.wrapperWidth = display.wrapper.clientWidth;
          this.oldDisplayWidth = displayWidth(cm);
          this.force = force;
          this.dims = getDimensions(cm);
          this.events = [];
        };
        DisplayUpdate.prototype.signal = function(emitter2, type) {
          if (hasHandler(emitter2, type)) {
            this.events.push(arguments);
          }
        };
        DisplayUpdate.prototype.finish = function() {
          for (var i2 = 0; i2 < this.events.length; i2++) {
            signal.apply(null, this.events[i2]);
          }
        };
        function maybeClipScrollbars(cm) {
          var display = cm.display;
          if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
            display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
            display.heightForcer.style.height = scrollGap(cm) + "px";
            display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
            display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
            display.scrollbarsClipped = true;
          }
        }
        function selectionSnapshot(cm) {
          if (cm.hasFocus()) {
            return null;
          }
          var active = activeElt(root(cm));
          if (!active || !contains(cm.display.lineDiv, active)) {
            return null;
          }
          var result = { activeElt: active };
          if (window.getSelection) {
            var sel = win(cm).getSelection();
            if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
              result.anchorNode = sel.anchorNode;
              result.anchorOffset = sel.anchorOffset;
              result.focusNode = sel.focusNode;
              result.focusOffset = sel.focusOffset;
            }
          }
          return result;
        }
        function restoreSelection(snapshot) {
          if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt(rootNode(snapshot.activeElt))) {
            return;
          }
          snapshot.activeElt.focus();
          if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) && snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
            var doc2 = snapshot.activeElt.ownerDocument;
            var sel = doc2.defaultView.getSelection(), range2 = doc2.createRange();
            range2.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
            range2.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range2);
            sel.extend(snapshot.focusNode, snapshot.focusOffset);
          }
        }
        function updateDisplayIfNeeded(cm, update) {
          var display = cm.display, doc2 = cm.doc;
          if (update.editorIsHidden) {
            resetView(cm);
            return false;
          }
          if (!update.force && update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) && display.renderedView == display.view && countDirtyView(cm) == 0) {
            return false;
          }
          if (maybeUpdateLineNumberWidth(cm)) {
            resetView(cm);
            update.dims = getDimensions(cm);
          }
          var end = doc2.first + doc2.size;
          var from = Math.max(update.visible.from - cm.options.viewportMargin, doc2.first);
          var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
          if (display.viewFrom < from && from - display.viewFrom < 20) {
            from = Math.max(doc2.first, display.viewFrom);
          }
          if (display.viewTo > to && display.viewTo - to < 20) {
            to = Math.min(end, display.viewTo);
          }
          if (sawCollapsedSpans) {
            from = visualLineNo(cm.doc, from);
            to = visualLineEndNo(cm.doc, to);
          }
          var different = from != display.viewFrom || to != display.viewTo || display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
          adjustView(cm, from, to);
          display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
          cm.display.mover.style.top = display.viewOffset + "px";
          var toUpdate = countDirtyView(cm);
          if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo)) {
            return false;
          }
          var selSnapshot = selectionSnapshot(cm);
          if (toUpdate > 4) {
            display.lineDiv.style.display = "none";
          }
          patchDisplay(cm, display.updateLineNumbers, update.dims);
          if (toUpdate > 4) {
            display.lineDiv.style.display = "";
          }
          display.renderedView = display.view;
          restoreSelection(selSnapshot);
          removeChildren(display.cursorDiv);
          removeChildren(display.selectionDiv);
          display.gutters.style.height = display.sizer.style.minHeight = 0;
          if (different) {
            display.lastWrapHeight = update.wrapperHeight;
            display.lastWrapWidth = update.wrapperWidth;
            startWorker(cm, 400);
          }
          display.updateLineNumbers = null;
          return true;
        }
        function postUpdateDisplay(cm, update) {
          var viewport = update.viewport;
          for (var first = true; ; first = false) {
            if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
              if (viewport && viewport.top != null) {
                viewport = { top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top) };
              }
              update.visible = visibleLines(cm.display, cm.doc, viewport);
              if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo) {
                break;
              }
            } else if (first) {
              update.visible = visibleLines(cm.display, cm.doc, viewport);
            }
            if (!updateDisplayIfNeeded(cm, update)) {
              break;
            }
            updateHeightsInViewport(cm);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm);
            updateScrollbars(cm, barMeasure);
            setDocumentHeight(cm, barMeasure);
            update.force = false;
          }
          update.signal(cm, "update", cm);
          if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
            update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
            cm.display.reportedViewFrom = cm.display.viewFrom;
            cm.display.reportedViewTo = cm.display.viewTo;
          }
        }
        function updateDisplaySimple(cm, viewport) {
          var update = new DisplayUpdate(cm, viewport);
          if (updateDisplayIfNeeded(cm, update)) {
            updateHeightsInViewport(cm);
            postUpdateDisplay(cm, update);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm);
            updateScrollbars(cm, barMeasure);
            setDocumentHeight(cm, barMeasure);
            update.finish();
          }
        }
        function patchDisplay(cm, updateNumbersFrom, dims) {
          var display = cm.display, lineNumbers = cm.options.lineNumbers;
          var container = display.lineDiv, cur = container.firstChild;
          function rm(node2) {
            var next = node2.nextSibling;
            if (webkit && mac && cm.display.currentWheelTarget == node2) {
              node2.style.display = "none";
            } else {
              node2.parentNode.removeChild(node2);
            }
            return next;
          }
          var view = display.view, lineN = display.viewFrom;
          for (var i2 = 0; i2 < view.length; i2++) {
            var lineView = view[i2];
            if (lineView.hidden) ;
            else if (!lineView.node || lineView.node.parentNode != container) {
              var node = buildLineElement(cm, lineView, lineN, dims);
              container.insertBefore(node, cur);
            } else {
              while (cur != lineView.node) {
                cur = rm(cur);
              }
              var updateNumber = lineNumbers && updateNumbersFrom != null && updateNumbersFrom <= lineN && lineView.lineNumber;
              if (lineView.changes) {
                if (indexOf(lineView.changes, "gutter") > -1) {
                  updateNumber = false;
                }
                updateLineForChanges(cm, lineView, lineN, dims);
              }
              if (updateNumber) {
                removeChildren(lineView.lineNumber);
                lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
              }
              cur = lineView.node.nextSibling;
            }
            lineN += lineView.size;
          }
          while (cur) {
            cur = rm(cur);
          }
        }
        function updateGutterSpace(display) {
          var width = display.gutters.offsetWidth;
          display.sizer.style.marginLeft = width + "px";
          signalLater(display, "gutterChanged", display);
        }
        function setDocumentHeight(cm, measure) {
          cm.display.sizer.style.minHeight = measure.docHeight + "px";
          cm.display.heightForcer.style.top = measure.docHeight + "px";
          cm.display.gutters.style.height = measure.docHeight + cm.display.barHeight + scrollGap(cm) + "px";
        }
        function alignHorizontally(cm) {
          var display = cm.display, view = display.view;
          if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) {
            return;
          }
          var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
          var gutterW = display.gutters.offsetWidth, left = comp + "px";
          for (var i2 = 0; i2 < view.length; i2++) {
            if (!view[i2].hidden) {
              if (cm.options.fixedGutter) {
                if (view[i2].gutter) {
                  view[i2].gutter.style.left = left;
                }
                if (view[i2].gutterBackground) {
                  view[i2].gutterBackground.style.left = left;
                }
              }
              var align = view[i2].alignable;
              if (align) {
                for (var j = 0; j < align.length; j++) {
                  align[j].style.left = left;
                }
              }
            }
          }
          if (cm.options.fixedGutter) {
            display.gutters.style.left = comp + gutterW + "px";
          }
        }
        function maybeUpdateLineNumberWidth(cm) {
          if (!cm.options.lineNumbers) {
            return false;
          }
          var doc2 = cm.doc, last = lineNumberFor(cm.options, doc2.first + doc2.size - 1), display = cm.display;
          if (last.length != display.lineNumChars) {
            var test = display.measure.appendChild(elt(
              "div",
              [elt("div", last)],
              "CodeMirror-linenumber CodeMirror-gutter-elt"
            ));
            var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
            display.lineGutter.style.width = "";
            display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
            display.lineNumWidth = display.lineNumInnerWidth + padding;
            display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
            display.lineGutter.style.width = display.lineNumWidth + "px";
            updateGutterSpace(cm.display);
            return true;
          }
          return false;
        }
        function getGutters(gutters, lineNumbers) {
          var result = [], sawLineNumbers = false;
          for (var i2 = 0; i2 < gutters.length; i2++) {
            var name = gutters[i2], style = null;
            if (typeof name != "string") {
              style = name.style;
              name = name.className;
            }
            if (name == "CodeMirror-linenumbers") {
              if (!lineNumbers) {
                continue;
              } else {
                sawLineNumbers = true;
              }
            }
            result.push({ className: name, style });
          }
          if (lineNumbers && !sawLineNumbers) {
            result.push({ className: "CodeMirror-linenumbers", style: null });
          }
          return result;
        }
        function renderGutters(display) {
          var gutters = display.gutters, specs = display.gutterSpecs;
          removeChildren(gutters);
          display.lineGutter = null;
          for (var i2 = 0; i2 < specs.length; ++i2) {
            var ref = specs[i2];
            var className = ref.className;
            var style = ref.style;
            var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
            if (style) {
              gElt.style.cssText = style;
            }
            if (className == "CodeMirror-linenumbers") {
              display.lineGutter = gElt;
              gElt.style.width = (display.lineNumWidth || 1) + "px";
            }
          }
          gutters.style.display = specs.length ? "" : "none";
          updateGutterSpace(display);
        }
        function updateGutters(cm) {
          renderGutters(cm.display);
          regChange(cm);
          alignHorizontally(cm);
        }
        function Display(place, doc2, input, options) {
          var d = this;
          this.input = input;
          d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
          d.scrollbarFiller.setAttribute("cm-not-content", "true");
          d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
          d.gutterFiller.setAttribute("cm-not-content", "true");
          d.lineDiv = eltP("div", null, "CodeMirror-code");
          d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
          d.cursorDiv = elt("div", null, "CodeMirror-cursors");
          d.measure = elt("div", null, "CodeMirror-measure");
          d.lineMeasure = elt("div", null, "CodeMirror-measure");
          d.lineSpace = eltP(
            "div",
            [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
            null,
            "position: relative; outline: none"
          );
          var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
          d.mover = elt("div", [lines], null, "position: relative");
          d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
          d.sizerWidth = null;
          d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
          d.gutters = elt("div", null, "CodeMirror-gutters");
          d.lineGutter = null;
          d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
          d.scroller.setAttribute("tabIndex", "-1");
          d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
          if (chrome && chrome_version >= 105) {
            d.wrapper.style.clipPath = "inset(0px)";
          }
          d.wrapper.setAttribute("translate", "no");
          if (ie && ie_version < 8) {
            d.gutters.style.zIndex = -1;
            d.scroller.style.paddingRight = 0;
          }
          if (!webkit && !(gecko && mobile)) {
            d.scroller.draggable = true;
          }
          if (place) {
            if (place.appendChild) {
              place.appendChild(d.wrapper);
            } else {
              place(d.wrapper);
            }
          }
          d.viewFrom = d.viewTo = doc2.first;
          d.reportedViewFrom = d.reportedViewTo = doc2.first;
          d.view = [];
          d.renderedView = null;
          d.externalMeasured = null;
          d.viewOffset = 0;
          d.lastWrapHeight = d.lastWrapWidth = 0;
          d.updateLineNumbers = null;
          d.nativeBarWidth = d.barHeight = d.barWidth = 0;
          d.scrollbarsClipped = false;
          d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
          d.alignWidgets = false;
          d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
          d.maxLine = null;
          d.maxLineLength = 0;
          d.maxLineChanged = false;
          d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;
          d.shift = false;
          d.selForContextMenu = null;
          d.activeTouch = null;
          d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
          renderGutters(d);
          input.init(d);
        }
        var wheelSamples = 0, wheelPixelsPerUnit = null;
        if (ie) {
          wheelPixelsPerUnit = -0.53;
        } else if (gecko) {
          wheelPixelsPerUnit = 15;
        } else if (chrome) {
          wheelPixelsPerUnit = -0.7;
        } else if (safari) {
          wheelPixelsPerUnit = -1 / 3;
        }
        function wheelEventDelta(e) {
          var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
          if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) {
            dx = e.detail;
          }
          if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) {
            dy = e.detail;
          } else if (dy == null) {
            dy = e.wheelDelta;
          }
          return { x: dx, y: dy };
        }
        function wheelEventPixels(e) {
          var delta = wheelEventDelta(e);
          delta.x *= wheelPixelsPerUnit;
          delta.y *= wheelPixelsPerUnit;
          return delta;
        }
        function onScrollWheel(cm, e) {
          if (chrome && chrome_version == 102) {
            if (cm.display.chromeScrollHack == null) {
              cm.display.sizer.style.pointerEvents = "none";
            } else {
              clearTimeout(cm.display.chromeScrollHack);
            }
            cm.display.chromeScrollHack = setTimeout(function() {
              cm.display.chromeScrollHack = null;
              cm.display.sizer.style.pointerEvents = "";
            }, 100);
          }
          var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
          var pixelsPerUnit = wheelPixelsPerUnit;
          if (e.deltaMode === 0) {
            dx = e.deltaX;
            dy = e.deltaY;
            pixelsPerUnit = 1;
          }
          var display = cm.display, scroll = display.scroller;
          var canScrollX = scroll.scrollWidth > scroll.clientWidth;
          var canScrollY = scroll.scrollHeight > scroll.clientHeight;
          if (!(dx && canScrollX || dy && canScrollY)) {
            return;
          }
          if (dy && mac && webkit) {
            outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
              for (var i2 = 0; i2 < view.length; i2++) {
                if (view[i2].node == cur) {
                  cm.display.currentWheelTarget = cur;
                  break outer;
                }
              }
            }
          }
          if (dx && !gecko && !presto && pixelsPerUnit != null) {
            if (dy && canScrollY) {
              updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * pixelsPerUnit));
            }
            setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * pixelsPerUnit));
            if (!dy || dy && canScrollY) {
              e_preventDefault(e);
            }
            display.wheelStartX = null;
            return;
          }
          if (dy && pixelsPerUnit != null) {
            var pixels = dy * pixelsPerUnit;
            var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
            if (pixels < 0) {
              top = Math.max(0, top + pixels - 50);
            } else {
              bot = Math.min(cm.doc.height, bot + pixels + 50);
            }
            updateDisplaySimple(cm, { top, bottom: bot });
          }
          if (wheelSamples < 20 && e.deltaMode !== 0) {
            if (display.wheelStartX == null) {
              display.wheelStartX = scroll.scrollLeft;
              display.wheelStartY = scroll.scrollTop;
              display.wheelDX = dx;
              display.wheelDY = dy;
              setTimeout(function() {
                if (display.wheelStartX == null) {
                  return;
                }
                var movedX = scroll.scrollLeft - display.wheelStartX;
                var movedY = scroll.scrollTop - display.wheelStartY;
                var sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
                display.wheelStartX = display.wheelStartY = null;
                if (!sample) {
                  return;
                }
                wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
                ++wheelSamples;
              }, 200);
            } else {
              display.wheelDX += dx;
              display.wheelDY += dy;
            }
          }
        }
        var Selection = function(ranges, primIndex) {
          this.ranges = ranges;
          this.primIndex = primIndex;
        };
        Selection.prototype.primary = function() {
          return this.ranges[this.primIndex];
        };
        Selection.prototype.equals = function(other) {
          if (other == this) {
            return true;
          }
          if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) {
            return false;
          }
          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            var here = this.ranges[i2], there = other.ranges[i2];
            if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) {
              return false;
            }
          }
          return true;
        };
        Selection.prototype.deepCopy = function() {
          var out = [];
          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            out[i2] = new Range(copyPos(this.ranges[i2].anchor), copyPos(this.ranges[i2].head));
          }
          return new Selection(out, this.primIndex);
        };
        Selection.prototype.somethingSelected = function() {
          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            if (!this.ranges[i2].empty()) {
              return true;
            }
          }
          return false;
        };
        Selection.prototype.contains = function(pos, end) {
          if (!end) {
            end = pos;
          }
          for (var i2 = 0; i2 < this.ranges.length; i2++) {
            var range2 = this.ranges[i2];
            if (cmp(end, range2.from()) >= 0 && cmp(pos, range2.to()) <= 0) {
              return i2;
            }
          }
          return -1;
        };
        var Range = function(anchor, head) {
          this.anchor = anchor;
          this.head = head;
        };
        Range.prototype.from = function() {
          return minPos(this.anchor, this.head);
        };
        Range.prototype.to = function() {
          return maxPos(this.anchor, this.head);
        };
        Range.prototype.empty = function() {
          return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        };
        function normalizeSelection(cm, ranges, primIndex) {
          var mayTouch = cm && cm.options.selectionsMayTouch;
          var prim = ranges[primIndex];
          ranges.sort(function(a, b) {
            return cmp(a.from(), b.from());
          });
          primIndex = indexOf(ranges, prim);
          for (var i2 = 1; i2 < ranges.length; i2++) {
            var cur = ranges[i2], prev = ranges[i2 - 1];
            var diff = cmp(prev.to(), cur.from());
            if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
              var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
              var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
              if (i2 <= primIndex) {
                --primIndex;
              }
              ranges.splice(--i2, 2, new Range(inv ? to : from, inv ? from : to));
            }
          }
          return new Selection(ranges, primIndex);
        }
        function simpleSelection(anchor, head) {
          return new Selection([new Range(anchor, head || anchor)], 0);
        }
        function changeEnd(change) {
          if (!change.text) {
            return change.to;
          }
          return Pos(
            change.from.line + change.text.length - 1,
            lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0)
          );
        }
        function adjustForChange(pos, change) {
          if (cmp(pos, change.from) < 0) {
            return pos;
          }
          if (cmp(pos, change.to) <= 0) {
            return changeEnd(change);
          }
          var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
          if (pos.line == change.to.line) {
            ch += changeEnd(change).ch - change.to.ch;
          }
          return Pos(line, ch);
        }
        function computeSelAfterChange(doc2, change) {
          var out = [];
          for (var i2 = 0; i2 < doc2.sel.ranges.length; i2++) {
            var range2 = doc2.sel.ranges[i2];
            out.push(new Range(
              adjustForChange(range2.anchor, change),
              adjustForChange(range2.head, change)
            ));
          }
          return normalizeSelection(doc2.cm, out, doc2.sel.primIndex);
        }
        function offsetPos(pos, old, nw) {
          if (pos.line == old.line) {
            return Pos(nw.line, pos.ch - old.ch + nw.ch);
          } else {
            return Pos(nw.line + (pos.line - old.line), pos.ch);
          }
        }
        function computeReplacedSel(doc2, changes, hint) {
          var out = [];
          var oldPrev = Pos(doc2.first, 0), newPrev = oldPrev;
          for (var i2 = 0; i2 < changes.length; i2++) {
            var change = changes[i2];
            var from = offsetPos(change.from, oldPrev, newPrev);
            var to = offsetPos(changeEnd(change), oldPrev, newPrev);
            oldPrev = change.to;
            newPrev = to;
            if (hint == "around") {
              var range2 = doc2.sel.ranges[i2], inv = cmp(range2.head, range2.anchor) < 0;
              out[i2] = new Range(inv ? to : from, inv ? from : to);
            } else {
              out[i2] = new Range(from, from);
            }
          }
          return new Selection(out, doc2.sel.primIndex);
        }
        function loadMode(cm) {
          cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
          resetModeState(cm);
        }
        function resetModeState(cm) {
          cm.doc.iter(function(line) {
            if (line.stateAfter) {
              line.stateAfter = null;
            }
            if (line.styles) {
              line.styles = null;
            }
          });
          cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
          startWorker(cm, 100);
          cm.state.modeGen++;
          if (cm.curOp) {
            regChange(cm);
          }
        }
        function isWholeLineUpdate(doc2, change) {
          return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" && (!doc2.cm || doc2.cm.options.wholeLineUpdateBefore);
        }
        function updateDoc(doc2, change, markedSpans, estimateHeight2) {
          function spansFor(n) {
            return markedSpans ? markedSpans[n] : null;
          }
          function update(line, text2, spans) {
            updateLine(line, text2, spans, estimateHeight2);
            signalLater(line, "change", line, change);
          }
          function linesFor(start, end) {
            var result = [];
            for (var i2 = start; i2 < end; ++i2) {
              result.push(new Line(text[i2], spansFor(i2), estimateHeight2));
            }
            return result;
          }
          var from = change.from, to = change.to, text = change.text;
          var firstLine = getLine(doc2, from.line), lastLine = getLine(doc2, to.line);
          var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;
          if (change.full) {
            doc2.insert(0, linesFor(0, text.length));
            doc2.remove(text.length, doc2.size - text.length);
          } else if (isWholeLineUpdate(doc2, change)) {
            var added = linesFor(0, text.length - 1);
            update(lastLine, lastLine.text, lastSpans);
            if (nlines) {
              doc2.remove(from.line, nlines);
            }
            if (added.length) {
              doc2.insert(from.line, added);
            }
          } else if (firstLine == lastLine) {
            if (text.length == 1) {
              update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
            } else {
              var added$1 = linesFor(1, text.length - 1);
              added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight2));
              update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
              doc2.insert(from.line + 1, added$1);
            }
          } else if (text.length == 1) {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
            doc2.remove(from.line + 1, nlines);
          } else {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
            update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
            var added$2 = linesFor(1, text.length - 1);
            if (nlines > 1) {
              doc2.remove(from.line + 1, nlines - 1);
            }
            doc2.insert(from.line + 1, added$2);
          }
          signalLater(doc2, "change", doc2, change);
        }
        function linkedDocs(doc2, f, sharedHistOnly) {
          function propagate(doc3, skip, sharedHist) {
            if (doc3.linked) {
              for (var i2 = 0; i2 < doc3.linked.length; ++i2) {
                var rel = doc3.linked[i2];
                if (rel.doc == skip) {
                  continue;
                }
                var shared = sharedHist && rel.sharedHist;
                if (sharedHistOnly && !shared) {
                  continue;
                }
                f(rel.doc, shared);
                propagate(rel.doc, doc3, shared);
              }
            }
          }
          propagate(doc2, null, true);
        }
        function attachDoc(cm, doc2) {
          if (doc2.cm) {
            throw new Error("This document is already in use.");
          }
          cm.doc = doc2;
          doc2.cm = cm;
          estimateLineHeights(cm);
          loadMode(cm);
          setDirectionClass(cm);
          cm.options.direction = doc2.direction;
          if (!cm.options.lineWrapping) {
            findMaxLine(cm);
          }
          cm.options.mode = doc2.modeOption;
          regChange(cm);
        }
        function setDirectionClass(cm) {
          (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
        }
        function directionChanged(cm) {
          runInOp(cm, function() {
            setDirectionClass(cm);
            regChange(cm);
          });
        }
        function History(prev) {
          this.done = [];
          this.undone = [];
          this.undoDepth = prev ? prev.undoDepth : Infinity;
          this.lastModTime = this.lastSelTime = 0;
          this.lastOp = this.lastSelOp = null;
          this.lastOrigin = this.lastSelOrigin = null;
          this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
        }
        function historyChangeFromChange(doc2, change) {
          var histChange = { from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc2, change.from, change.to) };
          attachLocalSpans(doc2, histChange, change.from.line, change.to.line + 1);
          linkedDocs(doc2, function(doc3) {
            return attachLocalSpans(doc3, histChange, change.from.line, change.to.line + 1);
          }, true);
          return histChange;
        }
        function clearSelectionEvents(array) {
          while (array.length) {
            var last = lst(array);
            if (last.ranges) {
              array.pop();
            } else {
              break;
            }
          }
        }
        function lastChangeEvent(hist, force) {
          if (force) {
            clearSelectionEvents(hist.done);
            return lst(hist.done);
          } else if (hist.done.length && !lst(hist.done).ranges) {
            return lst(hist.done);
          } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
            hist.done.pop();
            return lst(hist.done);
          }
        }
        function addChangeToHistory(doc2, change, selAfter, opId) {
          var hist = doc2.history;
          hist.undone.length = 0;
          var time = +/* @__PURE__ */ new Date(), cur;
          var last;
          if ((hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && (change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc2.cm ? doc2.cm.options.historyEventDelay : 500) || change.origin.charAt(0) == "*")) && (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
            last = lst(cur.changes);
            if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
              last.to = changeEnd(change);
            } else {
              cur.changes.push(historyChangeFromChange(doc2, change));
            }
          } else {
            var before = lst(hist.done);
            if (!before || !before.ranges) {
              pushSelectionToHistory(doc2.sel, hist.done);
            }
            cur = {
              changes: [historyChangeFromChange(doc2, change)],
              generation: hist.generation
            };
            hist.done.push(cur);
            while (hist.done.length > hist.undoDepth) {
              hist.done.shift();
              if (!hist.done[0].ranges) {
                hist.done.shift();
              }
            }
          }
          hist.done.push(selAfter);
          hist.generation = ++hist.maxGeneration;
          hist.lastModTime = hist.lastSelTime = time;
          hist.lastOp = hist.lastSelOp = opId;
          hist.lastOrigin = hist.lastSelOrigin = change.origin;
          if (!last) {
            signal(doc2, "historyAdded");
          }
        }
        function selectionEventCanBeMerged(doc2, origin, prev, sel) {
          var ch = origin.charAt(0);
          return ch == "*" || ch == "+" && prev.ranges.length == sel.ranges.length && prev.somethingSelected() == sel.somethingSelected() && /* @__PURE__ */ new Date() - doc2.history.lastSelTime <= (doc2.cm ? doc2.cm.options.historyEventDelay : 500);
        }
        function addSelectionToHistory(doc2, sel, opId, options) {
          var hist = doc2.history, origin = options && options.origin;
          if (opId == hist.lastSelOp || origin && hist.lastSelOrigin == origin && (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin || selectionEventCanBeMerged(doc2, origin, lst(hist.done), sel))) {
            hist.done[hist.done.length - 1] = sel;
          } else {
            pushSelectionToHistory(sel, hist.done);
          }
          hist.lastSelTime = +/* @__PURE__ */ new Date();
          hist.lastSelOrigin = origin;
          hist.lastSelOp = opId;
          if (options && options.clearRedo !== false) {
            clearSelectionEvents(hist.undone);
          }
        }
        function pushSelectionToHistory(sel, dest) {
          var top = lst(dest);
          if (!(top && top.ranges && top.equals(sel))) {
            dest.push(sel);
          }
        }
        function attachLocalSpans(doc2, change, from, to) {
          var existing = change["spans_" + doc2.id], n = 0;
          doc2.iter(Math.max(doc2.first, from), Math.min(doc2.first + doc2.size, to), function(line) {
            if (line.markedSpans) {
              (existing || (existing = change["spans_" + doc2.id] = {}))[n] = line.markedSpans;
            }
            ++n;
          });
        }
        function removeClearedSpans(spans) {
          if (!spans) {
            return null;
          }
          var out;
          for (var i2 = 0; i2 < spans.length; ++i2) {
            if (spans[i2].marker.explicitlyCleared) {
              if (!out) {
                out = spans.slice(0, i2);
              }
            } else if (out) {
              out.push(spans[i2]);
            }
          }
          return !out ? spans : out.length ? out : null;
        }
        function getOldSpans(doc2, change) {
          var found = change["spans_" + doc2.id];
          if (!found) {
            return null;
          }
          var nw = [];
          for (var i2 = 0; i2 < change.text.length; ++i2) {
            nw.push(removeClearedSpans(found[i2]));
          }
          return nw;
        }
        function mergeOldSpans(doc2, change) {
          var old = getOldSpans(doc2, change);
          var stretched = stretchSpansOverChange(doc2, change);
          if (!old) {
            return stretched;
          }
          if (!stretched) {
            return old;
          }
          for (var i2 = 0; i2 < old.length; ++i2) {
            var oldCur = old[i2], stretchCur = stretched[i2];
            if (oldCur && stretchCur) {
              spans: for (var j = 0; j < stretchCur.length; ++j) {
                var span = stretchCur[j];
                for (var k = 0; k < oldCur.length; ++k) {
                  if (oldCur[k].marker == span.marker) {
                    continue spans;
                  }
                }
                oldCur.push(span);
              }
            } else if (stretchCur) {
              old[i2] = stretchCur;
            }
          }
          return old;
        }
        function copyHistoryArray(events, newGroup, instantiateSel) {
          var copy = [];
          for (var i2 = 0; i2 < events.length; ++i2) {
            var event = events[i2];
            if (event.ranges) {
              copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
              continue;
            }
            var changes = event.changes, newChanges = [];
            copy.push({ changes: newChanges });
            for (var j = 0; j < changes.length; ++j) {
              var change = changes[j], m = void 0;
              newChanges.push({ from: change.from, to: change.to, text: change.text });
              if (newGroup) {
                for (var prop2 in change) {
                  if (m = prop2.match(/^spans_(\d+)$/)) {
                    if (indexOf(newGroup, Number(m[1])) > -1) {
                      lst(newChanges)[prop2] = change[prop2];
                      delete change[prop2];
                    }
                  }
                }
              }
            }
          }
          return copy;
        }
        function extendRange(range2, head, other, extend) {
          if (extend) {
            var anchor = range2.anchor;
            if (other) {
              var posBefore = cmp(head, anchor) < 0;
              if (posBefore != cmp(other, anchor) < 0) {
                anchor = head;
                head = other;
              } else if (posBefore != cmp(head, other) < 0) {
                head = other;
              }
            }
            return new Range(anchor, head);
          } else {
            return new Range(other || head, head);
          }
        }
        function extendSelection(doc2, head, other, options, extend) {
          if (extend == null) {
            extend = doc2.cm && (doc2.cm.display.shift || doc2.extend);
          }
          setSelection(doc2, new Selection([extendRange(doc2.sel.primary(), head, other, extend)], 0), options);
        }
        function extendSelections(doc2, heads, options) {
          var out = [];
          var extend = doc2.cm && (doc2.cm.display.shift || doc2.extend);
          for (var i2 = 0; i2 < doc2.sel.ranges.length; i2++) {
            out[i2] = extendRange(doc2.sel.ranges[i2], heads[i2], null, extend);
          }
          var newSel = normalizeSelection(doc2.cm, out, doc2.sel.primIndex);
          setSelection(doc2, newSel, options);
        }
        function replaceOneSelection(doc2, i2, range2, options) {
          var ranges = doc2.sel.ranges.slice(0);
          ranges[i2] = range2;
          setSelection(doc2, normalizeSelection(doc2.cm, ranges, doc2.sel.primIndex), options);
        }
        function setSimpleSelection(doc2, anchor, head, options) {
          setSelection(doc2, simpleSelection(anchor, head), options);
        }
        function filterSelectionChange(doc2, sel, options) {
          var obj = {
            ranges: sel.ranges,
            update: function(ranges) {
              this.ranges = [];
              for (var i2 = 0; i2 < ranges.length; i2++) {
                this.ranges[i2] = new Range(
                  clipPos(doc2, ranges[i2].anchor),
                  clipPos(doc2, ranges[i2].head)
                );
              }
            },
            origin: options && options.origin
          };
          signal(doc2, "beforeSelectionChange", doc2, obj);
          if (doc2.cm) {
            signal(doc2.cm, "beforeSelectionChange", doc2.cm, obj);
          }
          if (obj.ranges != sel.ranges) {
            return normalizeSelection(doc2.cm, obj.ranges, obj.ranges.length - 1);
          } else {
            return sel;
          }
        }
        function setSelectionReplaceHistory(doc2, sel, options) {
          var done = doc2.history.done, last = lst(done);
          if (last && last.ranges) {
            done[done.length - 1] = sel;
            setSelectionNoUndo(doc2, sel, options);
          } else {
            setSelection(doc2, sel, options);
          }
        }
        function setSelection(doc2, sel, options) {
          setSelectionNoUndo(doc2, sel, options);
          addSelectionToHistory(doc2, doc2.sel, doc2.cm ? doc2.cm.curOp.id : NaN, options);
        }
        function setSelectionNoUndo(doc2, sel, options) {
          if (hasHandler(doc2, "beforeSelectionChange") || doc2.cm && hasHandler(doc2.cm, "beforeSelectionChange")) {
            sel = filterSelectionChange(doc2, sel, options);
          }
          var bias = options && options.bias || (cmp(sel.primary().head, doc2.sel.primary().head) < 0 ? -1 : 1);
          setSelectionInner(doc2, skipAtomicInSelection(doc2, sel, bias, true));
          if (!(options && options.scroll === false) && doc2.cm && doc2.cm.getOption("readOnly") != "nocursor") {
            ensureCursorVisible(doc2.cm);
          }
        }
        function setSelectionInner(doc2, sel) {
          if (sel.equals(doc2.sel)) {
            return;
          }
          doc2.sel = sel;
          if (doc2.cm) {
            doc2.cm.curOp.updateInput = 1;
            doc2.cm.curOp.selectionChanged = true;
            signalCursorActivity(doc2.cm);
          }
          signalLater(doc2, "cursorActivity", doc2);
        }
        function reCheckSelection(doc2) {
          setSelectionInner(doc2, skipAtomicInSelection(doc2, doc2.sel, null, false));
        }
        function skipAtomicInSelection(doc2, sel, bias, mayClear) {
          var out;
          for (var i2 = 0; i2 < sel.ranges.length; i2++) {
            var range2 = sel.ranges[i2];
            var old = sel.ranges.length == doc2.sel.ranges.length && doc2.sel.ranges[i2];
            var newAnchor = skipAtomic(doc2, range2.anchor, old && old.anchor, bias, mayClear);
            var newHead = range2.head == range2.anchor ? newAnchor : skipAtomic(doc2, range2.head, old && old.head, bias, mayClear);
            if (out || newAnchor != range2.anchor || newHead != range2.head) {
              if (!out) {
                out = sel.ranges.slice(0, i2);
              }
              out[i2] = new Range(newAnchor, newHead);
            }
          }
          return out ? normalizeSelection(doc2.cm, out, sel.primIndex) : sel;
        }
        function skipAtomicInner(doc2, pos, oldPos, dir, mayClear) {
          var line = getLine(doc2, pos.line);
          if (line.markedSpans) {
            for (var i2 = 0; i2 < line.markedSpans.length; ++i2) {
              var sp = line.markedSpans[i2], m = sp.marker;
              var preventCursorLeft = "selectLeft" in m ? !m.selectLeft : m.inclusiveLeft;
              var preventCursorRight = "selectRight" in m ? !m.selectRight : m.inclusiveRight;
              if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) && (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
                if (mayClear) {
                  signal(m, "beforeCursorEnter");
                  if (m.explicitlyCleared) {
                    if (!line.markedSpans) {
                      break;
                    } else {
                      --i2;
                      continue;
                    }
                  }
                }
                if (!m.atomic) {
                  continue;
                }
                if (oldPos) {
                  var near = m.find(dir < 0 ? 1 : -1), diff = void 0;
                  if (dir < 0 ? preventCursorRight : preventCursorLeft) {
                    near = movePos(doc2, near, -dir, near && near.line == pos.line ? line : null);
                  }
                  if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0)) {
                    return skipAtomicInner(doc2, near, pos, dir, mayClear);
                  }
                }
                var far = m.find(dir < 0 ? -1 : 1);
                if (dir < 0 ? preventCursorLeft : preventCursorRight) {
                  far = movePos(doc2, far, dir, far.line == pos.line ? line : null);
                }
                return far ? skipAtomicInner(doc2, far, pos, dir, mayClear) : null;
              }
            }
          }
          return pos;
        }
        function skipAtomic(doc2, pos, oldPos, bias, mayClear) {
          var dir = bias || 1;
          var found = skipAtomicInner(doc2, pos, oldPos, dir, mayClear) || !mayClear && skipAtomicInner(doc2, pos, oldPos, dir, true) || skipAtomicInner(doc2, pos, oldPos, -dir, mayClear) || !mayClear && skipAtomicInner(doc2, pos, oldPos, -dir, true);
          if (!found) {
            doc2.cantEdit = true;
            return Pos(doc2.first, 0);
          }
          return found;
        }
        function movePos(doc2, pos, dir, line) {
          if (dir < 0 && pos.ch == 0) {
            if (pos.line > doc2.first) {
              return clipPos(doc2, Pos(pos.line - 1));
            } else {
              return null;
            }
          } else if (dir > 0 && pos.ch == (line || getLine(doc2, pos.line)).text.length) {
            if (pos.line < doc2.first + doc2.size - 1) {
              return Pos(pos.line + 1, 0);
            } else {
              return null;
            }
          } else {
            return new Pos(pos.line, pos.ch + dir);
          }
        }
        function selectAll(cm) {
          cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
        }
        function filterChange(doc2, change, update) {
          var obj = {
            canceled: false,
            from: change.from,
            to: change.to,
            text: change.text,
            origin: change.origin,
            cancel: function() {
              return obj.canceled = true;
            }
          };
          if (update) {
            obj.update = function(from, to, text, origin) {
              if (from) {
                obj.from = clipPos(doc2, from);
              }
              if (to) {
                obj.to = clipPos(doc2, to);
              }
              if (text) {
                obj.text = text;
              }
              if (origin !== void 0) {
                obj.origin = origin;
              }
            };
          }
          signal(doc2, "beforeChange", doc2, obj);
          if (doc2.cm) {
            signal(doc2.cm, "beforeChange", doc2.cm, obj);
          }
          if (obj.canceled) {
            if (doc2.cm) {
              doc2.cm.curOp.updateInput = 2;
            }
            return null;
          }
          return { from: obj.from, to: obj.to, text: obj.text, origin: obj.origin };
        }
        function makeChange(doc2, change, ignoreReadOnly) {
          if (doc2.cm) {
            if (!doc2.cm.curOp) {
              return operation(doc2.cm, makeChange)(doc2, change, ignoreReadOnly);
            }
            if (doc2.cm.state.suppressEdits) {
              return;
            }
          }
          if (hasHandler(doc2, "beforeChange") || doc2.cm && hasHandler(doc2.cm, "beforeChange")) {
            change = filterChange(doc2, change, true);
            if (!change) {
              return;
            }
          }
          var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc2, change.from, change.to);
          if (split) {
            for (var i2 = split.length - 1; i2 >= 0; --i2) {
              makeChangeInner(doc2, { from: split[i2].from, to: split[i2].to, text: i2 ? [""] : change.text, origin: change.origin });
            }
          } else {
            makeChangeInner(doc2, change);
          }
        }
        function makeChangeInner(doc2, change) {
          if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) {
            return;
          }
          var selAfter = computeSelAfterChange(doc2, change);
          addChangeToHistory(doc2, change, selAfter, doc2.cm ? doc2.cm.curOp.id : NaN);
          makeChangeSingleDoc(doc2, change, selAfter, stretchSpansOverChange(doc2, change));
          var rebased = [];
          linkedDocs(doc2, function(doc3, sharedHist) {
            if (!sharedHist && indexOf(rebased, doc3.history) == -1) {
              rebaseHist(doc3.history, change);
              rebased.push(doc3.history);
            }
            makeChangeSingleDoc(doc3, change, null, stretchSpansOverChange(doc3, change));
          });
        }
        function makeChangeFromHistory(doc2, type, allowSelectionOnly) {
          var suppress = doc2.cm && doc2.cm.state.suppressEdits;
          if (suppress && !allowSelectionOnly) {
            return;
          }
          var hist = doc2.history, event, selAfter = doc2.sel;
          var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;
          var i2 = 0;
          for (; i2 < source.length; i2++) {
            event = source[i2];
            if (allowSelectionOnly ? event.ranges && !event.equals(doc2.sel) : !event.ranges) {
              break;
            }
          }
          if (i2 == source.length) {
            return;
          }
          hist.lastOrigin = hist.lastSelOrigin = null;
          for (; ; ) {
            event = source.pop();
            if (event.ranges) {
              pushSelectionToHistory(event, dest);
              if (allowSelectionOnly && !event.equals(doc2.sel)) {
                setSelection(doc2, event, { clearRedo: false });
                return;
              }
              selAfter = event;
            } else if (suppress) {
              source.push(event);
              return;
            } else {
              break;
            }
          }
          var antiChanges = [];
          pushSelectionToHistory(selAfter, dest);
          dest.push({ changes: antiChanges, generation: hist.generation });
          hist.generation = event.generation || ++hist.maxGeneration;
          var filter = hasHandler(doc2, "beforeChange") || doc2.cm && hasHandler(doc2.cm, "beforeChange");
          var loop = function(i3) {
            var change = event.changes[i3];
            change.origin = type;
            if (filter && !filterChange(doc2, change, false)) {
              source.length = 0;
              return {};
            }
            antiChanges.push(historyChangeFromChange(doc2, change));
            var after = i3 ? computeSelAfterChange(doc2, change) : lst(source);
            makeChangeSingleDoc(doc2, change, after, mergeOldSpans(doc2, change));
            if (!i3 && doc2.cm) {
              doc2.cm.scrollIntoView({ from: change.from, to: changeEnd(change) });
            }
            var rebased = [];
            linkedDocs(doc2, function(doc3, sharedHist) {
              if (!sharedHist && indexOf(rebased, doc3.history) == -1) {
                rebaseHist(doc3.history, change);
                rebased.push(doc3.history);
              }
              makeChangeSingleDoc(doc3, change, null, mergeOldSpans(doc3, change));
            });
          };
          for (var i$12 = event.changes.length - 1; i$12 >= 0; --i$12) {
            var returned = loop(i$12);
            if (returned) return returned.v;
          }
        }
        function shiftDoc(doc2, distance) {
          if (distance == 0) {
            return;
          }
          doc2.first += distance;
          doc2.sel = new Selection(map(doc2.sel.ranges, function(range2) {
            return new Range(
              Pos(range2.anchor.line + distance, range2.anchor.ch),
              Pos(range2.head.line + distance, range2.head.ch)
            );
          }), doc2.sel.primIndex);
          if (doc2.cm) {
            regChange(doc2.cm, doc2.first, doc2.first - distance, distance);
            for (var d = doc2.cm.display, l = d.viewFrom; l < d.viewTo; l++) {
              regLineChange(doc2.cm, l, "gutter");
            }
          }
        }
        function makeChangeSingleDoc(doc2, change, selAfter, spans) {
          if (doc2.cm && !doc2.cm.curOp) {
            return operation(doc2.cm, makeChangeSingleDoc)(doc2, change, selAfter, spans);
          }
          if (change.to.line < doc2.first) {
            shiftDoc(doc2, change.text.length - 1 - (change.to.line - change.from.line));
            return;
          }
          if (change.from.line > doc2.lastLine()) {
            return;
          }
          if (change.from.line < doc2.first) {
            var shift = change.text.length - 1 - (doc2.first - change.from.line);
            shiftDoc(doc2, shift);
            change = {
              from: Pos(doc2.first, 0),
              to: Pos(change.to.line + shift, change.to.ch),
              text: [lst(change.text)],
              origin: change.origin
            };
          }
          var last = doc2.lastLine();
          if (change.to.line > last) {
            change = {
              from: change.from,
              to: Pos(last, getLine(doc2, last).text.length),
              text: [change.text[0]],
              origin: change.origin
            };
          }
          change.removed = getBetween(doc2, change.from, change.to);
          if (!selAfter) {
            selAfter = computeSelAfterChange(doc2, change);
          }
          if (doc2.cm) {
            makeChangeSingleDocInEditor(doc2.cm, change, spans);
          } else {
            updateDoc(doc2, change, spans);
          }
          setSelectionNoUndo(doc2, selAfter, sel_dontScroll);
          if (doc2.cantEdit && skipAtomic(doc2, Pos(doc2.firstLine(), 0))) {
            doc2.cantEdit = false;
          }
        }
        function makeChangeSingleDocInEditor(cm, change, spans) {
          var doc2 = cm.doc, display = cm.display, from = change.from, to = change.to;
          var recomputeMaxLength = false, checkWidthStart = from.line;
          if (!cm.options.lineWrapping) {
            checkWidthStart = lineNo(visualLine(getLine(doc2, from.line)));
            doc2.iter(checkWidthStart, to.line + 1, function(line) {
              if (line == display.maxLine) {
                recomputeMaxLength = true;
                return true;
              }
            });
          }
          if (doc2.sel.contains(change.from, change.to) > -1) {
            signalCursorActivity(cm);
          }
          updateDoc(doc2, change, spans, estimateHeight(cm));
          if (!cm.options.lineWrapping) {
            doc2.iter(checkWidthStart, from.line + change.text.length, function(line) {
              var len = lineLength(line);
              if (len > display.maxLineLength) {
                display.maxLine = line;
                display.maxLineLength = len;
                display.maxLineChanged = true;
                recomputeMaxLength = false;
              }
            });
            if (recomputeMaxLength) {
              cm.curOp.updateMaxLine = true;
            }
          }
          retreatFrontier(doc2, from.line);
          startWorker(cm, 400);
          var lendiff = change.text.length - (to.line - from.line) - 1;
          if (change.full) {
            regChange(cm);
          } else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change)) {
            regLineChange(cm, from.line, "text");
          } else {
            regChange(cm, from.line, to.line + 1, lendiff);
          }
          var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
          if (changeHandler || changesHandler) {
            var obj = {
              from,
              to,
              text: change.text,
              removed: change.removed,
              origin: change.origin
            };
            if (changeHandler) {
              signalLater(cm, "change", cm, obj);
            }
            if (changesHandler) {
              (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
            }
          }
          cm.display.selForContextMenu = null;
        }
        function replaceRange(doc2, code, from, to, origin) {
          var assign;
          if (!to) {
            to = from;
          }
          if (cmp(to, from) < 0) {
            assign = [to, from], from = assign[0], to = assign[1];
          }
          if (typeof code == "string") {
            code = doc2.splitLines(code);
          }
          makeChange(doc2, { from, to, text: code, origin });
        }
        function rebaseHistSelSingle(pos, from, to, diff) {
          if (to < pos.line) {
            pos.line += diff;
          } else if (from < pos.line) {
            pos.line = from;
            pos.ch = 0;
          }
        }
        function rebaseHistArray(array, from, to, diff) {
          for (var i2 = 0; i2 < array.length; ++i2) {
            var sub = array[i2], ok = true;
            if (sub.ranges) {
              if (!sub.copied) {
                sub = array[i2] = sub.deepCopy();
                sub.copied = true;
              }
              for (var j = 0; j < sub.ranges.length; j++) {
                rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
                rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
              }
              continue;
            }
            for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
              var cur = sub.changes[j$1];
              if (to < cur.from.line) {
                cur.from = Pos(cur.from.line + diff, cur.from.ch);
                cur.to = Pos(cur.to.line + diff, cur.to.ch);
              } else if (from <= cur.to.line) {
                ok = false;
                break;
              }
            }
            if (!ok) {
              array.splice(0, i2 + 1);
              i2 = 0;
            }
          }
        }
        function rebaseHist(hist, change) {
          var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
          rebaseHistArray(hist.done, from, to, diff);
          rebaseHistArray(hist.undone, from, to, diff);
        }
        function changeLine(doc2, handle, changeType, op) {
          var no = handle, line = handle;
          if (typeof handle == "number") {
            line = getLine(doc2, clipLine(doc2, handle));
          } else {
            no = lineNo(handle);
          }
          if (no == null) {
            return null;
          }
          if (op(line, no) && doc2.cm) {
            regLineChange(doc2.cm, no, changeType);
          }
          return line;
        }
        function LeafChunk(lines) {
          this.lines = lines;
          this.parent = null;
          var height = 0;
          for (var i2 = 0; i2 < lines.length; ++i2) {
            lines[i2].parent = this;
            height += lines[i2].height;
          }
          this.height = height;
        }
        LeafChunk.prototype = {
          chunkSize: function() {
            return this.lines.length;
          },
          // Remove the n lines at offset 'at'.
          removeInner: function(at, n) {
            for (var i2 = at, e = at + n; i2 < e; ++i2) {
              var line = this.lines[i2];
              this.height -= line.height;
              cleanUpLine(line);
              signalLater(line, "delete");
            }
            this.lines.splice(at, n);
          },
          // Helper used to collapse a small branch into a single leaf.
          collapse: function(lines) {
            lines.push.apply(lines, this.lines);
          },
          // Insert the given array of lines at offset 'at', count them as
          // having the given height.
          insertInner: function(at, lines, height) {
            this.height += height;
            this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
            for (var i2 = 0; i2 < lines.length; ++i2) {
              lines[i2].parent = this;
            }
          },
          // Used to iterate over a part of the tree.
          iterN: function(at, n, op) {
            for (var e = at + n; at < e; ++at) {
              if (op(this.lines[at])) {
                return true;
              }
            }
          }
        };
        function BranchChunk(children4) {
          this.children = children4;
          var size = 0, height = 0;
          for (var i2 = 0; i2 < children4.length; ++i2) {
            var ch = children4[i2];
            size += ch.chunkSize();
            height += ch.height;
            ch.parent = this;
          }
          this.size = size;
          this.height = height;
          this.parent = null;
        }
        BranchChunk.prototype = {
          chunkSize: function() {
            return this.size;
          },
          removeInner: function(at, n) {
            this.size -= n;
            for (var i2 = 0; i2 < this.children.length; ++i2) {
              var child = this.children[i2], sz = child.chunkSize();
              if (at < sz) {
                var rm = Math.min(n, sz - at), oldHeight = child.height;
                child.removeInner(at, rm);
                this.height -= oldHeight - child.height;
                if (sz == rm) {
                  this.children.splice(i2--, 1);
                  child.parent = null;
                }
                if ((n -= rm) == 0) {
                  break;
                }
                at = 0;
              } else {
                at -= sz;
              }
            }
            if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
              var lines = [];
              this.collapse(lines);
              this.children = [new LeafChunk(lines)];
              this.children[0].parent = this;
            }
          },
          collapse: function(lines) {
            for (var i2 = 0; i2 < this.children.length; ++i2) {
              this.children[i2].collapse(lines);
            }
          },
          insertInner: function(at, lines, height) {
            this.size += lines.length;
            this.height += height;
            for (var i2 = 0; i2 < this.children.length; ++i2) {
              var child = this.children[i2], sz = child.chunkSize();
              if (at <= sz) {
                child.insertInner(at, lines, height);
                if (child.lines && child.lines.length > 50) {
                  var remaining = child.lines.length % 25 + 25;
                  for (var pos = remaining; pos < child.lines.length; ) {
                    var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
                    child.height -= leaf.height;
                    this.children.splice(++i2, 0, leaf);
                    leaf.parent = this;
                  }
                  child.lines = child.lines.slice(0, remaining);
                  this.maybeSpill();
                }
                break;
              }
              at -= sz;
            }
          },
          // When a node has grown, check whether it should be split.
          maybeSpill: function() {
            if (this.children.length <= 10) {
              return;
            }
            var me = this;
            do {
              var spilled = me.children.splice(me.children.length - 5, 5);
              var sibling = new BranchChunk(spilled);
              if (!me.parent) {
                var copy = new BranchChunk(me.children);
                copy.parent = me;
                me.children = [copy, sibling];
                me = copy;
              } else {
                me.size -= sibling.size;
                me.height -= sibling.height;
                var myIndex = indexOf(me.parent.children, me);
                me.parent.children.splice(myIndex + 1, 0, sibling);
              }
              sibling.parent = me.parent;
            } while (me.children.length > 10);
            me.parent.maybeSpill();
          },
          iterN: function(at, n, op) {
            for (var i2 = 0; i2 < this.children.length; ++i2) {
              var child = this.children[i2], sz = child.chunkSize();
              if (at < sz) {
                var used = Math.min(n, sz - at);
                if (child.iterN(at, used, op)) {
                  return true;
                }
                if ((n -= used) == 0) {
                  break;
                }
                at = 0;
              } else {
                at -= sz;
              }
            }
          }
        };
        var LineWidget = function(doc2, node, options) {
          if (options) {
            for (var opt in options) {
              if (options.hasOwnProperty(opt)) {
                this[opt] = options[opt];
              }
            }
          }
          this.doc = doc2;
          this.node = node;
        };
        LineWidget.prototype.clear = function() {
          var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
          if (no == null || !ws) {
            return;
          }
          for (var i2 = 0; i2 < ws.length; ++i2) {
            if (ws[i2] == this) {
              ws.splice(i2--, 1);
            }
          }
          if (!ws.length) {
            line.widgets = null;
          }
          var height = widgetHeight(this);
          updateLineHeight(line, Math.max(0, line.height - height));
          if (cm) {
            runInOp(cm, function() {
              adjustScrollWhenAboveVisible(cm, line, -height);
              regLineChange(cm, no, "widget");
            });
            signalLater(cm, "lineWidgetCleared", cm, this, no);
          }
        };
        LineWidget.prototype.changed = function() {
          var this$1 = this;
          var oldH = this.height, cm = this.doc.cm, line = this.line;
          this.height = null;
          var diff = widgetHeight(this) - oldH;
          if (!diff) {
            return;
          }
          if (!lineIsHidden(this.doc, line)) {
            updateLineHeight(line, line.height + diff);
          }
          if (cm) {
            runInOp(cm, function() {
              cm.curOp.forceUpdate = true;
              adjustScrollWhenAboveVisible(cm, line, diff);
              signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
            });
          }
        };
        eventMixin(LineWidget);
        function adjustScrollWhenAboveVisible(cm, line, diff) {
          if (heightAtLine(line) < (cm.curOp && cm.curOp.scrollTop || cm.doc.scrollTop)) {
            addToScrollTop(cm, diff);
          }
        }
        function addLineWidget(doc2, handle, node, options) {
          var widget = new LineWidget(doc2, node, options);
          var cm = doc2.cm;
          if (cm && widget.noHScroll) {
            cm.display.alignWidgets = true;
          }
          changeLine(doc2, handle, "widget", function(line) {
            var widgets = line.widgets || (line.widgets = []);
            if (widget.insertAt == null) {
              widgets.push(widget);
            } else {
              widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget);
            }
            widget.line = line;
            if (cm && !lineIsHidden(doc2, line)) {
              var aboveVisible = heightAtLine(line) < doc2.scrollTop;
              updateLineHeight(line, line.height + widgetHeight(widget));
              if (aboveVisible) {
                addToScrollTop(cm, widget.height);
              }
              cm.curOp.forceUpdate = true;
            }
            return true;
          });
          if (cm) {
            signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle));
          }
          return widget;
        }
        var nextMarkerId = 0;
        var TextMarker = function(doc2, type) {
          this.lines = [];
          this.type = type;
          this.doc = doc2;
          this.id = ++nextMarkerId;
        };
        TextMarker.prototype.clear = function() {
          if (this.explicitlyCleared) {
            return;
          }
          var cm = this.doc.cm, withOp = cm && !cm.curOp;
          if (withOp) {
            startOperation(cm);
          }
          if (hasHandler(this, "clear")) {
            var found = this.find();
            if (found) {
              signalLater(this, "clear", found.from, found.to);
            }
          }
          var min = null, max = null;
          for (var i2 = 0; i2 < this.lines.length; ++i2) {
            var line = this.lines[i2];
            var span = getMarkedSpanFor(line.markedSpans, this);
            if (cm && !this.collapsed) {
              regLineChange(cm, lineNo(line), "text");
            } else if (cm) {
              if (span.to != null) {
                max = lineNo(line);
              }
              if (span.from != null) {
                min = lineNo(line);
              }
            }
            line.markedSpans = removeMarkedSpan(line.markedSpans, span);
            if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm) {
              updateLineHeight(line, textHeight(cm.display));
            }
          }
          if (cm && this.collapsed && !cm.options.lineWrapping) {
            for (var i$12 = 0; i$12 < this.lines.length; ++i$12) {
              var visual = visualLine(this.lines[i$12]), len = lineLength(visual);
              if (len > cm.display.maxLineLength) {
                cm.display.maxLine = visual;
                cm.display.maxLineLength = len;
                cm.display.maxLineChanged = true;
              }
            }
          }
          if (min != null && cm && this.collapsed) {
            regChange(cm, min, max + 1);
          }
          this.lines.length = 0;
          this.explicitlyCleared = true;
          if (this.atomic && this.doc.cantEdit) {
            this.doc.cantEdit = false;
            if (cm) {
              reCheckSelection(cm.doc);
            }
          }
          if (cm) {
            signalLater(cm, "markerCleared", cm, this, min, max);
          }
          if (withOp) {
            endOperation(cm);
          }
          if (this.parent) {
            this.parent.clear();
          }
        };
        TextMarker.prototype.find = function(side, lineObj) {
          if (side == null && this.type == "bookmark") {
            side = 1;
          }
          var from, to;
          for (var i2 = 0; i2 < this.lines.length; ++i2) {
            var line = this.lines[i2];
            var span = getMarkedSpanFor(line.markedSpans, this);
            if (span.from != null) {
              from = Pos(lineObj ? line : lineNo(line), span.from);
              if (side == -1) {
                return from;
              }
            }
            if (span.to != null) {
              to = Pos(lineObj ? line : lineNo(line), span.to);
              if (side == 1) {
                return to;
              }
            }
          }
          return from && { from, to };
        };
        TextMarker.prototype.changed = function() {
          var this$1 = this;
          var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
          if (!pos || !cm) {
            return;
          }
          runInOp(cm, function() {
            var line = pos.line, lineN = lineNo(pos.line);
            var view = findViewForLine(cm, lineN);
            if (view) {
              clearLineMeasurementCacheFor(view);
              cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
            }
            cm.curOp.updateMaxLine = true;
            if (!lineIsHidden(widget.doc, line) && widget.height != null) {
              var oldHeight = widget.height;
              widget.height = null;
              var dHeight = widgetHeight(widget) - oldHeight;
              if (dHeight) {
                updateLineHeight(line, line.height + dHeight);
              }
            }
            signalLater(cm, "markerChanged", cm, this$1);
          });
        };
        TextMarker.prototype.attachLine = function(line) {
          if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1) {
              (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
            }
          }
          this.lines.push(line);
        };
        TextMarker.prototype.detachLine = function(line) {
          this.lines.splice(indexOf(this.lines, line), 1);
          if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
          }
        };
        eventMixin(TextMarker);
        function markText(doc2, from, to, options, type) {
          if (options && options.shared) {
            return markTextShared(doc2, from, to, options, type);
          }
          if (doc2.cm && !doc2.cm.curOp) {
            return operation(doc2.cm, markText)(doc2, from, to, options, type);
          }
          var marker = new TextMarker(doc2, type), diff = cmp(from, to);
          if (options) {
            copyObj(options, marker, false);
          }
          if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false) {
            return marker;
          }
          if (marker.replacedWith) {
            marker.collapsed = true;
            marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
            if (!options.handleMouseEvents) {
              marker.widgetNode.setAttribute("cm-ignore-events", "true");
            }
            if (options.insertLeft) {
              marker.widgetNode.insertLeft = true;
            }
          }
          if (marker.collapsed) {
            if (conflictingCollapsedRange(doc2, from.line, from, to, marker) || from.line != to.line && conflictingCollapsedRange(doc2, to.line, from, to, marker)) {
              throw new Error("Inserting collapsed marker partially overlapping an existing one");
            }
            seeCollapsedSpans();
          }
          if (marker.addToHistory) {
            addChangeToHistory(doc2, { from, to, origin: "markText" }, doc2.sel, NaN);
          }
          var curLine = from.line, cm = doc2.cm, updateMaxLine;
          doc2.iter(curLine, to.line + 1, function(line) {
            if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine) {
              updateMaxLine = true;
            }
            if (marker.collapsed && curLine != from.line) {
              updateLineHeight(line, 0);
            }
            addMarkedSpan(line, new MarkedSpan(
              marker,
              curLine == from.line ? from.ch : null,
              curLine == to.line ? to.ch : null
            ), doc2.cm && doc2.cm.curOp);
            ++curLine;
          });
          if (marker.collapsed) {
            doc2.iter(from.line, to.line + 1, function(line) {
              if (lineIsHidden(doc2, line)) {
                updateLineHeight(line, 0);
              }
            });
          }
          if (marker.clearOnEnter) {
            on(marker, "beforeCursorEnter", function() {
              return marker.clear();
            });
          }
          if (marker.readOnly) {
            seeReadOnlySpans();
            if (doc2.history.done.length || doc2.history.undone.length) {
              doc2.clearHistory();
            }
          }
          if (marker.collapsed) {
            marker.id = ++nextMarkerId;
            marker.atomic = true;
          }
          if (cm) {
            if (updateMaxLine) {
              cm.curOp.updateMaxLine = true;
            }
            if (marker.collapsed) {
              regChange(cm, from.line, to.line + 1);
            } else if (marker.className || marker.startStyle || marker.endStyle || marker.css || marker.attributes || marker.title) {
              for (var i2 = from.line; i2 <= to.line; i2++) {
                regLineChange(cm, i2, "text");
              }
            }
            if (marker.atomic) {
              reCheckSelection(cm.doc);
            }
            signalLater(cm, "markerAdded", cm, marker);
          }
          return marker;
        }
        var SharedTextMarker = function(markers, primary) {
          this.markers = markers;
          this.primary = primary;
          for (var i2 = 0; i2 < markers.length; ++i2) {
            markers[i2].parent = this;
          }
        };
        SharedTextMarker.prototype.clear = function() {
          if (this.explicitlyCleared) {
            return;
          }
          this.explicitlyCleared = true;
          for (var i2 = 0; i2 < this.markers.length; ++i2) {
            this.markers[i2].clear();
          }
          signalLater(this, "clear");
        };
        SharedTextMarker.prototype.find = function(side, lineObj) {
          return this.primary.find(side, lineObj);
        };
        eventMixin(SharedTextMarker);
        function markTextShared(doc2, from, to, options, type) {
          options = copyObj(options);
          options.shared = false;
          var markers = [markText(doc2, from, to, options, type)], primary = markers[0];
          var widget = options.widgetNode;
          linkedDocs(doc2, function(doc3) {
            if (widget) {
              options.widgetNode = widget.cloneNode(true);
            }
            markers.push(markText(doc3, clipPos(doc3, from), clipPos(doc3, to), options, type));
            for (var i2 = 0; i2 < doc3.linked.length; ++i2) {
              if (doc3.linked[i2].isParent) {
                return;
              }
            }
            primary = lst(markers);
          });
          return new SharedTextMarker(markers, primary);
        }
        function findSharedMarkers(doc2) {
          return doc2.findMarks(Pos(doc2.first, 0), doc2.clipPos(Pos(doc2.lastLine())), function(m) {
            return m.parent;
          });
        }
        function copySharedMarkers(doc2, markers) {
          for (var i2 = 0; i2 < markers.length; i2++) {
            var marker = markers[i2], pos = marker.find();
            var mFrom = doc2.clipPos(pos.from), mTo = doc2.clipPos(pos.to);
            if (cmp(mFrom, mTo)) {
              var subMark = markText(doc2, mFrom, mTo, marker.primary, marker.primary.type);
              marker.markers.push(subMark);
              subMark.parent = marker;
            }
          }
        }
        function detachSharedMarkers(markers) {
          var loop = function(i3) {
            var marker = markers[i3], linked = [marker.primary.doc];
            linkedDocs(marker.primary.doc, function(d) {
              return linked.push(d);
            });
            for (var j = 0; j < marker.markers.length; j++) {
              var subMarker = marker.markers[j];
              if (indexOf(linked, subMarker.doc) == -1) {
                subMarker.parent = null;
                marker.markers.splice(j--, 1);
              }
            }
          };
          for (var i2 = 0; i2 < markers.length; i2++) loop(i2);
        }
        var nextDocId = 0;
        var Doc = function(text, mode, firstLine, lineSep, direction) {
          if (!(this instanceof Doc)) {
            return new Doc(text, mode, firstLine, lineSep, direction);
          }
          if (firstLine == null) {
            firstLine = 0;
          }
          BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
          this.first = firstLine;
          this.scrollTop = this.scrollLeft = 0;
          this.cantEdit = false;
          this.cleanGeneration = 1;
          this.modeFrontier = this.highlightFrontier = firstLine;
          var start = Pos(firstLine, 0);
          this.sel = simpleSelection(start);
          this.history = new History(null);
          this.id = ++nextDocId;
          this.modeOption = mode;
          this.lineSep = lineSep;
          this.direction = direction == "rtl" ? "rtl" : "ltr";
          this.extend = false;
          if (typeof text == "string") {
            text = this.splitLines(text);
          }
          updateDoc(this, { from: start, to: start, text });
          setSelection(this, simpleSelection(start), sel_dontScroll);
        };
        Doc.prototype = createObj(BranchChunk.prototype, {
          constructor: Doc,
          // Iterate over the document. Supports two forms -- with only one
          // argument, it calls that for each line in the document. With
          // three, it iterates over the range given by the first two (with
          // the second being non-inclusive).
          iter: function(from, to, op) {
            if (op) {
              this.iterN(from - this.first, to - from, op);
            } else {
              this.iterN(this.first, this.first + this.size, from);
            }
          },
          // Non-public interface for adding and removing lines.
          insert: function(at, lines) {
            var height = 0;
            for (var i2 = 0; i2 < lines.length; ++i2) {
              height += lines[i2].height;
            }
            this.insertInner(at - this.first, lines, height);
          },
          remove: function(at, n) {
            this.removeInner(at - this.first, n);
          },
          // From here, the methods are part of the public interface. Most
          // are also available from CodeMirror (editor) instances.
          getValue: function(lineSep) {
            var lines = getLines(this, this.first, this.first + this.size);
            if (lineSep === false) {
              return lines;
            }
            return lines.join(lineSep || this.lineSeparator());
          },
          setValue: docMethodOp(function(code) {
            var top = Pos(this.first, 0), last = this.first + this.size - 1;
            makeChange(this, {
              from: top,
              to: Pos(last, getLine(this, last).text.length),
              text: this.splitLines(code),
              origin: "setValue",
              full: true
            }, true);
            if (this.cm) {
              scrollToCoords(this.cm, 0, 0);
            }
            setSelection(this, simpleSelection(top), sel_dontScroll);
          }),
          replaceRange: function(code, from, to, origin) {
            from = clipPos(this, from);
            to = to ? clipPos(this, to) : from;
            replaceRange(this, code, from, to, origin);
          },
          getRange: function(from, to, lineSep) {
            var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
            if (lineSep === false) {
              return lines;
            }
            if (lineSep === "") {
              return lines.join("");
            }
            return lines.join(lineSep || this.lineSeparator());
          },
          getLine: function(line) {
            var l = this.getLineHandle(line);
            return l && l.text;
          },
          getLineHandle: function(line) {
            if (isLine(this, line)) {
              return getLine(this, line);
            }
          },
          getLineNumber: function(line) {
            return lineNo(line);
          },
          getLineHandleVisualStart: function(line) {
            if (typeof line == "number") {
              line = getLine(this, line);
            }
            return visualLine(line);
          },
          lineCount: function() {
            return this.size;
          },
          firstLine: function() {
            return this.first;
          },
          lastLine: function() {
            return this.first + this.size - 1;
          },
          clipPos: function(pos) {
            return clipPos(this, pos);
          },
          getCursor: function(start) {
            var range2 = this.sel.primary(), pos;
            if (start == null || start == "head") {
              pos = range2.head;
            } else if (start == "anchor") {
              pos = range2.anchor;
            } else if (start == "end" || start == "to" || start === false) {
              pos = range2.to();
            } else {
              pos = range2.from();
            }
            return pos;
          },
          listSelections: function() {
            return this.sel.ranges;
          },
          somethingSelected: function() {
            return this.sel.somethingSelected();
          },
          setCursor: docMethodOp(function(line, ch, options) {
            setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
          }),
          setSelection: docMethodOp(function(anchor, head, options) {
            setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
          }),
          extendSelection: docMethodOp(function(head, other, options) {
            extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
          }),
          extendSelections: docMethodOp(function(heads, options) {
            extendSelections(this, clipPosArray(this, heads), options);
          }),
          extendSelectionsBy: docMethodOp(function(f, options) {
            var heads = map(this.sel.ranges, f);
            extendSelections(this, clipPosArray(this, heads), options);
          }),
          setSelections: docMethodOp(function(ranges, primary, options) {
            if (!ranges.length) {
              return;
            }
            var out = [];
            for (var i2 = 0; i2 < ranges.length; i2++) {
              out[i2] = new Range(
                clipPos(this, ranges[i2].anchor),
                clipPos(this, ranges[i2].head || ranges[i2].anchor)
              );
            }
            if (primary == null) {
              primary = Math.min(ranges.length - 1, this.sel.primIndex);
            }
            setSelection(this, normalizeSelection(this.cm, out, primary), options);
          }),
          addSelection: docMethodOp(function(anchor, head, options) {
            var ranges = this.sel.ranges.slice(0);
            ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
            setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
          }),
          getSelection: function(lineSep) {
            var ranges = this.sel.ranges, lines;
            for (var i2 = 0; i2 < ranges.length; i2++) {
              var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());
              lines = lines ? lines.concat(sel) : sel;
            }
            if (lineSep === false) {
              return lines;
            } else {
              return lines.join(lineSep || this.lineSeparator());
            }
          },
          getSelections: function(lineSep) {
            var parts = [], ranges = this.sel.ranges;
            for (var i2 = 0; i2 < ranges.length; i2++) {
              var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());
              if (lineSep !== false) {
                sel = sel.join(lineSep || this.lineSeparator());
              }
              parts[i2] = sel;
            }
            return parts;
          },
          replaceSelection: function(code, collapse, origin) {
            var dup = [];
            for (var i2 = 0; i2 < this.sel.ranges.length; i2++) {
              dup[i2] = code;
            }
            this.replaceSelections(dup, collapse, origin || "+input");
          },
          replaceSelections: docMethodOp(function(code, collapse, origin) {
            var changes = [], sel = this.sel;
            for (var i2 = 0; i2 < sel.ranges.length; i2++) {
              var range2 = sel.ranges[i2];
              changes[i2] = { from: range2.from(), to: range2.to(), text: this.splitLines(code[i2]), origin };
            }
            var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
            for (var i$12 = changes.length - 1; i$12 >= 0; i$12--) {
              makeChange(this, changes[i$12]);
            }
            if (newSel) {
              setSelectionReplaceHistory(this, newSel);
            } else if (this.cm) {
              ensureCursorVisible(this.cm);
            }
          }),
          undo: docMethodOp(function() {
            makeChangeFromHistory(this, "undo");
          }),
          redo: docMethodOp(function() {
            makeChangeFromHistory(this, "redo");
          }),
          undoSelection: docMethodOp(function() {
            makeChangeFromHistory(this, "undo", true);
          }),
          redoSelection: docMethodOp(function() {
            makeChangeFromHistory(this, "redo", true);
          }),
          setExtending: function(val) {
            this.extend = val;
          },
          getExtending: function() {
            return this.extend;
          },
          historySize: function() {
            var hist = this.history, done = 0, undone = 0;
            for (var i2 = 0; i2 < hist.done.length; i2++) {
              if (!hist.done[i2].ranges) {
                ++done;
              }
            }
            for (var i$12 = 0; i$12 < hist.undone.length; i$12++) {
              if (!hist.undone[i$12].ranges) {
                ++undone;
              }
            }
            return { undo: done, redo: undone };
          },
          clearHistory: function() {
            var this$1 = this;
            this.history = new History(this.history);
            linkedDocs(this, function(doc2) {
              return doc2.history = this$1.history;
            }, true);
          },
          markClean: function() {
            this.cleanGeneration = this.changeGeneration(true);
          },
          changeGeneration: function(forceSplit) {
            if (forceSplit) {
              this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
            }
            return this.history.generation;
          },
          isClean: function(gen) {
            return this.history.generation == (gen || this.cleanGeneration);
          },
          getHistory: function() {
            return {
              done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)
            };
          },
          setHistory: function(histData) {
            var hist = this.history = new History(this.history);
            hist.done = copyHistoryArray(histData.done.slice(0), null, true);
            hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
          },
          setGutterMarker: docMethodOp(function(line, gutterID, value) {
            return changeLine(this, line, "gutter", function(line2) {
              var markers = line2.gutterMarkers || (line2.gutterMarkers = {});
              markers[gutterID] = value;
              if (!value && isEmpty(markers)) {
                line2.gutterMarkers = null;
              }
              return true;
            });
          }),
          clearGutter: docMethodOp(function(gutterID) {
            var this$1 = this;
            this.iter(function(line) {
              if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
                changeLine(this$1, line, "gutter", function() {
                  line.gutterMarkers[gutterID] = null;
                  if (isEmpty(line.gutterMarkers)) {
                    line.gutterMarkers = null;
                  }
                  return true;
                });
              }
            });
          }),
          lineInfo: function(line) {
            var n;
            if (typeof line == "number") {
              if (!isLine(this, line)) {
                return null;
              }
              n = line;
              line = getLine(this, line);
              if (!line) {
                return null;
              }
            } else {
              n = lineNo(line);
              if (n == null) {
                return null;
              }
            }
            return {
              line: n,
              handle: line,
              text: line.text,
              gutterMarkers: line.gutterMarkers,
              textClass: line.textClass,
              bgClass: line.bgClass,
              wrapClass: line.wrapClass,
              widgets: line.widgets
            };
          },
          addLineClass: docMethodOp(function(handle, where, cls) {
            return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
              var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
              if (!line[prop2]) {
                line[prop2] = cls;
              } else if (classTest(cls).test(line[prop2])) {
                return false;
              } else {
                line[prop2] += " " + cls;
              }
              return true;
            });
          }),
          removeLineClass: docMethodOp(function(handle, where, cls) {
            return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
              var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
              var cur = line[prop2];
              if (!cur) {
                return false;
              } else if (cls == null) {
                line[prop2] = null;
              } else {
                var found = cur.match(classTest(cls));
                if (!found) {
                  return false;
                }
                var end = found.index + found[0].length;
                line[prop2] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
              }
              return true;
            });
          }),
          addLineWidget: docMethodOp(function(handle, node, options) {
            return addLineWidget(this, handle, node, options);
          }),
          removeLineWidget: function(widget) {
            widget.clear();
          },
          markText: function(from, to, options) {
            return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
          },
          setBookmark: function(pos, options) {
            var realOpts = {
              replacedWith: options && (options.nodeType == null ? options.widget : options),
              insertLeft: options && options.insertLeft,
              clearWhenEmpty: false,
              shared: options && options.shared,
              handleMouseEvents: options && options.handleMouseEvents
            };
            pos = clipPos(this, pos);
            return markText(this, pos, pos, realOpts, "bookmark");
          },
          findMarksAt: function(pos) {
            pos = clipPos(this, pos);
            var markers = [], spans = getLine(this, pos.line).markedSpans;
            if (spans) {
              for (var i2 = 0; i2 < spans.length; ++i2) {
                var span = spans[i2];
                if ((span.from == null || span.from <= pos.ch) && (span.to == null || span.to >= pos.ch)) {
                  markers.push(span.marker.parent || span.marker);
                }
              }
            }
            return markers;
          },
          findMarks: function(from, to, filter) {
            from = clipPos(this, from);
            to = clipPos(this, to);
            var found = [], lineNo2 = from.line;
            this.iter(from.line, to.line + 1, function(line) {
              var spans = line.markedSpans;
              if (spans) {
                for (var i2 = 0; i2 < spans.length; i2++) {
                  var span = spans[i2];
                  if (!(span.to != null && lineNo2 == from.line && from.ch >= span.to || span.from == null && lineNo2 != from.line || span.from != null && lineNo2 == to.line && span.from >= to.ch) && (!filter || filter(span.marker))) {
                    found.push(span.marker.parent || span.marker);
                  }
                }
              }
              ++lineNo2;
            });
            return found;
          },
          getAllMarks: function() {
            var markers = [];
            this.iter(function(line) {
              var sps = line.markedSpans;
              if (sps) {
                for (var i2 = 0; i2 < sps.length; ++i2) {
                  if (sps[i2].from != null) {
                    markers.push(sps[i2].marker);
                  }
                }
              }
            });
            return markers;
          },
          posFromIndex: function(off2) {
            var ch, lineNo2 = this.first, sepSize = this.lineSeparator().length;
            this.iter(function(line) {
              var sz = line.text.length + sepSize;
              if (sz > off2) {
                ch = off2;
                return true;
              }
              off2 -= sz;
              ++lineNo2;
            });
            return clipPos(this, Pos(lineNo2, ch));
          },
          indexFromPos: function(coords) {
            coords = clipPos(this, coords);
            var index = coords.ch;
            if (coords.line < this.first || coords.ch < 0) {
              return 0;
            }
            var sepSize = this.lineSeparator().length;
            this.iter(this.first, coords.line, function(line) {
              index += line.text.length + sepSize;
            });
            return index;
          },
          copy: function(copyHistory) {
            var doc2 = new Doc(
              getLines(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction
            );
            doc2.scrollTop = this.scrollTop;
            doc2.scrollLeft = this.scrollLeft;
            doc2.sel = this.sel;
            doc2.extend = false;
            if (copyHistory) {
              doc2.history.undoDepth = this.history.undoDepth;
              doc2.setHistory(this.getHistory());
            }
            return doc2;
          },
          linkedDoc: function(options) {
            if (!options) {
              options = {};
            }
            var from = this.first, to = this.first + this.size;
            if (options.from != null && options.from > from) {
              from = options.from;
            }
            if (options.to != null && options.to < to) {
              to = options.to;
            }
            var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
            if (options.sharedHist) {
              copy.history = this.history;
            }
            (this.linked || (this.linked = [])).push({ doc: copy, sharedHist: options.sharedHist });
            copy.linked = [{ doc: this, isParent: true, sharedHist: options.sharedHist }];
            copySharedMarkers(copy, findSharedMarkers(this));
            return copy;
          },
          unlinkDoc: function(other) {
            if (other instanceof CodeMirror3) {
              other = other.doc;
            }
            if (this.linked) {
              for (var i2 = 0; i2 < this.linked.length; ++i2) {
                var link = this.linked[i2];
                if (link.doc != other) {
                  continue;
                }
                this.linked.splice(i2, 1);
                other.unlinkDoc(this);
                detachSharedMarkers(findSharedMarkers(this));
                break;
              }
            }
            if (other.history == this.history) {
              var splitIds = [other.id];
              linkedDocs(other, function(doc2) {
                return splitIds.push(doc2.id);
              }, true);
              other.history = new History(null);
              other.history.done = copyHistoryArray(this.history.done, splitIds);
              other.history.undone = copyHistoryArray(this.history.undone, splitIds);
            }
          },
          iterLinkedDocs: function(f) {
            linkedDocs(this, f);
          },
          getMode: function() {
            return this.mode;
          },
          getEditor: function() {
            return this.cm;
          },
          splitLines: function(str) {
            if (this.lineSep) {
              return str.split(this.lineSep);
            }
            return splitLinesAuto(str);
          },
          lineSeparator: function() {
            return this.lineSep || "\n";
          },
          setDirection: docMethodOp(function(dir) {
            if (dir != "rtl") {
              dir = "ltr";
            }
            if (dir == this.direction) {
              return;
            }
            this.direction = dir;
            this.iter(function(line) {
              return line.order = null;
            });
            if (this.cm) {
              directionChanged(this.cm);
            }
          })
        });
        Doc.prototype.eachLine = Doc.prototype.iter;
        var lastDrop = 0;
        function onDrop(e) {
          var cm = this;
          clearDragCursor(cm);
          if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
            return;
          }
          e_preventDefault(e);
          if (ie) {
            lastDrop = +/* @__PURE__ */ new Date();
          }
          var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
          if (!pos || cm.isReadOnly()) {
            return;
          }
          if (files && files.length && window.FileReader && window.File) {
            var n = files.length, text = Array(n), read = 0;
            var markAsReadAndPasteIfAllFilesAreRead = function() {
              if (++read == n) {
                operation(cm, function() {
                  pos = clipPos(cm.doc, pos);
                  var change = {
                    from: pos,
                    to: pos,
                    text: cm.doc.splitLines(
                      text.filter(function(t) {
                        return t != null;
                      }).join(cm.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  makeChange(cm.doc, change);
                  setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
                })();
              }
            };
            var readTextFromFile = function(file, i3) {
              if (cm.options.allowDropFileTypes && indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
                markAsReadAndPasteIfAllFilesAreRead();
                return;
              }
              var reader = new FileReader();
              reader.onerror = function() {
                return markAsReadAndPasteIfAllFilesAreRead();
              };
              reader.onload = function() {
                var content = reader.result;
                if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
                  markAsReadAndPasteIfAllFilesAreRead();
                  return;
                }
                text[i3] = content;
                markAsReadAndPasteIfAllFilesAreRead();
              };
              reader.readAsText(file);
            };
            for (var i2 = 0; i2 < files.length; i2++) {
              readTextFromFile(files[i2], i2);
            }
          } else {
            if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
              cm.state.draggingText(e);
              setTimeout(function() {
                return cm.display.input.focus();
              }, 20);
              return;
            }
            try {
              var text$1 = e.dataTransfer.getData("Text");
              if (text$1) {
                var selected;
                if (cm.state.draggingText && !cm.state.draggingText.copy) {
                  selected = cm.listSelections();
                }
                setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
                if (selected) {
                  for (var i$12 = 0; i$12 < selected.length; ++i$12) {
                    replaceRange(cm.doc, "", selected[i$12].anchor, selected[i$12].head, "drag");
                  }
                }
                cm.replaceSelection(text$1, "around", "paste");
                cm.display.input.focus();
              }
            } catch (e$1) {
            }
          }
        }
        function onDragStart(cm, e) {
          if (ie && (!cm.state.draggingText || +/* @__PURE__ */ new Date() - lastDrop < 100)) {
            e_stop(e);
            return;
          }
          if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
            return;
          }
          e.dataTransfer.setData("Text", cm.getSelection());
          e.dataTransfer.effectAllowed = "copyMove";
          if (e.dataTransfer.setDragImage && !safari) {
            var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
            img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            if (presto) {
              img.width = img.height = 1;
              cm.display.wrapper.appendChild(img);
              img._top = img.offsetTop;
            }
            e.dataTransfer.setDragImage(img, 0, 0);
            if (presto) {
              img.parentNode.removeChild(img);
            }
          }
        }
        function onDragOver(cm, e) {
          var pos = posFromMouse(cm, e);
          if (!pos) {
            return;
          }
          var frag = document.createDocumentFragment();
          drawSelectionCursor(cm, pos, frag);
          if (!cm.display.dragCursor) {
            cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
            cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
          }
          removeChildrenAndAdd(cm.display.dragCursor, frag);
        }
        function clearDragCursor(cm) {
          if (cm.display.dragCursor) {
            cm.display.lineSpace.removeChild(cm.display.dragCursor);
            cm.display.dragCursor = null;
          }
        }
        function forEachCodeMirror(f) {
          if (!document.getElementsByClassName) {
            return;
          }
          var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
          for (var i2 = 0; i2 < byClass.length; i2++) {
            var cm = byClass[i2].CodeMirror;
            if (cm) {
              editors.push(cm);
            }
          }
          if (editors.length) {
            editors[0].operation(function() {
              for (var i3 = 0; i3 < editors.length; i3++) {
                f(editors[i3]);
              }
            });
          }
        }
        var globalsRegistered = false;
        function ensureGlobalHandlers() {
          if (globalsRegistered) {
            return;
          }
          registerGlobalHandlers();
          globalsRegistered = true;
        }
        function registerGlobalHandlers() {
          var resizeTimer;
          on(window, "resize", function() {
            if (resizeTimer == null) {
              resizeTimer = setTimeout(function() {
                resizeTimer = null;
                forEachCodeMirror(onResize);
              }, 100);
            }
          });
          on(window, "blur", function() {
            return forEachCodeMirror(onBlur);
          });
        }
        function onResize(cm) {
          var d = cm.display;
          d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
          d.scrollbarsClipped = false;
          cm.setSize();
        }
        var keyNames = {
          3: "Pause",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          145: "ScrollLock",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          224: "Mod",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert"
        };
        for (var i = 0; i < 10; i++) {
          keyNames[i + 48] = keyNames[i + 96] = String(i);
        }
        for (var i$1 = 65; i$1 <= 90; i$1++) {
          keyNames[i$1] = String.fromCharCode(i$1);
        }
        for (var i$2 = 1; i$2 <= 12; i$2++) {
          keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2;
        }
        var keyMap = {};
        keyMap.basic = {
          "Left": "goCharLeft",
          "Right": "goCharRight",
          "Up": "goLineUp",
          "Down": "goLineDown",
          "End": "goLineEnd",
          "Home": "goLineStartSmart",
          "PageUp": "goPageUp",
          "PageDown": "goPageDown",
          "Delete": "delCharAfter",
          "Backspace": "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          "Tab": "defaultTab",
          "Shift-Tab": "indentAuto",
          "Enter": "newlineAndIndent",
          "Insert": "toggleOverwrite",
          "Esc": "singleSelection"
        };
        keyMap.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          "fallthrough": "basic"
        };
        keyMap.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine"
        };
        keyMap.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          "fallthrough": ["basic", "emacsy"]
        };
        keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
        function normalizeKeyName(name) {
          var parts = name.split(/-(?!$)/);
          name = parts[parts.length - 1];
          var alt, ctrl, shift, cmd;
          for (var i2 = 0; i2 < parts.length - 1; i2++) {
            var mod = parts[i2];
            if (/^(cmd|meta|m)$/i.test(mod)) {
              cmd = true;
            } else if (/^a(lt)?$/i.test(mod)) {
              alt = true;
            } else if (/^(c|ctrl|control)$/i.test(mod)) {
              ctrl = true;
            } else if (/^s(hift)?$/i.test(mod)) {
              shift = true;
            } else {
              throw new Error("Unrecognized modifier name: " + mod);
            }
          }
          if (alt) {
            name = "Alt-" + name;
          }
          if (ctrl) {
            name = "Ctrl-" + name;
          }
          if (cmd) {
            name = "Cmd-" + name;
          }
          if (shift) {
            name = "Shift-" + name;
          }
          return name;
        }
        function normalizeKeyMap(keymap) {
          var copy = {};
          for (var keyname in keymap) {
            if (keymap.hasOwnProperty(keyname)) {
              var value = keymap[keyname];
              if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) {
                continue;
              }
              if (value == "...") {
                delete keymap[keyname];
                continue;
              }
              var keys = map(keyname.split(" "), normalizeKeyName);
              for (var i2 = 0; i2 < keys.length; i2++) {
                var val = void 0, name = void 0;
                if (i2 == keys.length - 1) {
                  name = keys.join(" ");
                  val = value;
                } else {
                  name = keys.slice(0, i2 + 1).join(" ");
                  val = "...";
                }
                var prev = copy[name];
                if (!prev) {
                  copy[name] = val;
                } else if (prev != val) {
                  throw new Error("Inconsistent bindings for " + name);
                }
              }
              delete keymap[keyname];
            }
          }
          for (var prop2 in copy) {
            keymap[prop2] = copy[prop2];
          }
          return keymap;
        }
        function lookupKey(key, map2, handle, context) {
          map2 = getKeyMap(map2);
          var found = map2.call ? map2.call(key, context) : map2[key];
          if (found === false) {
            return "nothing";
          }
          if (found === "...") {
            return "multi";
          }
          if (found != null && handle(found)) {
            return "handled";
          }
          if (map2.fallthrough) {
            if (Object.prototype.toString.call(map2.fallthrough) != "[object Array]") {
              return lookupKey(key, map2.fallthrough, handle, context);
            }
            for (var i2 = 0; i2 < map2.fallthrough.length; i2++) {
              var result = lookupKey(key, map2.fallthrough[i2], handle, context);
              if (result) {
                return result;
              }
            }
          }
        }
        function isModifierKey(value) {
          var name = typeof value == "string" ? value : keyNames[value.keyCode];
          return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
        }
        function addModifierNames(name, event, noShift) {
          var base = name;
          if (event.altKey && base != "Alt") {
            name = "Alt-" + name;
          }
          if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") {
            name = "Ctrl-" + name;
          }
          if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") {
            name = "Cmd-" + name;
          }
          if (!noShift && event.shiftKey && base != "Shift") {
            name = "Shift-" + name;
          }
          return name;
        }
        function keyName(event, noShift) {
          if (presto && event.keyCode == 34 && event["char"]) {
            return false;
          }
          var name = keyNames[event.keyCode];
          if (name == null || event.altGraphKey) {
            return false;
          }
          if (event.keyCode == 3 && event.code) {
            name = event.code;
          }
          return addModifierNames(name, event, noShift);
        }
        function getKeyMap(val) {
          return typeof val == "string" ? keyMap[val] : val;
        }
        function deleteNearSelection(cm, compute) {
          var ranges = cm.doc.sel.ranges, kill = [];
          for (var i2 = 0; i2 < ranges.length; i2++) {
            var toKill = compute(ranges[i2]);
            while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
              var replaced = kill.pop();
              if (cmp(replaced.from, toKill.from) < 0) {
                toKill.from = replaced.from;
                break;
              }
            }
            kill.push(toKill);
          }
          runInOp(cm, function() {
            for (var i3 = kill.length - 1; i3 >= 0; i3--) {
              replaceRange(cm.doc, "", kill[i3].from, kill[i3].to, "+delete");
            }
            ensureCursorVisible(cm);
          });
        }
        function moveCharLogically(line, ch, dir) {
          var target = skipExtendingChars(line.text, ch + dir, dir);
          return target < 0 || target > line.text.length ? null : target;
        }
        function moveLogically(line, start, dir) {
          var ch = moveCharLogically(line, start.ch, dir);
          return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before");
        }
        function endOfLine(visually, cm, lineObj, lineNo2, dir) {
          if (visually) {
            if (cm.doc.direction == "rtl") {
              dir = -dir;
            }
            var order = getOrder(lineObj, cm.doc.direction);
            if (order) {
              var part = dir < 0 ? lst(order) : order[0];
              var moveInStorageOrder = dir < 0 == (part.level == 1);
              var sticky = moveInStorageOrder ? "after" : "before";
              var ch;
              if (part.level > 0 || cm.doc.direction == "rtl") {
                var prep = prepareMeasureForLine(cm, lineObj);
                ch = dir < 0 ? lineObj.text.length - 1 : 0;
                var targetTop = measureCharPrepared(cm, prep, ch).top;
                ch = findFirst(function(ch2) {
                  return measureCharPrepared(cm, prep, ch2).top == targetTop;
                }, dir < 0 == (part.level == 1) ? part.from : part.to - 1, ch);
                if (sticky == "before") {
                  ch = moveCharLogically(lineObj, ch, 1);
                }
              } else {
                ch = dir < 0 ? part.to : part.from;
              }
              return new Pos(lineNo2, ch, sticky);
            }
          }
          return new Pos(lineNo2, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after");
        }
        function moveVisually(cm, line, start, dir) {
          var bidi = getOrder(line, cm.doc.direction);
          if (!bidi) {
            return moveLogically(line, start, dir);
          }
          if (start.ch >= line.text.length) {
            start.ch = line.text.length;
            start.sticky = "before";
          } else if (start.ch <= 0) {
            start.ch = 0;
            start.sticky = "after";
          }
          var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
          if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
            return moveLogically(line, start, dir);
          }
          var mv = function(pos, dir2) {
            return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir2);
          };
          var prep;
          var getWrappedLineExtent = function(ch2) {
            if (!cm.options.lineWrapping) {
              return { begin: 0, end: line.text.length };
            }
            prep = prep || prepareMeasureForLine(cm, line);
            return wrappedLineExtentChar(cm, line, prep, ch2);
          };
          var wrappedLineExtent2 = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);
          if (cm.doc.direction == "rtl" || part.level == 1) {
            var moveInStorageOrder = part.level == 1 == dir < 0;
            var ch = mv(start, moveInStorageOrder ? 1 : -1);
            if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent2.begin : ch <= part.to && ch <= wrappedLineExtent2.end)) {
              var sticky = moveInStorageOrder ? "before" : "after";
              return new Pos(start.line, ch, sticky);
            }
          }
          var searchInVisualLine = function(partPos2, dir2, wrappedLineExtent3) {
            var getRes = function(ch3, moveInStorageOrder3) {
              return moveInStorageOrder3 ? new Pos(start.line, mv(ch3, 1), "before") : new Pos(start.line, ch3, "after");
            };
            for (; partPos2 >= 0 && partPos2 < bidi.length; partPos2 += dir2) {
              var part2 = bidi[partPos2];
              var moveInStorageOrder2 = dir2 > 0 == (part2.level != 1);
              var ch2 = moveInStorageOrder2 ? wrappedLineExtent3.begin : mv(wrappedLineExtent3.end, -1);
              if (part2.from <= ch2 && ch2 < part2.to) {
                return getRes(ch2, moveInStorageOrder2);
              }
              ch2 = moveInStorageOrder2 ? part2.from : mv(part2.to, -1);
              if (wrappedLineExtent3.begin <= ch2 && ch2 < wrappedLineExtent3.end) {
                return getRes(ch2, moveInStorageOrder2);
              }
            }
          };
          var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent2);
          if (res) {
            return res;
          }
          var nextCh = dir > 0 ? wrappedLineExtent2.end : mv(wrappedLineExtent2.begin, -1);
          if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
            res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
            if (res) {
              return res;
            }
          }
          return null;
        }
        var commands = {
          selectAll,
          singleSelection: function(cm) {
            return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
          },
          killLine: function(cm) {
            return deleteNearSelection(cm, function(range2) {
              if (range2.empty()) {
                var len = getLine(cm.doc, range2.head.line).text.length;
                if (range2.head.ch == len && range2.head.line < cm.lastLine()) {
                  return { from: range2.head, to: Pos(range2.head.line + 1, 0) };
                } else {
                  return { from: range2.head, to: Pos(range2.head.line, len) };
                }
              } else {
                return { from: range2.from(), to: range2.to() };
              }
            });
          },
          deleteLine: function(cm) {
            return deleteNearSelection(cm, function(range2) {
              return {
                from: Pos(range2.from().line, 0),
                to: clipPos(cm.doc, Pos(range2.to().line + 1, 0))
              };
            });
          },
          delLineLeft: function(cm) {
            return deleteNearSelection(cm, function(range2) {
              return {
                from: Pos(range2.from().line, 0),
                to: range2.from()
              };
            });
          },
          delWrappedLineLeft: function(cm) {
            return deleteNearSelection(cm, function(range2) {
              var top = cm.charCoords(range2.head, "div").top + 5;
              var leftPos = cm.coordsChar({ left: 0, top }, "div");
              return { from: leftPos, to: range2.from() };
            });
          },
          delWrappedLineRight: function(cm) {
            return deleteNearSelection(cm, function(range2) {
              var top = cm.charCoords(range2.head, "div").top + 5;
              var rightPos = cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top }, "div");
              return { from: range2.from(), to: rightPos };
            });
          },
          undo: function(cm) {
            return cm.undo();
          },
          redo: function(cm) {
            return cm.redo();
          },
          undoSelection: function(cm) {
            return cm.undoSelection();
          },
          redoSelection: function(cm) {
            return cm.redoSelection();
          },
          goDocStart: function(cm) {
            return cm.extendSelection(Pos(cm.firstLine(), 0));
          },
          goDocEnd: function(cm) {
            return cm.extendSelection(Pos(cm.lastLine()));
          },
          goLineStart: function(cm) {
            return cm.extendSelectionsBy(
              function(range2) {
                return lineStart(cm, range2.head.line);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineStartSmart: function(cm) {
            return cm.extendSelectionsBy(
              function(range2) {
                return lineStartSmart(cm, range2.head);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineEnd: function(cm) {
            return cm.extendSelectionsBy(
              function(range2) {
                return lineEnd(cm, range2.head.line);
              },
              { origin: "+move", bias: -1 }
            );
          },
          goLineRight: function(cm) {
            return cm.extendSelectionsBy(function(range2) {
              var top = cm.cursorCoords(range2.head, "div").top + 5;
              return cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top }, "div");
            }, sel_move);
          },
          goLineLeft: function(cm) {
            return cm.extendSelectionsBy(function(range2) {
              var top = cm.cursorCoords(range2.head, "div").top + 5;
              return cm.coordsChar({ left: 0, top }, "div");
            }, sel_move);
          },
          goLineLeftSmart: function(cm) {
            return cm.extendSelectionsBy(function(range2) {
              var top = cm.cursorCoords(range2.head, "div").top + 5;
              var pos = cm.coordsChar({ left: 0, top }, "div");
              if (pos.ch < cm.getLine(pos.line).search(/\S/)) {
                return lineStartSmart(cm, range2.head);
              }
              return pos;
            }, sel_move);
          },
          goLineUp: function(cm) {
            return cm.moveV(-1, "line");
          },
          goLineDown: function(cm) {
            return cm.moveV(1, "line");
          },
          goPageUp: function(cm) {
            return cm.moveV(-1, "page");
          },
          goPageDown: function(cm) {
            return cm.moveV(1, "page");
          },
          goCharLeft: function(cm) {
            return cm.moveH(-1, "char");
          },
          goCharRight: function(cm) {
            return cm.moveH(1, "char");
          },
          goColumnLeft: function(cm) {
            return cm.moveH(-1, "column");
          },
          goColumnRight: function(cm) {
            return cm.moveH(1, "column");
          },
          goWordLeft: function(cm) {
            return cm.moveH(-1, "word");
          },
          goGroupRight: function(cm) {
            return cm.moveH(1, "group");
          },
          goGroupLeft: function(cm) {
            return cm.moveH(-1, "group");
          },
          goWordRight: function(cm) {
            return cm.moveH(1, "word");
          },
          delCharBefore: function(cm) {
            return cm.deleteH(-1, "codepoint");
          },
          delCharAfter: function(cm) {
            return cm.deleteH(1, "char");
          },
          delWordBefore: function(cm) {
            return cm.deleteH(-1, "word");
          },
          delWordAfter: function(cm) {
            return cm.deleteH(1, "word");
          },
          delGroupBefore: function(cm) {
            return cm.deleteH(-1, "group");
          },
          delGroupAfter: function(cm) {
            return cm.deleteH(1, "group");
          },
          indentAuto: function(cm) {
            return cm.indentSelection("smart");
          },
          indentMore: function(cm) {
            return cm.indentSelection("add");
          },
          indentLess: function(cm) {
            return cm.indentSelection("subtract");
          },
          insertTab: function(cm) {
            return cm.replaceSelection("	");
          },
          insertSoftTab: function(cm) {
            var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
            for (var i2 = 0; i2 < ranges.length; i2++) {
              var pos = ranges[i2].from();
              var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
              spaces.push(spaceStr(tabSize - col % tabSize));
            }
            cm.replaceSelections(spaces);
          },
          defaultTab: function(cm) {
            if (cm.somethingSelected()) {
              cm.indentSelection("add");
            } else {
              cm.execCommand("insertTab");
            }
          },
          // Swap the two chars left and right of each selection's head.
          // Move cursor behind the two swapped characters afterwards.
          //
          // Doesn't consider line feeds a character.
          // Doesn't scan more than one line above to find a character.
          // Doesn't do anything on an empty line.
          // Doesn't do anything with non-empty selections.
          transposeChars: function(cm) {
            return runInOp(cm, function() {
              var ranges = cm.listSelections(), newSel = [];
              for (var i2 = 0; i2 < ranges.length; i2++) {
                if (!ranges[i2].empty()) {
                  continue;
                }
                var cur = ranges[i2].head, line = getLine(cm.doc, cur.line).text;
                if (line) {
                  if (cur.ch == line.length) {
                    cur = new Pos(cur.line, cur.ch - 1);
                  }
                  if (cur.ch > 0) {
                    cur = new Pos(cur.line, cur.ch + 1);
                    cm.replaceRange(
                      line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                      Pos(cur.line, cur.ch - 2),
                      cur,
                      "+transpose"
                    );
                  } else if (cur.line > cm.doc.first) {
                    var prev = getLine(cm.doc, cur.line - 1).text;
                    if (prev) {
                      cur = new Pos(cur.line, 1);
                      cm.replaceRange(
                        line.charAt(0) + cm.doc.lineSeparator() + prev.charAt(prev.length - 1),
                        Pos(cur.line - 1, prev.length - 1),
                        cur,
                        "+transpose"
                      );
                    }
                  }
                }
                newSel.push(new Range(cur, cur));
              }
              cm.setSelections(newSel);
            });
          },
          newlineAndIndent: function(cm) {
            return runInOp(cm, function() {
              var sels = cm.listSelections();
              for (var i2 = sels.length - 1; i2 >= 0; i2--) {
                cm.replaceRange(cm.doc.lineSeparator(), sels[i2].anchor, sels[i2].head, "+input");
              }
              sels = cm.listSelections();
              for (var i$12 = 0; i$12 < sels.length; i$12++) {
                cm.indentLine(sels[i$12].from().line, null, true);
              }
              ensureCursorVisible(cm);
            });
          },
          openLine: function(cm) {
            return cm.replaceSelection("\n", "start");
          },
          toggleOverwrite: function(cm) {
            return cm.toggleOverwrite();
          }
        };
        function lineStart(cm, lineN) {
          var line = getLine(cm.doc, lineN);
          var visual = visualLine(line);
          if (visual != line) {
            lineN = lineNo(visual);
          }
          return endOfLine(true, cm, visual, lineN, 1);
        }
        function lineEnd(cm, lineN) {
          var line = getLine(cm.doc, lineN);
          var visual = visualLineEnd(line);
          if (visual != line) {
            lineN = lineNo(visual);
          }
          return endOfLine(true, cm, line, lineN, -1);
        }
        function lineStartSmart(cm, pos) {
          var start = lineStart(cm, pos.line);
          var line = getLine(cm.doc, start.line);
          var order = getOrder(line, cm.doc.direction);
          if (!order || order[0].level == 0) {
            var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
            var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
            return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky);
          }
          return start;
        }
        function doHandleBinding(cm, bound, dropShift) {
          if (typeof bound == "string") {
            bound = commands[bound];
            if (!bound) {
              return false;
            }
          }
          cm.display.input.ensurePolled();
          var prevShift = cm.display.shift, done = false;
          try {
            if (cm.isReadOnly()) {
              cm.state.suppressEdits = true;
            }
            if (dropShift) {
              cm.display.shift = false;
            }
            done = bound(cm) != Pass;
          } finally {
            cm.display.shift = prevShift;
            cm.state.suppressEdits = false;
          }
          return done;
        }
        function lookupKeyForEditor(cm, name, handle) {
          for (var i2 = 0; i2 < cm.state.keyMaps.length; i2++) {
            var result = lookupKey(name, cm.state.keyMaps[i2], handle, cm);
            if (result) {
              return result;
            }
          }
          return cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm) || lookupKey(name, cm.options.keyMap, handle, cm);
        }
        var stopSeq = new Delayed();
        function dispatchKey(cm, name, e, handle) {
          var seq = cm.state.keySeq;
          if (seq) {
            if (isModifierKey(name)) {
              return "handled";
            }
            if (/\'$/.test(name)) {
              cm.state.keySeq = null;
            } else {
              stopSeq.set(50, function() {
                if (cm.state.keySeq == seq) {
                  cm.state.keySeq = null;
                  cm.display.input.reset();
                }
              });
            }
            if (dispatchKeyInner(cm, seq + " " + name, e, handle)) {
              return true;
            }
          }
          return dispatchKeyInner(cm, name, e, handle);
        }
        function dispatchKeyInner(cm, name, e, handle) {
          var result = lookupKeyForEditor(cm, name, handle);
          if (result == "multi") {
            cm.state.keySeq = name;
          }
          if (result == "handled") {
            signalLater(cm, "keyHandled", cm, name, e);
          }
          if (result == "handled" || result == "multi") {
            e_preventDefault(e);
            restartBlink(cm);
          }
          return !!result;
        }
        function handleKeyBinding(cm, e) {
          var name = keyName(e, true);
          if (!name) {
            return false;
          }
          if (e.shiftKey && !cm.state.keySeq) {
            return dispatchKey(cm, "Shift-" + name, e, function(b) {
              return doHandleBinding(cm, b, true);
            }) || dispatchKey(cm, name, e, function(b) {
              if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion) {
                return doHandleBinding(cm, b);
              }
            });
          } else {
            return dispatchKey(cm, name, e, function(b) {
              return doHandleBinding(cm, b);
            });
          }
        }
        function handleCharBinding(cm, e, ch) {
          return dispatchKey(cm, "'" + ch + "'", e, function(b) {
            return doHandleBinding(cm, b, true);
          });
        }
        var lastStoppedKey = null;
        function onKeyDown(e) {
          var cm = this;
          if (e.target && e.target != cm.display.input.getField()) {
            return;
          }
          cm.curOp.focus = activeElt(root(cm));
          if (signalDOMEvent(cm, e)) {
            return;
          }
          if (ie && ie_version < 11 && e.keyCode == 27) {
            e.returnValue = false;
          }
          var code = e.keyCode;
          cm.display.shift = code == 16 || e.shiftKey;
          var handled = handleKeyBinding(cm, e);
          if (presto) {
            lastStoppedKey = handled ? code : null;
            if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey)) {
              cm.replaceSelection("", null, "cut");
            }
          }
          if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand) {
            document.execCommand("cut");
          }
          if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className)) {
            showCrossHair(cm);
          }
        }
        function showCrossHair(cm) {
          var lineDiv = cm.display.lineDiv;
          addClass(lineDiv, "CodeMirror-crosshair");
          function up(e) {
            if (e.keyCode == 18 || !e.altKey) {
              rmClass(lineDiv, "CodeMirror-crosshair");
              off(document, "keyup", up);
              off(document, "mouseover", up);
            }
          }
          on(document, "keyup", up);
          on(document, "mouseover", up);
        }
        function onKeyUp(e) {
          if (e.keyCode == 16) {
            this.doc.sel.shift = false;
          }
          signalDOMEvent(this, e);
        }
        function onKeyPress(e) {
          var cm = this;
          if (e.target && e.target != cm.display.input.getField()) {
            return;
          }
          if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) {
            return;
          }
          var keyCode = e.keyCode, charCode = e.charCode;
          if (presto && keyCode == lastStoppedKey) {
            lastStoppedKey = null;
            e_preventDefault(e);
            return;
          }
          if (presto && (!e.which || e.which < 10) && handleKeyBinding(cm, e)) {
            return;
          }
          var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
          if (ch == "\b") {
            return;
          }
          if (handleCharBinding(cm, e, ch)) {
            return;
          }
          cm.display.input.onKeyPress(e);
        }
        var DOUBLECLICK_DELAY = 400;
        var PastClick = function(time, pos, button) {
          this.time = time;
          this.pos = pos;
          this.button = button;
        };
        PastClick.prototype.compare = function(time, pos, button) {
          return this.time + DOUBLECLICK_DELAY > time && cmp(pos, this.pos) == 0 && button == this.button;
        };
        var lastClick, lastDoubleClick;
        function clickRepeat(pos, button) {
          var now = +/* @__PURE__ */ new Date();
          if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
            lastClick = lastDoubleClick = null;
            return "triple";
          } else if (lastClick && lastClick.compare(now, pos, button)) {
            lastDoubleClick = new PastClick(now, pos, button);
            lastClick = null;
            return "double";
          } else {
            lastClick = new PastClick(now, pos, button);
            lastDoubleClick = null;
            return "single";
          }
        }
        function onMouseDown(e) {
          var cm = this, display = cm.display;
          if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) {
            return;
          }
          display.input.ensurePolled();
          display.shift = e.shiftKey;
          if (eventInWidget(display, e)) {
            if (!webkit) {
              display.scroller.draggable = false;
              setTimeout(function() {
                return display.scroller.draggable = true;
              }, 100);
            }
            return;
          }
          if (clickInGutter(cm, e)) {
            return;
          }
          var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
          win(cm).focus();
          if (button == 1 && cm.state.selectingText) {
            cm.state.selectingText(e);
          }
          if (pos && handleMappedButton(cm, button, pos, repeat, e)) {
            return;
          }
          if (button == 1) {
            if (pos) {
              leftButtonDown(cm, pos, repeat, e);
            } else if (e_target(e) == display.scroller) {
              e_preventDefault(e);
            }
          } else if (button == 2) {
            if (pos) {
              extendSelection(cm.doc, pos);
            }
            setTimeout(function() {
              return display.input.focus();
            }, 20);
          } else if (button == 3) {
            if (captureRightClick) {
              cm.display.input.onContextMenu(e);
            } else {
              delayBlurEvent(cm);
            }
          }
        }
        function handleMappedButton(cm, button, pos, repeat, event) {
          var name = "Click";
          if (repeat == "double") {
            name = "Double" + name;
          } else if (repeat == "triple") {
            name = "Triple" + name;
          }
          name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;
          return dispatchKey(cm, addModifierNames(name, event), event, function(bound) {
            if (typeof bound == "string") {
              bound = commands[bound];
            }
            if (!bound) {
              return false;
            }
            var done = false;
            try {
              if (cm.isReadOnly()) {
                cm.state.suppressEdits = true;
              }
              done = bound(cm, pos) != Pass;
            } finally {
              cm.state.suppressEdits = false;
            }
            return done;
          });
        }
        function configureMouse(cm, repeat, event) {
          var option = cm.getOption("configureMouse");
          var value = option ? option(cm, repeat, event) : {};
          if (value.unit == null) {
            var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
            value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
          }
          if (value.extend == null || cm.doc.extend) {
            value.extend = cm.doc.extend || event.shiftKey;
          }
          if (value.addNew == null) {
            value.addNew = mac ? event.metaKey : event.ctrlKey;
          }
          if (value.moveOnDrag == null) {
            value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey);
          }
          return value;
        }
        function leftButtonDown(cm, pos, repeat, event) {
          if (ie) {
            setTimeout(bind(ensureFocus, cm), 0);
          } else {
            cm.curOp.focus = activeElt(root(cm));
          }
          var behavior = configureMouse(cm, repeat, event);
          var sel = cm.doc.sel, contained;
          if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() && repeat == "single" && (contained = sel.contains(pos)) > -1 && (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) && (cmp(contained.to(), pos) > 0 || pos.xRel < 0)) {
            leftButtonStartDrag(cm, event, pos, behavior);
          } else {
            leftButtonSelect(cm, event, pos, behavior);
          }
        }
        function leftButtonStartDrag(cm, event, pos, behavior) {
          var display = cm.display, moved = false;
          var dragEnd = operation(cm, function(e) {
            if (webkit) {
              display.scroller.draggable = false;
            }
            cm.state.draggingText = false;
            if (cm.state.delayingBlurEvent) {
              if (cm.hasFocus()) {
                cm.state.delayingBlurEvent = false;
              } else {
                delayBlurEvent(cm);
              }
            }
            off(display.wrapper.ownerDocument, "mouseup", dragEnd);
            off(display.wrapper.ownerDocument, "mousemove", mouseMove);
            off(display.scroller, "dragstart", dragStart);
            off(display.scroller, "drop", dragEnd);
            if (!moved) {
              e_preventDefault(e);
              if (!behavior.addNew) {
                extendSelection(cm.doc, pos, null, null, behavior.extend);
              }
              if (webkit && !safari || ie && ie_version == 9) {
                setTimeout(function() {
                  display.wrapper.ownerDocument.body.focus({ preventScroll: true });
                  display.input.focus();
                }, 20);
              } else {
                display.input.focus();
              }
            }
          });
          var mouseMove = function(e2) {
            moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
          };
          var dragStart = function() {
            return moved = true;
          };
          if (webkit) {
            display.scroller.draggable = true;
          }
          cm.state.draggingText = dragEnd;
          dragEnd.copy = !behavior.moveOnDrag;
          on(display.wrapper.ownerDocument, "mouseup", dragEnd);
          on(display.wrapper.ownerDocument, "mousemove", mouseMove);
          on(display.scroller, "dragstart", dragStart);
          on(display.scroller, "drop", dragEnd);
          cm.state.delayingBlurEvent = true;
          setTimeout(function() {
            return display.input.focus();
          }, 20);
          if (display.scroller.dragDrop) {
            display.scroller.dragDrop();
          }
        }
        function rangeForUnit(cm, pos, unit) {
          if (unit == "char") {
            return new Range(pos, pos);
          }
          if (unit == "word") {
            return cm.findWordAt(pos);
          }
          if (unit == "line") {
            return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
          }
          var result = unit(cm, pos);
          return new Range(result.from, result.to);
        }
        function leftButtonSelect(cm, event, start, behavior) {
          if (ie) {
            delayBlurEvent(cm);
          }
          var display = cm.display, doc2 = cm.doc;
          e_preventDefault(event);
          var ourRange, ourIndex, startSel = doc2.sel, ranges = startSel.ranges;
          if (behavior.addNew && !behavior.extend) {
            ourIndex = doc2.sel.contains(start);
            if (ourIndex > -1) {
              ourRange = ranges[ourIndex];
            } else {
              ourRange = new Range(start, start);
            }
          } else {
            ourRange = doc2.sel.primary();
            ourIndex = doc2.sel.primIndex;
          }
          if (behavior.unit == "rectangle") {
            if (!behavior.addNew) {
              ourRange = new Range(start, start);
            }
            start = posFromMouse(cm, event, true, true);
            ourIndex = -1;
          } else {
            var range2 = rangeForUnit(cm, start, behavior.unit);
            if (behavior.extend) {
              ourRange = extendRange(ourRange, range2.anchor, range2.head, behavior.extend);
            } else {
              ourRange = range2;
            }
          }
          if (!behavior.addNew) {
            ourIndex = 0;
            setSelection(doc2, new Selection([ourRange], 0), sel_mouse);
            startSel = doc2.sel;
          } else if (ourIndex == -1) {
            ourIndex = ranges.length;
            setSelection(
              doc2,
              normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
              { scroll: false, origin: "*mouse" }
            );
          } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
            setSelection(
              doc2,
              normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
              { scroll: false, origin: "*mouse" }
            );
            startSel = doc2.sel;
          } else {
            replaceOneSelection(doc2, ourIndex, ourRange, sel_mouse);
          }
          var lastPos = start;
          function extendTo(pos) {
            if (cmp(lastPos, pos) == 0) {
              return;
            }
            lastPos = pos;
            if (behavior.unit == "rectangle") {
              var ranges2 = [], tabSize = cm.options.tabSize;
              var startCol = countColumn(getLine(doc2, start.line).text, start.ch, tabSize);
              var posCol = countColumn(getLine(doc2, pos.line).text, pos.ch, tabSize);
              var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
              for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)); line <= end; line++) {
                var text = getLine(doc2, line).text, leftPos = findColumn(text, left, tabSize);
                if (left == right) {
                  ranges2.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
                } else if (text.length > leftPos) {
                  ranges2.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
                }
              }
              if (!ranges2.length) {
                ranges2.push(new Range(start, start));
              }
              setSelection(
                doc2,
                normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges2), ourIndex),
                { origin: "*mouse", scroll: false }
              );
              cm.scrollIntoView(pos);
            } else {
              var oldRange = ourRange;
              var range3 = rangeForUnit(cm, pos, behavior.unit);
              var anchor = oldRange.anchor, head;
              if (cmp(range3.anchor, anchor) > 0) {
                head = range3.head;
                anchor = minPos(oldRange.from(), range3.anchor);
              } else {
                head = range3.anchor;
                anchor = maxPos(oldRange.to(), range3.head);
              }
              var ranges$1 = startSel.ranges.slice(0);
              ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc2, anchor), head));
              setSelection(doc2, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
            }
          }
          var editorSize = display.wrapper.getBoundingClientRect();
          var counter = 0;
          function extend(e) {
            var curCount = ++counter;
            var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
            if (!cur) {
              return;
            }
            if (cmp(cur, lastPos) != 0) {
              cm.curOp.focus = activeElt(root(cm));
              extendTo(cur);
              var visible = visibleLines(display, doc2);
              if (cur.line >= visible.to || cur.line < visible.from) {
                setTimeout(operation(cm, function() {
                  if (counter == curCount) {
                    extend(e);
                  }
                }), 150);
              }
            } else {
              var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
              if (outside) {
                setTimeout(operation(cm, function() {
                  if (counter != curCount) {
                    return;
                  }
                  display.scroller.scrollTop += outside;
                  extend(e);
                }), 50);
              }
            }
          }
          function done(e) {
            cm.state.selectingText = false;
            counter = Infinity;
            if (e) {
              e_preventDefault(e);
              display.input.focus();
            }
            off(display.wrapper.ownerDocument, "mousemove", move);
            off(display.wrapper.ownerDocument, "mouseup", up);
            doc2.history.lastSelOrigin = null;
          }
          var move = operation(cm, function(e) {
            if (e.buttons === 0 || !e_button(e)) {
              done(e);
            } else {
              extend(e);
            }
          });
          var up = operation(cm, done);
          cm.state.selectingText = up;
          on(display.wrapper.ownerDocument, "mousemove", move);
          on(display.wrapper.ownerDocument, "mouseup", up);
        }
        function bidiSimplify(cm, range2) {
          var anchor = range2.anchor;
          var head = range2.head;
          var anchorLine = getLine(cm.doc, anchor.line);
          if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) {
            return range2;
          }
          var order = getOrder(anchorLine);
          if (!order) {
            return range2;
          }
          var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
          if (part.from != anchor.ch && part.to != anchor.ch) {
            return range2;
          }
          var boundary = index + (part.from == anchor.ch == (part.level != 1) ? 0 : 1);
          if (boundary == 0 || boundary == order.length) {
            return range2;
          }
          var leftSide;
          if (head.line != anchor.line) {
            leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
          } else {
            var headIndex = getBidiPartAt(order, head.ch, head.sticky);
            var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
            if (headIndex == boundary - 1 || headIndex == boundary) {
              leftSide = dir < 0;
            } else {
              leftSide = dir > 0;
            }
          }
          var usePart = order[boundary + (leftSide ? -1 : 0)];
          var from = leftSide == (usePart.level == 1);
          var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
          return anchor.ch == ch && anchor.sticky == sticky ? range2 : new Range(new Pos(anchor.line, ch, sticky), head);
        }
        function gutterEvent(cm, e, type, prevent) {
          var mX, mY;
          if (e.touches) {
            mX = e.touches[0].clientX;
            mY = e.touches[0].clientY;
          } else {
            try {
              mX = e.clientX;
              mY = e.clientY;
            } catch (e$1) {
              return false;
            }
          }
          if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) {
            return false;
          }
          if (prevent) {
            e_preventDefault(e);
          }
          var display = cm.display;
          var lineBox = display.lineDiv.getBoundingClientRect();
          if (mY > lineBox.bottom || !hasHandler(cm, type)) {
            return e_defaultPrevented(e);
          }
          mY -= lineBox.top - display.viewOffset;
          for (var i2 = 0; i2 < cm.display.gutterSpecs.length; ++i2) {
            var g = display.gutters.childNodes[i2];
            if (g && g.getBoundingClientRect().right >= mX) {
              var line = lineAtHeight(cm.doc, mY);
              var gutter = cm.display.gutterSpecs[i2];
              signal(cm, type, cm, line, gutter.className, e);
              return e_defaultPrevented(e);
            }
          }
        }
        function clickInGutter(cm, e) {
          return gutterEvent(cm, e, "gutterClick", true);
        }
        function onContextMenu(cm, e) {
          if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) {
            return;
          }
          if (signalDOMEvent(cm, e, "contextmenu")) {
            return;
          }
          if (!captureRightClick) {
            cm.display.input.onContextMenu(e);
          }
        }
        function contextMenuInGutter(cm, e) {
          if (!hasHandler(cm, "gutterContextMenu")) {
            return false;
          }
          return gutterEvent(cm, e, "gutterContextMenu", false);
        }
        function themeChanged(cm) {
          cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
          clearCaches(cm);
        }
        var Init = { toString: function() {
          return "CodeMirror.Init";
        } };
        var defaults = {};
        var optionHandlers = {};
        function defineOptions(CodeMirror4) {
          var optionHandlers2 = CodeMirror4.optionHandlers;
          function option(name, deflt, handle, notOnInit) {
            CodeMirror4.defaults[name] = deflt;
            if (handle) {
              optionHandlers2[name] = notOnInit ? function(cm, val, old) {
                if (old != Init) {
                  handle(cm, val, old);
                }
              } : handle;
            }
          }
          CodeMirror4.defineOption = option;
          CodeMirror4.Init = Init;
          option("value", "", function(cm, val) {
            return cm.setValue(val);
          }, true);
          option("mode", null, function(cm, val) {
            cm.doc.modeOption = val;
            loadMode(cm);
          }, true);
          option("indentUnit", 2, loadMode, true);
          option("indentWithTabs", false);
          option("smartIndent", true);
          option("tabSize", 4, function(cm) {
            resetModeState(cm);
            clearCaches(cm);
            regChange(cm);
          }, true);
          option("lineSeparator", null, function(cm, val) {
            cm.doc.lineSep = val;
            if (!val) {
              return;
            }
            var newBreaks = [], lineNo2 = cm.doc.first;
            cm.doc.iter(function(line) {
              for (var pos = 0; ; ) {
                var found = line.text.indexOf(val, pos);
                if (found == -1) {
                  break;
                }
                pos = found + val.length;
                newBreaks.push(Pos(lineNo2, found));
              }
              lineNo2++;
            });
            for (var i2 = newBreaks.length - 1; i2 >= 0; i2--) {
              replaceRange(cm.doc, val, newBreaks[i2], Pos(newBreaks[i2].line, newBreaks[i2].ch + val.length));
            }
          });
          option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(cm, val, old) {
            cm.state.specialChars = new RegExp(val.source + (val.test("	") ? "" : "|	"), "g");
            if (old != Init) {
              cm.refresh();
            }
          });
          option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {
            return cm.refresh();
          }, true);
          option("electricChars", true);
          option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
            throw new Error("inputStyle can not (yet) be changed in a running editor");
          }, true);
          option("spellcheck", false, function(cm, val) {
            return cm.getInputField().spellcheck = val;
          }, true);
          option("autocorrect", false, function(cm, val) {
            return cm.getInputField().autocorrect = val;
          }, true);
          option("autocapitalize", false, function(cm, val) {
            return cm.getInputField().autocapitalize = val;
          }, true);
          option("rtlMoveVisually", !windows);
          option("wholeLineUpdateBefore", true);
          option("theme", "default", function(cm) {
            themeChanged(cm);
            updateGutters(cm);
          }, true);
          option("keyMap", "default", function(cm, val, old) {
            var next = getKeyMap(val);
            var prev = old != Init && getKeyMap(old);
            if (prev && prev.detach) {
              prev.detach(cm, next);
            }
            if (next.attach) {
              next.attach(cm, prev || null);
            }
          });
          option("extraKeys", null);
          option("configureMouse", null);
          option("lineWrapping", false, wrappingChanged, true);
          option("gutters", [], function(cm, val) {
            cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
            updateGutters(cm);
          }, true);
          option("fixedGutter", true, function(cm, val) {
            cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
            cm.refresh();
          }, true);
          option("coverGutterNextToScrollbar", false, function(cm) {
            return updateScrollbars(cm);
          }, true);
          option("scrollbarStyle", "native", function(cm) {
            initScrollbars(cm);
            updateScrollbars(cm);
            cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
            cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
          }, true);
          option("lineNumbers", false, function(cm, val) {
            cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
            updateGutters(cm);
          }, true);
          option("firstLineNumber", 1, updateGutters, true);
          option("lineNumberFormatter", function(integer) {
            return integer;
          }, updateGutters, true);
          option("showCursorWhenSelecting", false, updateSelection, true);
          option("resetSelectionOnContextMenu", true);
          option("lineWiseCopyCut", true);
          option("pasteLinesPerSelection", true);
          option("selectionsMayTouch", false);
          option("readOnly", false, function(cm, val) {
            if (val == "nocursor") {
              onBlur(cm);
              cm.display.input.blur();
            }
            cm.display.input.readOnlyChanged(val);
          });
          option("screenReaderLabel", null, function(cm, val) {
            val = val === "" ? null : val;
            cm.display.input.screenReaderLabelChanged(val);
          });
          option("disableInput", false, function(cm, val) {
            if (!val) {
              cm.display.input.reset();
            }
          }, true);
          option("dragDrop", true, dragDropChanged);
          option("allowDropFileTypes", null);
          option("cursorBlinkRate", 530);
          option("cursorScrollMargin", 0);
          option("cursorHeight", 1, updateSelection, true);
          option("singleCursorHeightPerLine", true, updateSelection, true);
          option("workTime", 100);
          option("workDelay", 100);
          option("flattenSpans", true, resetModeState, true);
          option("addModeClass", false, resetModeState, true);
          option("pollInterval", 100);
          option("undoDepth", 200, function(cm, val) {
            return cm.doc.history.undoDepth = val;
          });
          option("historyEventDelay", 1250);
          option("viewportMargin", 10, function(cm) {
            return cm.refresh();
          }, true);
          option("maxHighlightLength", 1e4, resetModeState, true);
          option("moveInputWithCursor", true, function(cm, val) {
            if (!val) {
              cm.display.input.resetPosition();
            }
          });
          option("tabindex", null, function(cm, val) {
            return cm.display.input.getField().tabIndex = val || "";
          });
          option("autofocus", null);
          option("direction", "ltr", function(cm, val) {
            return cm.doc.setDirection(val);
          }, true);
          option("phrases", null);
        }
        function dragDropChanged(cm, value, old) {
          var wasOn = old && old != Init;
          if (!value != !wasOn) {
            var funcs = cm.display.dragFunctions;
            var toggle = value ? on : off;
            toggle(cm.display.scroller, "dragstart", funcs.start);
            toggle(cm.display.scroller, "dragenter", funcs.enter);
            toggle(cm.display.scroller, "dragover", funcs.over);
            toggle(cm.display.scroller, "dragleave", funcs.leave);
            toggle(cm.display.scroller, "drop", funcs.drop);
          }
        }
        function wrappingChanged(cm) {
          if (cm.options.lineWrapping) {
            addClass(cm.display.wrapper, "CodeMirror-wrap");
            cm.display.sizer.style.minWidth = "";
            cm.display.sizerWidth = null;
          } else {
            rmClass(cm.display.wrapper, "CodeMirror-wrap");
            findMaxLine(cm);
          }
          estimateLineHeights(cm);
          regChange(cm);
          clearCaches(cm);
          setTimeout(function() {
            return updateScrollbars(cm);
          }, 100);
        }
        function CodeMirror3(place, options) {
          var this$1 = this;
          if (!(this instanceof CodeMirror3)) {
            return new CodeMirror3(place, options);
          }
          this.options = options = options ? copyObj(options) : {};
          copyObj(defaults, options, false);
          var doc2 = options.value;
          if (typeof doc2 == "string") {
            doc2 = new Doc(doc2, options.mode, null, options.lineSeparator, options.direction);
          } else if (options.mode) {
            doc2.modeOption = options.mode;
          }
          this.doc = doc2;
          var input = new CodeMirror3.inputStyles[options.inputStyle](this);
          var display = this.display = new Display(place, doc2, input, options);
          display.wrapper.CodeMirror = this;
          themeChanged(this);
          if (options.lineWrapping) {
            this.display.wrapper.className += " CodeMirror-wrap";
          }
          initScrollbars(this);
          this.state = {
            keyMaps: [],
            // stores maps added by addKeyMap
            overlays: [],
            // highlighting overlays, as added by addOverlay
            modeGen: 0,
            // bumped when mode/overlay changes, used to invalidate highlighting info
            overwrite: false,
            delayingBlurEvent: false,
            focused: false,
            suppressEdits: false,
            // used to disable editing during key handlers when in readOnly mode
            pasteIncoming: -1,
            cutIncoming: -1,
            // help recognize paste/cut edits in input.poll
            selectingText: false,
            draggingText: false,
            highlight: new Delayed(),
            // stores highlight worker timeout
            keySeq: null,
            // Unfinished key sequence
            specialChars: null
          };
          if (options.autofocus && !mobile) {
            display.input.focus();
          }
          if (ie && ie_version < 11) {
            setTimeout(function() {
              return this$1.display.input.reset(true);
            }, 20);
          }
          registerEventHandlers(this);
          ensureGlobalHandlers();
          startOperation(this);
          this.curOp.forceUpdate = true;
          attachDoc(this, doc2);
          if (options.autofocus && !mobile || this.hasFocus()) {
            setTimeout(function() {
              if (this$1.hasFocus() && !this$1.state.focused) {
                onFocus(this$1);
              }
            }, 20);
          } else {
            onBlur(this);
          }
          for (var opt in optionHandlers) {
            if (optionHandlers.hasOwnProperty(opt)) {
              optionHandlers[opt](this, options[opt], Init);
            }
          }
          maybeUpdateLineNumberWidth(this);
          if (options.finishInit) {
            options.finishInit(this);
          }
          for (var i2 = 0; i2 < initHooks.length; ++i2) {
            initHooks[i2](this);
          }
          endOperation(this);
          if (webkit && options.lineWrapping && getComputedStyle(display.lineDiv).textRendering == "optimizelegibility") {
            display.lineDiv.style.textRendering = "auto";
          }
        }
        CodeMirror3.defaults = defaults;
        CodeMirror3.optionHandlers = optionHandlers;
        function registerEventHandlers(cm) {
          var d = cm.display;
          on(d.scroller, "mousedown", operation(cm, onMouseDown));
          if (ie && ie_version < 11) {
            on(d.scroller, "dblclick", operation(cm, function(e) {
              if (signalDOMEvent(cm, e)) {
                return;
              }
              var pos = posFromMouse(cm, e);
              if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) {
                return;
              }
              e_preventDefault(e);
              var word = cm.findWordAt(pos);
              extendSelection(cm.doc, word.anchor, word.head);
            }));
          } else {
            on(d.scroller, "dblclick", function(e) {
              return signalDOMEvent(cm, e) || e_preventDefault(e);
            });
          }
          on(d.scroller, "contextmenu", function(e) {
            return onContextMenu(cm, e);
          });
          on(d.input.getField(), "contextmenu", function(e) {
            if (!d.scroller.contains(e.target)) {
              onContextMenu(cm, e);
            }
          });
          var touchFinished, prevTouch = { end: 0 };
          function finishTouch() {
            if (d.activeTouch) {
              touchFinished = setTimeout(function() {
                return d.activeTouch = null;
              }, 1e3);
              prevTouch = d.activeTouch;
              prevTouch.end = +/* @__PURE__ */ new Date();
            }
          }
          function isMouseLikeTouchEvent(e) {
            if (e.touches.length != 1) {
              return false;
            }
            var touch = e.touches[0];
            return touch.radiusX <= 1 && touch.radiusY <= 1;
          }
          function farAway(touch, other) {
            if (other.left == null) {
              return true;
            }
            var dx = other.left - touch.left, dy = other.top - touch.top;
            return dx * dx + dy * dy > 20 * 20;
          }
          on(d.scroller, "touchstart", function(e) {
            if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
              d.input.ensurePolled();
              clearTimeout(touchFinished);
              var now = +/* @__PURE__ */ new Date();
              d.activeTouch = {
                start: now,
                moved: false,
                prev: now - prevTouch.end <= 300 ? prevTouch : null
              };
              if (e.touches.length == 1) {
                d.activeTouch.left = e.touches[0].pageX;
                d.activeTouch.top = e.touches[0].pageY;
              }
            }
          });
          on(d.scroller, "touchmove", function() {
            if (d.activeTouch) {
              d.activeTouch.moved = true;
            }
          });
          on(d.scroller, "touchend", function(e) {
            var touch = d.activeTouch;
            if (touch && !eventInWidget(d, e) && touch.left != null && !touch.moved && /* @__PURE__ */ new Date() - touch.start < 300) {
              var pos = cm.coordsChar(d.activeTouch, "page"), range2;
              if (!touch.prev || farAway(touch, touch.prev)) {
                range2 = new Range(pos, pos);
              } else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) {
                range2 = cm.findWordAt(pos);
              } else {
                range2 = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
              }
              cm.setSelection(range2.anchor, range2.head);
              cm.focus();
              e_preventDefault(e);
            }
            finishTouch();
          });
          on(d.scroller, "touchcancel", finishTouch);
          on(d.scroller, "scroll", function() {
            if (d.scroller.clientHeight) {
              updateScrollTop(cm, d.scroller.scrollTop);
              setScrollLeft(cm, d.scroller.scrollLeft, true);
              signal(cm, "scroll", cm);
            }
          });
          on(d.scroller, "mousewheel", function(e) {
            return onScrollWheel(cm, e);
          });
          on(d.scroller, "DOMMouseScroll", function(e) {
            return onScrollWheel(cm, e);
          });
          on(d.wrapper, "scroll", function() {
            return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
          });
          d.dragFunctions = {
            enter: function(e) {
              if (!signalDOMEvent(cm, e)) {
                e_stop(e);
              }
            },
            over: function(e) {
              if (!signalDOMEvent(cm, e)) {
                onDragOver(cm, e);
                e_stop(e);
              }
            },
            start: function(e) {
              return onDragStart(cm, e);
            },
            drop: operation(cm, onDrop),
            leave: function(e) {
              if (!signalDOMEvent(cm, e)) {
                clearDragCursor(cm);
              }
            }
          };
          var inp = d.input.getField();
          on(inp, "keyup", function(e) {
            return onKeyUp.call(cm, e);
          });
          on(inp, "keydown", operation(cm, onKeyDown));
          on(inp, "keypress", operation(cm, onKeyPress));
          on(inp, "focus", function(e) {
            return onFocus(cm, e);
          });
          on(inp, "blur", function(e) {
            return onBlur(cm, e);
          });
        }
        var initHooks = [];
        CodeMirror3.defineInitHook = function(f) {
          return initHooks.push(f);
        };
        function indentLine(cm, n, how, aggressive) {
          var doc2 = cm.doc, state;
          if (how == null) {
            how = "add";
          }
          if (how == "smart") {
            if (!doc2.mode.indent) {
              how = "prev";
            } else {
              state = getContextBefore(cm, n).state;
            }
          }
          var tabSize = cm.options.tabSize;
          var line = getLine(doc2, n), curSpace = countColumn(line.text, null, tabSize);
          if (line.stateAfter) {
            line.stateAfter = null;
          }
          var curSpaceString = line.text.match(/^\s*/)[0], indentation;
          if (!aggressive && !/\S/.test(line.text)) {
            indentation = 0;
            how = "not";
          } else if (how == "smart") {
            indentation = doc2.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
            if (indentation == Pass || indentation > 150) {
              if (!aggressive) {
                return;
              }
              how = "prev";
            }
          }
          if (how == "prev") {
            if (n > doc2.first) {
              indentation = countColumn(getLine(doc2, n - 1).text, null, tabSize);
            } else {
              indentation = 0;
            }
          } else if (how == "add") {
            indentation = curSpace + cm.options.indentUnit;
          } else if (how == "subtract") {
            indentation = curSpace - cm.options.indentUnit;
          } else if (typeof how == "number") {
            indentation = curSpace + how;
          }
          indentation = Math.max(0, indentation);
          var indentString = "", pos = 0;
          if (cm.options.indentWithTabs) {
            for (var i2 = Math.floor(indentation / tabSize); i2; --i2) {
              pos += tabSize;
              indentString += "	";
            }
          }
          if (pos < indentation) {
            indentString += spaceStr(indentation - pos);
          }
          if (indentString != curSpaceString) {
            replaceRange(doc2, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
            line.stateAfter = null;
            return true;
          } else {
            for (var i$12 = 0; i$12 < doc2.sel.ranges.length; i$12++) {
              var range2 = doc2.sel.ranges[i$12];
              if (range2.head.line == n && range2.head.ch < curSpaceString.length) {
                var pos$1 = Pos(n, curSpaceString.length);
                replaceOneSelection(doc2, i$12, new Range(pos$1, pos$1));
                break;
              }
            }
          }
        }
        var lastCopied = null;
        function setLastCopied(newLastCopied) {
          lastCopied = newLastCopied;
        }
        function applyTextInput(cm, inserted, deleted, sel, origin) {
          var doc2 = cm.doc;
          cm.display.shift = false;
          if (!sel) {
            sel = doc2.sel;
          }
          var recent = +/* @__PURE__ */ new Date() - 200;
          var paste = origin == "paste" || cm.state.pasteIncoming > recent;
          var textLines = splitLinesAuto(inserted), multiPaste = null;
          if (paste && sel.ranges.length > 1) {
            if (lastCopied && lastCopied.text.join("\n") == inserted) {
              if (sel.ranges.length % lastCopied.text.length == 0) {
                multiPaste = [];
                for (var i2 = 0; i2 < lastCopied.text.length; i2++) {
                  multiPaste.push(doc2.splitLines(lastCopied.text[i2]));
                }
              }
            } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
              multiPaste = map(textLines, function(l) {
                return [l];
              });
            }
          }
          var updateInput = cm.curOp.updateInput;
          for (var i$12 = sel.ranges.length - 1; i$12 >= 0; i$12--) {
            var range2 = sel.ranges[i$12];
            var from = range2.from(), to = range2.to();
            if (range2.empty()) {
              if (deleted && deleted > 0) {
                from = Pos(from.line, from.ch - deleted);
              } else if (cm.state.overwrite && !paste) {
                to = Pos(to.line, Math.min(getLine(doc2, to.line).text.length, to.ch + lst(textLines).length));
              } else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n")) {
                from = to = Pos(from.line, 0);
              }
            }
            var changeEvent = {
              from,
              to,
              text: multiPaste ? multiPaste[i$12 % multiPaste.length] : textLines,
              origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")
            };
            makeChange(cm.doc, changeEvent);
            signalLater(cm, "inputRead", cm, changeEvent);
          }
          if (inserted && !paste) {
            triggerElectric(cm, inserted);
          }
          ensureCursorVisible(cm);
          if (cm.curOp.updateInput < 2) {
            cm.curOp.updateInput = updateInput;
          }
          cm.curOp.typing = true;
          cm.state.pasteIncoming = cm.state.cutIncoming = -1;
        }
        function handlePaste(e, cm) {
          var pasted = e.clipboardData && e.clipboardData.getData("Text");
          if (pasted) {
            e.preventDefault();
            if (!cm.isReadOnly() && !cm.options.disableInput && cm.hasFocus()) {
              runInOp(cm, function() {
                return applyTextInput(cm, pasted, 0, null, "paste");
              });
            }
            return true;
          }
        }
        function triggerElectric(cm, inserted) {
          if (!cm.options.electricChars || !cm.options.smartIndent) {
            return;
          }
          var sel = cm.doc.sel;
          for (var i2 = sel.ranges.length - 1; i2 >= 0; i2--) {
            var range2 = sel.ranges[i2];
            if (range2.head.ch > 100 || i2 && sel.ranges[i2 - 1].head.line == range2.head.line) {
              continue;
            }
            var mode = cm.getModeAt(range2.head);
            var indented = false;
            if (mode.electricChars) {
              for (var j = 0; j < mode.electricChars.length; j++) {
                if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
                  indented = indentLine(cm, range2.head.line, "smart");
                  break;
                }
              }
            } else if (mode.electricInput) {
              if (mode.electricInput.test(getLine(cm.doc, range2.head.line).text.slice(0, range2.head.ch))) {
                indented = indentLine(cm, range2.head.line, "smart");
              }
            }
            if (indented) {
              signalLater(cm, "electricInput", cm, range2.head.line);
            }
          }
        }
        function copyableRanges(cm) {
          var text = [], ranges = [];
          for (var i2 = 0; i2 < cm.doc.sel.ranges.length; i2++) {
            var line = cm.doc.sel.ranges[i2].head.line;
            var lineRange = { anchor: Pos(line, 0), head: Pos(line + 1, 0) };
            ranges.push(lineRange);
            text.push(cm.getRange(lineRange.anchor, lineRange.head));
          }
          return { text, ranges };
        }
        function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
          field.setAttribute("autocorrect", autocorrect ? "on" : "off");
          field.setAttribute("autocapitalize", autocapitalize ? "on" : "off");
          field.setAttribute("spellcheck", !!spellcheck);
        }
        function hiddenTextarea() {
          var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none");
          var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
          if (webkit) {
            te.style.width = "1000px";
          } else {
            te.setAttribute("wrap", "off");
          }
          if (ios) {
            te.style.border = "1px solid black";
          }
          return div;
        }
        function addEditorMethods(CodeMirror4) {
          var optionHandlers2 = CodeMirror4.optionHandlers;
          var helpers = CodeMirror4.helpers = {};
          CodeMirror4.prototype = {
            constructor: CodeMirror4,
            focus: function() {
              win(this).focus();
              this.display.input.focus();
            },
            setOption: function(option, value) {
              var options = this.options, old = options[option];
              if (options[option] == value && option != "mode") {
                return;
              }
              options[option] = value;
              if (optionHandlers2.hasOwnProperty(option)) {
                operation(this, optionHandlers2[option])(this, value, old);
              }
              signal(this, "optionChange", this, option);
            },
            getOption: function(option) {
              return this.options[option];
            },
            getDoc: function() {
              return this.doc;
            },
            addKeyMap: function(map2, bottom) {
              this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map2));
            },
            removeKeyMap: function(map2) {
              var maps = this.state.keyMaps;
              for (var i2 = 0; i2 < maps.length; ++i2) {
                if (maps[i2] == map2 || maps[i2].name == map2) {
                  maps.splice(i2, 1);
                  return true;
                }
              }
            },
            addOverlay: methodOp(function(spec, options) {
              var mode = spec.token ? spec : CodeMirror4.getMode(this.options, spec);
              if (mode.startState) {
                throw new Error("Overlays may not be stateful.");
              }
              insertSorted(
                this.state.overlays,
                {
                  mode,
                  modeSpec: spec,
                  opaque: options && options.opaque,
                  priority: options && options.priority || 0
                },
                function(overlay) {
                  return overlay.priority;
                }
              );
              this.state.modeGen++;
              regChange(this);
            }),
            removeOverlay: methodOp(function(spec) {
              var overlays = this.state.overlays;
              for (var i2 = 0; i2 < overlays.length; ++i2) {
                var cur = overlays[i2].modeSpec;
                if (cur == spec || typeof spec == "string" && cur.name == spec) {
                  overlays.splice(i2, 1);
                  this.state.modeGen++;
                  regChange(this);
                  return;
                }
              }
            }),
            indentLine: methodOp(function(n, dir, aggressive) {
              if (typeof dir != "string" && typeof dir != "number") {
                if (dir == null) {
                  dir = this.options.smartIndent ? "smart" : "prev";
                } else {
                  dir = dir ? "add" : "subtract";
                }
              }
              if (isLine(this.doc, n)) {
                indentLine(this, n, dir, aggressive);
              }
            }),
            indentSelection: methodOp(function(how) {
              var ranges = this.doc.sel.ranges, end = -1;
              for (var i2 = 0; i2 < ranges.length; i2++) {
                var range2 = ranges[i2];
                if (!range2.empty()) {
                  var from = range2.from(), to = range2.to();
                  var start = Math.max(end, from.line);
                  end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
                  for (var j = start; j < end; ++j) {
                    indentLine(this, j, how);
                  }
                  var newRanges = this.doc.sel.ranges;
                  if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i2].from().ch > 0) {
                    replaceOneSelection(this.doc, i2, new Range(from, newRanges[i2].to()), sel_dontScroll);
                  }
                } else if (range2.head.line > end) {
                  indentLine(this, range2.head.line, how, true);
                  end = range2.head.line;
                  if (i2 == this.doc.sel.primIndex) {
                    ensureCursorVisible(this);
                  }
                }
              }
            }),
            // Fetch the parser token for a given character. Useful for hacks
            // that want to inspect the mode state (say, for completion).
            getTokenAt: function(pos, precise) {
              return takeToken(this, pos, precise);
            },
            getLineTokens: function(line, precise) {
              return takeToken(this, Pos(line), precise, true);
            },
            getTokenTypeAt: function(pos) {
              pos = clipPos(this.doc, pos);
              var styles = getLineStyles(this, getLine(this.doc, pos.line));
              var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
              var type;
              if (ch == 0) {
                type = styles[2];
              } else {
                for (; ; ) {
                  var mid = before + after >> 1;
                  if ((mid ? styles[mid * 2 - 1] : 0) >= ch) {
                    after = mid;
                  } else if (styles[mid * 2 + 1] < ch) {
                    before = mid + 1;
                  } else {
                    type = styles[mid * 2 + 2];
                    break;
                  }
                }
              }
              var cut = type ? type.indexOf("overlay ") : -1;
              return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
            },
            getModeAt: function(pos) {
              var mode = this.doc.mode;
              if (!mode.innerMode) {
                return mode;
              }
              return CodeMirror4.innerMode(mode, this.getTokenAt(pos).state).mode;
            },
            getHelper: function(pos, type) {
              return this.getHelpers(pos, type)[0];
            },
            getHelpers: function(pos, type) {
              var found = [];
              if (!helpers.hasOwnProperty(type)) {
                return found;
              }
              var help = helpers[type], mode = this.getModeAt(pos);
              if (typeof mode[type] == "string") {
                if (help[mode[type]]) {
                  found.push(help[mode[type]]);
                }
              } else if (mode[type]) {
                for (var i2 = 0; i2 < mode[type].length; i2++) {
                  var val = help[mode[type][i2]];
                  if (val) {
                    found.push(val);
                  }
                }
              } else if (mode.helperType && help[mode.helperType]) {
                found.push(help[mode.helperType]);
              } else if (help[mode.name]) {
                found.push(help[mode.name]);
              }
              for (var i$12 = 0; i$12 < help._global.length; i$12++) {
                var cur = help._global[i$12];
                if (cur.pred(mode, this) && indexOf(found, cur.val) == -1) {
                  found.push(cur.val);
                }
              }
              return found;
            },
            getStateAfter: function(line, precise) {
              var doc2 = this.doc;
              line = clipLine(doc2, line == null ? doc2.first + doc2.size - 1 : line);
              return getContextBefore(this, line + 1, precise).state;
            },
            cursorCoords: function(start, mode) {
              var pos, range2 = this.doc.sel.primary();
              if (start == null) {
                pos = range2.head;
              } else if (typeof start == "object") {
                pos = clipPos(this.doc, start);
              } else {
                pos = start ? range2.from() : range2.to();
              }
              return cursorCoords(this, pos, mode || "page");
            },
            charCoords: function(pos, mode) {
              return charCoords(this, clipPos(this.doc, pos), mode || "page");
            },
            coordsChar: function(coords, mode) {
              coords = fromCoordSystem(this, coords, mode || "page");
              return coordsChar(this, coords.left, coords.top);
            },
            lineAtHeight: function(height, mode) {
              height = fromCoordSystem(this, { top: height, left: 0 }, mode || "page").top;
              return lineAtHeight(this.doc, height + this.display.viewOffset);
            },
            heightAtLine: function(line, mode, includeWidgets) {
              var end = false, lineObj;
              if (typeof line == "number") {
                var last = this.doc.first + this.doc.size - 1;
                if (line < this.doc.first) {
                  line = this.doc.first;
                } else if (line > last) {
                  line = last;
                  end = true;
                }
                lineObj = getLine(this.doc, line);
              } else {
                lineObj = line;
              }
              return intoCoordSystem(this, lineObj, { top: 0, left: 0 }, mode || "page", includeWidgets || end).top + (end ? this.doc.height - heightAtLine(lineObj) : 0);
            },
            defaultTextHeight: function() {
              return textHeight(this.display);
            },
            defaultCharWidth: function() {
              return charWidth(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(pos, node, scroll, vert, horiz) {
              var display = this.display;
              pos = cursorCoords(this, clipPos(this.doc, pos));
              var top = pos.bottom, left = pos.left;
              node.style.position = "absolute";
              node.setAttribute("cm-ignore-events", "true");
              this.display.input.setUneditable(node);
              display.sizer.appendChild(node);
              if (vert == "over") {
                top = pos.top;
              } else if (vert == "above" || vert == "near") {
                var vspace = Math.max(display.wrapper.clientHeight, this.doc.height), hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
                if ((vert == "above" || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight) {
                  top = pos.top - node.offsetHeight;
                } else if (pos.bottom + node.offsetHeight <= vspace) {
                  top = pos.bottom;
                }
                if (left + node.offsetWidth > hspace) {
                  left = hspace - node.offsetWidth;
                }
              }
              node.style.top = top + "px";
              node.style.left = node.style.right = "";
              if (horiz == "right") {
                left = display.sizer.clientWidth - node.offsetWidth;
                node.style.right = "0px";
              } else {
                if (horiz == "left") {
                  left = 0;
                } else if (horiz == "middle") {
                  left = (display.sizer.clientWidth - node.offsetWidth) / 2;
                }
                node.style.left = left + "px";
              }
              if (scroll) {
                scrollIntoView(this, { left, top, right: left + node.offsetWidth, bottom: top + node.offsetHeight });
              }
            },
            triggerOnKeyDown: methodOp(onKeyDown),
            triggerOnKeyPress: methodOp(onKeyPress),
            triggerOnKeyUp: onKeyUp,
            triggerOnMouseDown: methodOp(onMouseDown),
            execCommand: function(cmd) {
              if (commands.hasOwnProperty(cmd)) {
                return commands[cmd].call(null, this);
              }
            },
            triggerElectric: methodOp(function(text) {
              triggerElectric(this, text);
            }),
            findPosH: function(from, amount, unit, visually) {
              var dir = 1;
              if (amount < 0) {
                dir = -1;
                amount = -amount;
              }
              var cur = clipPos(this.doc, from);
              for (var i2 = 0; i2 < amount; ++i2) {
                cur = findPosH(this.doc, cur, dir, unit, visually);
                if (cur.hitSide) {
                  break;
                }
              }
              return cur;
            },
            moveH: methodOp(function(dir, unit) {
              var this$1 = this;
              this.extendSelectionsBy(function(range2) {
                if (this$1.display.shift || this$1.doc.extend || range2.empty()) {
                  return findPosH(this$1.doc, range2.head, dir, unit, this$1.options.rtlMoveVisually);
                } else {
                  return dir < 0 ? range2.from() : range2.to();
                }
              }, sel_move);
            }),
            deleteH: methodOp(function(dir, unit) {
              var sel = this.doc.sel, doc2 = this.doc;
              if (sel.somethingSelected()) {
                doc2.replaceSelection("", null, "+delete");
              } else {
                deleteNearSelection(this, function(range2) {
                  var other = findPosH(doc2, range2.head, dir, unit, false);
                  return dir < 0 ? { from: other, to: range2.head } : { from: range2.head, to: other };
                });
              }
            }),
            findPosV: function(from, amount, unit, goalColumn) {
              var dir = 1, x = goalColumn;
              if (amount < 0) {
                dir = -1;
                amount = -amount;
              }
              var cur = clipPos(this.doc, from);
              for (var i2 = 0; i2 < amount; ++i2) {
                var coords = cursorCoords(this, cur, "div");
                if (x == null) {
                  x = coords.left;
                } else {
                  coords.left = x;
                }
                cur = findPosV(this, coords, dir, unit);
                if (cur.hitSide) {
                  break;
                }
              }
              return cur;
            },
            moveV: methodOp(function(dir, unit) {
              var this$1 = this;
              var doc2 = this.doc, goals = [];
              var collapse = !this.display.shift && !doc2.extend && doc2.sel.somethingSelected();
              doc2.extendSelectionsBy(function(range2) {
                if (collapse) {
                  return dir < 0 ? range2.from() : range2.to();
                }
                var headPos = cursorCoords(this$1, range2.head, "div");
                if (range2.goalColumn != null) {
                  headPos.left = range2.goalColumn;
                }
                goals.push(headPos.left);
                var pos = findPosV(this$1, headPos, dir, unit);
                if (unit == "page" && range2 == doc2.sel.primary()) {
                  addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top);
                }
                return pos;
              }, sel_move);
              if (goals.length) {
                for (var i2 = 0; i2 < doc2.sel.ranges.length; i2++) {
                  doc2.sel.ranges[i2].goalColumn = goals[i2];
                }
              }
            }),
            // Find the word at the given position (as returned by coordsChar).
            findWordAt: function(pos) {
              var doc2 = this.doc, line = getLine(doc2, pos.line).text;
              var start = pos.ch, end = pos.ch;
              if (line) {
                var helper = this.getHelper(pos, "wordChars");
                if ((pos.sticky == "before" || end == line.length) && start) {
                  --start;
                } else {
                  ++end;
                }
                var startChar = line.charAt(start);
                var check = isWordChar(startChar, helper) ? function(ch) {
                  return isWordChar(ch, helper);
                } : /\s/.test(startChar) ? function(ch) {
                  return /\s/.test(ch);
                } : function(ch) {
                  return !/\s/.test(ch) && !isWordChar(ch);
                };
                while (start > 0 && check(line.charAt(start - 1))) {
                  --start;
                }
                while (end < line.length && check(line.charAt(end))) {
                  ++end;
                }
              }
              return new Range(Pos(pos.line, start), Pos(pos.line, end));
            },
            toggleOverwrite: function(value) {
              if (value != null && value == this.state.overwrite) {
                return;
              }
              if (this.state.overwrite = !this.state.overwrite) {
                addClass(this.display.cursorDiv, "CodeMirror-overwrite");
              } else {
                rmClass(this.display.cursorDiv, "CodeMirror-overwrite");
              }
              signal(this, "overwriteToggle", this, this.state.overwrite);
            },
            hasFocus: function() {
              return this.display.input.getField() == activeElt(root(this));
            },
            isReadOnly: function() {
              return !!(this.options.readOnly || this.doc.cantEdit);
            },
            scrollTo: methodOp(function(x, y) {
              scrollToCoords(this, x, y);
            }),
            getScrollInfo: function() {
              var scroller = this.display.scroller;
              return {
                left: scroller.scrollLeft,
                top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this),
                clientWidth: displayWidth(this)
              };
            },
            scrollIntoView: methodOp(function(range2, margin) {
              if (range2 == null) {
                range2 = { from: this.doc.sel.primary().head, to: null };
                if (margin == null) {
                  margin = this.options.cursorScrollMargin;
                }
              } else if (typeof range2 == "number") {
                range2 = { from: Pos(range2, 0), to: null };
              } else if (range2.from == null) {
                range2 = { from: range2, to: null };
              }
              if (!range2.to) {
                range2.to = range2.from;
              }
              range2.margin = margin || 0;
              if (range2.from.line != null) {
                scrollToRange(this, range2);
              } else {
                scrollToCoordsRange(this, range2.from, range2.to, range2.margin);
              }
            }),
            setSize: methodOp(function(width, height) {
              var this$1 = this;
              var interpret = function(val) {
                return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
              };
              if (width != null) {
                this.display.wrapper.style.width = interpret(width);
              }
              if (height != null) {
                this.display.wrapper.style.height = interpret(height);
              }
              if (this.options.lineWrapping) {
                clearLineMeasurementCache(this);
              }
              var lineNo2 = this.display.viewFrom;
              this.doc.iter(lineNo2, this.display.viewTo, function(line) {
                if (line.widgets) {
                  for (var i2 = 0; i2 < line.widgets.length; i2++) {
                    if (line.widgets[i2].noHScroll) {
                      regLineChange(this$1, lineNo2, "widget");
                      break;
                    }
                  }
                }
                ++lineNo2;
              });
              this.curOp.forceUpdate = true;
              signal(this, "refresh", this);
            }),
            operation: function(f) {
              return runInOp(this, f);
            },
            startOperation: function() {
              return startOperation(this);
            },
            endOperation: function() {
              return endOperation(this);
            },
            refresh: methodOp(function() {
              var oldHeight = this.display.cachedTextHeight;
              regChange(this);
              this.curOp.forceUpdate = true;
              clearCaches(this);
              scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
              updateGutterSpace(this.display);
              if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > 0.5 || this.options.lineWrapping) {
                estimateLineHeights(this);
              }
              signal(this, "refresh", this);
            }),
            swapDoc: methodOp(function(doc2) {
              var old = this.doc;
              old.cm = null;
              if (this.state.selectingText) {
                this.state.selectingText();
              }
              attachDoc(this, doc2);
              clearCaches(this);
              this.display.input.reset();
              scrollToCoords(this, doc2.scrollLeft, doc2.scrollTop);
              this.curOp.forceScroll = true;
              signalLater(this, "swapDoc", this, old);
              return old;
            }),
            phrase: function(phraseText) {
              var phrases = this.options.phrases;
              return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText;
            },
            getInputField: function() {
              return this.display.input.getField();
            },
            getWrapperElement: function() {
              return this.display.wrapper;
            },
            getScrollerElement: function() {
              return this.display.scroller;
            },
            getGutterElement: function() {
              return this.display.gutters;
            }
          };
          eventMixin(CodeMirror4);
          CodeMirror4.registerHelper = function(type, name, value) {
            if (!helpers.hasOwnProperty(type)) {
              helpers[type] = CodeMirror4[type] = { _global: [] };
            }
            helpers[type][name] = value;
          };
          CodeMirror4.registerGlobalHelper = function(type, name, predicate, value) {
            CodeMirror4.registerHelper(type, name, value);
            helpers[type]._global.push({ pred: predicate, val: value });
          };
        }
        function findPosH(doc2, pos, dir, unit, visually) {
          var oldPos = pos;
          var origDir = dir;
          var lineObj = getLine(doc2, pos.line);
          var lineDir = visually && doc2.direction == "rtl" ? -dir : dir;
          function findNextLine() {
            var l = pos.line + lineDir;
            if (l < doc2.first || l >= doc2.first + doc2.size) {
              return false;
            }
            pos = new Pos(l, pos.ch, pos.sticky);
            return lineObj = getLine(doc2, l);
          }
          function moveOnce(boundToLine) {
            var next;
            if (unit == "codepoint") {
              var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
              if (isNaN(ch)) {
                next = null;
              } else {
                var astral = dir > 0 ? ch >= 55296 && ch < 56320 : ch >= 56320 && ch < 57343;
                next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
              }
            } else if (visually) {
              next = moveVisually(doc2.cm, lineObj, pos, dir);
            } else {
              next = moveLogically(lineObj, pos, dir);
            }
            if (next == null) {
              if (!boundToLine && findNextLine()) {
                pos = endOfLine(visually, doc2.cm, lineObj, pos.line, lineDir);
              } else {
                return false;
              }
            } else {
              pos = next;
            }
            return true;
          }
          if (unit == "char" || unit == "codepoint") {
            moveOnce();
          } else if (unit == "column") {
            moveOnce(true);
          } else if (unit == "word" || unit == "group") {
            var sawType = null, group = unit == "group";
            var helper = doc2.cm && doc2.cm.getHelper(pos, "wordChars");
            for (var first = true; ; first = false) {
              if (dir < 0 && !moveOnce(!first)) {
                break;
              }
              var cur = lineObj.text.charAt(pos.ch) || "\n";
              var type = isWordChar(cur, helper) ? "w" : group && cur == "\n" ? "n" : !group || /\s/.test(cur) ? null : "p";
              if (group && !first && !type) {
                type = "s";
              }
              if (sawType && sawType != type) {
                if (dir < 0) {
                  dir = 1;
                  moveOnce();
                  pos.sticky = "after";
                }
                break;
              }
              if (type) {
                sawType = type;
              }
              if (dir > 0 && !moveOnce(!first)) {
                break;
              }
            }
          }
          var result = skipAtomic(doc2, pos, oldPos, origDir, true);
          if (equalCursorPos(oldPos, result)) {
            result.hitSide = true;
          }
          return result;
        }
        function findPosV(cm, pos, dir, unit) {
          var doc2 = cm.doc, x = pos.left, y;
          if (unit == "page") {
            var pageSize = Math.min(cm.display.wrapper.clientHeight, win(cm).innerHeight || doc2(cm).documentElement.clientHeight);
            var moveAmount = Math.max(pageSize - 0.5 * textHeight(cm.display), 3);
            y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
          } else if (unit == "line") {
            y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
          }
          var target;
          for (; ; ) {
            target = coordsChar(cm, x, y);
            if (!target.outside) {
              break;
            }
            if (dir < 0 ? y <= 0 : y >= doc2.height) {
              target.hitSide = true;
              break;
            }
            y += dir * 5;
          }
          return target;
        }
        var ContentEditableInput = function(cm) {
          this.cm = cm;
          this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
          this.polling = new Delayed();
          this.composing = null;
          this.gracePeriod = false;
          this.readDOMTimeout = null;
        };
        ContentEditableInput.prototype.init = function(display) {
          var this$1 = this;
          var input = this, cm = input.cm;
          var div = input.div = display.lineDiv;
          div.contentEditable = true;
          disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);
          function belongsToInput(e) {
            for (var t = e.target; t; t = t.parentNode) {
              if (t == div) {
                return true;
              }
              if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) {
                break;
              }
            }
            return false;
          }
          on(div, "paste", function(e) {
            if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) {
              return;
            }
            if (ie_version <= 11) {
              setTimeout(operation(cm, function() {
                return this$1.updateFromDOM();
              }), 20);
            }
          });
          on(div, "compositionstart", function(e) {
            this$1.composing = { data: e.data, done: false };
          });
          on(div, "compositionupdate", function(e) {
            if (!this$1.composing) {
              this$1.composing = { data: e.data, done: false };
            }
          });
          on(div, "compositionend", function(e) {
            if (this$1.composing) {
              if (e.data != this$1.composing.data) {
                this$1.readFromDOMSoon();
              }
              this$1.composing.done = true;
            }
          });
          on(div, "touchstart", function() {
            return input.forceCompositionEnd();
          });
          on(div, "input", function() {
            if (!this$1.composing) {
              this$1.readFromDOMSoon();
            }
          });
          function onCopyCut(e) {
            if (!belongsToInput(e) || signalDOMEvent(cm, e)) {
              return;
            }
            if (cm.somethingSelected()) {
              setLastCopied({ lineWise: false, text: cm.getSelections() });
              if (e.type == "cut") {
                cm.replaceSelection("", null, "cut");
              }
            } else if (!cm.options.lineWiseCopyCut) {
              return;
            } else {
              var ranges = copyableRanges(cm);
              setLastCopied({ lineWise: true, text: ranges.text });
              if (e.type == "cut") {
                cm.operation(function() {
                  cm.setSelections(ranges.ranges, 0, sel_dontScroll);
                  cm.replaceSelection("", null, "cut");
                });
              }
            }
            if (e.clipboardData) {
              e.clipboardData.clearData();
              var content = lastCopied.text.join("\n");
              e.clipboardData.setData("Text", content);
              if (e.clipboardData.getData("Text") == content) {
                e.preventDefault();
                return;
              }
            }
            var kludge = hiddenTextarea(), te = kludge.firstChild;
            disableBrowserMagic(te);
            cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
            te.value = lastCopied.text.join("\n");
            var hadFocus = activeElt(rootNode(div));
            selectInput(te);
            setTimeout(function() {
              cm.display.lineSpace.removeChild(kludge);
              hadFocus.focus();
              if (hadFocus == div) {
                input.showPrimarySelection();
              }
            }, 50);
          }
          on(div, "copy", onCopyCut);
          on(div, "cut", onCopyCut);
        };
        ContentEditableInput.prototype.screenReaderLabelChanged = function(label) {
          if (label) {
            this.div.setAttribute("aria-label", label);
          } else {
            this.div.removeAttribute("aria-label");
          }
        };
        ContentEditableInput.prototype.prepareSelection = function() {
          var result = prepareSelection(this.cm, false);
          result.focus = activeElt(rootNode(this.div)) == this.div;
          return result;
        };
        ContentEditableInput.prototype.showSelection = function(info, takeFocus) {
          if (!info || !this.cm.display.view.length) {
            return;
          }
          if (info.focus || takeFocus) {
            this.showPrimarySelection();
          }
          this.showMultipleSelections(info);
        };
        ContentEditableInput.prototype.getSelection = function() {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        };
        ContentEditableInput.prototype.showPrimarySelection = function() {
          var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
          var from = prim.from(), to = prim.to();
          if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
            sel.removeAllRanges();
            return;
          }
          var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
          var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
          if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad && cmp(minPos(curAnchor, curFocus), from) == 0 && cmp(maxPos(curAnchor, curFocus), to) == 0) {
            return;
          }
          var view = cm.display.view;
          var start = from.line >= cm.display.viewFrom && posToDOM(cm, from) || { node: view[0].measure.map[2], offset: 0 };
          var end = to.line < cm.display.viewTo && posToDOM(cm, to);
          if (!end) {
            var measure = view[view.length - 1].measure;
            var map2 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
            end = { node: map2[map2.length - 1], offset: map2[map2.length - 2] - map2[map2.length - 3] };
          }
          if (!start || !end) {
            sel.removeAllRanges();
            return;
          }
          var old = sel.rangeCount && sel.getRangeAt(0), rng;
          try {
            rng = range(start.node, start.offset, end.offset, end.node);
          } catch (e) {
          }
          if (rng) {
            if (!gecko && cm.state.focused) {
              sel.collapse(start.node, start.offset);
              if (!rng.collapsed) {
                sel.removeAllRanges();
                sel.addRange(rng);
              }
            } else {
              sel.removeAllRanges();
              sel.addRange(rng);
            }
            if (old && sel.anchorNode == null) {
              sel.addRange(old);
            } else if (gecko) {
              this.startGracePeriod();
            }
          }
          this.rememberSelection();
        };
        ContentEditableInput.prototype.startGracePeriod = function() {
          var this$1 = this;
          clearTimeout(this.gracePeriod);
          this.gracePeriod = setTimeout(function() {
            this$1.gracePeriod = false;
            if (this$1.selectionChanged()) {
              this$1.cm.operation(function() {
                return this$1.cm.curOp.selectionChanged = true;
              });
            }
          }, 20);
        };
        ContentEditableInput.prototype.showMultipleSelections = function(info) {
          removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
          removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
        };
        ContentEditableInput.prototype.rememberSelection = function() {
          var sel = this.getSelection();
          this.lastAnchorNode = sel.anchorNode;
          this.lastAnchorOffset = sel.anchorOffset;
          this.lastFocusNode = sel.focusNode;
          this.lastFocusOffset = sel.focusOffset;
        };
        ContentEditableInput.prototype.selectionInEditor = function() {
          var sel = this.getSelection();
          if (!sel.rangeCount) {
            return false;
          }
          var node = sel.getRangeAt(0).commonAncestorContainer;
          return contains(this.div, node);
        };
        ContentEditableInput.prototype.focus = function() {
          if (this.cm.options.readOnly != "nocursor") {
            if (!this.selectionInEditor() || activeElt(rootNode(this.div)) != this.div) {
              this.showSelection(this.prepareSelection(), true);
            }
            this.div.focus();
          }
        };
        ContentEditableInput.prototype.blur = function() {
          this.div.blur();
        };
        ContentEditableInput.prototype.getField = function() {
          return this.div;
        };
        ContentEditableInput.prototype.supportsTouch = function() {
          return true;
        };
        ContentEditableInput.prototype.receivedFocus = function() {
          var this$1 = this;
          var input = this;
          if (this.selectionInEditor()) {
            setTimeout(function() {
              return this$1.pollSelection();
            }, 20);
          } else {
            runInOp(this.cm, function() {
              return input.cm.curOp.selectionChanged = true;
            });
          }
          function poll() {
            if (input.cm.state.focused) {
              input.pollSelection();
              input.polling.set(input.cm.options.pollInterval, poll);
            }
          }
          this.polling.set(this.cm.options.pollInterval, poll);
        };
        ContentEditableInput.prototype.selectionChanged = function() {
          var sel = this.getSelection();
          return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset || sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
        };
        ContentEditableInput.prototype.pollSelection = function() {
          if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) {
            return;
          }
          var sel = this.getSelection(), cm = this.cm;
          if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs });
            this.blur();
            this.focus();
            return;
          }
          if (this.composing) {
            return;
          }
          this.rememberSelection();
          var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
          var head = domToPos(cm, sel.focusNode, sel.focusOffset);
          if (anchor && head) {
            runInOp(cm, function() {
              setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
              if (anchor.bad || head.bad) {
                cm.curOp.selectionChanged = true;
              }
            });
          }
        };
        ContentEditableInput.prototype.pollContent = function() {
          if (this.readDOMTimeout != null) {
            clearTimeout(this.readDOMTimeout);
            this.readDOMTimeout = null;
          }
          var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
          var from = sel.from(), to = sel.to();
          if (from.ch == 0 && from.line > cm.firstLine()) {
            from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length);
          }
          if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine()) {
            to = Pos(to.line + 1, 0);
          }
          if (from.line < display.viewFrom || to.line > display.viewTo - 1) {
            return false;
          }
          var fromIndex, fromLine, fromNode;
          if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
            fromLine = lineNo(display.view[0].line);
            fromNode = display.view[0].node;
          } else {
            fromLine = lineNo(display.view[fromIndex].line);
            fromNode = display.view[fromIndex - 1].node.nextSibling;
          }
          var toIndex = findViewIndex(cm, to.line);
          var toLine, toNode;
          if (toIndex == display.view.length - 1) {
            toLine = display.viewTo - 1;
            toNode = display.lineDiv.lastChild;
          } else {
            toLine = lineNo(display.view[toIndex + 1].line) - 1;
            toNode = display.view[toIndex + 1].node.previousSibling;
          }
          if (!fromNode) {
            return false;
          }
          var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
          var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
          while (newText.length > 1 && oldText.length > 1) {
            if (lst(newText) == lst(oldText)) {
              newText.pop();
              oldText.pop();
              toLine--;
            } else if (newText[0] == oldText[0]) {
              newText.shift();
              oldText.shift();
              fromLine++;
            } else {
              break;
            }
          }
          var cutFront = 0, cutEnd = 0;
          var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
          while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront)) {
            ++cutFront;
          }
          var newBot = lst(newText), oldBot = lst(oldText);
          var maxCutEnd = Math.min(
            newBot.length - (newText.length == 1 ? cutFront : 0),
            oldBot.length - (oldText.length == 1 ? cutFront : 0)
          );
          while (cutEnd < maxCutEnd && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
            ++cutEnd;
          }
          if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
            while (cutFront && cutFront > from.ch && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
              cutFront--;
              cutEnd++;
            }
          }
          newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
          newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");
          var chFrom = Pos(fromLine, cutFront);
          var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
          if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
            replaceRange(cm.doc, newText, chFrom, chTo, "+input");
            return true;
          }
        };
        ContentEditableInput.prototype.ensurePolled = function() {
          this.forceCompositionEnd();
        };
        ContentEditableInput.prototype.reset = function() {
          this.forceCompositionEnd();
        };
        ContentEditableInput.prototype.forceCompositionEnd = function() {
          if (!this.composing) {
            return;
          }
          clearTimeout(this.readDOMTimeout);
          this.composing = null;
          this.updateFromDOM();
          this.div.blur();
          this.div.focus();
        };
        ContentEditableInput.prototype.readFromDOMSoon = function() {
          var this$1 = this;
          if (this.readDOMTimeout != null) {
            return;
          }
          this.readDOMTimeout = setTimeout(function() {
            this$1.readDOMTimeout = null;
            if (this$1.composing) {
              if (this$1.composing.done) {
                this$1.composing = null;
              } else {
                return;
              }
            }
            this$1.updateFromDOM();
          }, 80);
        };
        ContentEditableInput.prototype.updateFromDOM = function() {
          var this$1 = this;
          if (this.cm.isReadOnly() || !this.pollContent()) {
            runInOp(this.cm, function() {
              return regChange(this$1.cm);
            });
          }
        };
        ContentEditableInput.prototype.setUneditable = function(node) {
          node.contentEditable = "false";
        };
        ContentEditableInput.prototype.onKeyPress = function(e) {
          if (e.charCode == 0 || this.composing) {
            return;
          }
          e.preventDefault();
          if (!this.cm.isReadOnly()) {
            operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
          }
        };
        ContentEditableInput.prototype.readOnlyChanged = function(val) {
          this.div.contentEditable = String(val != "nocursor");
        };
        ContentEditableInput.prototype.onContextMenu = function() {
        };
        ContentEditableInput.prototype.resetPosition = function() {
        };
        ContentEditableInput.prototype.needsContentAttribute = true;
        function posToDOM(cm, pos) {
          var view = findViewForLine(cm, pos.line);
          if (!view || view.hidden) {
            return null;
          }
          var line = getLine(cm.doc, pos.line);
          var info = mapFromLineView(view, line, pos.line);
          var order = getOrder(line, cm.doc.direction), side = "left";
          if (order) {
            var partPos = getBidiPartAt(order, pos.ch);
            side = partPos % 2 ? "right" : "left";
          }
          var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
          result.offset = result.collapse == "right" ? result.end : result.start;
          return result;
        }
        function isInGutter(node) {
          for (var scan = node; scan; scan = scan.parentNode) {
            if (/CodeMirror-gutter-wrapper/.test(scan.className)) {
              return true;
            }
          }
          return false;
        }
        function badPos(pos, bad) {
          if (bad) {
            pos.bad = true;
          }
          return pos;
        }
        function domTextBetween(cm, from, to, fromLine, toLine) {
          var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
          function recognizeMarker(id) {
            return function(marker) {
              return marker.id == id;
            };
          }
          function close() {
            if (closing) {
              text += lineSep;
              if (extraLinebreak) {
                text += lineSep;
              }
              closing = extraLinebreak = false;
            }
          }
          function addText(str) {
            if (str) {
              close();
              text += str;
            }
          }
          function walk(node) {
            if (node.nodeType == 1) {
              var cmText = node.getAttribute("cm-text");
              if (cmText) {
                addText(cmText);
                return;
              }
              var markerID = node.getAttribute("cm-marker"), range2;
              if (markerID) {
                var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
                if (found.length && (range2 = found[0].find(0))) {
                  addText(getBetween(cm.doc, range2.from, range2.to).join(lineSep));
                }
                return;
              }
              if (node.getAttribute("contenteditable") == "false") {
                return;
              }
              var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
              if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) {
                return;
              }
              if (isBlock) {
                close();
              }
              for (var i2 = 0; i2 < node.childNodes.length; i2++) {
                walk(node.childNodes[i2]);
              }
              if (/^(pre|p)$/i.test(node.nodeName)) {
                extraLinebreak = true;
              }
              if (isBlock) {
                closing = true;
              }
            } else if (node.nodeType == 3) {
              addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
            }
          }
          for (; ; ) {
            walk(from);
            if (from == to) {
              break;
            }
            from = from.nextSibling;
            extraLinebreak = false;
          }
          return text;
        }
        function domToPos(cm, node, offset) {
          var lineNode;
          if (node == cm.display.lineDiv) {
            lineNode = cm.display.lineDiv.childNodes[offset];
            if (!lineNode) {
              return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
            }
            node = null;
            offset = 0;
          } else {
            for (lineNode = node; ; lineNode = lineNode.parentNode) {
              if (!lineNode || lineNode == cm.display.lineDiv) {
                return null;
              }
              if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) {
                break;
              }
            }
          }
          for (var i2 = 0; i2 < cm.display.view.length; i2++) {
            var lineView = cm.display.view[i2];
            if (lineView.node == lineNode) {
              return locateNodeInLineView(lineView, node, offset);
            }
          }
        }
        function locateNodeInLineView(lineView, node, offset) {
          var wrapper = lineView.text.firstChild, bad = false;
          if (!node || !contains(wrapper, node)) {
            return badPos(Pos(lineNo(lineView.line), 0), true);
          }
          if (node == wrapper) {
            bad = true;
            node = wrapper.childNodes[offset];
            offset = 0;
            if (!node) {
              var line = lineView.rest ? lst(lineView.rest) : lineView.line;
              return badPos(Pos(lineNo(line), line.text.length), bad);
            }
          }
          var textNode = node.nodeType == 3 ? node : null, topNode = node;
          if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
            textNode = node.firstChild;
            if (offset) {
              offset = textNode.nodeValue.length;
            }
          }
          while (topNode.parentNode != wrapper) {
            topNode = topNode.parentNode;
          }
          var measure = lineView.measure, maps = measure.maps;
          function find(textNode2, topNode2, offset2) {
            for (var i2 = -1; i2 < (maps ? maps.length : 0); i2++) {
              var map2 = i2 < 0 ? measure.map : maps[i2];
              for (var j = 0; j < map2.length; j += 3) {
                var curNode = map2[j + 2];
                if (curNode == textNode2 || curNode == topNode2) {
                  var line2 = lineNo(i2 < 0 ? lineView.line : lineView.rest[i2]);
                  var ch = map2[j] + offset2;
                  if (offset2 < 0 || curNode != textNode2) {
                    ch = map2[j + (offset2 ? 1 : 0)];
                  }
                  return Pos(line2, ch);
                }
              }
            }
          }
          var found = find(textNode, topNode, offset);
          if (found) {
            return badPos(found, bad);
          }
          for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
            found = find(after, after.firstChild, 0);
            if (found) {
              return badPos(Pos(found.line, found.ch - dist), bad);
            } else {
              dist += after.textContent.length;
            }
          }
          for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
            found = find(before, before.firstChild, -1);
            if (found) {
              return badPos(Pos(found.line, found.ch + dist$1), bad);
            } else {
              dist$1 += before.textContent.length;
            }
          }
        }
        var TextareaInput = function(cm) {
          this.cm = cm;
          this.prevInput = "";
          this.pollingFast = false;
          this.polling = new Delayed();
          this.hasSelection = false;
          this.composing = null;
          this.resetting = false;
        };
        TextareaInput.prototype.init = function(display) {
          var this$1 = this;
          var input = this, cm = this.cm;
          this.createField(display);
          var te = this.textarea;
          display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);
          if (ios) {
            te.style.width = "0px";
          }
          on(te, "input", function() {
            if (ie && ie_version >= 9 && this$1.hasSelection) {
              this$1.hasSelection = null;
            }
            input.poll();
          });
          on(te, "paste", function(e) {
            if (signalDOMEvent(cm, e) || handlePaste(e, cm)) {
              return;
            }
            cm.state.pasteIncoming = +/* @__PURE__ */ new Date();
            input.fastPoll();
          });
          function prepareCopyCut(e) {
            if (signalDOMEvent(cm, e)) {
              return;
            }
            if (cm.somethingSelected()) {
              setLastCopied({ lineWise: false, text: cm.getSelections() });
            } else if (!cm.options.lineWiseCopyCut) {
              return;
            } else {
              var ranges = copyableRanges(cm);
              setLastCopied({ lineWise: true, text: ranges.text });
              if (e.type == "cut") {
                cm.setSelections(ranges.ranges, null, sel_dontScroll);
              } else {
                input.prevInput = "";
                te.value = ranges.text.join("\n");
                selectInput(te);
              }
            }
            if (e.type == "cut") {
              cm.state.cutIncoming = +/* @__PURE__ */ new Date();
            }
          }
          on(te, "cut", prepareCopyCut);
          on(te, "copy", prepareCopyCut);
          on(display.scroller, "paste", function(e) {
            if (eventInWidget(display, e) || signalDOMEvent(cm, e)) {
              return;
            }
            if (!te.dispatchEvent) {
              cm.state.pasteIncoming = +/* @__PURE__ */ new Date();
              input.focus();
              return;
            }
            var event = new Event("paste");
            event.clipboardData = e.clipboardData;
            te.dispatchEvent(event);
          });
          on(display.lineSpace, "selectstart", function(e) {
            if (!eventInWidget(display, e)) {
              e_preventDefault(e);
            }
          });
          on(te, "compositionstart", function() {
            var start = cm.getCursor("from");
            if (input.composing) {
              input.composing.range.clear();
            }
            input.composing = {
              start,
              range: cm.markText(start, cm.getCursor("to"), { className: "CodeMirror-composing" })
            };
          });
          on(te, "compositionend", function() {
            if (input.composing) {
              input.poll();
              input.composing.range.clear();
              input.composing = null;
            }
          });
        };
        TextareaInput.prototype.createField = function(_display) {
          this.wrapper = hiddenTextarea();
          this.textarea = this.wrapper.firstChild;
          var opts = this.cm.options;
          disableBrowserMagic(this.textarea, opts.spellcheck, opts.autocorrect, opts.autocapitalize);
        };
        TextareaInput.prototype.screenReaderLabelChanged = function(label) {
          if (label) {
            this.textarea.setAttribute("aria-label", label);
          } else {
            this.textarea.removeAttribute("aria-label");
          }
        };
        TextareaInput.prototype.prepareSelection = function() {
          var cm = this.cm, display = cm.display, doc2 = cm.doc;
          var result = prepareSelection(cm);
          if (cm.options.moveInputWithCursor) {
            var headPos = cursorCoords(cm, doc2.sel.primary().head, "div");
            var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
            result.teTop = Math.max(0, Math.min(
              display.wrapper.clientHeight - 10,
              headPos.top + lineOff.top - wrapOff.top
            ));
            result.teLeft = Math.max(0, Math.min(
              display.wrapper.clientWidth - 10,
              headPos.left + lineOff.left - wrapOff.left
            ));
          }
          return result;
        };
        TextareaInput.prototype.showSelection = function(drawn) {
          var cm = this.cm, display = cm.display;
          removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
          removeChildrenAndAdd(display.selectionDiv, drawn.selection);
          if (drawn.teTop != null) {
            this.wrapper.style.top = drawn.teTop + "px";
            this.wrapper.style.left = drawn.teLeft + "px";
          }
        };
        TextareaInput.prototype.reset = function(typing) {
          if (this.contextMenuPending || this.composing && typing) {
            return;
          }
          var cm = this.cm;
          this.resetting = true;
          if (cm.somethingSelected()) {
            this.prevInput = "";
            var content = cm.getSelection();
            this.textarea.value = content;
            if (cm.state.focused) {
              selectInput(this.textarea);
            }
            if (ie && ie_version >= 9) {
              this.hasSelection = content;
            }
          } else if (!typing) {
            this.prevInput = this.textarea.value = "";
            if (ie && ie_version >= 9) {
              this.hasSelection = null;
            }
          }
          this.resetting = false;
        };
        TextareaInput.prototype.getField = function() {
          return this.textarea;
        };
        TextareaInput.prototype.supportsTouch = function() {
          return false;
        };
        TextareaInput.prototype.focus = function() {
          if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt(rootNode(this.textarea)) != this.textarea)) {
            try {
              this.textarea.focus();
            } catch (e) {
            }
          }
        };
        TextareaInput.prototype.blur = function() {
          this.textarea.blur();
        };
        TextareaInput.prototype.resetPosition = function() {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        };
        TextareaInput.prototype.receivedFocus = function() {
          this.slowPoll();
        };
        TextareaInput.prototype.slowPoll = function() {
          var this$1 = this;
          if (this.pollingFast) {
            return;
          }
          this.polling.set(this.cm.options.pollInterval, function() {
            this$1.poll();
            if (this$1.cm.state.focused) {
              this$1.slowPoll();
            }
          });
        };
        TextareaInput.prototype.fastPoll = function() {
          var missed = false, input = this;
          input.pollingFast = true;
          function p() {
            var changed = input.poll();
            if (!changed && !missed) {
              missed = true;
              input.polling.set(60, p);
            } else {
              input.pollingFast = false;
              input.slowPoll();
            }
          }
          input.polling.set(20, p);
        };
        TextareaInput.prototype.poll = function() {
          var this$1 = this;
          var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
          if (this.contextMenuPending || this.resetting || !cm.state.focused || hasSelection(input) && !prevInput && !this.composing || cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq) {
            return false;
          }
          var text = input.value;
          if (text == prevInput && !cm.somethingSelected()) {
            return false;
          }
          if (ie && ie_version >= 9 && this.hasSelection === text || mac && /[\uf700-\uf7ff]/.test(text)) {
            cm.display.input.reset();
            return false;
          }
          if (cm.doc.sel == cm.display.selForContextMenu) {
            var first = text.charCodeAt(0);
            if (first == 8203 && !prevInput) {
              prevInput = "\u200B";
            }
            if (first == 8666) {
              this.reset();
              return this.cm.execCommand("undo");
            }
          }
          var same = 0, l = Math.min(prevInput.length, text.length);
          while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) {
            ++same;
          }
          runInOp(cm, function() {
            applyTextInput(
              cm,
              text.slice(same),
              prevInput.length - same,
              null,
              this$1.composing ? "*compose" : null
            );
            if (text.length > 1e3 || text.indexOf("\n") > -1) {
              input.value = this$1.prevInput = "";
            } else {
              this$1.prevInput = text;
            }
            if (this$1.composing) {
              this$1.composing.range.clear();
              this$1.composing.range = cm.markText(
                this$1.composing.start,
                cm.getCursor("to"),
                { className: "CodeMirror-composing" }
              );
            }
          });
          return true;
        };
        TextareaInput.prototype.ensurePolled = function() {
          if (this.pollingFast && this.poll()) {
            this.pollingFast = false;
          }
        };
        TextareaInput.prototype.onKeyPress = function() {
          if (ie && ie_version >= 9) {
            this.hasSelection = null;
          }
          this.fastPoll();
        };
        TextareaInput.prototype.onContextMenu = function(e) {
          var input = this, cm = input.cm, display = cm.display, te = input.textarea;
          if (input.contextMenuPending) {
            input.contextMenuPending();
          }
          var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
          if (!pos || presto) {
            return;
          }
          var reset = cm.options.resetSelectionOnContextMenu;
          if (reset && cm.doc.sel.contains(pos) == -1) {
            operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
          }
          var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
          var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
          input.wrapper.style.cssText = "position: static";
          te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
          var oldScrollY;
          if (webkit) {
            oldScrollY = te.ownerDocument.defaultView.scrollY;
          }
          display.input.focus();
          if (webkit) {
            te.ownerDocument.defaultView.scrollTo(null, oldScrollY);
          }
          display.input.reset();
          if (!cm.somethingSelected()) {
            te.value = input.prevInput = " ";
          }
          input.contextMenuPending = rehide;
          display.selForContextMenu = cm.doc.sel;
          clearTimeout(display.detectingSelectAll);
          function prepareSelectAllHack() {
            if (te.selectionStart != null) {
              var selected = cm.somethingSelected();
              var extval = "\u200B" + (selected ? te.value : "");
              te.value = "\u21DA";
              te.value = extval;
              input.prevInput = selected ? "" : "\u200B";
              te.selectionStart = 1;
              te.selectionEnd = extval.length;
              display.selForContextMenu = cm.doc.sel;
            }
          }
          function rehide() {
            if (input.contextMenuPending != rehide) {
              return;
            }
            input.contextMenuPending = false;
            input.wrapper.style.cssText = oldWrapperCSS;
            te.style.cssText = oldCSS;
            if (ie && ie_version < 9) {
              display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
            }
            if (te.selectionStart != null) {
              if (!ie || ie && ie_version < 9) {
                prepareSelectAllHack();
              }
              var i2 = 0, poll = function() {
                if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 && te.selectionEnd > 0 && input.prevInput == "\u200B") {
                  operation(cm, selectAll)(cm);
                } else if (i2++ < 10) {
                  display.detectingSelectAll = setTimeout(poll, 500);
                } else {
                  display.selForContextMenu = null;
                  display.input.reset();
                }
              };
              display.detectingSelectAll = setTimeout(poll, 200);
            }
          }
          if (ie && ie_version >= 9) {
            prepareSelectAllHack();
          }
          if (captureRightClick) {
            e_stop(e);
            var mouseup = function() {
              off(window, "mouseup", mouseup);
              setTimeout(rehide, 20);
            };
            on(window, "mouseup", mouseup);
          } else {
            setTimeout(rehide, 50);
          }
        };
        TextareaInput.prototype.readOnlyChanged = function(val) {
          if (!val) {
            this.reset();
          }
          this.textarea.disabled = val == "nocursor";
          this.textarea.readOnly = !!val;
        };
        TextareaInput.prototype.setUneditable = function() {
        };
        TextareaInput.prototype.needsContentAttribute = false;
        function fromTextArea(textarea, options) {
          options = options ? copyObj(options) : {};
          options.value = textarea.value;
          if (!options.tabindex && textarea.tabIndex) {
            options.tabindex = textarea.tabIndex;
          }
          if (!options.placeholder && textarea.placeholder) {
            options.placeholder = textarea.placeholder;
          }
          if (options.autofocus == null) {
            var hasFocus = activeElt(rootNode(textarea));
            options.autofocus = hasFocus == textarea || textarea.getAttribute("autofocus") != null && hasFocus == document.body;
          }
          function save() {
            textarea.value = cm.getValue();
          }
          var realSubmit;
          if (textarea.form) {
            on(textarea.form, "submit", save);
            if (!options.leaveSubmitMethodAlone) {
              var form = textarea.form;
              realSubmit = form.submit;
              try {
                var wrappedSubmit = form.submit = function() {
                  save();
                  form.submit = realSubmit;
                  form.submit();
                  form.submit = wrappedSubmit;
                };
              } catch (e) {
              }
            }
          }
          options.finishInit = function(cm2) {
            cm2.save = save;
            cm2.getTextArea = function() {
              return textarea;
            };
            cm2.toTextArea = function() {
              cm2.toTextArea = isNaN;
              save();
              textarea.parentNode.removeChild(cm2.getWrapperElement());
              textarea.style.display = "";
              if (textarea.form) {
                off(textarea.form, "submit", save);
                if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function") {
                  textarea.form.submit = realSubmit;
                }
              }
            };
          };
          textarea.style.display = "none";
          var cm = CodeMirror3(
            function(node) {
              return textarea.parentNode.insertBefore(node, textarea.nextSibling);
            },
            options
          );
          return cm;
        }
        function addLegacyProps(CodeMirror4) {
          CodeMirror4.off = off;
          CodeMirror4.on = on;
          CodeMirror4.wheelEventPixels = wheelEventPixels;
          CodeMirror4.Doc = Doc;
          CodeMirror4.splitLines = splitLinesAuto;
          CodeMirror4.countColumn = countColumn;
          CodeMirror4.findColumn = findColumn;
          CodeMirror4.isWordChar = isWordCharBasic;
          CodeMirror4.Pass = Pass;
          CodeMirror4.signal = signal;
          CodeMirror4.Line = Line;
          CodeMirror4.changeEnd = changeEnd;
          CodeMirror4.scrollbarModel = scrollbarModel;
          CodeMirror4.Pos = Pos;
          CodeMirror4.cmpPos = cmp;
          CodeMirror4.modes = modes;
          CodeMirror4.mimeModes = mimeModes;
          CodeMirror4.resolveMode = resolveMode;
          CodeMirror4.getMode = getMode;
          CodeMirror4.modeExtensions = modeExtensions;
          CodeMirror4.extendMode = extendMode;
          CodeMirror4.copyState = copyState;
          CodeMirror4.startState = startState;
          CodeMirror4.innerMode = innerMode;
          CodeMirror4.commands = commands;
          CodeMirror4.keyMap = keyMap;
          CodeMirror4.keyName = keyName;
          CodeMirror4.isModifierKey = isModifierKey;
          CodeMirror4.lookupKey = lookupKey;
          CodeMirror4.normalizeKeyMap = normalizeKeyMap;
          CodeMirror4.StringStream = StringStream;
          CodeMirror4.SharedTextMarker = SharedTextMarker;
          CodeMirror4.TextMarker = TextMarker;
          CodeMirror4.LineWidget = LineWidget;
          CodeMirror4.e_preventDefault = e_preventDefault;
          CodeMirror4.e_stopPropagation = e_stopPropagation;
          CodeMirror4.e_stop = e_stop;
          CodeMirror4.addClass = addClass;
          CodeMirror4.contains = contains;
          CodeMirror4.rmClass = rmClass;
          CodeMirror4.keyNames = keyNames;
        }
        defineOptions(CodeMirror3);
        addEditorMethods(CodeMirror3);
        var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
        for (var prop in Doc.prototype) {
          if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0) {
            CodeMirror3.prototype[prop] = /* @__PURE__ */ function(method) {
              return function() {
                return method.apply(this.doc, arguments);
              };
            }(Doc.prototype[prop]);
          }
        }
        eventMixin(Doc);
        CodeMirror3.inputStyles = { "textarea": TextareaInput, "contenteditable": ContentEditableInput };
        CodeMirror3.defineMode = function(name) {
          if (!CodeMirror3.defaults.mode && name != "null") {
            CodeMirror3.defaults.mode = name;
          }
          defineMode.apply(this, arguments);
        };
        CodeMirror3.defineMIME = defineMIME;
        CodeMirror3.defineMode("null", function() {
          return { token: function(stream) {
            return stream.skipToEnd();
          } };
        });
        CodeMirror3.defineMIME("text/plain", "null");
        CodeMirror3.defineExtension = function(name, func) {
          CodeMirror3.prototype[name] = func;
        };
        CodeMirror3.defineDocExtension = function(name, func) {
          Doc.prototype[name] = func;
        };
        CodeMirror3.fromTextArea = fromTextArea;
        addLegacyProps(CodeMirror3);
        CodeMirror3.version = "5.65.17";
        return CodeMirror3;
      });
    }
  });

  // ../../node_modules/codemirror/mode/xml/xml.js
  var require_xml = __commonJS({
    "../../node_modules/codemirror/mode/xml/xml.js"(exports, module) {
      (function(mod) {
        if (typeof exports == "object" && typeof module == "object")
          mod(require_codemirror());
        else if (typeof define == "function" && define.amd)
          define(["../../lib/codemirror"], mod);
        else
          mod(CodeMirror);
      })(function(CodeMirror3) {
        "use strict";
        var htmlConfig = {
          autoSelfClosers: {
            "area": true,
            "base": true,
            "br": true,
            "col": true,
            "command": true,
            "embed": true,
            "frame": true,
            "hr": true,
            "img": true,
            "input": true,
            "keygen": true,
            "link": true,
            "meta": true,
            "param": true,
            "source": true,
            "track": true,
            "wbr": true,
            "menuitem": true
          },
          implicitlyClosed: {
            "dd": true,
            "li": true,
            "optgroup": true,
            "option": true,
            "p": true,
            "rp": true,
            "rt": true,
            "tbody": true,
            "td": true,
            "tfoot": true,
            "th": true,
            "tr": true
          },
          contextGrabbers: {
            "dd": { "dd": true, "dt": true },
            "dt": { "dd": true, "dt": true },
            "li": { "li": true },
            "option": { "option": true, "optgroup": true },
            "optgroup": { "optgroup": true },
            "p": {
              "address": true,
              "article": true,
              "aside": true,
              "blockquote": true,
              "dir": true,
              "div": true,
              "dl": true,
              "fieldset": true,
              "footer": true,
              "form": true,
              "h1": true,
              "h2": true,
              "h3": true,
              "h4": true,
              "h5": true,
              "h6": true,
              "header": true,
              "hgroup": true,
              "hr": true,
              "menu": true,
              "nav": true,
              "ol": true,
              "p": true,
              "pre": true,
              "section": true,
              "table": true,
              "ul": true
            },
            "rp": { "rp": true, "rt": true },
            "rt": { "rp": true, "rt": true },
            "tbody": { "tbody": true, "tfoot": true },
            "td": { "td": true, "th": true },
            "tfoot": { "tbody": true },
            "th": { "td": true, "th": true },
            "thead": { "tbody": true, "tfoot": true },
            "tr": { "tr": true }
          },
          doNotIndent: { "pre": true },
          allowUnquoted: true,
          allowMissing: true,
          caseFold: true
        };
        var xmlConfig = {
          autoSelfClosers: {},
          implicitlyClosed: {},
          contextGrabbers: {},
          doNotIndent: {},
          allowUnquoted: false,
          allowMissing: false,
          allowMissingTagName: false,
          caseFold: false
        };
        CodeMirror3.defineMode("xml", function(editorConf, config_) {
          var indentUnit = editorConf.indentUnit;
          var config = {};
          var defaults = config_.htmlMode ? htmlConfig : xmlConfig;
          for (var prop in defaults) config[prop] = defaults[prop];
          for (var prop in config_) config[prop] = config_[prop];
          var type, setStyle;
          function inText(stream, state) {
            function chain(parser) {
              state.tokenize = parser;
              return parser(stream, state);
            }
            var ch = stream.next();
            if (ch == "<") {
              if (stream.eat("!")) {
                if (stream.eat("[")) {
                  if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
                  else return null;
                } else if (stream.match("--")) {
                  return chain(inBlock("comment", "-->"));
                } else if (stream.match("DOCTYPE", true, true)) {
                  stream.eatWhile(/[\w\._\-]/);
                  return chain(doctype(1));
                } else {
                  return null;
                }
              } else if (stream.eat("?")) {
                stream.eatWhile(/[\w\._\-]/);
                state.tokenize = inBlock("meta", "?>");
                return "meta";
              } else {
                type = stream.eat("/") ? "closeTag" : "openTag";
                state.tokenize = inTag;
                return "tag bracket";
              }
            } else if (ch == "&") {
              var ok;
              if (stream.eat("#")) {
                if (stream.eat("x")) {
                  ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
                } else {
                  ok = stream.eatWhile(/[\d]/) && stream.eat(";");
                }
              } else {
                ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
              }
              return ok ? "atom" : "error";
            } else {
              stream.eatWhile(/[^&<]/);
              return null;
            }
          }
          inText.isInText = true;
          function inTag(stream, state) {
            var ch = stream.next();
            if (ch == ">" || ch == "/" && stream.eat(">")) {
              state.tokenize = inText;
              type = ch == ">" ? "endTag" : "selfcloseTag";
              return "tag bracket";
            } else if (ch == "=") {
              type = "equals";
              return null;
            } else if (ch == "<") {
              state.tokenize = inText;
              state.state = baseState;
              state.tagName = state.tagStart = null;
              var next = state.tokenize(stream, state);
              return next ? next + " tag error" : "tag error";
            } else if (/[\'\"]/.test(ch)) {
              state.tokenize = inAttribute(ch);
              state.stringStartCol = stream.column();
              return state.tokenize(stream, state);
            } else {
              stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
              return "word";
            }
          }
          function inAttribute(quote) {
            var closure = function(stream, state) {
              while (!stream.eol()) {
                if (stream.next() == quote) {
                  state.tokenize = inTag;
                  break;
                }
              }
              return "string";
            };
            closure.isInAttribute = true;
            return closure;
          }
          function inBlock(style, terminator) {
            return function(stream, state) {
              while (!stream.eol()) {
                if (stream.match(terminator)) {
                  state.tokenize = inText;
                  break;
                }
                stream.next();
              }
              return style;
            };
          }
          function doctype(depth) {
            return function(stream, state) {
              var ch;
              while ((ch = stream.next()) != null) {
                if (ch == "<") {
                  state.tokenize = doctype(depth + 1);
                  return state.tokenize(stream, state);
                } else if (ch == ">") {
                  if (depth == 1) {
                    state.tokenize = inText;
                    break;
                  } else {
                    state.tokenize = doctype(depth - 1);
                    return state.tokenize(stream, state);
                  }
                }
              }
              return "meta";
            };
          }
          function lower(tagName) {
            return tagName && tagName.toLowerCase();
          }
          function Context(state, tagName, startOfLine) {
            this.prev = state.context;
            this.tagName = tagName || "";
            this.indent = state.indented;
            this.startOfLine = startOfLine;
            if (config.doNotIndent.hasOwnProperty(tagName) || state.context && state.context.noIndent)
              this.noIndent = true;
          }
          function popContext(state) {
            if (state.context) state.context = state.context.prev;
          }
          function maybePopContext(state, nextTagName) {
            var parentTagName;
            while (true) {
              if (!state.context) {
                return;
              }
              parentTagName = state.context.tagName;
              if (!config.contextGrabbers.hasOwnProperty(lower(parentTagName)) || !config.contextGrabbers[lower(parentTagName)].hasOwnProperty(lower(nextTagName))) {
                return;
              }
              popContext(state);
            }
          }
          function baseState(type2, stream, state) {
            if (type2 == "openTag") {
              state.tagStart = stream.column();
              return tagNameState;
            } else if (type2 == "closeTag") {
              return closeTagNameState;
            } else {
              return baseState;
            }
          }
          function tagNameState(type2, stream, state) {
            if (type2 == "word") {
              state.tagName = stream.current();
              setStyle = "tag";
              return attrState;
            } else if (config.allowMissingTagName && type2 == "endTag") {
              setStyle = "tag bracket";
              return attrState(type2, stream, state);
            } else {
              setStyle = "error";
              return tagNameState;
            }
          }
          function closeTagNameState(type2, stream, state) {
            if (type2 == "word") {
              var tagName = stream.current();
              if (state.context && state.context.tagName != tagName && config.implicitlyClosed.hasOwnProperty(lower(state.context.tagName)))
                popContext(state);
              if (state.context && state.context.tagName == tagName || config.matchClosing === false) {
                setStyle = "tag";
                return closeState;
              } else {
                setStyle = "tag error";
                return closeStateErr;
              }
            } else if (config.allowMissingTagName && type2 == "endTag") {
              setStyle = "tag bracket";
              return closeState(type2, stream, state);
            } else {
              setStyle = "error";
              return closeStateErr;
            }
          }
          function closeState(type2, _stream, state) {
            if (type2 != "endTag") {
              setStyle = "error";
              return closeState;
            }
            popContext(state);
            return baseState;
          }
          function closeStateErr(type2, stream, state) {
            setStyle = "error";
            return closeState(type2, stream, state);
          }
          function attrState(type2, _stream, state) {
            if (type2 == "word") {
              setStyle = "attribute";
              return attrEqState;
            } else if (type2 == "endTag" || type2 == "selfcloseTag") {
              var tagName = state.tagName, tagStart = state.tagStart;
              state.tagName = state.tagStart = null;
              if (type2 == "selfcloseTag" || config.autoSelfClosers.hasOwnProperty(lower(tagName))) {
                maybePopContext(state, tagName);
              } else {
                maybePopContext(state, tagName);
                state.context = new Context(state, tagName, tagStart == state.indented);
              }
              return baseState;
            }
            setStyle = "error";
            return attrState;
          }
          function attrEqState(type2, stream, state) {
            if (type2 == "equals") return attrValueState;
            if (!config.allowMissing) setStyle = "error";
            return attrState(type2, stream, state);
          }
          function attrValueState(type2, stream, state) {
            if (type2 == "string") return attrContinuedState;
            if (type2 == "word" && config.allowUnquoted) {
              setStyle = "string";
              return attrState;
            }
            setStyle = "error";
            return attrState(type2, stream, state);
          }
          function attrContinuedState(type2, stream, state) {
            if (type2 == "string") return attrContinuedState;
            return attrState(type2, stream, state);
          }
          return {
            startState: function(baseIndent) {
              var state = {
                tokenize: inText,
                state: baseState,
                indented: baseIndent || 0,
                tagName: null,
                tagStart: null,
                context: null
              };
              if (baseIndent != null) state.baseIndent = baseIndent;
              return state;
            },
            token: function(stream, state) {
              if (!state.tagName && stream.sol())
                state.indented = stream.indentation();
              if (stream.eatSpace()) return null;
              type = null;
              var style = state.tokenize(stream, state);
              if ((style || type) && style != "comment") {
                setStyle = null;
                state.state = state.state(type || style, stream, state);
                if (setStyle)
                  style = setStyle == "error" ? style + " error" : setStyle;
              }
              return style;
            },
            indent: function(state, textAfter, fullLine) {
              var context = state.context;
              if (state.tokenize.isInAttribute) {
                if (state.tagStart == state.indented)
                  return state.stringStartCol + 1;
                else
                  return state.indented + indentUnit;
              }
              if (context && context.noIndent) return CodeMirror3.Pass;
              if (state.tokenize != inTag && state.tokenize != inText)
                return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
              if (state.tagName) {
                if (config.multilineTagIndentPastTag !== false)
                  return state.tagStart + state.tagName.length + 2;
                else
                  return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
              }
              if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
              var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
              if (tagAfter && tagAfter[1]) {
                while (context) {
                  if (context.tagName == tagAfter[2]) {
                    context = context.prev;
                    break;
                  } else if (config.implicitlyClosed.hasOwnProperty(lower(context.tagName))) {
                    context = context.prev;
                  } else {
                    break;
                  }
                }
              } else if (tagAfter) {
                while (context) {
                  var grabbers = config.contextGrabbers[lower(context.tagName)];
                  if (grabbers && grabbers.hasOwnProperty(lower(tagAfter[2])))
                    context = context.prev;
                  else
                    break;
                }
              }
              while (context && context.prev && !context.startOfLine)
                context = context.prev;
              if (context) return context.indent + indentUnit;
              else return state.baseIndent || 0;
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: "<!--",
            blockCommentEnd: "-->",
            configuration: config.htmlMode ? "html" : "xml",
            helperType: config.htmlMode ? "html" : "xml",
            skipAttribute: function(state) {
              if (state.state == attrValueState)
                state.state = attrState;
            },
            xmlCurrentTag: function(state) {
              return state.tagName ? { name: state.tagName, close: state.type == "closeTag" } : null;
            },
            xmlCurrentContext: function(state) {
              var context = [];
              for (var cx = state.context; cx; cx = cx.prev)
                context.push(cx.tagName);
              return context.reverse();
            }
          };
        });
        CodeMirror3.defineMIME("text/xml", "xml");
        CodeMirror3.defineMIME("application/xml", "xml");
        if (!CodeMirror3.mimeModes.hasOwnProperty("text/html"))
          CodeMirror3.defineMIME("text/html", { name: "xml", htmlMode: true });
      });
    }
  });

  // ../../node_modules/codemirror/mode/meta.js
  var require_meta = __commonJS({
    "../../node_modules/codemirror/mode/meta.js"(exports, module) {
      (function(mod) {
        if (typeof exports == "object" && typeof module == "object")
          mod(require_codemirror());
        else if (typeof define == "function" && define.amd)
          define(["../lib/codemirror"], mod);
        else
          mod(CodeMirror);
      })(function(CodeMirror3) {
        "use strict";
        CodeMirror3.modeInfo = [
          { name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"] },
          { name: "PGP", mimes: ["application/pgp", "application/pgp-encrypted", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["asc", "pgp", "sig"] },
          { name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"] },
          { name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i },
          { name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"] },
          { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h", "ino"] },
          { name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"] },
          { name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy", "cbl"] },
          { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp", "cs"] },
          { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] },
          { name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"] },
          { name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"] },
          { name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists\.txt$/ },
          { name: "CoffeeScript", mimes: ["application/vnd.coffeescript", "text/coffeescript", "text/x-coffeescript"], mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"] },
          { name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"] },
          { name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"] },
          { name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"] },
          { name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"] },
          { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] },
          { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] },
          { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] },
          { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] },
          { name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"] },
          { name: "Django", mime: "text/x-django", mode: "django" },
          { name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/ },
          { name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"] },
          { name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"] },
          { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" },
          { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] },
          { name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"] },
          { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] },
          { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] },
          { name: "Embedded JavaScript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"] },
          { name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"] },
          { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] },
          { name: "Esper", mime: "text/x-esper", mode: "sql" },
          { name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"] },
          { name: "FCL", mime: "text/x-fcl", mode: "fcl" },
          { name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"] },
          { name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90", "f95"] },
          { name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"] },
          { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] },
          { name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"] },
          { name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history)\.md$/i },
          { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] },
          { name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/ },
          { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] },
          { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] },
          { name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"] },
          { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] },
          { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] },
          { name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"] },
          { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm", "handlebars", "hbs"], alias: ["xhtml"] },
          { name: "HTTP", mime: "message/http", mode: "http" },
          { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] },
          { name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"] },
          { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] },
          { name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"] },
          {
            name: "JavaScript",
            mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
            mode: "javascript",
            ext: ["js"],
            alias: ["ecmascript", "js", "node"]
          },
          { name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"] },
          { name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"] },
          { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] },
          { name: "Jinja2", mime: "text/jinja2", mode: "jinja2", ext: ["j2", "jinja", "jinja2"] },
          { name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"], alias: ["jl"] },
          { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] },
          { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] },
          { name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"] },
          { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] },
          { name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"] },
          { name: "mIRC", mime: "text/mirc", mode: "mirc" },
          { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" },
          { name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb", "wl", "wls"] },
          { name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"] },
          { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] },
          { name: "MS SQL", mime: "text/x-mssql", mode: "sql" },
          { name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"] },
          { name: "MySQL", mime: "text/x-mysql", mode: "sql" },
          { name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i },
          { name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"] },
          {
            name: "NTriples",
            mimes: ["application/n-triples", "application/n-quads", "text/n-triples"],
            mode: "ntriples",
            ext: ["nt", "nq"]
          },
          { name: "Objective-C", mime: "text/x-objectivec", mode: "clike", ext: ["m"], alias: ["objective-c", "objc"] },
          { name: "Objective-C++", mime: "text/x-objectivec++", mode: "clike", ext: ["mm"], alias: ["objective-c++", "objc++"] },
          { name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"] },
          { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] },
          { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] },
          { name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"] },
          { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] },
          { name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"] },
          { name: "PHP", mimes: ["text/x-php", "application/x-httpd-php", "application/x-httpd-php-open"], mode: "php", ext: ["php", "php3", "php4", "php5", "php7", "phtml"] },
          { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] },
          { name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"] },
          { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] },
          { name: "PostgreSQL", mime: "text/x-pgsql", mode: "sql" },
          { name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"] },
          { name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"] },
          { name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"] },
          { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ },
          { name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"] },
          { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] },
          { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"] },
          { name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"] },
          { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" },
          { name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"] },
          { name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"] },
          { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] },
          { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] },
          { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] },
          { name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"] },
          { name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"] },
          { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] },
          { name: "Shell", mimes: ["text/x-sh", "application/x-sh"], mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/ },
          { name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"] },
          { name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"] },
          { name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"] },
          { name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"] },
          { name: "Solr", mime: "text/x-solr", mode: "solr" },
          { name: "SML", mime: "text/x-sml", mode: "mllike", ext: ["sml", "sig", "fun", "smackspec"] },
          { name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"] },
          { name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"] },
          { name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"] },
          { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] },
          { name: "SQLite", mime: "text/x-sqlite", mode: "sql" },
          { name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"] },
          { name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"] },
          { name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"] },
          { name: "sTeX", mime: "text/x-stex", mode: "stex" },
          { name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx", "tex"], alias: ["tex"] },
          { name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v", "sv", "svh"] },
          { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] },
          { name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"] },
          { name: "TiddlyWiki", mime: "text/x-tiddlywiki", mode: "tiddlywiki" },
          { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" },
          { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] },
          { name: "Tornado", mime: "text/x-tornado", mode: "tornado" },
          { name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
          { name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"] },
          { name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"] },
          { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] },
          { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] },
          { name: "TypeScript-JSX", mime: "text/typescript-jsx", mode: "jsx", ext: ["tsx"], alias: ["tsx"] },
          { name: "Twig", mime: "text/x-twig", mode: "twig" },
          { name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"] },
          { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] },
          { name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"] },
          { name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"] },
          { name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"] },
          { name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"] },
          { name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"] },
          { name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd", "svg"], alias: ["rss", "wsdl", "xsd"] },
          { name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"] },
          { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] },
          { name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"] },
          { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] },
          { name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"] },
          { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] },
          { name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"] },
          { name: "WebAssembly", mime: "text/webassembly", mode: "wast", ext: ["wat", "wast"] }
        ];
        for (var i = 0; i < CodeMirror3.modeInfo.length; i++) {
          var info = CodeMirror3.modeInfo[i];
          if (info.mimes) info.mime = info.mimes[0];
        }
        CodeMirror3.findModeByMIME = function(mime) {
          mime = mime.toLowerCase();
          for (var i2 = 0; i2 < CodeMirror3.modeInfo.length; i2++) {
            var info2 = CodeMirror3.modeInfo[i2];
            if (info2.mime == mime) return info2;
            if (info2.mimes) {
              for (var j = 0; j < info2.mimes.length; j++)
                if (info2.mimes[j] == mime) return info2;
            }
          }
          if (/\+xml$/.test(mime)) return CodeMirror3.findModeByMIME("application/xml");
          if (/\+json$/.test(mime)) return CodeMirror3.findModeByMIME("application/json");
        };
        CodeMirror3.findModeByExtension = function(ext) {
          ext = ext.toLowerCase();
          for (var i2 = 0; i2 < CodeMirror3.modeInfo.length; i2++) {
            var info2 = CodeMirror3.modeInfo[i2];
            if (info2.ext) {
              for (var j = 0; j < info2.ext.length; j++)
                if (info2.ext[j] == ext) return info2;
            }
          }
        };
        CodeMirror3.findModeByFileName = function(filename) {
          for (var i2 = 0; i2 < CodeMirror3.modeInfo.length; i2++) {
            var info2 = CodeMirror3.modeInfo[i2];
            if (info2.file && info2.file.test(filename)) return info2;
          }
          var dot = filename.lastIndexOf(".");
          var ext = dot > -1 && filename.substring(dot + 1, filename.length);
          if (ext) return CodeMirror3.findModeByExtension(ext);
        };
        CodeMirror3.findModeByName = function(name) {
          name = name.toLowerCase();
          for (var i2 = 0; i2 < CodeMirror3.modeInfo.length; i2++) {
            var info2 = CodeMirror3.modeInfo[i2];
            if (info2.name.toLowerCase() == name) return info2;
            if (info2.alias) {
              for (var j = 0; j < info2.alias.length; j++)
                if (info2.alias[j].toLowerCase() == name) return info2;
            }
          }
        };
      });
    }
  });

  // ../../node_modules/codemirror/mode/markdown/markdown.js
  var require_markdown = __commonJS({
    "../../node_modules/codemirror/mode/markdown/markdown.js"(exports, module) {
      (function(mod) {
        if (typeof exports == "object" && typeof module == "object")
          mod(require_codemirror(), require_xml(), require_meta());
        else if (typeof define == "function" && define.amd)
          define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
        else
          mod(CodeMirror);
      })(function(CodeMirror3) {
        "use strict";
        CodeMirror3.defineMode("markdown", function(cmCfg, modeCfg) {
          var htmlMode = CodeMirror3.getMode(cmCfg, "text/html");
          var htmlModeMissing = htmlMode.name == "null";
          function getMode(name) {
            if (CodeMirror3.findModeByName) {
              var found = CodeMirror3.findModeByName(name);
              if (found) name = found.mime || found.mimes[0];
            }
            var mode2 = CodeMirror3.getMode(cmCfg, name);
            return mode2.name == "null" ? null : mode2;
          }
          if (modeCfg.highlightFormatting === void 0)
            modeCfg.highlightFormatting = false;
          if (modeCfg.maxBlockquoteDepth === void 0)
            modeCfg.maxBlockquoteDepth = 0;
          if (modeCfg.taskLists === void 0) modeCfg.taskLists = false;
          if (modeCfg.strikethrough === void 0)
            modeCfg.strikethrough = false;
          if (modeCfg.emoji === void 0)
            modeCfg.emoji = false;
          if (modeCfg.fencedCodeBlockHighlighting === void 0)
            modeCfg.fencedCodeBlockHighlighting = true;
          if (modeCfg.fencedCodeBlockDefaultMode === void 0)
            modeCfg.fencedCodeBlockDefaultMode = "text/plain";
          if (modeCfg.xml === void 0)
            modeCfg.xml = true;
          if (modeCfg.tokenTypeOverrides === void 0)
            modeCfg.tokenTypeOverrides = {};
          var tokenTypes = {
            header: "header",
            code: "comment",
            quote: "quote",
            list1: "variable-2",
            list2: "variable-3",
            list3: "keyword",
            hr: "hr",
            image: "image",
            imageAltText: "image-alt-text",
            imageMarker: "image-marker",
            formatting: "formatting",
            linkInline: "link",
            linkEmail: "link",
            linkText: "link",
            linkHref: "string",
            em: "em",
            strong: "strong",
            strikethrough: "strikethrough",
            emoji: "builtin"
          };
          for (var tokenType in tokenTypes) {
            if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
              tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
            }
          }
          var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/, listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/, taskListRE = /^\[(x| )\](?=\s)/i, atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/, setextHeaderRE = /^ {0,3}(?:\={1,}|-{2,})\s*$/, textRE = /^[^#!\[\]*_\\<>` "'(~:]+/, fencedCodeRE = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/, linkDefRE = /^\s*\[[^\]]+?\]:.*$/, punctuation = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/, expandedTab = "    ";
          function switchInline(stream, state, f) {
            state.f = state.inline = f;
            return f(stream, state);
          }
          function switchBlock(stream, state, f) {
            state.f = state.block = f;
            return f(stream, state);
          }
          function lineIsEmpty(line) {
            return !line || !/\S/.test(line.string);
          }
          function blankLine(state) {
            state.linkTitle = false;
            state.linkHref = false;
            state.linkText = false;
            state.em = false;
            state.strong = false;
            state.strikethrough = false;
            state.quote = 0;
            state.indentedCode = false;
            if (state.f == htmlBlock) {
              var exit = htmlModeMissing;
              if (!exit) {
                var inner = CodeMirror3.innerMode(htmlMode, state.htmlState);
                exit = inner.mode.name == "xml" && inner.state.tagStart === null && (!inner.state.context && inner.state.tokenize.isInText);
              }
              if (exit) {
                state.f = inlineNormal;
                state.block = blockNormal;
                state.htmlState = null;
              }
            }
            state.trailingSpace = 0;
            state.trailingSpaceNewLine = false;
            state.prevLine = state.thisLine;
            state.thisLine = { stream: null };
            return null;
          }
          function blockNormal(stream, state) {
            var firstTokenOnLine = stream.column() === state.indentation;
            var prevLineLineIsEmpty = lineIsEmpty(state.prevLine.stream);
            var prevLineIsIndentedCode = state.indentedCode;
            var prevLineIsHr = state.prevLine.hr;
            var prevLineIsList = state.list !== false;
            var maxNonCodeIndentation = (state.listStack[state.listStack.length - 1] || 0) + 3;
            state.indentedCode = false;
            var lineIndentation = state.indentation;
            if (state.indentationDiff === null) {
              state.indentationDiff = state.indentation;
              if (prevLineIsList) {
                state.list = null;
                while (lineIndentation < state.listStack[state.listStack.length - 1]) {
                  state.listStack.pop();
                  if (state.listStack.length) {
                    state.indentation = state.listStack[state.listStack.length - 1];
                  } else {
                    state.list = false;
                  }
                }
                if (state.list !== false) {
                  state.indentationDiff = lineIndentation - state.listStack[state.listStack.length - 1];
                }
              }
            }
            var allowsInlineContinuation = !prevLineLineIsEmpty && !prevLineIsHr && !state.prevLine.header && (!prevLineIsList || !prevLineIsIndentedCode) && !state.prevLine.fencedCodeEnd;
            var isHr = (state.list === false || prevLineIsHr || prevLineLineIsEmpty) && state.indentation <= maxNonCodeIndentation && stream.match(hrRE);
            var match = null;
            if (state.indentationDiff >= 4 && (prevLineIsIndentedCode || state.prevLine.fencedCodeEnd || state.prevLine.header || prevLineLineIsEmpty)) {
              stream.skipToEnd();
              state.indentedCode = true;
              return tokenTypes.code;
            } else if (stream.eatSpace()) {
              return null;
            } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
              state.quote = 0;
              state.header = match[1].length;
              state.thisLine.header = true;
              if (modeCfg.highlightFormatting) state.formatting = "header";
              state.f = state.inline;
              return getType(state);
            } else if (state.indentation <= maxNonCodeIndentation && stream.eat(">")) {
              state.quote = firstTokenOnLine ? 1 : state.quote + 1;
              if (modeCfg.highlightFormatting) state.formatting = "quote";
              stream.eatSpace();
              return getType(state);
            } else if (!isHr && !state.setext && firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(listRE))) {
              var listType = match[1] ? "ol" : "ul";
              state.indentation = lineIndentation + stream.current().length;
              state.list = true;
              state.quote = 0;
              state.listStack.push(state.indentation);
              state.em = false;
              state.strong = false;
              state.code = false;
              state.strikethrough = false;
              if (modeCfg.taskLists && stream.match(taskListRE, false)) {
                state.taskList = true;
              }
              state.f = state.inline;
              if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
              return getType(state);
            } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(fencedCodeRE, true))) {
              state.quote = 0;
              state.fencedEndRE = new RegExp(match[1] + "+ *$");
              state.localMode = modeCfg.fencedCodeBlockHighlighting && getMode(match[2] || modeCfg.fencedCodeBlockDefaultMode);
              if (state.localMode) state.localState = CodeMirror3.startState(state.localMode);
              state.f = state.block = local;
              if (modeCfg.highlightFormatting) state.formatting = "code-block";
              state.code = -1;
              return getType(state);
            } else if (
              // if setext set, indicates line after ---/===
              state.setext || // line before ---/===
              (!allowsInlineContinuation || !prevLineIsList) && !state.quote && state.list === false && !state.code && !isHr && !linkDefRE.test(stream.string) && (match = stream.lookAhead(1)) && (match = match.match(setextHeaderRE))
            ) {
              if (!state.setext) {
                state.header = match[0].charAt(0) == "=" ? 1 : 2;
                state.setext = state.header;
              } else {
                state.header = state.setext;
                state.setext = 0;
                stream.skipToEnd();
                if (modeCfg.highlightFormatting) state.formatting = "header";
              }
              state.thisLine.header = true;
              state.f = state.inline;
              return getType(state);
            } else if (isHr) {
              stream.skipToEnd();
              state.hr = true;
              state.thisLine.hr = true;
              return tokenTypes.hr;
            } else if (stream.peek() === "[") {
              return switchInline(stream, state, footnoteLink);
            }
            return switchInline(stream, state, state.inline);
          }
          function htmlBlock(stream, state) {
            var style = htmlMode.token(stream, state.htmlState);
            if (!htmlModeMissing) {
              var inner = CodeMirror3.innerMode(htmlMode, state.htmlState);
              if (inner.mode.name == "xml" && inner.state.tagStart === null && (!inner.state.context && inner.state.tokenize.isInText) || state.md_inside && stream.current().indexOf(">") > -1) {
                state.f = inlineNormal;
                state.block = blockNormal;
                state.htmlState = null;
              }
            }
            return style;
          }
          function local(stream, state) {
            var currListInd = state.listStack[state.listStack.length - 1] || 0;
            var hasExitedList = state.indentation < currListInd;
            var maxFencedEndInd = currListInd + 3;
            if (state.fencedEndRE && state.indentation <= maxFencedEndInd && (hasExitedList || stream.match(state.fencedEndRE))) {
              if (modeCfg.highlightFormatting) state.formatting = "code-block";
              var returnType;
              if (!hasExitedList) returnType = getType(state);
              state.localMode = state.localState = null;
              state.block = blockNormal;
              state.f = inlineNormal;
              state.fencedEndRE = null;
              state.code = 0;
              state.thisLine.fencedCodeEnd = true;
              if (hasExitedList) return switchBlock(stream, state, state.block);
              return returnType;
            } else if (state.localMode) {
              return state.localMode.token(stream, state.localState);
            } else {
              stream.skipToEnd();
              return tokenTypes.code;
            }
          }
          function getType(state) {
            var styles = [];
            if (state.formatting) {
              styles.push(tokenTypes.formatting);
              if (typeof state.formatting === "string") state.formatting = [state.formatting];
              for (var i = 0; i < state.formatting.length; i++) {
                styles.push(tokenTypes.formatting + "-" + state.formatting[i]);
                if (state.formatting[i] === "header") {
                  styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
                }
                if (state.formatting[i] === "quote") {
                  if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
                    styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
                  } else {
                    styles.push("error");
                  }
                }
              }
            }
            if (state.taskOpen) {
              styles.push("meta");
              return styles.length ? styles.join(" ") : null;
            }
            if (state.taskClosed) {
              styles.push("property");
              return styles.length ? styles.join(" ") : null;
            }
            if (state.linkHref) {
              styles.push(tokenTypes.linkHref, "url");
            } else {
              if (state.strong) {
                styles.push(tokenTypes.strong);
              }
              if (state.em) {
                styles.push(tokenTypes.em);
              }
              if (state.strikethrough) {
                styles.push(tokenTypes.strikethrough);
              }
              if (state.emoji) {
                styles.push(tokenTypes.emoji);
              }
              if (state.linkText) {
                styles.push(tokenTypes.linkText);
              }
              if (state.code) {
                styles.push(tokenTypes.code);
              }
              if (state.image) {
                styles.push(tokenTypes.image);
              }
              if (state.imageAltText) {
                styles.push(tokenTypes.imageAltText, "link");
              }
              if (state.imageMarker) {
                styles.push(tokenTypes.imageMarker);
              }
            }
            if (state.header) {
              styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header);
            }
            if (state.quote) {
              styles.push(tokenTypes.quote);
              if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
                styles.push(tokenTypes.quote + "-" + state.quote);
              } else {
                styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
              }
            }
            if (state.list !== false) {
              var listMod = (state.listStack.length - 1) % 3;
              if (!listMod) {
                styles.push(tokenTypes.list1);
              } else if (listMod === 1) {
                styles.push(tokenTypes.list2);
              } else {
                styles.push(tokenTypes.list3);
              }
            }
            if (state.trailingSpaceNewLine) {
              styles.push("trailing-space-new-line");
            } else if (state.trailingSpace) {
              styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
            }
            return styles.length ? styles.join(" ") : null;
          }
          function handleText(stream, state) {
            if (stream.match(textRE, true)) {
              return getType(state);
            }
            return void 0;
          }
          function inlineNormal(stream, state) {
            var style = state.text(stream, state);
            if (typeof style !== "undefined")
              return style;
            if (state.list) {
              state.list = null;
              return getType(state);
            }
            if (state.taskList) {
              var taskOpen = stream.match(taskListRE, true)[1] === " ";
              if (taskOpen) state.taskOpen = true;
              else state.taskClosed = true;
              if (modeCfg.highlightFormatting) state.formatting = "task";
              state.taskList = false;
              return getType(state);
            }
            state.taskOpen = false;
            state.taskClosed = false;
            if (state.header && stream.match(/^#+$/, true)) {
              if (modeCfg.highlightFormatting) state.formatting = "header";
              return getType(state);
            }
            var ch = stream.next();
            if (state.linkTitle) {
              state.linkTitle = false;
              var matchCh = ch;
              if (ch === "(") {
                matchCh = ")";
              }
              matchCh = (matchCh + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1");
              var regex = "^\\s*(?:[^" + matchCh + "\\\\]+|\\\\\\\\|\\\\.)" + matchCh;
              if (stream.match(new RegExp(regex), true)) {
                return tokenTypes.linkHref;
              }
            }
            if (ch === "`") {
              var previousFormatting = state.formatting;
              if (modeCfg.highlightFormatting) state.formatting = "code";
              stream.eatWhile("`");
              var count = stream.current().length;
              if (state.code == 0 && (!state.quote || count == 1)) {
                state.code = count;
                return getType(state);
              } else if (count == state.code) {
                var t = getType(state);
                state.code = 0;
                return t;
              } else {
                state.formatting = previousFormatting;
                return getType(state);
              }
            } else if (state.code) {
              return getType(state);
            }
            if (ch === "\\") {
              stream.next();
              if (modeCfg.highlightFormatting) {
                var type = getType(state);
                var formattingEscape = tokenTypes.formatting + "-escape";
                return type ? type + " " + formattingEscape : formattingEscape;
              }
            }
            if (ch === "!" && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
              state.imageMarker = true;
              state.image = true;
              if (modeCfg.highlightFormatting) state.formatting = "image";
              return getType(state);
            }
            if (ch === "[" && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
              state.imageMarker = false;
              state.imageAltText = true;
              if (modeCfg.highlightFormatting) state.formatting = "image";
              return getType(state);
            }
            if (ch === "]" && state.imageAltText) {
              if (modeCfg.highlightFormatting) state.formatting = "image";
              var type = getType(state);
              state.imageAltText = false;
              state.image = false;
              state.inline = state.f = linkHref;
              return type;
            }
            if (ch === "[" && !state.image) {
              if (state.linkText && stream.match(/^.*?\]/)) return getType(state);
              state.linkText = true;
              if (modeCfg.highlightFormatting) state.formatting = "link";
              return getType(state);
            }
            if (ch === "]" && state.linkText) {
              if (modeCfg.highlightFormatting) state.formatting = "link";
              var type = getType(state);
              state.linkText = false;
              state.inline = state.f = stream.match(/\(.*?\)| ?\[.*?\]/, false) ? linkHref : inlineNormal;
              return type;
            }
            if (ch === "<" && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
              state.f = state.inline = linkInline;
              if (modeCfg.highlightFormatting) state.formatting = "link";
              var type = getType(state);
              if (type) {
                type += " ";
              } else {
                type = "";
              }
              return type + tokenTypes.linkInline;
            }
            if (ch === "<" && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
              state.f = state.inline = linkInline;
              if (modeCfg.highlightFormatting) state.formatting = "link";
              var type = getType(state);
              if (type) {
                type += " ";
              } else {
                type = "";
              }
              return type + tokenTypes.linkEmail;
            }
            if (modeCfg.xml && ch === "<" && stream.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, false)) {
              var end = stream.string.indexOf(">", stream.pos);
              if (end != -1) {
                var atts = stream.string.substring(stream.start, end);
                if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
              }
              stream.backUp(1);
              state.htmlState = CodeMirror3.startState(htmlMode);
              return switchBlock(stream, state, htmlBlock);
            }
            if (modeCfg.xml && ch === "<" && stream.match(/^\/\w*?>/)) {
              state.md_inside = false;
              return "tag";
            } else if (ch === "*" || ch === "_") {
              var len = 1, before = stream.pos == 1 ? " " : stream.string.charAt(stream.pos - 2);
              while (len < 3 && stream.eat(ch)) len++;
              var after = stream.peek() || " ";
              var leftFlanking = !/\s/.test(after) && (!punctuation.test(after) || /\s/.test(before) || punctuation.test(before));
              var rightFlanking = !/\s/.test(before) && (!punctuation.test(before) || /\s/.test(after) || punctuation.test(after));
              var setEm = null, setStrong = null;
              if (len % 2) {
                if (!state.em && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
                  setEm = true;
                else if (state.em == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
                  setEm = false;
              }
              if (len > 1) {
                if (!state.strong && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
                  setStrong = true;
                else if (state.strong == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
                  setStrong = false;
              }
              if (setStrong != null || setEm != null) {
                if (modeCfg.highlightFormatting) state.formatting = setEm == null ? "strong" : setStrong == null ? "em" : "strong em";
                if (setEm === true) state.em = ch;
                if (setStrong === true) state.strong = ch;
                var t = getType(state);
                if (setEm === false) state.em = false;
                if (setStrong === false) state.strong = false;
                return t;
              }
            } else if (ch === " ") {
              if (stream.eat("*") || stream.eat("_")) {
                if (stream.peek() === " ") {
                  return getType(state);
                } else {
                  stream.backUp(1);
                }
              }
            }
            if (modeCfg.strikethrough) {
              if (ch === "~" && stream.eatWhile(ch)) {
                if (state.strikethrough) {
                  if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
                  var t = getType(state);
                  state.strikethrough = false;
                  return t;
                } else if (stream.match(/^[^\s]/, false)) {
                  state.strikethrough = true;
                  if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
                  return getType(state);
                }
              } else if (ch === " ") {
                if (stream.match("~~", true)) {
                  if (stream.peek() === " ") {
                    return getType(state);
                  } else {
                    stream.backUp(2);
                  }
                }
              }
            }
            if (modeCfg.emoji && ch === ":" && stream.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
              state.emoji = true;
              if (modeCfg.highlightFormatting) state.formatting = "emoji";
              var retType = getType(state);
              state.emoji = false;
              return retType;
            }
            if (ch === " ") {
              if (stream.match(/^ +$/, false)) {
                state.trailingSpace++;
              } else if (state.trailingSpace) {
                state.trailingSpaceNewLine = true;
              }
            }
            return getType(state);
          }
          function linkInline(stream, state) {
            var ch = stream.next();
            if (ch === ">") {
              state.f = state.inline = inlineNormal;
              if (modeCfg.highlightFormatting) state.formatting = "link";
              var type = getType(state);
              if (type) {
                type += " ";
              } else {
                type = "";
              }
              return type + tokenTypes.linkInline;
            }
            stream.match(/^[^>]+/, true);
            return tokenTypes.linkInline;
          }
          function linkHref(stream, state) {
            if (stream.eatSpace()) {
              return null;
            }
            var ch = stream.next();
            if (ch === "(" || ch === "[") {
              state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]");
              if (modeCfg.highlightFormatting) state.formatting = "link-string";
              state.linkHref = true;
              return getType(state);
            }
            return "error";
          }
          var linkRE = {
            ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
            "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
          };
          function getLinkHrefInside(endChar) {
            return function(stream, state) {
              var ch = stream.next();
              if (ch === endChar) {
                state.f = state.inline = inlineNormal;
                if (modeCfg.highlightFormatting) state.formatting = "link-string";
                var returnState = getType(state);
                state.linkHref = false;
                return returnState;
              }
              stream.match(linkRE[endChar]);
              state.linkHref = true;
              return getType(state);
            };
          }
          function footnoteLink(stream, state) {
            if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
              state.f = footnoteLinkInside;
              stream.next();
              if (modeCfg.highlightFormatting) state.formatting = "link";
              state.linkText = true;
              return getType(state);
            }
            return switchInline(stream, state, inlineNormal);
          }
          function footnoteLinkInside(stream, state) {
            if (stream.match("]:", true)) {
              state.f = state.inline = footnoteUrl;
              if (modeCfg.highlightFormatting) state.formatting = "link";
              var returnType = getType(state);
              state.linkText = false;
              return returnType;
            }
            stream.match(/^([^\]\\]|\\.)+/, true);
            return tokenTypes.linkText;
          }
          function footnoteUrl(stream, state) {
            if (stream.eatSpace()) {
              return null;
            }
            stream.match(/^[^\s]+/, true);
            if (stream.peek() === void 0) {
              state.linkTitle = true;
            } else {
              stream.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/, true);
            }
            state.f = state.inline = inlineNormal;
            return tokenTypes.linkHref + " url";
          }
          var mode = {
            startState: function() {
              return {
                f: blockNormal,
                prevLine: { stream: null },
                thisLine: { stream: null },
                block: blockNormal,
                htmlState: null,
                indentation: 0,
                inline: inlineNormal,
                text: handleText,
                formatting: false,
                linkText: false,
                linkHref: false,
                linkTitle: false,
                code: 0,
                em: false,
                strong: false,
                header: 0,
                setext: 0,
                hr: false,
                taskList: false,
                list: false,
                listStack: [],
                quote: 0,
                trailingSpace: 0,
                trailingSpaceNewLine: false,
                strikethrough: false,
                emoji: false,
                fencedEndRE: null
              };
            },
            copyState: function(s) {
              return {
                f: s.f,
                prevLine: s.prevLine,
                thisLine: s.thisLine,
                block: s.block,
                htmlState: s.htmlState && CodeMirror3.copyState(htmlMode, s.htmlState),
                indentation: s.indentation,
                localMode: s.localMode,
                localState: s.localMode ? CodeMirror3.copyState(s.localMode, s.localState) : null,
                inline: s.inline,
                text: s.text,
                formatting: false,
                linkText: s.linkText,
                linkTitle: s.linkTitle,
                linkHref: s.linkHref,
                code: s.code,
                em: s.em,
                strong: s.strong,
                strikethrough: s.strikethrough,
                emoji: s.emoji,
                header: s.header,
                setext: s.setext,
                hr: s.hr,
                taskList: s.taskList,
                list: s.list,
                listStack: s.listStack.slice(0),
                quote: s.quote,
                indentedCode: s.indentedCode,
                trailingSpace: s.trailingSpace,
                trailingSpaceNewLine: s.trailingSpaceNewLine,
                md_inside: s.md_inside,
                fencedEndRE: s.fencedEndRE
              };
            },
            token: function(stream, state) {
              state.formatting = false;
              if (stream != state.thisLine.stream) {
                state.header = 0;
                state.hr = false;
                if (stream.match(/^\s*$/, true)) {
                  blankLine(state);
                  return null;
                }
                state.prevLine = state.thisLine;
                state.thisLine = { stream };
                state.taskList = false;
                state.trailingSpace = 0;
                state.trailingSpaceNewLine = false;
                if (!state.localState) {
                  state.f = state.block;
                  if (state.f != htmlBlock) {
                    var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, expandedTab).length;
                    state.indentation = indentation;
                    state.indentationDiff = null;
                    if (indentation > 0) return null;
                  }
                }
              }
              return state.f(stream, state);
            },
            innerMode: function(state) {
              if (state.block == htmlBlock) return { state: state.htmlState, mode: htmlMode };
              if (state.localState) return { state: state.localState, mode: state.localMode };
              return { state, mode };
            },
            indent: function(state, textAfter, line) {
              if (state.block == htmlBlock && htmlMode.indent) return htmlMode.indent(state.htmlState, textAfter, line);
              if (state.localState && state.localMode.indent) return state.localMode.indent(state.localState, textAfter, line);
              return CodeMirror3.Pass;
            },
            blankLine,
            getType,
            blockCommentStart: "<!--",
            blockCommentEnd: "-->",
            closeBrackets: "()[]{}''\"\"``",
            fold: "markdown"
          };
          return mode;
        }, "xml");
        CodeMirror3.defineMIME("text/markdown", "markdown");
        CodeMirror3.defineMIME("text/x-markdown", "markdown");
      });
    }
  });

  // ../../node_modules/codemirror/mode/css/css.js
  var require_css = __commonJS({
    "../../node_modules/codemirror/mode/css/css.js"(exports, module) {
      (function(mod) {
        if (typeof exports == "object" && typeof module == "object")
          mod(require_codemirror());
        else if (typeof define == "function" && define.amd)
          define(["../../lib/codemirror"], mod);
        else
          mod(CodeMirror);
      })(function(CodeMirror3) {
        "use strict";
        CodeMirror3.defineMode("css", function(config, parserConfig) {
          var inline = parserConfig.inline;
          if (!parserConfig.propertyKeywords) parserConfig = CodeMirror3.resolveMode("text/css");
          var indentUnit = config.indentUnit, tokenHooks = parserConfig.tokenHooks, documentTypes2 = parserConfig.documentTypes || {}, mediaTypes2 = parserConfig.mediaTypes || {}, mediaFeatures2 = parserConfig.mediaFeatures || {}, mediaValueKeywords2 = parserConfig.mediaValueKeywords || {}, propertyKeywords2 = parserConfig.propertyKeywords || {}, nonStandardPropertyKeywords2 = parserConfig.nonStandardPropertyKeywords || {}, fontProperties2 = parserConfig.fontProperties || {}, counterDescriptors2 = parserConfig.counterDescriptors || {}, colorKeywords2 = parserConfig.colorKeywords || {}, valueKeywords2 = parserConfig.valueKeywords || {}, allowNested = parserConfig.allowNested, lineComment = parserConfig.lineComment, supportsAtComponent = parserConfig.supportsAtComponent === true, highlightNonStandardPropertyKeywords = config.highlightNonStandardPropertyKeywords !== false;
          var type, override;
          function ret(style, tp) {
            type = tp;
            return style;
          }
          function tokenBase(stream, state) {
            var ch = stream.next();
            if (tokenHooks[ch]) {
              var result = tokenHooks[ch](stream, state);
              if (result !== false) return result;
            }
            if (ch == "@") {
              stream.eatWhile(/[\w\\\-]/);
              return ret("def", stream.current());
            } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
              return ret(null, "compare");
            } else if (ch == '"' || ch == "'") {
              state.tokenize = tokenString(ch);
              return state.tokenize(stream, state);
            } else if (ch == "#") {
              stream.eatWhile(/[\w\\\-]/);
              return ret("atom", "hash");
            } else if (ch == "!") {
              stream.match(/^\s*\w*/);
              return ret("keyword", "important");
            } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
              stream.eatWhile(/[\w.%]/);
              return ret("number", "unit");
            } else if (ch === "-") {
              if (/[\d.]/.test(stream.peek())) {
                stream.eatWhile(/[\w.%]/);
                return ret("number", "unit");
              } else if (stream.match(/^-[\w\\\-]*/)) {
                stream.eatWhile(/[\w\\\-]/);
                if (stream.match(/^\s*:/, false))
                  return ret("variable-2", "variable-definition");
                return ret("variable-2", "variable");
              } else if (stream.match(/^\w+-/)) {
                return ret("meta", "meta");
              }
            } else if (/[,+>*\/]/.test(ch)) {
              return ret(null, "select-op");
            } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
              return ret("qualifier", "qualifier");
            } else if (/[:;{}\[\]\(\)]/.test(ch)) {
              return ret(null, ch);
            } else if (stream.match(/^[\w-.]+(?=\()/)) {
              if (/^(url(-prefix)?|domain|regexp)$/i.test(stream.current())) {
                state.tokenize = tokenParenthesized;
              }
              return ret("variable callee", "variable");
            } else if (/[\w\\\-]/.test(ch)) {
              stream.eatWhile(/[\w\\\-]/);
              return ret("property", "word");
            } else {
              return ret(null, null);
            }
          }
          function tokenString(quote) {
            return function(stream, state) {
              var escaped = false, ch;
              while ((ch = stream.next()) != null) {
                if (ch == quote && !escaped) {
                  if (quote == ")") stream.backUp(1);
                  break;
                }
                escaped = !escaped && ch == "\\";
              }
              if (ch == quote || !escaped && quote != ")") state.tokenize = null;
              return ret("string", "string");
            };
          }
          function tokenParenthesized(stream, state) {
            stream.next();
            if (!stream.match(/^\s*[\"\')]/, false))
              state.tokenize = tokenString(")");
            else
              state.tokenize = null;
            return ret(null, "(");
          }
          function Context(type2, indent, prev) {
            this.type = type2;
            this.indent = indent;
            this.prev = prev;
          }
          function pushContext(state, stream, type2, indent) {
            state.context = new Context(type2, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
            return type2;
          }
          function popContext(state) {
            if (state.context.prev)
              state.context = state.context.prev;
            return state.context.type;
          }
          function pass(type2, stream, state) {
            return states[state.context.type](type2, stream, state);
          }
          function popAndPass(type2, stream, state, n) {
            for (var i = n || 1; i > 0; i--)
              state.context = state.context.prev;
            return pass(type2, stream, state);
          }
          function wordAsValue(stream) {
            var word = stream.current().toLowerCase();
            if (valueKeywords2.hasOwnProperty(word))
              override = "atom";
            else if (colorKeywords2.hasOwnProperty(word))
              override = "keyword";
            else
              override = "variable";
          }
          var states = {};
          states.top = function(type2, stream, state) {
            if (type2 == "{") {
              return pushContext(state, stream, "block");
            } else if (type2 == "}" && state.context.prev) {
              return popContext(state);
            } else if (supportsAtComponent && /@component/i.test(type2)) {
              return pushContext(state, stream, "atComponentBlock");
            } else if (/^@(-moz-)?document$/i.test(type2)) {
              return pushContext(state, stream, "documentTypes");
            } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type2)) {
              return pushContext(state, stream, "atBlock");
            } else if (/^@(font-face|counter-style)/i.test(type2)) {
              state.stateArg = type2;
              return "restricted_atBlock_before";
            } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type2)) {
              return "keyframes";
            } else if (type2 && type2.charAt(0) == "@") {
              return pushContext(state, stream, "at");
            } else if (type2 == "hash") {
              override = "builtin";
            } else if (type2 == "word") {
              override = "tag";
            } else if (type2 == "variable-definition") {
              return "maybeprop";
            } else if (type2 == "interpolation") {
              return pushContext(state, stream, "interpolation");
            } else if (type2 == ":") {
              return "pseudo";
            } else if (allowNested && type2 == "(") {
              return pushContext(state, stream, "parens");
            }
            return state.context.type;
          };
          states.block = function(type2, stream, state) {
            if (type2 == "word") {
              var word = stream.current().toLowerCase();
              if (propertyKeywords2.hasOwnProperty(word)) {
                override = "property";
                return "maybeprop";
              } else if (nonStandardPropertyKeywords2.hasOwnProperty(word)) {
                override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
                return "maybeprop";
              } else if (allowNested) {
                override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
                return "block";
              } else {
                override += " error";
                return "maybeprop";
              }
            } else if (type2 == "meta") {
              return "block";
            } else if (!allowNested && (type2 == "hash" || type2 == "qualifier")) {
              override = "error";
              return "block";
            } else {
              return states.top(type2, stream, state);
            }
          };
          states.maybeprop = function(type2, stream, state) {
            if (type2 == ":") return pushContext(state, stream, "prop");
            return pass(type2, stream, state);
          };
          states.prop = function(type2, stream, state) {
            if (type2 == ";") return popContext(state);
            if (type2 == "{" && allowNested) return pushContext(state, stream, "propBlock");
            if (type2 == "}" || type2 == "{") return popAndPass(type2, stream, state);
            if (type2 == "(") return pushContext(state, stream, "parens");
            if (type2 == "hash" && !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(stream.current())) {
              override += " error";
            } else if (type2 == "word") {
              wordAsValue(stream);
            } else if (type2 == "interpolation") {
              return pushContext(state, stream, "interpolation");
            }
            return "prop";
          };
          states.propBlock = function(type2, _stream, state) {
            if (type2 == "}") return popContext(state);
            if (type2 == "word") {
              override = "property";
              return "maybeprop";
            }
            return state.context.type;
          };
          states.parens = function(type2, stream, state) {
            if (type2 == "{" || type2 == "}") return popAndPass(type2, stream, state);
            if (type2 == ")") return popContext(state);
            if (type2 == "(") return pushContext(state, stream, "parens");
            if (type2 == "interpolation") return pushContext(state, stream, "interpolation");
            if (type2 == "word") wordAsValue(stream);
            return "parens";
          };
          states.pseudo = function(type2, stream, state) {
            if (type2 == "meta") return "pseudo";
            if (type2 == "word") {
              override = "variable-3";
              return state.context.type;
            }
            return pass(type2, stream, state);
          };
          states.documentTypes = function(type2, stream, state) {
            if (type2 == "word" && documentTypes2.hasOwnProperty(stream.current())) {
              override = "tag";
              return state.context.type;
            } else {
              return states.atBlock(type2, stream, state);
            }
          };
          states.atBlock = function(type2, stream, state) {
            if (type2 == "(") return pushContext(state, stream, "atBlock_parens");
            if (type2 == "}" || type2 == ";") return popAndPass(type2, stream, state);
            if (type2 == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");
            if (type2 == "interpolation") return pushContext(state, stream, "interpolation");
            if (type2 == "word") {
              var word = stream.current().toLowerCase();
              if (word == "only" || word == "not" || word == "and" || word == "or")
                override = "keyword";
              else if (mediaTypes2.hasOwnProperty(word))
                override = "attribute";
              else if (mediaFeatures2.hasOwnProperty(word))
                override = "property";
              else if (mediaValueKeywords2.hasOwnProperty(word))
                override = "keyword";
              else if (propertyKeywords2.hasOwnProperty(word))
                override = "property";
              else if (nonStandardPropertyKeywords2.hasOwnProperty(word))
                override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
              else if (valueKeywords2.hasOwnProperty(word))
                override = "atom";
              else if (colorKeywords2.hasOwnProperty(word))
                override = "keyword";
              else
                override = "error";
            }
            return state.context.type;
          };
          states.atComponentBlock = function(type2, stream, state) {
            if (type2 == "}")
              return popAndPass(type2, stream, state);
            if (type2 == "{")
              return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
            if (type2 == "word")
              override = "error";
            return state.context.type;
          };
          states.atBlock_parens = function(type2, stream, state) {
            if (type2 == ")") return popContext(state);
            if (type2 == "{" || type2 == "}") return popAndPass(type2, stream, state, 2);
            return states.atBlock(type2, stream, state);
          };
          states.restricted_atBlock_before = function(type2, stream, state) {
            if (type2 == "{")
              return pushContext(state, stream, "restricted_atBlock");
            if (type2 == "word" && state.stateArg == "@counter-style") {
              override = "variable";
              return "restricted_atBlock_before";
            }
            return pass(type2, stream, state);
          };
          states.restricted_atBlock = function(type2, stream, state) {
            if (type2 == "}") {
              state.stateArg = null;
              return popContext(state);
            }
            if (type2 == "word") {
              if (state.stateArg == "@font-face" && !fontProperties2.hasOwnProperty(stream.current().toLowerCase()) || state.stateArg == "@counter-style" && !counterDescriptors2.hasOwnProperty(stream.current().toLowerCase()))
                override = "error";
              else
                override = "property";
              return "maybeprop";
            }
            return "restricted_atBlock";
          };
          states.keyframes = function(type2, stream, state) {
            if (type2 == "word") {
              override = "variable";
              return "keyframes";
            }
            if (type2 == "{") return pushContext(state, stream, "top");
            return pass(type2, stream, state);
          };
          states.at = function(type2, stream, state) {
            if (type2 == ";") return popContext(state);
            if (type2 == "{" || type2 == "}") return popAndPass(type2, stream, state);
            if (type2 == "word") override = "tag";
            else if (type2 == "hash") override = "builtin";
            return "at";
          };
          states.interpolation = function(type2, stream, state) {
            if (type2 == "}") return popContext(state);
            if (type2 == "{" || type2 == ";") return popAndPass(type2, stream, state);
            if (type2 == "word") override = "variable";
            else if (type2 != "variable" && type2 != "(" && type2 != ")") override = "error";
            return "interpolation";
          };
          return {
            startState: function(base) {
              return {
                tokenize: null,
                state: inline ? "block" : "top",
                stateArg: null,
                context: new Context(inline ? "block" : "top", base || 0, null)
              };
            },
            token: function(stream, state) {
              if (!state.tokenize && stream.eatSpace()) return null;
              var style = (state.tokenize || tokenBase)(stream, state);
              if (style && typeof style == "object") {
                type = style[1];
                style = style[0];
              }
              override = style;
              if (type != "comment")
                state.state = states[state.state](type, stream, state);
              return override;
            },
            indent: function(state, textAfter) {
              var cx = state.context, ch = textAfter && textAfter.charAt(0);
              var indent = cx.indent;
              if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
              if (cx.prev) {
                if (ch == "}" && (cx.type == "block" || cx.type == "top" || cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
                  cx = cx.prev;
                  indent = cx.indent;
                } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") || ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
                  indent = Math.max(0, cx.indent - indentUnit);
                }
              }
              return indent;
            },
            electricChars: "}",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            blockCommentContinue: " * ",
            lineComment,
            fold: "brace"
          };
        });
        function keySet(array) {
          var keys = {};
          for (var i = 0; i < array.length; ++i) {
            keys[array[i].toLowerCase()] = true;
          }
          return keys;
        }
        var documentTypes_ = [
          "domain",
          "regexp",
          "url",
          "url-prefix"
        ], documentTypes = keySet(documentTypes_);
        var mediaTypes_ = [
          "all",
          "aural",
          "braille",
          "handheld",
          "print",
          "projection",
          "screen",
          "tty",
          "tv",
          "embossed"
        ], mediaTypes = keySet(mediaTypes_);
        var mediaFeatures_ = [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "device-width",
          "min-device-width",
          "max-device-width",
          "device-height",
          "min-device-height",
          "max-device-height",
          "aspect-ratio",
          "min-aspect-ratio",
          "max-aspect-ratio",
          "device-aspect-ratio",
          "min-device-aspect-ratio",
          "max-device-aspect-ratio",
          "color",
          "min-color",
          "max-color",
          "color-index",
          "min-color-index",
          "max-color-index",
          "monochrome",
          "min-monochrome",
          "max-monochrome",
          "resolution",
          "min-resolution",
          "max-resolution",
          "scan",
          "grid",
          "orientation",
          "device-pixel-ratio",
          "min-device-pixel-ratio",
          "max-device-pixel-ratio",
          "pointer",
          "any-pointer",
          "hover",
          "any-hover",
          "prefers-color-scheme",
          "dynamic-range",
          "video-dynamic-range"
        ], mediaFeatures = keySet(mediaFeatures_);
        var mediaValueKeywords_ = [
          "landscape",
          "portrait",
          "none",
          "coarse",
          "fine",
          "on-demand",
          "hover",
          "interlace",
          "progressive",
          "dark",
          "light",
          "standard",
          "high"
        ], mediaValueKeywords = keySet(mediaValueKeywords_);
        var propertyKeywords_ = [
          "align-content",
          "align-items",
          "align-self",
          "alignment-adjust",
          "alignment-baseline",
          "all",
          "anchor-point",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "appearance",
          "azimuth",
          "backdrop-filter",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-repeat",
          "background-size",
          "baseline-shift",
          "binding",
          "bleed",
          "block-size",
          "bookmark-label",
          "bookmark-level",
          "bookmark-state",
          "bookmark-target",
          "border",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "color",
          "color-profile",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "contain",
          "content",
          "counter-increment",
          "counter-reset",
          "crop",
          "cue",
          "cue-after",
          "cue-before",
          "cursor",
          "direction",
          "display",
          "dominant-baseline",
          "drop-initial-after-adjust",
          "drop-initial-after-align",
          "drop-initial-before-adjust",
          "drop-initial-before-align",
          "drop-initial-size",
          "drop-initial-value",
          "elevation",
          "empty-cells",
          "fit",
          "fit-content",
          "fit-position",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "float-offset",
          "flow-from",
          "flow-into",
          "font",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-optical-sizing",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-alternates",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-variation-settings",
          "font-weight",
          "gap",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-gap",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-gap",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "height",
          "hyphens",
          "icon",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "inline-box-align",
          "inset",
          "inset-block",
          "inset-block-end",
          "inset-block-start",
          "inset-inline",
          "inset-inline-end",
          "inset-inline-start",
          "isolation",
          "justify-content",
          "justify-items",
          "justify-self",
          "left",
          "letter-spacing",
          "line-break",
          "line-height",
          "line-height-step",
          "line-stacking",
          "line-stacking-ruby",
          "line-stacking-shift",
          "line-stacking-strategy",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-bottom",
          "margin-left",
          "margin-right",
          "margin-top",
          "marks",
          "marquee-direction",
          "marquee-loop",
          "marquee-play-count",
          "marquee-speed",
          "marquee-style",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "max-block-size",
          "max-height",
          "max-inline-size",
          "max-width",
          "min-block-size",
          "min-height",
          "min-inline-size",
          "min-width",
          "mix-blend-mode",
          "move-to",
          "nav-down",
          "nav-index",
          "nav-left",
          "nav-right",
          "nav-up",
          "object-fit",
          "object-position",
          "offset",
          "offset-anchor",
          "offset-distance",
          "offset-path",
          "offset-position",
          "offset-rotate",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-style",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding",
          "padding-bottom",
          "padding-left",
          "padding-right",
          "padding-top",
          "page",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "page-policy",
          "pause",
          "pause-after",
          "pause-before",
          "perspective",
          "perspective-origin",
          "pitch",
          "pitch-range",
          "place-content",
          "place-items",
          "place-self",
          "play-during",
          "position",
          "presentation-level",
          "punctuation-trim",
          "quotes",
          "region-break-after",
          "region-break-before",
          "region-break-inside",
          "region-fragment",
          "rendering-intent",
          "resize",
          "rest",
          "rest-after",
          "rest-before",
          "richness",
          "right",
          "rotate",
          "rotation",
          "rotation-point",
          "row-gap",
          "ruby-align",
          "ruby-overhang",
          "ruby-position",
          "ruby-span",
          "scale",
          "scroll-behavior",
          "scroll-margin",
          "scroll-margin-block",
          "scroll-margin-block-end",
          "scroll-margin-block-start",
          "scroll-margin-bottom",
          "scroll-margin-inline",
          "scroll-margin-inline-end",
          "scroll-margin-inline-start",
          "scroll-margin-left",
          "scroll-margin-right",
          "scroll-margin-top",
          "scroll-padding",
          "scroll-padding-block",
          "scroll-padding-block-end",
          "scroll-padding-block-start",
          "scroll-padding-bottom",
          "scroll-padding-inline",
          "scroll-padding-inline-end",
          "scroll-padding-inline-start",
          "scroll-padding-left",
          "scroll-padding-right",
          "scroll-padding-top",
          "scroll-snap-align",
          "scroll-snap-type",
          "shape-image-threshold",
          "shape-inside",
          "shape-margin",
          "shape-outside",
          "size",
          "speak",
          "speak-as",
          "speak-header",
          "speak-numeral",
          "speak-punctuation",
          "speech-rate",
          "stress",
          "string-set",
          "tab-size",
          "table-layout",
          "target",
          "target-name",
          "target-new",
          "target-position",
          "text-align",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-skip",
          "text-decoration-skip-ink",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-height",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-outline",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-size-adjust",
          "text-space-collapse",
          "text-transform",
          "text-underline-position",
          "text-wrap",
          "top",
          "touch-action",
          "transform",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "translate",
          "unicode-bidi",
          "user-select",
          "vertical-align",
          "visibility",
          "voice-balance",
          "voice-duration",
          "voice-family",
          "voice-pitch",
          "voice-range",
          "voice-rate",
          "voice-stress",
          "voice-volume",
          "volume",
          "white-space",
          "widows",
          "width",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
          // SVG-specific
          "clip-path",
          "clip-rule",
          "mask",
          "enable-background",
          "filter",
          "flood-color",
          "flood-opacity",
          "lighting-color",
          "stop-color",
          "stop-opacity",
          "pointer-events",
          "color-interpolation",
          "color-interpolation-filters",
          "color-rendering",
          "fill",
          "fill-opacity",
          "fill-rule",
          "image-rendering",
          "marker",
          "marker-end",
          "marker-mid",
          "marker-start",
          "paint-order",
          "shape-rendering",
          "stroke",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-rendering",
          "baseline-shift",
          "dominant-baseline",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "text-anchor",
          "writing-mode"
        ], propertyKeywords = keySet(propertyKeywords_);
        var nonStandardPropertyKeywords_ = [
          "accent-color",
          "aspect-ratio",
          "border-block",
          "border-block-color",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-block-style",
          "border-block-width",
          "border-inline",
          "border-inline-color",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-inline-style",
          "border-inline-width",
          "content-visibility",
          "margin-block",
          "margin-block-end",
          "margin-block-start",
          "margin-inline",
          "margin-inline-end",
          "margin-inline-start",
          "overflow-anchor",
          "overscroll-behavior",
          "padding-block",
          "padding-block-end",
          "padding-block-start",
          "padding-inline",
          "padding-inline-end",
          "padding-inline-start",
          "scroll-snap-stop",
          "scrollbar-3d-light-color",
          "scrollbar-arrow-color",
          "scrollbar-base-color",
          "scrollbar-dark-shadow-color",
          "scrollbar-face-color",
          "scrollbar-highlight-color",
          "scrollbar-shadow-color",
          "scrollbar-track-color",
          "searchfield-cancel-button",
          "searchfield-decoration",
          "searchfield-results-button",
          "searchfield-results-decoration",
          "shape-inside",
          "zoom"
        ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);
        var fontProperties_ = [
          "font-display",
          "font-family",
          "src",
          "unicode-range",
          "font-variant",
          "font-feature-settings",
          "font-stretch",
          "font-weight",
          "font-style"
        ], fontProperties = keySet(fontProperties_);
        var counterDescriptors_ = [
          "additive-symbols",
          "fallback",
          "negative",
          "pad",
          "prefix",
          "range",
          "speak-as",
          "suffix",
          "symbols",
          "system"
        ], counterDescriptors = keySet(counterDescriptors_);
        var colorKeywords_ = [
          "aliceblue",
          "antiquewhite",
          "aqua",
          "aquamarine",
          "azure",
          "beige",
          "bisque",
          "black",
          "blanchedalmond",
          "blue",
          "blueviolet",
          "brown",
          "burlywood",
          "cadetblue",
          "chartreuse",
          "chocolate",
          "coral",
          "cornflowerblue",
          "cornsilk",
          "crimson",
          "cyan",
          "darkblue",
          "darkcyan",
          "darkgoldenrod",
          "darkgray",
          "darkgreen",
          "darkgrey",
          "darkkhaki",
          "darkmagenta",
          "darkolivegreen",
          "darkorange",
          "darkorchid",
          "darkred",
          "darksalmon",
          "darkseagreen",
          "darkslateblue",
          "darkslategray",
          "darkslategrey",
          "darkturquoise",
          "darkviolet",
          "deeppink",
          "deepskyblue",
          "dimgray",
          "dimgrey",
          "dodgerblue",
          "firebrick",
          "floralwhite",
          "forestgreen",
          "fuchsia",
          "gainsboro",
          "ghostwhite",
          "gold",
          "goldenrod",
          "gray",
          "grey",
          "green",
          "greenyellow",
          "honeydew",
          "hotpink",
          "indianred",
          "indigo",
          "ivory",
          "khaki",
          "lavender",
          "lavenderblush",
          "lawngreen",
          "lemonchiffon",
          "lightblue",
          "lightcoral",
          "lightcyan",
          "lightgoldenrodyellow",
          "lightgray",
          "lightgreen",
          "lightgrey",
          "lightpink",
          "lightsalmon",
          "lightseagreen",
          "lightskyblue",
          "lightslategray",
          "lightslategrey",
          "lightsteelblue",
          "lightyellow",
          "lime",
          "limegreen",
          "linen",
          "magenta",
          "maroon",
          "mediumaquamarine",
          "mediumblue",
          "mediumorchid",
          "mediumpurple",
          "mediumseagreen",
          "mediumslateblue",
          "mediumspringgreen",
          "mediumturquoise",
          "mediumvioletred",
          "midnightblue",
          "mintcream",
          "mistyrose",
          "moccasin",
          "navajowhite",
          "navy",
          "oldlace",
          "olive",
          "olivedrab",
          "orange",
          "orangered",
          "orchid",
          "palegoldenrod",
          "palegreen",
          "paleturquoise",
          "palevioletred",
          "papayawhip",
          "peachpuff",
          "peru",
          "pink",
          "plum",
          "powderblue",
          "purple",
          "rebeccapurple",
          "red",
          "rosybrown",
          "royalblue",
          "saddlebrown",
          "salmon",
          "sandybrown",
          "seagreen",
          "seashell",
          "sienna",
          "silver",
          "skyblue",
          "slateblue",
          "slategray",
          "slategrey",
          "snow",
          "springgreen",
          "steelblue",
          "tan",
          "teal",
          "thistle",
          "tomato",
          "turquoise",
          "violet",
          "wheat",
          "white",
          "whitesmoke",
          "yellow",
          "yellowgreen"
        ], colorKeywords = keySet(colorKeywords_);
        var valueKeywords_ = [
          "above",
          "absolute",
          "activeborder",
          "additive",
          "activecaption",
          "afar",
          "after-white-space",
          "ahead",
          "alias",
          "all",
          "all-scroll",
          "alphabetic",
          "alternate",
          "always",
          "amharic",
          "amharic-abegede",
          "antialiased",
          "appworkspace",
          "arabic-indic",
          "armenian",
          "asterisks",
          "attr",
          "auto",
          "auto-flow",
          "avoid",
          "avoid-column",
          "avoid-page",
          "avoid-region",
          "axis-pan",
          "background",
          "backwards",
          "baseline",
          "below",
          "bidi-override",
          "binary",
          "bengali",
          "blink",
          "block",
          "block-axis",
          "blur",
          "bold",
          "bolder",
          "border",
          "border-box",
          "both",
          "bottom",
          "break",
          "break-all",
          "break-word",
          "brightness",
          "bullets",
          "button",
          "buttonface",
          "buttonhighlight",
          "buttonshadow",
          "buttontext",
          "calc",
          "cambodian",
          "capitalize",
          "caps-lock-indicator",
          "caption",
          "captiontext",
          "caret",
          "cell",
          "center",
          "checkbox",
          "circle",
          "cjk-decimal",
          "cjk-earthly-branch",
          "cjk-heavenly-stem",
          "cjk-ideographic",
          "clear",
          "clip",
          "close-quote",
          "col-resize",
          "collapse",
          "color",
          "color-burn",
          "color-dodge",
          "column",
          "column-reverse",
          "compact",
          "condensed",
          "conic-gradient",
          "contain",
          "content",
          "contents",
          "content-box",
          "context-menu",
          "continuous",
          "contrast",
          "copy",
          "counter",
          "counters",
          "cover",
          "crop",
          "cross",
          "crosshair",
          "cubic-bezier",
          "currentcolor",
          "cursive",
          "cyclic",
          "darken",
          "dashed",
          "decimal",
          "decimal-leading-zero",
          "default",
          "default-button",
          "dense",
          "destination-atop",
          "destination-in",
          "destination-out",
          "destination-over",
          "devanagari",
          "difference",
          "disc",
          "discard",
          "disclosure-closed",
          "disclosure-open",
          "document",
          "dot-dash",
          "dot-dot-dash",
          "dotted",
          "double",
          "down",
          "drop-shadow",
          "e-resize",
          "ease",
          "ease-in",
          "ease-in-out",
          "ease-out",
          "element",
          "ellipse",
          "ellipsis",
          "embed",
          "end",
          "ethiopic",
          "ethiopic-abegede",
          "ethiopic-abegede-am-et",
          "ethiopic-abegede-gez",
          "ethiopic-abegede-ti-er",
          "ethiopic-abegede-ti-et",
          "ethiopic-halehame-aa-er",
          "ethiopic-halehame-aa-et",
          "ethiopic-halehame-am-et",
          "ethiopic-halehame-gez",
          "ethiopic-halehame-om-et",
          "ethiopic-halehame-sid-et",
          "ethiopic-halehame-so-et",
          "ethiopic-halehame-ti-er",
          "ethiopic-halehame-ti-et",
          "ethiopic-halehame-tig",
          "ethiopic-numeric",
          "ew-resize",
          "exclusion",
          "expanded",
          "extends",
          "extra-condensed",
          "extra-expanded",
          "fantasy",
          "fast",
          "fill",
          "fill-box",
          "fixed",
          "flat",
          "flex",
          "flex-end",
          "flex-start",
          "footnotes",
          "forwards",
          "from",
          "geometricPrecision",
          "georgian",
          "grayscale",
          "graytext",
          "grid",
          "groove",
          "gujarati",
          "gurmukhi",
          "hand",
          "hangul",
          "hangul-consonant",
          "hard-light",
          "hebrew",
          "help",
          "hidden",
          "hide",
          "higher",
          "highlight",
          "highlighttext",
          "hiragana",
          "hiragana-iroha",
          "horizontal",
          "hsl",
          "hsla",
          "hue",
          "hue-rotate",
          "icon",
          "ignore",
          "inactiveborder",
          "inactivecaption",
          "inactivecaptiontext",
          "infinite",
          "infobackground",
          "infotext",
          "inherit",
          "initial",
          "inline",
          "inline-axis",
          "inline-block",
          "inline-flex",
          "inline-grid",
          "inline-table",
          "inset",
          "inside",
          "intrinsic",
          "invert",
          "italic",
          "japanese-formal",
          "japanese-informal",
          "justify",
          "kannada",
          "katakana",
          "katakana-iroha",
          "keep-all",
          "khmer",
          "korean-hangul-formal",
          "korean-hanja-formal",
          "korean-hanja-informal",
          "landscape",
          "lao",
          "large",
          "larger",
          "left",
          "level",
          "lighter",
          "lighten",
          "line-through",
          "linear",
          "linear-gradient",
          "lines",
          "list-item",
          "listbox",
          "listitem",
          "local",
          "logical",
          "loud",
          "lower",
          "lower-alpha",
          "lower-armenian",
          "lower-greek",
          "lower-hexadecimal",
          "lower-latin",
          "lower-norwegian",
          "lower-roman",
          "lowercase",
          "ltr",
          "luminosity",
          "malayalam",
          "manipulation",
          "match",
          "matrix",
          "matrix3d",
          "media-play-button",
          "media-slider",
          "media-sliderthumb",
          "media-volume-slider",
          "media-volume-sliderthumb",
          "medium",
          "menu",
          "menulist",
          "menulist-button",
          "menutext",
          "message-box",
          "middle",
          "min-intrinsic",
          "mix",
          "mongolian",
          "monospace",
          "move",
          "multiple",
          "multiple_mask_images",
          "multiply",
          "myanmar",
          "n-resize",
          "narrower",
          "ne-resize",
          "nesw-resize",
          "no-close-quote",
          "no-drop",
          "no-open-quote",
          "no-repeat",
          "none",
          "normal",
          "not-allowed",
          "nowrap",
          "ns-resize",
          "numbers",
          "numeric",
          "nw-resize",
          "nwse-resize",
          "oblique",
          "octal",
          "opacity",
          "open-quote",
          "optimizeLegibility",
          "optimizeSpeed",
          "oriya",
          "oromo",
          "outset",
          "outside",
          "outside-shape",
          "overlay",
          "overline",
          "padding",
          "padding-box",
          "painted",
          "page",
          "paused",
          "persian",
          "perspective",
          "pinch-zoom",
          "plus-darker",
          "plus-lighter",
          "pointer",
          "polygon",
          "portrait",
          "pre",
          "pre-line",
          "pre-wrap",
          "preserve-3d",
          "progress",
          "push-button",
          "radial-gradient",
          "radio",
          "read-only",
          "read-write",
          "read-write-plaintext-only",
          "rectangle",
          "region",
          "relative",
          "repeat",
          "repeating-linear-gradient",
          "repeating-radial-gradient",
          "repeating-conic-gradient",
          "repeat-x",
          "repeat-y",
          "reset",
          "reverse",
          "rgb",
          "rgba",
          "ridge",
          "right",
          "rotate",
          "rotate3d",
          "rotateX",
          "rotateY",
          "rotateZ",
          "round",
          "row",
          "row-resize",
          "row-reverse",
          "rtl",
          "run-in",
          "running",
          "s-resize",
          "sans-serif",
          "saturate",
          "saturation",
          "scale",
          "scale3d",
          "scaleX",
          "scaleY",
          "scaleZ",
          "screen",
          "scroll",
          "scrollbar",
          "scroll-position",
          "se-resize",
          "searchfield",
          "searchfield-cancel-button",
          "searchfield-decoration",
          "searchfield-results-button",
          "searchfield-results-decoration",
          "self-start",
          "self-end",
          "semi-condensed",
          "semi-expanded",
          "separate",
          "sepia",
          "serif",
          "show",
          "sidama",
          "simp-chinese-formal",
          "simp-chinese-informal",
          "single",
          "skew",
          "skewX",
          "skewY",
          "skip-white-space",
          "slide",
          "slider-horizontal",
          "slider-vertical",
          "sliderthumb-horizontal",
          "sliderthumb-vertical",
          "slow",
          "small",
          "small-caps",
          "small-caption",
          "smaller",
          "soft-light",
          "solid",
          "somali",
          "source-atop",
          "source-in",
          "source-out",
          "source-over",
          "space",
          "space-around",
          "space-between",
          "space-evenly",
          "spell-out",
          "square",
          "square-button",
          "start",
          "static",
          "status-bar",
          "stretch",
          "stroke",
          "stroke-box",
          "sub",
          "subpixel-antialiased",
          "svg_masks",
          "super",
          "sw-resize",
          "symbolic",
          "symbols",
          "system-ui",
          "table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row",
          "table-row-group",
          "tamil",
          "telugu",
          "text",
          "text-bottom",
          "text-top",
          "textarea",
          "textfield",
          "thai",
          "thick",
          "thin",
          "threeddarkshadow",
          "threedface",
          "threedhighlight",
          "threedlightshadow",
          "threedshadow",
          "tibetan",
          "tigre",
          "tigrinya-er",
          "tigrinya-er-abegede",
          "tigrinya-et",
          "tigrinya-et-abegede",
          "to",
          "top",
          "trad-chinese-formal",
          "trad-chinese-informal",
          "transform",
          "translate",
          "translate3d",
          "translateX",
          "translateY",
          "translateZ",
          "transparent",
          "ultra-condensed",
          "ultra-expanded",
          "underline",
          "unidirectional-pan",
          "unset",
          "up",
          "upper-alpha",
          "upper-armenian",
          "upper-greek",
          "upper-hexadecimal",
          "upper-latin",
          "upper-norwegian",
          "upper-roman",
          "uppercase",
          "urdu",
          "url",
          "var",
          "vertical",
          "vertical-text",
          "view-box",
          "visible",
          "visibleFill",
          "visiblePainted",
          "visibleStroke",
          "visual",
          "w-resize",
          "wait",
          "wave",
          "wider",
          "window",
          "windowframe",
          "windowtext",
          "words",
          "wrap",
          "wrap-reverse",
          "x-large",
          "x-small",
          "xor",
          "xx-large",
          "xx-small"
        ], valueKeywords = keySet(valueKeywords_);
        var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);
        CodeMirror3.registerHelper("hintWords", "css", allWords);
        function tokenCComment(stream, state) {
          var maybeEnd = false, ch;
          while ((ch = stream.next()) != null) {
            if (maybeEnd && ch == "/") {
              state.tokenize = null;
              break;
            }
            maybeEnd = ch == "*";
          }
          return ["comment", "comment"];
        }
        CodeMirror3.defineMIME("text/css", {
          documentTypes,
          mediaTypes,
          mediaFeatures,
          mediaValueKeywords,
          propertyKeywords,
          nonStandardPropertyKeywords,
          fontProperties,
          counterDescriptors,
          colorKeywords,
          valueKeywords,
          tokenHooks: {
            "/": function(stream, state) {
              if (!stream.eat("*")) return false;
              state.tokenize = tokenCComment;
              return tokenCComment(stream, state);
            }
          },
          name: "css"
        });
        CodeMirror3.defineMIME("text/x-scss", {
          mediaTypes,
          mediaFeatures,
          mediaValueKeywords,
          propertyKeywords,
          nonStandardPropertyKeywords,
          colorKeywords,
          valueKeywords,
          fontProperties,
          allowNested: true,
          lineComment: "//",
          tokenHooks: {
            "/": function(stream, state) {
              if (stream.eat("/")) {
                stream.skipToEnd();
                return ["comment", "comment"];
              } else if (stream.eat("*")) {
                state.tokenize = tokenCComment;
                return tokenCComment(stream, state);
              } else {
                return ["operator", "operator"];
              }
            },
            ":": function(stream) {
              if (stream.match(/^\s*\{/, false))
                return [null, null];
              return false;
            },
            "$": function(stream) {
              stream.match(/^[\w-]+/);
              if (stream.match(/^\s*:/, false))
                return ["variable-2", "variable-definition"];
              return ["variable-2", "variable"];
            },
            "#": function(stream) {
              if (!stream.eat("{")) return false;
              return [null, "interpolation"];
            }
          },
          name: "css",
          helperType: "scss"
        });
        CodeMirror3.defineMIME("text/x-less", {
          mediaTypes,
          mediaFeatures,
          mediaValueKeywords,
          propertyKeywords,
          nonStandardPropertyKeywords,
          colorKeywords,
          valueKeywords,
          fontProperties,
          allowNested: true,
          lineComment: "//",
          tokenHooks: {
            "/": function(stream, state) {
              if (stream.eat("/")) {
                stream.skipToEnd();
                return ["comment", "comment"];
              } else if (stream.eat("*")) {
                state.tokenize = tokenCComment;
                return tokenCComment(stream, state);
              } else {
                return ["operator", "operator"];
              }
            },
            "@": function(stream) {
              if (stream.eat("{")) return [null, "interpolation"];
              if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) return false;
              stream.eatWhile(/[\w\\\-]/);
              if (stream.match(/^\s*:/, false))
                return ["variable-2", "variable-definition"];
              return ["variable-2", "variable"];
            },
            "&": function() {
              return ["atom", "atom"];
            }
          },
          name: "css",
          helperType: "less"
        });
        CodeMirror3.defineMIME("text/x-gss", {
          documentTypes,
          mediaTypes,
          mediaFeatures,
          propertyKeywords,
          nonStandardPropertyKeywords,
          fontProperties,
          counterDescriptors,
          colorKeywords,
          valueKeywords,
          supportsAtComponent: true,
          tokenHooks: {
            "/": function(stream, state) {
              if (!stream.eat("*")) return false;
              state.tokenize = tokenCComment;
              return tokenCComment(stream, state);
            }
          },
          name: "css",
          helperType: "gss"
        });
      });
    }
  });

  // ../../node_modules/codemirror/mode/javascript/javascript.js
  var require_javascript = __commonJS({
    "../../node_modules/codemirror/mode/javascript/javascript.js"(exports, module) {
      (function(mod) {
        if (typeof exports == "object" && typeof module == "object")
          mod(require_codemirror());
        else if (typeof define == "function" && define.amd)
          define(["../../lib/codemirror"], mod);
        else
          mod(CodeMirror);
      })(function(CodeMirror3) {
        "use strict";
        CodeMirror3.defineMode("javascript", function(config, parserConfig) {
          var indentUnit = config.indentUnit;
          var statementIndent = parserConfig.statementIndent;
          var jsonldMode = parserConfig.jsonld;
          var jsonMode = parserConfig.json || jsonldMode;
          var trackScope = parserConfig.trackScope !== false;
          var isTS = parserConfig.typescript;
          var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;
          var keywords = function() {
            function kw(type2) {
              return { type: type2, style: "keyword" };
            }
            var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
            var operator = kw("operator"), atom = { type: "atom", style: "atom" };
            return {
              "if": kw("if"),
              "while": A,
              "with": A,
              "else": B,
              "do": B,
              "try": B,
              "finally": B,
              "return": D,
              "break": D,
              "continue": D,
              "new": kw("new"),
              "delete": C,
              "void": C,
              "throw": C,
              "debugger": kw("debugger"),
              "var": kw("var"),
              "const": kw("var"),
              "let": kw("var"),
              "function": kw("function"),
              "catch": kw("catch"),
              "for": kw("for"),
              "switch": kw("switch"),
              "case": kw("case"),
              "default": kw("default"),
              "in": operator,
              "typeof": operator,
              "instanceof": operator,
              "true": atom,
              "false": atom,
              "null": atom,
              "undefined": atom,
              "NaN": atom,
              "Infinity": atom,
              "this": kw("this"),
              "class": kw("class"),
              "super": kw("atom"),
              "yield": C,
              "export": kw("export"),
              "import": kw("import"),
              "extends": C,
              "await": C
            };
          }();
          var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
          var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
          function readRegexp(stream) {
            var escaped = false, next, inSet = false;
            while ((next = stream.next()) != null) {
              if (!escaped) {
                if (next == "/" && !inSet) return;
                if (next == "[") inSet = true;
                else if (inSet && next == "]") inSet = false;
              }
              escaped = !escaped && next == "\\";
            }
          }
          var type, content;
          function ret(tp, style, cont2) {
            type = tp;
            content = cont2;
            return style;
          }
          function tokenBase(stream, state) {
            var ch = stream.next();
            if (ch == '"' || ch == "'") {
              state.tokenize = tokenString(ch);
              return state.tokenize(stream, state);
            } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
              return ret("number", "number");
            } else if (ch == "." && stream.match("..")) {
              return ret("spread", "meta");
            } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
              return ret(ch);
            } else if (ch == "=" && stream.eat(">")) {
              return ret("=>", "operator");
            } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
              return ret("number", "number");
            } else if (/\d/.test(ch)) {
              stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
              return ret("number", "number");
            } else if (ch == "/") {
              if (stream.eat("*")) {
                state.tokenize = tokenComment;
                return tokenComment(stream, state);
              } else if (stream.eat("/")) {
                stream.skipToEnd();
                return ret("comment", "comment");
              } else if (expressionAllowed(stream, state, 1)) {
                readRegexp(stream);
                stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
                return ret("regexp", "string-2");
              } else {
                stream.eat("=");
                return ret("operator", "operator", stream.current());
              }
            } else if (ch == "`") {
              state.tokenize = tokenQuasi;
              return tokenQuasi(stream, state);
            } else if (ch == "#" && stream.peek() == "!") {
              stream.skipToEnd();
              return ret("meta", "meta");
            } else if (ch == "#" && stream.eatWhile(wordRE)) {
              return ret("variable", "property");
            } else if (ch == "<" && stream.match("!--") || ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start))) {
              stream.skipToEnd();
              return ret("comment", "comment");
            } else if (isOperatorChar.test(ch)) {
              if (ch != ">" || !state.lexical || state.lexical.type != ">") {
                if (stream.eat("=")) {
                  if (ch == "!" || ch == "=") stream.eat("=");
                } else if (/[<>*+\-|&?]/.test(ch)) {
                  stream.eat(ch);
                  if (ch == ">") stream.eat(ch);
                }
              }
              if (ch == "?" && stream.eat(".")) return ret(".");
              return ret("operator", "operator", stream.current());
            } else if (wordRE.test(ch)) {
              stream.eatWhile(wordRE);
              var word = stream.current();
              if (state.lastType != ".") {
                if (keywords.propertyIsEnumerable(word)) {
                  var kw = keywords[word];
                  return ret(kw.type, kw.style, word);
                }
                if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
                  return ret("async", "keyword", word);
              }
              return ret("variable", "variable", word);
            }
          }
          function tokenString(quote) {
            return function(stream, state) {
              var escaped = false, next;
              if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)) {
                state.tokenize = tokenBase;
                return ret("jsonld-keyword", "meta");
              }
              while ((next = stream.next()) != null) {
                if (next == quote && !escaped) break;
                escaped = !escaped && next == "\\";
              }
              if (!escaped) state.tokenize = tokenBase;
              return ret("string", "string");
            };
          }
          function tokenComment(stream, state) {
            var maybeEnd = false, ch;
            while (ch = stream.next()) {
              if (ch == "/" && maybeEnd) {
                state.tokenize = tokenBase;
                break;
              }
              maybeEnd = ch == "*";
            }
            return ret("comment", "comment");
          }
          function tokenQuasi(stream, state) {
            var escaped = false, next;
            while ((next = stream.next()) != null) {
              if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
                state.tokenize = tokenBase;
                break;
              }
              escaped = !escaped && next == "\\";
            }
            return ret("quasi", "string-2", stream.current());
          }
          var brackets = "([{}])";
          function findFatArrow(stream, state) {
            if (state.fatArrowAt) state.fatArrowAt = null;
            var arrow = stream.string.indexOf("=>", stream.start);
            if (arrow < 0) return;
            if (isTS) {
              var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));
              if (m) arrow = m.index;
            }
            var depth = 0, sawSomething = false;
            for (var pos = arrow - 1; pos >= 0; --pos) {
              var ch = stream.string.charAt(pos);
              var bracket = brackets.indexOf(ch);
              if (bracket >= 0 && bracket < 3) {
                if (!depth) {
                  ++pos;
                  break;
                }
                if (--depth == 0) {
                  if (ch == "(") sawSomething = true;
                  break;
                }
              } else if (bracket >= 3 && bracket < 6) {
                ++depth;
              } else if (wordRE.test(ch)) {
                sawSomething = true;
              } else if (/["'\/`]/.test(ch)) {
                for (; ; --pos) {
                  if (pos == 0) return;
                  var next = stream.string.charAt(pos - 1);
                  if (next == ch && stream.string.charAt(pos - 2) != "\\") {
                    pos--;
                    break;
                  }
                }
              } else if (sawSomething && !depth) {
                ++pos;
                break;
              }
            }
            if (sawSomething && !depth) state.fatArrowAt = pos;
          }
          var atomicTypes = {
            "atom": true,
            "number": true,
            "variable": true,
            "string": true,
            "regexp": true,
            "this": true,
            "import": true,
            "jsonld-keyword": true
          };
          function JSLexical(indented, column, type2, align, prev, info) {
            this.indented = indented;
            this.column = column;
            this.type = type2;
            this.prev = prev;
            this.info = info;
            if (align != null) this.align = align;
          }
          function inScope(state, varname) {
            if (!trackScope) return false;
            for (var v = state.localVars; v; v = v.next)
              if (v.name == varname) return true;
            for (var cx2 = state.context; cx2; cx2 = cx2.prev) {
              for (var v = cx2.vars; v; v = v.next)
                if (v.name == varname) return true;
            }
          }
          function parseJS(state, style, type2, content2, stream) {
            var cc = state.cc;
            cx.state = state;
            cx.stream = stream;
            cx.marked = null, cx.cc = cc;
            cx.style = style;
            if (!state.lexical.hasOwnProperty("align"))
              state.lexical.align = true;
            while (true) {
              var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
              if (combinator(type2, content2)) {
                while (cc.length && cc[cc.length - 1].lex)
                  cc.pop()();
                if (cx.marked) return cx.marked;
                if (type2 == "variable" && inScope(state, content2)) return "variable-2";
                return style;
              }
            }
          }
          var cx = { state: null, column: null, marked: null, cc: null };
          function pass() {
            for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
          }
          function cont() {
            pass.apply(null, arguments);
            return true;
          }
          function inList(name, list) {
            for (var v = list; v; v = v.next) if (v.name == name) return true;
            return false;
          }
          function register(varname) {
            var state = cx.state;
            cx.marked = "def";
            if (!trackScope) return;
            if (state.context) {
              if (state.lexical.info == "var" && state.context && state.context.block) {
                var newContext = registerVarScoped(varname, state.context);
                if (newContext != null) {
                  state.context = newContext;
                  return;
                }
              } else if (!inList(varname, state.localVars)) {
                state.localVars = new Var(varname, state.localVars);
                return;
              }
            }
            if (parserConfig.globalVars && !inList(varname, state.globalVars))
              state.globalVars = new Var(varname, state.globalVars);
          }
          function registerVarScoped(varname, context) {
            if (!context) {
              return null;
            } else if (context.block) {
              var inner = registerVarScoped(varname, context.prev);
              if (!inner) return null;
              if (inner == context.prev) return context;
              return new Context(inner, context.vars, true);
            } else if (inList(varname, context.vars)) {
              return context;
            } else {
              return new Context(context.prev, new Var(varname, context.vars), false);
            }
          }
          function isModifier(name) {
            return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly";
          }
          function Context(prev, vars, block2) {
            this.prev = prev;
            this.vars = vars;
            this.block = block2;
          }
          function Var(name, next) {
            this.name = name;
            this.next = next;
          }
          var defaultVars = new Var("this", new Var("arguments", null));
          function pushcontext() {
            cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
            cx.state.localVars = defaultVars;
          }
          function pushblockcontext() {
            cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
            cx.state.localVars = null;
          }
          pushcontext.lex = pushblockcontext.lex = true;
          function popcontext() {
            cx.state.localVars = cx.state.context.vars;
            cx.state.context = cx.state.context.prev;
          }
          popcontext.lex = true;
          function pushlex(type2, info) {
            var result = function() {
              var state = cx.state, indent = state.indented;
              if (state.lexical.type == "stat") indent = state.lexical.indented;
              else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
                indent = outer.indented;
              state.lexical = new JSLexical(indent, cx.stream.column(), type2, null, state.lexical, info);
            };
            result.lex = true;
            return result;
          }
          function poplex() {
            var state = cx.state;
            if (state.lexical.prev) {
              if (state.lexical.type == ")")
                state.indented = state.lexical.indented;
              state.lexical = state.lexical.prev;
            }
          }
          poplex.lex = true;
          function expect(wanted) {
            function exp(type2) {
              if (type2 == wanted) return cont();
              else if (wanted == ";" || type2 == "}" || type2 == ")" || type2 == "]") return pass();
              else return cont(exp);
            }
            ;
            return exp;
          }
          function statement(type2, value) {
            if (type2 == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
            if (type2 == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
            if (type2 == "keyword b") return cont(pushlex("form"), statement, poplex);
            if (type2 == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
            if (type2 == "debugger") return cont(expect(";"));
            if (type2 == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
            if (type2 == ";") return cont();
            if (type2 == "if") {
              if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
                cx.state.cc.pop()();
              return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
            }
            if (type2 == "function") return cont(functiondef);
            if (type2 == "for") return cont(pushlex("form"), pushblockcontext, forspec, statement, popcontext, poplex);
            if (type2 == "class" || isTS && value == "interface") {
              cx.marked = "keyword";
              return cont(pushlex("form", type2 == "class" ? type2 : value), className, poplex);
            }
            if (type2 == "variable") {
              if (isTS && value == "declare") {
                cx.marked = "keyword";
                return cont(statement);
              } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
                cx.marked = "keyword";
                if (value == "enum") return cont(enumdef);
                else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
                else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex);
              } else if (isTS && value == "namespace") {
                cx.marked = "keyword";
                return cont(pushlex("form"), expression, statement, poplex);
              } else if (isTS && value == "abstract") {
                cx.marked = "keyword";
                return cont(statement);
              } else {
                return cont(pushlex("stat"), maybelabel);
              }
            }
            if (type2 == "switch") return cont(
              pushlex("form"),
              parenExpr,
              expect("{"),
              pushlex("}", "switch"),
              pushblockcontext,
              block,
              poplex,
              poplex,
              popcontext
            );
            if (type2 == "case") return cont(expression, expect(":"));
            if (type2 == "default") return cont(expect(":"));
            if (type2 == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
            if (type2 == "export") return cont(pushlex("stat"), afterExport, poplex);
            if (type2 == "import") return cont(pushlex("stat"), afterImport, poplex);
            if (type2 == "async") return cont(statement);
            if (value == "@") return cont(expression, statement);
            return pass(pushlex("stat"), expression, expect(";"), poplex);
          }
          function maybeCatchBinding(type2) {
            if (type2 == "(") return cont(funarg, expect(")"));
          }
          function expression(type2, value) {
            return expressionInner(type2, value, false);
          }
          function expressionNoComma(type2, value) {
            return expressionInner(type2, value, true);
          }
          function parenExpr(type2) {
            if (type2 != "(") return pass();
            return cont(pushlex(")"), maybeexpression, expect(")"), poplex);
          }
          function expressionInner(type2, value, noComma) {
            if (cx.state.fatArrowAt == cx.stream.start) {
              var body = noComma ? arrowBodyNoComma : arrowBody;
              if (type2 == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
              else if (type2 == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
            }
            var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
            if (atomicTypes.hasOwnProperty(type2)) return cont(maybeop);
            if (type2 == "function") return cont(functiondef, maybeop);
            if (type2 == "class" || isTS && value == "interface") {
              cx.marked = "keyword";
              return cont(pushlex("form"), classExpression, poplex);
            }
            if (type2 == "keyword c" || type2 == "async") return cont(noComma ? expressionNoComma : expression);
            if (type2 == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
            if (type2 == "operator" || type2 == "spread") return cont(noComma ? expressionNoComma : expression);
            if (type2 == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
            if (type2 == "{") return contCommasep(objprop, "}", null, maybeop);
            if (type2 == "quasi") return pass(quasi, maybeop);
            if (type2 == "new") return cont(maybeTarget(noComma));
            return cont();
          }
          function maybeexpression(type2) {
            if (type2.match(/[;\}\)\],]/)) return pass();
            return pass(expression);
          }
          function maybeoperatorComma(type2, value) {
            if (type2 == ",") return cont(maybeexpression);
            return maybeoperatorNoComma(type2, value, false);
          }
          function maybeoperatorNoComma(type2, value, noComma) {
            var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
            var expr = noComma == false ? expression : expressionNoComma;
            if (type2 == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
            if (type2 == "operator") {
              if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
              if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
                return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
              if (value == "?") return cont(expression, expect(":"), expr);
              return cont(expr);
            }
            if (type2 == "quasi") {
              return pass(quasi, me);
            }
            if (type2 == ";") return;
            if (type2 == "(") return contCommasep(expressionNoComma, ")", "call", me);
            if (type2 == ".") return cont(property, me);
            if (type2 == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
            if (isTS && value == "as") {
              cx.marked = "keyword";
              return cont(typeexpr, me);
            }
            if (type2 == "regexp") {
              cx.state.lastType = cx.marked = "operator";
              cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
              return cont(expr);
            }
          }
          function quasi(type2, value) {
            if (type2 != "quasi") return pass();
            if (value.slice(value.length - 2) != "${") return cont(quasi);
            return cont(maybeexpression, continueQuasi);
          }
          function continueQuasi(type2) {
            if (type2 == "}") {
              cx.marked = "string-2";
              cx.state.tokenize = tokenQuasi;
              return cont(quasi);
            }
          }
          function arrowBody(type2) {
            findFatArrow(cx.stream, cx.state);
            return pass(type2 == "{" ? statement : expression);
          }
          function arrowBodyNoComma(type2) {
            findFatArrow(cx.stream, cx.state);
            return pass(type2 == "{" ? statement : expressionNoComma);
          }
          function maybeTarget(noComma) {
            return function(type2) {
              if (type2 == ".") return cont(noComma ? targetNoComma : target);
              else if (type2 == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma);
              else return pass(noComma ? expressionNoComma : expression);
            };
          }
          function target(_2, value) {
            if (value == "target") {
              cx.marked = "keyword";
              return cont(maybeoperatorComma);
            }
          }
          function targetNoComma(_2, value) {
            if (value == "target") {
              cx.marked = "keyword";
              return cont(maybeoperatorNoComma);
            }
          }
          function maybelabel(type2) {
            if (type2 == ":") return cont(poplex, statement);
            return pass(maybeoperatorComma, expect(";"), poplex);
          }
          function property(type2) {
            if (type2 == "variable") {
              cx.marked = "property";
              return cont();
            }
          }
          function objprop(type2, value) {
            if (type2 == "async") {
              cx.marked = "property";
              return cont(objprop);
            } else if (type2 == "variable" || cx.style == "keyword") {
              cx.marked = "property";
              if (value == "get" || value == "set") return cont(getterSetter);
              var m;
              if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
                cx.state.fatArrowAt = cx.stream.pos + m[0].length;
              return cont(afterprop);
            } else if (type2 == "number" || type2 == "string") {
              cx.marked = jsonldMode ? "property" : cx.style + " property";
              return cont(afterprop);
            } else if (type2 == "jsonld-keyword") {
              return cont(afterprop);
            } else if (isTS && isModifier(value)) {
              cx.marked = "keyword";
              return cont(objprop);
            } else if (type2 == "[") {
              return cont(expression, maybetype, expect("]"), afterprop);
            } else if (type2 == "spread") {
              return cont(expressionNoComma, afterprop);
            } else if (value == "*") {
              cx.marked = "keyword";
              return cont(objprop);
            } else if (type2 == ":") {
              return pass(afterprop);
            }
          }
          function getterSetter(type2) {
            if (type2 != "variable") return pass(afterprop);
            cx.marked = "property";
            return cont(functiondef);
          }
          function afterprop(type2) {
            if (type2 == ":") return cont(expressionNoComma);
            if (type2 == "(") return pass(functiondef);
          }
          function commasep(what, end, sep) {
            function proceed(type2, value) {
              if (sep ? sep.indexOf(type2) > -1 : type2 == ",") {
                var lex = cx.state.lexical;
                if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
                return cont(function(type3, value2) {
                  if (type3 == end || value2 == end) return pass();
                  return pass(what);
                }, proceed);
              }
              if (type2 == end || value == end) return cont();
              if (sep && sep.indexOf(";") > -1) return pass(what);
              return cont(expect(end));
            }
            return function(type2, value) {
              if (type2 == end || value == end) return cont();
              return pass(what, proceed);
            };
          }
          function contCommasep(what, end, info) {
            for (var i = 3; i < arguments.length; i++)
              cx.cc.push(arguments[i]);
            return cont(pushlex(end, info), commasep(what, end), poplex);
          }
          function block(type2) {
            if (type2 == "}") return cont();
            return pass(statement, block);
          }
          function maybetype(type2, value) {
            if (isTS) {
              if (type2 == ":") return cont(typeexpr);
              if (value == "?") return cont(maybetype);
            }
          }
          function maybetypeOrIn(type2, value) {
            if (isTS && (type2 == ":" || value == "in")) return cont(typeexpr);
          }
          function mayberettype(type2) {
            if (isTS && type2 == ":") {
              if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr);
              else return cont(typeexpr);
            }
          }
          function isKW(_2, value) {
            if (value == "is") {
              cx.marked = "keyword";
              return cont();
            }
          }
          function typeexpr(type2, value) {
            if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
              cx.marked = "keyword";
              return cont(value == "typeof" ? expressionNoComma : typeexpr);
            }
            if (type2 == "variable" || value == "void") {
              cx.marked = "type";
              return cont(afterType);
            }
            if (value == "|" || value == "&") return cont(typeexpr);
            if (type2 == "string" || type2 == "number" || type2 == "atom") return cont(afterType);
            if (type2 == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType);
            if (type2 == "{") return cont(pushlex("}"), typeprops, poplex, afterType);
            if (type2 == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType);
            if (type2 == "<") return cont(commasep(typeexpr, ">"), typeexpr);
            if (type2 == "quasi") {
              return pass(quasiType, afterType);
            }
          }
          function maybeReturnType(type2) {
            if (type2 == "=>") return cont(typeexpr);
          }
          function typeprops(type2) {
            if (type2.match(/[\}\)\]]/)) return cont();
            if (type2 == "," || type2 == ";") return cont(typeprops);
            return pass(typeprop, typeprops);
          }
          function typeprop(type2, value) {
            if (type2 == "variable" || cx.style == "keyword") {
              cx.marked = "property";
              return cont(typeprop);
            } else if (value == "?" || type2 == "number" || type2 == "string") {
              return cont(typeprop);
            } else if (type2 == ":") {
              return cont(typeexpr);
            } else if (type2 == "[") {
              return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop);
            } else if (type2 == "(") {
              return pass(functiondecl, typeprop);
            } else if (!type2.match(/[;\}\)\],]/)) {
              return cont();
            }
          }
          function quasiType(type2, value) {
            if (type2 != "quasi") return pass();
            if (value.slice(value.length - 2) != "${") return cont(quasiType);
            return cont(typeexpr, continueQuasiType);
          }
          function continueQuasiType(type2) {
            if (type2 == "}") {
              cx.marked = "string-2";
              cx.state.tokenize = tokenQuasi;
              return cont(quasiType);
            }
          }
          function typearg(type2, value) {
            if (type2 == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg);
            if (type2 == ":") return cont(typeexpr);
            if (type2 == "spread") return cont(typearg);
            return pass(typeexpr);
          }
          function afterType(type2, value) {
            if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
            if (value == "|" || type2 == "." || value == "&") return cont(typeexpr);
            if (type2 == "[") return cont(typeexpr, expect("]"), afterType);
            if (value == "extends" || value == "implements") {
              cx.marked = "keyword";
              return cont(typeexpr);
            }
            if (value == "?") return cont(typeexpr, expect(":"), typeexpr);
          }
          function maybeTypeArgs(_2, value) {
            if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
          }
          function typeparam() {
            return pass(typeexpr, maybeTypeDefault);
          }
          function maybeTypeDefault(_2, value) {
            if (value == "=") return cont(typeexpr);
          }
          function vardef(_2, value) {
            if (value == "enum") {
              cx.marked = "keyword";
              return cont(enumdef);
            }
            return pass(pattern, maybetype, maybeAssign, vardefCont);
          }
          function pattern(type2, value) {
            if (isTS && isModifier(value)) {
              cx.marked = "keyword";
              return cont(pattern);
            }
            if (type2 == "variable") {
              register(value);
              return cont();
            }
            if (type2 == "spread") return cont(pattern);
            if (type2 == "[") return contCommasep(eltpattern, "]");
            if (type2 == "{") return contCommasep(proppattern, "}");
          }
          function proppattern(type2, value) {
            if (type2 == "variable" && !cx.stream.match(/^\s*:/, false)) {
              register(value);
              return cont(maybeAssign);
            }
            if (type2 == "variable") cx.marked = "property";
            if (type2 == "spread") return cont(pattern);
            if (type2 == "}") return pass();
            if (type2 == "[") return cont(expression, expect("]"), expect(":"), proppattern);
            return cont(expect(":"), pattern, maybeAssign);
          }
          function eltpattern() {
            return pass(pattern, maybeAssign);
          }
          function maybeAssign(_type, value) {
            if (value == "=") return cont(expressionNoComma);
          }
          function vardefCont(type2) {
            if (type2 == ",") return cont(vardef);
          }
          function maybeelse(type2, value) {
            if (type2 == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
          }
          function forspec(type2, value) {
            if (value == "await") return cont(forspec);
            if (type2 == "(") return cont(pushlex(")"), forspec1, poplex);
          }
          function forspec1(type2) {
            if (type2 == "var") return cont(vardef, forspec2);
            if (type2 == "variable") return cont(forspec2);
            return pass(forspec2);
          }
          function forspec2(type2, value) {
            if (type2 == ")") return cont();
            if (type2 == ";") return cont(forspec2);
            if (value == "in" || value == "of") {
              cx.marked = "keyword";
              return cont(expression, forspec2);
            }
            return pass(expression, forspec2);
          }
          function functiondef(type2, value) {
            if (value == "*") {
              cx.marked = "keyword";
              return cont(functiondef);
            }
            if (type2 == "variable") {
              register(value);
              return cont(functiondef);
            }
            if (type2 == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
            if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef);
          }
          function functiondecl(type2, value) {
            if (value == "*") {
              cx.marked = "keyword";
              return cont(functiondecl);
            }
            if (type2 == "variable") {
              register(value);
              return cont(functiondecl);
            }
            if (type2 == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
            if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl);
          }
          function typename(type2, value) {
            if (type2 == "keyword" || type2 == "variable") {
              cx.marked = "type";
              return cont(typename);
            } else if (value == "<") {
              return cont(pushlex(">"), commasep(typeparam, ">"), poplex);
            }
          }
          function funarg(type2, value) {
            if (value == "@") cont(expression, funarg);
            if (type2 == "spread") return cont(funarg);
            if (isTS && isModifier(value)) {
              cx.marked = "keyword";
              return cont(funarg);
            }
            if (isTS && type2 == "this") return cont(maybetype, maybeAssign);
            return pass(pattern, maybetype, maybeAssign);
          }
          function classExpression(type2, value) {
            if (type2 == "variable") return className(type2, value);
            return classNameAfter(type2, value);
          }
          function className(type2, value) {
            if (type2 == "variable") {
              register(value);
              return cont(classNameAfter);
            }
          }
          function classNameAfter(type2, value) {
            if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter);
            if (value == "extends" || value == "implements" || isTS && type2 == ",") {
              if (value == "implements") cx.marked = "keyword";
              return cont(isTS ? typeexpr : expression, classNameAfter);
            }
            if (type2 == "{") return cont(pushlex("}"), classBody, poplex);
          }
          function classBody(type2, value) {
            if (type2 == "async" || type2 == "variable" && (value == "static" || value == "get" || value == "set" || isTS && isModifier(value)) && cx.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false)) {
              cx.marked = "keyword";
              return cont(classBody);
            }
            if (type2 == "variable" || cx.style == "keyword") {
              cx.marked = "property";
              return cont(classfield, classBody);
            }
            if (type2 == "number" || type2 == "string") return cont(classfield, classBody);
            if (type2 == "[")
              return cont(expression, maybetype, expect("]"), classfield, classBody);
            if (value == "*") {
              cx.marked = "keyword";
              return cont(classBody);
            }
            if (isTS && type2 == "(") return pass(functiondecl, classBody);
            if (type2 == ";" || type2 == ",") return cont(classBody);
            if (type2 == "}") return cont();
            if (value == "@") return cont(expression, classBody);
          }
          function classfield(type2, value) {
            if (value == "!") return cont(classfield);
            if (value == "?") return cont(classfield);
            if (type2 == ":") return cont(typeexpr, maybeAssign);
            if (value == "=") return cont(expressionNoComma);
            var context = cx.state.lexical.prev, isInterface = context && context.info == "interface";
            return pass(isInterface ? functiondecl : functiondef);
          }
          function afterExport(type2, value) {
            if (value == "*") {
              cx.marked = "keyword";
              return cont(maybeFrom, expect(";"));
            }
            if (value == "default") {
              cx.marked = "keyword";
              return cont(expression, expect(";"));
            }
            if (type2 == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
            return pass(statement);
          }
          function exportField(type2, value) {
            if (value == "as") {
              cx.marked = "keyword";
              return cont(expect("variable"));
            }
            if (type2 == "variable") return pass(expressionNoComma, exportField);
          }
          function afterImport(type2) {
            if (type2 == "string") return cont();
            if (type2 == "(") return pass(expression);
            if (type2 == ".") return pass(maybeoperatorComma);
            return pass(importSpec, maybeMoreImports, maybeFrom);
          }
          function importSpec(type2, value) {
            if (type2 == "{") return contCommasep(importSpec, "}");
            if (type2 == "variable") register(value);
            if (value == "*") cx.marked = "keyword";
            return cont(maybeAs);
          }
          function maybeMoreImports(type2) {
            if (type2 == ",") return cont(importSpec, maybeMoreImports);
          }
          function maybeAs(_type, value) {
            if (value == "as") {
              cx.marked = "keyword";
              return cont(importSpec);
            }
          }
          function maybeFrom(_type, value) {
            if (value == "from") {
              cx.marked = "keyword";
              return cont(expression);
            }
          }
          function arrayLiteral(type2) {
            if (type2 == "]") return cont();
            return pass(commasep(expressionNoComma, "]"));
          }
          function enumdef() {
            return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex);
          }
          function enummember() {
            return pass(pattern, maybeAssign);
          }
          function isContinuedStatement(state, textAfter) {
            return state.lastType == "operator" || state.lastType == "," || isOperatorChar.test(textAfter.charAt(0)) || /[,.]/.test(textAfter.charAt(0));
          }
          function expressionAllowed(stream, state, backUp) {
            return state.tokenize == tokenBase && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) || state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0)));
          }
          return {
            startState: function(basecolumn) {
              var state = {
                tokenize: tokenBase,
                lastType: "sof",
                cc: [],
                lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
                localVars: parserConfig.localVars,
                context: parserConfig.localVars && new Context(null, null, false),
                indented: basecolumn || 0
              };
              if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
                state.globalVars = parserConfig.globalVars;
              return state;
            },
            token: function(stream, state) {
              if (stream.sol()) {
                if (!state.lexical.hasOwnProperty("align"))
                  state.lexical.align = false;
                state.indented = stream.indentation();
                findFatArrow(stream, state);
              }
              if (state.tokenize != tokenComment && stream.eatSpace()) return null;
              var style = state.tokenize(stream, state);
              if (type == "comment") return style;
              state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
              return parseJS(state, style, type, content, stream);
            },
            indent: function(state, textAfter) {
              if (state.tokenize == tokenComment || state.tokenize == tokenQuasi) return CodeMirror3.Pass;
              if (state.tokenize != tokenBase) return 0;
              var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top;
              if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
                var c = state.cc[i];
                if (c == poplex) lexical = lexical.prev;
                else if (c != maybeelse && c != popcontext) break;
              }
              while ((lexical.type == "stat" || lexical.type == "form") && (firstChar == "}" || (top = state.cc[state.cc.length - 1]) && (top == maybeoperatorComma || top == maybeoperatorNoComma) && !/^[,\.=+\-*:?[\(]/.test(textAfter)))
                lexical = lexical.prev;
              if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
                lexical = lexical.prev;
              var type2 = lexical.type, closing = firstChar == type2;
              if (type2 == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
              else if (type2 == "form" && firstChar == "{") return lexical.indented;
              else if (type2 == "form") return lexical.indented + indentUnit;
              else if (type2 == "stat")
                return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
              else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
                return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
              else if (lexical.align) return lexical.column + (closing ? 0 : 1);
              else return lexical.indented + (closing ? 0 : indentUnit);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: jsonMode ? null : "/*",
            blockCommentEnd: jsonMode ? null : "*/",
            blockCommentContinue: jsonMode ? null : " * ",
            lineComment: jsonMode ? null : "//",
            fold: "brace",
            closeBrackets: "()[]{}''\"\"``",
            helperType: jsonMode ? "json" : "javascript",
            jsonldMode,
            jsonMode,
            expressionAllowed,
            skipExpression: function(state) {
              parseJS(state, "atom", "atom", "true", new CodeMirror3.StringStream("", 2, null));
            }
          };
        });
        CodeMirror3.registerHelper("wordChars", "javascript", /[\w$]/);
        CodeMirror3.defineMIME("text/javascript", "javascript");
        CodeMirror3.defineMIME("text/ecmascript", "javascript");
        CodeMirror3.defineMIME("application/javascript", "javascript");
        CodeMirror3.defineMIME("application/x-javascript", "javascript");
        CodeMirror3.defineMIME("application/ecmascript", "javascript");
        CodeMirror3.defineMIME("application/json", { name: "javascript", json: true });
        CodeMirror3.defineMIME("application/x-json", { name: "javascript", json: true });
        CodeMirror3.defineMIME("application/manifest+json", { name: "javascript", json: true });
        CodeMirror3.defineMIME("application/ld+json", { name: "javascript", jsonld: true });
        CodeMirror3.defineMIME("text/typescript", { name: "javascript", typescript: true });
        CodeMirror3.defineMIME("application/typescript", { name: "javascript", typescript: true });
      });
    }
  });

  // ../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js
  var require_htmlmixed = __commonJS({
    "../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js"(exports, module) {
      (function(mod) {
        if (typeof exports == "object" && typeof module == "object")
          mod(require_codemirror(), require_xml(), require_javascript(), require_css());
        else if (typeof define == "function" && define.amd)
          define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
        else
          mod(CodeMirror);
      })(function(CodeMirror3) {
        "use strict";
        var defaultTags = {
          script: [
            ["lang", /(javascript|babel)/i, "javascript"],
            ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
            ["type", /./, "text/plain"],
            [null, null, "javascript"]
          ],
          style: [
            ["lang", /^css$/i, "css"],
            ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
            ["type", /./, "text/plain"],
            [null, null, "css"]
          ]
        };
        function maybeBackup(stream, pat, style) {
          var cur = stream.current(), close = cur.search(pat);
          if (close > -1) {
            stream.backUp(cur.length - close);
          } else if (cur.match(/<\/?$/)) {
            stream.backUp(cur.length);
            if (!stream.match(pat, false)) stream.match(cur);
          }
          return style;
        }
        var attrRegexpCache = {};
        function getAttrRegexp(attr) {
          var regexp = attrRegexpCache[attr];
          if (regexp) return regexp;
          return attrRegexpCache[attr] = new RegExp("\\s+" + attr + `\\s*=\\s*('|")?([^'"]+)('|")?\\s*`);
        }
        function getAttrValue(text, attr) {
          var match = text.match(getAttrRegexp(attr));
          return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : "";
        }
        function getTagRegexp(tagName, anchored) {
          return new RegExp((anchored ? "^" : "") + "</\\s*" + tagName + "\\s*>", "i");
        }
        function addTags(from, to) {
          for (var tag in from) {
            var dest = to[tag] || (to[tag] = []);
            var source = from[tag];
            for (var i = source.length - 1; i >= 0; i--)
              dest.unshift(source[i]);
          }
        }
        function findMatchingMode(tagInfo, tagText) {
          for (var i = 0; i < tagInfo.length; i++) {
            var spec = tagInfo[i];
            if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
          }
        }
        CodeMirror3.defineMode("htmlmixed", function(config, parserConfig) {
          var htmlMode = CodeMirror3.getMode(config, {
            name: "xml",
            htmlMode: true,
            multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
            multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag,
            allowMissingTagName: parserConfig.allowMissingTagName
          });
          var tags = {};
          var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
          addTags(defaultTags, tags);
          if (configTags) addTags(configTags, tags);
          if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
            tags.script.unshift(["type", configScript[i].matches, configScript[i].mode]);
          function html(stream, state) {
            var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName;
            if (tag && !/[<>\s\/]/.test(stream.current()) && (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) && tags.hasOwnProperty(tagName)) {
              state.inTag = tagName + " ";
            } else if (state.inTag && tag && />$/.test(stream.current())) {
              var inTag = /^([\S]+) (.*)/.exec(state.inTag);
              state.inTag = null;
              var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2]);
              var mode = CodeMirror3.getMode(config, modeSpec);
              var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
              state.token = function(stream2, state2) {
                if (stream2.match(endTagA, false)) {
                  state2.token = html;
                  state2.localState = state2.localMode = null;
                  return null;
                }
                return maybeBackup(stream2, endTag, state2.localMode.token(stream2, state2.localState));
              };
              state.localMode = mode;
              state.localState = CodeMirror3.startState(mode, htmlMode.indent(state.htmlState, "", ""));
            } else if (state.inTag) {
              state.inTag += stream.current();
              if (stream.eol()) state.inTag += " ";
            }
            return style;
          }
          ;
          return {
            startState: function() {
              var state = CodeMirror3.startState(htmlMode);
              return { token: html, inTag: null, localMode: null, localState: null, htmlState: state };
            },
            copyState: function(state) {
              var local;
              if (state.localState) {
                local = CodeMirror3.copyState(state.localMode, state.localState);
              }
              return {
                token: state.token,
                inTag: state.inTag,
                localMode: state.localMode,
                localState: local,
                htmlState: CodeMirror3.copyState(htmlMode, state.htmlState)
              };
            },
            token: function(stream, state) {
              return state.token(stream, state);
            },
            indent: function(state, textAfter, line) {
              if (!state.localMode || /^\s*<\//.test(textAfter))
                return htmlMode.indent(state.htmlState, textAfter, line);
              else if (state.localMode.indent)
                return state.localMode.indent(state.localState, textAfter, line);
              else
                return CodeMirror3.Pass;
            },
            innerMode: function(state) {
              return { state: state.localState || state.htmlState, mode: state.localMode || htmlMode };
            }
          };
        }, "xml", "javascript", "css");
        CodeMirror3.defineMIME("text/html", "htmlmixed");
      });
    }
  });

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\field\editor.ink
  var editor_exports = {};
  __export(editor_exports, {
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

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\field\editor.ink
  var import_Registry16 = __toESM(require_Registry());
  var import_Component16 = __toESM(require_Component());
  var import_StyleSet11 = __toESM(require_StyleSet());
  var import_display3 = __toESM(require_display());
  var import_codemirror = __toESM(require_codemirror());
  var Editor_015bbef1a0403600489f = class extends import_Component16.default {
    static id = "015bbef1a0403600489f";
    static tagname = "editor";
    static classname = "Editor_015bbef1a0403600489f";
    styles() {
      return `.CodeMirror {
    font-family: monospace;
    height: 100%;
    color: black;
  }

  .CodeMirror-lines {
    padding: 4px 0;
  }
  .CodeMirror pre {
    padding: 0 4px;
  }

  .CodeMirror-scrollbar-filler, 
  .CodeMirror-gutter-filler {
    background-color: white; 
  }

  .CodeMirror-gutters {
    border-right: 1px solid #DDDDDD;
    background-color: #F7F7F7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {}
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker { 
    color: black; 
  }
  .CodeMirror-guttermarker-subtle { 
    color: #999999; 
  }

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0;
    background: #77EE77;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }

  .cm-animate-fat-cursor {
    -moz-animation: blink 1.06s steps(1) infinite;
    -webkit-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    border: 0;
    background-color: #77EE77;
    width: auto;
  }
  @-moz-keyframes blink {
    0% {}
    50% { 
      background-color: transparent; 
    }
    100% {}
  }
  @-webkit-keyframes blink {
    0% {}
    50% { 
      background-color: transparent; 
    }
    100% {}
  }
  @keyframes blink {
    0% {}
    50% { 
      background-color: transparent; 
    }
    100% {}
  }

  .CodeMirror-overwrite .CodeMirror-cursor {}

  .cm-tab { 
    display: inline-block; 
    text-decoration: inherit; 
  }

  .CodeMirror-ruler {
    border-left: 1px solid #CCCCCC;
    position: absolute;
  }

  .cm-s-default .cm-header {
    color: blue;
  }
  .cm-s-default .cm-quote {
    color: #009900;
  }
  .cm-negative {
    color: #DD4444;
  }
  .cm-positive {
    color: #229922;
  }
  .cm-header, .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .cm-s-default .cm-keyword {
    color: #770088;
  }
  .cm-s-default .cm-atom {
    color: #221199;
  }
  .cm-s-default .cm-number {
    color: #116644;
  }
  .cm-s-default .cm-def {
    color: #0000FF;
  }
  .cm-s-default .cm-variable,
  .cm-s-default .cm-punctuation,
  .cm-s-default .cm-property,
  .cm-s-default .cm-operator {}
  .cm-s-default .cm-variable-2 {
    color: #0055AA;
  }
  .cm-s-default .cm-variable-3 {
    color: #008855;
  }
  .cm-s-default .cm-comment {
    color: #AA5500;
  }
  .cm-s-default .cm-string {
    color: #AA1111;
  }
  .cm-s-default .cm-string-2 {
    color: #FF5500;
  }
  .cm-s-default .cm-meta {
    color: #555555;
  }
  .cm-s-default .cm-qualifier {
    color: #555555;
  }
  .cm-s-default .cm-builtin {
    color: #3300AA;
  }
  .cm-s-default .cm-bracket {
    color: #999977;
  }
  .cm-s-default .cm-tag {
    color: #117700;
  }
  .cm-s-default .cm-attribute {
    color: #0000CC;
  }
  .cm-s-default .cm-hr {
    color: #999999;
  }
  .cm-s-default .cm-link {
    color: #0000CC;
  }

  .cm-s-default .cm-error {
    color: #FF0000;
  }
  .cm-invalidchar {
    color: #FF0000;
  }

  .CodeMirror-composing { 
    border-bottom: 2px solid; 
  }

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #00FF00;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #FF2222;
  }
  .CodeMirror-matchingtag { 
    background: rgba(255, 150, 0, .3); 
  }
  .CodeMirror-activeline-background {
    background: #E8F2FF;
  }

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: white;
  }

  .CodeMirror-scroll {
    overflow: scroll !important; 
    margin-bottom: -30px; margin-right: -30px;
    padding-bottom: 30px;
    height: 100%;
    outline: none; 
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
  }

  .CodeMirror-vscrollbar, 
  .CodeMirror-hscrollbar, 
  .CodeMirror-scrollbar-filler, 
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0; top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0; left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0; bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0; bottom: 0;
  }

  .CodeMirror-gutters {
    position: absolute; left: 0; top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -30px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0; bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px;
  }
  .CodeMirror pre {
    -moz-border-radius: 0; 
    -webkit-border-radius: 0; 
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
  }
  .CodeMirror-wrap pre {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    overflow: auto;
  }

  .CodeMirror-widget {}

  .CodeMirror-code {
    outline: none;
  }

  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor { 
    position: absolute; 
  }
  .CodeMirror-measure pre { 
    position: static; 
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected { 
    background: #D9D9D9; 
  }
  .CodeMirror-focused .CodeMirror-selected { 
    background: #D7D4F0; 
  }
  .CodeMirror-crosshair { 
    cursor: crosshair; 
  }
  .CodeMirror-line::selection, 
  .CodeMirror-line > span::selection, 
  .CodeMirror-line > span > span::selection { 
    background: #D7D4F0; 
  }
  .CodeMirror-line::-moz-selection, 
  .CodeMirror-line > span::-moz-selection, 
  .CodeMirror-line > span > span::-moz-selection { 
    background: #D7D4F0; 
  }

  .cm-searching {
    background: #FFFFAA;
    background: rgba(255, 255, 0, .4);
  }

  .cm-force-border { 
    padding-right: .1px; 
  }

  @media print {
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }

  .cm-tab-wrap-hack:after { 
    content: ''; 
  }

  span.CodeMirror-selectedtext { 
    background: none; 
  }`;
    }
    template() {
      const {
        lang = "htmlmixed",
        numbers,
        change,
        update,
        value,
        //dont need these...
        style,
        "class": _2,
        //input attributes
        ...attributes
      } = this.props;
      const styles = new import_StyleSet11.default();
      const css = this.styles();
      this.styles = () => css + styles.toString();
      (0, import_display3.default)(this.props, styles, "block", ":host");
      const children4 = this.originalChildren;
      const handlers = {
        update: (textarea, value2) => {
          textarea.value = value2;
          textarea.dispatchEvent(new Event("change", { bubbles: true }));
        },
        change: (e) => {
          const textarea = this.querySelector("textarea");
          if (textarea) {
            textarea.value = e.target.value;
          }
          change && change(e);
          update && update(e.target.value);
        },
        init: (mode, textarea) => {
          const defaultValue = textarea.value || value;
          this._editor = import_codemirror.default.fromTextArea(textarea, {
            mode,
            lineNumbers: numbers,
            tabSize: 2
          });
          defaultValue && this._editor.setValue(defaultValue);
          this._editor.on("change", () => handlers.update(
            textarea,
            this._editor.getValue()
          ));
        },
        mount: () => {
          const textarea = this.shadowRoot?.querySelector("textarea");
          if (!textarea) return;
          switch (lang) {
            case "md":
            case "markdown":
              Promise.resolve().then(() => __toESM(require_markdown())).then(() => handlers.init("markdown", textarea));
              break;
            case "css":
              Promise.resolve().then(() => __toESM(require_css())).then(() => handlers.init("css", textarea));
              break;
            case "js":
            case "javascript":
              Promise.resolve().then(() => __toESM(require_javascript())).then(() => handlers.init("javascript", textarea));
              break;
            case "json":
              Promise.resolve().then(() => __toESM(require_javascript())).then(() => handlers.init("application/json", textarea));
              break;
            case "ts":
            case "typescript":
              Promise.resolve().then(() => __toESM(require_javascript())).then(() => handlers.init("application/typescript", textarea));
              break;
            case "html":
            case "htmlmixed":
            default:
              Promise.resolve().then(() => __toESM(require_htmlmixed())).then(() => handlers.init("htmlmixed", textarea));
              break;
          }
        }
      };
      return () => [
        import_Registry16.default.createText(`
`, false),
        import_Registry16.default.createElement("template", { "type": `light` }, [
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("textarea", { ...attributes, "value": value }, [
            ...this._toNodeList(children4)
          ]).element,
          import_Registry16.default.createText(`
`, false)
        ]).element,
        import_Registry16.default.createText(`
`, false),
        import_Registry16.default.createElement("template", { "type": `shadow` }, [
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("textarea", { ...attributes, "mount": handlers.mount, "change": handlers.change, "value": value }, [
            ...this._toNodeList(children4)
          ]).element,
          import_Registry16.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\field\editor.ink
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
        { label: "Editor" }
      ];
      const handleChange = (e) => console.log("Change event:", e.target.value);
      const handleUpdate = (value) => console.log("Updated content:", value);
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
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#Editor` }, [
                      ...this._toNodeList(_("Editor"))
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
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#basicEditor` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Basic Editor (name)"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#editorWithValue` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Editor with Value"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#editorWithLang` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Editor with Lang"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#editorWithNumbers` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Editor with Numbers"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#changeEditor` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Editor with Change"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#updateEditor` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Editor with Update"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#styledEditor` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Styled Editor (class, style)"))
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
                  import_Document.default.createElement("a", { "name": `Editor` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Editor"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Editor`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "lang": `js`, "trim": true }, [
                      import_Document.default.createText(`
              import Editor from '@stackpress/ink-ui/field/editor';
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
                      ...this._toNodeList(_("Notes"))
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
                        ...this._toNodeList(_("Name attribute for form submission, passed to textarea."))
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
                        import_Document.default.createText(`lang`, false)
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
                        ...this._toNodeList(_('Editor mode: "htmlmixed" (default), "markdown", "css", "javascript", "json", "typescript".'))
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
                        import_Document.default.createText(`numbers`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Boolean`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("If present, enables line numbers in the editor."))
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
                        ...this._toNodeList(_("Initial content for the editor; overrides child content if set."))
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
                        import_Document.default.createText(`disabled`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Boolean`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("If present, disables the textarea and editor."))
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
                        import_Document.default.createText(`readonly`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Boolean`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("If present, makes the textarea and editor read-only."))
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
                        import_Document.default.createText(`change`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Function`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("Handler called with change event when content updates."))
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
                        import_Document.default.createText(`update`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Function`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("Callback with current editor content on change."))
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
                        ...this._toNodeList(_("CSS classes applied to the host element."))
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
                        ...this._toNodeList(_("Inline styles applied to the host element."))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          <!-- Basic Editor (name) -->
          `, false),
                  import_Document.default.createElement("a", { "name": `basicEditor` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Basic Editor (name)"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_('A basic editor with a form name, using default "htmlmixed" mode.'))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 h-200 flex justify-center align-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-editor", { "name": `editor` }),
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
            <field-editor name="editor" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Editor with Value -->
          `, false),
                  import_Document.default.createElement("a", { "name": `editorWithValue` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Editor with Value"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("An editor with initial HTML content."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 h-200 flex justify-center align-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-editor", { "name": `editor`, "value": `<p>Hello, world!</p>` }),
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
            <field-editor name="editor" value="<p>Hello, world!</p>" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Editor with Lang -->
          `, false),
                  import_Document.default.createElement("a", { "name": `editorWithLang` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Editor with Lang"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("An editor in Markdown mode with initial content."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 h-200 flex justify-center align-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-editor", { "name": `editor`, "lang": `markdown`, "value": `# Title
Text` }),
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
            <field-editor name="editor" lang="markdown" value="# Title
Text" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Editor with Numbers -->
          `, false),
                  import_Document.default.createElement("a", { "name": `editorWithNumbers` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Editor with Numbers"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("An editor with line numbers enabled."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 h-200 flex justify-center align-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-editor", { "name": `editor`, "numbers": true, "value": `Line 1
Line 2` }),
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
            <field-editor name="editor" numbers value="Line 1
Line 2" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Editor with Change -->
          `, false),
                  import_Document.default.createElement("a", { "name": `changeEditor` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Editor with Change"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("An editor with a custom change handler."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 h-200 flex justify-center align-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-editor", { "name": `editor`, "change": handleChange, "value": `<p>Edit me</p>` }),
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
            <script>
              const handleChange = (e) => console.log('Change event:', e.target.value);
            <\/script>
            <field-editor name="editor" change={handleChange} value="<p>Edit me</p>" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Editor with Update -->
          `, false),
                  import_Document.default.createElement("a", { "name": `updateEditor` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Editor with Update"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("An editor with an update callback."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 h-200 flex justify-center align-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-editor", { "name": `editor`, "update": handleUpdate, "value": `<p>Update me</p>` }),
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
            <script>
              const handleUpdate = (value) => console.log('Updated content:', value);
            <\/script>
            <field-editor name="editor" update={handleUpdate} value="<p>Update me</p>" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Styled Editor (class, style) -->
          `, false),
                  import_Document.default.createElement("a", { "name": `styledEditor` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Styled Editor (class, style)"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    ...this._toNodeList(_("An editor with custom class and style."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `basis-third-10 lg-basis-half-10 md-basis-full` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", { "class": `bg-t-3 h-200 flex justify-center align-center` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("field-editor", { "name": `editor`, "value": `<p>Styled</p>`, "class": `w-300`, "style": `border: 1px solid #007bff;` }),
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
            <field-editor name="editor" value="<p>Styled</p>" class="w-300" style="border: 1px solid #007bff;" />
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Navigation -->
          `, false),
                  import_Document.default.createElement("nav", { "class": `flex` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/ui/field/datetime.html` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }),
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Datetime")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/ui/field/file.html` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("File")),
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
    "FieldEditor_015bbef1a0403600489f": Editor_015bbef1a0403600489f
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
    "field-editor": Editor_015bbef1a0403600489f
  };
  var BUILD_ID = "45ddd81142145216184a";
  import_Emitter.default.once("ready", () => {
    TemplateDocument.sync();
    for (const [tagname, definition] of Object.entries(elements)) {
      if (!customElements.getName(definition)) {
        customElements.define(tagname, definition);
      }
    }
    import_Emitter.default.emit("mounted", document.body);
  });
  return __toCommonJS(editor_exports);
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
