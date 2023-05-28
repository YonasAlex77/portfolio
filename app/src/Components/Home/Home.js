import './Home.css';
import Name from '../../Assets/assets/icons/name.svg';
import { useEffect } from 'react';

import gsap,{Bounce} from 'gsap';

function Home()
{
    useEffect(()=>{
        const scrollTagAnimation = gsap.fromTo('.scrollTag',
        {
            y: 0
        },
        {
            duration: 5,
            y: 25,
            ease: Bounce.easeIn,
            repeat: -1
        })
        .yoyo(true)
        
        return (()=>{
            scrollTagAnimation.kill();
        })
    })

    return <div className="mainContainer">
                
                <div className="contentContainer">
                    <div className='nameImage'> 
                        <img src={Name}/>
                    </div>
                    
                    <div className='tagsMain'>
                        <p className='individualTags'> An artist | making messy sketches | on life's canvas </p>
                        <p className='individualTags'> Freelance Full-Stack Web Developer </p>
                        <p className='individualTags'> Financial Engineering Major </p>    
                    </div>
                </div>
                
                <div className="scrollTag">
                        <p>|| Scroll ||</p>
                </div>
            </div>
}


export default Home; 