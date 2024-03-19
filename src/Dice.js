import React from 'react';

const Dice = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className='diceface' style={styles} onClick={props.holdDice}>
    <h2 className='dicenum'>{props.value}</h2>
        </div>
    );
}

export default Dice;
