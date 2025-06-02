import { RobJSApp } from "../../Rob.js";
import { DisplayQuotes, fetchQuotes } from "./DisplayQuotes.js";

const example5 = new RobJSApp('example5');
example5.init('example5')

example5.defineStateVar('quotes', []);
example5.registerComponent(DisplayQuotes, 'dp1', ['quotes'])
example5.DisplayQuotes = {}
example5.DisplayQuotes.fetchQuotes = fetchQuotes

example5.initialRender(DisplayQuotes, 'dp1')
