import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props =>
        <div>
            {props.text} {props.points[props.id]}
        </div>

const Score = props =>
        <div>
          <h1>Anecdote with most votes</h1>
          <p>{props.value}</p>
        </div>

const Button = (props) =>
    <button onClick={props.handleClick}>{props.text}</button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [id, setId] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])


  const getNewAnecdote = () => {
    let index = Math.floor((Math.random() * 6));
    let randomAnecdote = props.anecdotes[index]
    setSelected(randomAnecdote)
    setId(index)
  }

  const giveVote = () => {
    const newVote = [...points]
    newVote[id]+=1
    setPoints(newVote)
    console.log(points)
  }

  const getHighest = () => {
    let score = points.indexOf(Math.max(...points));
    let show = props.anecdotes[score]
    let highscore = points[score]
    return `${show} Has ${highscore} votes`
  }
  
  let index = Math.floor((Math.random() * 6));
  let z = index + 1
  
  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      {props.anecdotes[id]}
      <br />
      <Display text="Votes" points={points} id={id}/>
      <br />
      <Button handleClick={giveVote} text='vote'/>
      <Button handleClick={getNewAnecdote} text='next anecdote' />
      <Score value={getHighest()} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)
