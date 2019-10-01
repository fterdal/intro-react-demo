import React from 'react'
import ReactDOM from 'react-dom'

// const h1 = React.createElement('h1', null, 'Hello World')
const HelloWorld = () => {
  return <h1>Hello World</h1>
}

class Instructor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
    this.handleClick = this.handleClick.bind(this)
    console.log('CONSTRUCTOR!')
  }
  handleClick() {
    this.setState({ checked: true })
  }
  render() {
    console.log('RENDER!')
    return (
      <div
        className={
          'instructor ' + (this.state.checked ? ' checked' : ' unchecked')
        }
        onClick={this.handleClick}
      >
        <h2>{this.props.name}</h2>
        <img src={`https://robohash.org/${this.props.name}?size=100x100`} />
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(
  <Instructor name="Finn" />,
  app
)
