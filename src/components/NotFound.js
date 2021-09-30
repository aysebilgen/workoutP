import { Link } from 'react-router-dom';

const Notfound = () => {
    return ( 
   <div className="not-found">
       <h2>Sorry not found</h2>
       <Link to='/'> Back to Home Page</Link>
   </div>


     );
}
 
export default Notfound;