import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0]);

  const setNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6));
  };

  const giveVote = () => {
    let copy = [...points];
    copy[selected] += 1;

    setPoints(copy);
  };

  const findHighestNumber = () => {
    const maxNumber = Math.max(...points);
    return maxNumber;
  };

  const findHighestIndex = () => {
    const maxNumberIndex = points.indexOf(Math.max(...points));
    return maxNumberIndex;
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <br />
      <Button handleClick={giveVote} text="vote" />
      <Button handleClick={setNextAnecdote} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <p>has {findHighestNumber()} votes</p>
      {props.anecdotes[findHighestIndex()]}
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
