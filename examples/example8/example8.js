import { RobJSApp } from "../../Rob.js";
import { Feeder } from "./Feeder.js";
import { Fish } from "./Fish.js";
import { Pond } from "./Pond.js";

const example8 = new RobJSApp('example8');
example8.init('example8')

example8.defineStateVar('food', 0);
example8.defineStateVar('freshWater', 0);

example8.registerComponent(Feeder, 'feeder1', ['food', 'freshWater'])
example8.registerComponent(Fish, 'fish1', ['food', 'freshWater'], 'Nemo', 'needs food and water')
example8.registerComponent(Fish, 'fish2', ['food'], 'Horst', 'needs only food')

example8.initialRender(Pond)