import React from 'react'
import { useHistory } from 'react-router';

export const Hallologo = () => { 
    const history = useHistory();  
    setTimeout(() => {
        history.push("/home");
    }, 5500);


    return (
      <div className="App">
      <div>
      <div className="logoboss">
      <div className="logo">

      </div>
      </div>
     <p className="logoname">Hallomeet</p>
    </div>
    </div>
    )
}
