import React, {Component, Fragment} from 'react'
import FormComponent from './FormComponent.jsx'

class GuesserComponent extends Component {

  render() {
    return (
      <Fragment>
        <h1>Guesser</h1>
        <FormComponent
          onSubmit={this.props.onSubmit}
          msg={this.props.msg}
          msgKeyUp={this.props.msgKeyUp}
          channelName="submit-question"
        />
      </Fragment>
    )
  }
  

}

export default GuesserComponent
