console.log("Hello");

import { BasicTracerProvider, ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';

const provider = new BasicTracerProvider();

// Configure span processor to send spans to the exporter
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

provider.register();

import opentelemetry from '@opentelemetry/api';

const tracer = opentelemetry.trace.getTracer('name-of-tracer');

const hubertTheSpan = tracer.startSpan("hubert");

hubertTheSpan.setAttribute("purpose", "What does this do?");

setTimeout(() => hubertTheSpan.end(),1000 );

