
export const Feeder = (id) => {
    return `
        <div id=${id} class="card p-2">
            <button class="btn btn-primary mb-1" onclick="example8.updateState('food', example8.state.food + 1)">Give food (${example8.state.food})</button>
            <button class="btn btn-primary" onclick="example8.updateState('extraFood', example8.state.extraFood + 1)">Give extra food (${example8.state.extraFood})</button>
        </div>
    `
  };