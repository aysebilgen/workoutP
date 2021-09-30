import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

import React from 'react';
import ButtonComponent from './ButtonComponent';
import './scss/WorkoutList.scss';


const Exercise = ({ workoutname, exercises }) => {

    // const [counter, setCounter] = useState(exercises[0].duration);
    // const [name, setName] = useState(exercises[0].exercisename);
    // const [complete, setComplete] = useState(false);
    // const [index, setIndex] = useState(1);
    // const [totaldur, setTotaldur] = useState(exercises[0].duration);
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    const [complete, setComplete] = useState(false);
    const [index, setIndex] = useState(0);
    const [totaldur, setTotaldur] = useState(0);
    const [next, setNext] = useState('');
    const [lastname, setLastname] = useState(false)



    console.log(exercises.length);
    let du = 0;

    useEffect(() => {
        console.log('HO START ones')

        setCounter(exercises[0].duration);
        setName(exercises[0].exercisename);
        setTotaldur(parseInt(exercises[0].duration));

        if (index + 1 <= exercises.length - 1) {
            setNext(exercises[index + 1].exercisename);
            setLastname(false)
        }
        else { setLastname(true) }




    }, [0]);


    useEffect(() => {
        // setIndex(index+1);

        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);

        }
        else {


            if (index <= exercises.length - 1) {
                if (index + 1 <= exercises.length - 1) {
                    setNext(exercises[index + 1].exercisename)
                }
                else { (setLastname(true)) }


                setIndex(index + 1);
                setCounter(exercises[index].duration);
                setName(exercises[index].exercisename);
                du = parseInt(totaldur) + parseInt(exercises[index].duration)
                setTotaldur(du);

            }
            else {

                setComplete(true);

            }

        }


    }, [counter]);


    return (

        <div className="container">
            {
                complete === false ?
                    <div >
                        <React.Fragment>
                            <div className="de" style={{ textAlign: "center", marginTop: '2rem' }} >  Your are doing : <div style={{ fontSize: "3rem", color: "green" }}>{name}</div> </div>
                            <div className="counter" style={{ textAlign: "center", marginTop: '1rem' }} >  {counter}</div>

                            {lastname === false ?
                                <div className="d" style={{ textAlign: "center", marginTop: '1rem', fontSize: '1rem' }}> next excersize is: <span style={{ fontSize: '1.6rem', color: 'red' }}>{next}</span></div>
                                : <div style={{ textAlign: "center", marginTop: '1rem', fontSize: '1rem' }}> Last excersise of  {workoutname}</div>
                            }

                        </React.Fragment>

                    </div>
                    : <div style={{ textAlign: "center", marginTop: '2rem', fontSize: '2rem' }}>

                        You complete <span style={{ color: 'red' }}>{workoutname} </span>
                        in <span style={{ color: 'red', fontSize: '2.5rem' }}>{totaldur}</span> seconds.

                        <div style={{ textAlign: "center", marginTop: '2rem' }}>
                            <Link to='/'>

                                <ButtonComponent buttonname={'GO WORKOUT LIST'} buttonclassname={'green'} functionname={''}></ButtonComponent>
                            </Link>
                        </div>


                    </div>
            }






        </div>
    );
}

export default Exercise;