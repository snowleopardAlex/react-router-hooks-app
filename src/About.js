import React from "react";
import {useLocation, useHistory} from "react-router-dom";

function About() {
    const location = useLocation();
    const history = useHistory();
    console.log(location);
  
    function goBackHandle() {
        history.goBack();
    }

    // <> </> --> fragments --> shorthand for React.Fragment
    return (
        (<>
        <div className="ml-4">
        <div>
            <p>
            About
            </p>
        </div>
        <div>
            <p>
            Location = {location.pathname}
            </p>
        </div>
        <div>
            <p>
            From = {location.state.from}
            </p>
        </div>
        <button onClick={goBackHandle}>Go Back</button>
        </div>
         </>)
    );
}

export default About;