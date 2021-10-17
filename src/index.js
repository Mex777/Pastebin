import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class TextInp extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea type="text" value={this.state.value} className="text" placeholder="Place your text here" onChange={this.handleChange}></textarea>
        <button type="submit" onClick={this.handleSubmit}> Submit </button>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div className="textInp">
        <TextInp />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));