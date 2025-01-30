import { Feeder } from "./Feeder.js";
import { Fish } from "./Fish.js";

export const Pond = () => {
    return `
        <div class="row">
            <div class="col">
                ${Feeder("feeder1")}
            </div>
            <div class="col">
                ${Fish("fish1")}
            </div>
            <div class="col">
                ${Fish("fish2")}
            </div>
        </div>
    `
};