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

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\docs\getting-started.ink
  var getting_started_exports = {};
  __export(getting_started_exports, {
    default: () => GettingStarted_89fca0431082ba100758
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

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\docs\getting-started.ink
  var GettingStarted_89fca0431082ba100758 = class extends import_Document2.default {
    id() {
      return "89fca0431082ba100758";
    }
    styles() {
      return `@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`;
    }
    template() {
      const url = "/docs/getting-started.html";
      const title = _("Getting Started - Ink reactive web component template engine.");
      const description = _("How to install, setup and use Ink in a project.");
      const toggle = () => {
        document.getElementsByTagName("panel-layout")[0].toggle("left");
      };
      const examples = "https://github.com/stackpress/ink/tree/main/examples";
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
                  import_Document.default.createElement("h6", { "class": `tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase` }, [
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
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#http` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("1. Add HTTP")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#develop` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("2. Add Dev Tools")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#cache` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("3. Add File Cache")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#tailwind` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("4. Add TailwindCSS")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#express` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("5. Add ExpressJS")),
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
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-uppercase tx-30 py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Getting Started")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            To try out Ink, run the following commands in terminal: 
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npm init -y && npm install --save @stackpress/ink && npm install --save-dev ts-node typescript @types/node
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("element-alert", { "solid": true, "curved": true, "info": true, "class": `my-20 tx-lh-24` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("element-icon", { "name": `info-circle` }),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("strong", {}, [
                      import_Document.default.createText(`Recommended:`, false)
                    ]),
                    import_Document.default.createText(`
            Download the Ink editor plugin at the `, false),
                    import_Document.default.createElement("a", { "target": `_blank`, "class": `tx-white tx-underline`, "href": `https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language` }, [
                      import_Document.default.createText(`Visual Studio Marketplace`, false)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Create a server file called
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`src/index.ts`, false)
                    ]),
                    import_Document.default.createText(` 
            with the following code that uses the compiler.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              // make a ink compiler
              const compiler = ink();
              // render HTML
              compiler.render('./src/page.ink').then(console.log);
              // render CSS
              compiler.styles('./src/page.ink').then(console.log);
              // render JS
              compiler.client('./src/page.ink').then(console.log);
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Last, create a document file called
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`src/page.ink`, false)
                    ]),
                    import_Document.default.createText(` 
            with the following template code.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/page.ink`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <style>
                .center { text-align: center; }
              </style>
              <script>
                import { env } from '@stackpress/ink';
                const { BUILD_ID, APP_DATA } = env();
                const title = 'Hello World';
              </script>
              <html>
                <head>
                  <title>{title}</title>
                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                </head>
                <body>
                  <h1 class="center">{title}</h1>
                </body>
              </html>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            To try out the basic implementation of Ink and see the 
            results, just run the following command in terminal.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `http` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("1. Add HTTP")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            In most cases Ink will be used to render a front end from 
            a server framework. In this example, we will use the native
            NodeJS HTTP module to create a server that renders a page
            using Ink. Start by replacing the 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`'src/index.ts'`)
                    ]),
                    import_Document.default.createText(`
            file with the following code. 
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("element-alert", { "solid": true, "curved": true, "info": true, "class": `my-20 tx-lh-24` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("element-icon", { "name": `info-circle` }),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("strong", {}, [
                      import_Document.default.createText(`Optional:`, false)
                    ]),
                    import_Document.default.createText(` You can also check your other 
            files to make sure you are following along.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "height": 410, "title": `With NodeJS HTTP` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-head", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-index-ts` }, [
                          import_Document.default.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-page-ink` }, [
                          import_Document.default.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-package-json` }, [
                          import_Document.default.createText(`
                  package.json
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
                    import_Document.default.createElement("app-left", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h5", { "class": `p-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `chevron-down` }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("span", {}, [
                          import_Document.default.createText(`src`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-index-ts` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                index.ts
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-page-ink` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                page.ink
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-package-json` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                package.json
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-main", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `http-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                // create ink compiler
                const compiler = ink();
                // create http server
                const server = http.createServer(async (req, res) => {
                  // if build asset...
                  if (req.url?.startsWith('/build/')) {
                    // get filename ie. abc123.js
                    const filename = req.url.substring(7);
                    // get asset
                    const { type, content } = await compiler.asset(filename);
                    // send response
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  // if home page
                  } else if (req.url === '/') {
                    // render and send response
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                // listen on port 3000
                server.listen(3000);
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `http-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `http-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.30"
                  },
                  "devDependencies": {
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            To run your first Ink web app, just run the following 
            command in terminal.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can now check 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      import_Document.default.createText(`http://localhost:3000/`, false)
                    ]),
                    import_Document.default.createText(` 
            in your browser to see your Ink application. The 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      import_Document.default.createText(`ink()`, false)
                    ]),
                    import_Document.default.createText(` 
            function takes in the following options, all of 
            which are optional.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("api-ui", { "start": `Render Methods` }),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `develop` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("2. Add Developer Tools")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Ink provides a separate package for a better development 
            experience when working with server frameworks that utilize 
            the native http module. Start by installing adding 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`@stackpress/ink-dev`)
                    ]),
                    import_Document.default.createText(`
            to your project.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npm install --save-dev @stackpress/ink-dev
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Next, import the `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`dev()`)
                    ]),
                    import_Document.default.createText(` 
            function from the package and use it in your existing 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`src/index.ts`)
                    ]),
                    import_Document.default.createText(` 
            file to create a development server as shown in the example below.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              // ...
              import { dev } from '@stackpress/ink-dev';
              // ...create ink compiler...
              // 1. create dev tools
              const { router, refresh } = dev();

              const server = http.createServer(async (req, res) => {
                // 2. Add dev router
                if (router(req, res)) return;

                if (req.url?.startsWith('/build/')) {
                  // ...
                } else if (req.url === '/') {
                  // 3. sync builder with refresh server
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  // ... compile and send response ...
                }
              });
              //...listen on port 3000...
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
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`dev()`)
                    ]),
                    import_Document.default.createText(` export 
            from  `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`@stackpress/ink-dev`)
                    ]),
                    import_Document.default.createText(`
            exports tools that supports development mode and accepts the 
            following options.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("api-ui", { "start": `DeveloperOptions` }),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            This returns several tools you can use in your server app.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("api-ui", { "start": `Developer Tools` }),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Lastly, update the document file 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_Document.default.createText(` 
            to include the development script 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<script src="/dev.js"></script>`)
                    ]),
                    import_Document.default.createText(` 
            as shown below.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/page.ink`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <style>
                /* ... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                  <!-- 4. include dev script -->
                  <script src="/dev.js"></script>
                </head>
                <body>
                  <!-- ... -->
                </body>
              </html>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The project should now look like the example below.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "height": 410, "title": `With Developer Tools`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-head", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-index-ts` }, [
                          import_Document.default.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-page-ink` }, [
                          import_Document.default.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-package-json` }, [
                          import_Document.default.createText(`
                  package.json
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
                    import_Document.default.createElement("app-left", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h5", { "class": `p-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `chevron-down` }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("span", {}, [
                          import_Document.default.createText(`src`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-index-ts` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                index.ts
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-page-ink` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                page.ink
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-package-json` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                package.json
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-main", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `develop-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';

                const compiler = ink();
                // 1. create dev tools
                const { router, refresh } = dev();

                const server = http.createServer(async (req, res) => {
                  // 2. Add dev router
                  if (router(req, res)) return;
                  
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    // 3. sync builder with refresh server
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `develop-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `develop-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.30"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.30",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Re-run the following command in terminal. It shouldn't look 
            like anything has changed, but the development server is now
            running in the background. Try to change
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Whenever `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_Document.default.createText(` 
            is saved, the development server will automatically refresh 
            the page. Components will also be updated in real-time without
            the page reloading.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `cache` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("3. Add Cache Files")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Ink has an out-of-the-box cache and build strategy that
            can be used to store and serve pre-compiled files. To use the
            cache, you just need to import it from the 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`@stackpress/ink/compiler`)
                    ]),
                    import_Document.default.createText(` 
            module and use it like the following example.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              // ...
              import path from 'path';
              import { cache } from '@stackpress/ink/compiler';
              // ...create ink compiler...
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
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
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`src/index.ts`)
                    ]),
                    import_Document.default.createText(` 
            file should now look like the example below.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              import path from 'path';
              import http from 'http';
              import ink, { cache } from '@stackpress/ink/compiler';
              import { dev } from '@stackpress/ink-dev';

              const compiler = ink();
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              const { router, refresh } = dev();
              const server = http.createServer(async (req, res) => {
                if (router(req, res)) return;
                if (req.url?.startsWith('/build/')) {
                  const filename = req.url.substring(7);
                  const { type, content } = await compiler.asset(filename);
                  res.writeHead(200, { 'Content-Type': type });
                  return res.end(content);
                } else if (req.url === '/') {
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  return res.end(await compiler.render('./src/page.ink', {
                    title: 'Hello World'
                  }));
                }
              });
              server.listen(3000);
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Re-run the following command in terminal to start the cache 
            server.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Load 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      import_Document.default.createText(`http://localhost:3000/`, false)
                    ]),
                    import_Document.default.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            The `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      import_Document.default.createText(`cache()`, false)
                    ]),
                    import_Document.default.createText(` plugin is 
            just a wrapper that listens for build related events and
            stores the generated files in the specified build path.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "height": 400, "title": `cache.ts (Internal)`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              emitter.on('manifest-resolved', (event: Event<string>) => {
                const manifest = event.params.manifest as Manifest
                //write the manifest to the file system
                writeFile(paths.manifest, manifest.toJson());
              });

              // on pre render, try to use cache if live
              emitter.on('render', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract props and builder from params
                const props = (event.params.props || {}) as Hash;
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const { fs, id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'server', \`\${id}.js\`);
                //if production and cache file exists
                if (fs.existsSync(cache)) {
                  //get the build object
                  const build = compiler.fromCache(cache);
                  //render the document
                  const html = build.document.render(props);
                  //return the cached content
                  event.set(html);
                }
              });

              // on post render, cache (dev and live)
              emitter.on('rendered', (event: Event<string>) => {
                //extract build and builder from params
                const builder = event.params.builder as Builder;
                const html = event.params.html as string;
                //get fs and id ie. abc123c
                const { id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.html
                const cache = path.join(paths.build, 'client', \`\${id}.html\`);
                //write the server source code to cache
                writeFile(cache, html);
              });

              // on pre client build, try to use cache if live
              emitter.on('build-client', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract builder from params
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //if cache file exists, send it
                if (fs.existsSync(cache)) {
                  event.set(fs.readFileSync(cache, 'utf8'));
                }
              });

              // on post client build, cache (dev and live)
              emitter.on('built-client', (event: Event<string>) => {
                //extract builder and sourcecode from params
                const builder = event.params.builder as Builder;
                const sourceCode = event.params.sourceCode as string;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //write the client source code to cache
                writeFile(cache, sourceCode);
              });

              // on pre markup build, try to use cache if live
              emitter.on('build-markup', /* ... */);
              //on post markup build, cache (dev and live)
              emitter.on('built-markup', /* ... */);
              //on pre server build, try to use cache if live
              emitter.on('build-server', /* ... */);
              //on post server build, cache (dev and live)
              emitter.on('built-server', /* ... */);
              //on pre styles build, try to use cache if live
              emitter.on('build-styles', /* ... */);
              //on post styles build, cache (dev and live)
              emitter.on('built-styles', /* ... */);

              // Initialize: if there's a manifest
              if (fs.existsSync(paths.manifest)) {
                //load the manifest file
                compiler.manifest.load(
                  JSON.parse(fs.readFileSync(paths.manifest, 'utf-8'))
                );
              }
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            This means you can also use your own cache strategy by 
            listening to the events emitted by the compiler. The
            following table lists all the events that the compiler
            emits during the build cycle of a document.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("api-ui", { "start": `EventEmitter` }),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `tailwind` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("4. Add TailwindCSS")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Tailwind is an atomic CSS collection of styles that favours 
            small, single-purpose classes with their selector names based 
            on its visual function. It works by using a build process to
            read your source files to generate its styles based only on 
            what is being used. This makes using Tailwind optimal because
            it doesn't bloat your CSS with unused styles.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            At the same time, web components with the
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<style>`)
                    ]),
                    import_Document.default.createText(` tag imply using the 
            component's shadow DOM which will encapsulate the styles within
            the component and not be affected by global styles. Since 
            Tailwind in turn implies that you do not need to (necessarily) 
            define styles, you do not need to use the shadow DOM at all if
            you are using Tailwind.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("element-alert", { "solid": true, "curved": true, "warning": true, "class": `my-20 tx-lh-24` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("element-icon", { "name": `exclamation-triangle` }),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("strong", {}, [
                      import_Document.default.createText(`Warning:`, false)
                    ]),
                    import_Document.default.createText(`
            The caveat for using TailwindCSS, means that web components 
            using it will not be shippable to other projects that do not
            use Tailwind. It all comes down to preference in the end.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Ink has a separate package called
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`@stackpress/ink-tailwind`)
                    ]),
                    import_Document.default.createText(`
            to use TailwindCSS with Ink. This is just another wrapper 
            class that listens to the compiler's build events. You can 
            install this plugin by running the following command in terminal.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npm install --save-dev @stackpress/ink-tailwind autoprefixer postcss tailwindcss
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Next, in `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`src/index.ts`)
                    ]),
                    import_Document.default.createText(`
            import the `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`tailwind()`)
                    ]),
                    import_Document.default.createText(`
            plugin from the package and use it in the compiler as shown
            in the example below.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              // ...
              import { tailwind } from '@stackpress/ink-tailwind';
              // ...create ink compiler...
              // ...use cache...
              // 1. Use Tailwind
              compiler.use(tailwind({
                darkMode: 'class',
                theme: { extend: {} },
                plugins: [],
                content: []
              }));

              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Lastly, in `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_Document.default.createText(`
            add the Tailwind directives inside the 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<style>`)
                    ]),
                    import_Document.default.createText(` tag like the code 
            below. Also add a tailwind class, (like 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`<style>`)
                    ]),
                    import_Document.default.createText(`) to the 
            markup to verify that the plugin is working and the styles 
            are being applied.
          `, false)
                  ]),
                  import_Document.default.createText(`
          
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `src/page.ink`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <style>
                /* 2. Add tailwind directives */
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                /* ...Other styles... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                </head>
                <body>
                  <h1 class="text-center">{title}</h1>
                </body>
              </html>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Check to see if the project files look like the example below.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "height": 410, "title": `With TailwindCSS`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-head", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-index-ts` }, [
                          import_Document.default.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-page-ink` }, [
                          import_Document.default.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-package-json` }, [
                          import_Document.default.createText(`
                  package.json
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
                    import_Document.default.createElement("app-left", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h5", { "class": `p-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `chevron-down` }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("span", {}, [
                          import_Document.default.createText(`src`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-index-ts` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                index.ts
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-page-ink` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                page.ink
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-package-json` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                package.json
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-main", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `tailwind-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                import path from 'path';
                import http from 'http';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';
                import { tailwind } from '@stackpress/ink-tailwind';

                const compiler = ink();
                compiler.use(cache({
                  buildPath: path.join(__dirname, '../build')
                }));
                // 1. use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                
                const { router, refresh } = dev();
                const server = http.createServer(async (req, res) => {
                  if (router(req, res)) return;
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `tailwind-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                <style>
                  /* 2. Add tailwind directives */
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `tailwind-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.30"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.30",
                    "@stackpress/ink-tailwind": "0.3.30",
                    "@types/node": "22.1.0",
                    "autoprefixer": "10.4.20",
                    "postcss": "8.4.44",
                    "tailwindcss": "3.4.10",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Re-run the following command in terminal to initialize the 
            tailwind plugin.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Load 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      import_Document.default.createText(`http://localhost:3000/`, false)
                    ]),
                    import_Document.default.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            Try to add a Tailwind class to the markup in
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_Document.default.createText(` and 
            save. The development server will automatically refresh 
            the styles and component styles will also be update in 
            real-time without the page reloading.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `express` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("5. Add ExpressJS")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Ink has a separate package called
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`@stackpress/ink-express`)
                    ]),
                    import_Document.default.createText(`
            to use Express with Ink. You can install this plugin by 
            running the following command in terminal.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npm install --save @stackpress/ink-express express && npm install --save-dev @types/express
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The package 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`@stackpress/ink-express`)
                    ]),
                    import_Document.default.createText(`
            exports two plugins for express.
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`view()`)
                    ]),
                    import_Document.default.createText(` is the view 
            engine for production (live) environments. It can be used with
            an express app like 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`app.use(view(compiler))`)
                    ]),
                    import_Document.default.createText(`.
            The other export, `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`dev()`)
                    ]),
                    import_Document.default.createText(` 
            is the same export from the Developer Tools documentation above, 
            but returns several tools used to integrate with express.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("api-ui", { "start": `Express Developer Tools` }),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Example logic to use the all the Ink Express tools together
            with Ink developer tools could look like the following code
            that cases for 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`development`)
                    ]),
                    import_Document.default.createText(` and 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`production`)
                    ]),
                    import_Document.default.createText(` modes.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 12, "lang": `js`, "class": `py-20` }, [
                    ...this._toNodeList(`
            import { view, dev } from '@stackpress/ink-express';

            //create ink compiler
            const compiler = ink({ cwd: __dirname, minify: false });
            //create express app
            const app = express();
            //set the view engine to ink
            app.set('views', path.join(__dirname, 'pages'));
            app.set('view engine', 'ink');

            //if production (live)
            if (process.env.NODE_ENV === 'production') {
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
              //...other production settings...
            //if development mode
            } else {
              //get development middleware
              const { router, view } = dev({ cwd: __dirname });
              //use development middleware
              app.use(router);
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
            }
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            And you can now case for development mode in 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true, "lang": `js` }, [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_Document.default.createText(`
            like in the example below
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 12, "class": `py-20` }, [
                    ...this._toNodeList(`
            <style>
              /* ... */
            </style>
            <script>
              import { env } from '@stackpress/ink';
              const { NODE_ENV } = env();
            </script>
            <html>
              <head>
                <!-- ... -->
                <if true={NODE_ENV !== 'production'}>
                  <script src="/dev.js"></script>
                </if>
              </head>
              <body>
                <!-- ... -->
              </body>
            </html>
          `)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Check to see if the project files look like the example below.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "height": 410, "title": `With ExpressJS`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-head", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-index-ts` }, [
                          import_Document.default.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-page-ink` }, [
                          import_Document.default.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-package-json` }, [
                          import_Document.default.createText(`
                  package.json
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
                    import_Document.default.createElement("app-left", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("h5", { "class": `p-5` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `chevron-down` }),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("span", {}, [
                          import_Document.default.createText(`src`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-index-ts` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                index.ts
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-page-ink` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                page.ink
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-package-json` }, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("element-icon", { "name": `file` }),
                        import_Document.default.createText(`
                package.json
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("app-main", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `express-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                import path from 'path';
                import express from 'express';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { view, dev } from '@stackpress/ink-express';
                import { tailwind } from '@stackpress/ink-tailwind';

                //create ink compiler
                const compiler = ink();
                //use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                //use build cache
                compiler.use(cache({ 
                  environment: process.env.NODE_ENV,
                  buildPath: path.join(__dirname, '../build')
                }));

                //create express app
                const app = express();
                //set the view engine to ink
                app.set('views', __dirname);
                app.set('view engine', 'ink');

                //if production (live)
                if (process.env.NODE_ENV === 'production') {
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                  //...other production settings...
                //if development mode
                } else {
                  //get development middleware
                  const { router, view } = dev({ cwd: __dirname });
                  //use development middleware
                  app.use(router);
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                }

                //routes
                app.get('/build/:build', async (req, res) => {
                  //get filename ie. abc123.js
                  const filename = req.params.build;
                  //get asset
                  const { type, content } = await compiler.asset(filename);
                  //send response
                  res.type(type).send(content);
                });

                app.get('/', (req, res) => {
                  //now use the ink template engine
                  res.render('page', { title: 'Hello World' });
                  res.type('text/html');
                });

                //listen
                app.listen(3000, () => {
                  console.log('HTTP server is running on http://localhost:3000');
                });
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `express-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                <style>
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA, NODE_ENV } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <if true={NODE_ENV !== 'production'}>
                      <script src="/dev.js"></script>
                    </if>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("ide-code", { "id": `express-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "^0.1.9",
                    "@stackpress/ink-express": "^0.1.9",
                    "express": "^4.19.2"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "^0.1.9",
                    "@stackpress/ink-tailwind": "^0.1.9",
                    "@types/express": "^4.17.21",
                    "@types/node": "^22.5.3",
                    "autoprefixer": "^10.4.20",
                    "postcss": "^8.4.45",
                    "tailwindcss": "^3.4.10",
                    "ts-node": "^10.9.2",
                    "typescript": "^5.5.4"
                  }
                }
              `)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Re-run the following command in terminal to initialize the 
            re-run your application using Express.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `bash` }, [
                      import_Document.default.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Load 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      import_Document.default.createText(`http://localhost:3000/`, false)
                    ]),
                    import_Document.default.createText(` 
            in your browser. After loading you should see everything is 
            exactly as it was, but you now benefit from using ExpressJS.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("h3", { "class": `tx-t-1 tx-uppercase tx-22 pt-40 pb-20` }, [
                    import_Document.default.createText(`
            -- `, false),
                    ...this._toNodeList(_("Read On")),
                    import_Document.default.createText(` --
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            To see other getting started examples with various frameworks,
            you can check out the following project examples in the 
            official repository.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ul", {}, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-fastify` }, [
                        import_Document.default.createText(`
                Fastify
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-hapi` }, [
                        import_Document.default.createText(`
                Hapi
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-koa` }, [
                        import_Document.default.createText(`
                Koa
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-nest` }, [
                        import_Document.default.createText(`
                NestJS
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-restify` }, [
                        import_Document.default.createText(`
                Restify
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-webpack` }, [
                        import_Document.default.createText(`
                Webpack
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
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-10` }, [
                    import_Document.default.createText(`
            Depending on how you plan to use Ink, you can also look at 
            the following project setups.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ul", {}, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/template-engine.html` }, [
                        import_Document.default.createText(`
                Template Engine
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/single-page.html` }, [
                        import_Document.default.createText(`
                Single Page App
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/static-site.html` }, [
                        import_Document.default.createText(`
                Static Site Generator
              `, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("li", { "class": `py-5` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/component-publisher.html` }, [
                        import_Document.default.createText(`
                Web Component Publisher
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
                  import_Document.default.createElement("nav", { "class": `flex` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/docs/index.html` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }),
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Documentation")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/docs/markup-syntax.html` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Markup Syntax")),
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
  return __toCommonJS(getting_started_exports);
})();
;
;module.exports = InkAPI;