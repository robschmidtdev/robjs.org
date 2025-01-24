import { RobJSApp } from "../../Rob.js";
import { Form, submit } from "./Form.js";

const example4 = new RobJSApp('example4');
example4.init('example4')

// register the component as usual
// attach an empty object to the app with the same name as the component to avoid naming conflicts
// then attach your custom functions to that object
example4.registerComponent(Form, 'Form', [])
example4.Form = {}
example4.Form.submit = submit

example4.render(Form)
