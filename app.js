/* eslint-disable function-paren-newline */
const { React, ReactDOM } = window
const ce = React.createElement

const instructors = [
  { id: 1, name: 'Finn' },
  { id: 2, name: 'Collin' },
  { id: 3, name: 'Priti' },
]

// Class React Component
class Instructor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true,
    }
  }
  render() {
    const checkedStatus = this.state.checked ? 'checked' : 'unchecked'
    return ce(
      'div',
      { className: ['instructor', checkedStatus].join(' ') },
      '[INSTRUCTOR NAME HERE]',
      ce(
        'img',
        { src: 'https://robohash.org/finn?size=200x200' },
      )
    )
  }
}

// Functional React Component
// const InstructorList = () => {
//   return ce(
//     'div',
//     { className: 'instructor-list' }
//   )
// }

const div = ce('div', null, ce(Instructor))

const app = document.getElementById('app')
ReactDOM.render(div, app)
