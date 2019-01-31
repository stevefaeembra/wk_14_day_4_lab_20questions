import React from 'react';

const FormComponent = ({ onSubmit, msg, msgKeyUp, channelName }) => {
  return(
    <form onSubmit={onSubmit} id="channelName">
      <input type="text" onKeyUp={msgKeyUp}/>
      <input type="submit" name="submit" value="Send Message" />
    </form>
  );
};

export default FormComponent;
