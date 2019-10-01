const { React, ReactDOM } = window

const app = document.getElementById('app')
const Thing = () => <h1>Hello World!</h1>

ReactDOM.render(
  <Thing />,
  app
)
