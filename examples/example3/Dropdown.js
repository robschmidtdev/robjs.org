import { CheckboxesAll } from "./CheckboxesAll.js";
import { CheckboxesMeat } from "./CheckboxesMeat.js";
import { CheckboxesVeggie } from "./CheckboxesVeggie.js";

export const Dropdown = (id) => {

    let checkboxes
    if (example3.state.dropdown === 'All Dishes') {
      checkboxes = `${CheckboxesAll()}`
    } else if (example3.state.dropdown === 'Meat Dishes') {
      checkboxes = `${CheckboxesMeat()}`
    } else {
      checkboxes = `${CheckboxesVeggie()}`
    }
        
    return `
      <div id=${id}>
        <select class="form-select" onchange="example3.updateState('dropdown', this.value)">
            <option value="All Dishes" ${example3.state.dropdown === 'All Dishes' && 'selected'}>All Dishes</option>
            <option value="Meat Dishes" ${example3.state.dropdown === 'Meat Dishes' && 'selected'}>Meat Dishes</option>
            <option value="Veggie Dishes" ${example3.state.dropdown === 'Veggie Dishes' && 'selected'}>Veggie Dishes</option>
        </select>
        ${checkboxes}
      </div>
    `
};