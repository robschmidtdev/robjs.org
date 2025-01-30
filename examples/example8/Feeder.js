
export const Feeder = (id) => {
    return `
        <div id=${id} class="card p-2">
            <p><b>Feeder</b></p>
            <button class="btn btn-primary mb-1" onclick="example8.updateState('food', example8.state.food + 1)">Feed The Fish (${example8.state.food})</button>
            <button class="btn btn-primary" onclick="example8.updateState('freshWater', example8.state.freshWater + 1)">Give fresh water (${example8.state.freshWater})</button>
        </div>
    `
  };