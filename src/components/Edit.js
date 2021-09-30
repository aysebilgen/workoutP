
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { useParams, useHistory } from "react-router";
import React from 'react';
import ButtonComponent from './ButtonComponent';
import './scss/WorkoutList.scss';
import GetWorkouts from './GetWorkouts';


const Edit = () => {
    const { workoutindex, workoutname } = useParams();
    const [data, setData] = useState([]);
    //const [workout, setWorkout] = useState({workoutName:'', exercises:[]});
    const [workoutName, setWorkoutName] = useState('');
    const [exerciselist, setexerciselist] = useState([{ exercisename: '', duration: 0 }]);
    const history = useHistory();




    useEffect(
        () => {
            const woList = GetWorkouts('workoutObject1');

            setData(woList)
            setWorkoutName(woList[workoutindex].workoutName)
            setexerciselist(woList[workoutindex].exercises)


        }, []
    )

    console.log(data);



    const addExercise = () => {
        let newtbox = [...exerciselist];
        newtbox.push({ exercisename: '', duration: 1 });
        setexerciselist(newtbox);
    };

    let wobject = [...data];
    let updatedwoobject = [];
    const saveWorkout = () => {


        console.log("boo", wobject)
        wobject.map((v, i) => {
            if (i == workoutindex) {
                updatedwoobject.push(
                    {
                        workoutName: workoutName,
                        exercises: exerciselist
                    }
                )

            } else {
                console.log('esit degil', i, v)
                updatedwoobject.push(v)


            }
        }

        )

        setData(updatedwoobject);//bu gereksiz aslinda

        localStorage.setItem('workoutObject1', JSON.stringify(updatedwoobject));

        history.push('/')

    }

    const updateExerciselist = (exvalue, exindex, type) => {
        let arr = [...exerciselist];
        arr[exindex][type] = exvalue;
        setexerciselist(arr);

    }

    const deleteWorkout = () => {
        data.map((v, i) => {
            if (i == workoutindex) {
                console.log('delete', i, v)

            } else {

                updatedwoobject.push(v)

            }

        })

        setData(updatedwoobject);//bu gereksiz aslinda

        localStorage.setItem('workoutObject1', JSON.stringify(updatedwoobject));

        history.push('/')

    }

    return (
        <div className="add-workout-container">


            <label htmlFor="">Workout name:</label>
            <input type="text" required
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}

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
                <ButtonComponent buttonname={'Save workout'} buttonclassname={'green'} functionname={saveWorkout}>  </ButtonComponent>

            </div>
            <div className="addExercise-button">
                <ButtonComponent buttonname={'Delete workout'} buttonclassname={'red'} functionname={deleteWorkout}>  </ButtonComponent>

            </div>



        </div>




    );
}

export default Edit;