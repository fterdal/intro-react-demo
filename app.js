const { React, ReactDOM } = window
const ce = React.createElement

const instructors = [
  { id: 1, name: 'Finn' },
  { id: 2, name: 'Collin' },
  { id: 3, name: 'Priti' },
]

const ListItem = props => {
  const { name, key } = props
  return ce('li', { key: key }, name)
}
const ul = ce(
  'ul',
  null,
  instructors.map(instructor =>
    ListItem({ name: instructor.name, key: instructor.id })
  )
)

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  handleChange() {
    console.log('CHANGING COUNTER')
    this.setState({ counter: 1000 })
  }
  render() {
    return ce(
      'div',
      null,
      ce('p', null, `Counter: ${this.state.counter}`),
      ce('button', { onChange: this.handleChange }, `Set Counter to 1000`)
    )
  }
}

const h2 = ce('h2', null, 'Hello World!')
const div = ce('div', null, h2, ul, ce(Counter))

const app = document.getElementById('app')
ReactDOM.render(div, app)
