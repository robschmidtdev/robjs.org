import { RobJSApp } from "../../Rob.js";
import { Menu } from "./Menu.js";

const example2 = new RobJSApp('example2');
example2.init('example2')
example2.defineStateVar('menu', 'menuPoint1');
example2.registerComponent(Menu, 'menu1', ['menu'])
example2.initialRender(Menu, 'menu1')