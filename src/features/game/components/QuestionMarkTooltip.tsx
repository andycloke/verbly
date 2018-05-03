import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import QuestionMark from 'material-ui/svg-icons/action/help';

import './QuestionMarkTooltip.css';

class QuestionMarkTooltip extends React.PureComponent {
  state = {
    showTooltip: false
  };
  showTooltip = () => this.setState({ showTooltip: true });
  hideTooltip = () => this.setState({ showTooltip: false });
  render() {
    return (
      <div className="QuestionMarkTooltip">
        <IconButton
          style={{ padding: 0, width: 30, height: 30 }}
          iconStyle={{ width: 20, color: '#ccc' }}
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
        >
          <QuestionMark />
        </IconButton>
        {this.state.showTooltip && (
          <div className="QuestionMarkTooltip__tooltip">
            100 + 0.48 x % Answers Correct x (15 - time) x Difficulty
          </div>
        )}
      </div>
    );
  }
}

export default QuestionMarkTooltip;
