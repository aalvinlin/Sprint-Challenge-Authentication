import React, {useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Jokes = ({isLoggedIn}) => {

    let jokes = [];

    useEffect(() => {

        if (isLoggedIn)
        {
            axiosWithAuth().get("jokes")
            .then(response => {
                jokes = response.data;

                console.log("jokes are", response.data);
            })
            .catch(error => {
                console.log("error getting jokes.")
            })
        }

    }, [isLoggedIn])

    return (

        <>
        <h2>Dad Jokes</h2>

        {
            isLoggedIn ?

            <div>

                {jokes.map((joke, id) => <div>{joke}</div>)}

            </div>

            :

            <h3>You must be logged in to view the jokes!</h3>
        
        }
        </>
    )
}

export default Jokes;