import React from 'react';
import "../Components/chat.css";
import  { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';

export const Chatapp = ({user}) => {
    
    const history = useHistory();
    const  location = useLocation();

    const [daretext, setdaretext] = useState('Spin the Wheel to get it.');
    const daress = ["Bloody Marry Challange","Tomino's Hell 3am challange","Perform stranger Ritual","Play Ouiza board challange","Baby Blue Challange","Charlie pencil Challange","Call on ghost number","Elevator to another world","Go to the graveyard","Play Dark Deception","Bloody Marry Challange"];
    const [spingame, setspingame] = useState(false);
    const [indx, setindx] = useState(Math.floor(Math.random()*10)+1);

    const spinbutton=()=>{
        setspingame(!spingame);
        if(spingame===true){
          setindx(Math.floor(Math.random()*10)+1);
          setdaretext(daress[indx]);
        }
        
    }
    
    return (
        <div>
           <div className="chattinbox">
             <div className="chattinheader">
                 <div className="chattinlogo">
                     <div className="logonames">
                           <p className="chattinhead">Spin the Wheel</p>
                      </div>                  
                 </div>
             </div>
             <p className="welcomespin">Welcome {location.state.update } !!</p>
             <div className="spinningwheel">
                 <div className="wheels">
                     <div className="circlearrow">
                     </div>
                     <ul className={(!spingame)?"circlespin rotate-spin stop-rotate":"circlespin rotate-spin"}>
                         <li className="cocolist spintext1">
                             <div className="spintext">1</div>
                         </li >
                         <li className="cocolist spintext2">
                             <div className="spintext ">2</div>
                         </li>
                         <li className="cocolist spintext3">
                             <div className="spintext">3</div>
                         </li>
                         <li className="cocolist spintext4">
                             <div className="spintext ">4</div>
                         </li>
                         <li className="cocolist spintext5">
                             <div className="spintext ">5</div>
                         </li>
                         <li className="cocolist spintext6">
                             <div className="spintext ">6</div>
                         </li>
                         <li className="cocolist spintext7">
                             <div className="spintext ">7</div>
                         </li>
                         <li className="cocolist spintext8">
                             <div className="spintext ">8</div>
                         </li>
                         <li className="cocolist spintext9">
                             <div className="spintext ">9</div>
                         </li>
                         <li className="cocolist spintext10">
                             <div className="spintext ">10</div>
                         </li>
                         <li className="cocolist spintext11">
                             <div className="spintext ">11</div>
                         </li>
                          <li className="cocolist spintext12">
                             <div className="spintext ">12</div>
                         </li>
                     </ul>
                 </div>
             </div>
             <div className="dtext">
             <div className="dares">
                 Dares: {daretext}
             </div>
             </div>
             <div className="btnspins">
                 <button className="btnspin" onClick={()=> spinbutton()}>{(!spingame)?"Spin":"Stop"}</button>
                 <button className="btnspin"onClick={()=>{
                     history.push("/home");
                 }} >Back</button>
            </div>
           </div>
           
        </div>
    )
}
