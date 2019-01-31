import React, {Component} from 'react'
import FormComponent from './FormComponent.jsx'

class ChooserComponent extends Component {

  render() {
    return (
      <div>
        <h1>Chooser</h1>
        <FormComponent
          onSubmit={this.props.onSubmit}
          msg={this.props.msg}
          msgKeyUp={this.props.msgKeyUp}
          channelName="submit-answer"
        />
      </div>
    )
  }

}

export default ChooserComponent;
