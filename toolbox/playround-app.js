/* eslint-disable function-paren-newline */
const { React, ReactDOM } = window
const ce = React.createElement

const instructors = [
  { id: 1, name: 'Finn' },
  { id: 2, name: 'Collin' },
  { id: 3, name: 'Priti' },
]

const ListItem = props => {
  const { name, key } = props
  return ce('li', { key }, name)
}
const ul = ce(
  'ul',
  null,
  instructors.map(instructor =>
    ListItem({ name: instructor.name, key: instructor.id })
  )
)

class LastClicked extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lastClicked: 'Never Clicked' }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      lastClicked: new Date().toTimeString(),
    })
  }
  render() {
    return ce(
      'div',
      null,
      ce('p', null, `Last Clicked: ${this.state.lastClicked}`),
      ce('button', { onClick: this.handleClick }, `CLICK ME!`)
    )
  }
}

const h2 = ce('h2', null, 'Hello World!')
const div = ce('div', null, h2, ul, ce(LastClicked))

const app = document.getElementById('app')
ReactDOM.render(div, app)
