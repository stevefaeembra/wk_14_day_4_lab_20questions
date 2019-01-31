import React, {Component, Fragment} from 'react'
import FormComponent from './FormComponent.jsx'

class ChooserComponent extends Component {

  render() {
    return (
      <Fragment>
        <h1>Chooser</h1>
        <FormComponent
          onSubmit={this.props.onSubmit}
          msg={this.props.msg}
          msgKeyUp={this.props.msgKeyUp}
          channelName="submit-answer"
        />
      </Fragment>
    )
  }

}

export default ChooserComponent
