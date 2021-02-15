import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <div>
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>

            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    );
    
  }
}

export default LikeButton;