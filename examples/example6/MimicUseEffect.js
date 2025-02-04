// MimicUseEffect.js

export const MimicUseEffect = (id) => {

    const createRandomColor = () => {
      return '#' + Math.floor(Math.random()*16777215).toString(16)
    }

    if(example6.MimicUseEffect.firstRender){
      console.log("I only run on first render.")
      example6.MimicUseEffect.firstRender = false
      example6.state.color = "padding: 5px; border-radius: 5px; background-color: " + createRandomColor()
    }
    
    if(example6.state.count === 3){
      console.log("I only run when count is 3.")
      example6.state.color = "padding: 5px; border-radius: 5px; background-color: " + createRandomColor()
    }

    if(example6.oldState.count2 !== example6.state.count2){
      console.log("I only run when state of count 2 changes.")
      example6.state.color = "padding: 5px; border-radius: 5px; background-color: " + createRandomColor()
    }


    return `
        <div id=${id}>
          <span class="text-dark mb-4" style="${example6.state.color}">Random Color</span></br></br>
          <div class="mb-1">
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