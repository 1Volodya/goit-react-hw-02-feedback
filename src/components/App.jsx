import { Component } from 'react';
import { Statistics } from './Feedbacks/Statistics/Statistics';
import { FeedbackOptions } from './Feedbacks/FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

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
        <Section title="Statistics">
          {good + neutral + bad > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
