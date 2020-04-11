import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const NoResult = () => (
  <div>
    <p>No feedback given</p>
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  const countAverage = (good, neutral, bad) => {
    const initialValue = 0;
    const average = (good - bad) / (good + bad + neutral);

    if (good === 0 && bad === 0 && neutral === 0) {
      return initialValue;
    } else {
      return average;
    }
  };
  const countPositive = (good, neutral, bad) => {
    const initialValue = 0;
    const positivePercentage = (good / (good + bad + neutral)) * 100 + '%';

    if (good === 0 && bad === 0 && neutral === 0) {
      return initialValue;
    } else {
      return positivePercentage;
    }
  };

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine value={good} text="good" />
          <StatisticLine value={neutral} text="neutral" />
          <StatisticLine value={bad} text="bad" />
          <StatisticLine value={good + bad + neutral} text="all" />
          <StatisticLine
            value={countAverage(good, neutral, bad)}
            text="average"
          />
          <StatisticLine
            value={countPositive(good, neutral, bad)}
            text="positive"
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      {good + bad + neutral === 0 ? (
        <NoResult />
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
