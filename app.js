const { React, ReactDOM } = window

const h2 = React.createElement('h2', {}, 'Hello World!')

const appContainer = document.getElementById('app')
ReactDOM.render(h2, appContainer)
