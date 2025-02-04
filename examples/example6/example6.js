import { RobJSApp } from "../../Rob.js";
import { MimicUseEffect } from "./MimicUseEffect.js";

const example6 = new RobJSApp('example6');
example6.init('example6')

example6.defineStateVar('count', 0);
example6.defineStateVar('count2', 0);
example6.registerComponent(MimicUseEffect, 'mue1', ['count', 'count2'])
example6.MimicUseEffect = {}
example6.MimicUseEffect.firstRender = true

example6.initialRender(MimicUseEffect, 'mue1')
