import './scss/WorkoutList.scss';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './GetWorkouts'
import GetWorkouts from './GetWorkouts';
import React from 'react';

const WorkoutList = () => {



    const [data, setData] = useState([]);
    
    
    
    useEffect(
        () => {
            const woList = GetWorkouts('workoutObject1');

            if (woList===null) {
                let workoutObject1 = [];
                localStorage.setItem('workoutObject1', JSON.stringify(workoutObject1));
               
            } else {
                setData(woList); 
               
            }

        }, []
    )

    console.log(data);

    return (
        <div className="component-container">
            
            { data.length==0?  <div className="info"> NO SAVED WORKOUT </div>
            : <div className="info">  Your workout list:</div>
           
            
            }


            {
                data.map(

                    (ex,workoutindex) => <div className="workout-list">
                        
                        <div className="workout-container">


                            <div className="workout-name" key={ex.workoutName}>
                                {ex.workoutName}

                            </div>

                            {ex.workoutName && <div className="right-button start-button"> <Link to={`/startworkout/${workoutindex}/${ex.workoutName}`}><ButtonComponent buttonname={'Start'} buttonclassname={'green'}>  </ButtonComponent> </Link></div>}
                            <div className="right-button edit-button">
                                <Link to={`/editworkout/${workoutindex}/${ex.workoutName}`}><ButtonComponent buttonname={'Edit'} buttonclassname={'green'}>  </ButtonComponent></Link></div>
                        </div>



                    </div>
                )
            }


            <div className="add-workout-button">
                <Link to='/addWorkout'>
                    <ButtonComponent buttonname={'Add new workout'} buttonclassname={'red'} functionname={''}>  </ButtonComponent>
                </Link>



            </div>

        </div>




    );
}

export default WorkoutList;