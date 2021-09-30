
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Notfound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddWorkout from './components/AddWorkout';
import StartWorkout from './components/StartWorkout';
import Edit from './components/Edit'



function App() {
  return (
    // <div className="App">
    //  <Header></Header>
    //  <Home></Home>

    // </div>
    <Router>
      <div className="App">
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addWorkout">
            <AddWorkout />
          </Route>
          <Route exact path="/startWorkout/:workoutindex/:workoutname">
            <StartWorkout />
          </Route>

          <Route exact path="/editworkout/:workoutindex/:workoutname">
            <Edit />
          </Route>



          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>


      </div>
    </Router>


  );
}

export default App;
