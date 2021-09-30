import { useState, useEffect } from "react";
import './scss/AddWorkout.scss'
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';

const AddWorkout = () => {
   // const [workoutlist, setWorkoutList] = useState([]);
    const [workout, setWorkout] = useState('');
   // const [exerciseobject, setexerciseobject] = useState({exercisename: '', duration: 1 });
    const [exerciselist, setexerciselist] = useState([]);




    const addExercise = () => {
        let newtbox = [...exerciselist];
        newtbox.push('');
        setexerciselist(newtbox);
    };

    const updateExerciselist = (exvalue, exindex) => {
        
        let arr = [...exerciselist];
        arr[exindex] = exvalue;
        setexerciselist(arr);

    }
   
    const updateExercisename = (exvalue, exindex) => {
        let arr = [...exerciselist];
        arr[exindex] = [{exercisename:exvalue}];
       
        
        setexerciselist(arr);
        

    }

    const updateExerciseduration = (exvalue, exindex) => {
        
        let arr = [...exerciselist];
        arr[exindex] = [{duration:exvalue}];
       
        
        setexerciselist(arr);
        

    }

    

    return (
        <div className="add-workout-container">

            <form id="add-workout-form">
                <label htmlFor="">Workout name:</label>
                <input type="text" required
                    value={workout}
                    onChange={(e) => setWorkout(e.target.value)}
                />
            </form>


            {!exerciselist[0] && <div style={{ textAlign: 'left', marginTop: '1rem' }}> Add exercise to your workout</div>}
            {/* excersise icin textbox lar: */}


            {
                exerciselist.map((value, index) =>
                    <form id="add-workout-form">
                        <label htmlFor=""> {index + 1} excersise  name:</label>
                        <input type="text" required
                            value={exerciselist[index].exercisename}
                            onChange={(e) => updateExercisename(e.target.value, index)}
                        />

                        <label htmlFor=""> {index + 1} excersise  duration:</label>
                        <input type="number" required
                            value={exerciselist[index].duration}
                            onChange={(e) => updateExerciseduration(e.target.value, index)}
                        />


                    </form>

                )
            }


            <div className="addExercise-button">
                <ButtonComponent buttonname={'Add exercise'} buttonclassname={'red'} functionname={addExercise}>  </ButtonComponent>

            </div>



        </div>);
}

export default AddWorkout;