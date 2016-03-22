import React from 'react';
import emojafy from 'emojafy';

/**
 * App
 */
export default class App extends React.Component {

  /**
   * constructor
   *
   * @param {Object} props - props
   */
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
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
