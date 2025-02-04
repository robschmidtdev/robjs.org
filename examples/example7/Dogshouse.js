import { Dog } from './Dog.js'

export const Dogshouse = () => {
    return `
        <div class="row">
            <div class="col">
                ${Dog('dog1')}
            </div>
            <div class="col">
                ${Dog('dog2')}
            </div>
        </div>
    `
};