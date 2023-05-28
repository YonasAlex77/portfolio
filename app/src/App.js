import './App.css';

import Home from './Components/Home/Home'
import Columbia from './Components/Experience/Columbia/Columbia'
import Owl from './Components/Experience/Owl/Owl';
import Lebawi from './Components/Experience/Lebawi/Lebawi';
import Self from './Components/Experience/Self/Self';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function App() {

    const homeTimeline = useRef();
    const columbiaTimeline = useRef();
    const owlTimeline = useRef();
    const lebawiTimeline = useRef();


    useEffect(()=>{
    
    //Home Timeline    
        homeTimeline.current = gsap.timeline({
            scrollTrigger: {
                start: '0%',
                end: '20% top',
                scrub: true,
                markers: false
            }
        })

        homeTimeline.current
            .to('.homeContainer',{
                autoAlpha: 0
            })

    //Columbia TimeLine
    
    columbiaTimeline.current = gsap.timeline({
        scrollTrigger: {
            start: '20%',
            end: '40% top',
            scrub: true,
            markers: false
        }
    })

    columbiaTimeline.current
        .to('.columbiaContainer',{
            autoAlpha: 0
        })

    //Owl Timeline    
    owlTimeline.current = gsap.timeline({
        scrollTrigger: {
            start: '40%',
            end: '60% top',
            scrub: true
        }
    })

    owlTimeline.current
        .to('.owlContainer',{
            autoAlpha: 0
        })

    //lebawi Timeline    
    lebawiTimeline.current = gsap.timeline({
        scrollTrigger: {
            start: '60%',
            end: '80% top',
            scrub: true,
            markers: false
        }
    })

    lebawiTimeline.current
        .to('.lebawiContainer',{
            autoAlpha: 0
        })


        return (()=>{
            homeTimeline.current.kill();
            columbiaTimeline.current.kill();
            owlTimeline.current.kill();
            lebawiTimeline.current.kill();
        })
    
    })
  return (
    <div className="App">
        <div className="homeContainer"> 
        <Home/>
        </div>
        <div className="columbiaContainer">
            <Columbia/>
        </div>
        <div className='owlContainer'>
            <Owl/>
        </div>
        <div className='lebawiContainer'>
            <Lebawi/>
        </div>
        <div className='selfContainer'>
            <Self/>
        </div>        
    </div>
        
  );
}

export default App;
