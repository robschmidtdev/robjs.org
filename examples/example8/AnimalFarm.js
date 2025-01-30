import { Cat } from "./Cat.js";
import { Dog } from "./Dog.js";
import { Feeder } from "./Feeder.js";

export const AnimalFarm = () => {
    return `
        <div class="row">
            <div class="col">
                ${Feeder("feeder1")}
            </div>
            <div class="col">
                ${Dog("dog1")}
            </div>
            <div class="col">
                ${Dog("dog2")}
            </div>
            <div class="col">
                ${Cat("cat1")}
            </div>
        </div>
    `
};