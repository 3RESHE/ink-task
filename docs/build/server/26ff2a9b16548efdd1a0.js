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
      var Node = class {
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
      exports.default = Node;
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
      var Element = class _Element extends Node_1.default {
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
        constructor(name, attributes = {}, children = []) {
          super();
          this.type = 1;
          this._parent = null;
          this.name = name;
          this._attributes = new Map(Object.entries(attributes));
          this.children = new Set(children.filter(Boolean));
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
          const children = Array.from(this.children.values()).map((child) => child.toString()).join("");
          return `<${this.name}${attributes}>${children}</${this.name}>`;
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
      exports.default = Element;
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
        static createElement(name, attributes = {}, children = [], parent) {
          const element = new Element_1.default(name, attributes, children);
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
        static import(data, parent) {
          return data.map((node) => {
            const { value } = node;
            const { name, attributes, children } = node;
            switch (node.type) {
              case 1:
                const element = this.createElement(name, attributes, [], parent);
                _Document.import(children, element).forEach((child) => element.appendChild(child));
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
        static load(children) {
          return new _Document(children);
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
        constructor(children) {
          this.children = new Set(children.filter(Boolean));
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

  // ../../node_modules/@stackpress/ink/dist/server/api/data.js
  var require_data = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/api/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var data = /* @__PURE__ */ new Map();
      exports.default = data;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server/Document.js
  var require_Document2 = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/Document.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Exception_1 = __importDefault(require_Exception2());
      var Document_1 = __importDefault(require_Document());
      var data_1 = __importDefault(require_data());
      var ServerDocument2 = class {
        render(props = {}) {
          data_1.default.set("props", props || {});
          const env2 = process.env || {};
          data_1.default.set("env", Object.assign(Object.assign({}, env2), { BUILD_ID: this.id() }));
          const client = JSON.stringify(Object.assign(Object.assign({}, Object.fromEntries(data_1.default.entries())), { env: Object.assign(Object.assign({}, Object.fromEntries(Object.entries(env2).filter((entry) => entry[0].startsWith("PUBLIC_")))), { BUILD_ID: this.id() }) }));
          const children = this.template();
          const document2 = Document_1.default.load(children).toString().trim();
          if (!document2.toLowerCase().startsWith("<html")) {
            throw Exception_1.default.for("Document must start with an <html> tag.");
          }
          return `<!DOCTYPE html>
${document2.replace("__TEMPLATE_DATA__", client)}`;
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
          return [Document_1.default.createText(String(value), true)];
        }
      };
      exports.default = ServerDocument2;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server/Emitter.js
  var require_Emitter = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/Emitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ServerEmitter = void 0;
      var ServerEmitter = class {
        emit(event, target) {
          return this;
        }
        on(event, callback) {
          return this;
        }
        once(event, callback) {
          return this;
        }
        unbind(event, callback) {
          return this;
        }
      };
      exports.ServerEmitter = ServerEmitter;
      var emitter = new ServerEmitter();
      exports.default = emitter;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server/api/env.js
  var require_env = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/api/env.js"(exports) {
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

  // ../../node_modules/@stackpress/ink/dist/server/api/props.js
  var require_props = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/api/props.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = props;
      var data_1 = __importDefault(require_data());
      function props() {
        return data_1.default.get("props") || {};
      }
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server.js
  var require_server = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server.js"(exports) {
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
      exports.props = exports.emitter = exports.env = exports.data = exports.ServerException = exports.ServerEmitter = exports.ServerDocument = exports.DOMNode = exports.DOMText = exports.DOMElement = exports.DOMDocument = exports.DOMDoctype = exports.DOMComment = void 0;
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
      var Document_2 = __importDefault(require_Document2());
      exports.ServerDocument = Document_2.default;
      var Emitter_1 = __importStar(require_Emitter());
      exports.emitter = Emitter_1.default;
      Object.defineProperty(exports, "ServerEmitter", { enumerable: true, get: function() {
        return Emitter_1.ServerEmitter;
      } });
      var data_1 = __importDefault(require_data());
      exports.data = data_1.default;
      var env_1 = __importDefault(require_env());
      exports.env = env_1.default;
      var props_1 = __importDefault(require_props());
      exports.props = props_1.default;
      var Exception_1 = __importDefault(require_Exception2());
      exports.ServerException = Exception_1.default;
    }
  });

  // ../../node_modules/@stackpress/ink/server.js
  var require_server2 = __commonJS({
    "../../node_modules/@stackpress/ink/server.js"(exports, module) {
      module.exports = { ...require_server() };
    }
  });

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\docs\state-management.ink
  var state_management_exports = {};
  __export(state_management_exports, {
    default: () => StateManagement_26ff2a9b16548efdd1a0
  });
  var import_Document = __toESM(require_Document());
  var import_Document2 = __toESM(require_Document2());
  var import_server = __toESM(require_server2());

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

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\docs\state-management.ink
  var StateManagement_26ff2a9b16548efdd1a0 = class extends import_Document2.default {
    id() {
      return "26ff2a9b16548efdd1a0";
    }
    styles() {
      return `@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
  .col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }`;
    }
    template() {
      const url = "/docs/state-management.html";
      const title = _("State Management - Ink reactive web component template engine.");
      const description = _("Learn how to manage states in Ink.");
      const toggle = () => {
        document.getElementsByTagName("panel-layout")[0].toggle("left");
      };
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
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/build/client/${(0, import_server.env)("BUILD_ID")}.css` }),
              import_Document.default.createElement("script", { "data-template": true, "type": `text/json` }, [
                import_Document.default.createText(`__TEMPLATE_DATA__`, true)
              ]),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("script", { "src": `/ink/build/client/${(0, import_server.env)("BUILD_ID")}.js` }),
              import_Document.default.createText(`
  `, false),
              ...!!((0, import_server.env)("PUBLIC_ENV") === "development") ? [
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
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#props` }, [
                      ...this._toNodeList(_("Props"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#signals` }, [
                      ...this._toNodeList(_("Signals"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#events` }, [
                      ...this._toNodeList(_("Events"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#classnames` }, [
                      ...this._toNodeList(_("Class Names"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#children` }, [
                      ...this._toNodeList(_("Children"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#component` }, [
                      ...this._toNodeList(_("Component"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#env` }, [
                      ...this._toNodeList(_("Env Variables"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#this` }, [
                      ...this._toNodeList(_("this"))
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
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("State Management")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Ink provides several ways to manage properties and states 
            in your components.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `props` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Props")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "lang": `js`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            import { props } from '@stackpress/ink';
            const { title, description } = props();
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The `, false),
                    import_Document.default.createElement("code", {}, [
                      import_Document.default.createText(`props`, false)
                    ]),
                    import_Document.default.createText(` function can be used to access the 
            properties of a component.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `signals` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Signals")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Ink provides a reactive state management system that allows 
            you to manage states in your components. The system is based 
            on signals, which are reactive variables that can be used to 
            store and update data. Signals can be used to store any type 
            of data, including numbers, strings, objects, arrays, and even 
            functions.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
              </script>
              <em class=classlist>Count #{count.value}</em>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            To create a signal, you can use the 
            `, false),
                    import_Document.default.createElement("ide-code", { "type": `javascript`, "inline": true }, [
                      ...this._toNodeList(`signal()`)
                    ]),
                    import_Document.default.createText(` 
            function, which takes an initial value as an argument. Signals 
            can be read and updated using the `, false),
                    import_Document.default.createElement("code", {}, [
                      import_Document.default.createText(`value`, false)
                    ]),
                    import_Document.default.createText(` property. 
            Setting the value will trigger a re-render of the component.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Signals can be used in your components to manage states and 
            trigger updates when the state changes. You can use signals to 
            store data that needs to be shared between components, or to 
            trigger side effects when the state changes. Signals can also 
            be used to store data that needs to be persisted across page 
            reloads, such as form data or user preferences.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `events` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Events")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "trim": true, "number": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
                const add = e => count.value++;
              </script>

              <button click=add>{count.value}</button>

              <button dblclick=add>{count.value}</button>
              <button mousedown=add>{count.value}</button>
              <button mouseup=add>{count.value}</button>
              <button mousemove=add>{count.value}</button>
              <button mouseover=add>{count.value}</button>
              <button mouseout=add>{count.value}</button>
              <button wheel=add>{count.value}</button>
              <button keydown=add>{count.value}</button>
              <button keypress=add>{count.value}</button>
              <button keyup=add>{count.value}</button>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            For example, you can use the `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`click`, false)
                    ]),
                    import_Document.default.createText(` 
            attribute assigned to a function to trigger a function when 
            the element is clicked. In combination with updating a signal, 
            can trigger a re-render of the component. The following event 
            attributes are supported.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `col-2` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("div", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Mouse Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`click`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`dblclick`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`mousedown`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`mouseup`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`mousemove`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`mouseover`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`mouseout`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`wheel`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Keyboard Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`keydown`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`keypress`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`keyup`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Form Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`blur`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`change`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`contextmenu`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`focus`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`input`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`submit`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`invalid`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`reset`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`search`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`select`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Clipboard Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`copy`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`cut`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`paste`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Transition Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`transitionend`, false)
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
                    import_Document.default.createElement("div", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Drag Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`drag`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`dragstart`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`dragend`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`dragover`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`dragenter`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`dragleave`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`drop`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`scroll`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Media Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`durationchange`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`ended`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`error`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`loadeddata`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`loadedmetadata`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`loadstart`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`pause`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`play`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`playing`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`progress`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`ratechange`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`seeked`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`seeking`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`stalled`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`suspend`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`timeupdate`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`volumechange`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`waiting`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h3", {}, [
                        ...this._toNodeList(_("Animation Events"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ul", { "class": `tx-lh-36` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`animationstart`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`animationend`, false)
                          ])
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("li", {}, [
                          import_Document.default.createElement("ide-code", { "inline": true }, [
                            import_Document.default.createText(`animationiteration`, false)
                          ])
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
                  import_Document.default.createElement("a", { "name": `classnames` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Class Names")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              import { classnames } from '@stackpress/ink';
              const classlist = classnames(); //--> 'class1 class2 class3'
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The `, false),
                    import_Document.default.createElement("code", {}, [
                      import_Document.default.createText(`classnames`, false)
                    ]),
                    import_Document.default.createText(` function can be used to generate 
            a list of class names based on the properties of an object.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `children` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Children")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              import { children } from '@stackpress/ink';
              const childlist = children(); //--> Node[]
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The `, false),
                    import_Document.default.createElement("code", {}, [
                      import_Document.default.createText(`children`, false)
                    ]),
                    import_Document.default.createText(` function can be used to render 
            child components in a parent component.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `component` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Component")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              import { component } from '@stackpress/ink';
              const button = component(); //--> HTMLElement
              console.log(button.querySelector('span'));
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            For other edge cases, the `, false),
                    import_Document.default.createElement("code", {}, [
                      import_Document.default.createText(`component`, false)
                    ]),
                    import_Document.default.createText(` function 
            can be used to get raw access to the component's 
            functionality.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `env` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Environment Variables")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <script>
              import { env } from '@stackpress/ink';
              const { BUILD_ID, NODE_ENV } = env();
            </script>
            <if true={NODE_ENV === 'development'}>
              <p>Development mode</p>
            </if>
          `)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The `, false),
                    import_Document.default.createElement("code", {}, [
                      import_Document.default.createText(`env`, false)
                    ]),
                    import_Document.default.createText(` function can be used to access environment 
            variables in a component.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `this` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("this")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `What's this`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <script>
                this.props;
                this.style;
                this.classList;
                this.parentNode;
                this.innerHTML;
                this.appendChild();
                this.querySelector('p');
              </script>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`this`, false)
                    ]),
                    import_Document.default.createText(` refers to the 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`InkComponent`, false)
                    ]),
                    import_Document.default.createText(` that extends 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`HTMLElement`, false)
                    ]),
                    import_Document.default.createText(`. This means all
            components in Ink are in fact are HTML elements and has
            access to the common functionality like 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`innerHTML`, false)
                    ]),
                    import_Document.default.createText(` and
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`querySelector()`)
                    ]),
                    import_Document.default.createText(` to name a 
            few. `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`InkComponent`, false)
                    ]),
                    import_Document.default.createText(` has the
            additional following properties and methods that you can access
            using `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`this`, false)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("api-ui", { "start": `InkComponent` }),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("element-alert", { "curved": true, "info": true, "class": `py-20 tx-lh-24` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("element-icon", { "name": `info-circle` }),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("strong", {}, [
                      import_Document.default.createText(`Info:`, false)
                    ]),
                    import_Document.default.createText(` You can discover more methods and properties
            of the `, false),
                    import_Document.default.createElement("code", {}, [
                      import_Document.default.createText(`HTMLElement`, false)
                    ]),
                    import_Document.default.createText(` class on the
            `, false),
                    import_Document.default.createElement("a", { "target": `_blank`, "class": `tx-white tx-underline`, "href": `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement` }, [
                      import_Document.default.createText(`
              MDN Web Docs
            `, false)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("nav", { "class": `flex` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/docs/markup-syntax.html` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }),
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Markup Syntax")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/docs/component-strategy.html` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Component Strategy")),
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
  return __toCommonJS(state_management_exports);
})();
;
;module.exports = InkAPI;