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

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\components\table.ink
  var table_exports = {};
  __export(table_exports, {
    default: () => Table_a7c20a7727741f0077cc
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

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\ui\components\table.ink
  var Table_a7c20a7727741f0077cc = class extends import_Document2.default {
    id() {
      return "a7c20a7727741f0077cc";
    }
    styles() {
      return `@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`;
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
        { icon: "icons", label: "Components", href: "/ink/ui/index.html" },
        { label: "Table" }
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
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#pager` }, [
                      ...this._toNodeList(_("Table"))
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
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#OutlineExample` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Outline Example"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#TableWithAdditionalColumn` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Table with Additional Column"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#TableWithBorders` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Table with Borders"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#StripedTable` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Striped Table"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#TableWithStatusLabels` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Table with Status Labels"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#ResponsiveTable` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Responsive Table"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#TableWithCustomColumnWidths` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Table with Custom Column Widths"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#TableWithIcons` }, [
                        import_Document.default.createText(`\u2022 `, false),
                        ...this._toNodeList(_("Table with Icons"))
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
                  import_Document.default.createElement("a", { "name": `pager` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Table")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Editor`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "lang": `js`, "trim": true, "detab": 12 }, [
                      ...this._toNodeList(`
              import Table from '@stackpress/ink-ui/layout/table';
            `)
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
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0`, "body": `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
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
                        import_Document.default.createText(`top`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String | Number`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_('Makes the table header sticky at the top. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.'))
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
                        import_Document.default.createText(`bottom`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String | Number`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_('Makes the table footer sticky at the bottom. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.'))
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
                        import_Document.default.createText(`left`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String | Number`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_('Makes the first column sticky on the left. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.'))
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
                        import_Document.default.createText(`right`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`String | Number`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`No`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        ...this._toNodeList(_('Makes the last column sticky on the right. Accepts a pixel value (e.g., "10") or percentage (e.g., "10%"). Defaults to "0" if no value is provided.'))
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
                        import_Document.default.createText(`head`, false)
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
                        ...this._toNodeList(_('Space-separated class names applied to table headers (e.g., "bg-primary tx-white").'))
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
                        import_Document.default.createText(`body`, false)
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
                        ...this._toNodeList(_('Space-separated class names applied to all body cells (e.g., "py-12 px-10").'))
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
                        import_Document.default.createText(`odd`, false)
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
                        ...this._toNodeList(_('Space-separated class names applied to odd-numbered rows in the body (e.g., "bg-t-0").'))
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
                        import_Document.default.createText(`even`, false)
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
                        ...this._toNodeList(_('Space-separated class names applied to even-numbered rows in the body (e.g., "bg-t-1").'))
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
                        import_Document.default.createText(`foot`, false)
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
                        ...this._toNodeList(_('Space-separated class names applied to table footers (e.g., "bg-t-2").'))
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
                        import_Document.default.createText(`nowrap`, false)
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
                        ...this._toNodeList(_('Prevents text wrapping in cells when set (e.g., nowrap=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)'))
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
                        import_Document.default.createText(`wrap1`, false)
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
                        ...this._toNodeList(_('Sets a fixed width of 100px for cells (e.g., wrap1=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)'))
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
                        import_Document.default.createText(`wrap2`, false)
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
                        ...this._toNodeList(_('Sets a fixed width of 200px for cells (e.g., wrap2=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)'))
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
                        import_Document.default.createText(`wrap3`, false)
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
                        ...this._toNodeList(_('Sets a fixed width of 300px for cells (e.g., wrap3=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)'))
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
                        import_Document.default.createText(`wrap4`, false)
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
                        ...this._toNodeList(_('Sets a fixed width of 400px for cells (e.g., wrap4=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)'))
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
                        import_Document.default.createText(`wrap5`, false)
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
                        ...this._toNodeList(_('Sets a fixed width of 500px for cells (e.g., wrap5=""). Applies to `<table-col>`, `<table-head>`, or `<table-foot>`.)'))
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          <!-- Outline Example -->
          `, false),
                  import_Document.default.createElement("a", { "name": `OutlineExample` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Outline Example"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("A simple table using layout-table with alternating row colors.")),
                    import_Document.default.createText(`
          `, false)
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
                      ...this._toNodeList(_("Role"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Status"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`John Doe`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Developer`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Active`, false)
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
                        import_Document.default.createText(`Jane Smith`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Designer`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Pending`, false)
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
                        import_Document.default.createText(`Michael Lee`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Manager`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Inactive`, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
              body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head>{_('Name')}</table-head>
              <table-head>{_('Role')}</table-head>
              <table-head>{_('Status')}</table-head>
              <table-row>
                <table-col>John Doe</table-col>
                <table-col>Developer</table-col>
                <table-col>Active</table-col>
              </table-row>
              <table-row>
                <table-col>Jane Smith</table-col>
                <table-col>Designer</table-col>
                <table-col>Pending</table-col>
              </table-row>
              <table-row>
                <table-col>Michael Lee</table-col>
                <table-col>Manager</table-col>
                <table-col>Inactive</table-col>
              </table-row>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Table with Additional Column -->
          `, false),
                  import_Document.default.createElement("a", { "name": `TableWithAdditionalColumn` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Additional Column"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("This example demonstrates a table with a more detailed layout, including an additional column for contact information.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-16 px-12 bg-primary tx-white b-solid b-black bt-1 bb-0 bx-0`, "body": `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, "odd": `bg-t-0`, "even": `bg-t-2` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Employee"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Department"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Status"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Contact"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Alice Johnson`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`HR`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Active`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`alice@example.com`, false)
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
                        import_Document.default.createText(`Bob Williams`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Engineering`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`On Leave`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`bob@example.com`, false)
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
                        import_Document.default.createText(`Sarah Brown`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Marketing`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Active`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`sarah@example.com`, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              head="py-16 px-12 bg-primary tx-white b-solid b-black bt-1 bb-0 bx-0" 
              body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
              odd="bg-t-0"
              even="bg-t-2"
            >
              <table-head>{_('Employee')}</table-head>
              <table-head>{_('Department')}</table-head>
              <table-head>{_('Status')}</table-head>
              <table-head>{_('Contact')}</table-head>
              <table-row>
                <table-col>Alice Johnson</table-col>
                <table-col>HR</table-col>
                <table-col>Active</table-col>
                <table-col>alice@example.com</table-col>
              </table-row>
              <table-row>
                <table-col>Bob Williams</table-col>
                <table-col>Engineering</table-col>
                <table-col>On Leave</table-col>
                <table-col>bob@example.com</table-col>
              </table-row>
              <table-row>
                <table-col>Sarah Brown</table-col>
                <table-col>Marketing</table-col>
                <table-col>Active</table-col>
                <table-col>sarah@example.com</table-col>
              </table-row>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Table with Borders -->
          `, false),
                  import_Document.default.createElement("a", { "name": `TableWithBorders` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Borders"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("This table includes a solid border around all cells for better visibility.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-12 px-10 bg-t-1 b-solid b-black bt-1 bx-1`, "body": `py-12 px-10 b-solid b-black bt-1 bx-1`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("ID"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Name"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Age"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Country"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`1`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Emily Watson`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`29`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`USA`, false)
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
                        import_Document.default.createText(`2`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Omar Ali`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`35`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`UAE`, false)
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
                        import_Document.default.createText(`3`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Chen Wei`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`41`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`China`, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              head="py-12 px-10 bg-t-1 b-solid b-black bt-1 bx-1"
              body="py-12 px-10 b-solid b-black bt-1 bx-1"
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head>{_('ID')}</table-head>
              <table-head>{_('Name')}</table-head>
              <table-head>{_('Age')}</table-head>
              <table-head>{_('Country')}</table-head>
              <table-row>
                <table-col>1</table-col>
                <table-col>Emily Watson</table-col>
                <table-col>29</table-col>
                <table-col>USA</table-col>
              </table-row>
              <table-row>
                <table-col>2</table-col>
                <table-col>Omar Ali</table-col>
                <table-col>35</table-col>
                <table-col>UAE</table-col>
              </table-row>
              <table-row>
                <table-col>3</table-col>
                <table-col>Chen Wei</table-col>
                <table-col>41</table-col>
                <table-col>China</table-col>
              </table-row>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Striped Table -->
          `, false),
                  import_Document.default.createElement("a", { "name": `StripedTable` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Striped Table"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("A striped table helps differentiate rows by alternating background colors.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-12 px-10 bg-t-2 tx-white`, "body": `py-12 px-10`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Product"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Category"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Price"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Stock"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`iPhone 13`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Electronics`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`$799`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`In Stock`, false)
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
                        import_Document.default.createText(`Nike Sneakers`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Fashion`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`$120`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Limited Stock`, false)
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
                        import_Document.default.createText(`Samsung TV`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Electronics`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`$999`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Out of Stock`, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              head="py-12 px-10 bg-t-2 tx-white"
              body="py-12 px-10"
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head>{_('Product')}</table-head>
              <table-head>{_('Category')}</table-head>
              <table-head>{_('Price')}</table-head>
              <table-head>{_('Stock')}</table-head>
              <table-row>
                <table-col>iPhone 13</table-col>
                <table-col>Electronics</table-col>
                <table-col>$799</table-col>
                <table-col>In Stock</table-col>
              </table-row>
              <table-row>
                <table-col>Nike Sneakers</table-col>
                <table-col>Fashion</table-col>
                <table-col>$120</table-col>
                <table-col>Limited Stock</table-col>
              </table-row>
              <table-row>
                <table-col>Samsung TV</table-col>
                <table-col>Electronics</table-col>
                <table-col>$999</table-col>
                <table-col>Out of Stock</table-col>
              </table-row>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Table with Status Labels -->
          `, false),
                  import_Document.default.createElement("a", { "name": `TableWithStatusLabels` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Status Labels"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("A table with status labels and buttons for better user experience.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-12 px-10 bg-primary tx-white`, "body": `py-12 px-10`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("User"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Email"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Status"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Actions"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`John Doe`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`john@example.com`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createElement("span", { "class": `bg-success tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Active`, false)
                        ])
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("button", { "class": `bg-primary tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Edit`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("button", { "class": `bg-error tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Delete`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
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
                        import_Document.default.createText(`Mary Jane`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`mary@example.com`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createElement("span", { "class": `bg-warning tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Pending`, false)
                        ])
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("button", { "class": `bg-primary tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Edit`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("button", { "class": `bg-error tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Delete`, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
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
                        import_Document.default.createText(`Mike Brown`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`mike@example.com`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createElement("span", { "class": `bg-error tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Suspended`, false)
                        ])
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("button", { "class": `bg-primary tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Edit`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("button", { "class": `bg-error tx-white py-4 px-8 rounded` }, [
                          import_Document.default.createText(`Delete`, false)
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
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              head="py-12 px-10 bg-primary tx-white"
              body="py-12 px-10"
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head>{_('User')}</table-head>
              <table-head>{_('Email')}</table-head>
              <table-head>{_('Status')}</table-head>
              <table-head>{_('Actions')}</table-head>
              <table-row>
                <table-col>John Doe</table-col>
                <table-col>john@example.com</table-col>
                <table-col><span class="bg-success tx-white py-4 px-8 rounded">Active</span></table-col>
                <table-col>
                  <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
                  <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
                </table-col>
              </table-row>
              <table-row>
                <table-col>Mary Jane</table-col>
                <table-col>mary@example.com</table-col>
                <table-col><span class="bg-warning tx-white py-4 px-8 rounded">Pending</span></table-col>
                <table-col>
                  <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
                  <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
                </table-col>
              </table-row>
              <table-row>
                <table-col>Mike Brown</table-col>
                <table-col>mike@example.com</table-col>
                <table-col><span class="bg-error tx-white py-4 px-8 rounded">Suspended</span></table-col>
                <table-col>
                  <button class="bg-primary tx-white py-4 px-8 rounded">Edit</button>
                  <button class="bg-error tx-white py-4 px-8 rounded">Delete</button>
                </table-col>
              </table-row>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Responsive Table -->
          `, false),
                  import_Document.default.createElement("a", { "name": `ResponsiveTable` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Responsive Table"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("This table is responsive and allows horizontal scrolling on smaller screens when wrapped in an overflow container.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `overflow-auto` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("layout-table", { "top": true, "head": `py-12 px-10 bg-primary tx-white`, "body": `py-12 px-10`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Order ID"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Customer"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Total"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Date"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Status"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-row", {}, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`#1001`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Jane Smith`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`$200`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`2025-02-28`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createElement("span", { "class": `bg-success tx-white py-4 px-8 rounded` }, [
                            import_Document.default.createText(`Completed`, false)
                          ])
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
                          import_Document.default.createText(`#1002`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Robert White`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`$150`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`2025-02-27`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createElement("span", { "class": `bg-warning tx-white py-4 px-8 rounded` }, [
                            import_Document.default.createText(`Pending`, false)
                          ])
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
                          import_Document.default.createText(`#1003`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Sarah Connor`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`$300`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`2025-02-26`, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createElement("span", { "class": `bg-error tx-white py-4 px-8 rounded` }, [
                            import_Document.default.createText(`Canceled`, false)
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
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <div class="overflow-auto">
              <layout-table 
                top
                head="py-12 px-10 bg-primary tx-white"
                body="py-12 px-10"
                odd="bg-t-0"
                even="bg-t-1"
              >
                <table-head>{_('Order ID')}</table-head>
                <table-head>{_('Customer')}</table-head>
                <table-head>{_('Total')}</table-head>
                <table-head>{_('Date')}</table-head>
                <table-head>{_('Status')}</table-head>
                <table-row>
                  <table-col>#1001</table-col>
                  <table-col>Jane Smith</table-col>
                  <table-col>$200</table-col>
                  <table-col>2025-02-28</table-col>
                  <table-col><span class="bg-success tx-white py-4 px-8 rounded">Completed</span></table-col>
                </table-row>
                <table-row>
                  <table-col>#1002</table-col>
                  <table-col>Robert White</table-col>
                  <table-col>$150</table-col>
                  <table-col>2025-02-27</table-col>
                  <table-col><span class="bg-warning tx-white py-4 px-8 rounded">Pending</span></table-col>
                </table-row>
                <table-row>
                  <table-col>#1003</table-col>
                  <table-col>Sarah Connor</table-col>
                  <table-col>$300</table-col>
                  <table-col>2025-02-26</table-col>
                  <table-col><span class="bg-error tx-white py-4 px-8 rounded">Canceled</span></table-col>
                </table-row>
              </layout-table>
            </div>
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Table with Custom Column Widths -->
          `, false),
                  import_Document.default.createElement("a", { "name": `TableWithCustomColumnWidths` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Custom Column Widths"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("This example demonstrates how to set custom column widths using atomic classes or wrap props.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-12 px-10 bg-t-1 b-solid b-black`, "body": `py-12 px-10`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", { "class": `w-10` }, [
                      ...this._toNodeList(_("ID"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", { "class": `w-40` }, [
                      ...this._toNodeList(_("Name"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", { "class": `w-25` }, [
                      ...this._toNodeList(_("Department"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", { "class": `w-25` }, [
                      ...this._toNodeList(_("Salary"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`1`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`David Green`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`HR`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`$50,000`, false)
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
                        import_Document.default.createText(`2`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Anna Taylor`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`IT`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`$75,000`, false)
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
                        import_Document.default.createText(`3`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Michael Scott`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Sales`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`$65,000`, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              head="py-12 px-10 bg-t-1 b-solid b-black"
              body="py-12 px-10"
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head class="w-10">{_('ID')}</table-head>
              <table-head class="w-40">{_('Name')}</table-head>
              <table-head class="w-25">{_('Department')}</table-head>
              <table-head class="w-25">{_('Salary')}</table-head>
              <table-row>
                <table-col>1</table-col>
                <table-col>David Green</table-col>
                <table-col>HR</table-col>
                <table-col>$50,000</table-col>
              </table-row>
              <table-row>
                <table-col>2</table-col>
                <table-col>Anna Taylor</table-col>
                <table-col>IT</table-col>
                <table-col>$75,000</table-col>
              </table-row>
              <table-row>
                <table-col>3</table-col>
                <table-col>Michael Scott</table-col>
                <table-col>Sales</table-col>
                <table-col>$65,000</table-col>
              </table-row>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`

          <!-- Table with Icons -->
          `, false),
                  import_Document.default.createElement("a", { "name": `TableWithIcons` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Icons"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("This table uses element-icon components for statuses and action buttons.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-12 px-10 bg-primary tx-white`, "body": `py-12 px-10`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("User"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Email"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Status"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Actions"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`John Doe`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`john@example.com`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("span", { "class": `flex items-center` }, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("element-icon", { "name": `check-circle`, "class": `tx-success mr-6` }, []),
                          import_Document.default.createText(` Active
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
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
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Mary Jane`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`mary@example.com`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("span", { "class": `flex items-center` }, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("element-icon", { "name": `clock`, "class": `tx-warning mr-6` }, []),
                          import_Document.default.createText(` Pending
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
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
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Mike Brown`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`mike@example.com`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("span", { "class": `flex items-center` }, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("element-icon", { "name": `times-circle`, "class": `tx-error mr-6` }, []),
                          import_Document.default.createText(` Suspended
                `, false)
                        ]),
                        import_Document.default.createText(`
              `, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
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
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              head="py-12 px-10 bg-primary tx-white"
              body="py-12 px-10"
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head>{_('User')}</table-head>
              <table-head>{_('Email')}</table-head>
              <table-head>{_('Status')}</table-head>
              <table-head>{_('Actions')}</table-head>
              <table-row>
                <table-col>John Doe</table-col>
                <table-col>john@example.com</table-col>
                <table-col>
                  <span class="flex items-center">
                    <element-icon name="check-circle" class="tx-success mr-6"></element-icon> Active
                  </span>
                </table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
              <table-row>
                <table-col>Mary Jane</table-col>
                <table-col>mary@example.com</table-col>
                <table-col>
                  <span class="flex items-center">
                    <element-icon name="clock" class="tx-warning mr-6"></element-icon> Pending
                  </span>
                </table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
              <table-row>
                <table-col>Mike Brown</table-col>
                <table-col>mike@example.com</table-col>
                <table-col>
                  <span class="flex items-center">
                    <element-icon name="times-circle" class="tx-error mr-6"></element-icon> Suspended
                  </span>
                </table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`


          `, false),
                  import_Document.default.createElement("a", { "name": `TableWithStickyFooter` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Sticky Footer"))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("This table uses the `bottom` prop to make the footer sticky at the bottom.")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("layout-table", { "top": true, "bottom": true, "head": `py-12 px-10 bg-primary tx-white`, "body": `py-12 px-10`, "foot": `py-12 px-10 bg-t-2 tx-white`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("ID"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Name"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-head", {}, [
                      ...this._toNodeList(_("Score"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`1`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Alex`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`85`, false)
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
                        import_Document.default.createText(`2`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Blake`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`92`, false)
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
                        import_Document.default.createText(`3`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`Casey`, false)
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("table-col", {}, [
                        import_Document.default.createText(`78`, false)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-foot", {}, [
                      ...this._toNodeList(_("Total"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-foot", {}, [
                      import_Document.default.createText(`-`, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-foot", {}, [
                      import_Document.default.createText(`255`, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <layout-table 
              top
              bottom
              head="py-12 px-10 bg-primary tx-white"
              body="py-12 px-10"
              foot="py-12 px-10 bg-t-2 tx-white"
              odd="bg-t-0"
              even="bg-t-1"
            >
              <table-head>{_('ID')}</table-head>
              <table-head>{_('Name')}</table-head>
              <table-head>{_('Score')}</table-head>
              <table-row>
                <table-col>1</table-col>
                <table-col>Alex</table-col>
                <table-col>85</table-col>
              </table-row>
              <table-row>
                <table-col>2</table-col>
                <table-col>Blake</table-col>
                <table-col>92</table-col>
              </table-row>
              <table-row>
                <table-col>3</table-col>
                <table-col>Casey</table-col>
                <table-col>78</table-col>
              </table-row>
              <table-foot>{_('Total')}</table-foot>
              <table-foot>-</table-foot>
              <table-foot>255</table-foot>
            </layout-table>
          `)
                  ]),
                  import_Document.default.createText(`


`, false),
                  import_Document.default.createElement("a", { "name": `TableWithStickyColumns` }, []),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Sticky Columns"))
                  ]),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
  `, false),
                    ...this._toNodeList(_("This table uses `left` and `right` props to make the first and last columns sticky. Extra columns are added to demonstrate horizontal scrolling within an overflow container.")),
                    import_Document.default.createText(`
`, false)
                  ]),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("div", { "class": `overflow-auto` }, [
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("layout-table", { "top": true, "left": true, "right": true, "head": `py-12 px-10 bg-primary tx-white`, "body": `py-12 px-10`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("ID"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("First Name"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Last Name"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Email"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Phone"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Address"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("City"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Country"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Join Date"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-head", {}, [
                        ...this._toNodeList(_("Status"))
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-row", {}, [
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`1`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Emma`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Wilson`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`emma@example.com`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`+1-555-123-4567`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`123 Maple St`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`New York`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`USA`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`2024-01-15`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Active`, false)
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
                          import_Document.default.createText(`2`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Liam`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Chen`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`liam@example.com`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`+1-555-987-6543`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`456 Oak Ave`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Toronto`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Canada`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`2024-03-22`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Pending`, false)
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
                          import_Document.default.createText(`3`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Olivia`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Patel`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`olivia@example.com`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`+44-20-7946-0958`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`789 Pine Rd`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`London`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`UK`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`2023-11-10`, false)
                        ]),
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("table-col", {}, [
                          import_Document.default.createText(`Inactive`, false)
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
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
  <div class="overflow-auto">
    <layout-table 
      top
      left
      right
      head="py-12 px-10 bg-primary tx-white"
      body="py-12 px-10"
      odd="bg-t-0"
      even="bg-t-1"
    >
      <table-head>{_('ID')}</table-head>
      <table-head>{_('First Name')}</table-head>
      <table-head>{_('Last Name')}</table-head>
      <table-head>{_('Email')}</table-head>
      <table-head>{_('Phone')}</table-head>
      <table-head>{_('Address')}</table-head>
      <table-head>{_('City')}</table-head>
      <table-head>{_('Country')}</table-head>
      <table-head>{_('Join Date')}</table-head>
      <table-head>{_('Status')}</table-head>
      <table-row>
        <table-col>1</table-col>
        <table-col>Emma</table-col>
        <table-col>Wilson</table-col>
        <table-col>emma@example.com</table-col>
        <table-col>+1-555-123-4567</table-col>
        <table-col>123 Maple St</table-col>
        <table-col>New York</table-col>
        <table-col>USA</table-col>
        <table-col>2024-01-15</table-col>
        <table-col>Active</table-col>
      </table-row>
      <table-row>
        <table-col>2</table-col>
        <table-col>Liam</table-col>
        <table-col>Chen</table-col>
        <table-col>liam@example.com</table-col>
        <table-col>+1-555-987-6543</table-col>
        <table-col>456 Oak Ave</table-col>
        <table-col>Toronto</table-col>
        <table-col>Canada</table-col>
        <table-col>2024-03-22</table-col>
        <table-col>Pending</table-col>
      </table-row>
      <table-row>
        <table-col>3</table-col>
        <table-col>Olivia</table-col>
        <table-col>Patel</table-col>
        <table-col>olivia@example.com</table-col>
        <table-col>+44-20-7946-0958</table-col>
        <table-col>789 Pine Rd</table-col>
        <table-col>London</table-col>
        <table-col>UK</table-col>
        <table-col>2023-11-10</table-col>
        <table-col>Inactive</table-col>
      </table-row>
    </layout-table>
  </div>
`)
                  ]),
                  import_Document.default.createText(`


`, false),
                  import_Document.default.createElement("a", { "name": `TableWithCustomColumnWidths` }, []),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    ...this._toNodeList(_("Table with Custom Column Widths"))
                  ]),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("div", { "class": `mb-10` }, [
                    import_Document.default.createText(`
  `, false),
                    ...this._toNodeList(_("This example uses `wrap1` to `wrap5` props to set fixed column widths on `<table-col>` elements.")),
                    import_Document.default.createText(`
`, false)
                  ]),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("layout-table", { "top": true, "head": `py-12 px-10 bg-t-1 b-solid b-black`, "body": `py-12 px-10`, "odd": `bg-t-0`, "even": `bg-t-1` }, [
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("table-head", { "wrap1": true }, [
                      ...this._toNodeList(_("ID"))
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("table-head", { "wrap3": true }, [
                      ...this._toNodeList(_("Name"))
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("table-head", { "wrap2": true }, [
                      ...this._toNodeList(_("Department"))
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("table-head", { "wrap2": true }, [
                      ...this._toNodeList(_("Salary"))
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap1": true }, [
                        import_Document.default.createText(`1`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap3": true }, [
                        import_Document.default.createText(`David Green`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap2": true }, [
                        import_Document.default.createText(`HR`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap2": true }, [
                        import_Document.default.createText(`$50,000`, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap1": true }, [
                        import_Document.default.createText(`2`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap3": true }, [
                        import_Document.default.createText(`Anna Taylor`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap2": true }, [
                        import_Document.default.createText(`IT`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap2": true }, [
                        import_Document.default.createText(`$75,000`, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("table-row", {}, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap1": true }, [
                        import_Document.default.createText(`3`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap3": true }, [
                        import_Document.default.createText(`Michael Scott`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap2": true }, [
                        import_Document.default.createText(`Sales`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("table-col", { "wrap2": true }, [
                        import_Document.default.createText(`$65,000`, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
`, false)
                  ]),
                  import_Document.default.createText(`
`, false),
                  import_Document.default.createElement("ide-code", { "class": `scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white`, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
  <layout-table 
    top
    head="py-12 px-10 bg-t-1 b-solid b-black"
    body="py-12 px-10"
    odd="bg-t-0"
    even="bg-t-1"
  >
    <table-head wrap1>{_('ID')}</table-head>
    <table-head wrap3>{_('Name')}</table-head>
    <table-head wrap2>{_('Department')}</table-head>
    <table-head wrap2>{_('Salary')}</table-head>
    <table-row>
      <table-col wrap1>1</table-col>
      <table-col wrap3>David Green</table-col>
      <table-col wrap2>HR</table-col>
      <table-col wrap2>$50,000</table-col>
    </table-row>
    <table-row>
      <table-col wrap1>2</table-col>
      <table-col wrap3>Anna Taylor</table-col>
      <table-col wrap2>IT</table-col>
      <table-col wrap2>$75,000</table-col>
    </table-row>
    <table-row>
      <table-col wrap1>3</table-col>
      <table-col wrap3>Michael Scott</table-col>
      <table-col wrap2>Sales</table-col>
      <table-col wrap2>$65,000</table-col>
    </table-row>
  </layout-table>
`)
                  ]),
                  import_Document.default.createText(`
          <!-- Navigation -->
          `, false),
                  import_Document.default.createElement("nav", { "class": `flex` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/ui/components/tab.html` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }),
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Tabs")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/ui/components/tooltip.html` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Tooltips")),
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
  return __toCommonJS(table_exports);
})();
;
;module.exports = InkAPI;