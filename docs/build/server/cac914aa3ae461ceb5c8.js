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

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\docs\markup-syntax.ink
  var markup_syntax_exports = {};
  __export(markup_syntax_exports, {
    default: () => MarkupSyntax_cac914aa3ae461ceb5c8
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

  // ink-document-server-resolver:C:\Users\Win 10\dev\ink\packages\ink-web\src\pages\docs\markup-syntax.ink
  var MarkupSyntax_cac914aa3ae461ceb5c8 = class extends import_Document2.default {
    id() {
      return "cac914aa3ae461ceb5c8";
    }
    styles() {
      return `@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`;
    }
    template() {
      const url = "/docs/markup-syntax.html";
      const title = _("Markup Syntax - Ink reactive web component template engine.");
      const description = _("Learn how to write markup in Ink.");
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
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#imports` }, [
                      ...this._toNodeList(_("Imports"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#styles` }, [
                      ...this._toNodeList(_("Styles"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#scripts` }, [
                      ...this._toNodeList(_("Scripts"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `block tx-t-0`, "href": `#markup` }, [
                      ...this._toNodeList(_("Markup"))
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("nav", { "class": `pl-20` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#tagnames` }, [
                        ...this._toNodeList(_("Tag Names"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#attributes` }, [
                        ...this._toNodeList(_("Attributes"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#conditionals` }, [
                        ...this._toNodeList(_("Conditionals"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#iterations` }, [
                        ...this._toNodeList(_("Iterations"))
                      ]),
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("a", { "class": `block tx-t-1`, "href": `#trycatch` }, [
                        ...this._toNodeList(_("Try/Catch"))
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
                  import_Document.default.createElement("h1", { "class": `tx-primary tx-upper tx-30 py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Markup Syntax")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Components are the building blocks of Ink files. Documents 
            and page level markup are written in 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`.ink`, false)
                    ]),
                    import_Document.default.createText(` files. Components 
            and templates are written in 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`.ink`, false)
                    ]),
                    import_Document.default.createText(` files. In both 
            cases, the code is written in a superset of HTML.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The four sections that make up a ink file \u2014 imports, 
            script, styles and markup \u2014 are all optional and can be 
            used in any order.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Code Structure`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <!-- imports go here -->

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              </script>
              
              <!-- HTML goes here -->
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `imports` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Imports")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Imports are used to include additional components, templates 
            and stylesheets in the current component. Components can 
            be imported as a `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`template`, false)
                    ]),
                    import_Document.default.createText(` or 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`component`, false)
                    ]),
                    import_Document.default.createText(` type.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Import Examples`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/prism.min.css" />
              <link rel="stylesheet" type="text/css" href="/styles/layout.css" />
              <link rel="import" type="template" href="@/components/html-head.ink" />
              <link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              </script>
              
              <!-- HTML goes here -->
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
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`rel`, false)
                    ]),
                    import_Document.default.createText(` attribute 
            specifies the relationship between the current document and 
            the linked resource. 
            
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`rel="import"`, false)
                    ]),
                    import_Document.default.createText(` denotes
            that the imported resource is a component or template.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`type`, false)
                    ]),
                    import_Document.default.createText(` 
            attribute specifies the type of the linked resource. 
            
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`type="component"`, false)
                    ]),
                    import_Document.default.createText(` 
            imports a web component that can be used as regular markup
            with attributes and children. 
            
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`type="template"`, false)
                    ]),
                    import_Document.default.createText(` 
            imports a template partial that can be included in the current 
            markup. Template partials do not process attributes or children
            if given.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`href`, false)
                    ]),
                    import_Document.default.createText(` attribute specifies
            the URL of the linked resource. The 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      import_Document.default.createText(`name`, false)
                    ]),
                    import_Document.default.createText(`
            attribute specifies the tag name of the imported component or template.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `styles` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Styles")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            CSS styles inside a `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<style>`)
                    ]),
                    import_Document.default.createText(` 
            block enables the native `, false),
                    import_Document.default.createElement("a", { "target": `_blank`, "href": `https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM` }, [
                      import_Document.default.createText(`shadow DOM`, false)
                    ]),
                    import_Document.default.createText(` and will be scoped only to that component. 
            Additionally styles defined outside of the component such as 
            global styles will not affect the component.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            External stylesheets can be imported using the 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<link>`)
                    ]),
                    import_Document.default.createText(` tag or using 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`@import()`)
                    ]),
                    import_Document.default.createText(` CSS directive. 
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can use host selectors to style an element from within 
            a component. The `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`:host`)
                    ]),
                    import_Document.default.createText(` 
            pseudo-class always applies styles to the root element of the 
            web component.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Using :host`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <style>
                :host {
                  display: block;
                }
              </style>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can also add conditional styles using the 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`:host`)
                    ]),
                    import_Document.default.createText(` selector function. 
            This can be used to style the host so long as it matches the 
            given selector. For example, it can be used to select for 
            hosts that have a given attribute or class.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `:host Conditionals`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <style>
                :host([active]) {
                  background-color: #333;
                  color: #FFF;
                }
                :host(.active) {
                  background-color: #333;
                  color: #FFF;
                }
              </style>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `scripts` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Scripts")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<script>`)
                    ]),
                    import_Document.default.createText(` block is used 
            to write TypeScript logic for the component. The script block 
            can be used to define variables, functions, and event listeners.
            Variables declared (or imported) at the top level are 
            'visible' from the component's markup. 
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Top-Level Variables`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <script>
                const title = 'Hello World';
              </script>

              <h1>{title}</h1>
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
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<script>`)
                    ]),
                    import_Document.default.createText(` block can also 
            be used to import variables from other components to be used
            in the markup.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Importing Files`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <script>
                import getTitle from './getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can use `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`@/`)
                    ]),
                    import_Document.default.createText(` to prefix the 
            current working directory. This is useful when importing
            files completely in a separate directory in your project
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `@ Imports`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <script>
                import getTitle from '@/data/getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `markup` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h2", { "class": `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Markup")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            In order to be closer to the native, Ink follows the same 
            standards and conventions as HTML5 web components. Ink 
            components are compiled to native web components that possibly 
            can be used in other projects any modern browser.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `tagnames` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h3", { "class": `tx-t-1 tx-upper tx-22 pt-40 pb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Tag Names")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            For web components it's recommended that tag names must have 
            at least one dash (-) in them. As such you probably want to 
            name your element with two distinct words like 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`i18n-translate`)
                    ]),
                    import_Document.default.createText(`. You can 
            use as many dashes as you want, you're not limited to one. 
            Some specific rules to follow in order to make a valid tag 
            name:
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ul", {}, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              It must use all lowercase characters of the alphabet (a-z).
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              It must contain at least one dash (-). Ink will 
              auto prefix component names based on your configuration.
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              It must not be an already reserved tag name including 
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`annotation-xml`, false)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`color-profile`, false)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`font-face`, false)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`font-face-src`, false)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`font-face-uri`, false)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`font-face-format`, false)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`font-face-name`, false)
                      ]),
                      import_Document.default.createText(`, and 
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        import_Document.default.createText(`missing-glyph`, false)
                      ]),
                      import_Document.default.createText(`.
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              It must not contain symbols, like =, @, $.
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              It can contain underscores, and numbers.
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              It can contain characters from different alphabets, 
              such as \xE9, \xF0, \xF6, \u7231.
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Additionally, Ink works best with correct markup. The 
            following standards should be followed:
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ul", {}, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              Self closing tags like 
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<img />`)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<link />`)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<meta />`)
                      ]),
                      import_Document.default.createText(`,
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<input />`)
                      ]),
                      import_Document.default.createText(`
              must have a slash before the closing.
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              When using tables, rows should be wrapped in a 
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<tbody>`)
                      ]),
                      import_Document.default.createText(` tag and cells
              should be wrapped in a `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<tr>`)
                      ]),
                      import_Document.default.createText(` 
              tag. ie. `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<table><tbody><tr><td>`)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("i18n-translate", { "li": true, "trim": true, "class": `my-10 tx-lh-24` }, [
                      import_Document.default.createText(`
              When using lists, items should be wrapped in a 
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<ul>`)
                      ]),
                      import_Document.default.createText(` or 
              `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<ol>`)
                      ]),
                      import_Document.default.createText(` tags.
              ie. `, false),
                      import_Document.default.createElement("ide-code", { "inline": true }, [
                        ...this._toNodeList(`<ul><li>`)
                      ]),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("element-alert", { "solid": true, "curved": true, "secondary": true, "class": `my-20 tx-lh-24` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("element-icon", { "name": `exclamation-triangle` }),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("strong", {}, [
                      import_Document.default.createText(`Warning:`, false)
                    ]),
                    import_Document.default.createText(` Any markup auto corrected by browser will cause data syncing 
            issues with Ink.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Ink components can loosely be self closing
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<i18n-translate />`)
                    ]),
                    import_Document.default.createText(`
            or expressed as a block
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<i18n-translate></i18n-translate>`)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `attributes` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h3", { "class": `tx-t-1 tx-upper tx-22 pt-40 pb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Attributes")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Markup Expressions` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <a title={title} {href} {...attributes}>
                {title}
              </a>
              <i18n-translate title=title>
                {detail}
              </i18n-translate>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Attributes can be bound to expressions using the 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`{}`)
                    ]),
                    import_Document.default.createText(` syntax. 
            Expressions can be variables, functions, or any valid 
            JavaScript expression. By default, attributes work exactly 
            like their HTML counterparts.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "trim": true }, [
                      ...this._toNodeList(`
              <button type="button" disabled>Submit</button>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Traditional HTML attributes can be assigned string values or 
            no value evaluates as `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`true`)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "trim": true }, [
                    ...this._toNodeList(`
            <a title={title}>Click</a>
          `)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Attributes can be assigned variable names.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "trim": true }, [
                    ...this._toNodeList(`
            <a title=title>Click</a>
          `)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Variable names do not need to be wrapped in curly braces
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`{}`)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "trim": true }, [
                    ...this._toNodeList(`
            <a {title}>Click</a>
          `)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Attributes with the same name as a variable can be assigned
            by just wrapping curly braces. ie. 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`{title}`)
                    ]),
                    import_Document.default.createText(`.
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
                const attributes = { target: '_blank' };
              </script>
              <a {...attributes}>Click</a>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Spread operators can be used to assign multiple attributes.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <script>
                let count = 10
                const metadata = { foo: 'bar', baz: 1, qux: true };
                const data = () => metadata
              </script>
              <a {count} get={data} data-meta={metadata} disable={count < 10}>
                Click
              </a>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can assign any valid JavaScript expression to an attribute.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `conditionals` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h3", { "class": `tx-t-1 tx-upper tx-22 pt-40 pb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Conditionals")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Conditionals`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <elif true={count < 5} />
                <p>Count is less than 5</p>
              <else />
                <p>Count is between 5 and 10</p>
              </if>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            Conditionals can be used to show or hide elements based on 
            the value of a variable.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              </if>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The basic syntax for an if statement looks like this and can be 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`truesy`)
                    ]),
                    import_Document.default.createText(` or 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`falsey`)
                    ]),
                    import_Document.default.createText(`.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <if false={count > 10}>
                <p>Count is not greater than 10</p>
              </if>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can also use the `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`false`)
                    ]),
                    import_Document.default.createText(`
            attribute to negate the condition.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <else />
                <p>Count is less than or equal to 10</p>
              </if>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can use the `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`else`)
                    ]),
                    import_Document.default.createText(` block to 
            show content when the condition is false.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <if true={count > 10}>
              <p>Count is greater than 10</p>
            <elif true={count < 5} />
              <p>Count is less than 5</p>
            </if>
          `)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            You can use the `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`elif`)
                    ]),
                    import_Document.default.createText(` block to 
            show content when the previous condition is false.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `iterations` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h3", { "class": `tx-t-1 tx-upper tx-22 pt-40 pb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Iterations")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Each`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <each key=index value=article from=articles>
                <h1>#{index + 1} {article.title}</h1>
                <p>{article.body}</p>
              </each>
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
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<each>`)
                    ]),
                    import_Document.default.createText(` block can be used 
            to iterate over an array of items or objects.
            The `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`from`)
                    ]),
                    import_Document.default.createText(` attribute value is 
            required and can be an array, object or JavaScript expression 
            that evaluates to an array or object. Both the 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`key`)
                    ]),
                    import_Document.default.createText(` and 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`value`)
                    ]),
                    import_Document.default.createText(` attributes are optional.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("div", { "class": `scroll-auto bg-black` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <each value={article} from={articles}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The value of `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`value`)
                    ]),
                    import_Document.default.createText(`, in this 
            case `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`article`)
                    ]),
                    import_Document.default.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 12 }, [
                    ...this._toNodeList(`
            <each key={index} from={[1, 2, 3]}>
              <h1>#{index} ???</h1>
            </each>
          `)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, [
                    import_Document.default.createText(`
            The value of `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`key`)
                    ]),
                    import_Document.default.createText(`, in this 
            case `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`index`)
                    ]),
                    import_Document.default.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("a", { "name": `trycatch` }, []),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h3", { "class": `tx-t-1 tx-upper tx-22 pt-40 pb-20` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(_("Try/Catch")),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("ide-app", { "title": `Try/Catch Example`, "class": `py-20` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, [
                      ...this._toNodeList(`
              <try>
                <p>{mayCauseError()}</p>
              <catch error={e} />
                <p>Error: {e.message}</p>
              </try>
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
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<try><catch>`)
                    ]),
                    import_Document.default.createText(` block can 
            be used to catch errors that occur in the block. The 
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<catch>`)
                    ]),
                    import_Document.default.createText(` block is required and 
            can be used to handle the error.

            The value of `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`error`)
                    ]),
                    import_Document.default.createText(`, in the  
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`<catch>`)
                    ]),
                    import_Document.default.createText(` block in this case
            `, false),
                    import_Document.default.createElement("ide-code", { "inline": true }, [
                      ...this._toNodeList(`e`)
                    ]),
                    import_Document.default.createText(` is an 
            `, false),
                    import_Document.default.createElement("ide-code", { "lang": `js`, "inline": true }, [
                      ...this._toNodeList(`Error`)
                    ]),
                    import_Document.default.createText(` object
            that can only be used with in the block. 
          `, false)
                  ]),
                  import_Document.default.createText(`

          `, false),
                  import_Document.default.createElement("nav", { "class": `flex` }, [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/docs/getting-started.html` }, [
                      import_Document.default.createText(`
              `, false),
                      import_Document.default.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }),
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("Getting Started")),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/docs/state-management.html` }, [
                      import_Document.default.createText(`
              `, false),
                      ...this._toNodeList(_("State Management")),
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
  return __toCommonJS(markup_syntax_exports);
})();
;
;module.exports = InkAPI;