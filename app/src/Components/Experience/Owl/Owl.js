import './Owl.css';

import StandingOwl from '.././../../Assets/assets/education/OwlAnimation/sittingOwl.png';
import FlyingOwl from '../../../Assets/assets/education/OwlAnimation/flappingWings.gif';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Owl(){
    const owlAnimation = useRef();

    useEffect(()=>{
        owlAnimation.current = gsap.timeline({
            scrollTrigger: {
                start: "0%",
                end: "40%",
                pin: false,
                toggleActions: "play pause resume resume",
                scrub: true
            }
        });

        owlAnimation.current
            .from('.standingOwlImage',
            {
                opacity: 0,
                autoAlpha: 0,
                yPercent: -50
            })
            .from('.flyingOwlImage',{
                xPercent: -100
            },
            "<")
            .to('.flyingOwlImage',{
                duration: 2,
                xPercent: 175
            })
            .to('.flyingOwlImage',{
                duration: 0,
                autoAlpha: 0
            })
            .to('.standingOwlImage', {
                autoAlpha:100,
                yPercent: 0
            })

            return (()=>{
                owlAnimation.current.kill();
            })
    })
    
    return  <div className='owlContainer'>

                <div className='wisdomTag'>
                    <h1> Curious Seeker of <em>Wisdom</em> </h1>
                </div>

                <div className='owlsImageContainer'>
                    <div className='flyingOwlImage'>
                        <div className='flyingImageAdjustment'>
                            <img src={FlyingOwl} />
                        </div> 
                    </div>
                    <div className='standingOwlImage'>
                        <img src={StandingOwl} />
                    </div>
                </div>
            </div>
}

export default Owl;