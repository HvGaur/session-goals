import './App.css';
import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList'

import NewGoal from './components/NewGoal/NewGoal';

function App() {

const [CourseGoals, setCourseGoals] = useState([
    // {id: 'cg1', text: "Start the course"},
      // {id: 'cg2', text: "Learn"},
      // {id: 'cg3', text: "Finish"},
      // {id: 'cg4', text: "Complete the project"}
      ]);

 const addNewGoalHandler = NewGoal => {
  // setCourseGoals(CourseGoals.concat(NewGoal));
  setCourseGoals((prevCourseGoals) => {
    return prevCourseGoals.concat(NewGoal)
  });
  // console.log(CourseGoals);
 };

  return (
    <div className='heading'>
      <h1>Hello! Add your session goals</h1>
    <NewGoal onAddGoal = {addNewGoalHandler}/>
    <GoalList goals = {CourseGoals}/>
    </div>
  );
}

export default App;
