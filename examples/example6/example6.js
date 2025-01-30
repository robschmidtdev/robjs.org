import { RobJSApp } from "../../Rob.js";
import { MimicUseEffect } from "./MimicUseEffect.js";
import { Test } from "./Test.js";
import { Wrapper } from "./Wrapper.js";

const example6 = new RobJSApp('example6');
example6.init('example6')

example6.defineStateVar('count', 0);
example6.defineStateVar('count2', 0);
example6.registerComponent(MimicUseEffect, 'newId', ['count', 'count2'])

const test1 = () => {
    console.log('test1')
}
const test2 = () => {
    console.log('test2')
}
example6.Test = {}
example6.Test.test1 = test1
example6.Test.test2 = test2
example6.registerComponent(Test, 'test_id', ['count'], 'Joe', "example6.Test.test1()")
example6.registerComponent(Test, 'john_id', ['count2'], 'Jane', "example6.Test.test2()") // constants

// you can assign "constants to the component" f.e. in this simple way (exactly like we did with functions before)
example6.MimicUseEffect = {}
example6.MimicUseEffect.firstRender = true

example6.initialRender(Wrapper)
