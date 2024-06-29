import React, {useState} from "react";

import './NewGoal.css';

function NewGoal(props) {

    // let enteredTxt = '';
    const [enteredTxt, setEnteredTxt] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const NewGoal = {
            id: Math.random().toString(),
            // text: "new goal yay"
            text: enteredTxt
        };
        setEnteredTxt('');
        console.log(enteredTxt);
        props.onAddGoal(NewGoal);
    };

    const textChangeHandler = event => {
        setEnteredTxt(event.target.value);
    };

    return (
        <form className="newgoal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredTxt} onChange={textChangeHandler}/>
            <button type='submit'>Add Goal</button>
        </form>
    );
}

export default NewGoal;