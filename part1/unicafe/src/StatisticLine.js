const StatisticLine = ({onClick, title}) => {
    return(
        <>
        <button onClick={onClick}>{title}</button>
        </>
    )
}

export default StatisticLine