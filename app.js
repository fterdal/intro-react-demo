/* eslint-disable function-paren-newline */
const { React, ReactDOM } = window
const ce = React.createElement

const dummyInstructors = [
  { id: 1, name: 'Finn' },
  { id: 2, name: 'Collin' },
  { id: 3, name: 'Priti' },
]

// Class React Component
class Instructor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }
  render() {
    const checkedStatus = this.state.checked ? 'checked' : 'unchecked'
    const { name } = this.props
    return ce(
      'div',
      {
        className: ['instructor', checkedStatus].join(' '),
        onClick: () => this.setState({ checked: true }),
      },
      ce('p', null, name),
      ce('img', { src: `https://robohash.org/${name}?size=200x200` })
    )
  }
}

// Functional React Component
const InstructorList = props => {
  const { instructors } = props
  return ce(
    'div',
    { className: 'instructor-list' },
    instructors.map(instructor =>
      ce(Instructor, { name: instructor.name, key: instructor.id })
    )
  )
}

const div = ce(
  'div',
  null,
  ce(InstructorList, { instructors: dummyInstructors })
)

const app = document.getElementById('app')
ReactDOM.render(div, app)
