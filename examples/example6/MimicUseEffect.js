// MimicUseEffect.js

import { Test } from "./Test.js";

export const MimicUseEffect = (id) => {

  // console.log(id)

    if(example6.MimicUseEffect.firstRender){
      console.log("I only run on first render.")
      example6.MimicUseEffect.firstRender = false
    }
    
    if(example6.state.count === 3){
      // console.log(Date.now())
      console.log("I only run when count is 3.")
    }

    if(example6.oldState.count2 !== example6.state.count2){
      console.log("I only run when state of count 2 changes.")
    }


    return `
        <div id=${id}>
          <div class="mb-4">
            <span class="text-dark">Count 1: </span>
            <button type="button" class="btn btn-danger" onclick="example6.updateState('count', example6.state.count - 1)">-</button>
              <span class="text-dark">${example6.state.count}</span>
            <button type="button" class="btn btn-success" onclick="example6.updateState('count', example6.state.count + 1)">+</button>
          </div>
          <div>
            <span class="text-dark">Count 2: </span>
            <button type="button" class="btn btn-danger" onclick="example6.updateState('count2', example6.state.count2 - 1)">-</button>
              <span class="text-dark">${example6.state.count2}</span>
            <button type="button" class="btn btn-success" onclick="example6.updateState('count2', example6.state.count2 + 1)">+</button>
          </div>
        </div>
    `
};