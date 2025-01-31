import { RobJSApp } from "../../Rob.js";
import { Form, post } from "./Form.js";

const example4 = new RobJSApp('example4');
example4.init('example4')

example4.Form = {}
example4.Form.post = post
example4.registerComponent(Form, 'form1', [])

example4.initialRender(Form, 'form1')
