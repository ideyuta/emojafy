import React from 'react';
import emojafy from 'emojafy';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <div>
        <p>emojafy</p>
        <textarea
          onChange={e => this.setState({text: e.target.value})}
        />
        <p>{emojafy(this.state.text)}</p>
      </div>
    );
  }
}
