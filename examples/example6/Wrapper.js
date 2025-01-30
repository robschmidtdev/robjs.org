import { MimicUseEffect } from "./MimicUseEffect.js";
import { Test } from "./Test.js";

export const Wrapper = (id) => {
    return `
        <div id=${id}>
            ${MimicUseEffect("newId")}
            ${Test("test_id", undefined, undefined)}
            ${Test("john_id", "John", 20)} 
        </div>
    `
};

//TODO kann man denn hier auf die argumente (außer natürlich die id) verzichten? sondern nur bei registrierung
// -> dazu beim initalRender schauen