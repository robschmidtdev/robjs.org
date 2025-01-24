import { CheckboxesMeat } from "./CheckboxesMeat.js";
import { CheckboxesVeggie } from "./CheckboxesVeggie.js";

export const CheckboxesAll = () => {
    return `
      ${CheckboxesMeat()}
      ${CheckboxesVeggie()}
    `
};