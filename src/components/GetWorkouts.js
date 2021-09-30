


const GetWorkouts = (LS) => {


    var isNoworkout = false;

    let woList ;
    woList = JSON.parse(localStorage.getItem(LS));

   

    console.log("WORKOUT LIST:! " , woList)
    return woList;
}

export default GetWorkouts;

