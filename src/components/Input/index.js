import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      error: props.error || "",
    };
  }


  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, error } = this.state;
    const { locked= false, value, label } = this.props;
    const fieldClassName = `field  ${active && 'active'}`;

    return (
      <div className={fieldClassName}>
        <input
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.props.onChange}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}

export default Input;
