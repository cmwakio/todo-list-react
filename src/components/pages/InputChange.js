import React from 'react';

class Username extends React.Component {
    state = { value: "" };
  
    changeValue(value) {
      this.setState({ value });
    }
  
    render() {
      const { value } = this.state;
      return <h1>{value}</h1>;
    }
  }
  
  function InputChange() {
    const textInput = React.useRef();
    const viewInput = React.useRef();

    function clickHandler() {
        console.log(textInput.current.value)
        viewInput.current.changeValue(textInput.current.value)
    }
  
    return (
      <div>
        <button onClick={clickHandler}>Change Username</button>
        <input type="text" ref={textInput} />
        <Username ref={viewInput} />
      </div>
    );
  }

  export default InputChange;
  
