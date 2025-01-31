import { RobJSApp } from "../../Rob.js";

const example1 = new RobJSApp('example1');
example1.init('example1')
example1.defineStateVar('count', 0);

const Counter = (id) => {

    let style = "padding: 5px; border-radius: 5px;"
    if(example1.state.count >= 3 && example1.state.count < 6){
      style = style += "background-color: green;"
    } else if (example1.state.count >= 6){
      style = style += "background-color: red;"
    } else {
      style = style += "background-color: yellow;"
    }

    return `
      <div id=${id}>
        <p class="text-dark" style="${style}">I turn green after count is 3 and red after count is 6.</p>
        <button type="button" class="btn btn-danger" onclick="example1.updateState('count', example1.state.count - 1)">-</button>
          <span class="text-dark">${example1.state.count}</span>
        <button type="button" class="btn btn-success" onclick="example1.updateState('count', example1.state.count + 1)">+</button>
      </div>
    `
}

example1.registerComponent(Counter, 'counter1', ['count'])
example1.initialRender(Counter, 'counter1')