function DiceRoller({onRoll}) {

    function roll() {
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        console.log(randomNumber);
        return onRoll(randomNumber);
        
    }


    return (

        <button onClick={roll}>Randomize</button>
    )
}

export default DiceRoller;