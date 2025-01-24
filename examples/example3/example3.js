import { RobJSApp } from "../../Rob.js";
import { Dropdown } from "./Dropdown.js";

const example3 = new RobJSApp('example3');
example3.init('example3')
example3.defineStateVar('dropdown', 'All Dishes');
example3.registerComponent(Dropdown, 'Dropdown', ['dropdown'])
example3.render(Dropdown)
