import { useState, useEffect } from "react";
import './scss/AddWorkout.scss'
import GetWorkouts from './GetWorkouts';

import ButtonComponent from './ButtonComponent';
import WarningComponent from './WarningComponent'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const AddWorkout = () => {
    const [workoutlist, setWorkoutList] = useState([]);
    const [workout, setWorkout] = useState('');
    const [exerciselist, setexerciselist] = useState([{ exercisename: '', duration: 1 }]);
    const history = useHistory();
    const [warning, setWarning] = useState(false)

    //get workouts into local storage:
    useEffect(
        () => {
            const woList = GetWorkouts('workoutObject1');
            console.log(woList);
            setWorkoutList(woList);

        }, []
    )



    const addExercise = () => {
        let newtbox = [...exerciselist];
        newtbox.push({ exercisename: '', duration: 1 });
        setexerciselist(newtbox);
    };

    const updateExerciselist = (exvalue, exindex, type) => {
        let arr = [...exerciselist];
        arr[exindex][type] = exvalue;
        setexerciselist(arr);

    }


    let wobject = [...workoutlist];
    


    const saveWorkout = () => {




        if (workout.length > 0) {

            exerciselist.map((v, i) => {
                console.log("CHECK", v.exercisename.length)
                if (v.exercisename.length === 0) {
                   setWarning(true)
                }



            })


                
            wobject.push(
                {
                    workoutName: workout,
                    exercises: exerciselist
                }
            )
            setWorkoutList(wobject);
            console.log(workoutlist);
            localStorage.setItem('workoutObject1', JSON.stringify(wobject));
            history.push('/')

        } else {
            setWarning(true);

        }


    }




    return (
        <div className="add-workout-container">


            <label htmlFor="">Workout name:</label>
            <input type="text" required
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
            />



            {!exerciselist[0] && <div style={{ textAlign: 'left', marginTop: '1rem' }}> Add exercise to your workout</div>}
            {/* excersise icin textbox lar: */}


            {
                exerciselist.map((value, index) =>
                    <div className="exercise-container" key={index}>
                        <form id="add-workout-form">
                            <label htmlFor=""> {index + 1} excersise  name:</label>
                            <input type="text" required
                                value={exerciselist[index].exercisename}
                                onChange={(e) => updateExerciselist(e.target.value, index, 'exercisename')}
                            />

                            <label htmlFor=""> {index + 1} excersise  duration:</label>
                            <input type="number" required
                                value={exerciselist[index].duration}
                                onChange={(e) => updateExerciselist(e.target.value, index, 'duration')}
                            />


                        </form>
                    </div>


                )
            }


            <div className="addExercise-button">
                <ButtonComponent buttonname={'Add exercise'} buttonclassname={'red'} functionname={addExercise}>  </ButtonComponent>

            </div>
            <div className="addExercise-button">
                <ButtonComponent buttonname={'Save Workout'} buttonclassname={'green'} functionname={saveWorkout}>  </ButtonComponent>

            </div>

            {warning && <div className="d"><WarningComponent></WarningComponent></div>}




        </div>);
}

export default AddWorkout;