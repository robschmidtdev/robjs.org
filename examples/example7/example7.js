import { RobJSApp } from "../../Rob.js";
import { Dog } from "./Dog.js";
import { Dogshouse } from "./Dogshouse.js";

const example7 = new RobJSApp('example7');
example7.init('example7')

example7.Dog = {}
example7.Dog.maxSound = () => alert('Wuff')
example7.Dog.bellaSound = () => alert('Wau')

example7.registerComponent(Dog, 'dog1', [], 'Max', "example7.Dog.maxSound()")
example7.registerComponent(Dog, 'dog2', [], 'Bella', "example7.Dog.bellaSound()")

example7.initialRender(Dogshouse)