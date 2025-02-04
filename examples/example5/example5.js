import { RobJSApp } from "../../Rob.js";
import { DisplayPlanets, fetchPlanets } from "./DisplayPlanets.js";

const example5 = new RobJSApp('example5');
example5.init('example5')

example5.defineStateVar('planets', []);
example5.registerComponent(DisplayPlanets, 'dp1', ['planets'])
example5.DisplayPlanets = {}
example5.DisplayPlanets.fetchPlanets = fetchPlanets

example5.initialRender(DisplayPlanets, 'dp1')
