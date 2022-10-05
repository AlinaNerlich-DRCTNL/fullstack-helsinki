import StatisticLine from "./StatisticLine"

const Statistics = (props) => {

    if (props.sum === 0) {
        return (
            <p> No Feedback given</p>
        )
    }

    return(
     <>
        <h2>Statistics</h2>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All {props.sum}</p>
        <StatisticLine value={props.calculateAverage} text='Average: '/>
        <StatisticLine value={props.calculatePositive} text='Positive: '/>
      </>

    )
}

export default Statistics