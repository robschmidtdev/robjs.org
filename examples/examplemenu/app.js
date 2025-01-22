import { RobJSApp } from "../../Rob.js";
import { Menu } from "./Menu.js";

const app = new RobJSApp('examplemenu');
app.init('app')
app.defineStateVar('menu', 'menuPoint1');
app.registerComponent(Menu, 'Menu', ['menu'])
app.render(Menu)