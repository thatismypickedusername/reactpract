function DiceHistory({ rolls_input }) {
  
    if (rolls_input.length === 0) {
        return <h4>The dice was not rolled yet</h4>
    }
    else {
        return (
            <div>
            <ul>
                {rolls_input.map((num, index) => <li key={index}> {num} </li>)}
            </ul>
            </div>
        );
    }
}

export default DiceHistory;