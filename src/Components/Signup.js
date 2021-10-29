import React from 'react';
import chatlogo from '../Images/pumpkin2.png';
import { Link } from 'react-router-dom'


export const Signup = () => {
    return (
        <div>
             <div className="signup">
                <div className="signbox">
                    <div className="signconti">
                        <img src={chatlogo} alt="" width="100px"/>
                        <input type="text" placeholder="Username" className="inp11" />
                        <input type="email" placeholder="email" className="inp12"/>
                        <input type="password" placeholder="Password" className="inp12" />
                        <input type="password" placeholder="Password" className="inp12" />
                        <Link to="/home" className="linkss1"><button className="btnchat1">Signup</button></Link>
                        <Link to="/home#chat" className="linkss1"><button className="btnchat2">Back</button></Link>
                     </div>
                </div>
             </div>
        </div>
    )
}
