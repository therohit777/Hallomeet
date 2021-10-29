import React from 'react';
import { Link } from 'react-router-dom';
import chattinlogo from '../Images/pumpkin2.png';
import { MdMessage , MdViewHeadline} from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import  { useState } from 'react';

export const Chatapp = () => {

    const [chatbar, setchatbar] = useState(false);
    return (
        <div>
           <div className="chattinbox">
             <div className="chattinheader">
                 <div className="chattinlogo">
                     <div className="logonames">
                           <img src={chattinlogo} alt="" width="60px" />
                           <p className="chattinhead">Hallomeet Community</p>
                      </div>
                      <MdViewHeadline className="hambu hamchat" onClick={()=>setchatbar(!chatbar)}/>
                      <div className={(!chatbar)? "chattinnavigators displaysyes":"chattinnavigators"}>
                           <Link to="/chat"><div><MdMessage className="reacticonss"/></div></Link>
                           <Link to="/profile"><div><IoPerson className="reacticonss"/></div></Link>
                           <Link to="/home"><button className="logoutss">Logout</button></Link> 
                     </div> 

                 </div>
             </div>
           </div>
           
        </div>
    )
}
