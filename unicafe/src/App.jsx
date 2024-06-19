import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )


}

const Stats = (props) =>  {
  const total = props.good + props.neutral + props.bad;
  const avg = (props.good - props.bad) / total;
  const percentage = (props.good / total) * 100;

  if (total === 0) {
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )

  }
  return (

    <>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={percentage} />
      </table>
    </>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0);

  function handleGoodClick(){
    const currGoodCount = good + 1;
    setGood(currGoodCount);
  }

  function handleNeutralClick () {
    const currNeutralCount = neutral + 1;
    setNeutral(currNeutralCount);
  }

  function handleBadClick () {
    const currBadCount = bad + 1;
    setBad(currBadCount);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick= {handleNeutralClick} text="neutral"/>
      <Button handleClick= {handleBadClick} text="bad"/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
