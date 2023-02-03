import axios from 'axios';


export const fetchData = () => {    //action creator return action
    console.log("function call")
    return (dispatch) => {
        console.log("chala")
        axios.get(`https://admin.tomedes.com/api/v1/get-reviews?page=1`)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "FETCHDATA",
                    data: response.data
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to fetch data" 
                })
            })
    }
}