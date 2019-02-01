import React, {Component} from 'react'
import io from 'socket.io-client';
import FormComponent from './FormComponent.jsx'

class ChooserComponent extends Component {

  constructor(props) {
    super(props)

    this.socket = io("http://localhost:3001");
  }


  render() {
    console.log(this.props.msg);
    return (
      <div>
        <h1>Chooser</h1>
        
        <h3>Question Sent Over: </h3>
        <p>{this.props.answer.text}</p>

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
