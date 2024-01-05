import { Component } from 'react';
import { Statistics } from './Feedbacks/Statistics/Statistics';
import { FeedbackOptions } from './Feedbacks/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => ({ [event]: prevState[event] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave your feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
