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

  // ../../node_modules/inputmask/dist/inputmask.js
  var require_inputmask = __commonJS({
    "../../node_modules/inputmask/dist/inputmask.js"(exports, module) {
      !function(e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
          var n = t();
          for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i];
        }
      }("undefined" != typeof self ? self : exports, function() {
        return function() {
          "use strict";
          var e = {
            3976: function(e2, t2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = void 0;
              t2.default = {
                _maxTestPos: 500,
                placeholder: "_",
                optionalmarker: ["[", "]"],
                quantifiermarker: ["{", "}"],
                groupmarker: ["(", ")"],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: function() {
                },
                onincomplete: function() {
                },
                oncleared: function() {
                },
                repeat: 0,
                greedy: false,
                autoUnmask: false,
                removeMaskOnSubmit: false,
                clearMaskOnLostFocus: true,
                insertMode: true,
                insertModeVisual: true,
                clearIncomplete: false,
                alias: null,
                onKeyDown: function() {
                },
                onBeforeMask: null,
                onBeforePaste: function(e3, t3) {
                  return "function" == typeof t3.onBeforeMask ? t3.onBeforeMask.call(this, e3, t3) : e3;
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: true,
                showMaskOnHover: true,
                onKeyValidation: function() {
                },
                skipOptionalPartCharacter: " ",
                numericInput: false,
                rightAlign: false,
                undoOnEscape: true,
                radixPoint: "",
                _radixDance: false,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: true,
                tabThrough: false,
                supportsInputType: ["text", "tel", "url", "password", "search"],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: void 0,
                jitMasking: false,
                nullable: true,
                inputEventOnly: false,
                noValuePatching: false,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "text",
                importDataAttributes: true,
                shiftPositions: true,
                usePrototypeDefinitions: true,
                validationEventTimeOut: 3e3,
                substitutes: {}
              };
            },
            7392: function(e2, t2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = void 0;
              t2.default = {
                9: {
                  validator: "[0-9\uFF10-\uFF19]",
                  definitionSymbol: "*"
                },
                a: {
                  validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                  definitionSymbol: "*"
                },
                "*": {
                  validator: "[0-9\uFF10-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]"
                }
              };
            },
            253: function(e2, t2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = function(e3, t3, n2) {
                if (void 0 === n2) return e3.__data ? e3.__data[t3] : null;
                e3.__data = e3.__data || {}, e3.__data[t3] = n2;
              };
            },
            3776: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.Event = void 0, t2.off = function(e3, t3) {
                var n3, i3;
                u(this[0]) && e3 && (n3 = this[0].eventRegistry, i3 = this[0], e3.split(" ").forEach(function(e4) {
                  var a2 = o(e4.split("."), 2);
                  (function(e5, i4) {
                    var a3, r2, o2 = [];
                    if (e5.length > 0) if (void 0 === t3) for (a3 = 0, r2 = n3[e5][i4].length; a3 < r2; a3++) o2.push({
                      ev: e5,
                      namespace: i4 && i4.length > 0 ? i4 : "global",
                      handler: n3[e5][i4][a3]
                    });
                    else o2.push({
                      ev: e5,
                      namespace: i4 && i4.length > 0 ? i4 : "global",
                      handler: t3
                    });
                    else if (i4.length > 0) {
                      for (var l2 in n3) for (var s2 in n3[l2]) if (s2 === i4) if (void 0 === t3) for (a3 = 0, r2 = n3[l2][s2].length; a3 < r2; a3++) o2.push({
                        ev: l2,
                        namespace: s2,
                        handler: n3[l2][s2][a3]
                      });
                      else o2.push({
                        ev: l2,
                        namespace: s2,
                        handler: t3
                      });
                    }
                    return o2;
                  })(a2[0], a2[1]).forEach(function(e5) {
                    var t4 = e5.ev, a3 = e5.handler;
                    !function(e6, t5, a4) {
                      if (e6 in n3 == 1) if (i3.removeEventListener ? i3.removeEventListener(e6, a4, false) : i3.detachEvent && i3.detachEvent("on".concat(e6), a4), "global" === t5) for (var r2 in n3[e6]) n3[e6][r2].splice(n3[e6][r2].indexOf(a4), 1);
                      else n3[e6][t5].splice(n3[e6][t5].indexOf(a4), 1);
                    }(t4, e5.namespace, a3);
                  });
                }));
                return this;
              }, t2.on = function(e3, t3) {
                if (u(this[0])) {
                  var n3 = this[0].eventRegistry, i3 = this[0];
                  e3.split(" ").forEach(function(e4) {
                    var a2 = o(e4.split("."), 2), r2 = a2[0], l2 = a2[1];
                    !function(e5, a3) {
                      i3.addEventListener ? i3.addEventListener(e5, t3, false) : i3.attachEvent && i3.attachEvent("on".concat(e5), t3), n3[e5] = n3[e5] || {}, n3[e5][a3] = n3[e5][a3] || [], n3[e5][a3].push(t3);
                    }(r2, void 0 === l2 ? "global" : l2);
                  });
                }
                return this;
              }, t2.trigger = function(e3) {
                var t3 = arguments;
                if (u(this[0])) for (var n3 = this[0].eventRegistry, i3 = this[0], o2 = "string" == typeof e3 ? e3.split(" ") : [e3.type], l2 = 0; l2 < o2.length; l2++) {
                  var s2 = o2[l2].split("."), f2 = s2[0], p = s2[1] || "global";
                  if (void 0 !== c && "global" === p) {
                    var d, h = {
                      bubbles: true,
                      cancelable: true,
                      composed: true,
                      detail: arguments[1]
                    };
                    if (c.createEvent) {
                      try {
                        if ("input" === f2) h.inputType = "insertText", d = new InputEvent(f2, h);
                        else d = new CustomEvent(f2, h);
                      } catch (e4) {
                        (d = c.createEvent("CustomEvent")).initCustomEvent(f2, h.bubbles, h.cancelable, h.detail);
                      }
                      e3.type && (0, a.default)(d, e3), i3.dispatchEvent(d);
                    } else (d = c.createEventObject()).eventType = f2, d.detail = arguments[1], e3.type && (0, a.default)(d, e3), i3.fireEvent("on" + d.eventType, d);
                  } else if (void 0 !== n3[f2]) {
                    arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1);
                    var v = n3[f2];
                    ("global" === p ? Object.values(v).flat() : v[p]).forEach(function(e4) {
                      return e4.apply(i3, t3);
                    });
                  }
                }
                return this;
              };
              var i2 = s(n2(9380)), a = s(n2(600)), r = s(n2(4963));
              function o(e3, t3) {
                return function(e4) {
                  if (Array.isArray(e4)) return e4;
                }(e3) || function(e4, t4) {
                  var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                  if (null != n3) {
                    var i3, a2, r2, o2, l2 = [], s2 = true, c2 = false;
                    try {
                      if (r2 = (n3 = n3.call(e4)).next, 0 === t4) {
                        if (Object(n3) !== n3) return;
                        s2 = false;
                      } else for (; !(s2 = (i3 = r2.call(n3)).done) && (l2.push(i3.value), l2.length !== t4); s2 = true) ;
                    } catch (e5) {
                      c2 = true, a2 = e5;
                    } finally {
                      try {
                        if (!s2 && null != n3.return && (o2 = n3.return(), Object(o2) !== o2)) return;
                      } finally {
                        if (c2) throw a2;
                      }
                    }
                    return l2;
                  }
                }(e3, t3) || function(e4, t4) {
                  if (!e4) return;
                  if ("string" == typeof e4) return l(e4, t4);
                  var n3 = Object.prototype.toString.call(e4).slice(8, -1);
                  "Object" === n3 && e4.constructor && (n3 = e4.constructor.name);
                  if ("Map" === n3 || "Set" === n3) return Array.from(e4);
                  if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return l(e4, t4);
                }(e3, t3) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
              }
              function l(e3, t3) {
                (null == t3 || t3 > e3.length) && (t3 = e3.length);
                for (var n3 = 0, i3 = new Array(t3); n3 < t3; n3++) i3[n3] = e3[n3];
                return i3;
              }
              function s(e3) {
                return e3 && e3.__esModule ? e3 : {
                  default: e3
                };
              }
              var c = i2.default.document;
              function u(e3) {
                return e3 instanceof Element;
              }
              var f = t2.Event = void 0;
              "function" == typeof i2.default.CustomEvent ? t2.Event = f = i2.default.CustomEvent : i2.default.Event && c && c.createEvent ? (t2.Event = f = function(e3, t3) {
                t3 = t3 || {
                  bubbles: false,
                  cancelable: false,
                  composed: true,
                  detail: void 0
                };
                var n3 = c.createEvent("CustomEvent");
                return n3.initCustomEvent(e3, t3.bubbles, t3.cancelable, t3.detail), n3;
              }, f.prototype = i2.default.Event.prototype) : "undefined" != typeof Event && (t2.Event = f = Event);
            },
            600: function(e2, t2) {
              function n2(e3) {
                return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, n2(e3);
              }
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = function e3() {
                var t3, i2, a, r, o, l, s = arguments[0] || {}, c = 1, u = arguments.length, f = false;
                "boolean" == typeof s && (f = s, s = arguments[c] || {}, c++);
                "object" !== n2(s) && "function" != typeof s && (s = {});
                for (; c < u; c++) if (null != (t3 = arguments[c])) for (i2 in t3) a = s[i2], s !== (r = t3[i2]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = false, l = a && Array.isArray(a) ? a : []) : l = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, s[i2] = e3(f, l, r)) : void 0 !== r && (s[i2] = r));
                return s;
              };
            },
            4963: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = void 0;
              var i2 = l(n2(9380)), a = l(n2(253)), r = n2(3776), o = l(n2(600));
              function l(e3) {
                return e3 && e3.__esModule ? e3 : {
                  default: e3
                };
              }
              var s = i2.default.document;
              function c(e3) {
                return e3 instanceof c ? e3 : this instanceof c ? void (null != e3 && e3 !== i2.default && (this[0] = e3.nodeName ? e3 : void 0 !== e3[0] && e3[0].nodeName ? e3[0] : s.querySelector(e3), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e3);
              }
              c.prototype = {
                on: r.on,
                off: r.off,
                trigger: r.trigger
              }, c.extend = o.default, c.data = a.default, c.Event = r.Event;
              t2.default = c;
            },
            9845: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.mobile = t2.iphone = t2.ie = void 0;
              var i2, a = (i2 = n2(9380)) && i2.__esModule ? i2 : {
                default: i2
              };
              var r = a.default.navigator && a.default.navigator.userAgent || "";
              t2.ie = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, t2.mobile = a.default.navigator && a.default.navigator.userAgentData && a.default.navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, t2.iphone = /iphone/i.test(r);
            },
            7184: function(e2, t2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = function(e3) {
                return e3.replace(n2, "\\$1");
              };
              var n2 = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
            },
            6030: function(e2, t2, n2) {
              function i2(e3) {
                return i2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, i2(e3);
              }
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.EventHandlers = void 0;
              var a, r = n2(9845), o = (a = n2(9380)) && a.__esModule ? a : {
                default: a
              }, l = n2(7760), s = n2(2839), c = n2(8711), u = n2(7215), f = n2(4713);
              function p() {
                p = function() {
                  return t3;
                };
                var e3, t3 = {}, n3 = Object.prototype, a2 = n3.hasOwnProperty, r2 = Object.defineProperty || function(e4, t4, n4) {
                  e4[t4] = n4.value;
                }, o2 = "function" == typeof Symbol ? Symbol : {}, l2 = o2.iterator || "@@iterator", s2 = o2.asyncIterator || "@@asyncIterator", c2 = o2.toStringTag || "@@toStringTag";
                function u2(e4, t4, n4) {
                  return Object.defineProperty(e4, t4, {
                    value: n4,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }), e4[t4];
                }
                try {
                  u2({}, "");
                } catch (e4) {
                  u2 = function(e5, t4, n4) {
                    return e5[t4] = n4;
                  };
                }
                function f2(e4, t4, n4, i3) {
                  var a3 = t4 && t4.prototype instanceof k ? t4 : k, o3 = Object.create(a3.prototype), l3 = new D(i3 || []);
                  return r2(o3, "_invoke", {
                    value: E(e4, n4, l3)
                  }), o3;
                }
                function d2(e4, t4, n4) {
                  try {
                    return {
                      type: "normal",
                      arg: e4.call(t4, n4)
                    };
                  } catch (e5) {
                    return {
                      type: "throw",
                      arg: e5
                    };
                  }
                }
                t3.wrap = f2;
                var h2 = "suspendedStart", v2 = "suspendedYield", m2 = "executing", g2 = "completed", y2 = {};
                function k() {
                }
                function b() {
                }
                function x() {
                }
                var w = {};
                u2(w, l2, function() {
                  return this;
                });
                var P = Object.getPrototypeOf, S = P && P(P(L([])));
                S && S !== n3 && a2.call(S, l2) && (w = S);
                var O = x.prototype = k.prototype = Object.create(w);
                function _2(e4) {
                  ["next", "throw", "return"].forEach(function(t4) {
                    u2(e4, t4, function(e5) {
                      return this._invoke(t4, e5);
                    });
                  });
                }
                function M(e4, t4) {
                  function n4(r3, o4, l3, s3) {
                    var c3 = d2(e4[r3], e4, o4);
                    if ("throw" !== c3.type) {
                      var u3 = c3.arg, f3 = u3.value;
                      return f3 && "object" == i2(f3) && a2.call(f3, "__await") ? t4.resolve(f3.__await).then(function(e5) {
                        n4("next", e5, l3, s3);
                      }, function(e5) {
                        n4("throw", e5, l3, s3);
                      }) : t4.resolve(f3).then(function(e5) {
                        u3.value = e5, l3(u3);
                      }, function(e5) {
                        return n4("throw", e5, l3, s3);
                      });
                    }
                    s3(c3.arg);
                  }
                  var o3;
                  r2(this, "_invoke", {
                    value: function(e5, i3) {
                      function a3() {
                        return new t4(function(t5, a4) {
                          n4(e5, i3, t5, a4);
                        });
                      }
                      return o3 = o3 ? o3.then(a3, a3) : a3();
                    }
                  });
                }
                function E(t4, n4, i3) {
                  var a3 = h2;
                  return function(r3, o3) {
                    if (a3 === m2) throw new Error("Generator is already running");
                    if (a3 === g2) {
                      if ("throw" === r3) throw o3;
                      return {
                        value: e3,
                        done: true
                      };
                    }
                    for (i3.method = r3, i3.arg = o3; ; ) {
                      var l3 = i3.delegate;
                      if (l3) {
                        var s3 = j(l3, i3);
                        if (s3) {
                          if (s3 === y2) continue;
                          return s3;
                        }
                      }
                      if ("next" === i3.method) i3.sent = i3._sent = i3.arg;
                      else if ("throw" === i3.method) {
                        if (a3 === h2) throw a3 = g2, i3.arg;
                        i3.dispatchException(i3.arg);
                      } else "return" === i3.method && i3.abrupt("return", i3.arg);
                      a3 = m2;
                      var c3 = d2(t4, n4, i3);
                      if ("normal" === c3.type) {
                        if (a3 = i3.done ? g2 : v2, c3.arg === y2) continue;
                        return {
                          value: c3.arg,
                          done: i3.done
                        };
                      }
                      "throw" === c3.type && (a3 = g2, i3.method = "throw", i3.arg = c3.arg);
                    }
                  };
                }
                function j(t4, n4) {
                  var i3 = n4.method, a3 = t4.iterator[i3];
                  if (a3 === e3) return n4.delegate = null, "throw" === i3 && t4.iterator.return && (n4.method = "return", n4.arg = e3, j(t4, n4), "throw" === n4.method) || "return" !== i3 && (n4.method = "throw", n4.arg = new TypeError("The iterator does not provide a '" + i3 + "' method")), y2;
                  var r3 = d2(a3, t4.iterator, n4.arg);
                  if ("throw" === r3.type) return n4.method = "throw", n4.arg = r3.arg, n4.delegate = null, y2;
                  var o3 = r3.arg;
                  return o3 ? o3.done ? (n4[t4.resultName] = o3.value, n4.next = t4.nextLoc, "return" !== n4.method && (n4.method = "next", n4.arg = e3), n4.delegate = null, y2) : o3 : (n4.method = "throw", n4.arg = new TypeError("iterator result is not an object"), n4.delegate = null, y2);
                }
                function T(e4) {
                  var t4 = {
                    tryLoc: e4[0]
                  };
                  1 in e4 && (t4.catchLoc = e4[1]), 2 in e4 && (t4.finallyLoc = e4[2], t4.afterLoc = e4[3]), this.tryEntries.push(t4);
                }
                function A(e4) {
                  var t4 = e4.completion || {};
                  t4.type = "normal", delete t4.arg, e4.completion = t4;
                }
                function D(e4) {
                  this.tryEntries = [{
                    tryLoc: "root"
                  }], e4.forEach(T, this), this.reset(true);
                }
                function L(t4) {
                  if (t4 || "" === t4) {
                    var n4 = t4[l2];
                    if (n4) return n4.call(t4);
                    if ("function" == typeof t4.next) return t4;
                    if (!isNaN(t4.length)) {
                      var r3 = -1, o3 = function n5() {
                        for (; ++r3 < t4.length; ) if (a2.call(t4, r3)) return n5.value = t4[r3], n5.done = false, n5;
                        return n5.value = e3, n5.done = true, n5;
                      };
                      return o3.next = o3;
                    }
                  }
                  throw new TypeError(i2(t4) + " is not iterable");
                }
                return b.prototype = x, r2(O, "constructor", {
                  value: x,
                  configurable: true
                }), r2(x, "constructor", {
                  value: b,
                  configurable: true
                }), b.displayName = u2(x, c2, "GeneratorFunction"), t3.isGeneratorFunction = function(e4) {
                  var t4 = "function" == typeof e4 && e4.constructor;
                  return !!t4 && (t4 === b || "GeneratorFunction" === (t4.displayName || t4.name));
                }, t3.mark = function(e4) {
                  return Object.setPrototypeOf ? Object.setPrototypeOf(e4, x) : (e4.__proto__ = x, u2(e4, c2, "GeneratorFunction")), e4.prototype = Object.create(O), e4;
                }, t3.awrap = function(e4) {
                  return {
                    __await: e4
                  };
                }, _2(M.prototype), u2(M.prototype, s2, function() {
                  return this;
                }), t3.AsyncIterator = M, t3.async = function(e4, n4, i3, a3, r3) {
                  void 0 === r3 && (r3 = Promise);
                  var o3 = new M(f2(e4, n4, i3, a3), r3);
                  return t3.isGeneratorFunction(n4) ? o3 : o3.next().then(function(e5) {
                    return e5.done ? e5.value : o3.next();
                  });
                }, _2(O), u2(O, c2, "Generator"), u2(O, l2, function() {
                  return this;
                }), u2(O, "toString", function() {
                  return "[object Generator]";
                }), t3.keys = function(e4) {
                  var t4 = Object(e4), n4 = [];
                  for (var i3 in t4) n4.push(i3);
                  return n4.reverse(), function e5() {
                    for (; n4.length; ) {
                      var i4 = n4.pop();
                      if (i4 in t4) return e5.value = i4, e5.done = false, e5;
                    }
                    return e5.done = true, e5;
                  };
                }, t3.values = L, D.prototype = {
                  constructor: D,
                  reset: function(t4) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e3, this.done = false, this.delegate = null, this.method = "next", this.arg = e3, this.tryEntries.forEach(A), !t4) for (var n4 in this) "t" === n4.charAt(0) && a2.call(this, n4) && !isNaN(+n4.slice(1)) && (this[n4] = e3);
                  },
                  stop: function() {
                    this.done = true;
                    var e4 = this.tryEntries[0].completion;
                    if ("throw" === e4.type) throw e4.arg;
                    return this.rval;
                  },
                  dispatchException: function(t4) {
                    if (this.done) throw t4;
                    var n4 = this;
                    function i3(i4, a3) {
                      return l3.type = "throw", l3.arg = t4, n4.next = i4, a3 && (n4.method = "next", n4.arg = e3), !!a3;
                    }
                    for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                      var o3 = this.tryEntries[r3], l3 = o3.completion;
                      if ("root" === o3.tryLoc) return i3("end");
                      if (o3.tryLoc <= this.prev) {
                        var s3 = a2.call(o3, "catchLoc"), c3 = a2.call(o3, "finallyLoc");
                        if (s3 && c3) {
                          if (this.prev < o3.catchLoc) return i3(o3.catchLoc, true);
                          if (this.prev < o3.finallyLoc) return i3(o3.finallyLoc);
                        } else if (s3) {
                          if (this.prev < o3.catchLoc) return i3(o3.catchLoc, true);
                        } else {
                          if (!c3) throw new Error("try statement without catch or finally");
                          if (this.prev < o3.finallyLoc) return i3(o3.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function(e4, t4) {
                    for (var n4 = this.tryEntries.length - 1; n4 >= 0; --n4) {
                      var i3 = this.tryEntries[n4];
                      if (i3.tryLoc <= this.prev && a2.call(i3, "finallyLoc") && this.prev < i3.finallyLoc) {
                        var r3 = i3;
                        break;
                      }
                    }
                    r3 && ("break" === e4 || "continue" === e4) && r3.tryLoc <= t4 && t4 <= r3.finallyLoc && (r3 = null);
                    var o3 = r3 ? r3.completion : {};
                    return o3.type = e4, o3.arg = t4, r3 ? (this.method = "next", this.next = r3.finallyLoc, y2) : this.complete(o3);
                  },
                  complete: function(e4, t4) {
                    if ("throw" === e4.type) throw e4.arg;
                    return "break" === e4.type || "continue" === e4.type ? this.next = e4.arg : "return" === e4.type ? (this.rval = this.arg = e4.arg, this.method = "return", this.next = "end") : "normal" === e4.type && t4 && (this.next = t4), y2;
                  },
                  finish: function(e4) {
                    for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
                      var n4 = this.tryEntries[t4];
                      if (n4.finallyLoc === e4) return this.complete(n4.completion, n4.afterLoc), A(n4), y2;
                    }
                  },
                  catch: function(e4) {
                    for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
                      var n4 = this.tryEntries[t4];
                      if (n4.tryLoc === e4) {
                        var i3 = n4.completion;
                        if ("throw" === i3.type) {
                          var a3 = i3.arg;
                          A(n4);
                        }
                        return a3;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function(t4, n4, i3) {
                    return this.delegate = {
                      iterator: L(t4),
                      resultName: n4,
                      nextLoc: i3
                    }, "next" === this.method && (this.arg = e3), y2;
                  }
                }, t3;
              }
              function d(e3, t3) {
                var n3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
                if (!n3) {
                  if (Array.isArray(e3) || (n3 = function(e4, t4) {
                    if (!e4) return;
                    if ("string" == typeof e4) return h(e4, t4);
                    var n4 = Object.prototype.toString.call(e4).slice(8, -1);
                    "Object" === n4 && e4.constructor && (n4 = e4.constructor.name);
                    if ("Map" === n4 || "Set" === n4) return Array.from(e4);
                    if ("Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4)) return h(e4, t4);
                  }(e3)) || t3 && e3 && "number" == typeof e3.length) {
                    n3 && (e3 = n3);
                    var i3 = 0, a2 = function() {
                    };
                    return {
                      s: a2,
                      n: function() {
                        return i3 >= e3.length ? {
                          done: true
                        } : {
                          done: false,
                          value: e3[i3++]
                        };
                      },
                      e: function(e4) {
                        throw e4;
                      },
                      f: a2
                    };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r2, o2 = true, l2 = false;
                return {
                  s: function() {
                    n3 = n3.call(e3);
                  },
                  n: function() {
                    var e4 = n3.next();
                    return o2 = e4.done, e4;
                  },
                  e: function(e4) {
                    l2 = true, r2 = e4;
                  },
                  f: function() {
                    try {
                      o2 || null == n3.return || n3.return();
                    } finally {
                      if (l2) throw r2;
                    }
                  }
                };
              }
              function h(e3, t3) {
                (null == t3 || t3 > e3.length) && (t3 = e3.length);
                for (var n3 = 0, i3 = new Array(t3); n3 < t3; n3++) i3[n3] = e3[n3];
                return i3;
              }
              function v(e3, t3, n3, i3, a2, r2, o2) {
                try {
                  var l2 = e3[r2](o2), s2 = l2.value;
                } catch (e4) {
                  return void n3(e4);
                }
                l2.done ? t3(s2) : Promise.resolve(s2).then(i3, a2);
              }
              var m, g, y = t2.EventHandlers = {
                keyEvent: function(e3, t3, n3, i3, a2) {
                  var o2 = this.inputmask, p2 = o2.opts, d2 = o2.dependencyLib, h2 = o2.maskset, v2 = this, m2 = d2(v2), g2 = e3.key, k = c.caret.call(o2, v2), b = p2.onKeyDown.call(this, e3, c.getBuffer.call(o2), k, p2);
                  if (void 0 !== b) return b;
                  if (g2 === s.keys.Backspace || g2 === s.keys.Delete || r.iphone && g2 === s.keys.BACKSPACE_SAFARI || e3.ctrlKey && g2 === s.keys.x && !("oncut" in v2)) e3.preventDefault(), u.handleRemove.call(o2, v2, g2, k), (0, l.writeBuffer)(v2, c.getBuffer.call(o2, true), h2.p, e3, v2.inputmask._valueGet() !== c.getBuffer.call(o2).join(""));
                  else if (g2 === s.keys.End || g2 === s.keys.PageDown) {
                    e3.preventDefault();
                    var x = c.seekNext.call(o2, c.getLastValidPosition.call(o2));
                    c.caret.call(o2, v2, e3.shiftKey ? k.begin : x, x, true);
                  } else g2 === s.keys.Home && !e3.shiftKey || g2 === s.keys.PageUp ? (e3.preventDefault(), c.caret.call(o2, v2, 0, e3.shiftKey ? k.begin : 0, true)) : p2.undoOnEscape && g2 === s.keys.Escape && true !== e3.altKey ? ((0, l.checkVal)(v2, true, false, o2.undoValue.split("")), m2.trigger("click")) : g2 !== s.keys.Insert || e3.shiftKey || e3.ctrlKey || void 0 !== o2.userOptions.insertMode ? true === p2.tabThrough && g2 === s.keys.Tab ? true === e3.shiftKey ? (k.end = c.seekPrevious.call(o2, k.end, true), true === f.getTest.call(o2, k.end - 1).match.static && k.end--, k.begin = c.seekPrevious.call(o2, k.end, true), k.begin >= 0 && k.end > 0 && (e3.preventDefault(), c.caret.call(o2, v2, k.begin, k.end))) : (k.begin = c.seekNext.call(o2, k.begin, true), k.end = c.seekNext.call(o2, k.begin, true), k.end < h2.maskLength && k.end--, k.begin <= h2.maskLength && (e3.preventDefault(), c.caret.call(o2, v2, k.begin, k.end))) : e3.shiftKey || (p2.insertModeVisual && false === p2.insertMode ? g2 === s.keys.ArrowRight ? setTimeout(function() {
                    var e4 = c.caret.call(o2, v2);
                    c.caret.call(o2, v2, e4.begin);
                  }, 0) : g2 === s.keys.ArrowLeft && setTimeout(function() {
                    var e4 = c.translatePosition.call(o2, v2.inputmask.caretPos.begin);
                    c.translatePosition.call(o2, v2.inputmask.caretPos.end);
                    o2.isRTL ? c.caret.call(o2, v2, e4 + (e4 === h2.maskLength ? 0 : 1)) : c.caret.call(o2, v2, e4 - (0 === e4 ? 0 : 1));
                  }, 0) : void 0 === o2.keyEventHook || o2.keyEventHook(e3)) : u.isSelection.call(o2, k) ? p2.insertMode = !p2.insertMode : (p2.insertMode = !p2.insertMode, c.caret.call(o2, v2, k.begin, k.begin));
                  return o2.isComposing = g2 == s.keys.Process || g2 == s.keys.Unidentified, o2.ignorable = g2.length > 1 && !("textarea" === v2.tagName.toLowerCase() && g2 == s.keys.Enter), y.keypressEvent.call(this, e3, t3, n3, i3, a2);
                },
                keypressEvent: function(e3, t3, n3, i3, a2) {
                  var r2 = this.inputmask || this, o2 = r2.opts, f2 = r2.dependencyLib, p2 = r2.maskset, d2 = r2.el, h2 = f2(d2), v2 = e3.key;
                  if (true === t3 || e3.ctrlKey && e3.altKey && !r2.ignorable || !(e3.ctrlKey || e3.metaKey || r2.ignorable)) {
                    if (v2) {
                      var m2, g2 = t3 ? {
                        begin: a2,
                        end: a2
                      } : c.caret.call(r2, d2);
                      t3 || (v2 = o2.substitutes[v2] || v2), p2.writeOutBuffer = true;
                      var y2 = u.isValid.call(r2, g2, v2, i3, void 0, void 0, void 0, t3);
                      if (false !== y2 && (c.resetMaskSet.call(r2, true), m2 = void 0 !== y2.caret ? y2.caret : c.seekNext.call(r2, y2.pos.begin ? y2.pos.begin : y2.pos), p2.p = m2), m2 = o2.numericInput && void 0 === y2.caret ? c.seekPrevious.call(r2, m2) : m2, false !== n3 && (setTimeout(function() {
                        o2.onKeyValidation.call(d2, v2, y2);
                      }, 0), p2.writeOutBuffer && false !== y2)) {
                        var k = c.getBuffer.call(r2);
                        (0, l.writeBuffer)(d2, k, m2, e3, true !== t3);
                      }
                      if (e3.preventDefault(), t3) return false !== y2 && (y2.forwardPosition = m2), y2;
                    }
                  } else v2 === s.keys.Enter && r2.undoValue !== r2._valueGet(true) && (r2.undoValue = r2._valueGet(true), setTimeout(function() {
                    h2.trigger("change");
                  }, 0));
                },
                pasteEvent: (m = p().mark(function e3(t3) {
                  var n3, i3, a2, r2, s2, u2;
                  return p().wrap(function(e4) {
                    for (; ; ) switch (e4.prev = e4.next) {
                      case 0:
                        n3 = function(e5, n4, i4, a3, o2) {
                          var s3 = c.caret.call(e5, n4, void 0, void 0, true), u3 = i4.substr(0, s3.begin), f2 = i4.substr(s3.end, i4.length);
                          if (u3 == (e5.isRTL ? c.getBufferTemplate.call(e5).slice().reverse() : c.getBufferTemplate.call(e5)).slice(0, s3.begin).join("") && (u3 = ""), f2 == (e5.isRTL ? c.getBufferTemplate.call(e5).slice().reverse() : c.getBufferTemplate.call(e5)).slice(s3.end).join("") && (f2 = ""), a3 = u3 + a3 + f2, e5.isRTL && true !== r2.numericInput) {
                            a3 = a3.split("");
                            var p2, h2 = d(c.getBufferTemplate.call(e5));
                            try {
                              for (h2.s(); !(p2 = h2.n()).done; ) {
                                var v2 = p2.value;
                                a3[0] === v2 && a3.shift();
                              }
                            } catch (e6) {
                              h2.e(e6);
                            } finally {
                              h2.f();
                            }
                            a3 = a3.reverse().join("");
                          }
                          var m2 = a3;
                          if ("function" == typeof o2) {
                            if (false === (m2 = o2.call(e5, m2, r2))) return false;
                            m2 || (m2 = i4);
                          }
                          (0, l.checkVal)(n4, true, false, m2.toString().split(""), t3);
                        }, i3 = this, a2 = this.inputmask, r2 = a2.opts, s2 = a2._valueGet(true), a2.skipInputEvent = true, t3.clipboardData && t3.clipboardData.getData ? u2 = t3.clipboardData.getData("text/plain") : o.default.clipboardData && o.default.clipboardData.getData && (u2 = o.default.clipboardData.getData("Text")), n3(a2, i3, s2, u2, r2.onBeforePaste), t3.preventDefault();
                      case 7:
                      case "end":
                        return e4.stop();
                    }
                  }, e3, this);
                }), g = function() {
                  var e3 = this, t3 = arguments;
                  return new Promise(function(n3, i3) {
                    var a2 = m.apply(e3, t3);
                    function r2(e4) {
                      v(a2, n3, i3, r2, o2, "next", e4);
                    }
                    function o2(e4) {
                      v(a2, n3, i3, r2, o2, "throw", e4);
                    }
                    r2(void 0);
                  });
                }, function(e3) {
                  return g.apply(this, arguments);
                }),
                inputFallBackEvent: function(e3) {
                  var t3 = this.inputmask, n3 = t3.opts, i3 = t3.dependencyLib;
                  var a2, o2 = this, u2 = o2.inputmask._valueGet(true), p2 = (t3.isRTL ? c.getBuffer.call(t3).slice().reverse() : c.getBuffer.call(t3)).join(""), d2 = c.caret.call(t3, o2, void 0, void 0, true);
                  if (p2 !== u2) {
                    if (a2 = function(e4, i4, a3) {
                      for (var r2, o3, l2, s2 = e4.substr(0, a3.begin).split(""), u3 = e4.substr(a3.begin).split(""), p3 = i4.substr(0, a3.begin).split(""), d3 = i4.substr(a3.begin).split(""), h3 = s2.length >= p3.length ? s2.length : p3.length, v2 = u3.length >= d3.length ? u3.length : d3.length, m2 = "", g2 = [], y2 = "~"; s2.length < h3; ) s2.push(y2);
                      for (; p3.length < h3; ) p3.push(y2);
                      for (; u3.length < v2; ) u3.unshift(y2);
                      for (; d3.length < v2; ) d3.unshift(y2);
                      var k = s2.concat(u3), b = p3.concat(d3);
                      for (o3 = 0, r2 = k.length; o3 < r2; o3++) switch (l2 = f.getPlaceholder.call(t3, c.translatePosition.call(t3, o3)), m2) {
                        case "insertText":
                          b[o3 - 1] === k[o3] && a3.begin == k.length - 1 && g2.push(k[o3]), o3 = r2;
                          break;
                        case "insertReplacementText":
                        case "deleteContentBackward":
                          k[o3] === y2 ? a3.end++ : o3 = r2;
                          break;
                        default:
                          k[o3] !== b[o3] && (k[o3 + 1] !== y2 && k[o3 + 1] !== l2 && void 0 !== k[o3 + 1] || (b[o3] !== l2 || b[o3 + 1] !== y2) && b[o3] !== y2 ? b[o3 + 1] === y2 && b[o3] === k[o3 + 1] ? (m2 = "insertText", g2.push(k[o3]), a3.begin--, a3.end--) : k[o3] !== l2 && k[o3] !== y2 && (k[o3 + 1] === y2 || b[o3] !== k[o3] && b[o3 + 1] === k[o3 + 1]) ? (m2 = "insertReplacementText", g2.push(k[o3]), a3.begin--) : k[o3] === y2 ? (m2 = "deleteContentBackward", (c.isMask.call(t3, c.translatePosition.call(t3, o3), true) || b[o3] === n3.radixPoint) && a3.end++) : o3 = r2 : (m2 = "insertText", g2.push(k[o3]), a3.begin--, a3.end--));
                      }
                      return {
                        action: m2,
                        data: g2,
                        caret: a3
                      };
                    }(u2, p2, d2), (o2.inputmask.shadowRoot || o2.ownerDocument).activeElement !== o2 && o2.focus(), (0, l.writeBuffer)(o2, c.getBuffer.call(t3)), c.caret.call(t3, o2, d2.begin, d2.end, true), !r.mobile && t3.skipNextInsert && "insertText" === e3.inputType && "insertText" === a2.action && t3.isComposing) return false;
                    switch ("insertCompositionText" === e3.inputType && "insertText" === a2.action && t3.isComposing ? t3.skipNextInsert = true : t3.skipNextInsert = false, a2.action) {
                      case "insertText":
                      case "insertReplacementText":
                        a2.data.forEach(function(e4, n4) {
                          var a3 = new i3.Event("keypress");
                          a3.key = e4, t3.ignorable = false, y.keypressEvent.call(o2, a3);
                        }), setTimeout(function() {
                          t3.$el.trigger("keyup");
                        }, 0);
                        break;
                      case "deleteContentBackward":
                        var h2 = new i3.Event("keydown");
                        h2.key = s.keys.Backspace, y.keyEvent.call(o2, h2);
                        break;
                      default:
                        (0, l.applyInputValue)(o2, u2), c.caret.call(t3, o2, d2.begin, d2.end, true);
                    }
                    e3.preventDefault();
                  }
                },
                setValueEvent: function(e3) {
                  var t3 = this.inputmask, n3 = t3.dependencyLib, i3 = this, a2 = e3 && e3.detail ? e3.detail[0] : arguments[1];
                  void 0 === a2 && (a2 = i3.inputmask._valueGet(true)), (0, l.applyInputValue)(i3, a2, new n3.Event("input")), (e3.detail && void 0 !== e3.detail[1] || void 0 !== arguments[2]) && c.caret.call(t3, i3, e3.detail ? e3.detail[1] : arguments[2]);
                },
                focusEvent: function(e3) {
                  var t3 = this.inputmask, n3 = t3.opts, i3 = t3 && t3._valueGet();
                  n3.showMaskOnFocus && i3 !== c.getBuffer.call(t3).join("") && (0, l.writeBuffer)(this, c.getBuffer.call(t3), c.seekNext.call(t3, c.getLastValidPosition.call(t3))), true !== n3.positionCaretOnTab || false !== t3.mouseEnter || u.isComplete.call(t3, c.getBuffer.call(t3)) && -1 !== c.getLastValidPosition.call(t3) || y.clickEvent.apply(this, [e3, true]), t3.undoValue = t3 && t3._valueGet(true);
                },
                invalidEvent: function(e3) {
                  this.inputmask.validationEvent = true;
                },
                mouseleaveEvent: function() {
                  var e3 = this.inputmask, t3 = e3.opts, n3 = this;
                  e3.mouseEnter = false, t3.clearMaskOnLostFocus && (n3.inputmask.shadowRoot || n3.ownerDocument).activeElement !== n3 && (0, l.HandleNativePlaceholder)(n3, e3.originalPlaceholder);
                },
                clickEvent: function(e3, t3) {
                  var n3 = this.inputmask;
                  n3.clicked++;
                  var i3 = this;
                  if ((i3.inputmask.shadowRoot || i3.ownerDocument).activeElement === i3) {
                    var a2 = c.determineNewCaretPosition.call(n3, c.caret.call(n3, i3), t3);
                    void 0 !== a2 && c.caret.call(n3, i3, a2);
                  }
                },
                cutEvent: function(e3) {
                  var t3 = this.inputmask, n3 = t3.maskset, i3 = this, a2 = c.caret.call(t3, i3), r2 = t3.isRTL ? c.getBuffer.call(t3).slice(a2.end, a2.begin) : c.getBuffer.call(t3).slice(a2.begin, a2.end), f2 = t3.isRTL ? r2.reverse().join("") : r2.join("");
                  o.default.navigator && o.default.navigator.clipboard ? o.default.navigator.clipboard.writeText(f2) : o.default.clipboardData && o.default.clipboardData.getData && o.default.clipboardData.setData("Text", f2), u.handleRemove.call(t3, i3, s.keys.Delete, a2), (0, l.writeBuffer)(i3, c.getBuffer.call(t3), n3.p, e3, t3.undoValue !== t3._valueGet(true));
                },
                blurEvent: function(e3) {
                  var t3 = this.inputmask, n3 = t3.opts, i3 = t3.dependencyLib;
                  t3.clicked = 0;
                  var a2 = i3(this), r2 = this;
                  if (r2.inputmask) {
                    (0, l.HandleNativePlaceholder)(r2, t3.originalPlaceholder);
                    var o2 = r2.inputmask._valueGet(), s2 = c.getBuffer.call(t3).slice();
                    "" !== o2 && (n3.clearMaskOnLostFocus && (-1 === c.getLastValidPosition.call(t3) && o2 === c.getBufferTemplate.call(t3).join("") ? s2 = [] : l.clearOptionalTail.call(t3, s2)), false === u.isComplete.call(t3, s2) && (setTimeout(function() {
                      a2.trigger("incomplete");
                    }, 0), n3.clearIncomplete && (c.resetMaskSet.call(t3, false), s2 = n3.clearMaskOnLostFocus ? [] : c.getBufferTemplate.call(t3).slice())), (0, l.writeBuffer)(r2, s2, void 0, e3)), o2 = t3._valueGet(true), t3.undoValue !== o2 && ("" != o2 || t3.undoValue != c.getBufferTemplate.call(t3).join("") || t3.undoValue == c.getBufferTemplate.call(t3).join("") && t3.maskset.validPositions.length > 0) && (t3.undoValue = o2, a2.trigger("change"));
                  }
                },
                mouseenterEvent: function() {
                  var e3 = this.inputmask, t3 = e3.opts.showMaskOnHover, n3 = this;
                  if (e3.mouseEnter = true, (n3.inputmask.shadowRoot || n3.ownerDocument).activeElement !== n3) {
                    var i3 = (e3.isRTL ? c.getBufferTemplate.call(e3).slice().reverse() : c.getBufferTemplate.call(e3)).join("");
                    t3 && (0, l.HandleNativePlaceholder)(n3, i3);
                  }
                },
                submitEvent: function() {
                  var e3 = this.inputmask, t3 = e3.opts;
                  e3.undoValue !== e3._valueGet(true) && e3.$el.trigger("change"), -1 === c.getLastValidPosition.call(e3) && e3._valueGet && e3._valueGet() === c.getBufferTemplate.call(e3).join("") && e3._valueSet(""), t3.clearIncomplete && false === u.isComplete.call(e3, c.getBuffer.call(e3)) && e3._valueSet(""), t3.removeMaskOnSubmit && (e3._valueSet(e3.unmaskedvalue(), true), setTimeout(function() {
                    (0, l.writeBuffer)(e3.el, c.getBuffer.call(e3));
                  }, 0));
                },
                resetEvent: function() {
                  var e3 = this.inputmask;
                  e3.refreshValue = true, setTimeout(function() {
                    (0, l.applyInputValue)(e3.el, e3._valueGet(true));
                  }, 0);
                }
              };
            },
            9716: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.EventRuler = void 0;
              var i2, a = n2(7760), r = (i2 = n2(2394)) && i2.__esModule ? i2 : {
                default: i2
              }, o = n2(2839), l = n2(8711);
              t2.EventRuler = {
                on: function(e3, t3, n3) {
                  var i3 = e3.inputmask.dependencyLib, s = function(t4) {
                    t4.originalEvent && (t4 = t4.originalEvent || t4, arguments[0] = t4);
                    var s2, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                    if (void 0 === u && "FORM" !== this.nodeName) {
                      var p = i3.data(c, "_inputmask_opts");
                      i3(c).off(), p && new r.default(p).mask(c);
                    } else {
                      if (["submit", "reset", "setvalue"].includes(t4.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t4.type && t4.ctrlKey && t4.key === o.keys.c || false === f.tabThrough && t4.key === o.keys.Tab))) {
                        switch (t4.type) {
                          case "input":
                            if (true === u.skipInputEvent) return u.skipInputEvent = false, t4.preventDefault();
                            break;
                          case "click":
                          case "focus":
                            return u.validationEvent ? (u.validationEvent = false, e3.blur(), (0, a.HandleNativePlaceholder)(e3, (u.isRTL ? l.getBufferTemplate.call(u).slice().reverse() : l.getBufferTemplate.call(u)).join("")), setTimeout(function() {
                              e3.focus();
                            }, f.validationEventTimeOut), false) : (s2 = arguments, void setTimeout(function() {
                              e3.inputmask && n3.apply(c, s2);
                            }, 0));
                        }
                        var d = n3.apply(c, arguments);
                        return false === d && (t4.preventDefault(), t4.stopPropagation()), d;
                      }
                      t4.preventDefault();
                    }
                  };
                  ["submit", "reset"].includes(t3) ? (s = s.bind(e3), null !== e3.form && i3(e3.form).on(t3, s)) : i3(e3).on(t3, s), e3.inputmask.events[t3] = e3.inputmask.events[t3] || [], e3.inputmask.events[t3].push(s);
                },
                off: function(e3, t3) {
                  if (e3.inputmask && e3.inputmask.events) {
                    var n3 = e3.inputmask.dependencyLib, i3 = e3.inputmask.events;
                    for (var a2 in t3 && ((i3 = [])[t3] = e3.inputmask.events[t3]), i3) {
                      for (var r2 = i3[a2]; r2.length > 0; ) {
                        var o2 = r2.pop();
                        ["submit", "reset"].includes(a2) ? null !== e3.form && n3(e3.form).off(a2, o2) : n3(e3).off(a2, o2);
                      }
                      delete e3.inputmask.events[a2];
                    }
                  }
                }
              };
            },
            219: function(e2, t2, n2) {
              var i2 = p(n2(7184)), a = p(n2(2394)), r = n2(2839), o = n2(8711), l = n2(4713);
              function s(e3, t3) {
                return function(e4) {
                  if (Array.isArray(e4)) return e4;
                }(e3) || function(e4, t4) {
                  var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                  if (null != n3) {
                    var i3, a2, r2, o2, l2 = [], s2 = true, c2 = false;
                    try {
                      if (r2 = (n3 = n3.call(e4)).next, 0 === t4) {
                        if (Object(n3) !== n3) return;
                        s2 = false;
                      } else for (; !(s2 = (i3 = r2.call(n3)).done) && (l2.push(i3.value), l2.length !== t4); s2 = true) ;
                    } catch (e5) {
                      c2 = true, a2 = e5;
                    } finally {
                      try {
                        if (!s2 && null != n3.return && (o2 = n3.return(), Object(o2) !== o2)) return;
                      } finally {
                        if (c2) throw a2;
                      }
                    }
                    return l2;
                  }
                }(e3, t3) || function(e4, t4) {
                  if (!e4) return;
                  if ("string" == typeof e4) return c(e4, t4);
                  var n3 = Object.prototype.toString.call(e4).slice(8, -1);
                  "Object" === n3 && e4.constructor && (n3 = e4.constructor.name);
                  if ("Map" === n3 || "Set" === n3) return Array.from(e4);
                  if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return c(e4, t4);
                }(e3, t3) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
              }
              function c(e3, t3) {
                (null == t3 || t3 > e3.length) && (t3 = e3.length);
                for (var n3 = 0, i3 = new Array(t3); n3 < t3; n3++) i3[n3] = e3[n3];
                return i3;
              }
              function u(e3) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, u(e3);
              }
              function f(e3, t3) {
                for (var n3 = 0; n3 < t3.length; n3++) {
                  var i3 = t3[n3];
                  i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(e3, (a2 = i3.key, r2 = void 0, r2 = function(e4, t4) {
                    if ("object" !== u(e4) || null === e4) return e4;
                    var n4 = e4[Symbol.toPrimitive];
                    if (void 0 !== n4) {
                      var i4 = n4.call(e4, t4 || "default");
                      if ("object" !== u(i4)) return i4;
                      throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t4 ? String : Number)(e4);
                  }(a2, "string"), "symbol" === u(r2) ? r2 : String(r2)), i3);
                }
                var a2, r2;
              }
              function p(e3) {
                return e3 && e3.__esModule ? e3 : {
                  default: e3
                };
              }
              n2(1313);
              var d = a.default.dependencyLib, h = function() {
                function e3(t4, n4, i4, a2) {
                  !function(e4, t5) {
                    if (!(e4 instanceof t5)) throw new TypeError("Cannot call a class as a function");
                  }(this, e3), this.mask = t4, this.format = n4, this.opts = i4, this.inputmask = a2, this._date = new Date(1, 0, 1), this.initDateObject(t4, this.opts, this.inputmask);
                }
                var t3, n3, i3;
                return t3 = e3, (n3 = [{
                  key: "date",
                  get: function() {
                    return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts, this.inputmask)), this._date;
                  }
                }, {
                  key: "initDateObject",
                  value: function(e4, t4, n4) {
                    var i4;
                    for (P(t4).lastIndex = 0; i4 = P(t4).exec(this.format); ) {
                      var a2 = /\d+$/.exec(i4[0]), r2 = a2 ? i4[0][0] + "x" : i4[0], o2 = void 0;
                      if (void 0 !== e4) {
                        if (a2) {
                          var s2 = P(t4).lastIndex, c2 = j.call(n4, i4.index, t4, n4 && n4.maskset);
                          P(t4).lastIndex = s2, o2 = e4.slice(0, e4.indexOf(c2.nextMatch[0]));
                        } else {
                          for (var u2 = i4[0][0], f2 = i4.index; n4 && (t4.placeholder[l.getTest.call(n4, f2).match.placeholder] || l.getTest.call(n4, f2).match.placeholder) === u2; ) f2++;
                          var p2 = f2 - i4.index;
                          o2 = e4.slice(0, p2 || y[r2] && y[r2][4] || r2.length);
                        }
                        e4 = e4.slice(o2.length);
                      }
                      Object.prototype.hasOwnProperty.call(y, r2) && this.setValue(this, o2, r2, y[r2][2], y[r2][1]);
                    }
                  }
                }, {
                  key: "setValue",
                  value: function(e4, t4, n4, i4, a2) {
                    if (void 0 !== t4) switch (i4) {
                      case "ampm":
                        e4[i4] = t4, e4["raw" + i4] = t4.replace(/\s/g, "_");
                        break;
                      case "month":
                        if ("mmm" === n4 || "mmmm" === n4) {
                          e4[i4] = _2("mmm" === n4 ? m.monthNames.slice(0, 12).findIndex(function(e5) {
                            return t4.toLowerCase() === e5.toLowerCase();
                          }) + 1 : m.monthNames.slice(12, 24).findIndex(function(e5) {
                            return t4.toLowerCase() === e5.toLowerCase();
                          }) + 1, 2), e4[i4] = "00" === e4[i4] ? "" : e4[i4].toString(), e4["raw" + i4] = e4[i4];
                          break;
                        }
                      default:
                        e4[i4] = t4.replace(/[^0-9]/g, "0"), e4["raw" + i4] = t4.replace(/\s/g, "_");
                    }
                    if (void 0 !== a2) {
                      var r2 = e4[i4];
                      ("day" === i4 && 29 === parseInt(r2) || "month" === i4 && 2 === parseInt(r2)) && (29 !== parseInt(e4.day) || 2 !== parseInt(e4.month) || "" !== e4.year && void 0 !== e4.year || e4._date.setFullYear(2012, 1, 29)), "day" === i4 && (g = true, 0 === parseInt(r2) && (r2 = 1)), "month" === i4 && (g = true), "year" === i4 && (g = true, r2.length < y[n4][4] && (r2 = _2(r2, y[n4][4], true))), ("" !== r2 && !isNaN(r2) || "ampm" === i4) && a2.call(e4._date, r2);
                    }
                  }
                }, {
                  key: "reset",
                  value: function() {
                    this._date = new Date(1, 0, 1);
                  }
                }, {
                  key: "reInit",
                  value: function() {
                    this._date = void 0, this.date;
                  }
                }]) && f(t3.prototype, n3), i3 && f(t3, i3), Object.defineProperty(t3, "prototype", {
                  writable: false
                }), e3;
              }(), v = (/* @__PURE__ */ new Date()).getFullYear(), m = a.default.prototype.i18n, g = false, y = {
                d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
                dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                  return _2(Date.prototype.getDate.call(this), 2);
                }],
                ddd: [""],
                dddd: [""],
                m: ["[1-9]|1[012]", function(e3) {
                  var t3 = e3 ? parseInt(e3) : 0;
                  return t3 > 0 && t3--, Date.prototype.setMonth.call(this, t3);
                }, "month", function() {
                  return Date.prototype.getMonth.call(this) + 1;
                }],
                mm: ["0[1-9]|1[012]", function(e3) {
                  var t3 = e3 ? parseInt(e3) : 0;
                  return t3 > 0 && t3--, Date.prototype.setMonth.call(this, t3);
                }, "month", function() {
                  return _2(Date.prototype.getMonth.call(this) + 1, 2);
                }],
                mmm: [m.monthNames.slice(0, 12).join("|"), function(e3) {
                  var t3 = m.monthNames.slice(0, 12).findIndex(function(t4) {
                    return e3.toLowerCase() === t4.toLowerCase();
                  });
                  return -1 !== t3 && Date.prototype.setMonth.call(this, t3);
                }, "month", function() {
                  return m.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
                }],
                mmmm: [m.monthNames.slice(12, 24).join("|"), function(e3) {
                  var t3 = m.monthNames.slice(12, 24).findIndex(function(t4) {
                    return e3.toLowerCase() === t4.toLowerCase();
                  });
                  return -1 !== t3 && Date.prototype.setMonth.call(this, t3);
                }, "month", function() {
                  return m.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
                }],
                yy: ["[0-9]{2}", function(e3) {
                  var t3 = (/* @__PURE__ */ new Date()).getFullYear().toString().slice(0, 2);
                  Date.prototype.setFullYear.call(this, "".concat(t3).concat(e3));
                }, "year", function() {
                  return _2(Date.prototype.getFullYear.call(this), 2);
                }, 2],
                yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                  return _2(Date.prototype.getFullYear.call(this), 4);
                }, 4],
                h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                  return _2(Date.prototype.getHours.call(this), 2);
                }],
                hx: [function(e3) {
                  return "[0-9]{".concat(e3, "}");
                }, Date.prototype.setHours, "hours", function(e3) {
                  return Date.prototype.getHours;
                }],
                H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                  return _2(Date.prototype.getHours.call(this), 2);
                }],
                Hx: [function(e3) {
                  return "[0-9]{".concat(e3, "}");
                }, Date.prototype.setHours, "hours", function(e3) {
                  return function() {
                    return _2(Date.prototype.getHours.call(this), e3);
                  };
                }],
                M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
                MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                  return _2(Date.prototype.getMinutes.call(this), 2);
                }],
                s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
                ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                  return _2(Date.prototype.getSeconds.call(this), 2);
                }],
                l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                  return _2(Date.prototype.getMilliseconds.call(this), 3);
                }, 3],
                L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                  return _2(Date.prototype.getMilliseconds.call(this), 2);
                }, 2],
                t: ["[ap]", b, "ampm", x, 1],
                tt: ["[ap]m", b, "ampm", x, 2],
                T: ["[AP]", b, "ampm", x, 1],
                TT: ["[AP]M", b, "ampm", x, 2],
                Z: [".*", void 0, "Z", function() {
                  var e3 = this.toString().match(/\((.+)\)/)[1];
                  e3.includes(" ") && (e3 = (e3 = e3.replace("-", " ").toUpperCase()).split(" ").map(function(e4) {
                    return s(e4, 1)[0];
                  }).join(""));
                  return e3;
                }],
                o: [""],
                S: [""]
              }, k = {
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
              };
              function b(e3) {
                var t3 = this.getHours();
                e3.toLowerCase().includes("p") ? this.setHours(t3 + 12) : e3.toLowerCase().includes("a") && t3 >= 12 && this.setHours(t3 - 12);
              }
              function x() {
                var e3 = this.getHours();
                return (e3 = e3 || 12) >= 12 ? "PM" : "AM";
              }
              function w(e3) {
                var t3 = /\d+$/.exec(e3[0]);
                if (t3 && void 0 !== t3[0]) {
                  var n3 = y[e3[0][0] + "x"].slice("");
                  return n3[0] = n3[0](t3[0]), n3[3] = n3[3](t3[0]), n3;
                }
                if (y[e3[0]]) return y[e3[0]];
              }
              function P(e3) {
                if (!e3.tokenizer) {
                  var t3 = [], n3 = [];
                  for (var i3 in y) if (/\.*x$/.test(i3)) {
                    var a2 = i3[0] + "\\d+";
                    -1 === n3.indexOf(a2) && n3.push(a2);
                  } else -1 === t3.indexOf(i3[0]) && t3.push(i3[0]);
                  e3.tokenizer = "(" + (n3.length > 0 ? n3.join("|") + "|" : "") + t3.join("+|") + ")+?|.", e3.tokenizer = new RegExp(e3.tokenizer, "g");
                }
                return e3.tokenizer;
              }
              function S(e3, t3, n3) {
                if (!g) return true;
                if (void 0 === e3.rawday || !isFinite(e3.rawday) && new Date(e3.date.getFullYear(), isFinite(e3.rawmonth) ? e3.month : e3.date.getMonth() + 1, 0).getDate() >= e3.day || "29" == e3.day && (!isFinite(e3.rawyear) || void 0 === e3.rawyear || "" === e3.rawyear) || new Date(e3.date.getFullYear(), isFinite(e3.rawmonth) ? e3.month : e3.date.getMonth() + 1, 0).getDate() >= e3.day) return t3;
                if ("29" == e3.day) {
                  var i3 = j.call(this, t3.pos, n3, this.maskset);
                  if (i3.targetMatch && "yyyy" === i3.targetMatch[0] && t3.pos - i3.targetMatchIndex == 2) return t3.remove = t3.pos + 1, t3;
                } else if (2 == e3.date.getMonth() && "30" == e3.day && void 0 !== t3.c) return e3.day = "03", e3.date.setDate(3), e3.date.setMonth(1), t3.insert = [{
                  pos: t3.pos,
                  c: "0"
                }, {
                  pos: t3.pos + 1,
                  c: t3.c
                }], t3.caret = o.seekNext.call(this, t3.pos + 1), t3;
                return false;
              }
              function O(e3, t3, n3, a2) {
                var r2, o2, l2 = "", s2 = 0, c2 = {};
                for (P(n3).lastIndex = 0; r2 = P(n3).exec(e3); ) {
                  if (void 0 === t3) if (o2 = w(r2)) l2 += "(" + o2[0] + ")", n3.placeholder && "" !== n3.placeholder ? (c2[s2] = n3.placeholder[r2.index % n3.placeholder.length], c2[n3.placeholder[r2.index % n3.placeholder.length]] = r2[0].charAt(0)) : c2[s2] = r2[0].charAt(0);
                  else switch (r2[0]) {
                    case "[":
                      l2 += "(";
                      break;
                    case "]":
                      l2 += ")?";
                      break;
                    default:
                      l2 += (0, i2.default)(r2[0]), c2[s2] = r2[0].charAt(0);
                  }
                  else if (o2 = w(r2)) if (true !== a2 && o2[3]) l2 += o2[3].call(t3.date);
                  else o2[2] ? l2 += t3["raw" + o2[2]] : l2 += r2[0];
                  else l2 += r2[0];
                  s2++;
                }
                return void 0 === t3 && (n3.placeholder = c2), l2;
              }
              function _2(e3, t3, n3) {
                for (e3 = String(e3), t3 = t3 || 2; e3.length < t3; ) e3 = n3 ? e3 + "0" : "0" + e3;
                return e3;
              }
              function M(e3, t3, n3) {
                return "string" == typeof e3 ? new h(e3, t3, n3, this) : e3 && "object" === u(e3) && Object.prototype.hasOwnProperty.call(e3, "date") ? e3 : void 0;
              }
              function E(e3, t3) {
                return O(t3.inputFormat, {
                  date: e3
                }, t3);
              }
              function j(e3, t3, n3) {
                var i3, a2, r2 = this, o2 = n3 && n3.tests[e3] ? t3.placeholder[n3.tests[e3][0].match.placeholder] || n3.tests[e3][0].match.placeholder : "", s2 = 0, c2 = 0;
                for (P(t3).lastIndex = 0; a2 = P(t3).exec(t3.inputFormat); ) {
                  var u2 = /\d+$/.exec(a2[0]);
                  if (u2) c2 = parseInt(u2[0]);
                  else {
                    for (var f2 = a2[0][0], p2 = s2; r2 && (t3.placeholder[l.getTest.call(r2, p2).match.placeholder] || l.getTest.call(r2, p2).match.placeholder) === f2; ) p2++;
                    0 === (c2 = p2 - s2) && (c2 = a2[0].length);
                  }
                  if (s2 += c2, -1 != a2[0].indexOf(o2) || s2 >= e3 + 1) {
                    i3 = a2, a2 = P(t3).exec(t3.inputFormat);
                    break;
                  }
                }
                return {
                  targetMatchIndex: s2 - c2,
                  nextMatch: a2,
                  targetMatch: i3
                };
              }
              a.default.extendAliases({
                datetime: {
                  mask: function(e3) {
                    return e3.numericInput = false, y.S = m.ordinalSuffix.join("|"), e3.inputFormat = k[e3.inputFormat] || e3.inputFormat, e3.displayFormat = k[e3.displayFormat] || e3.displayFormat || e3.inputFormat, e3.outputFormat = k[e3.outputFormat] || e3.outputFormat || e3.inputFormat, e3.regex = O(e3.inputFormat, void 0, e3), e3.min = M(e3.min, e3.inputFormat, e3), e3.max = M(e3.max, e3.inputFormat, e3), null;
                  },
                  placeholder: "",
                  inputFormat: "isoDateTime",
                  displayFormat: null,
                  outputFormat: null,
                  min: null,
                  max: null,
                  skipOptionalPartCharacter: "",
                  preValidation: function(e3, t3, n3, i3, a2, r2, o2, l2) {
                    if (l2) return true;
                    if (isNaN(n3) && e3[t3] !== n3) {
                      var s2 = j.call(this, t3, a2, r2);
                      if (s2.nextMatch && s2.nextMatch[0] === n3 && s2.targetMatch[0].length > 1) {
                        var c2 = w(s2.targetMatch)[0];
                        if (new RegExp(c2).test("0" + e3[t3 - 1])) return e3[t3] = e3[t3 - 1], e3[t3 - 1] = "0", {
                          fuzzy: true,
                          buffer: e3,
                          refreshFromBuffer: {
                            start: t3 - 1,
                            end: t3 + 1
                          },
                          pos: t3 + 1
                        };
                      }
                    }
                    return true;
                  },
                  postValidation: function(e3, t3, n3, i3, a2, r2, o2, s2) {
                    var c2, u2, f2 = this;
                    if (o2) return true;
                    if (false === i3 && (((c2 = j.call(f2, t3 + 1, a2, r2)).targetMatch && c2.targetMatchIndex === t3 && c2.targetMatch[0].length > 1 && void 0 !== y[c2.targetMatch[0]] || (c2 = j.call(f2, t3 + 2, a2, r2)).targetMatch && c2.targetMatchIndex === t3 + 1 && c2.targetMatch[0].length > 1 && void 0 !== y[c2.targetMatch[0]]) && (u2 = w(c2.targetMatch)[0]), void 0 !== u2 && (void 0 !== r2.validPositions[t3 + 1] && new RegExp(u2).test(n3 + "0") ? (e3[t3] = n3, e3[t3 + 1] = "0", i3 = {
                      pos: t3 + 2,
                      caret: t3
                    }) : new RegExp(u2).test("0" + n3) && (e3[t3] = "0", e3[t3 + 1] = n3, i3 = {
                      pos: t3 + 2
                    })), false === i3)) return i3;
                    if (i3.fuzzy && (e3 = i3.buffer, t3 = i3.pos), (c2 = j.call(f2, t3, a2, r2)).targetMatch && c2.targetMatch[0] && void 0 !== y[c2.targetMatch[0]]) {
                      var p2 = w(c2.targetMatch);
                      u2 = p2[0];
                      var d2 = e3.slice(c2.targetMatchIndex, c2.targetMatchIndex + c2.targetMatch[0].length);
                      if (false === new RegExp(u2).test(d2.join("")) && 2 === c2.targetMatch[0].length && r2.validPositions[c2.targetMatchIndex] && r2.validPositions[c2.targetMatchIndex + 1] && (r2.validPositions[c2.targetMatchIndex + 1].input = "0"), "year" == p2[2]) for (var h2 = l.getMaskTemplate.call(f2, false, 1, void 0, true), m2 = t3 + 1; m2 < e3.length; m2++) e3[m2] = h2[m2], r2.validPositions.splice(t3 + 1, 1);
                    }
                    var g2 = i3, k2 = M.call(f2, e3.join(""), a2.inputFormat, a2);
                    return g2 && !isNaN(k2.date.getTime()) && (a2.prefillYear && (g2 = function(e4, t4, n4) {
                      if (e4.year !== e4.rawyear) {
                        var i4 = v.toString(), a3 = e4.rawyear.replace(/[^0-9]/g, ""), r3 = i4.slice(0, a3.length), o3 = i4.slice(a3.length);
                        if (2 === a3.length && a3 === r3) {
                          var l2 = new Date(v, e4.month - 1, e4.day);
                          e4.day == l2.getDate() && (!n4.max || n4.max.date.getTime() >= l2.getTime()) && (e4.date.setFullYear(v), e4.year = i4, t4.insert = [{
                            pos: t4.pos + 1,
                            c: o3[0]
                          }, {
                            pos: t4.pos + 2,
                            c: o3[1]
                          }]);
                        }
                      }
                      return t4;
                    }(k2, g2, a2)), g2 = function(e4, t4, n4, i4, a3) {
                      if (!t4) return t4;
                      if (t4 && n4.min && !isNaN(n4.min.date.getTime())) {
                        var r3;
                        for (e4.reset(), P(n4).lastIndex = 0; r3 = P(n4).exec(n4.inputFormat); ) {
                          var o3;
                          if ((o3 = w(r3)) && o3[3]) {
                            for (var l2 = o3[1], s3 = e4[o3[2]], c3 = n4.min[o3[2]], u3 = n4.max ? n4.max[o3[2]] : c3 + 1, f3 = [], p3 = false, d3 = 0; d3 < c3.length; d3++) void 0 !== i4.validPositions[d3 + r3.index] || p3 ? (f3[d3] = s3[d3], p3 = p3 || s3[d3] > c3[d3]) : (d3 + r3.index == 0 && s3[d3] < c3[d3] ? (f3[d3] = s3[d3], p3 = true) : f3[d3] = c3[d3], "year" === o3[2] && s3.length - 1 == d3 && c3 != u3 && (f3 = (parseInt(f3.join("")) + 1).toString().split("")), "ampm" === o3[2] && c3 != u3 && n4.min.date.getTime() > e4.date.getTime() && (f3[d3] = u3[d3]));
                            l2.call(e4._date, f3.join(""));
                          }
                        }
                        t4 = n4.min.date.getTime() <= e4.date.getTime(), e4.reInit();
                      }
                      return t4 && n4.max && (isNaN(n4.max.date.getTime()) || (t4 = n4.max.date.getTime() >= e4.date.getTime())), t4;
                    }(k2, g2 = S.call(f2, k2, g2, a2), a2, r2)), void 0 !== t3 && g2 && i3.pos !== t3 ? {
                      buffer: O(a2.inputFormat, k2, a2).split(""),
                      refreshFromBuffer: {
                        start: t3,
                        end: i3.pos
                      },
                      pos: i3.caret || i3.pos
                    } : g2;
                  },
                  onKeyDown: function(e3, t3, n3, i3) {
                    e3.ctrlKey && e3.key === r.keys.ArrowRight && (this.inputmask._valueSet(E(/* @__PURE__ */ new Date(), i3)), d(this).trigger("setvalue"));
                  },
                  onUnMask: function(e3, t3, n3) {
                    return t3 ? O(n3.outputFormat, M.call(this, e3, n3.inputFormat, n3), n3, true) : t3;
                  },
                  casing: function(e3, t3, n3, i3) {
                    if (0 == t3.nativeDef.indexOf("[ap]")) return e3.toLowerCase();
                    if (0 == t3.nativeDef.indexOf("[AP]")) return e3.toUpperCase();
                    var a2 = l.getTest.call(this, [n3 - 1]);
                    return 0 == a2.match.def.indexOf("[AP]") || 0 === n3 || a2 && a2.input === String.fromCharCode(r.keyCode.Space) || a2 && a2.match.def === String.fromCharCode(r.keyCode.Space) ? e3.toUpperCase() : e3.toLowerCase();
                  },
                  onBeforeMask: function(e3, t3) {
                    return "[object Date]" === Object.prototype.toString.call(e3) && (e3 = E(e3, t3)), e3;
                  },
                  insertMode: false,
                  insertModeVisual: false,
                  shiftPositions: false,
                  keepStatic: false,
                  inputmode: "numeric",
                  prefillYear: true
                }
              });
            },
            1313: function(e2, t2, n2) {
              var i2, a = (i2 = n2(2394)) && i2.__esModule ? i2 : {
                default: i2
              };
              a.default.dependencyLib.extend(true, a.default.prototype.i18n, {
                dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                ordinalSuffix: ["st", "nd", "rd", "th"]
              });
            },
            3851: function(e2, t2, n2) {
              var i2, a = (i2 = n2(2394)) && i2.__esModule ? i2 : {
                default: i2
              }, r = n2(8711), o = n2(4713);
              function l(e3) {
                return function(e4) {
                  if (Array.isArray(e4)) return s(e4);
                }(e3) || function(e4) {
                  if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
                }(e3) || function(e4, t3) {
                  if (!e4) return;
                  if ("string" == typeof e4) return s(e4, t3);
                  var n3 = Object.prototype.toString.call(e4).slice(8, -1);
                  "Object" === n3 && e4.constructor && (n3 = e4.constructor.name);
                  if ("Map" === n3 || "Set" === n3) return Array.from(e4);
                  if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return s(e4, t3);
                }(e3) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
              }
              function s(e3, t3) {
                (null == t3 || t3 > e3.length) && (t3 = e3.length);
                for (var n3 = 0, i3 = new Array(t3); n3 < t3; n3++) i3[n3] = e3[n3];
                return i3;
              }
              a.default.extendDefinitions({
                A: {
                  validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                  casing: "upper"
                },
                "&": {
                  validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                  casing: "upper"
                },
                "#": {
                  validator: "[0-9A-Fa-f]",
                  casing: "upper"
                }
              });
              var c = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
              function u(e3, t3, n3, i3, a2) {
                if (n3 - 1 > -1 && "." !== t3.buffer[n3 - 1] ? (e3 = t3.buffer[n3 - 1] + e3, e3 = n3 - 2 > -1 && "." !== t3.buffer[n3 - 2] ? t3.buffer[n3 - 2] + e3 : "0" + e3) : e3 = "00" + e3, a2.greedy && parseInt(e3) > 255 && c.test("00" + e3.charAt(2))) {
                  var r2 = [].concat(l(t3.buffer.slice(0, n3)), [".", e3.charAt(2)]);
                  if (r2.join("").match(/\./g).length < 4) return {
                    refreshFromBuffer: true,
                    buffer: r2,
                    caret: n3 + 2
                  };
                }
                return c.test(e3);
              }
              a.default.extendAliases({
                cssunit: {
                  regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                },
                url: {
                  regex: "(https?|ftp)://.*",
                  autoUnmask: false,
                  keepStatic: false,
                  tabThrough: true
                },
                ip: {
                  mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                  definitions: {
                    i: {
                      validator: u
                    },
                    j: {
                      validator: u
                    },
                    k: {
                      validator: u
                    },
                    l: {
                      validator: u
                    }
                  },
                  onUnMask: function(e3, t3, n3) {
                    return e3;
                  },
                  inputmode: "decimal",
                  substitutes: {
                    ",": "."
                  }
                },
                email: {
                  mask: function(e3) {
                    var t3 = e3.separator, n3 = e3.quantifier, i3 = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a2 = i3;
                    if (t3) for (var r2 = 0; r2 < n3; r2++) a2 += "[".concat(t3).concat(i3, "]");
                    return a2;
                  },
                  greedy: false,
                  casing: "lower",
                  separator: null,
                  quantifier: 5,
                  skipOptionalPartCharacter: "",
                  onBeforePaste: function(e3, t3) {
                    return (e3 = e3.toLowerCase()).replace("mailto:", "");
                  },
                  definitions: {
                    "*": {
                      validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                      validator: "[0-9A-Za-z-]"
                    }
                  },
                  onUnMask: function(e3, t3, n3) {
                    return e3;
                  },
                  inputmode: "email"
                },
                mac: {
                  mask: "##:##:##:##:##:##"
                },
                vin: {
                  mask: "V{13}9{4}",
                  definitions: {
                    V: {
                      validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                      casing: "upper"
                    }
                  },
                  clearIncomplete: true,
                  autoUnmask: true
                },
                ssn: {
                  mask: "999-99-9999",
                  postValidation: function(e3, t3, n3, i3, a2, l2, s2) {
                    var c2 = o.getMaskTemplate.call(this, true, r.getLastValidPosition.call(this), true, true);
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c2.join(""));
                  }
                }
              });
            },
            207: function(e2, t2, n2) {
              var i2 = l(n2(7184)), a = l(n2(2394)), r = n2(2839), o = n2(8711);
              function l(e3) {
                return e3 && e3.__esModule ? e3 : {
                  default: e3
                };
              }
              var s = a.default.dependencyLib;
              function c(e3, t3) {
                for (var n3 = "", i3 = 0; i3 < e3.length; i3++) a.default.prototype.definitions[e3.charAt(i3)] || t3.definitions[e3.charAt(i3)] || t3.optionalmarker[0] === e3.charAt(i3) || t3.optionalmarker[1] === e3.charAt(i3) || t3.quantifiermarker[0] === e3.charAt(i3) || t3.quantifiermarker[1] === e3.charAt(i3) || t3.groupmarker[0] === e3.charAt(i3) || t3.groupmarker[1] === e3.charAt(i3) || t3.alternatormarker === e3.charAt(i3) ? n3 += "\\" + e3.charAt(i3) : n3 += e3.charAt(i3);
                return n3;
              }
              function u(e3, t3, n3, i3) {
                if (e3.length > 0 && t3 > 0 && (!n3.digitsOptional || i3)) {
                  var a2 = e3.indexOf(n3.radixPoint), r2 = false;
                  n3.negationSymbol.back === e3[e3.length - 1] && (r2 = true, e3.length--), -1 === a2 && (e3.push(n3.radixPoint), a2 = e3.length - 1);
                  for (var o2 = 1; o2 <= t3; o2++) isFinite(e3[a2 + o2]) || (e3[a2 + o2] = "0");
                }
                return r2 && e3.push(n3.negationSymbol.back), e3;
              }
              function f(e3, t3) {
                var n3 = 0;
                for (var i3 in "+" === e3 && (n3 = o.seekNext.call(this, t3.validPositions.length - 1)), t3.tests) if ((i3 = parseInt(i3)) >= n3) {
                  for (var a2 = 0, r2 = t3.tests[i3].length; a2 < r2; a2++) if ((void 0 === t3.validPositions[i3] || "-" === e3) && t3.tests[i3][a2].match.def === e3) return i3 + (void 0 !== t3.validPositions[i3] && "-" !== e3 ? 1 : 0);
                }
                return n3;
              }
              function p(e3, t3) {
                for (var n3 = -1, i3 = 0, a2 = t3.validPositions.length; i3 < a2; i3++) {
                  var r2 = t3.validPositions[i3];
                  if (r2 && r2.match.def === e3) {
                    n3 = i3;
                    break;
                  }
                }
                return n3;
              }
              function d(e3, t3, n3, i3, a2) {
                var r2 = t3.buffer ? t3.buffer.indexOf(a2.radixPoint) : -1, o2 = (-1 !== r2 || i3 && a2.jitMasking) && new RegExp(a2.definitions[9].validator).test(e3);
                return !i3 && a2._radixDance && -1 !== r2 && o2 && null == t3.validPositions[r2] ? {
                  insert: {
                    pos: r2 === n3 ? r2 + 1 : r2,
                    c: a2.radixPoint
                  },
                  pos: n3
                } : o2;
              }
              a.default.extendAliases({
                numeric: {
                  mask: function(e3) {
                    e3.repeat = 0, e3.groupSeparator === e3.radixPoint && e3.digits && "0" !== e3.digits && ("." === e3.radixPoint ? e3.groupSeparator = "," : "," === e3.radixPoint ? e3.groupSeparator = "." : e3.groupSeparator = ""), " " === e3.groupSeparator && (e3.skipOptionalPartCharacter = void 0), e3.placeholder.length > 1 && (e3.placeholder = e3.placeholder.charAt(0)), "radixFocus" === e3.positionCaretOnClick && "" === e3.placeholder && (e3.positionCaretOnClick = "lvp");
                    var t3 = "0", n3 = e3.radixPoint;
                    true === e3.numericInput && void 0 === e3.__financeInput ? (t3 = "1", e3.positionCaretOnClick = "radixFocus" === e3.positionCaretOnClick ? "lvp" : e3.positionCaretOnClick, e3.digitsOptional = false, isNaN(e3.digits) && (e3.digits = 2), e3._radixDance = false, n3 = "," === e3.radixPoint ? "?" : "!", "" !== e3.radixPoint && void 0 === e3.definitions[n3] && (e3.definitions[n3] = {}, e3.definitions[n3].validator = "[" + e3.radixPoint + "]", e3.definitions[n3].placeholder = e3.radixPoint, e3.definitions[n3].static = true, e3.definitions[n3].generated = true)) : (e3.__financeInput = false, e3.numericInput = true);
                    var a2, r2 = "[+]";
                    if (r2 += c(e3.prefix, e3), "" !== e3.groupSeparator ? (void 0 === e3.definitions[e3.groupSeparator] && (e3.definitions[e3.groupSeparator] = {}, e3.definitions[e3.groupSeparator].validator = "[" + e3.groupSeparator + "]", e3.definitions[e3.groupSeparator].placeholder = e3.groupSeparator, e3.definitions[e3.groupSeparator].static = true, e3.definitions[e3.groupSeparator].generated = true), r2 += e3._mask(e3)) : r2 += "9{+}", void 0 !== e3.digits && 0 !== e3.digits) {
                      var o2 = e3.digits.toString().split(",");
                      isFinite(o2[0]) && o2[1] && isFinite(o2[1]) ? r2 += n3 + t3 + "{" + e3.digits + "}" : (isNaN(e3.digits) || parseInt(e3.digits) > 0) && (e3.digitsOptional || e3.jitMasking ? (a2 = r2 + n3 + t3 + "{0," + e3.digits + "}", e3.keepStatic = true) : r2 += n3 + t3 + "{" + e3.digits + "}");
                    } else e3.inputmode = "numeric";
                    return r2 += c(e3.suffix, e3), r2 += "[-]", a2 && (r2 = [a2 + c(e3.suffix, e3) + "[-]", r2]), e3.greedy = false, function(e4) {
                      void 0 === e4.parseMinMaxOptions && (null !== e4.min && (e4.min = e4.min.toString().replace(new RegExp((0, i2.default)(e4.groupSeparator), "g"), ""), "," === e4.radixPoint && (e4.min = e4.min.replace(e4.radixPoint, ".")), e4.min = isFinite(e4.min) ? parseFloat(e4.min) : NaN, isNaN(e4.min) && (e4.min = Number.MIN_VALUE)), null !== e4.max && (e4.max = e4.max.toString().replace(new RegExp((0, i2.default)(e4.groupSeparator), "g"), ""), "," === e4.radixPoint && (e4.max = e4.max.replace(e4.radixPoint, ".")), e4.max = isFinite(e4.max) ? parseFloat(e4.max) : NaN, isNaN(e4.max) && (e4.max = Number.MAX_VALUE)), e4.parseMinMaxOptions = "done");
                    }(e3), "" !== e3.radixPoint && e3.substituteRadixPoint && (e3.substitutes["." == e3.radixPoint ? "," : "."] = e3.radixPoint), r2;
                  },
                  _mask: function(e3) {
                    return "(" + e3.groupSeparator + "999){+|1}";
                  },
                  digits: "*",
                  digitsOptional: true,
                  enforceDigitsOnBlur: false,
                  radixPoint: ".",
                  positionCaretOnClick: "radixFocus",
                  _radixDance: true,
                  groupSeparator: "",
                  allowMinus: true,
                  negationSymbol: {
                    front: "-",
                    back: ""
                  },
                  prefix: "",
                  suffix: "",
                  min: null,
                  max: null,
                  SetMaxOnOverflow: false,
                  step: 1,
                  inputType: "text",
                  unmaskAsNumber: false,
                  roundingFN: Math.round,
                  inputmode: "decimal",
                  shortcuts: {
                    k: "1000",
                    m: "1000000"
                  },
                  placeholder: "0",
                  greedy: false,
                  rightAlign: true,
                  insertMode: true,
                  autoUnmask: false,
                  skipOptionalPartCharacter: "",
                  usePrototypeDefinitions: false,
                  stripLeadingZeroes: true,
                  substituteRadixPoint: true,
                  definitions: {
                    0: {
                      validator: d
                    },
                    1: {
                      validator: d,
                      definitionSymbol: "9"
                    },
                    9: {
                      validator: "[0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]",
                      definitionSymbol: "*"
                    },
                    "+": {
                      validator: function(e3, t3, n3, i3, a2) {
                        return a2.allowMinus && ("-" === e3 || e3 === a2.negationSymbol.front);
                      }
                    },
                    "-": {
                      validator: function(e3, t3, n3, i3, a2) {
                        return a2.allowMinus && e3 === a2.negationSymbol.back;
                      }
                    }
                  },
                  preValidation: function(e3, t3, n3, i3, a2, r2, o2, l2) {
                    var s2 = this;
                    if (false !== a2.__financeInput && n3 === a2.radixPoint) return false;
                    var c2 = e3.indexOf(a2.radixPoint), u2 = t3;
                    if (t3 = function(e4, t4, n4, i4, a3) {
                      return a3._radixDance && a3.numericInput && t4 !== a3.negationSymbol.back && e4 <= n4 && (n4 > 0 || t4 == a3.radixPoint) && (void 0 === i4.validPositions[e4 - 1] || i4.validPositions[e4 - 1].input !== a3.negationSymbol.back) && (e4 -= 1), e4;
                    }(t3, n3, c2, r2, a2), "-" === n3 || n3 === a2.negationSymbol.front) {
                      if (true !== a2.allowMinus) return false;
                      var d2 = false, h = p("+", r2), v = p("-", r2);
                      return -1 !== h && (d2 = [h], -1 !== v && d2.push(v)), false !== d2 ? {
                        remove: d2,
                        caret: u2 - a2.negationSymbol.back.length
                      } : {
                        insert: [{
                          pos: f.call(s2, "+", r2),
                          c: a2.negationSymbol.front,
                          fromIsValid: true
                        }, {
                          pos: f.call(s2, "-", r2),
                          c: a2.negationSymbol.back,
                          fromIsValid: void 0
                        }],
                        caret: u2 + a2.negationSymbol.back.length
                      };
                    }
                    if (n3 === a2.groupSeparator) return {
                      caret: u2
                    };
                    if (l2) return true;
                    if (-1 !== c2 && true === a2._radixDance && false === i3 && n3 === a2.radixPoint && void 0 !== a2.digits && (isNaN(a2.digits) || parseInt(a2.digits) > 0) && c2 !== t3) {
                      var m = f.call(s2, a2.radixPoint, r2);
                      return r2.validPositions[m] && (r2.validPositions[m].generatedInput = r2.validPositions[m].generated || false), {
                        caret: a2._radixDance && t3 === c2 - 1 ? c2 + 1 : c2
                      };
                    }
                    if (false === a2.__financeInput) {
                      if (i3) {
                        if (a2.digitsOptional) return {
                          rewritePosition: o2.end
                        };
                        if (!a2.digitsOptional) {
                          if (o2.begin > c2 && o2.end <= c2) return n3 === a2.radixPoint ? {
                            insert: {
                              pos: c2 + 1,
                              c: "0",
                              fromIsValid: true
                            },
                            rewritePosition: c2
                          } : {
                            rewritePosition: c2 + 1
                          };
                          if (o2.begin < c2) return {
                            rewritePosition: o2.begin - 1
                          };
                        }
                      } else if (!a2.showMaskOnHover && !a2.showMaskOnFocus && !a2.digitsOptional && a2.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                        rewritePosition: c2
                      };
                    }
                    return {
                      rewritePosition: t3
                    };
                  },
                  postValidation: function(e3, t3, n3, i3, a2, r2, o2) {
                    if (false === i3) return i3;
                    if (o2) return true;
                    if (null !== a2.min || null !== a2.max) {
                      var l2 = a2.onUnMask(e3.slice().reverse().join(""), void 0, s.extend({}, a2, {
                        unmaskAsNumber: true
                      }));
                      if (null !== a2.min && l2 < a2.min && (l2.toString().length > a2.min.toString().length || l2 < 0)) return false;
                      if (null !== a2.max && l2 > a2.max) return !!a2.SetMaxOnOverflow && {
                        refreshFromBuffer: true,
                        buffer: u(a2.max.toString().replace(".", a2.radixPoint).split(""), a2.digits, a2).reverse()
                      };
                    }
                    return i3;
                  },
                  onUnMask: function(e3, t3, n3) {
                    if ("" === t3 && true === n3.nullable) return t3;
                    var a2 = e3.replace(n3.prefix, "");
                    return a2 = (a2 = a2.replace(n3.suffix, "")).replace(new RegExp((0, i2.default)(n3.groupSeparator), "g"), ""), "" !== n3.placeholder.charAt(0) && (a2 = a2.replace(new RegExp(n3.placeholder.charAt(0), "g"), "0")), n3.unmaskAsNumber ? ("" !== n3.radixPoint && -1 !== a2.indexOf(n3.radixPoint) && (a2 = a2.replace(i2.default.call(this, n3.radixPoint), ".")), a2 = (a2 = a2.replace(new RegExp("^" + (0, i2.default)(n3.negationSymbol.front)), "-")).replace(new RegExp((0, i2.default)(n3.negationSymbol.back) + "$"), ""), Number(a2)) : a2;
                  },
                  isComplete: function(e3, t3) {
                    var n3 = (t3.numericInput ? e3.slice().reverse() : e3).join("");
                    return n3 = (n3 = (n3 = (n3 = (n3 = n3.replace(new RegExp("^" + (0, i2.default)(t3.negationSymbol.front)), "-")).replace(new RegExp((0, i2.default)(t3.negationSymbol.back) + "$"), "")).replace(t3.prefix, "")).replace(t3.suffix, "")).replace(new RegExp((0, i2.default)(t3.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t3.radixPoint && (n3 = n3.replace((0, i2.default)(t3.radixPoint), ".")), isFinite(n3);
                  },
                  onBeforeMask: function(e3, t3) {
                    var n3;
                    e3 = null !== (n3 = e3) && void 0 !== n3 ? n3 : "";
                    var a2 = t3.radixPoint || ",";
                    isFinite(t3.digits) && (t3.digits = parseInt(t3.digits)), "number" != typeof e3 && "number" !== t3.inputType || "" === a2 || (e3 = e3.toString().replace(".", a2));
                    var r2 = "-" === e3.charAt(0) || e3.charAt(0) === t3.negationSymbol.front, o2 = e3.split(a2), l2 = o2[0].replace(/[^\-0-9]/g, ""), s2 = o2.length > 1 ? o2[1].replace(/[^0-9]/g, "") : "", c2 = o2.length > 1;
                    e3 = l2 + ("" !== s2 ? a2 + s2 : s2);
                    var f2 = 0;
                    if ("" !== a2 && (f2 = t3.digitsOptional ? t3.digits < s2.length ? t3.digits : s2.length : t3.digits, "" !== s2 || !t3.digitsOptional)) {
                      var p2 = Math.pow(10, f2 || 1);
                      e3 = e3.replace((0, i2.default)(a2), "."), isNaN(parseFloat(e3)) || (e3 = (t3.roundingFN(parseFloat(e3) * p2) / p2).toFixed(f2)), e3 = e3.toString().replace(".", a2);
                    }
                    if (0 === t3.digits && -1 !== e3.indexOf(a2) && (e3 = e3.substring(0, e3.indexOf(a2))), null !== t3.min || null !== t3.max) {
                      var d2 = e3.toString().replace(a2, ".");
                      null !== t3.min && d2 < t3.min ? e3 = t3.min.toString().replace(".", a2) : null !== t3.max && d2 > t3.max && (e3 = t3.max.toString().replace(".", a2));
                    }
                    return r2 && "-" !== e3.charAt(0) && (e3 = "-" + e3), u(e3.toString().split(""), f2, t3, c2).join("");
                  },
                  onBeforeWrite: function(e3, t3, n3, a2) {
                    function r2(e4, t4) {
                      if (false !== a2.__financeInput || t4) {
                        var n4 = e4.indexOf(a2.radixPoint);
                        -1 !== n4 && e4.splice(n4, 1);
                      }
                      if ("" !== a2.groupSeparator) for (; -1 !== (n4 = e4.indexOf(a2.groupSeparator)); ) e4.splice(n4, 1);
                      return e4;
                    }
                    var o2, l2;
                    if (a2.stripLeadingZeroes && (l2 = function(e4, t4) {
                      var n4 = new RegExp("(^" + ("" !== t4.negationSymbol.front ? (0, i2.default)(t4.negationSymbol.front) + "?" : "") + (0, i2.default)(t4.prefix) + ")(.*)(" + (0, i2.default)(t4.suffix) + ("" != t4.negationSymbol.back ? (0, i2.default)(t4.negationSymbol.back) + "?" : "") + "$)").exec(e4.slice().reverse().join("")), a3 = n4 ? n4[2] : "", r3 = false;
                      return a3 && (a3 = a3.split(t4.radixPoint.charAt(0))[0], r3 = new RegExp("^[0" + t4.groupSeparator + "]*").exec(a3)), !(!r3 || !(r3[0].length > 1 || r3[0].length > 0 && r3[0].length < a3.length)) && r3;
                    }(t3, a2))) for (var c2 = t3.join("").lastIndexOf(l2[0].split("").reverse().join("")) - (l2[0] == l2.input ? 0 : 1), f2 = l2[0] == l2.input ? 1 : 0, p2 = l2[0].length - f2; p2 > 0; p2--) this.maskset.validPositions.splice(c2 + p2, 1), delete t3[c2 + p2];
                    if (e3) switch (e3.type) {
                      case "blur":
                      case "checkval":
                        if (null !== a2.min) {
                          var d2 = a2.onUnMask(t3.slice().reverse().join(""), void 0, s.extend({}, a2, {
                            unmaskAsNumber: true
                          }));
                          if (null !== a2.min && d2 < a2.min) return {
                            refreshFromBuffer: true,
                            buffer: u(a2.min.toString().replace(".", a2.radixPoint).split(""), a2.digits, a2).reverse()
                          };
                        }
                        if (t3[t3.length - 1] === a2.negationSymbol.front) {
                          var h = new RegExp("(^" + ("" != a2.negationSymbol.front ? (0, i2.default)(a2.negationSymbol.front) + "?" : "") + (0, i2.default)(a2.prefix) + ")(.*)(" + (0, i2.default)(a2.suffix) + ("" != a2.negationSymbol.back ? (0, i2.default)(a2.negationSymbol.back) + "?" : "") + "$)").exec(r2(t3.slice(), true).reverse().join(""));
                          0 == (h ? h[2] : "") && (o2 = {
                            refreshFromBuffer: true,
                            buffer: [0]
                          });
                        } else if ("" !== a2.radixPoint) {
                          t3.indexOf(a2.radixPoint) === a2.suffix.length && (o2 && o2.buffer ? o2.buffer.splice(0, 1 + a2.suffix.length) : (t3.splice(0, 1 + a2.suffix.length), o2 = {
                            refreshFromBuffer: true,
                            buffer: r2(t3)
                          }));
                        }
                        if (a2.enforceDigitsOnBlur) {
                          var v = (o2 = o2 || {}) && o2.buffer || t3.slice().reverse();
                          o2.refreshFromBuffer = true, o2.buffer = u(v, a2.digits, a2, true).reverse();
                        }
                    }
                    return o2;
                  },
                  onKeyDown: function(e3, t3, n3, i3) {
                    var a2, o2 = s(this);
                    if (3 != e3.location) {
                      var l2, c2 = e3.key;
                      if ((l2 = i3.shortcuts && i3.shortcuts[c2]) && l2.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(l2)), o2.trigger("setvalue"), false;
                    }
                    if (e3.ctrlKey) switch (e3.key) {
                      case r.keys.ArrowUp:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i3.step)), o2.trigger("setvalue"), false;
                      case r.keys.ArrowDown:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i3.step)), o2.trigger("setvalue"), false;
                    }
                    if (!e3.shiftKey && (e3.key === r.keys.Delete || e3.key === r.keys.Backspace || e3.key === r.keys.BACKSPACE_SAFARI) && n3.begin !== t3.length) {
                      if (t3[e3.key === r.keys.Delete ? n3.begin - 1 : n3.end] === i3.negationSymbol.front) return a2 = t3.slice().reverse(), "" !== i3.negationSymbol.front && a2.shift(), "" !== i3.negationSymbol.back && a2.pop(), o2.trigger("setvalue", [a2.join(""), n3.begin]), false;
                      if (true === i3._radixDance) {
                        var f2, p2 = t3.indexOf(i3.radixPoint);
                        if (i3.digitsOptional) {
                          if (0 === p2) return (a2 = t3.slice().reverse()).pop(), o2.trigger("setvalue", [a2.join(""), n3.begin >= a2.length ? a2.length : n3.begin]), false;
                        } else if (-1 !== p2 && (n3.begin < p2 || n3.end < p2 || e3.key === r.keys.Delete && (n3.begin === p2 || n3.begin - 1 === p2))) return n3.begin === n3.end && (e3.key === r.keys.Backspace || e3.key === r.keys.BACKSPACE_SAFARI ? n3.begin++ : e3.key === r.keys.Delete && n3.begin - 1 === p2 && (f2 = s.extend({}, n3), n3.begin--, n3.end--)), (a2 = t3.slice().reverse()).splice(a2.length - n3.begin, n3.begin - n3.end + 1), a2 = u(a2, i3.digits, i3).join(""), f2 && (n3 = f2), o2.trigger("setvalue", [a2, n3.begin >= a2.length ? p2 + 1 : n3.begin]), false;
                      }
                    }
                  }
                },
                currency: {
                  prefix: "",
                  groupSeparator: ",",
                  alias: "numeric",
                  digits: 2,
                  digitsOptional: false
                },
                decimal: {
                  alias: "numeric"
                },
                integer: {
                  alias: "numeric",
                  inputmode: "numeric",
                  digits: 0
                },
                percentage: {
                  alias: "numeric",
                  min: 0,
                  max: 100,
                  suffix: " %",
                  digits: 0,
                  allowMinus: false
                },
                indianns: {
                  alias: "numeric",
                  _mask: function(e3) {
                    return "(" + e3.groupSeparator + "99){*|1}(" + e3.groupSeparator + "999){1|1}";
                  },
                  groupSeparator: ",",
                  radixPoint: ".",
                  placeholder: "0",
                  digits: 2,
                  digitsOptional: false
                }
              });
            },
            9380: function(e2, t2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = void 0;
              var n2 = !("undefined" == typeof window || !window.document || !window.document.createElement);
              t2.default = n2 ? window : {};
            },
            7760: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.HandleNativePlaceholder = function(e3, t3) {
                var n3 = e3 ? e3.inputmask : this;
                if (i2.ie) {
                  if (e3.inputmask._valueGet() !== t3 && (e3.placeholder !== t3 || "" === e3.placeholder)) {
                    var a2 = o.getBuffer.call(n3).slice(), r2 = e3.inputmask._valueGet();
                    if (r2 !== t3) {
                      var l2 = o.getLastValidPosition.call(n3);
                      -1 === l2 && r2 === o.getBufferTemplate.call(n3).join("") ? a2 = [] : -1 !== l2 && u.call(n3, a2), p(e3, a2);
                    }
                  }
                } else e3.placeholder !== t3 && (e3.placeholder = t3, "" === e3.placeholder && e3.removeAttribute("placeholder"));
              }, t2.applyInputValue = c, t2.checkVal = f, t2.clearOptionalTail = u, t2.unmaskedvalue = function(e3) {
                var t3 = e3 ? e3.inputmask : this, n3 = t3.opts, i3 = t3.maskset;
                if (e3) {
                  if (void 0 === e3.inputmask) return e3.value;
                  e3.inputmask && e3.inputmask.refreshValue && c(e3, e3.inputmask._valueGet(true));
                }
                for (var a2 = [], r2 = i3.validPositions, l2 = 0, s2 = r2.length; l2 < s2; l2++) r2[l2] && r2[l2].match && (1 != r2[l2].match.static || Array.isArray(i3.metadata) && true !== r2[l2].generatedInput) && a2.push(r2[l2].input);
                var u2 = 0 === a2.length ? "" : (t3.isRTL ? a2.reverse() : a2).join("");
                if ("function" == typeof n3.onUnMask) {
                  var f2 = (t3.isRTL ? o.getBuffer.call(t3).slice().reverse() : o.getBuffer.call(t3)).join("");
                  u2 = n3.onUnMask.call(t3, f2, u2, n3);
                }
                return u2;
              }, t2.writeBuffer = p;
              var i2 = n2(9845), a = n2(6030), r = n2(2839), o = n2(8711), l = n2(7215), s = n2(4713);
              function c(e3, t3, n3) {
                var i3 = e3 ? e3.inputmask : this, a2 = i3.opts;
                e3.inputmask.refreshValue = false, "function" == typeof a2.onBeforeMask && (t3 = a2.onBeforeMask.call(i3, t3, a2) || t3), f(e3, true, false, t3 = (t3 || "").toString().split(""), n3), i3.undoValue = i3._valueGet(true), (a2.clearMaskOnLostFocus || a2.clearIncomplete) && e3.inputmask._valueGet() === o.getBufferTemplate.call(i3).join("") && -1 === o.getLastValidPosition.call(i3) && e3.inputmask._valueSet("");
              }
              function u(e3) {
                e3.length = 0;
                for (var t3, n3 = s.getMaskTemplate.call(this, true, 0, true, void 0, true); void 0 !== (t3 = n3.shift()); ) e3.push(t3);
                return e3;
              }
              function f(e3, t3, n3, i3, r2) {
                var c2, u2 = e3 ? e3.inputmask : this, f2 = u2.maskset, d = u2.opts, h = u2.dependencyLib, v = i3.slice(), m = "", g = -1, y = d.skipOptionalPartCharacter;
                d.skipOptionalPartCharacter = "", o.resetMaskSet.call(u2, false), u2.clicked = 0, g = d.radixPoint ? o.determineNewCaretPosition.call(u2, {
                  begin: 0,
                  end: 0
                }, false, false === d.__financeInput ? "radixFocus" : void 0).begin : 0, f2.p = g, u2.caretPos = {
                  begin: g
                };
                var k = [], b = u2.caretPos;
                if (v.forEach(function(e4, t4) {
                  if (void 0 !== e4) {
                    var i4 = new h.Event("_checkval");
                    i4.key = e4, m += e4;
                    var r3 = o.getLastValidPosition.call(u2, void 0, true);
                    !function(e5, t5) {
                      for (var n4 = s.getMaskTemplate.call(u2, true, 0).slice(e5, o.seekNext.call(u2, e5, false, false)).join("").replace(/'/g, ""), i5 = n4.indexOf(t5); i5 > 0 && " " === n4[i5 - 1]; ) i5--;
                      var a2 = 0 === i5 && !o.isMask.call(u2, e5) && (s.getTest.call(u2, e5).match.nativeDef === t5.charAt(0) || true === s.getTest.call(u2, e5).match.static && s.getTest.call(u2, e5).match.nativeDef === "'" + t5.charAt(0) || " " === s.getTest.call(u2, e5).match.nativeDef && (s.getTest.call(u2, e5 + 1).match.nativeDef === t5.charAt(0) || true === s.getTest.call(u2, e5 + 1).match.static && s.getTest.call(u2, e5 + 1).match.nativeDef === "'" + t5.charAt(0)));
                      if (!a2 && i5 > 0 && !o.isMask.call(u2, e5, false, true)) {
                        var r4 = o.seekNext.call(u2, e5);
                        u2.caretPos.begin < r4 && (u2.caretPos = {
                          begin: r4
                        });
                      }
                      return a2;
                    }(g, m) ? (c2 = a.EventHandlers.keypressEvent.call(u2, i4, true, false, n3, u2.caretPos.begin)) && (g = u2.caretPos.begin + 1, m = "") : c2 = a.EventHandlers.keypressEvent.call(u2, i4, true, false, n3, r3 + 1), c2 ? (void 0 !== c2.pos && f2.validPositions[c2.pos] && true === f2.validPositions[c2.pos].match.static && void 0 === f2.validPositions[c2.pos].alternation && (k.push(c2.pos), u2.isRTL || (c2.forwardPosition = c2.pos + 1)), p.call(u2, void 0, o.getBuffer.call(u2), c2.forwardPosition, i4, false), u2.caretPos = {
                      begin: c2.forwardPosition,
                      end: c2.forwardPosition
                    }, b = u2.caretPos) : void 0 === f2.validPositions[t4] && v[t4] === s.getPlaceholder.call(u2, t4) && o.isMask.call(u2, t4, true) ? u2.caretPos.begin++ : u2.caretPos = b;
                  }
                }), k.length > 0) {
                  var x, w, P = o.seekNext.call(u2, -1, void 0, false);
                  if (!l.isComplete.call(u2, o.getBuffer.call(u2)) && k.length <= P || l.isComplete.call(u2, o.getBuffer.call(u2)) && k.length > 0 && k.length !== P && 0 === k[0]) {
                    for (var S = P; void 0 !== (x = k.shift()); ) if (x < S) {
                      var O = new h.Event("_checkval");
                      if ((w = f2.validPositions[x]).generatedInput = true, O.key = w.input, (c2 = a.EventHandlers.keypressEvent.call(u2, O, true, false, n3, S)) && void 0 !== c2.pos && c2.pos !== x && f2.validPositions[c2.pos] && true === f2.validPositions[c2.pos].match.static) k.push(c2.pos);
                      else if (!c2) break;
                      S++;
                    }
                  }
                }
                t3 && p.call(u2, e3, o.getBuffer.call(u2), c2 ? c2.forwardPosition : u2.caretPos.begin, r2 || new h.Event("checkval"), r2 && ("input" === r2.type && u2.undoValue !== o.getBuffer.call(u2).join("") || "paste" === r2.type)), d.skipOptionalPartCharacter = y;
              }
              function p(e3, t3, n3, i3, a2) {
                var s2 = e3 ? e3.inputmask : this, c2 = s2.opts, u2 = s2.dependencyLib;
                if (i3 && "function" == typeof c2.onBeforeWrite) {
                  var f2 = c2.onBeforeWrite.call(s2, i3, t3, n3, c2);
                  if (f2) {
                    if (f2.refreshFromBuffer) {
                      var p2 = f2.refreshFromBuffer;
                      l.refreshFromBuffer.call(s2, true === p2 ? p2 : p2.start, p2.end, f2.buffer || t3), t3 = o.getBuffer.call(s2, true);
                    }
                    void 0 !== n3 && (n3 = void 0 !== f2.caret ? f2.caret : n3);
                  }
                }
                if (void 0 !== e3 && (e3.inputmask._valueSet(t3.join("")), void 0 === n3 || void 0 !== i3 && "blur" === i3.type || o.caret.call(s2, e3, n3, void 0, void 0, void 0 !== i3 && "keydown" === i3.type && (i3.key === r.keys.Delete || i3.key === r.keys.Backspace)), void 0 === e3.inputmask.writeBufferHook || e3.inputmask.writeBufferHook(n3), true === a2)) {
                  var d = u2(e3), h = e3.inputmask._valueGet();
                  e3.inputmask.skipInputEvent = true, d.trigger("input"), setTimeout(function() {
                    h === o.getBufferTemplate.call(s2).join("") ? d.trigger("cleared") : true === l.isComplete.call(s2, t3) && d.trigger("complete");
                  }, 0);
                }
              }
            },
            2394: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = void 0;
              var i2 = v(n2(3976)), a = v(n2(7392)), r = v(n2(4963)), o = n2(9716), l = v(n2(9380)), s = n2(7760), c = n2(157), u = n2(2391), f = n2(8711), p = n2(7215), d = n2(4713);
              function h(e3) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, h(e3);
              }
              function v(e3) {
                return e3 && e3.__esModule ? e3 : {
                  default: e3
                };
              }
              var m = l.default.document, g = "_inputmask_opts";
              function y(e3, t3, n3) {
                if (!(this instanceof y)) return new y(e3, t3, n3);
                this.dependencyLib = r.default, this.el = void 0, this.events = {}, this.maskset = void 0, true !== n3 && ("[object Object]" === Object.prototype.toString.call(e3) ? t3 = e3 : (t3 = t3 || {}, e3 && (t3.alias = e3)), this.opts = r.default.extend(true, {}, this.defaults, t3), this.noMasksCache = t3 && void 0 !== t3.definitions, this.userOptions = t3 || {}, k(this.opts.alias, t3, this.opts)), this.refreshValue = false, this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = false, this.validationEvent = false, this.ignorable = false, this.maxLength, this.mouseEnter = false, this.clicked = 0, this.originalPlaceholder = void 0, this.isComposing = false, this.hasAlternator = false;
              }
              function k(e3, t3, n3) {
                var i3 = y.prototype.aliases[e3];
                return i3 ? (i3.alias && k(i3.alias, void 0, n3), r.default.extend(true, n3, i3), r.default.extend(true, n3, t3), true) : (null === n3.mask && (n3.mask = e3), false);
              }
              y.prototype = {
                dataAttribute: "data-inputmask",
                defaults: i2.default,
                definitions: a.default,
                aliases: {},
                masksCache: {},
                i18n: {},
                get isRTL() {
                  return this.opts.isRTL || this.opts.numericInput;
                },
                mask: function(e3) {
                  var t3 = this;
                  return "string" == typeof e3 && (e3 = m.getElementById(e3) || m.querySelectorAll(e3)), (e3 = e3.nodeName ? [e3] : Array.isArray(e3) ? e3 : [].slice.call(e3)).forEach(function(e4, n3) {
                    var i3 = r.default.extend(true, {}, t3.opts);
                    if (function(e5, t4, n4, i4) {
                      function a3(t5, a4) {
                        var r2 = "" === i4 ? t5 : i4 + "-" + t5;
                        null !== (a4 = void 0 !== a4 ? a4 : e5.getAttribute(r2)) && ("string" == typeof a4 && (0 === t5.indexOf("on") ? a4 = l.default[a4] : "false" === a4 ? a4 = false : "true" === a4 && (a4 = true)), n4[t5] = a4);
                      }
                      if (true === t4.importDataAttributes) {
                        var o2, s2, c2, u2, f2 = e5.getAttribute(i4);
                        if (f2 && "" !== f2 && (f2 = f2.replace(/'/g, '"'), s2 = JSON.parse("{" + f2 + "}")), s2) {
                          for (u2 in c2 = void 0, s2) if ("alias" === u2.toLowerCase()) {
                            c2 = s2[u2];
                            break;
                          }
                        }
                        for (o2 in a3("alias", c2), n4.alias && k(n4.alias, n4, t4), t4) {
                          if (s2) {
                            for (u2 in c2 = void 0, s2) if (u2.toLowerCase() === o2.toLowerCase()) {
                              c2 = s2[u2];
                              break;
                            }
                          }
                          a3(o2, c2);
                        }
                      }
                      r.default.extend(true, t4, n4), ("rtl" === e5.dir || t4.rightAlign) && (e5.style.textAlign = "right");
                      ("rtl" === e5.dir || t4.numericInput) && (e5.dir = "ltr", e5.removeAttribute("dir"), t4.isRTL = true);
                      return Object.keys(n4).length;
                    }(e4, i3, r.default.extend(true, {}, t3.userOptions), t3.dataAttribute)) {
                      var a2 = (0, u.generateMaskSet)(i3, t3.noMasksCache);
                      void 0 !== a2 && (void 0 !== e4.inputmask && (e4.inputmask.opts.autoUnmask = true, e4.inputmask.remove()), e4.inputmask = new y(void 0, void 0, true), e4.inputmask.opts = i3, e4.inputmask.noMasksCache = t3.noMasksCache, e4.inputmask.userOptions = r.default.extend(true, {}, t3.userOptions), e4.inputmask.el = e4, e4.inputmask.$el = (0, r.default)(e4), e4.inputmask.maskset = a2, r.default.data(e4, g, t3.userOptions), c.mask.call(e4.inputmask));
                    }
                  }), e3 && e3[0] && e3[0].inputmask || this;
                },
                option: function(e3, t3) {
                  return "string" == typeof e3 ? this.opts[e3] : "object" === h(e3) ? (r.default.extend(this.userOptions, e3), this.el && true !== t3 && this.mask(this.el), this) : void 0;
                },
                unmaskedvalue: function(e3) {
                  if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e3) {
                    var t3 = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e3, this.opts) || e3).split("");
                    s.checkVal.call(this, void 0, false, false, t3), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, f.getBuffer.call(this), 0, this.opts);
                  }
                  return s.unmaskedvalue.call(this, this.el);
                },
                remove: function() {
                  if (this.el) {
                    r.default.data(this.el, g, null);
                    var e3 = this.opts.autoUnmask ? (0, s.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                    e3 !== f.getBufferTemplate.call(this).join("") ? this._valueSet(e3, this.opts.autoUnmask) : this._valueSet(""), o.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                      get: this.__valueGet,
                      set: this.__valueSet,
                      configurable: true
                    }) : m.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                  }
                  return this.el;
                },
                getemptymask: function() {
                  return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), (this.isRTL ? f.getBufferTemplate.call(this).reverse() : f.getBufferTemplate.call(this)).join("");
                },
                hasMaskedValue: function() {
                  return !this.opts.autoUnmask;
                },
                isComplete: function() {
                  return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), p.isComplete.call(this, f.getBuffer.call(this));
                },
                getmetadata: function() {
                  if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                    var e3 = d.getMaskTemplate.call(this, true, 0, false).join("");
                    return this.maskset.metadata.forEach(function(t3) {
                      return t3.mask !== e3 || (e3 = t3, false);
                    }), e3;
                  }
                  return this.maskset.metadata;
                },
                isValid: function(e3) {
                  if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), e3) {
                    var t3 = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e3, this.opts) || e3).split("");
                    s.checkVal.call(this, void 0, true, false, t3);
                  } else e3 = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                  for (var n3 = f.getBuffer.call(this), i3 = f.determineLastRequiredPosition.call(this), a2 = n3.length - 1; a2 > i3 && !f.isMask.call(this, a2); a2--) ;
                  return n3.splice(i3, a2 + 1 - i3), p.isComplete.call(this, n3) && e3 === (this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""));
                },
                format: function(e3, t3) {
                  this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache);
                  var n3 = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e3, this.opts) || e3).split("");
                  s.checkVal.call(this, void 0, true, false, n3);
                  var i3 = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                  return t3 ? {
                    value: i3,
                    metadata: this.getmetadata()
                  } : i3;
                },
                setValue: function(e3) {
                  this.el && (0, r.default)(this.el).trigger("setvalue", [e3]);
                },
                analyseMask: u.analyseMask
              }, y.extendDefaults = function(e3) {
                r.default.extend(true, y.prototype.defaults, e3);
              }, y.extendDefinitions = function(e3) {
                r.default.extend(true, y.prototype.definitions, e3);
              }, y.extendAliases = function(e3) {
                r.default.extend(true, y.prototype.aliases, e3);
              }, y.format = function(e3, t3, n3) {
                return y(t3).format(e3, n3);
              }, y.unmask = function(e3, t3) {
                return y(t3).unmaskedvalue(e3);
              }, y.isValid = function(e3, t3) {
                return y(t3).isValid(e3);
              }, y.remove = function(e3) {
                "string" == typeof e3 && (e3 = m.getElementById(e3) || m.querySelectorAll(e3)), (e3 = e3.nodeName ? [e3] : e3).forEach(function(e4) {
                  e4.inputmask && e4.inputmask.remove();
                });
              }, y.setValue = function(e3, t3) {
                "string" == typeof e3 && (e3 = m.getElementById(e3) || m.querySelectorAll(e3)), (e3 = e3.nodeName ? [e3] : e3).forEach(function(e4) {
                  e4.inputmask ? e4.inputmask.setValue(t3) : (0, r.default)(e4).trigger("setvalue", [t3]);
                });
              }, y.dependencyLib = r.default, l.default.Inputmask = y;
              t2.default = y;
            },
            5296: function(e2, t2, n2) {
              function i2(e3) {
                return i2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, i2(e3);
              }
              var a = d(n2(9380)), r = d(n2(2394));
              function o(e3, t3) {
                for (var n3 = 0; n3 < t3.length; n3++) {
                  var a2 = t3[n3];
                  a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e3, (r2 = a2.key, o2 = void 0, o2 = function(e4, t4) {
                    if ("object" !== i2(e4) || null === e4) return e4;
                    var n4 = e4[Symbol.toPrimitive];
                    if (void 0 !== n4) {
                      var a3 = n4.call(e4, t4 || "default");
                      if ("object" !== i2(a3)) return a3;
                      throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t4 ? String : Number)(e4);
                  }(r2, "string"), "symbol" === i2(o2) ? o2 : String(o2)), a2);
                }
                var r2, o2;
              }
              function l(e3) {
                var t3 = u();
                return function() {
                  var n3, a2 = p(e3);
                  if (t3) {
                    var r2 = p(this).constructor;
                    n3 = Reflect.construct(a2, arguments, r2);
                  } else n3 = a2.apply(this, arguments);
                  return function(e4, t4) {
                    if (t4 && ("object" === i2(t4) || "function" == typeof t4)) return t4;
                    if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e5) {
                      if (void 0 === e5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e5;
                    }(e4);
                  }(this, n3);
                };
              }
              function s(e3) {
                var t3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
                return s = function(e4) {
                  if (null === e4 || !function(e5) {
                    try {
                      return -1 !== Function.toString.call(e5).indexOf("[native code]");
                    } catch (t4) {
                      return "function" == typeof e5;
                    }
                  }(e4)) return e4;
                  if ("function" != typeof e4) throw new TypeError("Super expression must either be null or a function");
                  if (void 0 !== t3) {
                    if (t3.has(e4)) return t3.get(e4);
                    t3.set(e4, n3);
                  }
                  function n3() {
                    return c(e4, arguments, p(this).constructor);
                  }
                  return n3.prototype = Object.create(e4.prototype, {
                    constructor: {
                      value: n3,
                      enumerable: false,
                      writable: true,
                      configurable: true
                    }
                  }), f(n3, e4);
                }, s(e3);
              }
              function c(e3, t3, n3) {
                return c = u() ? Reflect.construct.bind() : function(e4, t4, n4) {
                  var i3 = [null];
                  i3.push.apply(i3, t4);
                  var a2 = new (Function.bind.apply(e4, i3))();
                  return n4 && f(a2, n4.prototype), a2;
                }, c.apply(null, arguments);
              }
              function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" == typeof Proxy) return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }
              function f(e3, t3) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
                  return e4.__proto__ = t4, e4;
                }, f(e3, t3);
              }
              function p(e3) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
                  return e4.__proto__ || Object.getPrototypeOf(e4);
                }, p(e3);
              }
              function d(e3) {
                return e3 && e3.__esModule ? e3 : {
                  default: e3
                };
              }
              var h = a.default.document;
              if (h && h.head && h.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                var v = function(e3) {
                  !function(e4, t4) {
                    if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
                    e4.prototype = Object.create(t4 && t4.prototype, {
                      constructor: {
                        value: e4,
                        writable: true,
                        configurable: true
                      }
                    }), Object.defineProperty(e4, "prototype", {
                      writable: false
                    }), t4 && f(e4, t4);
                  }(s2, e3);
                  var t3, n3, i3, a2 = l(s2);
                  function s2() {
                    var e4;
                    !function(e5, t5) {
                      if (!(e5 instanceof t5)) throw new TypeError("Cannot call a class as a function");
                    }(this, s2);
                    var t4 = (e4 = a2.call(this)).getAttributeNames(), n4 = e4.attachShadow({
                      mode: "closed"
                    });
                    for (var i4 in e4.input = h.createElement("input"), e4.input.type = "text", n4.appendChild(e4.input), t4) Object.prototype.hasOwnProperty.call(t4, i4) && e4.input.setAttribute(t4[i4], e4.getAttribute(t4[i4]));
                    var o2 = new r.default();
                    return o2.dataAttribute = "", o2.mask(e4.input), e4.input.inputmask.shadowRoot = n4, e4;
                  }
                  return t3 = s2, (n3 = [{
                    key: "attributeChangedCallback",
                    value: function(e4, t4, n4) {
                      this.input.setAttribute(e4, n4);
                    }
                  }, {
                    key: "value",
                    get: function() {
                      return this.input.value;
                    },
                    set: function(e4) {
                      this.input.value = e4;
                    }
                  }]) && o(t3.prototype, n3), i3 && o(t3, i3), Object.defineProperty(t3, "prototype", {
                    writable: false
                  }), s2;
                }(s(HTMLElement));
                a.default.customElements.define("input-mask", v);
              }
            },
            2839: function(e2, t2) {
              function n2(e3) {
                return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, n2(e3);
              }
              function i2(e3, t3) {
                return function(e4) {
                  if (Array.isArray(e4)) return e4;
                }(e3) || function(e4, t4) {
                  var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                  if (null != n3) {
                    var i3, a2, r2, o2, l2 = [], s2 = true, c = false;
                    try {
                      if (r2 = (n3 = n3.call(e4)).next, 0 === t4) {
                        if (Object(n3) !== n3) return;
                        s2 = false;
                      } else for (; !(s2 = (i3 = r2.call(n3)).done) && (l2.push(i3.value), l2.length !== t4); s2 = true) ;
                    } catch (e5) {
                      c = true, a2 = e5;
                    } finally {
                      try {
                        if (!s2 && null != n3.return && (o2 = n3.return(), Object(o2) !== o2)) return;
                      } finally {
                        if (c) throw a2;
                      }
                    }
                    return l2;
                  }
                }(e3, t3) || function(e4, t4) {
                  if (!e4) return;
                  if ("string" == typeof e4) return a(e4, t4);
                  var n3 = Object.prototype.toString.call(e4).slice(8, -1);
                  "Object" === n3 && e4.constructor && (n3 = e4.constructor.name);
                  if ("Map" === n3 || "Set" === n3) return Array.from(e4);
                  if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return a(e4, t4);
                }(e3, t3) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
              }
              function a(e3, t3) {
                (null == t3 || t3 > e3.length) && (t3 = e3.length);
                for (var n3 = 0, i3 = new Array(t3); n3 < t3; n3++) i3[n3] = e3[n3];
                return i3;
              }
              function r(e3, t3) {
                var n3 = Object.keys(e3);
                if (Object.getOwnPropertySymbols) {
                  var i3 = Object.getOwnPropertySymbols(e3);
                  t3 && (i3 = i3.filter(function(t4) {
                    return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                  })), n3.push.apply(n3, i3);
                }
                return n3;
              }
              function o(e3, t3, i3) {
                return (t3 = function(e4) {
                  var t4 = function(e5, t5) {
                    if ("object" !== n2(e5) || null === e5) return e5;
                    var i4 = e5[Symbol.toPrimitive];
                    if (void 0 !== i4) {
                      var a2 = i4.call(e5, t5 || "default");
                      if ("object" !== n2(a2)) return a2;
                      throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t5 ? String : Number)(e5);
                  }(e4, "string");
                  return "symbol" === n2(t4) ? t4 : String(t4);
                }(t3)) in e3 ? Object.defineProperty(e3, t3, {
                  value: i3,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e3[t3] = i3, e3;
              }
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.keys = t2.keyCode = void 0, t2.toKey = function(e3, t3) {
                return s[e3] || (t3 ? String.fromCharCode(e3) : String.fromCharCode(e3).toLowerCase());
              }, t2.toKeyCode = function(e3) {
                return l[e3];
              };
              var l = t2.keyCode = function(e3) {
                for (var t3 = 1; t3 < arguments.length; t3++) {
                  var n3 = null != arguments[t3] ? arguments[t3] : {};
                  t3 % 2 ? r(Object(n3), true).forEach(function(t4) {
                    o(e3, t4, n3[t4]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : r(Object(n3)).forEach(function(t4) {
                    Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                  });
                }
                return e3;
              }({
                c: 67,
                x: 88,
                z: 90,
                BACKSPACE_SAFARI: 127,
                Enter: 13,
                Meta_LEFT: 91,
                Meta_RIGHT: 92,
                Space: 32
              }, {
                Alt: 18,
                AltGraph: 18,
                ArrowDown: 40,
                ArrowLeft: 37,
                ArrowRight: 39,
                ArrowUp: 38,
                Backspace: 8,
                CapsLock: 20,
                Control: 17,
                ContextMenu: 93,
                Dead: 221,
                Delete: 46,
                End: 35,
                Escape: 27,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                Home: 36,
                Insert: 45,
                NumLock: 144,
                PageDown: 34,
                PageUp: 33,
                Pause: 19,
                PrintScreen: 44,
                Process: 229,
                Shift: 16,
                ScrollLock: 145,
                Tab: 9,
                Unidentified: 229
              }), s = Object.entries(l).reduce(function(e3, t3) {
                var n3 = i2(t3, 2), a2 = n3[0], r2 = n3[1];
                return e3[r2] = void 0 === e3[r2] ? a2 : e3[r2], e3;
              }, {});
              t2.keys = Object.entries(l).reduce(function(e3, t3) {
                var n3 = i2(t3, 2), a2 = n3[0];
                n3[1];
                return e3[a2] = "Space" === a2 ? " " : a2, e3;
              }, {});
            },
            2391: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.analyseMask = function(e3, t3, n3) {
                var i3, a2, s2, c2, u, f, p = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, h = false, v = new o.default(), m = [], g = [], y = false;
                function k(e4, i4, a3) {
                  a3 = void 0 !== a3 ? a3 : e4.matches.length;
                  var o2 = e4.matches[a3 - 1];
                  if (t3) {
                    if (0 === i4.indexOf("[") || h && /\\d|\\s|\\w|\\p/i.test(i4) || "." === i4) {
                      var s3 = n3.casing ? "i" : "";
                      /\\p\{.*}/i.test(i4) && (s3 += "u"), e4.matches.splice(a3++, 0, {
                        fn: new RegExp(i4, s3),
                        static: false,
                        optionality: false,
                        newBlockMarker: void 0 === o2 ? "master" : o2.def !== i4,
                        casing: null,
                        def: i4,
                        placeholder: "object" === l(n3.placeholder) ? n3.placeholder[v.matches.length] : void 0,
                        nativeDef: i4
                      });
                    } else h && (i4 = i4[i4.length - 1]), i4.split("").forEach(function(t4, i5) {
                      o2 = e4.matches[a3 - 1], e4.matches.splice(a3++, 0, {
                        fn: /[a-z]/i.test(n3.staticDefinitionSymbol || t4) ? new RegExp("[" + (n3.staticDefinitionSymbol || t4) + "]", n3.casing ? "i" : "") : null,
                        static: true,
                        optionality: false,
                        newBlockMarker: void 0 === o2 ? "master" : o2.def !== t4 && true !== o2.static,
                        casing: null,
                        def: n3.staticDefinitionSymbol || t4,
                        placeholder: void 0 !== n3.staticDefinitionSymbol ? t4 : "object" === l(n3.placeholder) ? n3.placeholder[v.matches.length] : void 0,
                        nativeDef: (h ? "'" : "") + t4
                      });
                    });
                    h = false;
                  } else {
                    var c3 = n3.definitions && n3.definitions[i4] || n3.usePrototypeDefinitions && r.default.prototype.definitions[i4];
                    c3 && !h ? e4.matches.splice(a3++, 0, {
                      fn: c3.validator ? "string" == typeof c3.validator ? new RegExp(c3.validator, n3.casing ? "i" : "") : new function() {
                        this.test = c3.validator;
                      }() : /./,
                      static: c3.static || false,
                      optionality: c3.optional || false,
                      defOptionality: c3.optional || false,
                      newBlockMarker: void 0 === o2 || c3.optional ? "master" : o2.def !== (c3.definitionSymbol || i4),
                      casing: c3.casing,
                      def: c3.definitionSymbol || i4,
                      placeholder: c3.placeholder,
                      nativeDef: i4,
                      generated: c3.generated
                    }) : (e4.matches.splice(a3++, 0, {
                      fn: /[a-z]/i.test(n3.staticDefinitionSymbol || i4) ? new RegExp("[" + (n3.staticDefinitionSymbol || i4) + "]", n3.casing ? "i" : "") : null,
                      static: true,
                      optionality: false,
                      newBlockMarker: void 0 === o2 ? "master" : o2.def !== i4 && true !== o2.static,
                      casing: null,
                      def: n3.staticDefinitionSymbol || i4,
                      placeholder: void 0 !== n3.staticDefinitionSymbol ? i4 : void 0,
                      nativeDef: (h ? "'" : "") + i4
                    }), h = false);
                  }
                }
                function b() {
                  if (m.length > 0) {
                    if (k(c2 = m[m.length - 1], a2), c2.isAlternator) {
                      u = m.pop();
                      for (var e4 = 0; e4 < u.matches.length; e4++) u.matches[e4].isGroup && (u.matches[e4].isGroup = false);
                      m.length > 0 ? (c2 = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                    }
                  } else k(v, a2);
                }
                function x(e4) {
                  var t4 = new o.default(true);
                  return t4.openGroup = false, t4.matches = e4, t4;
                }
                function w() {
                  if ((s2 = m.pop()).openGroup = false, void 0 !== s2) if (m.length > 0) {
                    if ((c2 = m[m.length - 1]).matches.push(s2), c2.isAlternator) {
                      u = m.pop();
                      for (var e4 = 0; e4 < u.matches.length; e4++) u.matches[e4].isGroup = false, u.matches[e4].alternatorGroup = false;
                      m.length > 0 ? (c2 = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                    }
                  } else v.matches.push(s2);
                  else b();
                }
                function P(e4) {
                  var t4 = e4.pop();
                  return t4.isQuantifier && (t4 = x([e4.pop(), t4])), t4;
                }
                t3 && (n3.optionalmarker[0] = void 0, n3.optionalmarker[1] = void 0);
                for (; i3 = t3 ? d.exec(e3) : p.exec(e3); ) {
                  if (a2 = i3[0], t3) {
                    switch (a2.charAt(0)) {
                      case "?":
                        a2 = "{0,1}";
                        break;
                      case "+":
                      case "*":
                        a2 = "{" + a2 + "}";
                        break;
                      case "|":
                        if (0 === m.length) {
                          var S = x(v.matches);
                          S.openGroup = true, m.push(S), v.matches = [], y = true;
                        }
                    }
                    switch (a2) {
                      case "\\d":
                        a2 = "[0-9]";
                        break;
                      case "\\p":
                        a2 += d.exec(e3)[0], a2 += d.exec(e3)[0];
                    }
                  }
                  if (h) b();
                  else switch (a2.charAt(0)) {
                    case "$":
                    case "^":
                      t3 || b();
                      break;
                    case n3.escapeChar:
                      h = true, t3 && b();
                      break;
                    case n3.optionalmarker[1]:
                    case n3.groupmarker[1]:
                      w();
                      break;
                    case n3.optionalmarker[0]:
                      m.push(new o.default(false, true));
                      break;
                    case n3.groupmarker[0]:
                      m.push(new o.default(true));
                      break;
                    case n3.quantifiermarker[0]:
                      var O = new o.default(false, false, true), _2 = (a2 = a2.replace(/[{}?]/g, "")).split("|"), M = _2[0].split(","), E = isNaN(M[0]) ? M[0] : parseInt(M[0]), j = 1 === M.length ? E : isNaN(M[1]) ? M[1] : parseInt(M[1]), T = isNaN(_2[1]) ? _2[1] : parseInt(_2[1]);
                      "*" !== E && "+" !== E || (E = "*" === j ? 0 : 1), O.quantifier = {
                        min: E,
                        max: j,
                        jit: T
                      };
                      var A = m.length > 0 ? m[m.length - 1].matches : v.matches;
                      (i3 = A.pop()).isGroup || (i3 = x([i3])), A.push(i3), A.push(O);
                      break;
                    case n3.alternatormarker:
                      if (m.length > 0) {
                        var D = (c2 = m[m.length - 1]).matches[c2.matches.length - 1];
                        f = c2.openGroup && (void 0 === D.matches || false === D.isGroup && false === D.isAlternator) ? m.pop() : P(c2.matches);
                      } else f = P(v.matches);
                      if (f.isAlternator) m.push(f);
                      else if (f.alternatorGroup ? (u = m.pop(), f.alternatorGroup = false) : u = new o.default(false, false, false, true), u.matches.push(f), m.push(u), f.openGroup) {
                        f.openGroup = false;
                        var L = new o.default(true);
                        L.alternatorGroup = true, m.push(L);
                      }
                      break;
                    default:
                      b();
                  }
                }
                y && w();
                for (; m.length > 0; ) s2 = m.pop(), v.matches.push(s2);
                v.matches.length > 0 && (!function e4(i4) {
                  i4 && i4.matches && i4.matches.forEach(function(a3, r2) {
                    var o2 = i4.matches[r2 + 1];
                    (void 0 === o2 || void 0 === o2.matches || false === o2.isQuantifier) && a3 && a3.isGroup && (a3.isGroup = false, t3 || (k(a3, n3.groupmarker[0], 0), true !== a3.openGroup && k(a3, n3.groupmarker[1]))), e4(a3);
                  });
                }(v), g.push(v));
                (n3.numericInput || n3.isRTL) && function e4(t4) {
                  for (var i4 in t4.matches = t4.matches.reverse(), t4.matches) if (Object.prototype.hasOwnProperty.call(t4.matches, i4)) {
                    var a3 = parseInt(i4);
                    if (t4.matches[i4].isQuantifier && t4.matches[a3 + 1] && t4.matches[a3 + 1].isGroup) {
                      var r2 = t4.matches[i4];
                      t4.matches.splice(i4, 1), t4.matches.splice(a3 + 1, 0, r2);
                    }
                    void 0 !== t4.matches[i4].matches ? t4.matches[i4] = e4(t4.matches[i4]) : t4.matches[i4] = ((o2 = t4.matches[i4]) === n3.optionalmarker[0] ? o2 = n3.optionalmarker[1] : o2 === n3.optionalmarker[1] ? o2 = n3.optionalmarker[0] : o2 === n3.groupmarker[0] ? o2 = n3.groupmarker[1] : o2 === n3.groupmarker[1] && (o2 = n3.groupmarker[0]), o2);
                  }
                  var o2;
                  return t4;
                }(g[0]);
                return g;
              }, t2.generateMaskSet = function(e3, t3) {
                var n3;
                function o2(e4, t4) {
                  var n4 = t4.repeat, i3 = t4.groupmarker, r2 = t4.quantifiermarker, o3 = t4.keepStatic;
                  if (n4 > 0 || "*" === n4 || "+" === n4) {
                    var l2 = "*" === n4 ? 0 : "+" === n4 ? 1 : n4;
                    if (l2 != n4) e4 = i3[0] + e4 + i3[1] + r2[0] + l2 + "," + n4 + r2[1];
                    else for (var c3 = e4, u2 = 1; u2 < l2; u2++) e4 += c3;
                  }
                  if (true === o3) {
                    var f = e4.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                    f && f.forEach(function(t5, n5) {
                      var i4 = function(e5, t6) {
                        return function(e6) {
                          if (Array.isArray(e6)) return e6;
                        }(e5) || function(e6, t7) {
                          var n6 = null == e6 ? null : "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
                          if (null != n6) {
                            var i5, a2, r4, o5, l3 = [], s2 = true, c4 = false;
                            try {
                              if (r4 = (n6 = n6.call(e6)).next, 0 === t7) {
                                if (Object(n6) !== n6) return;
                                s2 = false;
                              } else for (; !(s2 = (i5 = r4.call(n6)).done) && (l3.push(i5.value), l3.length !== t7); s2 = true) ;
                            } catch (e7) {
                              c4 = true, a2 = e7;
                            } finally {
                              try {
                                if (!s2 && null != n6.return && (o5 = n6.return(), Object(o5) !== o5)) return;
                              } finally {
                                if (c4) throw a2;
                              }
                            }
                            return l3;
                          }
                        }(e5, t6) || function(e6, t7) {
                          if (!e6) return;
                          if ("string" == typeof e6) return s(e6, t7);
                          var n6 = Object.prototype.toString.call(e6).slice(8, -1);
                          "Object" === n6 && e6.constructor && (n6 = e6.constructor.name);
                          if ("Map" === n6 || "Set" === n6) return Array.from(e6);
                          if ("Arguments" === n6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6)) return s(e6, t7);
                        }(e5, t6) || function() {
                          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                      }(t5.split("["), 2), r3 = i4[0], o4 = i4[1];
                      o4 = o4.replace("]", ""), e4 = e4.replace(new RegExp("".concat((0, a.default)(r3), "\\[").concat((0, a.default)(o4), "\\]")), r3.charAt(0) === o4.charAt(0) ? "(".concat(r3, "|").concat(r3).concat(o4, ")") : "".concat(r3, "[").concat(o4, "]"));
                    });
                  }
                  return e4;
                }
                function c2(e4, n4, a2) {
                  var s2, c3, u2 = false;
                  return null !== e4 && "" !== e4 || ((u2 = null !== a2.regex) ? e4 = (e4 = a2.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (u2 = true, e4 = ".*")), 1 === e4.length && false === a2.greedy && 0 !== a2.repeat && (a2.placeholder = ""), e4 = o2(e4, a2), c3 = u2 ? "regex_" + a2.regex : a2.numericInput ? e4.split("").reverse().join("") : e4, null !== a2.keepStatic && (c3 = "ks_" + a2.keepStatic + c3), "object" === l(a2.placeholder) && (c3 = "ph_" + JSON.stringify(a2.placeholder) + c3), void 0 === r.default.prototype.masksCache[c3] || true === t3 ? (s2 = {
                    mask: e4,
                    maskToken: r.default.prototype.analyseMask(e4, u2, a2),
                    validPositions: [],
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    excludes: {},
                    metadata: n4,
                    maskLength: void 0,
                    jitOffset: {}
                  }, true !== t3 && (r.default.prototype.masksCache[c3] = s2, s2 = i2.default.extend(true, {}, r.default.prototype.masksCache[c3]))) : s2 = i2.default.extend(true, {}, r.default.prototype.masksCache[c3]), s2;
                }
                "function" == typeof e3.mask && (e3.mask = e3.mask(e3));
                if (Array.isArray(e3.mask)) {
                  if (e3.mask.length > 1) {
                    null === e3.keepStatic && (e3.keepStatic = true);
                    var u = e3.groupmarker[0];
                    return (e3.isRTL ? e3.mask.reverse() : e3.mask).forEach(function(t4) {
                      u.length > 1 && (u += e3.alternatormarker), void 0 !== t4.mask && "function" != typeof t4.mask ? u += t4.mask : u += t4;
                    }), c2(u += e3.groupmarker[1], e3.mask, e3);
                  }
                  e3.mask = e3.mask.pop();
                }
                n3 = e3.mask && void 0 !== e3.mask.mask && "function" != typeof e3.mask.mask ? c2(e3.mask.mask, e3.mask, e3) : c2(e3.mask, e3.mask, e3);
                null === e3.keepStatic && (e3.keepStatic = false);
                return n3;
              };
              var i2 = c(n2(4963)), a = c(n2(7184)), r = c(n2(2394)), o = c(n2(9695));
              function l(e3) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, l(e3);
              }
              function s(e3, t3) {
                (null == t3 || t3 > e3.length) && (t3 = e3.length);
                for (var n3 = 0, i3 = new Array(t3); n3 < t3; n3++) i3[n3] = e3[n3];
                return i3;
              }
              function c(e3) {
                return e3 && e3.__esModule ? e3 : {
                  default: e3
                };
              }
            },
            157: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.mask = function() {
                var e3 = this, t3 = this.opts, n3 = this.el, c = this.dependencyLib;
                r.EventRuler.off(n3);
                var u = function(t4, n4) {
                  var i3 = t4.getAttribute("type"), a2 = "input" === t4.tagName.toLowerCase() && n4.supportsInputType.includes(i3) || t4.isContentEditable || "textarea" === t4.tagName.toLowerCase();
                  if (!a2) if ("input" === t4.tagName.toLowerCase()) {
                    var s2 = document.createElement("input");
                    s2.setAttribute("type", i3), a2 = "text" === s2.type, s2 = null;
                  } else a2 = "partial";
                  return false !== a2 ? function(t5) {
                    var i4, a3;
                    function s3() {
                      return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== l.getLastValidPosition.call(e3) || true !== n4.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && n4.clearMaskOnLostFocus ? (e3.isRTL ? o.clearOptionalTail.call(e3, l.getBuffer.call(e3).slice()).reverse() : o.clearOptionalTail.call(e3, l.getBuffer.call(e3).slice())).join("") : i4.call(this) : "" : i4.call(this);
                    }
                    function u2(e4) {
                      a3.call(this, e4), this.inputmask && (0, o.applyInputValue)(this, e4);
                    }
                    if (!t5.inputmask.__valueGet) {
                      if (true !== n4.noValuePatching) {
                        if (Object.getOwnPropertyDescriptor) {
                          var f2 = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t5), "value") : void 0;
                          f2 && f2.get && f2.set ? (i4 = f2.get, a3 = f2.set, Object.defineProperty(t5, "value", {
                            get: s3,
                            set: u2,
                            configurable: true
                          })) : "input" !== t5.tagName.toLowerCase() && (i4 = function() {
                            return this.textContent;
                          }, a3 = function(e4) {
                            this.textContent = e4;
                          }, Object.defineProperty(t5, "value", {
                            get: s3,
                            set: u2,
                            configurable: true
                          }));
                        } else document.__lookupGetter__ && t5.__lookupGetter__("value") && (i4 = t5.__lookupGetter__("value"), a3 = t5.__lookupSetter__("value"), t5.__defineGetter__("value", s3), t5.__defineSetter__("value", u2));
                        t5.inputmask.__valueGet = i4, t5.inputmask.__valueSet = a3;
                      }
                      t5.inputmask._valueGet = function(t6) {
                        return e3.isRTL && true !== t6 ? i4.call(this.el).split("").reverse().join("") : i4.call(this.el);
                      }, t5.inputmask._valueSet = function(t6, n5) {
                        a3.call(this.el, null == t6 ? "" : true !== n5 && e3.isRTL ? t6.split("").reverse().join("") : t6);
                      }, void 0 === i4 && (i4 = function() {
                        return this.value;
                      }, a3 = function(e4) {
                        this.value = e4;
                      }, function(t6) {
                        if (c.valHooks && (void 0 === c.valHooks[t6] || true !== c.valHooks[t6].inputmaskpatch)) {
                          var i5 = c.valHooks[t6] && c.valHooks[t6].get ? c.valHooks[t6].get : function(e4) {
                            return e4.value;
                          }, a4 = c.valHooks[t6] && c.valHooks[t6].set ? c.valHooks[t6].set : function(e4, t7) {
                            return e4.value = t7, e4;
                          };
                          c.valHooks[t6] = {
                            get: function(t7) {
                              if (t7.inputmask) {
                                if (t7.inputmask.opts.autoUnmask) return t7.inputmask.unmaskedvalue();
                                var a5 = i5(t7);
                                return -1 !== l.getLastValidPosition.call(e3, void 0, void 0, t7.inputmask.maskset.validPositions) || true !== n4.nullable ? a5 : "";
                              }
                              return i5(t7);
                            },
                            set: function(e4, t7) {
                              var n5 = a4(e4, t7);
                              return e4.inputmask && (0, o.applyInputValue)(e4, t7), n5;
                            },
                            inputmaskpatch: true
                          };
                        }
                      }(t5.type), function(e4) {
                        r.EventRuler.on(e4, "mouseenter", function() {
                          var e5 = this, t6 = e5.inputmask._valueGet(true);
                          t6 != (e5.inputmask.isRTL ? l.getBuffer.call(e5.inputmask).slice().reverse() : l.getBuffer.call(e5.inputmask)).join("") && (0, o.applyInputValue)(e5, t6);
                        });
                      }(t5));
                    }
                  }(t4) : t4.inputmask = void 0, a2;
                }(n3, t3);
                if (false !== u) {
                  e3.originalPlaceholder = n3.placeholder, e3.maxLength = void 0 !== n3 ? n3.maxLength : void 0, -1 === e3.maxLength && (e3.maxLength = void 0), "inputMode" in n3 && null === n3.getAttribute("inputmode") && (n3.inputMode = t3.inputmode, n3.setAttribute("inputmode", t3.inputmode)), true === u && (t3.showMaskOnFocus = t3.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(n3.autocomplete), i2.iphone && (t3.insertModeVisual = false, n3.setAttribute("autocorrect", "off")), r.EventRuler.on(n3, "submit", a.EventHandlers.submitEvent), r.EventRuler.on(n3, "reset", a.EventHandlers.resetEvent), r.EventRuler.on(n3, "blur", a.EventHandlers.blurEvent), r.EventRuler.on(n3, "focus", a.EventHandlers.focusEvent), r.EventRuler.on(n3, "invalid", a.EventHandlers.invalidEvent), r.EventRuler.on(n3, "click", a.EventHandlers.clickEvent), r.EventRuler.on(n3, "mouseleave", a.EventHandlers.mouseleaveEvent), r.EventRuler.on(n3, "mouseenter", a.EventHandlers.mouseenterEvent), r.EventRuler.on(n3, "paste", a.EventHandlers.pasteEvent), r.EventRuler.on(n3, "cut", a.EventHandlers.cutEvent), r.EventRuler.on(n3, "complete", t3.oncomplete), r.EventRuler.on(n3, "incomplete", t3.onincomplete), r.EventRuler.on(n3, "cleared", t3.oncleared), true !== t3.inputEventOnly && r.EventRuler.on(n3, "keydown", a.EventHandlers.keyEvent), (i2.mobile || t3.inputEventOnly) && n3.removeAttribute("maxLength"), r.EventRuler.on(n3, "input", a.EventHandlers.inputFallBackEvent)), r.EventRuler.on(n3, "setvalue", a.EventHandlers.setValueEvent), void 0 === e3.applyMaskHook || e3.applyMaskHook(), l.getBufferTemplate.call(e3).join(""), e3.undoValue = e3._valueGet(true);
                  var f = (n3.inputmask.shadowRoot || n3.ownerDocument).activeElement;
                  if ("" !== n3.inputmask._valueGet(true) || false === t3.clearMaskOnLostFocus || f === n3) {
                    (0, o.applyInputValue)(n3, n3.inputmask._valueGet(true), t3);
                    var p = l.getBuffer.call(e3).slice();
                    false === s.isComplete.call(e3, p) && t3.clearIncomplete && l.resetMaskSet.call(e3, false), t3.clearMaskOnLostFocus && f !== n3 && (-1 === l.getLastValidPosition.call(e3) ? p = [] : o.clearOptionalTail.call(e3, p)), (false === t3.clearMaskOnLostFocus || t3.showMaskOnFocus && f === n3 || "" !== n3.inputmask._valueGet(true)) && (0, o.writeBuffer)(n3, p), f === n3 && l.caret.call(e3, n3, l.seekNext.call(e3, l.getLastValidPosition.call(e3)));
                  }
                }
              };
              var i2 = n2(9845), a = n2(6030), r = n2(9716), o = n2(7760), l = n2(8711), s = n2(7215);
            },
            9695: function(e2, t2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.default = function(e3, t3, n2, i2) {
                this.matches = [], this.openGroup = e3 || false, this.alternatorGroup = false, this.isGroup = e3 || false, this.isOptional = t3 || false, this.isQuantifier = n2 || false, this.isAlternator = i2 || false, this.quantifier = {
                  min: 1,
                  max: 1
                };
              };
            },
            3194: function() {
              Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function(e2, t2) {
                  if (null == this) throw new TypeError('"this" is null or not defined');
                  var n2 = Object(this), i2 = n2.length >>> 0;
                  if (0 === i2) return false;
                  for (var a = 0 | t2, r = Math.max(a >= 0 ? a : i2 - Math.abs(a), 0); r < i2; ) {
                    if (n2[r] === e2) return true;
                    r++;
                  }
                  return false;
                }
              });
            },
            9302: function() {
              var e2 = Function.bind.call(Function.call, Array.prototype.reduce), t2 = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), n2 = Function.bind.call(Function.call, Array.prototype.concat), i2 = Object.keys;
              Object.entries || (Object.entries = function(a) {
                return e2(i2(a), function(e3, i3) {
                  return n2(e3, "string" == typeof i3 && t2(a, i3) ? [[i3, a[i3]]] : []);
                }, []);
              });
            },
            7149: function() {
              function e2(t2) {
                return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
                  return typeof e3;
                } : function(e3) {
                  return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
                }, e2(t2);
              }
              "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e2("test".__proto__) ? function(e3) {
                return e3.__proto__;
              } : function(e3) {
                return e3.constructor.prototype;
              });
            },
            4013: function() {
              String.prototype.includes || (String.prototype.includes = function(e2, t2) {
                return "number" != typeof t2 && (t2 = 0), !(t2 + e2.length > this.length) && -1 !== this.indexOf(e2, t2);
              });
            },
            8711: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.caret = function(e3, t3, n3, i3, r2) {
                var o2, l2 = this, s2 = this.opts;
                if (void 0 === t3) return "selectionStart" in e3 && "selectionEnd" in e3 ? (t3 = e3.selectionStart, n3 = e3.selectionEnd) : a.default.getSelection ? (o2 = a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e3 && o2.commonAncestorContainer !== e3 || (t3 = o2.startOffset, n3 = o2.endOffset) : document.selection && document.selection.createRange && (n3 = (t3 = 0 - (o2 = document.selection.createRange()).duplicate().moveStart("character", -e3.inputmask._valueGet().length)) + o2.text.length), {
                  begin: i3 ? t3 : f.call(l2, t3),
                  end: i3 ? n3 : f.call(l2, n3)
                };
                if (Array.isArray(t3) && (n3 = l2.isRTL ? t3[0] : t3[1], t3 = l2.isRTL ? t3[1] : t3[0]), void 0 !== t3.begin && (n3 = l2.isRTL ? t3.begin : t3.end, t3 = l2.isRTL ? t3.end : t3.begin), "number" == typeof t3) {
                  t3 = i3 ? t3 : f.call(l2, t3), n3 = "number" == typeof (n3 = i3 ? n3 : f.call(l2, n3)) ? n3 : t3;
                  var c2 = parseInt(((e3.ownerDocument.defaultView || a.default).getComputedStyle ? (e3.ownerDocument.defaultView || a.default).getComputedStyle(e3, null) : e3.currentStyle).fontSize) * n3;
                  if (e3.scrollLeft = c2 > e3.scrollWidth ? c2 : 0, e3.inputmask.caretPos = {
                    begin: t3,
                    end: n3
                  }, s2.insertModeVisual && false === s2.insertMode && t3 === n3 && (r2 || n3++), e3 === (e3.inputmask.shadowRoot || e3.ownerDocument).activeElement) {
                    if ("setSelectionRange" in e3) e3.setSelectionRange(t3, n3);
                    else if (a.default.getSelection) {
                      if (o2 = document.createRange(), void 0 === e3.firstChild || null === e3.firstChild) {
                        var u2 = document.createTextNode("");
                        e3.appendChild(u2);
                      }
                      o2.setStart(e3.firstChild, t3 < e3.inputmask._valueGet().length ? t3 : e3.inputmask._valueGet().length), o2.setEnd(e3.firstChild, n3 < e3.inputmask._valueGet().length ? n3 : e3.inputmask._valueGet().length), o2.collapse(true);
                      var p = a.default.getSelection();
                      p.removeAllRanges(), p.addRange(o2);
                    } else e3.createTextRange && ((o2 = e3.createTextRange()).collapse(true), o2.moveEnd("character", n3), o2.moveStart("character", t3), o2.select());
                    void 0 === e3.inputmask.caretHook || e3.inputmask.caretHook.call(l2, {
                      begin: t3,
                      end: n3
                    });
                  }
                }
              }, t2.determineLastRequiredPosition = function(e3) {
                var t3, n3, i3 = this, a2 = i3.maskset, l2 = i3.dependencyLib, c2 = s.call(i3), u2 = {}, f2 = a2.validPositions[c2], p = o.getMaskTemplate.call(i3, true, s.call(i3), true, true), d = p.length, h = void 0 !== f2 ? f2.locator.slice() : void 0;
                for (t3 = c2 + 1; t3 < p.length; t3++) h = (n3 = o.getTestTemplate.call(i3, t3, h, t3 - 1)).locator.slice(), u2[t3] = l2.extend(true, {}, n3);
                var v = f2 && void 0 !== f2.alternation ? f2.locator[f2.alternation] : void 0;
                for (t3 = d - 1; t3 > c2 && (((n3 = u2[t3]).match.optionality || n3.match.optionalQuantifier && n3.match.newBlockMarker || v && (v !== u2[t3].locator[f2.alternation] && true !== n3.match.static || true === n3.match.static && n3.locator[f2.alternation] && r.checkAlternationMatch.call(i3, n3.locator[f2.alternation].toString().split(","), v.toString().split(",")) && "" !== o.getTests.call(i3, t3)[0].def)) && p[t3] === o.getPlaceholder.call(i3, t3, n3.match)); t3--) d--;
                return e3 ? {
                  l: d,
                  def: u2[d] ? u2[d].match : void 0
                } : d;
              }, t2.determineNewCaretPosition = function(e3, t3, n3) {
                var i3, a2, r2, f2 = this, p = f2.maskset, d = f2.opts;
                t3 && (f2.isRTL ? e3.end = e3.begin : e3.begin = e3.end);
                if (e3.begin === e3.end) {
                  switch (n3 = n3 || d.positionCaretOnClick) {
                    case "none":
                      break;
                    case "select":
                      e3 = {
                        begin: 0,
                        end: l.call(f2).length
                      };
                      break;
                    case "ignore":
                      e3.end = e3.begin = u.call(f2, s.call(f2));
                      break;
                    case "radixFocus":
                      if (f2.clicked > 1 && 0 === p.validPositions.length) break;
                      if (function(e4) {
                        if ("" !== d.radixPoint && 0 !== d.digits) {
                          var t4 = p.validPositions;
                          if (void 0 === t4[e4] || void 0 === t4[e4].input) {
                            if (e4 < u.call(f2, -1)) return true;
                            var n4 = l.call(f2).indexOf(d.radixPoint);
                            if (-1 !== n4) {
                              for (var i4 = 0, a3 = t4.length; i4 < a3; i4++) if (t4[i4] && n4 < i4 && t4[i4].input !== o.getPlaceholder.call(f2, i4)) return false;
                              return true;
                            }
                          }
                        }
                        return false;
                      }(e3.begin)) {
                        var h = l.call(f2).join("").indexOf(d.radixPoint);
                        e3.end = e3.begin = d.numericInput ? u.call(f2, h) : h;
                        break;
                      }
                    default:
                      if (i3 = e3.begin, a2 = s.call(f2, i3, true), i3 <= (r2 = u.call(f2, -1 !== a2 || c.call(f2, 0) ? a2 : -1))) e3.end = e3.begin = c.call(f2, i3, false, true) ? i3 : u.call(f2, i3);
                      else {
                        var v = p.validPositions[a2], m = o.getTestTemplate.call(f2, r2, v ? v.match.locator : void 0, v), g = o.getPlaceholder.call(f2, r2, m.match);
                        if ("" !== g && l.call(f2)[r2] !== g && true !== m.match.optionalQuantifier && true !== m.match.newBlockMarker || !c.call(f2, r2, d.keepStatic, true) && m.match.def === g) {
                          var y = u.call(f2, r2);
                          (i3 >= y || i3 === r2) && (r2 = y);
                        }
                        e3.end = e3.begin = r2;
                      }
                  }
                  return e3;
                }
              }, t2.getBuffer = l, t2.getBufferTemplate = function() {
                var e3 = this.maskset;
                void 0 === e3._buffer && (e3._buffer = o.getMaskTemplate.call(this, false, 1), void 0 === e3.buffer && (e3.buffer = e3._buffer.slice()));
                return e3._buffer;
              }, t2.getLastValidPosition = s, t2.isMask = c, t2.resetMaskSet = function(e3) {
                var t3 = this.maskset;
                t3.buffer = void 0, true !== e3 && (t3.validPositions = [], t3.p = 0);
                false === e3 && (t3.tests = {}, t3.jitOffset = {});
              }, t2.seekNext = u, t2.seekPrevious = function(e3, t3) {
                var n3 = this, i3 = e3 - 1;
                if (e3 <= 0) return 0;
                for (; i3 > 0 && (true === t3 && (true !== o.getTest.call(n3, i3).match.newBlockMarker || !c.call(n3, i3, void 0, true)) || true !== t3 && !c.call(n3, i3, void 0, true)); ) i3--;
                return i3;
              }, t2.translatePosition = f;
              var i2, a = (i2 = n2(9380)) && i2.__esModule ? i2 : {
                default: i2
              }, r = n2(7215), o = n2(4713);
              function l(e3) {
                var t3 = this, n3 = t3.maskset;
                return void 0 !== n3.buffer && true !== e3 || (n3.buffer = o.getMaskTemplate.call(t3, true, s.call(t3), true), void 0 === n3._buffer && (n3._buffer = n3.buffer.slice())), n3.buffer;
              }
              function s(e3, t3, n3) {
                var i3 = this.maskset, a2 = -1, r2 = -1, o2 = n3 || i3.validPositions;
                void 0 === e3 && (e3 = -1);
                for (var l2 = 0, s2 = o2.length; l2 < s2; l2++) o2[l2] && (t3 || true !== o2[l2].generatedInput) && (l2 <= e3 && (a2 = l2), l2 >= e3 && (r2 = l2));
                return -1 === a2 || a2 === e3 ? r2 : -1 === r2 || e3 - a2 < r2 - e3 ? a2 : r2;
              }
              function c(e3, t3, n3) {
                var i3 = this, a2 = this.maskset, r2 = o.getTestTemplate.call(i3, e3).match;
                if ("" === r2.def && (r2 = o.getTest.call(i3, e3).match), true !== r2.static) return r2.fn;
                if (true === n3 && void 0 !== a2.validPositions[e3] && true !== a2.validPositions[e3].generatedInput) return true;
                if (true !== t3 && e3 > -1) {
                  if (n3) {
                    var l2 = o.getTests.call(i3, e3);
                    return l2.length > 1 + ("" === l2[l2.length - 1].match.def ? 1 : 0);
                  }
                  var s2 = o.determineTestTemplate.call(i3, e3, o.getTests.call(i3, e3)), c2 = o.getPlaceholder.call(i3, e3, s2.match);
                  return s2.match.def !== c2;
                }
                return false;
              }
              function u(e3, t3, n3) {
                var i3 = this;
                void 0 === n3 && (n3 = true);
                for (var a2 = e3 + 1; "" !== o.getTest.call(i3, a2).match.def && (true === t3 && (true !== o.getTest.call(i3, a2).match.newBlockMarker || !c.call(i3, a2, void 0, true)) || true !== t3 && !c.call(i3, a2, void 0, n3)); ) a2++;
                return a2;
              }
              function f(e3) {
                var t3 = this.opts, n3 = this.el;
                return !this.isRTL || "number" != typeof e3 || t3.greedy && "" === t3.placeholder || !n3 || (e3 = this._valueGet().length - e3) < 0 && (e3 = 0), e3;
              }
            },
            4713: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.determineTestTemplate = f, t2.getDecisionTaker = s, t2.getMaskTemplate = function(e3, t3, n3, i3, a2) {
                var r2 = this, o2 = this.opts, l2 = this.maskset, s2 = o2.greedy;
                a2 && o2.greedy && (o2.greedy = false, r2.maskset.tests = {});
                t3 = t3 || 0;
                var p2, d2, v, m, g = [], y = 0;
                do {
                  if (true === e3 && l2.validPositions[y]) d2 = (v = a2 && l2.validPositions[y].match.optionality && void 0 === l2.validPositions[y + 1] && (true === l2.validPositions[y].generatedInput || l2.validPositions[y].input == o2.skipOptionalPartCharacter && y > 0) ? f.call(r2, y, h.call(r2, y, p2, y - 1)) : l2.validPositions[y]).match, p2 = v.locator.slice(), g.push(true === n3 ? v.input : false === n3 ? d2.nativeDef : c.call(r2, y, d2));
                  else {
                    d2 = (v = u.call(r2, y, p2, y - 1)).match, p2 = v.locator.slice();
                    var k = true !== i3 && (false !== o2.jitMasking ? o2.jitMasking : d2.jit);
                    (m = (m || l2.validPositions[y - 1]) && d2.static && d2.def !== o2.groupSeparator && null === d2.fn) || false === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(false === n3 ? d2.nativeDef : c.call(r2, g.length, d2)) : m = false;
                  }
                  y++;
                } while (true !== d2.static || "" !== d2.def || t3 > y);
                "" === g[g.length - 1] && g.pop();
                false === n3 && void 0 !== l2.maskLength || (l2.maskLength = y - 1);
                return o2.greedy = s2, g;
              }, t2.getPlaceholder = c, t2.getTest = p, t2.getTestTemplate = u, t2.getTests = h, t2.isSubsetOf = d;
              var i2, a = (i2 = n2(2394)) && i2.__esModule ? i2 : {
                default: i2
              }, r = n2(8711);
              function o(e3) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                  return typeof e4;
                } : function(e4) {
                  return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                }, o(e3);
              }
              function l(e3, t3) {
                var n3 = (null != e3.alternation ? e3.mloc[s(e3)] : e3.locator).join("");
                if ("" !== n3) for (n3 = n3.split(":")[0]; n3.length < t3; ) n3 += "0";
                return n3;
              }
              function s(e3) {
                var t3 = e3.locator[e3.alternation];
                return "string" == typeof t3 && t3.length > 0 && (t3 = t3.split(",")[0]), void 0 !== t3 ? t3.toString() : "";
              }
              function c(e3, t3, n3) {
                var i3 = this, a2 = this.opts, l2 = this.maskset;
                if (void 0 !== (t3 = t3 || p.call(i3, e3).match).placeholder || true === n3) {
                  if ("" !== t3.placeholder && true === t3.static && true !== t3.generated) {
                    var s2 = r.getLastValidPosition.call(i3, e3), c2 = r.seekNext.call(i3, s2);
                    return (n3 ? e3 <= c2 : e3 < c2) ? a2.staticDefinitionSymbol && t3.static ? t3.nativeDef : t3.def : "function" == typeof t3.placeholder ? t3.placeholder(a2) : t3.placeholder;
                  }
                  return "function" == typeof t3.placeholder ? t3.placeholder(a2) : t3.placeholder;
                }
                if (true === t3.static) {
                  if (e3 > -1 && void 0 === l2.validPositions[e3]) {
                    var u2, f2 = h.call(i3, e3), d2 = [];
                    if ("string" == typeof a2.placeholder && f2.length > 1 + ("" === f2[f2.length - 1].match.def ? 1 : 0)) {
                      for (var v = 0; v < f2.length; v++) if ("" !== f2[v].match.def && true !== f2[v].match.optionality && true !== f2[v].match.optionalQuantifier && (true === f2[v].match.static || void 0 === u2 || false !== f2[v].match.fn.test(u2.match.def, l2, e3, true, a2)) && (d2.push(f2[v]), true === f2[v].match.static && (u2 = f2[v]), d2.length > 1 && /[0-9a-bA-Z]/.test(d2[0].match.def))) return a2.placeholder.charAt(e3 % a2.placeholder.length);
                    }
                  }
                  return t3.def;
                }
                return "object" === o(a2.placeholder) ? t3.def : a2.placeholder.charAt(e3 % a2.placeholder.length);
              }
              function u(e3, t3, n3) {
                return this.maskset.validPositions[e3] || f.call(this, e3, h.call(this, e3, t3 ? t3.slice() : t3, n3));
              }
              function f(e3, t3) {
                var n3 = this.opts, i3 = 0, a2 = function(e4, t4) {
                  var n4 = 0, i4 = false;
                  t4.forEach(function(e5) {
                    e5.match.optionality && (0 !== n4 && n4 !== e5.match.optionality && (i4 = true), (0 === n4 || n4 > e5.match.optionality) && (n4 = e5.match.optionality));
                  }), n4 && (0 == e4 || 1 == t4.length ? n4 = 0 : i4 || (n4 = 0));
                  return n4;
                }(e3, t3);
                e3 = e3 > 0 ? e3 - 1 : 0;
                var r2, o2, s2, c2 = l(p.call(this, e3));
                n3.greedy && t3.length > 1 && "" === t3[t3.length - 1].match.def && (i3 = 1);
                for (var u2 = 0; u2 < t3.length - i3; u2++) {
                  var f2 = t3[u2];
                  r2 = l(f2, c2.length);
                  var d2 = Math.abs(r2 - c2);
                  (true !== f2.unMatchedAlternationStopped || t3.filter(function(e4) {
                    return true !== e4.unMatchedAlternationStopped;
                  }).length <= 1) && (void 0 === o2 || "" !== r2 && d2 < o2 || s2 && !n3.greedy && s2.match.optionality && s2.match.optionality - a2 > 0 && "master" === s2.match.newBlockMarker && (!f2.match.optionality || f2.match.optionality - a2 < 1 || !f2.match.newBlockMarker) || s2 && !n3.greedy && s2.match.optionalQuantifier && !f2.match.optionalQuantifier) && (o2 = d2, s2 = f2);
                }
                return s2;
              }
              function p(e3, t3) {
                var n3 = this.maskset;
                return n3.validPositions[e3] ? n3.validPositions[e3] : (t3 || h.call(this, e3))[0];
              }
              function d(e3, t3, n3) {
                function i3(e4) {
                  for (var t4, n4 = [], i4 = -1, a2 = 0, r2 = e4.length; a2 < r2; a2++) if ("-" === e4.charAt(a2)) for (t4 = e4.charCodeAt(a2 + 1); ++i4 < t4; ) n4.push(String.fromCharCode(i4));
                  else i4 = e4.charCodeAt(a2), n4.push(e4.charAt(a2));
                  return n4.join("");
                }
                return e3.match.def === t3.match.nativeDef || !(!(n3.regex || e3.match.fn instanceof RegExp && t3.match.fn instanceof RegExp) || true === e3.match.static || true === t3.match.static) && ("." === t3.match.fn.source || -1 !== i3(t3.match.fn.source.replace(/[[\]/]/g, "")).indexOf(i3(e3.match.fn.source.replace(/[[\]/]/g, ""))));
              }
              function h(e3, t3, n3) {
                var i3, r2, o2 = this, l2 = this.dependencyLib, s2 = this.maskset, c2 = this.opts, u2 = this.el, p2 = s2.maskToken, h2 = t3 ? n3 : 0, v = t3 ? t3.slice() : [0], m = [], g = false, y = t3 ? t3.join("") : "", k = false;
                function b(t4, n4, r3, l3) {
                  function f2(r4, l4, p4) {
                    function v3(e4, t5) {
                      var n5 = 0 === t5.matches.indexOf(e4);
                      return n5 || t5.matches.every(function(i4, a2) {
                        return true === i4.isQuantifier ? n5 = v3(e4, t5.matches[a2 - 1]) : Object.prototype.hasOwnProperty.call(i4, "matches") && (n5 = v3(e4, i4)), !n5;
                      }), n5;
                    }
                    function w2(e4, t5, n5) {
                      var i4, a2;
                      if ((s2.tests[e4] || s2.validPositions[e4]) && (s2.validPositions[e4] ? [s2.validPositions[e4]] : s2.tests[e4]).every(function(e5, r6) {
                        if (e5.mloc[t5]) return i4 = e5, false;
                        var o4 = void 0 !== n5 ? n5 : e5.alternation, l5 = void 0 !== e5.locator[o4] ? e5.locator[o4].toString().indexOf(t5) : -1;
                        return (void 0 === a2 || l5 < a2) && -1 !== l5 && (i4 = e5, a2 = l5), true;
                      }), i4) {
                        var r5 = i4.locator[i4.alternation], o3 = i4.mloc[t5] || i4.mloc[r5] || i4.locator;
                        if (-1 !== o3[o3.length - 1].toString().indexOf(":")) o3.pop();
                        return o3.slice((void 0 !== n5 ? n5 : i4.alternation) + 1);
                      }
                      return void 0 !== n5 ? w2(e4, t5) : void 0;
                    }
                    function P2(t5, n5) {
                      return true === t5.match.static && true !== n5.match.static && n5.match.fn.test(t5.match.def, s2, e3, false, c2, false);
                    }
                    function S2(e4, t5) {
                      var n5 = e4.alternation, i4 = void 0 === t5 || n5 <= t5.alternation && -1 === e4.locator[n5].toString().indexOf(t5.locator[n5]);
                      if (!i4 && n5 > t5.alternation) {
                        for (var a2 = 0; a2 < n5; a2++) if (e4.locator[a2] !== t5.locator[a2]) {
                          n5 = a2, i4 = true;
                          break;
                        }
                      }
                      return !!i4 && function(n6) {
                        e4.mloc = e4.mloc || {};
                        var i5 = e4.locator[n6];
                        if (void 0 !== i5) {
                          if ("string" == typeof i5 && (i5 = i5.split(",")[0]), void 0 === e4.mloc[i5] && (e4.mloc[i5] = e4.locator.slice(), e4.mloc[i5].push(":".concat(e4.alternation))), void 0 !== t5) {
                            for (var a3 in t5.mloc) "string" == typeof a3 && (a3 = parseInt(a3.split(",")[0])), e4.mloc[a3 + 0] = t5.mloc[a3];
                            e4.locator[n6] = Object.keys(e4.mloc).join(",");
                          }
                          return e4.alternation > n6 && (e4.alternation = n6), true;
                        }
                        return e4.alternation = void 0, false;
                      }(n5);
                    }
                    function O(e4, t5) {
                      if (e4.locator.length !== t5.locator.length) return false;
                      for (var n5 = e4.alternation + 1; n5 < e4.locator.length; n5++) if (e4.locator[n5] !== t5.locator[n5]) return false;
                      return true;
                    }
                    if (h2 > e3 + c2._maxTestPos) throw new Error("Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ".concat(s2.mask));
                    if (h2 === e3 && void 0 === r4.matches) {
                      if (m.push({
                        match: r4,
                        locator: l4.reverse(),
                        cd: y,
                        mloc: {}
                      }), !r4.optionality || void 0 !== p4 || !(c2.definitions && c2.definitions[r4.nativeDef] && c2.definitions[r4.nativeDef].optional || a.default.prototype.definitions[r4.nativeDef] && a.default.prototype.definitions[r4.nativeDef].optional)) return true;
                      g = true, h2 = e3;
                    } else if (void 0 !== r4.matches) {
                      if (r4.isGroup && p4 !== r4) return function() {
                        if (r4 = f2(t4.matches[t4.matches.indexOf(r4) + 1], l4, p4)) return true;
                      }();
                      if (r4.isOptional) return function() {
                        var t5 = r4, a2 = m.length;
                        if (r4 = b(r4, n4, l4, p4), m.length > 0) {
                          if (m.forEach(function(e4, t6) {
                            t6 >= a2 && (e4.match.optionality = e4.match.optionality ? e4.match.optionality + 1 : 1);
                          }), i3 = m[m.length - 1].match, void 0 !== p4 || !v3(i3, t5)) return r4;
                          g = true, h2 = e3;
                        }
                      }();
                      if (r4.isAlternator) return function() {
                        function i4(e4) {
                          for (var t5, n5 = e4.matches[0].matches ? e4.matches[0].matches.length : 1, i5 = 0; i5 < e4.matches.length && n5 === (t5 = e4.matches[i5].matches ? e4.matches[i5].matches.length : 1); i5++) ;
                          return n5 !== t5;
                        }
                        o2.hasAlternator = true;
                        var a2, v4 = r4, y2 = [], b2 = m.slice(), x2 = l4.length, _2 = n4.length > 0 ? n4.shift() : -1;
                        if (-1 === _2 || "string" == typeof _2) {
                          var M, E = h2, j = n4.slice(), T = [];
                          if ("string" == typeof _2) T = _2.split(",");
                          else for (M = 0; M < v4.matches.length; M++) T.push(M.toString());
                          if (void 0 !== s2.excludes[e3]) {
                            for (var A = T.slice(), D = 0, L = s2.excludes[e3].length; D < L; D++) {
                              var C = s2.excludes[e3][D].toString().split(":");
                              l4.length == C[1] && T.splice(T.indexOf(C[0]), 1);
                            }
                            0 === T.length && (delete s2.excludes[e3], T = A);
                          }
                          (true === c2.keepStatic || isFinite(parseInt(c2.keepStatic)) && E >= c2.keepStatic) && (T = T.slice(0, 1));
                          for (var B = 0; B < T.length; B++) {
                            M = parseInt(T[B]), m = [], n4 = "string" == typeof _2 && w2(h2, M, x2) || j.slice();
                            var I = v4.matches[M];
                            if (I && f2(I, [M].concat(l4), p4)) r4 = true;
                            else if (0 === B && (k = i4(v4)), I && I.matches && I.matches.length > v4.matches[0].matches.length) break;
                            a2 = m.slice(), h2 = E, m = [];
                            for (var R = 0; R < a2.length; R++) {
                              var F = a2[R], N = false;
                              F.alternation = F.alternation || x2, S2(F);
                              for (var V = 0; V < y2.length; V++) {
                                var G = y2[V];
                                if ("string" != typeof _2 || void 0 !== F.alternation && T.includes(F.locator[F.alternation].toString())) {
                                  if (F.match.nativeDef === G.match.nativeDef) {
                                    N = true, S2(G, F);
                                    break;
                                  }
                                  if (d(F, G, c2)) {
                                    S2(F, G) && (N = true, y2.splice(y2.indexOf(G), 0, F));
                                    break;
                                  }
                                  if (d(G, F, c2)) {
                                    S2(G, F);
                                    break;
                                  }
                                  if (P2(F, G)) {
                                    O(F, G) || void 0 !== u2.inputmask.userOptions.keepStatic ? S2(F, G) && (N = true, y2.splice(y2.indexOf(G), 0, F)) : c2.keepStatic = true;
                                    break;
                                  }
                                  if (P2(G, F)) {
                                    S2(G, F);
                                    break;
                                  }
                                }
                              }
                              N || y2.push(F);
                            }
                          }
                          m = b2.concat(y2), h2 = e3, g = m.length > 0 && k, r4 = y2.length > 0 && !k, k && g && !r4 && m.forEach(function(e4, t5) {
                            e4.unMatchedAlternationStopped = true;
                          }), n4 = j.slice();
                        } else r4 = f2(v4.matches[_2] || t4.matches[_2], [_2].concat(l4), p4);
                        if (r4) return true;
                      }();
                      if (r4.isQuantifier && p4 !== t4.matches[t4.matches.indexOf(r4) - 1]) return function() {
                        for (var a2 = r4, o3 = false, u3 = n4.length > 0 ? n4.shift() : 0; u3 < (isNaN(a2.quantifier.max) ? u3 + 1 : a2.quantifier.max) && h2 <= e3; u3++) {
                          var p5 = t4.matches[t4.matches.indexOf(a2) - 1];
                          if (r4 = f2(p5, [u3].concat(l4), p5)) {
                            if (m.forEach(function(t5, n5) {
                              (i3 = x(p5, t5.match) ? t5.match : m[m.length - 1].match).optionalQuantifier = u3 >= a2.quantifier.min, i3.jit = (u3 + 1) * (p5.matches.indexOf(i3) + 1) > a2.quantifier.jit, i3.optionalQuantifier && v3(i3, p5) && (g = true, h2 = e3, c2.greedy && null == s2.validPositions[e3 - 1] && u3 > a2.quantifier.min && -1 != ["*", "+"].indexOf(a2.quantifier.max) && (m.pop(), y = void 0), o3 = true, r4 = false), !o3 && i3.jit && (s2.jitOffset[e3] = p5.matches.length - p5.matches.indexOf(i3));
                            }), o3) break;
                            return true;
                          }
                        }
                      }();
                      if (r4 = b(r4, n4, l4, p4)) return true;
                    } else h2++;
                  }
                  for (var p3 = n4.length > 0 ? n4.shift() : 0; p3 < t4.matches.length; p3++) if (true !== t4.matches[p3].isQuantifier) {
                    var v2 = f2(t4.matches[p3], [p3].concat(r3), l3);
                    if (v2 && h2 === e3) return v2;
                    if (h2 > e3) break;
                  }
                }
                function x(e4, t4) {
                  var n4 = -1 != e4.matches.indexOf(t4);
                  return n4 || e4.matches.forEach(function(e5, i4) {
                    void 0 === e5.matches || n4 || (n4 = x(e5, t4));
                  }), n4;
                }
                if (e3 > -1) {
                  if (void 0 === t3) {
                    for (var w, P = e3 - 1; void 0 === (w = s2.validPositions[P] || s2.tests[P]) && P > -1; ) P--;
                    void 0 !== w && P > -1 && (v = function(e4, t4) {
                      var n4, i4 = [];
                      return Array.isArray(t4) || (t4 = [t4]), t4.length > 0 && (void 0 === t4[0].alternation || true === c2.keepStatic ? 0 === (i4 = f.call(o2, e4, t4.slice()).locator.slice()).length && (i4 = t4[0].locator.slice()) : t4.forEach(function(e5) {
                        "" !== e5.def && (0 === i4.length ? (n4 = e5.alternation, i4 = e5.locator.slice()) : e5.locator[n4] && -1 === i4[n4].toString().indexOf(e5.locator[n4]) && (i4[n4] += "," + e5.locator[n4]));
                      })), i4;
                    }(P, w), y = v.join(""), h2 = P);
                  }
                  if (s2.tests[e3] && s2.tests[e3][0].cd === y) return s2.tests[e3];
                  for (var S = v.shift(); S < p2.length; S++) {
                    if (b(p2[S], v, [S]) && h2 === e3 || h2 > e3) break;
                  }
                }
                return (0 === m.length || g) && m.push({
                  match: {
                    fn: null,
                    static: true,
                    optionality: false,
                    casing: null,
                    def: "",
                    placeholder: ""
                  },
                  locator: k && 0 === m.filter(function(e4) {
                    return true !== e4.unMatchedAlternationStopped;
                  }).length ? [0] : [],
                  mloc: {},
                  cd: y
                }), void 0 !== t3 && s2.tests[e3] ? r2 = l2.extend(true, [], m) : (s2.tests[e3] = l2.extend(true, [], m), r2 = s2.tests[e3]), m.forEach(function(e4) {
                  e4.match.optionality = e4.match.defOptionality || false;
                }), r2;
              }
            },
            7215: function(e2, t2, n2) {
              Object.defineProperty(t2, "__esModule", {
                value: true
              }), t2.alternate = l, t2.checkAlternationMatch = function(e3, t3, n3) {
                for (var i3, a2 = this.opts.greedy ? t3 : t3.slice(0, 1), r2 = false, o2 = void 0 !== n3 ? n3.split(",") : [], l2 = 0; l2 < o2.length; l2++) -1 !== (i3 = e3.indexOf(o2[l2])) && e3.splice(i3, 1);
                for (var s2 = 0; s2 < e3.length; s2++) if (a2.includes(e3[s2])) {
                  r2 = true;
                  break;
                }
                return r2;
              }, t2.handleRemove = function(e3, t3, n3, i3, s2) {
                var c2 = this, u2 = this.maskset, f2 = this.opts;
                if ((f2.numericInput || c2.isRTL) && (t3 === a.keys.Backspace ? t3 = a.keys.Delete : t3 === a.keys.Delete && (t3 = a.keys.Backspace), c2.isRTL)) {
                  var p2 = n3.end;
                  n3.end = n3.begin, n3.begin = p2;
                }
                var d2, h2 = r.getLastValidPosition.call(c2, void 0, true);
                n3.end >= r.getBuffer.call(c2).length && h2 >= n3.end && (n3.end = h2 + 1);
                t3 === a.keys.Backspace ? n3.end - n3.begin < 1 && (n3.begin = r.seekPrevious.call(c2, n3.begin)) : t3 === a.keys.Delete && n3.begin === n3.end && (n3.end = r.isMask.call(c2, n3.end, true, true) ? n3.end + 1 : r.seekNext.call(c2, n3.end) + 1);
                false !== (d2 = v.call(c2, n3)) && ((true !== i3 && false !== f2.keepStatic || null !== f2.regex && -1 !== o.getTest.call(c2, n3.begin).match.def.indexOf("|")) && l.call(c2, true), true !== i3 && (u2.p = t3 === a.keys.Delete ? n3.begin + d2 : n3.begin, u2.p = r.determineNewCaretPosition.call(c2, {
                  begin: u2.p,
                  end: u2.p
                }, false, false === f2.insertMode && t3 === a.keys.Backspace ? "none" : void 0).begin));
              }, t2.isComplete = c, t2.isSelection = u, t2.isValid = f, t2.refreshFromBuffer = d, t2.revalidateMask = v;
              var i2 = n2(6030), a = n2(2839), r = n2(8711), o = n2(4713);
              function l(e3, t3, n3, i3, a2, s2) {
                var c2 = this, u2 = this.dependencyLib, p2 = this.opts, d2 = c2.maskset;
                if (!c2.hasAlternator) return false;
                var h2, v2, m, g, y, k, b, x, w, P, S, O = u2.extend(true, [], d2.validPositions), _2 = u2.extend(true, {}, d2.tests), M = false, E = false, j = void 0 !== a2 ? a2 : r.getLastValidPosition.call(c2);
                if (s2 && (P = s2.begin, S = s2.end, s2.begin > s2.end && (P = s2.end, S = s2.begin)), -1 === j && void 0 === a2) h2 = 0, v2 = (g = o.getTest.call(c2, h2)).alternation;
                else for (; j >= 0; j--) if ((m = d2.validPositions[j]) && void 0 !== m.alternation) {
                  if (j <= (e3 || 0) && g && g.locator[m.alternation] !== m.locator[m.alternation]) break;
                  h2 = j, v2 = d2.validPositions[h2].alternation, g = m;
                }
                if (void 0 !== v2) {
                  b = parseInt(h2), d2.excludes[b] = d2.excludes[b] || [], true !== e3 && d2.excludes[b].push((0, o.getDecisionTaker)(g) + ":" + g.alternation);
                  var T = [], A = -1;
                  for (y = b; b < r.getLastValidPosition.call(c2, void 0, true) + 1; y++) -1 === A && e3 <= y && void 0 !== t3 && (T.push(t3), A = T.length - 1), (k = d2.validPositions[b]) && true !== k.generatedInput && (void 0 === s2 || y < P || y >= S) && T.push(k.input), d2.validPositions.splice(b, 1);
                  for (-1 === A && void 0 !== t3 && (T.push(t3), A = T.length - 1); void 0 !== d2.excludes[b] && d2.excludes[b].length < 10; ) {
                    for (d2.tests = {}, r.resetMaskSet.call(c2, true), M = true, y = 0; y < T.length && (x = M.caret || 0 == p2.insertMode && null != x ? r.seekNext.call(c2, x) : r.getLastValidPosition.call(c2, void 0, true) + 1, w = T[y], M = f.call(c2, x, w, false, i3, true)); y++) y === A && (E = M), 1 == e3 && M && (E = {
                      caretPos: y
                    });
                    if (M) break;
                    if (r.resetMaskSet.call(c2), g = o.getTest.call(c2, b), d2.validPositions = u2.extend(true, [], O), d2.tests = u2.extend(true, {}, _2), !d2.excludes[b]) {
                      E = l.call(c2, e3, t3, n3, i3, b - 1, s2);
                      break;
                    }
                    if (null != g.alternation) {
                      var D = (0, o.getDecisionTaker)(g);
                      if (-1 !== d2.excludes[b].indexOf(D + ":" + g.alternation)) {
                        E = l.call(c2, e3, t3, n3, i3, b - 1, s2);
                        break;
                      }
                      for (d2.excludes[b].push(D + ":" + g.alternation), y = b; y < r.getLastValidPosition.call(c2, void 0, true) + 1; y++) d2.validPositions.splice(b);
                    } else delete d2.excludes[b];
                  }
                }
                return E && false === p2.keepStatic || delete d2.excludes[b], E;
              }
              function s(e3, t3, n3) {
                var i3 = this.opts, r2 = this.maskset;
                switch (i3.casing || t3.casing) {
                  case "upper":
                    e3 = e3.toUpperCase();
                    break;
                  case "lower":
                    e3 = e3.toLowerCase();
                    break;
                  case "title":
                    var o2 = r2.validPositions[n3 - 1];
                    e3 = 0 === n3 || o2 && o2.input === String.fromCharCode(a.keyCode.Space) ? e3.toUpperCase() : e3.toLowerCase();
                    break;
                  default:
                    if ("function" == typeof i3.casing) {
                      var l2 = Array.prototype.slice.call(arguments);
                      l2.push(r2.validPositions), e3 = i3.casing.apply(this, l2);
                    }
                }
                return e3;
              }
              function c(e3) {
                var t3 = this, n3 = this.opts, i3 = this.maskset;
                if ("function" == typeof n3.isComplete) return n3.isComplete(e3, n3);
                if ("*" !== n3.repeat) {
                  var a2 = false, l2 = r.determineLastRequiredPosition.call(t3, true), s2 = l2.l;
                  if (void 0 === l2.def || l2.def.newBlockMarker || l2.def.optionality || l2.def.optionalQuantifier) {
                    a2 = true;
                    for (var c2 = 0; c2 <= s2; c2++) {
                      var u2 = o.getTestTemplate.call(t3, c2).match;
                      if (true !== u2.static && void 0 === i3.validPositions[c2] && (false === u2.optionality || void 0 === u2.optionality || u2.optionality && 0 == u2.newBlockMarker) && (false === u2.optionalQuantifier || void 0 === u2.optionalQuantifier) || true === u2.static && "" != u2.def && e3[c2] !== o.getPlaceholder.call(t3, c2, u2)) {
                        a2 = false;
                        break;
                      }
                    }
                  }
                  return a2;
                }
              }
              function u(e3) {
                var t3 = this.opts.insertMode ? 0 : 1;
                return this.isRTL ? e3.begin - e3.end > t3 : e3.end - e3.begin > t3;
              }
              function f(e3, t3, n3, i3, a2, p2, m) {
                var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                n3 = true === n3;
                var x = e3;
                function w(e4) {
                  if (void 0 !== e4) {
                    if (void 0 !== e4.remove && (Array.isArray(e4.remove) || (e4.remove = [e4.remove]), e4.remove.sort(function(e5, t5) {
                      return g.isRTL ? e5.pos - t5.pos : t5.pos - e5.pos;
                    }).forEach(function(e5) {
                      v.call(g, {
                        begin: e5,
                        end: e5 + 1
                      });
                    }), e4.remove = void 0), void 0 !== e4.insert && (Array.isArray(e4.insert) || (e4.insert = [e4.insert]), e4.insert.sort(function(e5, t5) {
                      return g.isRTL ? t5.pos - e5.pos : e5.pos - t5.pos;
                    }).forEach(function(e5) {
                      "" !== e5.c && f.call(g, e5.pos, e5.c, void 0 === e5.strict || e5.strict, void 0 !== e5.fromIsValid ? e5.fromIsValid : i3);
                    }), e4.insert = void 0), e4.refreshFromBuffer && e4.buffer) {
                      var t4 = e4.refreshFromBuffer;
                      d.call(g, true === t4 ? t4 : t4.start, t4.end, e4.buffer), e4.refreshFromBuffer = void 0;
                    }
                    void 0 !== e4.rewritePosition && (x = e4.rewritePosition, e4 = true);
                  }
                  return e4;
                }
                function P(t4, n4, a3) {
                  var l2 = false;
                  return o.getTests.call(g, t4).every(function(c2, f2) {
                    var p3 = c2.match;
                    if (r.getBuffer.call(g, true), false !== (l2 = (!p3.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t4)]) && (null != p3.fn ? p3.fn.test(n4, b, t4, a3, k, u.call(g, e3)) : (n4 === p3.def || n4 === k.skipOptionalPartCharacter) && "" !== p3.def && {
                      c: o.getPlaceholder.call(g, t4, p3, true) || p3.def,
                      pos: t4
                    }))) {
                      var d2 = void 0 !== l2.c ? l2.c : n4, h2 = t4;
                      return d2 = d2 === k.skipOptionalPartCharacter && true === p3.static ? o.getPlaceholder.call(g, t4, p3, true) || p3.def : d2, true !== (l2 = w(l2)) && void 0 !== l2.pos && l2.pos !== t4 && (h2 = l2.pos), true !== l2 && void 0 === l2.pos && void 0 === l2.c ? false : (false === v.call(g, e3, y.extend({}, c2, {
                        input: s.call(g, d2, p3, h2)
                      }), i3, h2) && (l2 = false), false);
                    }
                    return true;
                  }), l2;
                }
                void 0 !== e3.begin && (x = g.isRTL ? e3.end : e3.begin);
                var S = true, O = y.extend(true, [], b.validPositions);
                if (false === k.keepStatic && void 0 !== b.excludes[x] && true !== a2 && true !== i3) for (var _2 = x; _2 < (g.isRTL ? e3.begin : e3.end); _2++) void 0 !== b.excludes[_2] && (b.excludes[_2] = void 0, delete b.tests[_2]);
                if ("function" == typeof k.preValidation && true !== i3 && true !== p2 && (S = w(S = k.preValidation.call(g, r.getBuffer.call(g), x, t3, u.call(g, e3), k, b, e3, n3 || a2))), true === S) {
                  if (S = P(x, t3, n3), (!n3 || true === i3) && false === S && true !== p2) {
                    var M = b.validPositions[x];
                    if (!M || true !== M.match.static || M.match.def !== t3 && t3 !== k.skipOptionalPartCharacter) {
                      if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e3.end > x) {
                        var E = false;
                        if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && false !== (S = f.call(g, x + b.jitOffset[x], t3, true, true)) && (true !== a2 && (S.caret = x), E = true), e3.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) {
                          for (var j = x + 1, T = r.seekNext.call(g, x, false, 0 !== x); j <= T; j++) if (false !== (S = P(j, t3, n3))) {
                            S = h.call(g, x, void 0 !== S.pos ? S.pos : j) || S, x = j;
                            break;
                          }
                        }
                      }
                    } else S = {
                      caret: r.seekNext.call(g, x)
                    };
                  }
                  g.hasAlternator && true !== a2 && !n3 && (a2 = true, false === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = l.call(g, x, t3, n3, i3, void 0, e3) : (u.call(g, e3) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && true !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, true) > x) && (S = l.call(g, true))), true === S && (S = {
                    pos: x
                  });
                }
                if ("function" == typeof k.postValidation && true !== i3 && true !== p2) {
                  var A = k.postValidation.call(g, r.getBuffer.call(g, true), void 0 !== e3.begin ? g.isRTL ? e3.end : e3.begin : e3, t3, S, k, b, n3, m);
                  void 0 !== A && (S = true === A ? S : A);
                }
                S && void 0 === S.pos && (S.pos = x), false === S || true === p2 ? (r.resetMaskSet.call(g, true), b.validPositions = y.extend(true, [], O)) : h.call(g, void 0, x, true);
                var D = w(S);
                void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !i3 && (r.resetMaskSet.call(g, true), b.validPositions = y.extend(true, [], O), D = false));
                return D;
              }
              function p(e3, t3, n3) {
                for (var i3 = this.maskset, a2 = false, r2 = o.getTests.call(this, e3), l2 = 0; l2 < r2.length; l2++) {
                  if (r2[l2].match && (r2[l2].match.nativeDef === t3.match[n3.shiftPositions ? "def" : "nativeDef"] && (!n3.shiftPositions || !t3.match.static) || r2[l2].match.nativeDef === t3.match.nativeDef || n3.regex && !r2[l2].match.static && r2[l2].match.fn.test(t3.input, i3, e3, false, n3))) {
                    a2 = true;
                    break;
                  }
                  if (r2[l2].match && r2[l2].match.def === t3.match.nativeDef) {
                    a2 = void 0;
                    break;
                  }
                }
                return false === a2 && void 0 !== i3.jitOffset[e3] && (a2 = p.call(this, e3 + i3.jitOffset[e3], t3, n3)), a2;
              }
              function d(e3, t3, n3) {
                var a2, o2, l2 = this, s2 = this.maskset, c2 = this.opts, u2 = this.dependencyLib, f2 = c2.skipOptionalPartCharacter, p2 = l2.isRTL ? n3.slice().reverse() : n3;
                if (c2.skipOptionalPartCharacter = "", true === e3) r.resetMaskSet.call(l2, false), e3 = 0, t3 = n3.length, o2 = r.determineNewCaretPosition.call(l2, {
                  begin: 0,
                  end: 0
                }, false).begin;
                else {
                  for (a2 = e3; a2 < t3; a2++) s2.validPositions.splice(e3, 0);
                  o2 = e3;
                }
                var d2 = new u2.Event("keypress");
                for (a2 = e3; a2 < t3; a2++) {
                  d2.key = p2[a2].toString(), l2.ignorable = false;
                  var h2 = i2.EventHandlers.keypressEvent.call(l2, d2, true, false, false, o2);
                  false !== h2 && void 0 !== h2 && (o2 = h2.forwardPosition);
                }
                c2.skipOptionalPartCharacter = f2;
              }
              function h(e3, t3, n3) {
                var i3 = this, a2 = this.maskset, l2 = this.dependencyLib;
                if (void 0 === e3) for (e3 = t3 - 1; e3 > 0 && !a2.validPositions[e3]; e3--) ;
                for (var s2 = e3; s2 < t3; s2++) {
                  if (void 0 === a2.validPositions[s2] && !r.isMask.call(i3, s2, false)) {
                    if (0 == s2 ? o.getTest.call(i3, s2) : a2.validPositions[s2 - 1]) {
                      var c2 = o.getTests.call(i3, s2).slice();
                      "" === c2[c2.length - 1].match.def && c2.pop();
                      var u2, p2 = o.determineTestTemplate.call(i3, s2, c2);
                      if (p2 && (true !== p2.match.jit || "master" === p2.match.newBlockMarker && (u2 = a2.validPositions[s2 + 1]) && true === u2.match.optionalQuantifier) && ((p2 = l2.extend({}, p2, {
                        input: o.getPlaceholder.call(i3, s2, p2.match, true) || p2.match.def
                      })).generatedInput = true, v.call(i3, s2, p2, true), true !== n3)) {
                        var d2 = a2.validPositions[t3].input;
                        return a2.validPositions[t3] = void 0, f.call(i3, t3, d2, true, true);
                      }
                    }
                  }
                }
              }
              function v(e3, t3, n3, i3) {
                var a2 = this, l2 = this.maskset, s2 = this.opts, c2 = this.dependencyLib;
                function d2(e4, t4, n4) {
                  var i4 = t4[e4];
                  if (void 0 !== i4 && true === i4.match.static && true !== i4.match.optionality && (void 0 === t4[0] || void 0 === t4[0].alternation)) {
                    var a3 = n4.begin <= e4 - 1 ? t4[e4 - 1] && true === t4[e4 - 1].match.static && t4[e4 - 1] : t4[e4 - 1], r2 = n4.end > e4 + 1 ? t4[e4 + 1] && true === t4[e4 + 1].match.static && t4[e4 + 1] : t4[e4 + 1];
                    return a3 && r2;
                  }
                  return false;
                }
                var h2 = 0, v2 = void 0 !== e3.begin ? e3.begin : e3, m = void 0 !== e3.end ? e3.end : e3, g = true;
                if (e3.begin > e3.end && (v2 = e3.end, m = e3.begin), i3 = void 0 !== i3 ? i3 : v2, void 0 === n3 && (v2 !== m || s2.insertMode && void 0 !== l2.validPositions[i3] || void 0 === t3 || t3.match.optionalQuantifier || t3.match.optionality)) {
                  var y, k = c2.extend(true, [], l2.validPositions), b = r.getLastValidPosition.call(a2, void 0, true);
                  l2.p = v2;
                  var x = u.call(a2, e3) ? v2 : i3;
                  for (y = b; y >= x; y--) l2.validPositions.splice(y, 1), void 0 === t3 && delete l2.tests[y + 1];
                  var w, P, S = i3, O = S;
                  for (t3 && (l2.validPositions[i3] = c2.extend(true, {}, t3), O++, S++), null == k[m] && l2.jitOffset[m] && (m += l2.jitOffset[m] + 1), y = t3 ? m : m - 1; y <= b; y++) {
                    if (void 0 !== (w = k[y]) && true !== w.generatedInput && (y >= m || y >= v2 && d2(y, k, {
                      begin: v2,
                      end: m
                    }))) {
                      for (; "" !== o.getTest.call(a2, O).match.def; ) {
                        if (false !== (P = p.call(a2, O, w, s2)) || "+" === w.match.def) {
                          "+" === w.match.def && r.getBuffer.call(a2, true);
                          var _2 = f.call(a2, O, w.input, "+" !== w.match.def, true);
                          if (g = false !== _2, S = (_2.pos || O) + 1, !g && P) break;
                        } else g = false;
                        if (g) {
                          void 0 === t3 && w.match.static && y === e3.begin && h2++;
                          break;
                        }
                        if (!g && r.getBuffer.call(a2), O > l2.maskLength) break;
                        O++;
                      }
                      "" == o.getTest.call(a2, O).match.def && (g = false), O = S;
                    }
                    if (!g) break;
                  }
                  if (!g) return l2.validPositions = c2.extend(true, [], k), r.resetMaskSet.call(a2, true), false;
                } else t3 && o.getTest.call(a2, i3).match.cd === t3.match.cd && (l2.validPositions[i3] = c2.extend(true, {}, t3));
                return r.resetMaskSet.call(a2, true), h2;
              }
            }
          }, t = {};
          function n(i2) {
            var a = t[i2];
            if (void 0 !== a) return a.exports;
            var r = t[i2] = {
              exports: {}
            };
            return e[i2](r, r.exports, n), r.exports;
          }
          var i = {};
          return function() {
            var e2 = i;
            Object.defineProperty(e2, "__esModule", {
              value: true
            }), e2.default = void 0, n(7149), n(3194), n(9302), n(4013), n(3851), n(219), n(207), n(5296);
            var t2, a = (t2 = n(2394)) && t2.__esModule ? t2 : {
              default: t2
            };
            e2.default = a.default;
          }(), i;
        }();
      });
    }
  });

  // ../../node_modules/@stackpress/ink-ui/utilities/style/align.js
  var require_align = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/align.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = align;
      function align(props3, styles, initial = false, selector = ":host") {
        const { align: align2 } = props3;
        if (align2) {
          styles.add(selector, "text-align", align2);
        } else if (initial) {
          styles.add(selector, "text-align", initial);
        }
        return align2 || "initial";
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
      exports.getProps = getProps;
      exports.setDefaultStyles = setDefaultStyles2;
      exports.getHandlers = getHandlers2;
      var align_1 = __importDefault(require_align());
      var color_1 = __importDefault(require_color());
      var display_1 = __importDefault(require_display());
      var padding_1 = __importDefault(require_padding());
      var size_1 = __importDefault(require_size());
      function getProps(host) {
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
      function setDefaultStyles2(props3, styles) {
        const { background, border, error } = props3;
        (0, display_1.default)(props3, styles, "inline-block", ":host");
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
        (0, align_1.default)(props3, styles, "left", "::slotted(*)");
        (0, size_1.default)(props3, styles, "inherit", "::slotted(*)", "font-size");
        (0, color_1.default)(props3, styles, "var(--black)", "::slotted(*)", "color");
        const padding = (0, padding_1.default)(props3, styles, "::slotted(*)");
        if (!padding) {
          styles.add("::slotted(*)", "padding", "7px");
        }
      }
      function getHandlers2(host, change, update) {
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

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\field\mask.ink
  var mask_exports = {};
  __export(mask_exports, {
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

  // ink-component-resolver:C:\Users\Win 10\dev\ink\node_modules\@stackpress\ink-ui\field\mask.ink
  var import_Registry16 = __toESM(require_Registry());
  var import_Component16 = __toESM(require_Component());
  var import_inputmask = __toESM(require_inputmask());
  var import_StyleSet11 = __toESM(require_StyleSet());
  var import_input = __toESM(require_input());
  var Mask_3040fa9be886a5e9b81b = class extends import_Component16.default {
    static id = "3040fa9be886a5e9b81b";
    static tagname = "mask";
    static classname = "Mask_3040fa9be886a5e9b81b";
    static observedAttributes = ["autocomplete", "disabled", "name", "pattern", "readonly", "required", "value"];
    styles() {
      return ``;
    }
    template() {
      const {
        error,
        change,
        update,
        mask,
        regex,
        alias,
        repeat,
        greedy,
        numericInput,
        rightAlign,
        definitions,
        //dont need these...
        style,
        "class": _2,
        //input attributes
        ...attributes
      } = this.props;
      const styles = new import_StyleSet11.default();
      this.styles = () => styles.toString();
      (0, import_input.setDefaultStyles)(this.props, styles);
      const im = new import_inputmask.default({
        mask,
        regex,
        alias,
        repeat,
        greedy,
        numericInput,
        rightAlign,
        definitions
      });
      const handlers = (0, import_input.getHandlers)(this, change, update);
      handlers.init = () => {
        im.mask(this.querySelector("input"));
      };
      return () => [
        import_Registry16.default.createText(`
`, false),
        import_Registry16.default.createElement("template", { "type": `light` }, [
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("input", { ...attributes, "change": handlers.change, "mount": handlers.init }).element,
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

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\field\mask.ink
  var import_ink4 = __toESM(require_ink());
  var TemplateDocument = class _TemplateDocument extends import_Document2.default {
    static sync() {
      const document2 = new _TemplateDocument();
      return document2.sync();
    }
    template() {
      const url = "/ink/ui/field/mask.html";
      const title = _("Ink UI - Mask Field Component");
      const description = _("A masked input field using Inputmask for formatted input.");
      const toggle = () => {
        document.querySelector("panel-layout").toggle("left");
      };
      const crumbs = [
        { icon: "home", label: "Home", href: "/ink/index.html" },
        { icon: "book", label: "Docs", href: "/ink/docs/index.html" },
        { icon: "icons", label: "UI", href: "/ink/ui/index.html" },
        { icon: "icons", label: "Components", href: "/ink/ui/index.html" },
        { label: "Mask Field" }
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
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/ui/format/index.html` }, [
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
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 mb-100`, "href": `/ink/ui/format/index.html` }, [
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
                    ...this._toNodeList(_("On this page"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("nav", { "class": `tx-14 tx-lh-32` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#mask` }, [
                      ...this._toNodeList(_("Mask Field"))
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
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#basic` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Basic Usage"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#custom-mask` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Custom Mask"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#alias` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Alias Mask"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#numeric` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Numeric Input"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#alignment` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Right Alignment"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#repeat` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Repeated Mask"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#styling` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Styling"))
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
                  import_Document.default.createElement("a", { "name": `mask` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Mask Field"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Mask Field`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "lang": `js`, "trim": true }, [
                      import_Document.default.createText(`
              import MaskField from '@stackpress/ink-ui/field/mask';
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `props` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Props"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0`, "body": `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Name"))
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
                        import_Document.default.createText(`autocomplete`, false)
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
                        ...this._toNodeList(_('Autocomplete attribute (e.g., "on", "off")'))
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
                        ...this._toNodeList(_("Disables the input"))
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
                        ...this._toNodeList(_("Name attribute for form submission"))
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
                        import_Document.default.createText(`pattern`, false)
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
                        ...this._toNodeList(_("Regex pattern for validation"))
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
                        ...this._toNodeList(_("Makes the input read-only"))
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
                        import_Document.default.createText(`required`, false)
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
                        ...this._toNodeList(_("Marks the input as required"))
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
                        ...this._toNodeList(_("Initial value"))
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
                        import_Document.default.createText(`mask`, false)
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
                        ...this._toNodeList(_('Mask pattern (e.g., "999-999-9999")'))
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
                        import_Document.default.createText(`regex`, false)
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
                        ...this._toNodeList(_("Regex pattern for mask (alternative to mask)"))
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
                        import_Document.default.createText(`alias`, false)
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
                        ...this._toNodeList(_('Predefined mask alias (e.g., "phone", "email")'))
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
                        import_Document.default.createText(`repeat`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Number`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_("Number of times to repeat mask"))
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
                        import_Document.default.createText(`greedy`, false)
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
                        ...this._toNodeList(_("Greedy masking behavior"))
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
                        import_Document.default.createText(`numericInput`, false)
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
                        ...this._toNodeList(_("Forces numeric input"))
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
                        import_Document.default.createText(`rightAlign`, false)
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
                        ...this._toNodeList(_("Aligns input to the right"))
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
                        import_Document.default.createText(`definitions`, false)
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
                        ...this._toNodeList(_("Custom mask definitions"))
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
                        ...this._toNodeList(_("Callback for change event"))
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
                        ...this._toNodeList(_("Callback for value updates"))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `basic` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Basic Usage"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`A simple masked input for a phone number.`, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-3 p-10 mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("field-mask", { "name": `phone`, "mask": `999-999-9999`, "placeholder": `999-999-9999` }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <field-mask 
              name="phone" 
              mask="999-999-9999" 
              placeholder="999-999-9999" 
            />
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `custom-mask` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Custom Mask"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`Masked input with a custom date format and numeric input.`, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-3 p-10 mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("field-mask", { "name": `date`, "mask": `99/99/9999`, "placeholder": `MM/DD/YYYY`, "numericInput": true }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <field-mask 
              name="date" 
              mask="99/99/9999" 
              placeholder="MM/DD/YYYY" 
              numericInput={true}
            />
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `alias` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Alias Mask"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`Masked input using a predefined alias for email.`, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-3 p-10 mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("field-mask", { "name": `email`, "alias": `email`, "placeholder": `user@domain.com` }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <field-mask 
              name="email" 
              alias="email" 
              placeholder="user@domain.com" 
            />
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `numeric` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Numeric Input"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`Masked input restricted to numbers with a disabled state.`, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-3 p-10 mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("field-mask", { "name": `numeric`, "mask": `9999-9999`, "numericInput": true, "placeholder": `1234-5678`, "disabled": true }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <field-mask 
              name="numeric" 
              mask="9999-9999" 
              numericInput={true} 
              placeholder="1234-5678" 
              disabled={true}
            />
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `alignment` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Right Alignment"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`Masked input aligned to the right with a currency mask.`, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-3 p-10 mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("field-mask", { "name": `currency`, "mask": `$ 999.99`, "placeholder": `$ 123.45`, "rightAlign": true, "numericInput": true }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <field-mask 
              name="currency" 
              mask="$ 999.99" 
              placeholder="$ 123.45" 
              rightAlign={true} 
              numericInput={true}
            />
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `repeat` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Repeated Mask"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`Masked input with a repeating pattern and greedy behavior.`, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-3 p-10 mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("field-mask", { "name": `repeat`, "mask": `9`, "repeat": 5, "greedy": true, "placeholder": `12345` }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <field-mask 
              name="repeat" 
              mask="9" 
              repeat={5} 
              greedy={true} 
              placeholder="12345" 
            />
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `styling` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Styling"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`Masked input with custom styling and change callback.`, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-3 p-10 mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("field-mask", { "name": `custom-phone`, "mask": `(999) 999-9999`, "placeholder": `(999) 999-9999`, "class": `w-200 rounded b-solid b-primary p-5`, "change": (e) => console.log("Changed to:", e.target.value) }),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <field-mask 
              name="custom-phone" 
              mask="(999) 999-9999" 
              placeholder="(999) 999-9999" 
              class="w-200 rounded b-solid b-primary p-5"
              change={(e) => console.log('Changed to:', e.target.value)}
            />
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("nav", { "class": `flex` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/ui/field/markdown.html` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }),
                      ...this._toNodeList(_("Markdown Field")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/ui/field/metadata.html` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Metadata Field")),
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
    "FieldMask_3040fa9be886a5e9b81b": Mask_3040fa9be886a5e9b81b
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
    "field-mask": Mask_3040fa9be886a5e9b81b
  };
  var BUILD_ID = "e1f2c7ffd7d3f00ab518";
  import_Emitter.default.once("ready", () => {
    TemplateDocument.sync();
    for (const [tagname, definition] of Object.entries(elements)) {
      if (!customElements.getName(definition)) {
        customElements.define(tagname, definition);
      }
    }
    import_Emitter.default.emit("mounted", document.body);
  });
  return __toCommonJS(mask_exports);
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

inputmask/dist/inputmask.js:
  (*!
   * dist/inputmask
   * https://github.com/RobinHerbots/Inputmask
   * Copyright (c) 2010 - 2024 Robin Herbots
   * Licensed under the MIT license
   * Version: 5.0.9
   *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
