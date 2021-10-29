import React from 'react';
import logo from '../Images/pumpkin211.png';
import  { useRef,useState,useEffect} from 'react';
import {MdViewHeadline} from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaInstagram , FaLinkedinIn , FaGithub , FaTwitter , FaYoutube} from "react-icons/fa";
import spell1 from '../Images/spell3.jpg';
import spell2 from '../Images/spell2.jpg';
import spell3 from '../Images/spell8.jpg';
import spell4 from '../Images/spell4.jpg';
import spell5 from '../Images/spell1.jpg';
import spell6 from '../Images/spell5.jpg';
import spell7 from '../Images/spell6.jpg';
import spell8 from '../Images/spells 7.jpg';
import chatlogo from '../Images/pumpkin2.png';

export const Mainpage = () => {
    const [navbard, setnavbard] = useState(false);
    const [s1, sets1] = useState(true);
    const [s2, sets2] = useState(false);
    const navdisplay = useRef('');
    const searchbox = useRef();
    const [searchinput, setsearchinput] = useState('graveyard');
    const [vid1, setvid1] = useState('');
    const [vid2, setvid2] = useState('');
    const [vid3, setvid3] = useState('');
    const [vid4, setvid4] = useState('');
    const [vid5, setvid5] = useState('');
    const [vid6, setvid6] = useState('');

    const searches=(a)=>{
        setsearchinput(a.current.value);
        a.current.value='';
    }

    useEffect(() => {
        if(searchinput===''){
            alert('No search item in Searchbox!')
        }
        else{
            fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=6&q=halloween${searchinput}&key=AIzaSyD4m3uya_A_aWOze4GKO_IyBq8PGD3V8TQ`)
            .then(response=>response.json())
            .then(data=>{
                setvid1(data.items[0].id.videoId);
                setvid2(data.items[1].id.videoId);
                setvid3(data.items[2].id.videoId);
                setvid4(data.items[3].id.videoId);
                setvid5(data.items[4].id.videoId);
                setvid6(data.items[5].id.videoId);
                console.log(data);
            })
        } 
    }, [searchinput])

    const slide1=()=>{
        sets1(true);
        sets2(false);
    }
    const slide2=()=>{
        sets2(true);
        sets1(false);
    }


    return (
        <div className="App1">
         <header>
         <div className="navbar">
             <div className="homelogo">
                 <img src={logo} alt="" width="60px" height="80px" />
                 <p className="homelogotext">Hallomeet</p>
             </div>

                  
             <div className={(navbard)? "navigation hamvisi":"navigation"} ref={navdisplay} >
                 <ul>
                     <li><a href="#display">Home</a></li>
                     <li><a href="#spells">Spells</a></li>
                     <li><a href="#stories">Stories & Pranks</a></li>
                     <li><a href="#chat">Meetup</a></li>
                 </ul>
             </div>
            
             <div className="hambur"><MdViewHeadline className="hamburger" onClick={()=>setnavbard(!navbard)}/></div>
         </div>
         </header>

         <main>
             <section className="display" id="display">
                 <div className="disk1">
                 <div className="disk2">Happy Halloween</div>
                 </div>
             </section>

             <section className="spell" id="spells">
                 <p className="spellhead">Magic Spells</p>
                 <div className="btns">
                         <div className={(s1)? "btn1 btncol":"btn1"} onClick={()=>slide1()}></div>
                         <div className={(s2)? "btn2 btncol":"btn2"} onClick={()=>slide2()}></div>
                </div>
                 <div className="spellstore">
                     <img src={spell1} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                     <img src={spell2} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                     <img src={spell3} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                     <img src={spell4} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                     <img src={spell5} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                     <img src={spell6} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                     <img src={spell7} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                     <img src={spell8} alt="" width="250px" className={(!s1)? "spellmagic slide":"spellmagic"} />
                 </div>
             </section>

             <section className="storys" id="stories">
                 <div className="story">
                     <p className="storyhead">Stories & Pranks</p>
                     <input type="text" placeholder="Search" className="storyinput"  ref={searchbox}/>
                     <button className="searchbtn" onClick={()=>searches(searchbox)}>Search</button>
                     <div className="videos">
                        <div className="vidd"><iframe src={`https://www.youtube.com/embed/${vid1}`} title="video1" className="videoss"></iframe></div>
                        <div className="vidd"><iframe src={`https://www.youtube.com/embed/${vid2}`} title="video2" className="videoss"></iframe></div>
                        <div className="vidd"><iframe src={`https://www.youtube.com/embed/${vid3}`} title="video3" className="videoss"></iframe></div>
                     </div>
                     <div className="videos cocovid">
                     <div><iframe src={`https://www.youtube.com/embed/${vid4}`}  title="video4" className="videoss"></iframe></div>
                     <div><iframe src={`https://www.youtube.com/embed/${vid5}`}  title="video5" className="videoss"></iframe></div>
                     <div><iframe src={`https://www.youtube.com/embed/${vid6}`}  title="video6" className="videoss"></iframe></div>
                     </div>
                 </div>        
             </section>

             <section className="hallochat" id="chat">
                 <div className="chathead">Meetup</div>
                 <div className="chatbox">
                     <img src={chatlogo} alt="" width="100px"/>
                     <input type="text" placeholder="Enter your name" className="inp1" />
                    <Link to="/chat" className="linkss"><button className="btnchat">Show</button></Link>
                 </div>
             </section>
         </main>

        <footer className="footer">
            <p className="footlogo">Hallomeet</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, labore.</p>
            <p> adipisicing elit. Aut.</p>
            <div className="socialmedia">
                <div className="s1">
                <div className="a1 a11">
                   <a href="https://www.instagram.com/rohitpan7789/?hl=en" target="_blank" rel="noreferrer"><FaInstagram/></a>
                </div>
                <div className="a1 a2">
                    <a href="https://www.linkedin.com/mwlite/in/rohit-pandey-8a6896174" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
                </div>
                <div className="a1 a3">
                <a href="https://github.com/therohit777" target="_blank" rel="noreferrer"><FaGithub/></a>
                </div>
                <div className="a1 a4">
                <a href="https://twitter.com/Rohit_Dev7?t=6aBfdNwlWxZWNQrtAMHKiw&s=08" target="_blank" rel="noreferrer"><FaTwitter/></a>
                </div>
                <div className="a1 a5">
                <a href="https://www.youtube.com/channel/UCYl68rshw-rYuEJxwb1ZpQQ" target="_blank" rel="noreferrer"><FaYoutube/></a>
                </div>
                </div>
            </div>
            <p className="copy">Copyright &copy;2021 Hallomeet, Designed By Rohit Pandey</p>
        </footer>
            
        </div>
    )
}
