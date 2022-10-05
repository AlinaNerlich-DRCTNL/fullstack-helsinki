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
        <StatisticLine onClick={props.onClick} text='good'/>
        <StatisticLine onClick={props.onClick} text='neutral'/>
        <StatisticLine onClick={props.onClick} text='bad'/>
        <p>All {props.sum}</p>
        <p>Average {props.calculateAverage}</p>
        <p>Positive {props.calculatePositive}</p>
      </>

    )
}

export default Statistics