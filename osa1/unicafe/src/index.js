import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props =>
        <div>
            <table>
                <tbody>
                <tr>
                <td width='100' >{props.text}</td>
                <td>{props.value}</td>
                </tr>
                </tbody>
            </table>
        </div>

const Button = (props) =>
    <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
    const getSum = () => {
        return props.bad + props.good + props.neutral
    }
    const getAverage = () => {
        let total = props.bad + props.good + props.neutral
        let goodClick = 1
        let badClick = -1
        let goodClickAmount = props.good * goodClick
        let badClickAmount = props.bad * badClick
        return (goodClickAmount + badClickAmount) / total
    }
    const getPositivePercentage = () => {
        let total = props.bad + props.good + props.neutral
        return props.good / total * 100 + ' %'
    }

    if (props.bad + props.good + props.neutral === 0) {
        return (
            <div>
                <h1>Statistiikkaa</h1>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistiikkaa</h1>
            <Display text="hyvä " value={props.good} />
            <Display text="neutraali" value={props.neutral} />
            <Display text="huono" value={props.bad} />
            <Display text="yhteensä" value={getSum()} />
            <Display text="keskiarvo" value={getAverage()} />
            <Display text="positiivisia" value={getPositivePercentage()} />
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToGoodValue = (newValue) => {
        setGood(newValue)
    }
    const setToNeutralValue = (newValue) => {
        setNeutral(newValue)
    }
    const setToBadValue = (newValue) => {
        setBad(newValue)
    }

    return (
        <div>
            <h1>Anna palautetta</h1>
            <Button handleClick={() => setToGoodValue(good + 1)} text='hyvä' />
            <Button handleClick={() => setToNeutralValue(neutral + 1)} text='neutraali' />
            <Button handleClick={() => setToBadValue(bad + 1)} text='huono' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)