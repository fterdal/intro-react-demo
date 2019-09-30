const { React, ReactDOM } = window
const ce = React.createElement

const names = ['Finn', 'Collin', 'Priti']

const ListItem = props => {
  const { name } = props
  return ce('li', {}, name)
}
const ul = ce('ul', {}, names.map(name => ListItem({ name })))

const h2 = ce('h2', {}, 'Hello World!')
const div = ce('div', {}, h2, ul)

const app = document.getElementById('app')
ReactDOM.render(div, app)
