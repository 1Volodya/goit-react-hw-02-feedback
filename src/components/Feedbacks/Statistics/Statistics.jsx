import React from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <p>No feedback given yet</p>
      )}
    </div>
  );
};

export { Statistics };
