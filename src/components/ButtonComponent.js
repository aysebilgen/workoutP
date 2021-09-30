import './scss/ButtonComponent.scss'



const ButtonComponent = ({buttonname, buttonclassname, functionname}) => {
    return ( 

        <button className={buttonclassname} onClick={functionname}> {buttonname} </button>
     );
}
 
export default ButtonComponent;