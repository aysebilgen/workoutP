
import React from 'react';

import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router";
import './scss/WorkoutList.scss';
import GetWorkouts from './GetWorkouts';
import Exercise from './Exercise';



const StartWorkout = () => {

    const { workoutindex, workoutname } = useParams();
    const [data, setData] = useState([]);
  
   



    console.log('Start Workout', workoutindex)

    const [counter, setCounter] = useState(3);


    useEffect(() => {

        const woList = GetWorkouts('workoutObject1');

        // setData(woList);
        woList.map((v, i) => {
            if (i == workoutindex) {
                setData(v);

            }
        })

    }, []);


    useEffect(() => {

        if (counter>=0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
         

    }, [counter]);

    

    return (
        <div className="container">
            {counter > 0 ?
                <React.Fragment>
                    <div style={{ textAlign: "center", marginTop: '2rem' }}>
                        Workout: <div style={{ fontSize: "3rem", color: "red" }}>{workoutname}</div> will start in minutes:
             <div className="counter">{counter} </div>
                    </div>
                </React.Fragment>
                : 
                <div>


                 <Exercise exercises={data.exercises} workoutname={workoutname}> </Exercise>

                </div>

            }


        </div>


    );

}

export default StartWorkout;