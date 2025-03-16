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
        constructor(value, escape2 = false) {
          super();
          this.name = "#text";
          this.type = 3;
          this._escape = escape2;
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
        static createText(value, escape2 = false, parent) {
          const node = new Text_1.default(value, escape2);
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
      var ClientRegistry37 = class _ClientRegistry {
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
        static createText(value, escape2 = true) {
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
          this._elements.forEach((ink, html2) => {
            if (callback(ink, html2)) {
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
          this._elements.forEach((ink, html2) => {
            elements2.push(callback(ink, html2));
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
      ClientRegistry37._elements = /* @__PURE__ */ new Map();
      exports.default = ClientRegistry37;
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
      var ClientComponent36 = class _ClientComponent extends HTMLElement {
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
      exports.default = ClientComponent36;
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
        return new StyleSet31(Object.entries(styles));
      }
      var StyleSet31 = class extends Map {
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
      exports.default = StyleSet31;
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
        function addAfter(list2, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list2.length++;
          return newNode;
        }
        function removeRange(list2, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list2.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list2.length -= i;
        }
        function toArray(list2) {
          var array = [];
          var node = list2.head.next;
          while (node !== list2.tail) {
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
          var def2 = {};
          def2[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def2);
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

  // ../../node_modules/@stackpress/ink-ui/utilities/style/display.js
  var require_display = __commonJS({
    "../../node_modules/@stackpress/ink-ui/utilities/style/display.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = display;
      function display(props, styles, initial = false, selector = ":host") {
        const { flex, none, inline: inline2, block: block2, "inline-block": iblock, "inline-flex": iflex } = props;
        const style = flex ? "flex" : none ? "none" : block2 ? "block" : inline2 ? "inline" : iflex ? "inline-flex" : iblock ? "inline-block" : initial;
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

  // ../../node_modules/dayjs/plugin/relativeTime.js
  var require_relativeTime = __commonJS({
    "../../node_modules/dayjs/plugin/relativeTime.js"(exports, module) {
      !function(r, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
      }(exports, function() {
        "use strict";
        return function(r, e, t) {
          r = r || {};
          var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
          function i(r2, e2, t2, o2) {
            return n.fromToBase(r2, e2, t2, o2);
          }
          t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
            for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
              var y = h[c];
              y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
              var p = (r.rounding || Math.round)(Math.abs(f));
              if (s = f > 0, p <= y.r || !y.r) {
                p <= 1 && c > 0 && (y = h[c - 1]);
                var v = l[y.l];
                u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
                break;
              }
            }
            if (n2) return a;
            var M = s ? l.future : l.past;
            return "function" == typeof M ? M(a) : M.replace("%s", a);
          }, n.to = function(r2, e2) {
            return i(r2, e2, this, true);
          }, n.from = function(r2, e2) {
            return i(r2, e2, this);
          };
          var d = function(r2) {
            return r2.$u ? t.utc() : t();
          };
          n.toNow = function(r2) {
            return this.to(d(this), r2);
          }, n.fromNow = function(r2) {
            return this.from(d(this), r2);
          };
        };
      });
    }
  });

  // ../../node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "../../node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports, function() {
        "use strict";
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date()) return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = "$isDayjsObject", S = function(t2) {
          return t2 instanceof _2 || !(!t2 || !t2[p]);
        }, w = function t2(e2, n2, r2) {
          var i2;
          if (!e2) return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1) return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, O = function(t2, e2) {
          if (S(t2)) return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _2(n2);
        }, b = v;
        b.l = w, b.i = S, b.w = function(t2, e2) {
          return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _2 = function() {
          function M2(t2) {
            this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2) return /* @__PURE__ */ new Date(NaN);
              if (b.u(e2)) return /* @__PURE__ */ new Date();
              if (e2 instanceof Date) return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return b;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = O(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return O(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < O(t2);
          }, m2.$g = function(t2, e2, n2) {
            return b.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
              var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (f2) {
              case h:
                return r2 ? l2(1, 0) : l2(31, 11);
              case c:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === c || o2 === h) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[b.p(t2)]();
          }, m2.add = function(r2, f2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = b.p(f2), y2 = function(t2) {
              var e2 = O(l2);
              return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === c) return this.set(c, this.$M + r2);
            if ($2 === h) return this.set(h, this.$y + r2);
            if ($2 === a) return y2(1);
            if ($2 === o) return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return b.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, d2 = function(t3) {
              return b.s(s2 % 12 || 12, t3, "0");
            }, $2 = f2 || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            };
            return r2.replace(y, function(t3, r3) {
              return r3 || function(t4) {
                switch (t4) {
                  case "YY":
                    return String(e2.$y).slice(-2);
                  case "YYYY":
                    return b.s(e2.$y, 4, "0");
                  case "M":
                    return a2 + 1;
                  case "MM":
                    return b.s(a2 + 1, 2, "0");
                  case "MMM":
                    return h2(n2.monthsShort, a2, c2, 3);
                  case "MMMM":
                    return h2(c2, a2);
                  case "D":
                    return e2.$D;
                  case "DD":
                    return b.s(e2.$D, 2, "0");
                  case "d":
                    return String(e2.$W);
                  case "dd":
                    return h2(n2.weekdaysMin, e2.$W, o2, 2);
                  case "ddd":
                    return h2(n2.weekdaysShort, e2.$W, o2, 3);
                  case "dddd":
                    return o2[e2.$W];
                  case "H":
                    return String(s2);
                  case "HH":
                    return b.s(s2, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s2, u2, true);
                  case "A":
                    return $2(s2, u2, false);
                  case "m":
                    return String(u2);
                  case "mm":
                    return b.s(u2, 2, "0");
                  case "s":
                    return String(e2.$s);
                  case "ss":
                    return b.s(e2.$s, 2, "0");
                  case "SSS":
                    return b.s(e2.$ms, 3, "0");
                  case "Z":
                    return i2;
                }
                return null;
              }(t3) || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
              return b.m(y2, m3);
            };
            switch (M3) {
              case h:
                $2 = D2() / 12;
                break;
              case c:
                $2 = D2();
                break;
              case f:
                $2 = D2() / 3;
                break;
              case o:
                $2 = (g2 - v2) / 6048e5;
                break;
              case a:
                $2 = (g2 - v2) / 864e5;
                break;
              case u:
                $2 = g2 / n;
                break;
              case s:
                $2 = g2 / e;
                break;
              case i:
                $2 = g2 / t;
                break;
              default:
                $2 = g2;
            }
            return l2 ? $2 : b.a($2);
          }, m2.daysInMonth = function() {
            return this.endOf(c).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2) return this.$L;
            var n2 = this.clone(), r2 = w(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return b.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), k = _2.prototype;
        return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
          k[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), O.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _2, O), t2.$i = true), O;
        }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
          return O(1e3 * t2);
        }, O.en = D[g], O.Ls = D, O.p = {}, O;
      });
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

  // ../../node_modules/dompurify/dist/purify.js
  var require_purify = __commonJS({
    "../../node_modules/dompurify/dist/purify.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.DOMPurify = factory());
      })(exports, function() {
        "use strict";
        const {
          entries,
          setPrototypeOf,
          isFrozen,
          getPrototypeOf,
          getOwnPropertyDescriptor
        } = Object;
        let {
          freeze,
          seal,
          create
        } = Object;
        let {
          apply,
          construct
        } = typeof Reflect !== "undefined" && Reflect;
        if (!freeze) {
          freeze = function freeze2(x) {
            return x;
          };
        }
        if (!seal) {
          seal = function seal2(x) {
            return x;
          };
        }
        if (!apply) {
          apply = function apply2(fun, thisValue, args) {
            return fun.apply(thisValue, args);
          };
        }
        if (!construct) {
          construct = function construct2(Func, args) {
            return new Func(...args);
          };
        }
        const arrayForEach = unapply(Array.prototype.forEach);
        const arrayPop = unapply(Array.prototype.pop);
        const arrayPush = unapply(Array.prototype.push);
        const stringToLowerCase = unapply(String.prototype.toLowerCase);
        const stringToString = unapply(String.prototype.toString);
        const stringMatch = unapply(String.prototype.match);
        const stringReplace = unapply(String.prototype.replace);
        const stringIndexOf = unapply(String.prototype.indexOf);
        const stringTrim = unapply(String.prototype.trim);
        const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
        const regExpTest = unapply(RegExp.prototype.test);
        const typeErrorCreate = unconstruct(TypeError);
        function unapply(func) {
          return function(thisArg) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            return apply(func, thisArg, args);
          };
        }
        function unconstruct(func) {
          return function() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return construct(func, args);
          };
        }
        function addToSet(set, array) {
          let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
          if (setPrototypeOf) {
            setPrototypeOf(set, null);
          }
          let l = array.length;
          while (l--) {
            let element = array[l];
            if (typeof element === "string") {
              const lcElement = transformCaseFunc(element);
              if (lcElement !== element) {
                if (!isFrozen(array)) {
                  array[l] = lcElement;
                }
                element = lcElement;
              }
            }
            set[element] = true;
          }
          return set;
        }
        function cleanArray(array) {
          for (let index = 0; index < array.length; index++) {
            const isPropertyExist = objectHasOwnProperty(array, index);
            if (!isPropertyExist) {
              array[index] = null;
            }
          }
          return array;
        }
        function clone(object) {
          const newObject = create(null);
          for (const [property, value] of entries(object)) {
            const isPropertyExist = objectHasOwnProperty(object, property);
            if (isPropertyExist) {
              if (Array.isArray(value)) {
                newObject[property] = cleanArray(value);
              } else if (value && typeof value === "object" && value.constructor === Object) {
                newObject[property] = clone(value);
              } else {
                newObject[property] = value;
              }
            }
          }
          return newObject;
        }
        function lookupGetter(object, prop) {
          while (object !== null) {
            const desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
              if (desc.get) {
                return unapply(desc.get);
              }
              if (typeof desc.value === "function") {
                return unapply(desc.value);
              }
            }
            object = getPrototypeOf(object);
          }
          function fallbackValue() {
            return null;
          }
          return fallbackValue;
        }
        const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
        const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
        const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
        const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
        const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
        const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
        const text = freeze(["#text"]);
        const html2 = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
        const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
        const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
        const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
        const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
        const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
        const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
        const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
        const IS_ALLOWED_URI = seal(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          // eslint-disable-line no-useless-escape
        );
        const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
        const ATTR_WHITESPACE = seal(
          /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
          // eslint-disable-line no-control-regex
        );
        const DOCTYPE_NAME = seal(/^html$/i);
        const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR,
          ERB_EXPR,
          TMPLIT_EXPR,
          DATA_ATTR,
          ARIA_ATTR,
          IS_ALLOWED_URI,
          IS_SCRIPT_OR_DATA,
          ATTR_WHITESPACE,
          DOCTYPE_NAME,
          CUSTOM_ELEMENT
        });
        const NODE_TYPE = {
          element: 1,
          attribute: 2,
          text: 3,
          cdataSection: 4,
          entityReference: 5,
          // Deprecated
          entityNode: 6,
          // Deprecated
          progressingInstruction: 7,
          comment: 8,
          document: 9,
          documentType: 10,
          documentFragment: 11,
          notation: 12
          // Deprecated
        };
        const getGlobal = function getGlobal2() {
          return typeof window === "undefined" ? null : window;
        };
        const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
          if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
            return null;
          }
          let suffix = null;
          const ATTR_NAME = "data-tt-policy-suffix";
          if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
            suffix = purifyHostElement.getAttribute(ATTR_NAME);
          }
          const policyName = "dompurify" + (suffix ? "#" + suffix : "");
          try {
            return trustedTypes.createPolicy(policyName, {
              createHTML(html3) {
                return html3;
              },
              createScriptURL(scriptUrl) {
                return scriptUrl;
              }
            });
          } catch (_2) {
            console.warn("TrustedTypes policy " + policyName + " could not be created.");
            return null;
          }
        };
        function createDOMPurify() {
          let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
          const DOMPurify = (root) => createDOMPurify(root);
          DOMPurify.version = "3.1.6";
          DOMPurify.removed = [];
          if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document) {
            DOMPurify.isSupported = false;
            return DOMPurify;
          }
          let {
            document: document2
          } = window2;
          const originalDocument = document2;
          const currentScript = originalDocument.currentScript;
          const {
            DocumentFragment,
            HTMLTemplateElement,
            Node: Node2,
            Element: Element2,
            NodeFilter,
            NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
            HTMLFormElement,
            DOMParser,
            trustedTypes
          } = window2;
          const ElementPrototype = Element2.prototype;
          const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
          const remove = lookupGetter(ElementPrototype, "remove");
          const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
          const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
          const getParentNode = lookupGetter(ElementPrototype, "parentNode");
          if (typeof HTMLTemplateElement === "function") {
            const template = document2.createElement("template");
            if (template.content && template.content.ownerDocument) {
              document2 = template.content.ownerDocument;
            }
          }
          let trustedTypesPolicy;
          let emptyHTML = "";
          const {
            implementation,
            createNodeIterator,
            createDocumentFragment,
            getElementsByTagName
          } = document2;
          const {
            importNode
          } = originalDocument;
          let hooks = {};
          DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
          const {
            MUSTACHE_EXPR: MUSTACHE_EXPR2,
            ERB_EXPR: ERB_EXPR2,
            TMPLIT_EXPR: TMPLIT_EXPR2,
            DATA_ATTR: DATA_ATTR2,
            ARIA_ATTR: ARIA_ATTR2,
            IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
            ATTR_WHITESPACE: ATTR_WHITESPACE2,
            CUSTOM_ELEMENT: CUSTOM_ELEMENT2
          } = EXPRESSIONS;
          let {
            IS_ALLOWED_URI: IS_ALLOWED_URI$1
          } = EXPRESSIONS;
          let ALLOWED_TAGS = null;
          const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
          let ALLOWED_ATTR = null;
          const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html2, ...svg, ...mathMl, ...xml]);
          let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
            tagNameCheck: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: null
            },
            attributeNameCheck: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: null
            },
            allowCustomizedBuiltInElements: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: false
            }
          }));
          let FORBID_TAGS = null;
          let FORBID_ATTR = null;
          let ALLOW_ARIA_ATTR = true;
          let ALLOW_DATA_ATTR = true;
          let ALLOW_UNKNOWN_PROTOCOLS = false;
          let ALLOW_SELF_CLOSE_IN_ATTR = true;
          let SAFE_FOR_TEMPLATES = false;
          let SAFE_FOR_XML = true;
          let WHOLE_DOCUMENT = false;
          let SET_CONFIG = false;
          let FORCE_BODY = false;
          let RETURN_DOM = false;
          let RETURN_DOM_FRAGMENT = false;
          let RETURN_TRUSTED_TYPE = false;
          let SANITIZE_DOM = true;
          let SANITIZE_NAMED_PROPS = false;
          const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
          let KEEP_CONTENT = true;
          let IN_PLACE = false;
          let USE_PROFILES = {};
          let FORBID_CONTENTS = null;
          const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
          let DATA_URI_TAGS = null;
          const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
          let URI_SAFE_ATTRIBUTES = null;
          const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
          const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
          const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
          const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
          let NAMESPACE = HTML_NAMESPACE;
          let IS_EMPTY_INPUT = false;
          let ALLOWED_NAMESPACES = null;
          const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
          let PARSER_MEDIA_TYPE = null;
          const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
          const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
          let transformCaseFunc = null;
          let CONFIG = null;
          const formElement = document2.createElement("form");
          const isRegexOrFunction = function isRegexOrFunction2(testValue) {
            return testValue instanceof RegExp || testValue instanceof Function;
          };
          const _parseConfig = function _parseConfig2() {
            let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (CONFIG && CONFIG === cfg) {
              return;
            }
            if (!cfg || typeof cfg !== "object") {
              cfg = {};
            }
            cfg = clone(cfg);
            PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
            SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
            transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
            ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
            ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
            URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(
              clone(DEFAULT_URI_SAFE_ATTRIBUTES),
              // eslint-disable-line indent
              cfg.ADD_URI_SAFE_ATTR,
              // eslint-disable-line indent
              transformCaseFunc
              // eslint-disable-line indent
            ) : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(
              clone(DEFAULT_DATA_URI_TAGS),
              // eslint-disable-line indent
              cfg.ADD_DATA_URI_TAGS,
              // eslint-disable-line indent
              transformCaseFunc
              // eslint-disable-line indent
            ) : DEFAULT_DATA_URI_TAGS;
            FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
            FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
            FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
            USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
            ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
            SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
            RETURN_DOM = cfg.RETURN_DOM || false;
            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
            FORCE_BODY = cfg.FORCE_BODY || false;
            SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
            SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
            KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
            IN_PLACE = cfg.IN_PLACE || false;
            IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
            CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
              CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            }
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
              CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            }
            if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
              CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            }
            if (SAFE_FOR_TEMPLATES) {
              ALLOW_DATA_ATTR = false;
            }
            if (RETURN_DOM_FRAGMENT) {
              RETURN_DOM = true;
            }
            if (USE_PROFILES) {
              ALLOWED_TAGS = addToSet({}, text);
              ALLOWED_ATTR = [];
              if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html$1);
                addToSet(ALLOWED_ATTR, html2);
              }
              if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg$1);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
              }
              if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
              }
              if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl$1);
                addToSet(ALLOWED_ATTR, mathMl);
                addToSet(ALLOWED_ATTR, xml);
              }
            }
            if (cfg.ADD_TAGS) {
              if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = clone(ALLOWED_TAGS);
              }
              addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
            if (cfg.ADD_ATTR) {
              if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = clone(ALLOWED_ATTR);
              }
              addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
            if (cfg.ADD_URI_SAFE_ATTR) {
              addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
            }
            if (cfg.FORBID_CONTENTS) {
              if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                FORBID_CONTENTS = clone(FORBID_CONTENTS);
              }
              addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
            }
            if (KEEP_CONTENT) {
              ALLOWED_TAGS["#text"] = true;
            }
            if (WHOLE_DOCUMENT) {
              addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
            }
            if (ALLOWED_TAGS.table) {
              addToSet(ALLOWED_TAGS, ["tbody"]);
              delete FORBID_TAGS.tbody;
            }
            if (cfg.TRUSTED_TYPES_POLICY) {
              if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
              }
              if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
              }
              trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
              emptyHTML = trustedTypesPolicy.createHTML("");
            } else {
              if (trustedTypesPolicy === void 0) {
                trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
              }
              if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
                emptyHTML = trustedTypesPolicy.createHTML("");
              }
            }
            if (freeze) {
              freeze(cfg);
            }
            CONFIG = cfg;
          };
          const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
          const HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "annotation-xml"]);
          const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
          const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
          const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
          const _checkValidNamespace = function _checkValidNamespace2(element) {
            let parent = getParentNode(element);
            if (!parent || !parent.tagName) {
              parent = {
                namespaceURI: NAMESPACE,
                tagName: "template"
              };
            }
            const tagName = stringToLowerCase(element.tagName);
            const parentTagName = stringToLowerCase(parent.tagName);
            if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
              return false;
            }
            if (element.namespaceURI === SVG_NAMESPACE) {
              if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === "svg";
              }
              if (parent.namespaceURI === MATHML_NAMESPACE) {
                return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
              }
              return Boolean(ALL_SVG_TAGS[tagName]);
            }
            if (element.namespaceURI === MATHML_NAMESPACE) {
              if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === "math";
              }
              if (parent.namespaceURI === SVG_NAMESPACE) {
                return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
              }
              return Boolean(ALL_MATHML_TAGS[tagName]);
            }
            if (element.namespaceURI === HTML_NAMESPACE) {
              if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
                return false;
              }
              if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
                return false;
              }
              return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
            }
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
              return true;
            }
            return false;
          };
          const _forceRemove = function _forceRemove2(node) {
            arrayPush(DOMPurify.removed, {
              element: node
            });
            try {
              getParentNode(node).removeChild(node);
            } catch (_2) {
              remove(node);
            }
          };
          const _removeAttribute = function _removeAttribute2(name, node) {
            try {
              arrayPush(DOMPurify.removed, {
                attribute: node.getAttributeNode(name),
                from: node
              });
            } catch (_2) {
              arrayPush(DOMPurify.removed, {
                attribute: null,
                from: node
              });
            }
            node.removeAttribute(name);
            if (name === "is" && !ALLOWED_ATTR[name]) {
              if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
                try {
                  _forceRemove(node);
                } catch (_2) {
                }
              } else {
                try {
                  node.setAttribute(name, "");
                } catch (_2) {
                }
              }
            }
          };
          const _initDocument = function _initDocument2(dirty) {
            let doc = null;
            let leadingWhitespace = null;
            if (FORCE_BODY) {
              dirty = "<remove></remove>" + dirty;
            } else {
              const matches = stringMatch(dirty, /^[\r\n\t ]+/);
              leadingWhitespace = matches && matches[0];
            }
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
              dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
            }
            const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            if (NAMESPACE === HTML_NAMESPACE) {
              try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
              } catch (_2) {
              }
            }
            if (!doc || !doc.documentElement) {
              doc = implementation.createDocument(NAMESPACE, "template", null);
              try {
                doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
              } catch (_2) {
              }
            }
            const body = doc.body || doc.documentElement;
            if (dirty && leadingWhitespace) {
              body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
            }
            if (NAMESPACE === HTML_NAMESPACE) {
              return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
            }
            return WHOLE_DOCUMENT ? doc.documentElement : body;
          };
          const _createNodeIterator = function _createNodeIterator2(root) {
            return createNodeIterator.call(
              root.ownerDocument || root,
              root,
              // eslint-disable-next-line no-bitwise
              NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
              null
            );
          };
          const _isClobbered = function _isClobbered2(elm) {
            return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
          };
          const _isNode = function _isNode2(object) {
            return typeof Node2 === "function" && object instanceof Node2;
          };
          const _executeHook = function _executeHook2(entryPoint, currentNode, data2) {
            if (!hooks[entryPoint]) {
              return;
            }
            arrayForEach(hooks[entryPoint], (hook) => {
              hook.call(DOMPurify, currentNode, data2, CONFIG);
            });
          };
          const _sanitizeElements = function _sanitizeElements2(currentNode) {
            let content = null;
            _executeHook("beforeSanitizeElements", currentNode, null);
            if (_isClobbered(currentNode)) {
              _forceRemove(currentNode);
              return true;
            }
            const tagName = transformCaseFunc(currentNode.nodeName);
            _executeHook("uponSanitizeElement", currentNode, {
              tagName,
              allowedTags: ALLOWED_TAGS
            });
            if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
              _forceRemove(currentNode);
              return true;
            }
            if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
              _forceRemove(currentNode);
              return true;
            }
            if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
              _forceRemove(currentNode);
              return true;
            }
            if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
              if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
                  return false;
                }
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
                  return false;
                }
              }
              if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                if (childNodes && parentNode) {
                  const childCount = childNodes.length;
                  for (let i = childCount - 1; i >= 0; --i) {
                    const childClone = cloneNode(childNodes[i], true);
                    childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
                    parentNode.insertBefore(childClone, getNextSibling(currentNode));
                  }
                }
              }
              _forceRemove(currentNode);
              return true;
            }
            if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
              _forceRemove(currentNode);
              return true;
            }
            if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
              _forceRemove(currentNode);
              return true;
            }
            if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
              content = currentNode.textContent;
              arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
                content = stringReplace(content, expr, " ");
              });
              if (currentNode.textContent !== content) {
                arrayPush(DOMPurify.removed, {
                  element: currentNode.cloneNode()
                });
                currentNode.textContent = content;
              }
            }
            _executeHook("afterSanitizeElements", currentNode, null);
            return false;
          };
          const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
            if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
              return false;
            }
            if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
            else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
              if (
                // First condition does a very basic check if a) it's basically a valid custom element tagname AND
                // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
                // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
              ) ;
              else {
                return false;
              }
            } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
            else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
            else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
            else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
            else if (value) {
              return false;
            } else ;
            return true;
          };
          const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
            return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
          };
          const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
            _executeHook("beforeSanitizeAttributes", currentNode, null);
            const {
              attributes
            } = currentNode;
            if (!attributes) {
              return;
            }
            const hookEvent = {
              attrName: "",
              attrValue: "",
              keepAttr: true,
              allowedAttributes: ALLOWED_ATTR
            };
            let l = attributes.length;
            while (l--) {
              const attr = attributes[l];
              const {
                name,
                namespaceURI,
                value: attrValue
              } = attr;
              const lcName = transformCaseFunc(name);
              let value = name === "value" ? attrValue : stringTrim(attrValue);
              hookEvent.attrName = lcName;
              hookEvent.attrValue = value;
              hookEvent.keepAttr = true;
              hookEvent.forceKeepAttr = void 0;
              _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
              value = hookEvent.attrValue;
              if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
              }
              if (hookEvent.forceKeepAttr) {
                continue;
              }
              _removeAttribute(name, currentNode);
              if (!hookEvent.keepAttr) {
                continue;
              }
              if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
              }
              if (SAFE_FOR_TEMPLATES) {
                arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
                  value = stringReplace(value, expr, " ");
                });
              }
              const lcTag = transformCaseFunc(currentNode.nodeName);
              if (!_isValidAttribute(lcTag, lcName, value)) {
                continue;
              }
              if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
                _removeAttribute(name, currentNode);
                value = SANITIZE_NAMED_PROPS_PREFIX + value;
              }
              if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
                if (namespaceURI) ;
                else {
                  switch (trustedTypes.getAttributeType(lcTag, lcName)) {
                    case "TrustedHTML": {
                      value = trustedTypesPolicy.createHTML(value);
                      break;
                    }
                    case "TrustedScriptURL": {
                      value = trustedTypesPolicy.createScriptURL(value);
                      break;
                    }
                  }
                }
              }
              try {
                if (namespaceURI) {
                  currentNode.setAttributeNS(namespaceURI, name, value);
                } else {
                  currentNode.setAttribute(name, value);
                }
                if (_isClobbered(currentNode)) {
                  _forceRemove(currentNode);
                } else {
                  arrayPop(DOMPurify.removed);
                }
              } catch (_2) {
              }
            }
            _executeHook("afterSanitizeAttributes", currentNode, null);
          };
          const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
            let shadowNode = null;
            const shadowIterator = _createNodeIterator(fragment);
            _executeHook("beforeSanitizeShadowDOM", fragment, null);
            while (shadowNode = shadowIterator.nextNode()) {
              _executeHook("uponSanitizeShadowNode", shadowNode, null);
              if (_sanitizeElements(shadowNode)) {
                continue;
              }
              if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM2(shadowNode.content);
              }
              _sanitizeAttributes(shadowNode);
            }
            _executeHook("afterSanitizeShadowDOM", fragment, null);
          };
          DOMPurify.sanitize = function(dirty) {
            let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            let body = null;
            let importedNode = null;
            let currentNode = null;
            let returnNode = null;
            IS_EMPTY_INPUT = !dirty;
            if (IS_EMPTY_INPUT) {
              dirty = "<!-->";
            }
            if (typeof dirty !== "string" && !_isNode(dirty)) {
              if (typeof dirty.toString === "function") {
                dirty = dirty.toString();
                if (typeof dirty !== "string") {
                  throw typeErrorCreate("dirty is not a string, aborting");
                }
              } else {
                throw typeErrorCreate("toString is not a function");
              }
            }
            if (!DOMPurify.isSupported) {
              return dirty;
            }
            if (!SET_CONFIG) {
              _parseConfig(cfg);
            }
            DOMPurify.removed = [];
            if (typeof dirty === "string") {
              IN_PLACE = false;
            }
            if (IN_PLACE) {
              if (dirty.nodeName) {
                const tagName = transformCaseFunc(dirty.nodeName);
                if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                  throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
                }
              }
            } else if (dirty instanceof Node2) {
              body = _initDocument("<!---->");
              importedNode = body.ownerDocument.importNode(dirty, true);
              if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
                body = importedNode;
              } else if (importedNode.nodeName === "HTML") {
                body = importedNode;
              } else {
                body.appendChild(importedNode);
              }
            } else {
              if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
              dirty.indexOf("<") === -1) {
                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
              }
              body = _initDocument(dirty);
              if (!body) {
                return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
              }
            }
            if (body && FORCE_BODY) {
              _forceRemove(body.firstChild);
            }
            const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
            while (currentNode = nodeIterator.nextNode()) {
              if (_sanitizeElements(currentNode)) {
                continue;
              }
              if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
              }
              _sanitizeAttributes(currentNode);
            }
            if (IN_PLACE) {
              return dirty;
            }
            if (RETURN_DOM) {
              if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);
                while (body.firstChild) {
                  returnNode.appendChild(body.firstChild);
                }
              } else {
                returnNode = body;
              }
              if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
                returnNode = importNode.call(originalDocument, returnNode, true);
              }
              return returnNode;
            }
            let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
              serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
            }
            if (SAFE_FOR_TEMPLATES) {
              arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
                serializedHTML = stringReplace(serializedHTML, expr, " ");
              });
            }
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
          };
          DOMPurify.setConfig = function() {
            let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            _parseConfig(cfg);
            SET_CONFIG = true;
          };
          DOMPurify.clearConfig = function() {
            CONFIG = null;
            SET_CONFIG = false;
          };
          DOMPurify.isValidAttribute = function(tag2, attr, value) {
            if (!CONFIG) {
              _parseConfig({});
            }
            const lcTag = transformCaseFunc(tag2);
            const lcName = transformCaseFunc(attr);
            return _isValidAttribute(lcTag, lcName, value);
          };
          DOMPurify.addHook = function(entryPoint, hookFunction) {
            if (typeof hookFunction !== "function") {
              return;
            }
            hooks[entryPoint] = hooks[entryPoint] || [];
            arrayPush(hooks[entryPoint], hookFunction);
          };
          DOMPurify.removeHook = function(entryPoint) {
            if (hooks[entryPoint]) {
              return arrayPop(hooks[entryPoint]);
            }
          };
          DOMPurify.removeHooks = function(entryPoint) {
            if (hooks[entryPoint]) {
              hooks[entryPoint] = [];
            }
          };
          DOMPurify.removeAllHooks = function() {
            hooks = {};
          };
          return DOMPurify;
        }
        var purify3 = createDOMPurify();
        return purify3;
      });
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

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink-task\packages\ink-web\src\pages\ui\format\index.ink
  var format_exports = {};
  __export(format_exports, {
    BUILD_ID: () => BUILD_ID,
    ClientRegistry: () => import_Registry36.default,
    TemplateDocument: () => TemplateDocument,
    components: () => components,
    data: () => import_data.default,
    elements: () => elements,
    emitter: () => import_Emitter.default
  });
  var import_Document = __toESM(require_Document());
  var import_Document2 = __toESM(require_Document2());
  var import_Registry36 = __toESM(require_Registry());
  var import_Emitter = __toESM(require_Emitter());
  var import_data = __toESM(require_data());

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\packages\ink-web\src\components\api\docs.ink
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

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\packages\ink-web\src\components\i18n\translate.ink
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

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\packages\ink-web\src\components\i18n\translate.ink
  var Translate_794a00a5e900fca28310 = class extends import_Component2.default {
    static id = "794a00a5e900fca28310";
    static tagname = "translate";
    static classname = "Translate_794a00a5e900fca28310";
    styles() {
      return ``;
    }
    template() {
      const { trim = false, p = false, li = false, div = false } = this.props;
      const childlist2 = this.originalChildren;
      const phrase = [];
      const variables = [];
      for (const child of childlist2) {
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

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\panel.ink
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

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\code.ink
  var import_Registry4 = __toESM(require_Registry());
  var import_Component4 = __toESM(require_Component());
  var import_prismjs = __toESM(require_prism());
  var Code_c09ccb1e08c8796465cf = class extends import_Component4.default {
    static id = "c09ccb1e08c8796465cf";
    static tagname = "code";
    static classname = "Code_c09ccb1e08c8796465cf";
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
      const {
        lang = "markup",
        numbers = false,
        inline: inline2 = false,
        trim = false,
        ltrim = false,
        rtrim: rtrim2 = false,
        detab = 0,
        value
      } = this.props;
      const children2 = this.originalChildren;
      let snippet = value || children2[0]?.textContent || "";
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
      } else if (rtrim2) {
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
        import_Registry4.default.createElement("link", { "rel": `stylesheet`, "href": `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css` }).element,
        import_Registry4.default.createText(`
`, false),
        import_Registry4.default.createElement("link", { "rel": `stylesheet`, "href": `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css` }).element,
        import_Registry4.default.createText(`
`, false),
        ...!!(lang === "bash") ? [
          import_Registry4.default.createText(`
  `, false),
          import_Registry4.default.createElement("div", { "class": `terminal` }, [
            import_Registry4.default.createElement("span", {}, [
              import_Registry4.default.createText(`$`, false)
            ]).element,
            import_Registry4.default.createText(` `, false),
            ...this._toNodeList(childlist)
          ]).element,
          import_Registry4.default.createText(`
`, false)
        ] : !!snippet ? [
          ,
          import_Registry4.default.createText(`
  `, false),
          ...!!numbers ? [
            import_Registry4.default.createText(`
    `, false),
            import_Registry4.default.createElement("pre", { "class": `snippet line-numbers` }, [
              import_Registry4.default.createElement("code", { "mount": highlight }, []).element
            ]).element,
            import_Registry4.default.createText(`
  `, false)
          ] : true ? [
            ,
            import_Registry4.default.createText(`
    `, false),
            import_Registry4.default.createElement("pre", { "class": `snippet pad` }, [
              import_Registry4.default.createElement("code", { "mount": highlight }, []).element
            ]).element,
            import_Registry4.default.createText(`
  `, false)
          ] : [],
          import_Registry4.default.createText(`
`, false)
        ] : [],
        import_Registry4.default.createText(`

`, false)
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\color.ink
  var import_Registry5 = __toESM(require_Registry());
  var import_Component5 = __toESM(require_Component());
  var import_StyleSet = __toESM(require_StyleSet());
  var import_bold = __toESM(require_bold());
  var import_display = __toESM(require_display());
  var import_size = __toESM(require_size());
  var Color_d85d69424b8f7c3ab40c = class extends import_Component5.default {
    static id = "d85d69424b8f7c3ab40c";
    static tagname = "color";
    static classname = "Color_d85d69424b8f7c3ab40c";
    styles() {
      return ``;
    }
    template() {
      const { value } = this.props;
      let { box, text } = this.propsTree;
      if (box === void 0 && text !== false) {
        box = {};
        text = true;
      }
      const styles = new import_StyleSet.default();
      this.styles = () => styles.toString();
      const display = (0, import_display.default)(this.props, styles, "inline-flex");
      if (display === "flex" || display === "inline-flex") {
        styles.add(":host", "align-items", "center");
      }
      (0, import_size.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold.default)(this.props, styles, ":host");
      if (box) {
        styles.add(":host .box", "display", "inline-block");
        styles.add(":host .box", "border-radius", "4px");
        styles.add(":host .box", "border", "1px solid var(--black)");
        styles.add(":host .box", "background-color", value);
        (0, import_size.default)(box, styles, "16px", ".box", "width");
        (0, import_size.default)(box, styles, "16px", ".box", "height");
      }
      if (text) {
        if (box) {
          styles.add(":host .box", "margin-right", "5px");
        }
      }
      return () => [
        import_Registry5.default.createText(`

`, false),
        ...!!box ? [
          import_Registry5.default.createText(`
  `, false),
          import_Registry5.default.createElement("span", { "class": `box` }, []).element,
          import_Registry5.default.createText(`
`, false)
        ] : [],
        import_Registry5.default.createText(`
`, false),
        ...!!text ? [
          import_Registry5.default.createText(`
  `, false),
          import_Registry5.default.createElement("span", { "class": `text` }, [
            ...this._toNodeList(value)
          ]).element,
          import_Registry5.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\country.ink
  var import_Registry6 = __toESM(require_Registry());
  var import_Component6 = __toESM(require_Component());
  var import_StyleSet2 = __toESM(require_StyleSet());
  var import_bold2 = __toESM(require_bold());
  var import_color = __toESM(require_color());
  var import_display2 = __toESM(require_display());
  var import_size2 = __toESM(require_size());

  // ../../node_modules/@stackpress/ink-ui/utilities/intl.json
  var intl_default = [
    {
      countryCode: "AD",
      countryName: "Andorra",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "AE",
      countryName: "United Arab Emirates",
      currencyType: "fiat",
      currencyCode: "AED",
      currencyName: "United Arab Emirates Dirham",
      currencyPlural: "UAE dirhams",
      currencySymbol: "AED",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "AF",
      countryName: "Afghanistan",
      currencyType: "fiat",
      currencyCode: "AFN",
      currencyName: "Afghan Afghani",
      currencyPlural: "Afghan Afghanis",
      currencySymbol: "Af",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "AL",
      countryName: "Albania",
      currencyType: "fiat",
      currencyCode: "ALL",
      currencyName: "Albanian Lek",
      currencyPlural: "Albanian lek\xEB",
      currencySymbol: "ALL",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "AM",
      countryName: "Armenia",
      currencyType: "fiat",
      currencyCode: "AMD",
      currencyName: "Armenian Dram",
      currencyPlural: "Armenian drams",
      currencySymbol: "AMD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "AR",
      countryName: "Argentina",
      currencyType: "fiat",
      currencyCode: "ARS",
      currencyName: "Argentine Peso",
      currencyPlural: "Argentine pesos",
      currencySymbol: "AR$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "AS",
      countryName: "American Samoa",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "AT",
      countryName: "Austria",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "AU",
      countryName: "Australia",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "AX",
      countryName: "\xC5land",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "AZ",
      countryName: "Azerbaijan",
      currencyType: "fiat",
      currencyCode: "AZN",
      currencyName: "Azerbaijani Manat",
      currencyPlural: "Azerbaijani manats",
      currencySymbol: "man.",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BA",
      countryName: "Bosnia and Herzegovina",
      currencyType: "fiat",
      currencyCode: "BAM",
      currencyName: "Bosnia-Herzegovina Convertible Mark",
      currencyPlural: "Bosnia-Herzegovina convertible marks",
      currencySymbol: "KM",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "b",
      countryName: "Bangladesh",
      currencyType: "fiat",
      currencyCode: "bT",
      currencyName: "Bangladeshi Taka",
      currencyPlural: "Bangladeshi takas",
      currencySymbol: "Tk",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BE",
      countryName: "Belgium",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "BF",
      countryName: "Burkina Faso",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "BG",
      countryName: "Bulgaria",
      currencyType: "fiat",
      currencyCode: "BGN",
      currencyName: "Bulgarian Lev",
      currencyPlural: "Bulgarian leva",
      currencySymbol: "BGN",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BH",
      countryName: "Bahrain",
      currencyType: "fiat",
      currencyCode: "BHD",
      currencyName: "Bahraini Dinar",
      currencyPlural: "Bahraini dinars",
      currencySymbol: "b",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BI",
      countryName: "Burundi",
      currencyType: "fiat",
      currencyCode: "BIF",
      currencyName: "Burundian Franc",
      currencyPlural: "Burundian francs",
      currencySymbol: "FBu",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BJ",
      countryName: "Benin",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "BL",
      countryName: "Saint Barth\xE9lemy",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "BN",
      countryName: "Brunei",
      currencyType: "fiat",
      currencyCode: "BND",
      currencyName: "Brunei Dollar",
      currencyPlural: "Brunei dollars",
      currencySymbol: "BN$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BO",
      countryName: "Bolivia",
      currencyType: "fiat",
      currencyCode: "BOB",
      currencyName: "Bolivian Boliviano",
      currencyPlural: "Bolivian bolivianos",
      currencySymbol: "Bs",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BQ",
      countryName: "Bonaire",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "BR",
      countryName: "Brazil",
      currencyType: "fiat",
      currencyCode: "BRL",
      currencyName: "Brazilian Real",
      currencyPlural: "Brazilian reals",
      currencySymbol: "R$",
      currencyOrigin: true,
      language: "pt_BR"
    },
    {
      countryCode: "BV",
      countryName: "Bouvet Island",
      currencyType: "fiat",
      currencyCode: "NOK",
      currencyName: "Norwegian Krone",
      currencyPlural: "Norwegian kroner",
      currencySymbol: "Nkr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BW",
      countryName: "Botswana",
      currencyType: "fiat",
      currencyCode: "BWP",
      currencyName: "Botswanan Pula",
      currencyPlural: "Botswanan pulas",
      currencySymbol: "BWP",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BZ",
      countryName: "Belize",
      currencyType: "fiat",
      currencyCode: "BZD",
      currencyName: "Belize Dollar",
      currencyPlural: "Belize dollars",
      currencySymbol: "BZ$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CA",
      countryName: "Canada",
      currencyType: "fiat",
      currencyCode: "CAD",
      currencyName: "Canadian Dollar",
      currencyPlural: "Canadian dollars",
      currencySymbol: "CA$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CC",
      countryName: "Cocos [Keeling] Islands",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "CD",
      countryName: "Democratic Republic of the Congo",
      currencyType: "fiat",
      currencyCode: "CDF",
      currencyName: "Congolese Franc",
      currencyPlural: "Congolese francs",
      currencySymbol: "CDF",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CF",
      countryName: "Central African Republic",
      currencyType: "fiat",
      currencyCode: "XAF",
      currencyName: "CFA Franc BEAC",
      currencyPlural: "CFA francs BEAC",
      currencySymbol: "FCFA",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CG",
      countryName: "Republic of the Congo",
      currencyType: "fiat",
      currencyCode: "XAF",
      currencyName: "CFA Franc BEAC",
      currencyPlural: "CFA francs BEAC",
      currencySymbol: "FCFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "CH",
      countryName: "Switzerland",
      currencyType: "fiat",
      currencyCode: "CHF",
      currencyName: "Swiss Franc",
      currencyPlural: "Swiss francs",
      currencySymbol: "CHF",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CI",
      countryName: "Ivory Coast",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "CK",
      countryName: "Cook Islands",
      currencyType: "fiat",
      currencyCode: "NZD",
      currencyName: "New Zealand Dollar",
      currencyPlural: "New Zealand dollars",
      currencySymbol: "NZ$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CL",
      countryName: "Chile",
      currencyType: "fiat",
      currencyCode: "CLP",
      currencyName: "Chilean Peso",
      currencyPlural: "Chilean pesos",
      currencySymbol: "CL$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CM",
      countryName: "Cameroon",
      currencyType: "fiat",
      currencyCode: "XAF",
      currencyName: "CFA Franc BEAC",
      currencyPlural: "CFA francs BEAC",
      currencySymbol: "FCFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "CN",
      countryName: "China",
      currencyType: "fiat",
      currencyCode: "CNY",
      currencyName: "Chinese Yuan",
      currencyPlural: "Chinese yuan",
      currencySymbol: "CN\xA5",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CO",
      countryName: "Colombia",
      currencyType: "fiat",
      currencyCode: "COP",
      currencyName: "Colombian Peso",
      currencyPlural: "Colombian pesos",
      currencySymbol: "CO$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CR",
      countryName: "Costa Rica",
      currencyType: "fiat",
      currencyCode: "CRC",
      currencyName: "Costa Rican Col\xF3n",
      currencyPlural: "Costa Rican col\xF3ns",
      currencySymbol: "\u20A1",
      currencyOrigin: true,
      language: "es"
    },
    {
      countryCode: "CV",
      countryName: "Cape Verde",
      currencyType: "fiat",
      currencyCode: "CVE",
      currencyName: "Cape Verdean Escudo",
      currencyPlural: "Cape Verdean escudos",
      currencySymbol: "CV$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "CX",
      countryName: "Christmas Island",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "CY",
      countryName: "Cyprus",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "CZ",
      countryName: "Czechia",
      currencyType: "fiat",
      currencyCode: "CZK",
      currencyName: "Czech Republic Koruna",
      currencyPlural: "Czech Republic korunas",
      currencySymbol: "K\u010D",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "DE",
      countryName: "Germany",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "DJ",
      countryName: "Djibouti",
      currencyType: "fiat",
      currencyCode: "DJF",
      currencyName: "Djiboutian Franc",
      currencyPlural: "Djiboutian francs",
      currencySymbol: "Fdj",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "DK",
      countryName: "Denmark",
      currencyType: "fiat",
      currencyCode: "DKK",
      currencyName: "Danish Krone",
      currencyPlural: "Danish kroner",
      currencySymbol: "Dkr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "DO",
      countryName: "Dominican Republic",
      currencyType: "fiat",
      currencyCode: "DOP",
      currencyName: "Dominican Peso",
      currencyPlural: "Dominican pesos",
      currencySymbol: "RD$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "DZ",
      countryName: "Algeria",
      currencyType: "fiat",
      currencyCode: "DZD",
      currencyName: "Algerian Dinar",
      currencyPlural: "Algerian dinars",
      currencySymbol: "DA",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "EC",
      countryName: "Ecuador",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "EE",
      countryName: "Estonia",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "EG",
      countryName: "Egypt",
      currencyType: "fiat",
      currencyCode: "EGP",
      currencyName: "Egyptian Pound",
      currencyPlural: "Egyptian pounds",
      currencySymbol: "EGP",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "EH",
      countryName: "Western Sahara",
      currencyType: "fiat",
      currencyCode: "MAD",
      currencyName: "Moroccan Dirham",
      currencyPlural: "Moroccan dirhams",
      currencySymbol: "MAD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "ER",
      countryName: "Eritrea",
      currencyType: "fiat",
      currencyCode: "ERN",
      currencyName: "Eritrean Nakfa",
      currencyPlural: "Eritrean nakfas",
      currencySymbol: "Nfk",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "ES",
      countryName: "Spain",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "ET",
      countryName: "Ethiopia",
      currencyType: "fiat",
      currencyCode: "ETB",
      currencyName: "Ethiopian Birr",
      currencyPlural: "Ethiopian birrs",
      currencySymbol: "Br",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "FI",
      countryName: "Finland",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "FM",
      countryName: "Micronesia",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "FO",
      countryName: "Faroe Islands",
      currencyType: "fiat",
      currencyCode: "DKK",
      currencyName: "Danish Krone",
      currencyPlural: "Danish kroner",
      currencySymbol: "Dkr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "FR",
      countryName: "France",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "GA",
      countryName: "Gabon",
      currencyType: "fiat",
      currencyCode: "XAF",
      currencyName: "CFA Franc BEAC",
      currencyPlural: "CFA francs BEAC",
      currencySymbol: "FCFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GB",
      countryName: "United Kingdom",
      currencyType: "fiat",
      currencyCode: "GBP",
      currencyName: "British Pound Sterling",
      currencyPlural: "British pounds sterling",
      currencySymbol: "\xA3",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "GE",
      countryName: "Georgia",
      currencyType: "fiat",
      currencyCode: "GEL",
      currencyName: "Georgian Lari",
      currencyPlural: "Georgian laris",
      currencySymbol: "GEL",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "GF",
      countryName: "French Guiana",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GG",
      countryName: "Guernsey",
      currencyType: "fiat",
      currencyCode: "GBP",
      currencyName: "British Pound Sterling",
      currencyPlural: "British pounds sterling",
      currencySymbol: "\xA3",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GH",
      countryName: "Ghana",
      currencyType: "fiat",
      currencyCode: "GHS",
      currencyName: "Ghanaian Cedi",
      currencyPlural: "Ghanaian cedis",
      currencySymbol: "GH\u20B5",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "GL",
      countryName: "Greenland",
      currencyType: "fiat",
      currencyCode: "DKK",
      currencyName: "Danish Krone",
      currencyPlural: "Danish kroner",
      currencySymbol: "Dkr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "GN",
      countryName: "Guinea",
      currencyType: "fiat",
      currencyCode: "GNF",
      currencyName: "Guinean Franc",
      currencyPlural: "Guinean francs",
      currencySymbol: "FG",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "GP",
      countryName: "Guadeloupe",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GQ",
      countryName: "Equatorial Guinea",
      currencyType: "fiat",
      currencyCode: "XAF",
      currencyName: "CFA Franc BEAC",
      currencyPlural: "CFA francs BEAC",
      currencySymbol: "FCFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GR",
      countryName: "Greece",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GS",
      countryName: "South Georgia and the South Sandwich Islands",
      currencyType: "fiat",
      currencyCode: "GBP",
      currencyName: "British Pound Sterling",
      currencyPlural: "British pounds sterling",
      currencySymbol: "\xA3",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GT",
      countryName: "Guatemala",
      currencyType: "fiat",
      currencyCode: "GTQ",
      currencyName: "Guatemalan Quetzal",
      currencyPlural: "Guatemalan quetzals",
      currencySymbol: "GTQ",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "GU",
      countryName: "Guam",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "GW",
      countryName: "Guinea-Bissau",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "HK",
      countryName: "Hong Kong",
      currencyType: "fiat",
      currencyCode: "HKD",
      currencyName: "Hong Kong Dollar",
      currencyPlural: "Hong Kong dollars",
      currencySymbol: "HK$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "HM",
      countryName: "Heard Island and McDonald Islands",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "HN",
      countryName: "Honduras",
      currencyType: "fiat",
      currencyCode: "HNL",
      currencyName: "Honduran Lempira",
      currencyPlural: "Honduran lempiras",
      currencySymbol: "HNL",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "HR",
      countryName: "Croatia",
      currencyType: "fiat",
      currencyCode: "HRK",
      currencyName: "Croatian Kuna",
      currencyPlural: "Croatian kunas",
      currencySymbol: "kn",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "HU",
      countryName: "Hungary",
      currencyType: "fiat",
      currencyCode: "HUF",
      currencyName: "Hungarian Forint",
      currencyPlural: "Hungarian forints",
      currencySymbol: "Ft",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "ID",
      countryName: "Indonesia",
      currencyType: "fiat",
      currencyCode: "IDR",
      currencyName: "Indonesian Rupiah",
      currencyPlural: "Indonesian rupiahs",
      currencySymbol: "Rp",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "IE",
      countryName: "Ireland",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "IL",
      countryName: "Israel",
      currencyType: "fiat",
      currencyCode: "ILS",
      currencyName: "Israeli New Sheqel",
      currencyPlural: "Israeli new sheqels",
      currencySymbol: "\u20AA",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "IM",
      countryName: "Isle of Man",
      currencyType: "fiat",
      currencyCode: "GBP",
      currencyName: "British Pound Sterling",
      currencyPlural: "British pounds sterling",
      currencySymbol: "\xA3",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "IN",
      countryName: "India",
      currencyType: "fiat",
      currencyCode: "INR",
      currencyName: "Indian Rupee",
      currencyPlural: "Indian rupees",
      currencySymbol: "Rs",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "IO",
      countryName: "British Indian Ocean Territory",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "IQ",
      countryName: "Iraq",
      currencyType: "fiat",
      currencyCode: "IQD",
      currencyName: "Iraqi Dinar",
      currencyPlural: "Iraqi dinars",
      currencySymbol: "IQD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "IR",
      countryName: "Iran",
      currencyType: "fiat",
      currencyCode: "IRR",
      currencyName: "Iranian Rial",
      currencyPlural: "Iranian rials",
      currencySymbol: "IRR",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "IS",
      countryName: "Iceland",
      currencyType: "fiat",
      currencyCode: "ISK",
      currencyName: "Icelandic Kr\xF3na",
      currencyPlural: "Icelandic kr\xF3nur",
      currencySymbol: "Ikr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "IT",
      countryName: "Italy",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "JE",
      countryName: "Jersey",
      currencyType: "fiat",
      currencyCode: "GBP",
      currencyName: "British Pound Sterling",
      currencyPlural: "British pounds sterling",
      currencySymbol: "\xA3",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "JM",
      countryName: "Jamaica",
      currencyType: "fiat",
      currencyCode: "JMD",
      currencyName: "Jamaican Dollar",
      currencyPlural: "Jamaican dollars",
      currencySymbol: "J$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "JO",
      countryName: "Jordan",
      currencyType: "fiat",
      currencyCode: "JOD",
      currencyName: "Jordanian Dinar",
      currencyPlural: "Jordanian dinars",
      currencySymbol: "JD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "JP",
      countryName: "Japan",
      currencyType: "fiat",
      currencyCode: "JPY",
      currencyName: "Japanese Yen",
      currencyPlural: "Japanese yen",
      currencySymbol: "\xA5",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "KE",
      countryName: "Kenya",
      currencyType: "fiat",
      currencyCode: "KES",
      currencyName: "Kenyan Shilling",
      currencyPlural: "Kenyan shillings",
      currencySymbol: "Ksh",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "KH",
      countryName: "Cambodia",
      currencyType: "fiat",
      currencyCode: "KHR",
      currencyName: "Cambodian Riel",
      currencyPlural: "Cambodian riels",
      currencySymbol: "KHR",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "KI",
      countryName: "Kiribati",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "KM",
      countryName: "Comoros",
      currencyType: "fiat",
      currencyCode: "KMF",
      currencyName: "Comorian Franc",
      currencyPlural: "Comorian francs",
      currencySymbol: "CF",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "KR",
      countryName: "South Korea",
      currencyType: "fiat",
      currencyCode: "KRW",
      currencyName: "South Korean Won",
      currencyPlural: "South Korean won",
      currencySymbol: "\u20A9",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "KW",
      countryName: "Kuwait",
      currencyType: "fiat",
      currencyCode: "KWD",
      currencyName: "Kuwaiti Dinar",
      currencyPlural: "Kuwaiti dinars",
      currencySymbol: "KD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "KZ",
      countryName: "Kazakhstan",
      currencyType: "fiat",
      currencyCode: "KZT",
      currencyName: "Kazakhstani Tenge",
      currencyPlural: "Kazakhstani tenges",
      currencySymbol: "KZT",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "LB",
      countryName: "Lebanon",
      currencyType: "fiat",
      currencyCode: "LBP",
      currencyName: "Lebanese Pound",
      currencyPlural: "Lebanese pounds",
      currencySymbol: "LB\xA3",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "LI",
      countryName: "Liechtenstein",
      currencyType: "fiat",
      currencyCode: "CHF",
      currencyName: "Swiss Franc",
      currencyPlural: "Swiss francs",
      currencySymbol: "CHF",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "LK",
      countryName: "Sri Lanka",
      currencyType: "fiat",
      currencyCode: "LKR",
      currencyName: "Sri Lankan Rupee",
      currencyPlural: "Sri Lankan rupees",
      currencySymbol: "SLRs",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "LT",
      countryName: "Lithuania",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "LU",
      countryName: "Luxembourg",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "LV",
      countryName: "Latvia",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "LY",
      countryName: "Libya",
      currencyType: "fiat",
      currencyCode: "LYD",
      currencyName: "Libyan Dinar",
      currencyPlural: "Libyan dinars",
      currencySymbol: "LD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "MA",
      countryName: "Morocco",
      currencyType: "fiat",
      currencyCode: "MAD",
      currencyName: "Moroccan Dirham",
      currencyPlural: "Moroccan dirhams",
      currencySymbol: "MAD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "MC",
      countryName: "Monaco",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MD",
      countryName: "Moldova",
      currencyType: "fiat",
      currencyCode: "MDL",
      currencyName: "Moldovan Leu",
      currencyPlural: "Moldovan lei",
      currencySymbol: "MDL",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "ME",
      countryName: "Montenegro",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MF",
      countryName: "Saint Martin",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MG",
      countryName: "Madagascar",
      currencyType: "fiat",
      currencyCode: "MGA",
      currencyName: "Malagasy Ariary",
      currencyPlural: "Malagasy Ariaries",
      currencySymbol: "MGA",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "MH",
      countryName: "Marshall Islands",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MK",
      countryName: "Macedonia",
      currencyType: "fiat",
      currencyCode: "MKD",
      currencyName: "Macedonian Denar",
      currencyPlural: "Macedonian denari",
      currencySymbol: "MKD",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "ML",
      countryName: "Mali",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MM",
      countryName: "Myanmar [Burma]",
      currencyType: "fiat",
      currencyCode: "MMK",
      currencyName: "Myanma Kyat",
      currencyPlural: "Myanma kyats",
      currencySymbol: "MMK",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "MO",
      countryName: "Macao",
      currencyType: "fiat",
      currencyCode: "MOP",
      currencyName: "Macanese Pataca",
      currencyPlural: "Macanese patacas",
      currencySymbol: "MOP$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "MP",
      countryName: "Northern Mariana Islands",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MQ",
      countryName: "Martinique",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MT",
      countryName: "Malta",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "MU",
      countryName: "Mauritius",
      currencyType: "fiat",
      currencyCode: "MUR",
      currencyName: "Mauritian Rupee",
      currencyPlural: "Mauritian rupees",
      currencySymbol: "MURs",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "MX",
      countryName: "Mexico",
      currencyType: "fiat",
      currencyCode: "MXN",
      currencyName: "Mexican Peso",
      currencyPlural: "Mexican pesos",
      currencySymbol: "MX$",
      currencyOrigin: true,
      language: "es"
    },
    {
      countryCode: "MY",
      countryName: "Malaysia",
      currencyType: "fiat",
      currencyCode: "MYR",
      currencyName: "Malaysian Ringgit",
      currencyPlural: "Malaysian ringgits",
      currencySymbol: "RM",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "MZ",
      countryName: "Mozambique",
      currencyType: "fiat",
      currencyCode: "MZN",
      currencyName: "Mozambican Metical",
      currencyPlural: "Mozambican meticals",
      currencySymbol: "MTn",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NA",
      countryName: "Namibia",
      currencyType: "fiat",
      currencyCode: "NAD",
      currencyName: "Namibian Dollar",
      currencyPlural: "Namibian dollars",
      currencySymbol: "N$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NE",
      countryName: "Niger",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NF",
      countryName: "Norfolk Island",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "NG",
      countryName: "Nigeria",
      currencyType: "fiat",
      currencyCode: "NGN",
      currencyName: "Nigerian Naira",
      currencyPlural: "Nigerian nairas",
      currencySymbol: "\u20A6",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NI",
      countryName: "Nicaragua",
      currencyType: "fiat",
      currencyCode: "NIO",
      currencyName: "Nicaraguan C\xF3rdoba",
      currencyPlural: "Nicaraguan c\xF3rdobas",
      currencySymbol: "C$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NL",
      countryName: "Netherlands",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "NO",
      countryName: "Norway",
      currencyType: "fiat",
      currencyCode: "NOK",
      currencyName: "Norwegian Krone",
      currencyPlural: "Norwegian kroner",
      currencySymbol: "Nkr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NP",
      countryName: "Nepal",
      currencyType: "fiat",
      currencyCode: "NPR",
      currencyName: "Nepalese Rupee",
      currencyPlural: "Nepalese rupees",
      currencySymbol: "NPRs",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NR",
      countryName: "Nauru",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "NU",
      countryName: "Niue",
      currencyType: "fiat",
      currencyCode: "NZD",
      currencyName: "New Zealand Dollar",
      currencyPlural: "New Zealand dollars",
      currencySymbol: "NZ$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "NZ",
      countryName: "New Zealand",
      currencyType: "fiat",
      currencyCode: "NZD",
      currencyName: "New Zealand Dollar",
      currencyPlural: "New Zealand dollars",
      currencySymbol: "NZ$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "OM",
      countryName: "Oman",
      currencyType: "fiat",
      currencyCode: "OMR",
      currencyName: "Omani Rial",
      currencyPlural: "Omani rials",
      currencySymbol: "OMR",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "PA",
      countryName: "Panama",
      currencyType: "fiat",
      currencyCode: "PAB",
      currencyName: "Panamanian Balboa",
      currencyPlural: "Panamanian balboas",
      currencySymbol: "B/.",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "PE",
      countryName: "Peru",
      currencyType: "fiat",
      currencyCode: "PEN",
      currencyName: "Peruvian Nuevo Sol",
      currencyPlural: "Peruvian nuevos soles",
      currencySymbol: "S/.",
      currencyOrigin: true,
      language: "es"
    },
    {
      countryCode: "PH",
      countryName: "Philippines",
      currencyType: "fiat",
      currencyCode: "PHP",
      currencyName: "Philippine Peso",
      currencyPlural: "Philippine pesos",
      currencySymbol: "\u20B1",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "PK",
      countryName: "Pakistan",
      currencyType: "fiat",
      currencyCode: "PKR",
      currencyName: "Pakistani Rupee",
      currencyPlural: "Pakistani rupees",
      currencySymbol: "PKRs",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "PL",
      countryName: "Poland",
      currencyType: "fiat",
      currencyCode: "PLN",
      currencyName: "Polish Zloty",
      currencyPlural: "Polish zlotys",
      currencySymbol: "z\u0142",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "PM",
      countryName: "Saint Pierre and Miquelon",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "PN",
      countryName: "Pitcairn Islands",
      currencyType: "fiat",
      currencyCode: "NZD",
      currencyName: "New Zealand Dollar",
      currencyPlural: "New Zealand dollars",
      currencySymbol: "NZ$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "PR",
      countryName: "Puerto Rico",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "PS",
      countryName: "Palestine",
      currencyType: "fiat",
      currencyCode: "ILS",
      currencyName: "Israeli New Sheqel",
      currencyPlural: "Israeli new sheqels",
      currencySymbol: "\u20AA",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "PT",
      countryName: "Portugal",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "PW",
      countryName: "Palau",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "PY",
      countryName: "Paraguay",
      currencyType: "fiat",
      currencyCode: "PYG",
      currencyName: "Paraguayan Guarani",
      currencyPlural: "Paraguayan guaranis",
      currencySymbol: "\u20B2",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "QA",
      countryName: "Qatar",
      currencyType: "fiat",
      currencyCode: "QAR",
      currencyName: "Qatari Rial",
      currencyPlural: "Qatari rials",
      currencySymbol: "QR",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "RE",
      countryName: "R\xE9union",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "RO",
      countryName: "Romania",
      currencyType: "fiat",
      currencyCode: "RON",
      currencyName: "Romanian Leu",
      currencyPlural: "Romanian lei",
      currencySymbol: "RON",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "RS",
      countryName: "Serbia",
      currencyType: "fiat",
      currencyCode: "RSD",
      currencyName: "Serbian Dinar",
      currencyPlural: "Serbian dinars",
      currencySymbol: "din.",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "RU",
      countryName: "Russia",
      currencyType: "fiat",
      currencyCode: "RUB",
      currencyName: "Russian Ruble",
      currencyPlural: "Russian rubles",
      currencySymbol: "RUB",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "RW",
      countryName: "Rwanda",
      currencyType: "fiat",
      currencyCode: "RWF",
      currencyName: "Rwandan Franc",
      currencyPlural: "Rwandan francs",
      currencySymbol: "RWF",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "SA",
      countryName: "Saudi Arabia",
      currencyType: "fiat",
      currencyCode: "SAR",
      currencyName: "Saudi Riyal",
      currencyPlural: "Saudi riyals",
      currencySymbol: "SR",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "SD",
      countryName: "Sudan",
      currencyType: "fiat",
      currencyCode: "SDG",
      currencyName: "Sudanese Pound",
      currencyPlural: "Sudanese pounds",
      currencySymbol: "SDG",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "SE",
      countryName: "Sweden",
      currencyType: "fiat",
      currencyCode: "SEK",
      currencyName: "Swedish Krona",
      currencyPlural: "Swedish kronor",
      currencySymbol: "Skr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "SG",
      countryName: "Singapore",
      currencyType: "fiat",
      currencyCode: "SGD",
      currencyName: "Singapore Dollar",
      currencyPlural: "Singapore dollars",
      currencySymbol: "S$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "SI",
      countryName: "Slovenia",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "SJ",
      countryName: "Svalbard and Jan Mayen",
      currencyType: "fiat",
      currencyCode: "NOK",
      currencyName: "Norwegian Krone",
      currencyPlural: "Norwegian kroner",
      currencySymbol: "Nkr",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "SK",
      countryName: "Slovakia",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "SM",
      countryName: "San Marino",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "SN",
      countryName: "Senegal",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "SO",
      countryName: "Somalia",
      currencyType: "fiat",
      currencyCode: "SOS",
      currencyName: "Somali Shilling",
      currencyPlural: "Somali shillings",
      currencySymbol: "Ssh",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "SV",
      countryName: "El Salvador",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "SY",
      countryName: "Syria",
      currencyType: "fiat",
      currencyCode: "SYP",
      currencyName: "Syrian Pound",
      currencyPlural: "Syrian pounds",
      currencySymbol: "SY\xA3",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TC",
      countryName: "Turks and Caicos Islands",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "TD",
      countryName: "Chad",
      currencyType: "fiat",
      currencyCode: "XAF",
      currencyName: "CFA Franc BEAC",
      currencyPlural: "CFA francs BEAC",
      currencySymbol: "FCFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "TF",
      countryName: "French Southern Territories",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "TG",
      countryName: "Togo",
      currencyType: "fiat",
      currencyCode: "XOF",
      currencyName: "CFA Franc BCEAO",
      currencyPlural: "CFA francs BCEAO",
      currencySymbol: "CFA",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "TH",
      countryName: "Thailand",
      currencyType: "fiat",
      currencyCode: "THB",
      currencyName: "Thai Baht",
      currencyPlural: "Thai baht",
      currencySymbol: "\u0E3F",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TK",
      countryName: "Tokelau",
      currencyType: "fiat",
      currencyCode: "NZD",
      currencyName: "New Zealand Dollar",
      currencyPlural: "New Zealand dollars",
      currencySymbol: "NZ$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TL",
      countryName: "East Timor",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "TN",
      countryName: "Tunisia",
      currencyType: "fiat",
      currencyCode: "TND",
      currencyName: "Tunisian Dinar",
      currencyPlural: "Tunisian dinars",
      currencySymbol: "DT",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TO",
      countryName: "Tonga",
      currencyType: "fiat",
      currencyCode: "TOP",
      currencyName: "Tongan Pa\u02BBanga",
      currencyPlural: "Tongan pa\u02BBanga",
      currencySymbol: "T$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TR",
      countryName: "Turkey",
      currencyType: "fiat",
      currencyCode: "TRY",
      currencyName: "Turkish Lira",
      currencyPlural: "Turkish Lira",
      currencySymbol: "TL",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TT",
      countryName: "Trinidad and Tobago",
      currencyType: "fiat",
      currencyCode: "TTD",
      currencyName: "Trinidad and Tobago Dollar",
      currencyPlural: "Trinidad and Tobago dollars",
      currencySymbol: "TT$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TV",
      countryName: "Tuvalu",
      currencyType: "fiat",
      currencyCode: "AUD",
      currencyName: "Australian Dollar",
      currencyPlural: "Australian dollars",
      currencySymbol: "AU$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "TW",
      countryName: "Taiwan",
      currencyType: "fiat",
      currencyCode: "TWD",
      currencyName: "New Taiwan Dollar",
      currencyPlural: "New Taiwan dollars",
      currencySymbol: "NT$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "TZ",
      countryName: "Tanzania",
      currencyType: "fiat",
      currencyCode: "TZS",
      currencyName: "Tanzanian Shilling",
      currencyPlural: "Tanzanian shillings",
      currencySymbol: "TSh",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "UA",
      countryName: "Ukraine",
      currencyType: "fiat",
      currencyCode: "UAH",
      currencyName: "Ukrainian Hryvnia",
      currencyPlural: "Ukrainian hryvnias",
      currencySymbol: "\u20B4",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "UG",
      countryName: "Uganda",
      currencyType: "fiat",
      currencyCode: "UGX",
      currencyName: "Ugandan Shilling",
      currencyPlural: "Ugandan shillings",
      currencySymbol: "USh",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "UM",
      countryName: "U.S. Minor Outlying Islands",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "US",
      countryName: "United States",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "UY",
      countryName: "Uruguay",
      currencyType: "fiat",
      currencyCode: "UYU",
      currencyName: "Uruguayan Peso",
      currencyPlural: "Uruguayan pesos",
      currencySymbol: "$U",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "UZ",
      countryName: "Uzbekistan",
      currencyType: "fiat",
      currencyCode: "UZS",
      currencyName: "Uzbekistan Som",
      currencyPlural: "Uzbekistan som",
      currencySymbol: "UZS",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "VA",
      countryName: "Vatican City",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "VE",
      countryName: "Venezuela",
      currencyType: "fiat",
      currencyCode: "VEF",
      currencyName: "Venezuelan Bol\xEDvar",
      currencyPlural: "Venezuelan bol\xEDvars",
      currencySymbol: "Bs.F.",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "VG",
      countryName: "British Virgin Islands",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "VI",
      countryName: "U.S. Virgin Islands",
      currencyType: "fiat",
      currencyCode: "USD",
      currencyName: "US Dollar",
      currencyPlural: "US dollars",
      currencySymbol: "$",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "VN",
      countryName: "Vietnam",
      currencyType: "fiat",
      currencyCode: "VND",
      currencyName: "Vietnamese Dong",
      currencyPlural: "Vietnamese dong",
      currencySymbol: "\u20AB",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "XK",
      countryName: "Kosovo",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "YE",
      countryName: "Yemen",
      currencyType: "fiat",
      currencyCode: "YER",
      currencyName: "Yemeni Rial",
      currencyPlural: "Yemeni rials",
      currencySymbol: "YR",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "YT",
      countryName: "Mayotte",
      currencyType: "fiat",
      currencyCode: "EUR",
      currencyName: "Euro",
      currencyPlural: "euros",
      currencySymbol: "\u20AC",
      currencyOrigin: false,
      language: "en_US"
    },
    {
      countryCode: "ZA",
      countryName: "South Africa",
      currencyType: "fiat",
      currencyCode: "ZAR",
      currencyName: "South African Rand",
      currencyPlural: "South African rand",
      currencySymbol: "R",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "ZW",
      countryName: "Zimbabwe",
      currencyType: "fiat",
      currencyCode: "ZWL",
      currencyName: "Zimbabwean Dollar",
      currencyPlural: "Zimbabwean Dollar",
      currencySymbol: "ZWL$",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "BTC",
      countryName: "Bitcoin",
      currencyType: "crypto",
      currencyCode: "BTC",
      currencyName: "Bitcoin",
      currencyPlural: "bitcions",
      currencySymbol: "BTC",
      currencyOrigin: true,
      language: "en_US"
    },
    {
      countryCode: "ETH",
      countryName: "Ethereum",
      currencyType: "crypto",
      currencyCode: "ETH",
      currencyName: "Ether",
      currencyPlural: "ethers",
      currencySymbol: "ETH",
      currencyOrigin: true,
      language: "en_US"
    }
  ];

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\country.ink
  var Country_84527986f2bf5b7ba376 = class extends import_Component6.default {
    static id = "84527986f2bf5b7ba376";
    static tagname = "country";
    static classname = "Country_84527986f2bf5b7ba376";
    styles() {
      return ``;
    }
    template() {
      const { value } = this.props;
      let { flag, text } = this.propsTree;
      if (flag === void 0 && text !== false) {
        flag = {};
        text = true;
      }
      const styles = new import_StyleSet2.default();
      this.styles = () => styles.toString();
      const display = (0, import_display2.default)(this.props, styles, "inline-flex");
      if (display === "flex" || display === "inline-flex") {
        styles.add(":host", "align-items", "center");
      }
      (0, import_color.default)(this.props, styles, false, ":host", "color");
      (0, import_size2.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold2.default)(this.props, styles, ":host");
      if (flag) {
        styles.add("img", "display", "inline-block");
        (0, import_size2.default)(flag, styles, "16px", "img", "height");
      }
      if (text) {
        styles.add("img", "margin-right", "5px");
      }
      const code = value.toLowerCase();
      const country = intl_default.find(
        (country2) => country2.countryCode.toLowerCase() === code
      );
      return () => [
        import_Registry6.default.createText(`
`, false),
        ...!!country ? [
          import_Registry6.default.createText(`
  `, false),
          ...!!flag ? [
            import_Registry6.default.createText(`
    `, false),
            import_Registry6.default.createElement("img", { "loading": `lazy`, "src": `https://flagcdn.com/w80/${code}.png` }).element,
            import_Registry6.default.createText(`
  `, false)
          ] : [],
          import_Registry6.default.createText(`
  `, false),
          ...!!text ? [
            import_Registry6.default.createText(`
    `, false),
            import_Registry6.default.createElement("span", {}, [
              ...this._toNodeList(country.countryName)
            ]).element,
            import_Registry6.default.createText(`
  `, false)
          ] : [],
          import_Registry6.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\currency.ink
  var import_Registry7 = __toESM(require_Registry());
  var import_Component7 = __toESM(require_Component());
  var import_StyleSet3 = __toESM(require_StyleSet());
  var import_bold3 = __toESM(require_bold());
  var import_color2 = __toESM(require_color());
  var import_display3 = __toESM(require_display());
  var import_size3 = __toESM(require_size());
  var Currency_929b579470e10df21250 = class extends import_Component7.default {
    static id = "929b579470e10df21250";
    static tagname = "currency";
    static classname = "Currency_929b579470e10df21250";
    styles() {
      return ``;
    }
    template() {
      const { value } = this.props;
      let { flag, text } = this.propsTree;
      if (!flag && text !== false) {
        flag = {};
        text = true;
      }
      const styles = new import_StyleSet3.default();
      this.styles = () => styles.toString();
      const display = (0, import_display3.default)(this.props, styles, "inline-flex");
      if (display === "flex" || display === "inline-flex") {
        styles.add(":host", "align-items", "center");
      }
      (0, import_color2.default)(this.props, styles, false, ":host", "color");
      (0, import_size3.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold3.default)(this.props, styles, ":host");
      if (flag) {
        styles.add("img", "display", "inline-block");
        (0, import_size3.default)(flag, styles, "16px", "img", "height");
      }
      if (text) {
        styles.add("img", "margin-right", "5px");
      }
      const currency = value.toLowerCase();
      const country = intl_default.find(
        (country2) => currency !== "usd" && country2.currencyCode.toLowerCase() === currency || currency === "usd" && country2.countryCode === "US"
      );
      return () => [
        import_Registry7.default.createText(`
`, false),
        ...!!country ? [
          import_Registry7.default.createText(`
  `, false),
          ...!!flag ? [
            import_Registry7.default.createText(`
    `, false),
            import_Registry7.default.createElement("img", { "loading": `lazy`, "src": `https://flagcdn.com/w80/${country.countryCode.toLowerCase()}.png` }).element,
            import_Registry7.default.createText(`
  `, false)
          ] : [],
          import_Registry7.default.createText(`
  `, false),
          ...!!text ? [
            import_Registry7.default.createText(`
    `, false),
            import_Registry7.default.createElement("span", {}, [
              ...this._toNodeList(country.currencyName)
            ]).element,
            import_Registry7.default.createText(`
  `, false)
          ] : [],
          import_Registry7.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\date.ink
  var import_Registry8 = __toESM(require_Registry());
  var import_Component8 = __toESM(require_Component());
  var import_StyleSet4 = __toESM(require_StyleSet());
  var import_relativeTime = __toESM(require_relativeTime());
  var import_dayjs = __toESM(require_dayjs_min());
  var import_bold4 = __toESM(require_bold());
  var import_color3 = __toESM(require_color());
  var import_display4 = __toESM(require_display());
  var import_size4 = __toESM(require_size());
  var Date_35847380257edd037c2b = class extends import_Component8.default {
    static id = "35847380257edd037c2b";
    static tagname = "date";
    static classname = "Date_35847380257edd037c2b";
    styles() {
      return ``;
    }
    template() {
      import_dayjs.default.extend(import_relativeTime.default);
      import_dayjs.default.locale("short", {
        parentLocale: "en",
        relativeTime: {
          future: "-%s",
          past: "%s",
          s: "now",
          ss: "now",
          m: "1m",
          mm: "%dm",
          h: "1h",
          hh: "%dh",
          d: "1d",
          dd: "%dd",
          w: "1w",
          ww: "%dw",
          M: "1M",
          MM: "%dM",
          y: "1y",
          yy: "%dy"
        }
      });
      const {
        value,
        locale = "en",
        format = "MMMM D, YYYY, h:mm:ss a"
      } = this.props;
      const styles = new import_StyleSet4.default();
      this.styles = () => styles.toString();
      (0, import_display4.default)(this.props, styles, "inline-block");
      (0, import_color3.default)(this.props, styles, false, ":host", "color");
      (0, import_size4.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold4.default)(this.props, styles, ":host");
      const date = value ? new Date(value) : /* @__PURE__ */ new Date();
      const output = format === "ago" ? (0, import_dayjs.default)(date).locale(locale).fromNow() : format === "a" ? (0, import_dayjs.default)(date).locale("short").fromNow() : (0, import_dayjs.default)(date).locale(locale).format(format);
      return () => [
        import_Registry8.default.createText(`
`, false),
        ...this._toNodeList(output)
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\email.ink
  var import_Registry9 = __toESM(require_Registry());
  var import_Component9 = __toESM(require_Component());
  var import_StyleSet5 = __toESM(require_StyleSet());
  var import_bold5 = __toESM(require_bold());
  var import_color4 = __toESM(require_color());
  var import_display5 = __toESM(require_display());
  var import_size5 = __toESM(require_size());
  var import_underline = __toESM(require_underline());
  var Email_37b589dc69d038464db8 = class extends import_Component9.default {
    static id = "37b589dc69d038464db8";
    static tagname = "email";
    static classname = "Email_37b589dc69d038464db8";
    styles() {
      return ``;
    }
    template() {
      const {
        value,
        label,
        //dont need these...
        "class": _2,
        style,
        //the rest is for the link
        ...attributes
      } = this.props;
      const styles = new import_StyleSet5.default();
      this.styles = () => styles.toString();
      (0, import_display5.default)(this.props, styles, "inline-block", ":host");
      (0, import_size5.default)(this.props, styles, "13px", ":host", "font-size");
      (0, import_bold5.default)(this.props, styles, ":host");
      (0, import_color4.default)(this.props, styles, false, "a", "color");
      (0, import_underline.default)(this.props, styles, "a");
      return () => [
        import_Registry9.default.createText(`
`, false),
        import_Registry9.default.createElement("a", { ...attributes, "href": `mailto:${value}` }, [
          ...this._toNodeList(label || value)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\formula.ink
  var import_Registry10 = __toESM(require_Registry());
  var import_Component10 = __toESM(require_Component());
  var import_StyleSet6 = __toESM(require_StyleSet());
  var import_bold6 = __toESM(require_bold());
  var import_color5 = __toESM(require_color());
  var import_display6 = __toESM(require_display());
  var import_size6 = __toESM(require_size());
  var Formula_b51039e6586b098f7385 = class extends import_Component10.default {
    static id = "b51039e6586b098f7385";
    static tagname = "formula";
    static classname = "Formula_b51039e6586b098f7385";
    styles() {
      return ``;
    }
    template() {
      const { value, data: data2 = {}, formula } = this.props;
      const styles = new import_StyleSet6.default();
      this.styles = () => styles.toString();
      (0, import_display6.default)(this.props, styles, "inline-block");
      (0, import_color5.default)(this.props, styles, false, ":host", "color");
      (0, import_size6.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold6.default)(this.props, styles, ":host");
      let calculations = formula.replace(/\{this\}/, String(Number(value) || 0));
      for (const key in data2) {
        calculations = calculations.replace(
          new RegExp(`\\{${key}\\}`),
          String(Number(data2[key]) || 0)
        );
      }
      calculations = calculations.replace(/\{[^\}]*\}/, "0");
      let solution = () => 0;
      try {
        solution = new Function(`return (${calculations})`);
      } catch (e) {
      }
      return () => [
        import_Registry10.default.createText(`
    `, false),
        ...this._toNodeList(solution())
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\html.ink
  var import_Registry11 = __toESM(require_Registry());
  var import_Component11 = __toESM(require_Component());
  var import_dompurify = __toESM(require_purify());
  var Html_042baeb4dcb774e4e046 = class extends import_Component11.default {
    static id = "042baeb4dcb774e4e046";
    static tagname = "html";
    static classname = "Html_042baeb4dcb774e4e046";
    styles() {
      return ``;
    }
    template() {
      const { value } = this.props;
      const init = () => {
        this.innerHTML = import_dompurify.default.sanitize(value);
      };
      return () => [
        import_Registry11.default.createText(`
`, false),
        import_Registry11.default.createElement("span", { "mount": init }, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\image.ink
  var import_Registry12 = __toESM(require_Registry());
  var import_Component12 = __toESM(require_Component());
  var import_StyleSet7 = __toESM(require_StyleSet());
  var import_display7 = __toESM(require_display());
  var Image_2a9146bee7ef739afca8 = class extends import_Component12.default {
    static id = "2a9146bee7ef739afca8";
    static tagname = "image";
    static classname = "Image_2a9146bee7ef739afca8";
    styles() {
      return ``;
    }
    template() {
      const {
        value,
        //dont need these
        "class": _2,
        style,
        //the rest is for the image tag
        ...attributes
      } = this.props;
      const styles = new import_StyleSet7.default();
      this.styles = () => styles.toString();
      (0, import_display7.default)(this.props, styles, "inline-block");
      if (!attributes.loading) {
        attributes.loading = "lazy";
      }
      return () => [
        import_Registry12.default.createText(`
`, false),
        import_Registry12.default.createElement("img", { ...attributes, "src": value }).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\imagelist.ink
  var import_Registry13 = __toESM(require_Registry());
  var import_Component13 = __toESM(require_Component());
  var import_StyleSet8 = __toESM(require_StyleSet());
  var import_display8 = __toESM(require_display());
  var Imagelist_1493ed11f5d50a9d07d2 = class extends import_Component13.default {
    static id = "1493ed11f5d50a9d07d2";
    static tagname = "imagelist";
    static classname = "Imagelist_1493ed11f5d50a9d07d2";
    styles() {
      return ``;
    }
    template() {
      const {
        value,
        //dont need these
        "class": _2,
        style,
        //the rest is for the image tag
        ...attributes
      } = this.props;
      const styles = new import_StyleSet8.default();
      this.styles = () => styles.toString();
      (0, import_display8.default)(this.props, styles, "block");
      if (!attributes.loading) {
        attributes.loading = "lazy";
      }
      return () => [
        import_Registry13.default.createText(`
`, false),
        ...Object.entries(value).map(([_3, src]) => [
          import_Registry13.default.createText(`
  `, false),
          import_Registry13.default.createElement("img", { ...attributes, "src": src }).element,
          import_Registry13.default.createText(`
`, false)
        ]).flat()
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\json.ink
  var import_Registry14 = __toESM(require_Registry());
  var import_Component14 = __toESM(require_Component());
  var import_StyleSet9 = __toESM(require_StyleSet());
  var import_display9 = __toESM(require_display());
  var Json_a895d68bb58dc35699e6 = class extends import_Component14.default {
    static id = "a895d68bb58dc35699e6";
    static tagname = "json";
    static classname = "Json_a895d68bb58dc35699e6";
    styles() {
      return ``;
    }
    template() {
      const {
        value,
        //displays
        flex,
        none,
        inline: inline2,
        block: block2,
        "inline-block": iblock,
        "inline-flex": iflex
      } = this.props;
      const styles = new import_StyleSet9.default();
      this.styles = () => styles.toString();
      (0, import_display9.default)(this.props, styles, "block");
      return () => [
        import_Registry14.default.createText(`
`, false),
        import_Registry14.default.createElement("pre", {}, [
          ...this._toNodeList(JSON.stringify(value, null, 2))
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\link.ink
  var import_Registry15 = __toESM(require_Registry());
  var import_Component15 = __toESM(require_Component());
  var import_StyleSet10 = __toESM(require_StyleSet());
  var import_bold7 = __toESM(require_bold());
  var import_color6 = __toESM(require_color());
  var import_display10 = __toESM(require_display());
  var import_size7 = __toESM(require_size());
  var import_underline2 = __toESM(require_underline());
  var Link_b0446bee805fc17064d8 = class extends import_Component15.default {
    static id = "b0446bee805fc17064d8";
    static tagname = "link";
    static classname = "Link_b0446bee805fc17064d8";
    styles() {
      return ``;
    }
    template() {
      const {
        value,
        label,
        //dont need these...
        "class": _2,
        style,
        //the rest is for the link
        ...attributes
      } = this.props;
      const styles = new import_StyleSet10.default();
      this.styles = () => styles.toString();
      (0, import_display10.default)(this.props, styles, "inline-block", ":host");
      (0, import_size7.default)(this.props, styles, "13px", ":host", "font-size");
      (0, import_bold7.default)(this.props, styles, ":host");
      (0, import_color6.default)(this.props, styles, false, "a", "color");
      (0, import_underline2.default)(this.props, styles, "a");
      return () => [
        import_Registry15.default.createText(`
`, false),
        import_Registry15.default.createElement("a", { ...attributes, "href": value }, [
          ...this._toNodeList(label || value)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\list.ink
  var import_Registry16 = __toESM(require_Registry());
  var import_Component16 = __toESM(require_Component());
  var import_StyleSet11 = __toESM(require_StyleSet());
  var import_display11 = __toESM(require_display());
  var List_ace8208f6a617064f63f = class extends import_Component16.default {
    static id = "ace8208f6a617064f63f";
    static tagname = "list";
    static classname = "List_ace8208f6a617064f63f";
    styles() {
      return ``;
    }
    template() {
      const { value, ordered, indent, spacing } = this.props;
      const styles = new import_StyleSet11.default();
      this.styles = () => styles.toString();
      (0, import_display11.default)(this.props, styles, "block");
      if (indent) {
        styles.add("ol,ul", "padding-left", `${indent}px`);
      }
      if (spacing) {
        styles.add("li", "padding", `${spacing}px 0`);
      }
      return () => [
        import_Registry16.default.createText(`
`, false),
        ...!!ordered ? [
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("ol", {}, [
            import_Registry16.default.createText(`
    `, false),
            ...Object.entries(value).map(([_2, li]) => [
              import_Registry16.default.createText(`
      `, false),
              import_Registry16.default.createElement("li", {}, [
                ...this._toNodeList(li)
              ]).element,
              import_Registry16.default.createText(`
    `, false)
            ]).flat(),
            import_Registry16.default.createText(`
  `, false)
          ]).element,
          import_Registry16.default.createText(`
`, false)
        ] : true ? [
          ,
          import_Registry16.default.createText(`
  `, false),
          import_Registry16.default.createElement("ul", {}, [
            import_Registry16.default.createText(`
    `, false),
            ...Object.entries(value).map(([_2, li]) => [
              import_Registry16.default.createText(`
      `, false),
              import_Registry16.default.createElement("li", {}, [
                ...this._toNodeList(li)
              ]).element,
              import_Registry16.default.createText(`
    `, false)
            ]).flat(),
            import_Registry16.default.createText(`
  `, false)
          ]).element,
          import_Registry16.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\markdown.ink
  var import_Registry17 = __toESM(require_Registry());
  var import_Component17 = __toESM(require_Component());
  var import_StyleSet12 = __toESM(require_StyleSet());
  var import_display12 = __toESM(require_display());

  // ../../node_modules/marked/lib/marked.esm.js
  function _getDefaults() {
    return {
      async: false,
      breaks: false,
      extensions: null,
      gfm: true,
      hooks: null,
      pedantic: false,
      renderer: null,
      silent: false,
      tokenizer: null,
      walkTokens: null
    };
  }
  var _defaults = _getDefaults();
  function changeDefaults(newDefaults) {
    _defaults = newDefaults;
  }
  var escapeTest = /[&<>"']/;
  var escapeReplace = new RegExp(escapeTest.source, "g");
  var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
  var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
  var escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  var getEscapeReplacement = (ch) => escapeReplacements[ch];
  function escape$1(html2, encode) {
    if (encode) {
      if (escapeTest.test(html2)) {
        return html2.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html2)) {
        return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html2;
  }
  var caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    let source = typeof regex === "string" ? regex : regex.source;
    opt = opt || "";
    const obj = {
      replace: (name, val) => {
        let valSource = typeof val === "string" ? val : val.source;
        valSource = valSource.replace(caret, "$1");
        source = source.replace(name, valSource);
        return obj;
      },
      getRegex: () => {
        return new RegExp(source, opt);
      }
    };
    return obj;
  }
  function cleanUrl(href) {
    try {
      href = encodeURI(href).replace(/%25/g, "%");
    } catch {
      return null;
    }
    return href;
  }
  var noopTest = { exec: () => null };
  function splitCells(tableRow, count) {
    const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false;
      let curr = offset;
      while (--curr >= 0 && str[curr] === "\\")
        escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }), cells = row.split(/ \|/);
    let i = 0;
    if (!cells[0].trim()) {
      cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
      cells.pop();
    }
    if (count) {
      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count)
          cells.push("");
      }
    }
    for (; i < cells.length; i++) {
      cells[i] = cells[i].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim(str, c, invert) {
    const l = str.length;
    if (l === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l) {
      const currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    let level = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "\\") {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function outputLink(cap, link2, raw, lexer2) {
    const href = link2.href;
    const title = link2.title ? escape$1(link2.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, "$1");
    if (cap[0].charAt(0) !== "!") {
      lexer2.state.inLink = true;
      const token = {
        type: "link",
        raw,
        href,
        title,
        text,
        tokens: lexer2.inlineTokens(text)
      };
      lexer2.state.inLink = false;
      return token;
    }
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape$1(text)
    };
  }
  function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text.split("\n").map((node) => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join("\n");
  }
  var _Tokenizer = class {
    options;
    rules;
    // set by the lexer
    lexer;
    // set by the lexer
    constructor(options2) {
      this.options = options2 || _defaults;
    }
    space(src) {
      const cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
    }
    code(src) {
      const cap = this.rules.block.code.exec(src);
      if (cap) {
        const text = cap[0].replace(/^(?: {1,4}| {0,3}\t)/gm, "");
        return {
          type: "code",
          raw: cap[0],
          codeBlockStyle: "indented",
          text: !this.options.pedantic ? rtrim(text, "\n") : text
        };
      }
    }
    fences(src) {
      const cap = this.rules.block.fences.exec(src);
      if (cap) {
        const raw = cap[0];
        const text = indentCodeCompensation(raw, cap[3] || "");
        return {
          type: "code",
          raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
          text
        };
      }
    }
    heading(src) {
      const cap = this.rules.block.heading.exec(src);
      if (cap) {
        let text = cap[2].trim();
        if (/#$/.test(text)) {
          const trimmed = rtrim(text, "#");
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            text = trimmed.trim();
          }
        }
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[1].length,
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    hr(src) {
      const cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: "hr",
          raw: rtrim(cap[0], "\n")
        };
      }
    }
    blockquote(src) {
      const cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        let lines = rtrim(cap[0], "\n").split("\n");
        let raw = "";
        let text = "";
        const tokens = [];
        while (lines.length > 0) {
          let inBlockquote = false;
          const currentLines = [];
          let i;
          for (i = 0; i < lines.length; i++) {
            if (/^ {0,3}>/.test(lines[i])) {
              currentLines.push(lines[i]);
              inBlockquote = true;
            } else if (!inBlockquote) {
              currentLines.push(lines[i]);
            } else {
              break;
            }
          }
          lines = lines.slice(i);
          const currentRaw = currentLines.join("\n");
          const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
          raw = raw ? `${raw}
${currentRaw}` : currentRaw;
          text = text ? `${text}
${currentText}` : currentText;
          const top = this.lexer.state.top;
          this.lexer.state.top = true;
          this.lexer.blockTokens(currentText, tokens, true);
          this.lexer.state.top = top;
          if (lines.length === 0) {
            break;
          }
          const lastToken = tokens[tokens.length - 1];
          if (lastToken?.type === "code") {
            break;
          } else if (lastToken?.type === "blockquote") {
            const oldToken = lastToken;
            const newText = oldToken.raw + "\n" + lines.join("\n");
            const newToken = this.blockquote(newText);
            tokens[tokens.length - 1] = newToken;
            raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
            text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
            break;
          } else if (lastToken?.type === "list") {
            const oldToken = lastToken;
            const newText = oldToken.raw + "\n" + lines.join("\n");
            const newToken = this.list(newText);
            tokens[tokens.length - 1] = newToken;
            raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
            text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
            lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
            continue;
          }
        }
        return {
          type: "blockquote",
          raw,
          tokens,
          text
        };
      }
    }
    list(src) {
      let cap = this.rules.block.list.exec(src);
      if (cap) {
        let bull = cap[1].trim();
        const isordered = bull.length > 1;
        const list2 = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
        if (this.options.pedantic) {
          bull = isordered ? bull : "[*+-]";
        }
        const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
        let endsWithBlankLine = false;
        while (src) {
          let endEarly = false;
          let raw = "";
          let itemContents = "";
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
          let nextLine = src.split("\n", 1)[0];
          let blankLine = !line.trim();
          let indent = 0;
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimStart();
          } else if (blankLine) {
            indent = cap[1].length + 1;
          } else {
            indent = cap[2].search(/[^ ]/);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          if (blankLine && /^[ \t]*$/.test(nextLine)) {
            raw += nextLine + "\n";
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
            const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
            const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
            const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
            const htmlBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}<[a-z].*>`, "i");
            while (src) {
              const rawLine = src.split("\n", 1)[0];
              let nextLineWithoutTabs;
              nextLine = rawLine;
              if (this.options.pedantic) {
                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                nextLineWithoutTabs = nextLine;
              } else {
                nextLineWithoutTabs = nextLine.replace(/\t/g, "    ");
              }
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              if (htmlBeginRegex.test(nextLine)) {
                break;
              }
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              if (hrRegex.test(nextLine)) {
                break;
              }
              if (nextLineWithoutTabs.search(/[^ ]/) >= indent || !nextLine.trim()) {
                itemContents += "\n" + nextLineWithoutTabs.slice(indent);
              } else {
                if (blankLine) {
                  break;
                }
                if (line.replace(/\t/g, "    ").search(/[^ ]/) >= 4) {
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += "\n" + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              src = src.substring(rawLine.length + 1);
              line = nextLineWithoutTabs.slice(indent);
            }
          }
          if (!list2.loose) {
            if (endsWithBlankLine) {
              list2.loose = true;
            } else if (/\n[ \t]*\n[ \t]*$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          let istask = null;
          let ischecked;
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
            }
          }
          list2.items.push({
            type: "list_item",
            raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents,
            tokens: []
          });
          list2.raw += raw;
        }
        list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
        list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
        list2.raw = list2.raw.trimEnd();
        for (let i = 0; i < list2.items.length; i++) {
          this.lexer.state.top = false;
          list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
          if (!list2.loose) {
            const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
            const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
            list2.loose = hasMultipleLineBreaks;
          }
        }
        if (list2.loose) {
          for (let i = 0; i < list2.items.length; i++) {
            list2.items[i].loose = true;
          }
        }
        return list2;
      }
    }
    html(src) {
      const cap = this.rules.block.html.exec(src);
      if (cap) {
        const token = {
          type: "html",
          block: true,
          raw: cap[0],
          pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
          text: cap[0]
        };
        return token;
      }
    }
    def(src) {
      const cap = this.rules.block.def.exec(src);
      if (cap) {
        const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
        const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
        const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
        return {
          type: "def",
          tag: tag2,
          raw: cap[0],
          href,
          title
        };
      }
    }
    table(src) {
      const cap = this.rules.block.table.exec(src);
      if (!cap) {
        return;
      }
      if (!/[:|]/.test(cap[2])) {
        return;
      }
      const headers = splitCells(cap[1]);
      const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
      const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
      const item = {
        type: "table",
        raw: cap[0],
        header: [],
        align: [],
        rows: []
      };
      if (headers.length !== aligns.length) {
        return;
      }
      for (const align of aligns) {
        if (/^ *-+: *$/.test(align)) {
          item.align.push("right");
        } else if (/^ *:-+: *$/.test(align)) {
          item.align.push("center");
        } else if (/^ *:-+ *$/.test(align)) {
          item.align.push("left");
        } else {
          item.align.push(null);
        }
      }
      for (let i = 0; i < headers.length; i++) {
        item.header.push({
          text: headers[i],
          tokens: this.lexer.inline(headers[i]),
          header: true,
          align: item.align[i]
        });
      }
      for (const row of rows) {
        item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
          return {
            text: cell,
            tokens: this.lexer.inline(cell),
            header: false,
            align: item.align[i]
          };
        }));
      }
      return item;
    }
    lheading(src) {
      const cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[2].charAt(0) === "=" ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
    paragraph(src) {
      const cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
        return {
          type: "paragraph",
          raw: cap[0],
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    text(src) {
      const cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
    escape(src) {
      const cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: "escape",
          raw: cap[0],
          text: escape$1(cap[1])
        };
      }
    }
    tag(src) {
      const cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: "html",
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: cap[0]
        };
      }
    }
    link(src) {
      const cap = this.rules.inline.link.exec(src);
      if (cap) {
        const trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          const lastParenIndex = findClosingBracket(cap[2], "()");
          if (lastParenIndex > -1) {
            const start = cap[0].indexOf("!") === 0 ? 5 : 4;
            const linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = "";
          }
        }
        let href = cap[2];
        let title = "";
        if (this.options.pedantic) {
          const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link2) {
            href = link2[1];
            title = link2[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
          title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
        }, cap[0], this.lexer);
      }
    }
    reflink(src, links) {
      let cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
        const link2 = links[linkString.toLowerCase()];
        if (!link2) {
          const text = cap[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text
          };
        }
        return outputLink(cap, link2, cap[0], this.lexer);
      }
    }
    emStrong(src, maskedSrc, prevChar = "") {
      let match = this.rules.inline.emStrongLDelim.exec(src);
      if (!match)
        return;
      if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
        return;
      const nextChar = match[1] || match[2] || "";
      if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
        const lLength = [...match[0]].length - 1;
        let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
        const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        endReg.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim)
            continue;
          rLength = [...rDelim].length;
          if (match[3] || match[4]) {
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue;
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0)
            continue;
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          const lastCharLength = [...match[0]][0].length;
          const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
          if (Math.min(lLength, rLength) % 2) {
            const text2 = raw.slice(1, -1);
            return {
              type: "em",
              raw,
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
          const text = raw.slice(2, -2);
          return {
            type: "strong",
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
    codespan(src) {
      const cap = this.rules.inline.code.exec(src);
      if (cap) {
        let text = cap[2].replace(/\n/g, " ");
        const hasNonSpaceChars = /[^ ]/.test(text);
        const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape$1(text, true);
        return {
          type: "codespan",
          raw: cap[0],
          text
        };
      }
    }
    br(src) {
      const cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: "br",
          raw: cap[0]
        };
      }
    }
    del(src) {
      const cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: "del",
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
    autolink(src) {
      const cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(cap[1]);
          href = "mailto:" + text;
        } else {
          text = escape$1(cap[1]);
          href = text;
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    url(src) {
      let cap;
      if (cap = this.rules.inline.url.exec(src)) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(cap[0]);
          href = "mailto:" + text;
        } else {
          let prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
          } while (prevCapZero !== cap[0]);
          text = escape$1(cap[0]);
          if (cap[1] === "www.") {
            href = "http://" + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    inlineText(src) {
      const cap = this.rules.inline.text.exec(src);
      if (cap) {
        let text;
        if (this.lexer.state.inRawBlock) {
          text = cap[0];
        } else {
          text = escape$1(cap[0]);
        }
        return {
          type: "text",
          raw: cap[0],
          text
        };
      }
    }
  };
  var newline = /^(?:[ \t]*(?:\n|$))+/;
  var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
  var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
  var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
  var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
  var bullet = /(?:[*+-]|\d{1,9}[.)])/;
  var lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
  var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
  var blockText = /^[^\n]+/;
  var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
  var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
  var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
  var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
  var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
  var blockNormal = {
    blockquote,
    code: blockCode,
    def,
    fences,
    heading,
    hr,
    html,
    lheading,
    list,
    newline,
    paragraph,
    table: noopTest,
    text: blockText
  };
  var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
  var blockGfm = {
    ...blockNormal,
    table: gfmTable,
    paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
  };
  var blockPedantic = {
    ...blockNormal,
    html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    // fences not supported
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  };
  var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
  var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
  var br = /^( {2,}|\\)\n(?!\s*$)/;
  var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
  var _punctuation = "\\p{P}\\p{S}";
  var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
  var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
  var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
  var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
  var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
  var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
  var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
  var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
  var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
  var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
  var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
  var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
  var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
  var inlineNormal = {
    _backpedal: noopTest,
    // only used for GFM url
    anyPunctuation,
    autolink,
    blockSkip,
    br,
    code: inlineCode,
    del: noopTest,
    emStrongLDelim,
    emStrongRDelimAst,
    emStrongRDelimUnd,
    escape,
    link,
    nolink,
    punctuation,
    reflink,
    reflinkSearch,
    tag,
    text: inlineText,
    url: noopTest
  };
  var inlinePedantic = {
    ...inlineNormal,
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
  };
  var inlineGfm = {
    ...inlineNormal,
    escape: edit(escape).replace("])", "~|])").getRegex(),
    url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  };
  var inlineBreaks = {
    ...inlineGfm,
    br: edit(br).replace("{2,}", "*").getRegex(),
    text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  };
  var block = {
    normal: blockNormal,
    gfm: blockGfm,
    pedantic: blockPedantic
  };
  var inline = {
    normal: inlineNormal,
    gfm: inlineGfm,
    breaks: inlineBreaks,
    pedantic: inlinePedantic
  };
  var _Lexer = class __Lexer {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(options2) {
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.options = options2 || _defaults;
      this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const rules = {
        block: block.normal,
        inline: inline.normal
      };
      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;
        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */
    static get rules() {
      return {
        block,
        inline
      };
    }
    /**
     * Static Lex Method
     */
    static lex(src, options2) {
      const lexer2 = new __Lexer(options2);
      return lexer2.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    static lexInline(src, options2) {
      const lexer2 = new __Lexer(options2);
      return lexer2.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    lex(src) {
      src = src.replace(/\r\n|\r/g, "\n");
      this.blockTokens(src, this.tokens);
      for (let i = 0; i < this.inlineQueue.length; i++) {
        const next = this.inlineQueue[i];
        this.inlineTokens(next.src, next.tokens);
      }
      this.inlineQueue = [];
      return this.tokens;
    }
    blockTokens(src, tokens = [], lastParagraphClipped = false) {
      if (this.options.pedantic) {
        src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
      }
      let token;
      let lastToken;
      let cutSrc;
      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);
          if (token.raw.length === 1 && tokens.length > 0) {
            tokens[tokens.length - 1].raw += "\n";
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }
          continue;
        }
        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startBlock.forEach((getStartIndex) => {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];
          if (lastParagraphClipped && lastToken?.type === "paragraph") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    }
    inline(src, tokens = []) {
      this.inlineQueue.push({ src, tokens });
      return tokens;
    }
    /**
     * Lexing/Compiling
     */
    inlineTokens(src, tokens = []) {
      let token, lastToken, cutSrc;
      let maskedSrc = src;
      let match;
      let keepPrevChar, prevChar;
      if (this.tokens.links) {
        const links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      }
      while (src) {
        if (!keepPrevChar) {
          prevChar = "";
        }
        keepPrevChar = false;
        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startInline) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startInline.forEach((getStartIndex) => {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (token = this.tokenizer.inlineText(cutSrc)) {
          src = src.substring(token.raw.length);
          if (token.raw.slice(-1) !== "_") {
            prevChar = token.raw.slice(-1);
          }
          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    }
  };
  var _Renderer = class {
    options;
    parser;
    // set by the parser
    constructor(options2) {
      this.options = options2 || _defaults;
    }
    space(token) {
      return "";
    }
    code({ text, lang, escaped }) {
      const langString = (lang || "").match(/^\S*/)?.[0];
      const code = text.replace(/\n$/, "") + "\n";
      if (!langString) {
        return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    blockquote({ tokens }) {
      const body = this.parser.parse(tokens);
      return `<blockquote>
${body}</blockquote>
`;
    }
    html({ text }) {
      return text;
    }
    heading({ tokens, depth }) {
      return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
    }
    hr(token) {
      return "<hr>\n";
    }
    list(token) {
      const ordered = token.ordered;
      const start = token.start;
      let body = "";
      for (let j = 0; j < token.items.length; j++) {
        const item = token.items[j];
        body += this.listitem(item);
      }
      const type = ordered ? "ol" : "ul";
      const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
      return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
    }
    listitem(item) {
      let itemBody = "";
      if (item.task) {
        const checkbox = this.checkbox({ checked: !!item.checked });
        if (item.loose) {
          if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
            item.tokens[0].text = checkbox + " " + item.tokens[0].text;
            if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
              item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
            }
          } else {
            item.tokens.unshift({
              type: "text",
              raw: checkbox + " ",
              text: checkbox + " "
            });
          }
        } else {
          itemBody += checkbox + " ";
        }
      }
      itemBody += this.parser.parse(item.tokens, !!item.loose);
      return `<li>${itemBody}</li>
`;
    }
    checkbox({ checked }) {
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph({ tokens }) {
      return `<p>${this.parser.parseInline(tokens)}</p>
`;
    }
    table(token) {
      let header = "";
      let cell = "";
      for (let j = 0; j < token.header.length; j++) {
        cell += this.tablecell(token.header[j]);
      }
      header += this.tablerow({ text: cell });
      let body = "";
      for (let j = 0; j < token.rows.length; j++) {
        const row = token.rows[j];
        cell = "";
        for (let k = 0; k < row.length; k++) {
          cell += this.tablecell(row[k]);
        }
        body += this.tablerow({ text: cell });
      }
      if (body)
        body = `<tbody>${body}</tbody>`;
      return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
    }
    tablerow({ text }) {
      return `<tr>
${text}</tr>
`;
    }
    tablecell(token) {
      const content = this.parser.parseInline(token.tokens);
      const type = token.header ? "th" : "td";
      const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
      return tag2 + content + `</${type}>
`;
    }
    /**
     * span level renderer
     */
    strong({ tokens }) {
      return `<strong>${this.parser.parseInline(tokens)}</strong>`;
    }
    em({ tokens }) {
      return `<em>${this.parser.parseInline(tokens)}</em>`;
    }
    codespan({ text }) {
      return `<code>${text}</code>`;
    }
    br(token) {
      return "<br>";
    }
    del({ tokens }) {
      return `<del>${this.parser.parseInline(tokens)}</del>`;
    }
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      let out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += ">" + text + "</a>";
      return out;
    }
    image({ href, title, text }) {
      const cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      let out = `<img src="${href}" alt="${text}"`;
      if (title) {
        out += ` title="${title}"`;
      }
      out += ">";
      return out;
    }
    text(token) {
      return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
    }
  };
  var _TextRenderer = class {
    // no need for block level renderers
    strong({ text }) {
      return text;
    }
    em({ text }) {
      return text;
    }
    codespan({ text }) {
      return text;
    }
    del({ text }) {
      return text;
    }
    html({ text }) {
      return text;
    }
    text({ text }) {
      return text;
    }
    link({ text }) {
      return "" + text;
    }
    image({ text }) {
      return "" + text;
    }
    br() {
      return "";
    }
  };
  var _Parser = class __Parser {
    options;
    renderer;
    textRenderer;
    constructor(options2) {
      this.options = options2 || _defaults;
      this.options.renderer = this.options.renderer || new _Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.renderer.parser = this;
      this.textRenderer = new _TextRenderer();
    }
    /**
     * Static Parse Method
     */
    static parse(tokens, options2) {
      const parser2 = new __Parser(options2);
      return parser2.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    static parseInline(tokens, options2) {
      const parser2 = new __Parser(options2);
      return parser2.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    parse(tokens, top = true) {
      let out = "";
      for (let i = 0; i < tokens.length; i++) {
        const anyToken = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
          const genericToken = anyToken;
          const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
          if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
            out += ret || "";
            continue;
          }
        }
        const token = anyToken;
        switch (token.type) {
          case "space": {
            out += this.renderer.space(token);
            continue;
          }
          case "hr": {
            out += this.renderer.hr(token);
            continue;
          }
          case "heading": {
            out += this.renderer.heading(token);
            continue;
          }
          case "code": {
            out += this.renderer.code(token);
            continue;
          }
          case "table": {
            out += this.renderer.table(token);
            continue;
          }
          case "blockquote": {
            out += this.renderer.blockquote(token);
            continue;
          }
          case "list": {
            out += this.renderer.list(token);
            continue;
          }
          case "html": {
            out += this.renderer.html(token);
            continue;
          }
          case "paragraph": {
            out += this.renderer.paragraph(token);
            continue;
          }
          case "text": {
            let textToken = token;
            let body = this.renderer.text(textToken);
            while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
              textToken = tokens[++i];
              body += "\n" + this.renderer.text(textToken);
            }
            if (top) {
              out += this.renderer.paragraph({
                type: "paragraph",
                raw: body,
                text: body,
                tokens: [{ type: "text", raw: body, text: body }]
              });
            } else {
              out += body;
            }
            continue;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
    /**
     * Parse Inline Tokens
     */
    parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      let out = "";
      for (let i = 0; i < tokens.length; i++) {
        const anyToken = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
          const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
          if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
            out += ret || "";
            continue;
          }
        }
        const token = anyToken;
        switch (token.type) {
          case "escape": {
            out += renderer.text(token);
            break;
          }
          case "html": {
            out += renderer.html(token);
            break;
          }
          case "link": {
            out += renderer.link(token);
            break;
          }
          case "image": {
            out += renderer.image(token);
            break;
          }
          case "strong": {
            out += renderer.strong(token);
            break;
          }
          case "em": {
            out += renderer.em(token);
            break;
          }
          case "codespan": {
            out += renderer.codespan(token);
            break;
          }
          case "br": {
            out += renderer.br(token);
            break;
          }
          case "del": {
            out += renderer.del(token);
            break;
          }
          case "text": {
            out += renderer.text(token);
            break;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
  };
  var _Hooks = class {
    options;
    block;
    constructor(options2) {
      this.options = options2 || _defaults;
    }
    static passThroughHooks = /* @__PURE__ */ new Set([
      "preprocess",
      "postprocess",
      "processAllTokens"
    ]);
    /**
     * Process markdown before marked
     */
    preprocess(markdown) {
      return markdown;
    }
    /**
     * Process HTML after marked is finished
     */
    postprocess(html2) {
      return html2;
    }
    /**
     * Process all tokens before walk tokens
     */
    processAllTokens(tokens) {
      return tokens;
    }
    /**
     * Provide function to tokenize markdown
     */
    provideLexer() {
      return this.block ? _Lexer.lex : _Lexer.lexInline;
    }
    /**
     * Provide function to parse tokens
     */
    provideParser() {
      return this.block ? _Parser.parse : _Parser.parseInline;
    }
  };
  var Marked = class {
    defaults = _getDefaults();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = _Parser;
    Renderer = _Renderer;
    TextRenderer = _TextRenderer;
    Lexer = _Lexer;
    Tokenizer = _Tokenizer;
    Hooks = _Hooks;
    constructor(...args) {
      this.use(...args);
    }
    /**
     * Run callback for every token
     */
    walkTokens(tokens, callback) {
      let values = [];
      for (const token of tokens) {
        values = values.concat(callback.call(this, token));
        switch (token.type) {
          case "table": {
            const tableToken = token;
            for (const cell of tableToken.header) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
            for (const row of tableToken.rows) {
              for (const cell of row) {
                values = values.concat(this.walkTokens(cell.tokens, callback));
              }
            }
            break;
          }
          case "list": {
            const listToken = token;
            values = values.concat(this.walkTokens(listToken.items, callback));
            break;
          }
          default: {
            const genericToken = token;
            if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
              this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
                const tokens2 = genericToken[childTokens].flat(Infinity);
                values = values.concat(this.walkTokens(tokens2, callback));
              });
            } else if (genericToken.tokens) {
              values = values.concat(this.walkTokens(genericToken.tokens, callback));
            }
          }
        }
      }
      return values;
    }
    use(...args) {
      const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
      args.forEach((pack) => {
        const opts = { ...pack };
        opts.async = this.defaults.async || opts.async || false;
        if (pack.extensions) {
          pack.extensions.forEach((ext) => {
            if (!ext.name) {
              throw new Error("extension name required");
            }
            if ("renderer" in ext) {
              const prevRenderer = extensions.renderers[ext.name];
              if (prevRenderer) {
                extensions.renderers[ext.name] = function(...args2) {
                  let ret = ext.renderer.apply(this, args2);
                  if (ret === false) {
                    ret = prevRenderer.apply(this, args2);
                  }
                  return ret;
                };
              } else {
                extensions.renderers[ext.name] = ext.renderer;
              }
            }
            if ("tokenizer" in ext) {
              if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
                throw new Error("extension level must be 'block' or 'inline'");
              }
              const extLevel = extensions[ext.level];
              if (extLevel) {
                extLevel.unshift(ext.tokenizer);
              } else {
                extensions[ext.level] = [ext.tokenizer];
              }
              if (ext.start) {
                if (ext.level === "block") {
                  if (extensions.startBlock) {
                    extensions.startBlock.push(ext.start);
                  } else {
                    extensions.startBlock = [ext.start];
                  }
                } else if (ext.level === "inline") {
                  if (extensions.startInline) {
                    extensions.startInline.push(ext.start);
                  } else {
                    extensions.startInline = [ext.start];
                  }
                }
              }
            }
            if ("childTokens" in ext && ext.childTokens) {
              extensions.childTokens[ext.name] = ext.childTokens;
            }
          });
          opts.extensions = extensions;
        }
        if (pack.renderer) {
          const renderer = this.defaults.renderer || new _Renderer(this.defaults);
          for (const prop in pack.renderer) {
            if (!(prop in renderer)) {
              throw new Error(`renderer '${prop}' does not exist`);
            }
            if (["options", "parser"].includes(prop)) {
              continue;
            }
            const rendererProp = prop;
            const rendererFunc = pack.renderer[rendererProp];
            const prevRenderer = renderer[rendererProp];
            renderer[rendererProp] = (...args2) => {
              let ret = rendererFunc.apply(renderer, args2);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args2);
              }
              return ret || "";
            };
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
          for (const prop in pack.tokenizer) {
            if (!(prop in tokenizer)) {
              throw new Error(`tokenizer '${prop}' does not exist`);
            }
            if (["options", "rules", "lexer"].includes(prop)) {
              continue;
            }
            const tokenizerProp = prop;
            const tokenizerFunc = pack.tokenizer[tokenizerProp];
            const prevTokenizer = tokenizer[tokenizerProp];
            tokenizer[tokenizerProp] = (...args2) => {
              let ret = tokenizerFunc.apply(tokenizer, args2);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args2);
              }
              return ret;
            };
          }
          opts.tokenizer = tokenizer;
        }
        if (pack.hooks) {
          const hooks = this.defaults.hooks || new _Hooks();
          for (const prop in pack.hooks) {
            if (!(prop in hooks)) {
              throw new Error(`hook '${prop}' does not exist`);
            }
            if (["options", "block"].includes(prop)) {
              continue;
            }
            const hooksProp = prop;
            const hooksFunc = pack.hooks[hooksProp];
            const prevHook = hooks[hooksProp];
            if (_Hooks.passThroughHooks.has(prop)) {
              hooks[hooksProp] = (arg) => {
                if (this.defaults.async) {
                  return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                    return prevHook.call(hooks, ret2);
                  });
                }
                const ret = hooksFunc.call(hooks, arg);
                return prevHook.call(hooks, ret);
              };
            } else {
              hooks[hooksProp] = (...args2) => {
                let ret = hooksFunc.apply(hooks, args2);
                if (ret === false) {
                  ret = prevHook.apply(hooks, args2);
                }
                return ret;
              };
            }
          }
          opts.hooks = hooks;
        }
        if (pack.walkTokens) {
          const walkTokens2 = this.defaults.walkTokens;
          const packWalktokens = pack.walkTokens;
          opts.walkTokens = function(token) {
            let values = [];
            values.push(packWalktokens.call(this, token));
            if (walkTokens2) {
              values = values.concat(walkTokens2.call(this, token));
            }
            return values;
          };
        }
        this.defaults = { ...this.defaults, ...opts };
      });
      return this;
    }
    setOptions(opt) {
      this.defaults = { ...this.defaults, ...opt };
      return this;
    }
    lexer(src, options2) {
      return _Lexer.lex(src, options2 ?? this.defaults);
    }
    parser(tokens, options2) {
      return _Parser.parse(tokens, options2 ?? this.defaults);
    }
    parseMarkdown(blockType) {
      const parse = (src, options2) => {
        const origOpt = { ...options2 };
        const opt = { ...this.defaults, ...origOpt };
        const throwError = this.onError(!!opt.silent, !!opt.async);
        if (this.defaults.async === true && origOpt.async === false) {
          return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        }
        if (typeof src === "undefined" || src === null) {
          return throwError(new Error("marked(): input parameter is undefined or null"));
        }
        if (typeof src !== "string") {
          return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
        }
        if (opt.hooks) {
          opt.hooks.options = opt;
          opt.hooks.block = blockType;
        }
        const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
        const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
        if (opt.async) {
          return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
        }
        try {
          if (opt.hooks) {
            src = opt.hooks.preprocess(src);
          }
          let tokens = lexer2(src, opt);
          if (opt.hooks) {
            tokens = opt.hooks.processAllTokens(tokens);
          }
          if (opt.walkTokens) {
            this.walkTokens(tokens, opt.walkTokens);
          }
          let html2 = parser2(tokens, opt);
          if (opt.hooks) {
            html2 = opt.hooks.postprocess(html2);
          }
          return html2;
        } catch (e) {
          return throwError(e);
        }
      };
      return parse;
    }
    onError(silent, async) {
      return (e) => {
        e.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if (silent) {
          const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
          if (async) {
            return Promise.resolve(msg);
          }
          return msg;
        }
        if (async) {
          return Promise.reject(e);
        }
        throw e;
      };
    }
  };
  var markedInstance = new Marked();
  function marked(src, opt) {
    return markedInstance.parse(src, opt);
  }
  marked.options = marked.setOptions = function(options2) {
    markedInstance.setOptions(options2);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = _getDefaults;
  marked.defaults = _defaults;
  marked.use = function(...args) {
    markedInstance.use(...args);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.walkTokens = function(tokens, callback) {
    return markedInstance.walkTokens(tokens, callback);
  };
  marked.parseInline = markedInstance.parseInline;
  marked.Parser = _Parser;
  marked.parser = _Parser.parse;
  marked.Renderer = _Renderer;
  marked.TextRenderer = _TextRenderer;
  marked.Lexer = _Lexer;
  marked.lexer = _Lexer.lex;
  marked.Tokenizer = _Tokenizer;
  marked.Hooks = _Hooks;
  marked.parse = marked;
  var options = marked.options;
  var setOptions = marked.setOptions;
  var use = marked.use;
  var walkTokens = marked.walkTokens;
  var parseInline = marked.parseInline;
  var parser = _Parser.parse;
  var lexer = _Lexer.lex;

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\markdown.ink
  var import_dompurify2 = __toESM(require_purify());
  var Markdown_a2de941906c20b78a444 = class extends import_Component17.default {
    static id = "a2de941906c20b78a444";
    static tagname = "markdown";
    static classname = "Markdown_a2de941906c20b78a444";
    styles() {
      return ``;
    }
    template() {
      const { value } = this.props;
      const styles = new import_StyleSet12.default();
      this.styles = () => styles.toString();
      (0, import_display12.default)(this.props, styles, "block");
      const init = () => {
        this.innerHTML = import_dompurify2.default.sanitize(marked.parse(value));
      };
      return () => [
        import_Registry17.default.createText(`
`, false),
        import_Registry17.default.createElement("slot", { "mount": init }, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\metadata.ink
  var import_Registry18 = __toESM(require_Registry());
  var import_Component18 = __toESM(require_Component());
  var import_StyleSet13 = __toESM(require_StyleSet());
  var import_color7 = __toESM(require_color());
  var Metadata_87d54dded027bddff214 = class extends import_Component18.default {
    static id = "87d54dded027bddff214";
    static tagname = "metadata";
    static classname = "Metadata_87d54dded027bddff214";
    styles() {
      return ``;
    }
    template() {
      const {
        value = [],
        //styles
        padding,
        align,
        format,
        //sub-props: colors for bg, head, stripe, border-top
        background,
        border,
        stripe
      } = this.propsTree;
      const styles = new import_StyleSet13.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "block");
      styles.add("table", "width", "100%");
      styles.add("table", "border", "0");
      styles.add("table", "border-spacing", "0");
      if (padding) {
        styles.add("td", "padding", `${padding}px`);
      }
      if (align) {
        styles.add("td", "text-align", align);
      }
      (0, import_color7.default)(this.props, styles, false, ":host", "color");
      if (background) {
        (0, import_color7.default)(background, styles, false, "td", "background-color");
      }
      if (stripe) {
        (0, import_color7.default)(
          stripe,
          styles,
          false,
          "tr:nth-child(odd) td",
          "background-color"
        );
      }
      if (border) {
        styles.add("td", "border-bottom-width", "0");
        styles.add("td", "border-left-width", "0");
        styles.add("td", "border-right-width", "0");
        styles.add("td", "border-top-width", "1px");
        styles.add("td", "border-top-style", "solid");
        (0, import_color7.default)(border, styles, false, "td", "border-top-color");
      }
      const data2 = format ? Object.fromEntries(
        Object.entries(value).map(
          ([key, value2]) => [
            key.replace(/[\-\_]/g, " ").split(" ").map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1)
            ).join(" "),
            value2
          ]
        )
      ) : value;
      return () => [
        import_Registry18.default.createText(`
`, false),
        import_Registry18.default.createElement("table", {}, [
          import_Registry18.default.createText(`
  `, false),
          ...Object.entries(data2).map(([key, value2]) => [
            import_Registry18.default.createText(`
    `, false),
            import_Registry18.default.createElement("tr", {}, [
              import_Registry18.default.createText(`
      `, false),
              import_Registry18.default.createElement("td", {}, [
                ...this._toNodeList(key)
              ]).element,
              import_Registry18.default.createText(`
      `, false),
              import_Registry18.default.createElement("td", {}, [
                ...this._toNodeList(value2)
              ]).element,
              import_Registry18.default.createText(`
    `, false)
            ]).element,
            import_Registry18.default.createText(`
  `, false)
          ]).flat(),
          import_Registry18.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table.ink
  var import_Component24 = __toESM(require_Component());

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\table.ink
  var import_Registry19 = __toESM(require_Registry());
  var import_Component19 = __toESM(require_Component());
  var import_StyleSet14 = __toESM(require_StyleSet());
  var Table_cb9231b6c52140a254d4 = class extends import_Component19.default {
    static id = "cb9231b6c52140a254d4";
    static tagname = "table";
    static classname = "Table_cb9231b6c52140a254d4";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet14.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table");
      styles.add(":host", "width", "100%");
      return () => [
        import_Registry19.default.createText(`
`, false),
        import_Registry19.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table.ink
  var import_Registry24 = __toESM(require_Registry());
  var import_StyleSet19 = __toESM(require_StyleSet());

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\thead.ink
  var import_Registry21 = __toESM(require_Registry());
  var import_Component21 = __toESM(require_Component());

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\row.ink
  var import_Registry20 = __toESM(require_Registry());
  var import_Component20 = __toESM(require_Component());
  var import_StyleSet15 = __toESM(require_StyleSet());
  var Row_0b3723ad0a2356b54f11 = class extends import_Component20.default {
    static id = "0b3723ad0a2356b54f11";
    static tagname = "row";
    static classname = "Row_0b3723ad0a2356b54f11";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet15.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-row");
      return () => [
        import_Registry20.default.createText(`
`, false),
        import_Registry20.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\thead.ink
  var import_StyleSet16 = __toESM(require_StyleSet());
  var Thead_afbcee18613ce58fb77c = class extends import_Component21.default {
    static id = "afbcee18613ce58fb77c";
    static tagname = "thead";
    static classname = "Thead_afbcee18613ce58fb77c";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet16.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-header-group");
      return () => [
        import_Registry21.default.createText(`
`, false),
        import_Registry21.default.createComponent("table-row", Row_0b3723ad0a2356b54f11, {}, [
          import_Registry21.default.createElement("slot", {}, []).element
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\tbody.ink
  var import_Registry22 = __toESM(require_Registry());
  var import_Component22 = __toESM(require_Component());
  var import_StyleSet17 = __toESM(require_StyleSet());
  var Tbody_95f498c1427be6bf7334 = class extends import_Component22.default {
    static id = "95f498c1427be6bf7334";
    static tagname = "tbody";
    static classname = "Tbody_95f498c1427be6bf7334";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet17.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-row-group");
      return () => [
        import_Registry22.default.createText(`
`, false),
        import_Registry22.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\tfoot.ink
  var import_Registry23 = __toESM(require_Registry());
  var import_Component23 = __toESM(require_Component());
  var import_StyleSet18 = __toESM(require_StyleSet());
  var Tfoot_874bedd042c5f2db7353 = class extends import_Component23.default {
    static id = "874bedd042c5f2db7353";
    static tagname = "tfoot";
    static classname = "Tfoot_874bedd042c5f2db7353";
    styles() {
      return ``;
    }
    template() {
      const styles = new import_StyleSet18.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "table-footer-group");
      return () => [
        import_Registry23.default.createText(`
`, false),
        import_Registry23.default.createComponent("table-row", Row_0b3723ad0a2356b54f11, {}, [
          import_Registry23.default.createElement("slot", {}, []).element
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table.ink
  var Table_02bc3cbacda5727a0af3 = class extends import_Component24.default {
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
      const styles = new import_StyleSet19.default();
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
        import_Registry24.default.createComponent(
          "table-thead",
          Thead_afbcee18613ce58fb77c,
          {},
          headers
        ).element
      );
      rows.length && this.appendChild(
        import_Registry24.default.createComponent(
          "table-tbody",
          Tbody_95f498c1427be6bf7334,
          {},
          rows
        ).element
      );
      footers.length && this.appendChild(
        import_Registry24.default.createComponent(
          "table-tfoot",
          Tfoot_874bedd042c5f2db7353,
          {},
          footers
        ).element
      );
      return () => [
        import_Registry24.default.createText(`
`, false),
        ...!!sticky ? [
          import_Registry24.default.createText(`
  `, false),
          import_Registry24.default.createComponent("table-wrapper", Table_cb9231b6c52140a254d4, {}, [
            import_Registry24.default.createText(`
    `, false),
            import_Registry24.default.createElement("slot", {}, []).element,
            import_Registry24.default.createText(`
  `, false)
          ]).element,
          import_Registry24.default.createText(`
`, false)
        ] : true ? [
          ,
          import_Registry24.default.createText(`
  `, false),
          import_Registry24.default.createElement("slot", {}, []).element,
          import_Registry24.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\layout\table\col.ink
  var import_Registry25 = __toESM(require_Registry());
  var import_Component25 = __toESM(require_Component());
  var import_StyleSet20 = __toESM(require_StyleSet());
  var Col_f45aa9d13a1588f1d9ab = class extends import_Component25.default {
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
      const styles = new import_StyleSet20.default();
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
        import_Registry25.default.createText(`
`, false),
        import_Registry25.default.createElement("slot", {}, []).element,
        import_Registry25.default.createText(`
`, false),
        ...!!(wrap1 || wrap2 || wrap3 || wrap4 || wrap5) ? [
          import_Registry25.default.createText(`
  `, false),
          import_Registry25.default.createElement("div", { "class": `wrap` }, []).element,
          import_Registry25.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\number.ink
  var import_Registry26 = __toESM(require_Registry());
  var import_Component26 = __toESM(require_Component());
  var import_StyleSet21 = __toESM(require_StyleSet());
  var import_bold8 = __toESM(require_bold());
  var import_color8 = __toESM(require_color());
  var import_display13 = __toESM(require_display());
  var import_size8 = __toESM(require_size());
  var Number_57480298e1506fdbcd6f = class extends import_Component26.default {
    static id = "57480298e1506fdbcd6f";
    static tagname = "number";
    static classname = "Number_57480298e1506fdbcd6f";
    styles() {
      return ``;
    }
    template() {
      const {
        value,
        separator = "",
        decimal = ".",
        decimals,
        absolute
      } = this.props;
      const styles = new import_StyleSet21.default();
      this.styles = () => styles.toString();
      (0, import_display13.default)(this.props, styles, "inline-block");
      (0, import_color8.default)(this.props, styles, false, ":host", "color");
      (0, import_size8.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold8.default)(this.props, styles, ":host");
      const abs = Math.abs(value);
      const integer = Math.floor(abs);
      const decimalPart = abs - integer;
      const decimalCount = Math.max(0, decimals || String(decimalPart).split(".")[1].length);
      const decimalString = decimalCount ? decimal + decimalPart.toFixed(decimalCount).slice(2) : "";
      const integerString = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      const number = absolute ? integerString + decimalString : (value < 0 ? "-" : "") + integerString + decimalString;
      return () => [
        import_Registry26.default.createText(`
`, false),
        ...this._toNodeList(number)
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\overflow.ink
  var import_Registry27 = __toESM(require_Registry());
  var import_Component27 = __toESM(require_Component());
  var import_StyleSet22 = __toESM(require_StyleSet());
  var import_bold9 = __toESM(require_bold());
  var import_color9 = __toESM(require_color());
  var import_display14 = __toESM(require_display());
  var import_size9 = __toESM(require_size());
  var Overflow_e6dccbdced9ae9b5cceb = class extends import_Component27.default {
    static id = "e6dccbdced9ae9b5cceb";
    static tagname = "overflow";
    static classname = "Overflow_e6dccbdced9ae9b5cceb";
    styles() {
      return ``;
    }
    template() {
      const { value, length, words, hellip } = this.props;
      const styles = new import_StyleSet22.default();
      this.styles = () => styles.toString();
      (0, import_display14.default)(this.props, styles, "inline-block");
      (0, import_color9.default)(this.props, styles, false, ":host", "color");
      (0, import_size9.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold9.default)(this.props, styles, ":host");
      const count = typeof length === "string" ? Number(length) || void 0 : length;
      let output = value;
      if (words) {
        const words2 = value.split(" ");
        if (count && words2.length > count) {
          output = words2.slice(0, count).join(" ");
          if (hellip) {
            output += "&hellip;";
          }
        }
      } else if (count && value.length > count) {
        output = value.slice(0, count);
        if (hellip) {
          output += "&hellip;";
        }
      }
      return () => [
        import_Registry27.default.createText(`
`, false),
        ...this._toNodeList(output),
        import_Registry27.default.createText(`
`, false)
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\phone.ink
  var import_Registry28 = __toESM(require_Registry());
  var import_Component28 = __toESM(require_Component());
  var import_StyleSet23 = __toESM(require_StyleSet());
  var import_bold10 = __toESM(require_bold());
  var import_color10 = __toESM(require_color());
  var import_display15 = __toESM(require_display());
  var import_size10 = __toESM(require_size());
  var import_underline3 = __toESM(require_underline());
  var Phone_7374911bf46bf2c57d53 = class extends import_Component28.default {
    static id = "7374911bf46bf2c57d53";
    static tagname = "phone";
    static classname = "Phone_7374911bf46bf2c57d53";
    styles() {
      return ``;
    }
    template() {
      const {
        value,
        label,
        //dont need these...
        "class": _2,
        style,
        //the rest is for the link
        ...attributes
      } = this.props;
      const styles = new import_StyleSet23.default();
      this.styles = () => styles.toString();
      (0, import_display15.default)(this.props, styles, "inline-block", ":host");
      (0, import_size10.default)(this.props, styles, "13px", ":host", "font-size");
      (0, import_bold10.default)(this.props, styles, ":host");
      (0, import_color10.default)(this.props, styles, false, "a", "color");
      (0, import_underline3.default)(this.props, styles, "a");
      return () => [
        import_Registry28.default.createText(`
`, false),
        import_Registry28.default.createElement("a", { ...attributes, "href": `tel:${value}` }, [
          ...this._toNodeList(label || value)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\rating.ink
  var import_Registry29 = __toESM(require_Registry());
  var import_Component29 = __toESM(require_Component());
  var import_StyleSet24 = __toESM(require_StyleSet());
  var import_bold11 = __toESM(require_bold());
  var import_color11 = __toESM(require_color());
  var import_display16 = __toESM(require_display());
  var import_size11 = __toESM(require_size());
  var Rating_e615208becf17a4297f4 = class extends import_Component29.default {
    static id = "e615208becf17a4297f4";
    static tagname = "rating";
    static classname = "Rating_e615208becf17a4297f4";
    styles() {
      return ``;
    }
    template() {
      const { value, max, remainder, round, spacing } = this.props;
      const styles = new import_StyleSet24.default();
      this.styles = () => styles.toString();
      (0, import_display16.default)(this.props, styles, "inline-block");
      (0, import_color11.default)(this.props, styles, false, ":host", "color");
      (0, import_size11.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold11.default)(this.props, styles, ":host");
      styles.add("span", "display", "inline-block");
      if (spacing) {
        styles.add("span", "letter-spacing", `${spacing}px`);
      }
      const rating = round === "round" ? Math.round(Number(value)) : round === "ceil" ? Math.ceil(Number(value)) : round === "floor" ? Math.floor(Number(value)) : Math.round(Number(value));
      const stars = [];
      for (let i = 0; i < (max || rating); i++) {
        if (i < rating) {
          stars.push("\u2605");
        } else if (remainder) {
          stars.push("\u2606");
        }
      }
      return () => [
        import_Registry29.default.createText(`
`, false),
        ...Object.entries(stars).map(([_2, count]) => [
          import_Registry29.default.createText(`
  `, false),
          import_Registry29.default.createElement("span", {}, [
            ...this._toNodeList(count)
          ]).element,
          import_Registry29.default.createText(`
`, false)
        ]).flat()
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\separated.ink
  var import_Registry30 = __toESM(require_Registry());
  var import_Component30 = __toESM(require_Component());
  var import_StyleSet25 = __toESM(require_StyleSet());
  var import_bold12 = __toESM(require_bold());
  var import_color12 = __toESM(require_color());
  var import_display17 = __toESM(require_display());
  var import_size12 = __toESM(require_size());
  var Separated_c0600ef713f622e638b0 = class extends import_Component30.default {
    static id = "c0600ef713f622e638b0";
    static tagname = "separated";
    static classname = "Separated_c0600ef713f622e638b0";
    styles() {
      return ``;
    }
    template() {
      const { value = [], separator = " " } = this.props;
      const styles = new import_StyleSet25.default();
      this.styles = () => styles.toString();
      (0, import_display17.default)(this.props, styles, "inline-block");
      (0, import_color12.default)(this.props, styles, false, ":host", "color");
      (0, import_size12.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold12.default)(this.props, styles, ":host");
      return () => [
        import_Registry30.default.createText(`
`, false),
        ...!!(separator === "line") ? [
          import_Registry30.default.createText(`
  `, false),
          ...Object.entries(value).map(([_2, item]) => [
            import_Registry30.default.createText(`
    `, false),
            import_Registry30.default.createElement("div", {}, [
              ...this._toNodeList(item)
            ]).element,
            import_Registry30.default.createText(`
  `, false)
          ]).flat(),
          import_Registry30.default.createText(`
`, false)
        ] : true ? [
          ,
          import_Registry30.default.createText(`
  `, false),
          ...this._toNodeList(value.join(separator)),
          import_Registry30.default.createText(`
`, false)
        ] : []
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\table.ink
  var import_Registry31 = __toESM(require_Registry());
  var import_Component31 = __toESM(require_Component());
  var import_StyleSet26 = __toESM(require_StyleSet());
  var import_color13 = __toESM(require_color());
  var Table_317790ce57308084dd5b = class extends import_Component31.default {
    static id = "317790ce57308084dd5b";
    static tagname = "table";
    static classname = "Table_317790ce57308084dd5b";
    styles() {
      return ``;
    }
    template() {
      const {
        value = [],
        //sticky
        top,
        left,
        right,
        //styles
        padding,
        align,
        //colors for bg, head, stripe, border-top
        background,
        border,
        header,
        stripe
      } = this.propsTree;
      const styles = new import_StyleSet26.default();
      this.styles = () => styles.toString();
      styles.add(":host", "display", "block");
      styles.add("table", "width", "100%");
      styles.add("table", "border", "0");
      styles.add("table", "border-spacing", "0");
      if (padding) {
        styles.add("td,th", "padding", `${padding}px`);
      }
      if (align) {
        styles.add("td,th", "text-align", align);
      }
      (0, import_color13.default)(this.props, styles, false, ":host", "color");
      if (background) {
        (0, import_color13.default)(background, styles, false, "td,th", "background-color");
      }
      if (header) {
        (0, import_color13.default)(background, styles, false, "tr th", "background-color");
      }
      if (stripe) {
        (0, import_color13.default)(
          stripe,
          styles,
          false,
          "tr:nth-child(even) td",
          "background-color"
        );
      }
      if (border) {
        styles.add("td", "border-bottom-width", "0");
        styles.add("td", "border-left-width", "0");
        styles.add("td", "border-right-width", "0");
        styles.add("td", "border-top-width", "1px");
        styles.add("td", "border-top-style", "solid");
        (0, import_color13.default)(border, styles, false, "td", "border-top-color");
      }
      if (top || left || right) {
        styles.add("div", "position", "relative");
        styles.add("div", "width", "100%");
        styles.add("div", "height", "100%");
        styles.add("div", "overflow", "auto");
        if (top) {
          styles.add("th", "position", "sticky");
          styles.add("th", "top", "0");
          styles.add("th", "z-index", "1");
        }
        if (left) {
          styles.add("tr th:first-child, tr td:first-child", "position", "sticky");
          styles.add("tr th:first-child, tr td:first-child", "left", "0");
          styles.add("tr th:first-child, tr td:first-child", "z-index", "2");
        }
        if (right) {
          styles.add("tr th:last-child, tr td:last-child", "position", "sticky");
          styles.add("tr th:last-child, tr td:last-child", "left", "0");
          styles.add("tr th:last-child, tr td:last-child", "z-index", "2");
        }
        if (top && left) {
          styles.add("tr th:first-child", "z-index", "3");
        }
        if (top && right) {
          styles.add("tr th:last-child", "z-index", "3");
        }
      }
      const keys = value[0] ? Object.keys(value[0]) : [];
      const entries = value.map((row) => Object.values(row));
      return () => [
        import_Registry31.default.createText(`
`, false),
        import_Registry31.default.createElement("div", {}, [
          import_Registry31.default.createText(`
  `, false),
          import_Registry31.default.createElement("table", {}, [
            import_Registry31.default.createText(`
    `, false),
            import_Registry31.default.createElement("thead", {}, [
              import_Registry31.default.createText(`
      `, false),
              import_Registry31.default.createElement("tr", {}, [
                import_Registry31.default.createText(`
        `, false),
                ...Object.entries(keys).map(([i, label]) => [
                  import_Registry31.default.createText(`
          `, false),
                  import_Registry31.default.createElement("th", {}, [
                    ...this._toNodeList(label)
                  ]).element,
                  import_Registry31.default.createText(`
        `, false)
                ]).flat(),
                import_Registry31.default.createText(`
      `, false)
              ]).element,
              import_Registry31.default.createText(`
    `, false)
            ]).element,
            import_Registry31.default.createText(`
    `, false),
            ...Object.entries(entries).map(([i, row]) => [
              import_Registry31.default.createText(`
      `, false),
              import_Registry31.default.createElement("tr", {}, [
                import_Registry31.default.createText(`
        `, false),
                ...Object.entries(row).map(([_2, value2]) => [
                  import_Registry31.default.createText(`
          `, false),
                  import_Registry31.default.createElement("td", {}, [
                    ...this._toNodeList(value2)
                  ]).element,
                  import_Registry31.default.createText(`
        `, false)
                ]).flat(),
                import_Registry31.default.createText(`
      `, false)
              ]).element,
              import_Registry31.default.createText(`
    `, false)
            ]).flat(),
            import_Registry31.default.createText(`
  `, false)
          ]).element,
          import_Registry31.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\taglist.ink
  var import_Registry33 = __toESM(require_Registry());
  var import_Component33 = __toESM(require_Component());

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\element\badge.ink
  var import_Registry32 = __toESM(require_Registry());
  var import_Component32 = __toESM(require_Component());
  var import_StyleSet27 = __toESM(require_StyleSet());
  var import_color14 = __toESM(require_color());
  var import_curve = __toESM(require_curve());
  var import_display18 = __toESM(require_display());
  var Badge_04e709456157a0a384e7 = class extends import_Component32.default {
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
      const styles = new import_StyleSet27.default();
      this.styles = () => styles.toString();
      (0, import_display18.default)(this.props, styles, "inline-block", ":host");
      styles.add(":host", "padding", padding ? `${padding}px` : "2px 8px");
      (0, import_curve.default)(this.props, styles, false, ":host");
      if (outline || transparent) {
        (0, import_color14.default)(this.props, styles, "var(--muted)", ":host", "color");
        (0, import_color14.default)(this.props, styles, "var(--muted)", ":host", "border-color");
        styles.add(":host", "border-style", "solid");
        styles.add(":host", "border-width", "1px");
        if (outline) {
          styles.add(":host", "background-color", "var(--white)");
        }
      } else {
        styles.add(":host", "color", "var(--white)");
        (0, import_color14.default)(this.props, styles, "var(--muted)", ":host", "background-color");
      }
      return () => [
        import_Registry32.default.createText(`
`, false),
        import_Registry32.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\taglist.ink
  var import_StyleSet28 = __toESM(require_StyleSet());
  var import_display19 = __toESM(require_display());
  var Taglist_bc16ceebd2a003958ea6 = class extends import_Component33.default {
    static id = "bc16ceebd2a003958ea6";
    static tagname = "taglist";
    static classname = "Taglist_bc16ceebd2a003958ea6";
    styles() {
      return ``;
    }
    template() {
      const {
        curved,
        rounded,
        pill,
        info,
        warning,
        success,
        error,
        muted,
        primary,
        color,
        secondary,
        outline,
        solid,
        transparent,
        value = []
      } = this.props;
      const styles = new import_StyleSet28.default();
      this.styles = () => styles.toString();
      (0, import_display19.default)(this.props, styles, "inline-block");
      const defaultColor = !info && !color && !warning && !success && !error && !muted && !primary && !secondary;
      return () => [
        import_Registry33.default.createText(`
`, false),
        ...Object.entries(value).map(([_2, tag2]) => [
          import_Registry33.default.createText(`
  `, false),
          import_Registry33.default.createComponent("element-badge", Badge_04e709456157a0a384e7, { "curved": !!curved, "rounded": !!rounded, "pill": !!pill, "info": !!info, "warning": !!warning || defaultColor, "success": !!success, "error": !!error, "muted": !!muted, "primary": !!primary, "color": color, "secondary": !!secondary, "outline": !!outline, "solid": !!solid, "transparent": !!transparent }, [
            ...this._toNodeList(tag2)
          ]).element,
          import_Registry33.default.createText(`
`, false)
        ]).flat()
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\text.ink
  var import_Registry34 = __toESM(require_Registry());
  var import_Component34 = __toESM(require_Component());
  var import_StyleSet29 = __toESM(require_StyleSet());
  var import_bold13 = __toESM(require_bold());
  var import_color15 = __toESM(require_color());
  var import_display20 = __toESM(require_display());
  var import_size13 = __toESM(require_size());
  var Text_27def1d35d93e6ecd203 = class extends import_Component34.default {
    static id = "27def1d35d93e6ecd203";
    static tagname = "text";
    static classname = "Text_27def1d35d93e6ecd203";
    styles() {
      return ``;
    }
    template() {
      const { value, upper, lower, capital } = this.props;
      const styles = new import_StyleSet29.default();
      this.styles = () => styles.toString();
      (0, import_display20.default)(this.props, styles, "inline-block");
      (0, import_color15.default)(this.props, styles, false, ":host", "color");
      (0, import_size13.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold13.default)(this.props, styles, ":host");
      let output = value;
      if (upper) {
        output = value.toUpperCase();
      } else if (lower) {
        output = value.toLowerCase();
      } else if (capital) {
        output = value.replace(/\b\w/g, (l) => l.toUpperCase());
      }
      return () => [
        import_Registry34.default.createText(`
    `, false),
        ...this._toNodeList(output)
      ];
    }
  };

  // ink-component-resolver:C:\Users\Win 10\dev\ink-task\node_modules\@stackpress\ink-ui\format\yesno.ink
  var import_Registry35 = __toESM(require_Registry());
  var import_Component35 = __toESM(require_Component());
  var import_StyleSet30 = __toESM(require_StyleSet());
  var import_bold14 = __toESM(require_bold());
  var import_color16 = __toESM(require_color());
  var import_display21 = __toESM(require_display());
  var import_size14 = __toESM(require_size());
  var Yesno_a59c02bbe280d9afd200 = class extends import_Component35.default {
    static id = "a59c02bbe280d9afd200";
    static tagname = "yesno";
    static classname = "Yesno_a59c02bbe280d9afd200";
    styles() {
      return ``;
    }
    template() {
      const { value, yes = "Yes", no = "No" } = this.props;
      const styles = new import_StyleSet30.default();
      this.styles = () => styles.toString();
      (0, import_display21.default)(this.props, styles, "inline-block");
      (0, import_color16.default)(this.props, styles, false, ":host", "color");
      (0, import_size14.default)(this.props, styles, false, ":host", "font-size");
      (0, import_bold14.default)(this.props, styles, ":host");
      return () => [
        import_Registry35.default.createText(`
`, false),
        ...this._toNodeList(value ? yes : no)
      ];
    }
  };

  // ink-document-client-resolver:C:\Users\Win 10\dev\ink-task\packages\ink-web\src\pages\ui\format\index.ink
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
      const json = { icon: "book", label: "Docs" };
      const variables = { x: 10, y: 20 };
      const html2 = '<h1><strong style="color: green">Hello</strong> World</h1>';
      const images = [
        "https://images.wsj.net/im-580612/8SR",
        "https://images.wsj.net/im-580612/8SR"
      ];
      const list2 = ["Item 1", "Item 2"];
      const metadata = { name: "John Doe", age: 25 };
      const table = [
        { id: 2, name: "Jane Doe", age: 25 }
      ];
      const stripes = ["bg-t-2", "bg-t-3"];
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
                    ...!!(url === "/ui/form/index.html") ? [
                      import_Document.default.createText(`
  `, false),
                      import_Document.default.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/ui/form/index.html` }, [
                        import_Document.default.createText(`
    `, false),
                        ...this._toNodeList(_("Forms")),
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
                        ...this._toNodeList(_("Forms")),
                        import_Document.default.createText(`
  `, false)
                      ]),
                      import_Document.default.createText(`
`, false)
                    ] : [],
                    import_Document.default.createText(`

`, false),
                    ...!!(url === "/ui/format/index.html") ? [
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
              import_Document.default.createElement("main", {}, [
                import_Document.default.createText(`
        `, false),
                import_Document.default.createElement("api-docs", {}, [
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Formats")),
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
                        import_Document.default.createElement("format-code", { "lang": `js` }, [
                          import_Document.default.createText(`compiler.render('./page.ink')`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/code.html` }, [
                        import_Document.default.createText(`
                Code
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
                        import_Document.default.createElement("format-color", { "box-md": true, "text-md": true, "value": `red` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/color.html` }, [
                        import_Document.default.createText(`
                Color
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
                        import_Document.default.createElement("format-country", { "flag-md": true, "text-md": true, "value": `us` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/country.html` }, [
                        import_Document.default.createText(`
                Country
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
                        import_Document.default.createElement("format-currency", { "flag-lg": true, "text-lg": true, "value": `usd` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/currency.html` }, [
                        import_Document.default.createText(`
                Currency
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
                        import_Document.default.createElement("format-date", { "format": `MMMM D YYYY, h:mm:ss a` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/date.html` }, [
                        import_Document.default.createText(`
                Date
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
                        import_Document.default.createElement("format-email", { "primary": true, "underline": true, "md": true, "value": `john@doe.com` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/email.html` }, [
                        import_Document.default.createText(`
                Email
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
                10 + 29 + 20 = 
                `, false),
                        import_Document.default.createElement("format-formula", { "value": `29`, "formula": `{x} + {this} + {y}`, "data": variables, "bold": true }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/formula.html` }, [
                        import_Document.default.createText(`
                Formula
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
                        import_Document.default.createElement("format-html", { "value": html2 }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/html.html` }, [
                        import_Document.default.createText(`
                HTML
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
                        import_Document.default.createElement("format-image", { "width": `70`, "value": `https://images.wsj.net/im-580612/8SR` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/image.html` }, [
                        import_Document.default.createText(`
                Image
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
                        import_Document.default.createElement("format-imagelist", { "width": `70`, "value": images }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/imagelist.html` }, [
                        import_Document.default.createText(`
                Imagelist
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
                        import_Document.default.createElement("format-json", { "value": json }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/json.html` }, [
                        import_Document.default.createText(`
                JSON
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
                        import_Document.default.createElement("format-link", { "secondary": true, "underline": true, "md": true, "target": `_blank`, "value": `https://iamawesome.com/` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/link.html` }, [
                        import_Document.default.createText(`
                Link
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
                        import_Document.default.createElement("format-list", { "value": list2, "item": `tx-lh-36` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/list.html` }, [
                        import_Document.default.createText(`
                List
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
                        import_Document.default.createElement("format-markdown", { "value": `**Hello** World` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/markdown.html` }, [
                        import_Document.default.createText(`
                Markdown
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
                        import_Document.default.createElement("format-metadata", { "value": metadata, "padding": `10`, "align": `center`, "background-theme": `bg-1`, "stripe-theme": `bg-2`, "border-theme": `black`, "format": true }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/metadata.html` }, [
                        import_Document.default.createText(`
                Metadata
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
                        import_Document.default.createElement("format-number", { "value": `12345.67`, "separator": `,`, "decimal": `.`, "decimals": 2 }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/number.html` }, [
                        import_Document.default.createText(`
                Number
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
                        import_Document.default.createElement("format-overflow", { "value": `Lorem Ipsum`, "length": 8, "hellip": true }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/overflow.html` }, [
                        import_Document.default.createText(`
                Overflow
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
                        import_Document.default.createElement("format-phone", { "value": `+63 (917) 555-2424` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/phone.html` }, [
                        import_Document.default.createText(`
                Phone
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
                        import_Document.default.createElement("format-rating", { "class": `tx-warning`, "value": `3.5`, "max": 5, "remainder": true, "round": `floor` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/rating.html` }, [
                        import_Document.default.createText(`
                Rating
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
                        import_Document.default.createElement("format-separated", { "value": ["Foo", "bar"], "separator": `line` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/separated.html` }, [
                        import_Document.default.createText(`
                Separated
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
                        import_Document.default.createElement("format-table", { "value": table, "padding": `10`, "align": `center`, "background-theme": `bg-1`, "stripe-theme": `bg-2`, "header-theme": `bg-2`, "border-theme": `black` }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/table.html` }, [
                        import_Document.default.createText(`
                Table
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
                        import_Document.default.createElement("format-taglist", { "value": ["Foo", "bar"], "pill": true }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/taglist.html` }, [
                        import_Document.default.createText(`
                Taglist
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
                        import_Document.default.createElement("format-text", { "value": `i am a title`, "capital": true }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/text.html` }, [
                        import_Document.default.createText(`
                Text
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
                        import_Document.default.createElement("format-yesno", { "value": true }),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-center tx-primary p-10 b-solid b-t-3 b-1`, "href": `/ink/ui/format/yesno.html` }, [
                        import_Document.default.createText(`
                Yesno
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
    "FormatCode_c09ccb1e08c8796465cf": Code_c09ccb1e08c8796465cf,
    "FormatColor_d85d69424b8f7c3ab40c": Color_d85d69424b8f7c3ab40c,
    "FormatCountry_84527986f2bf5b7ba376": Country_84527986f2bf5b7ba376,
    "FormatCurrency_929b579470e10df21250": Currency_929b579470e10df21250,
    "FormatDate_35847380257edd037c2b": Date_35847380257edd037c2b,
    "FormatEmail_37b589dc69d038464db8": Email_37b589dc69d038464db8,
    "FormatFormula_b51039e6586b098f7385": Formula_b51039e6586b098f7385,
    "FormatHtml_042baeb4dcb774e4e046": Html_042baeb4dcb774e4e046,
    "FormatImage_2a9146bee7ef739afca8": Image_2a9146bee7ef739afca8,
    "FormatImagelist_1493ed11f5d50a9d07d2": Imagelist_1493ed11f5d50a9d07d2,
    "FormatJson_a895d68bb58dc35699e6": Json_a895d68bb58dc35699e6,
    "FormatLink_b0446bee805fc17064d8": Link_b0446bee805fc17064d8,
    "FormatList_ace8208f6a617064f63f": List_ace8208f6a617064f63f,
    "FormatMarkdown_a2de941906c20b78a444": Markdown_a2de941906c20b78a444,
    "FormatMetadata_87d54dded027bddff214": Metadata_87d54dded027bddff214,
    "InterfaceTable_02bc3cbacda5727a0af3": Table_02bc3cbacda5727a0af3,
    "TableWrapper_cb9231b6c52140a254d4": Table_cb9231b6c52140a254d4,
    "TableRow_0b3723ad0a2356b54f11": Row_0b3723ad0a2356b54f11,
    "TableCol_f45aa9d13a1588f1d9ab": Col_f45aa9d13a1588f1d9ab,
    "FormatNumber_57480298e1506fdbcd6f": Number_57480298e1506fdbcd6f,
    "FormatOverflow_e6dccbdced9ae9b5cceb": Overflow_e6dccbdced9ae9b5cceb,
    "FormatPhone_7374911bf46bf2c57d53": Phone_7374911bf46bf2c57d53,
    "FormatRating_e615208becf17a4297f4": Rating_e615208becf17a4297f4,
    "FormatSeparated_c0600ef713f622e638b0": Separated_c0600ef713f622e638b0,
    "FormatTable_317790ce57308084dd5b": Table_317790ce57308084dd5b,
    "FormatTaglist_bc16ceebd2a003958ea6": Taglist_bc16ceebd2a003958ea6,
    "ElementBadge_04e709456157a0a384e7": Badge_04e709456157a0a384e7,
    "FormatText_27def1d35d93e6ecd203": Text_27def1d35d93e6ecd203,
    "FormatYesno_a59c02bbe280d9afd200": Yesno_a59c02bbe280d9afd200
  };
  var elements = {
    "api-docs": Docs_0ab1bce486b32e7cdafc,
    "i18n-translate": Translate_794a00a5e900fca28310,
    "panel-layout": Panel_c4c96a14064fc0c4d224,
    "format-code": Code_c09ccb1e08c8796465cf,
    "format-color": Color_d85d69424b8f7c3ab40c,
    "format-country": Country_84527986f2bf5b7ba376,
    "format-currency": Currency_929b579470e10df21250,
    "format-date": Date_35847380257edd037c2b,
    "format-email": Email_37b589dc69d038464db8,
    "format-formula": Formula_b51039e6586b098f7385,
    "format-html": Html_042baeb4dcb774e4e046,
    "format-image": Image_2a9146bee7ef739afca8,
    "format-imagelist": Imagelist_1493ed11f5d50a9d07d2,
    "format-json": Json_a895d68bb58dc35699e6,
    "format-link": Link_b0446bee805fc17064d8,
    "format-list": List_ace8208f6a617064f63f,
    "format-markdown": Markdown_a2de941906c20b78a444,
    "format-metadata": Metadata_87d54dded027bddff214,
    "format-number": Number_57480298e1506fdbcd6f,
    "format-overflow": Overflow_e6dccbdced9ae9b5cceb,
    "format-phone": Phone_7374911bf46bf2c57d53,
    "format-rating": Rating_e615208becf17a4297f4,
    "format-separated": Separated_c0600ef713f622e638b0,
    "format-table": Table_317790ce57308084dd5b,
    "format-taglist": Taglist_bc16ceebd2a003958ea6,
    "format-text": Text_27def1d35d93e6ecd203,
    "format-yesno": Yesno_a59c02bbe280d9afd200
  };
  var BUILD_ID = "d222a93f4232fa905434";
  import_Emitter.default.once("ready", () => {
    TemplateDocument.sync();
    for (const [tagname, definition] of Object.entries(elements)) {
      if (!customElements.getName(definition)) {
        customElements.define(tagname, definition);
      }
    }
    import_Emitter.default.emit("mounted", document.body);
  });
  return __toCommonJS(format_exports);
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

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE *)
*/
