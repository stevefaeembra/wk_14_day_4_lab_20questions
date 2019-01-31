import React, {Component} from 'react';
import FormComponent from './FormComponent.jsx'

class GuesserComponent extends Component {

  render() {
    return (
      <div>
        <h1>Guesser</h1>
        <FormComponent
          onSubmit={this.props.onSubmit}
          msg={this.props.msg}
          msgKeyUp={this.props.msgKeyUp}
          channelName="submit-question"
        />
      </div>
    )
  }
}

export default GuesserComponent;
