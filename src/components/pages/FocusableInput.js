import React from 'react';

class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}
  
  const TextInput = React.forwardRef((props, ref) => {
    return <Input {...props} forwardedRef={ref} />
  });
  
  class FocusableInput extends React.Component {
    
    ref = React.createRef()
  
    render() {
      return <React.Fragment>
        <TextInput ref={this.ref} />
        <input type="button" value="Change Focus" className="btn" style={{ flex: '1' }}  onClick={this.props.changeFocus} />
      </React.Fragment> 
    }
  
    // When the focused prop is changed from false to true, 
    // and the input is not focused, it should receive focus.
    // If focused prop is true, the input should receive the focus.
    // Implement your solution below:
    componentDidUpdate(prevProps) {
      if(!prevProps.focused && this.props.focused){
        this.ref.current.focus()
      } else {
        this.ref.current.blur()
      }
    }
    
    componentDidMount() {
      if(this.props.focused) {
        this.ref.current.focus()
      }
      
    }
  }

  export default FocusableInput;
  
