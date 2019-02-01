import React from 'react';
import io from 'socket.io-client';
import GuesserComponent from '../components/GuesserComponent';
import ChooserComponent from '../components/ChooserComponent';


class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerType: null,
      msg: null,
      answer: {}
    }
    this.socket = io("http://localhost:3001");
    this.addAnswer = this.addAnswer.bind(this);
    this.msgKeyUp = this.msgKeyUp.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.socket.on('recieve-question', this.addAnswer.bind(this));
  }

  addAnswer(answer) {
    this.setState({answer:answer});
  }

  msgKeyUp(event) {
    this.setState({msg:event.target.value})
  }

  submitForm(event) {
    event.preventDefault();
    const channelName = event.target.id;
    if (this.state.msg) {
      const newMessage = {text:this.state.msg};
      this.socket.emit(channelName, newMessage);
      this.setState({msg: null})
    }
  }

  selectPlayerType(playerType) {
    this.setState({ playerType })
  }

  render() {

    switch(this.state.playerType) {
      case "PLAYERTYPE_GUESSER":
        return (
          <GuesserComponent
            onSubmit={this.submitForm}
            msg={this.state.msg}
            msgKeyUp={this.msgKeyUp}
          />
        )
      case "PLAYERTYPE_CHOOSER":
        return (
          <ChooserComponent
            onSubmit={this.submitForm}
            msg={this.state.msg}
            answer={this.state.answer}
            msgKeyUp={this.msgKeyUp}
          />
        )
      default:
        return (
          <div id="homeWrapper">
            <h1 className="title">20 Questions</h1>
            <h3 className="title">Choose your player</h3>
            <button onClick={()=>{this.selectPlayerType("PLAYERTYPE_GUESSER")}}>
              Guesser
            </button>
            <button onClick={()=>{this.selectPlayerType("PLAYERTYPE_CHOOSER")}}>
              Chooser
            </button>
          </div>
        )
    }

  }
}

export default GameContainer;
