import React from 'react';

const FormComponent = ({ onSubmit, msg, msgKeyUp }) => {
  return(
    <form onSubmit={onSubmit}>
      <input type="text" onKeyUp={msgKeyUp}/>
      <input type="submit" name="submit" value="Send Message" />
    </form>
  );
};

export default FormComponent;
