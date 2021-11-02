"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello");
var sdk_trace_base_1 = require("@opentelemetry/sdk-trace-base");
var provider = new sdk_trace_base_1.BasicTracerProvider();
// Configure span processor to send spans to the exporter
provider.addSpanProcessor(new sdk_trace_base_1.SimpleSpanProcessor(new sdk_trace_base_1.ConsoleSpanExporter()));
provider.register();
var api_1 = __importDefault(require("@opentelemetry/api"));
var tracer = api_1.default.trace.getTracer('name-of-tracer');
var hubertTheSpan = tracer.startSpan("hubert");
hubertTheSpan.setAttribute("purpose", "What does this do?");
setTimeout(function () { return hubertTheSpan.end(); }, 1000);
