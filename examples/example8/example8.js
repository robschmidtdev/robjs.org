import { RobJSApp } from "../../Rob.js";
import { AnimalFarm } from "./AnimalFarm.js";
import { Cat } from "./Cat.js";
import { Dog } from "./Dog.js";
import { Feeder } from "./Feeder.js";

const example8 = new RobJSApp('example8');
example8.init('example8')

example8.defineStateVar('food', 0);
example8.defineStateVar('extraFood', 0);

example8.registerComponent(Feeder, 'feeder1', ['food', 'extraFood'])
example8.registerComponent(Dog, 'dog1', ['food'], 'Max')
example8.registerComponent(Dog, 'dog2', ['food', 'extraFood'], 'Milo')
example8.registerComponent(Cat, 'cat1', ['food', 'extraFood'], 'Misty')

example8.initialRender(AnimalFarm)