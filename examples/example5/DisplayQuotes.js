// DisplayQuotes.js

export const fetchQuotes = async () => {
  try {
    // Fetching quotes from Game of Thrones and passing it into a state variable
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random/10')
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    example5.updateState('quotes', data)
  } catch (error) {
    console.error('Error fetching quotes:', error)
  } 
}

export const DisplayQuotes = (id) => {

    const list = example5.state.quotes.map(quote => `<li class="list-group-item">${quote.character.name}: "${quote.sentence}"</li>`).join('');

    return `
      <div id=${id}>
        <button class="btn btn-primary mb-2" onclick="example5.DisplayQuotes.fetchQuotes()">Get Quotes</button>
        ${example5.state.quotes.length > 0 ? `<ul class="text-dark list-group list-group-flush">${list}</ul>` : ''}
      </div>
    `
};