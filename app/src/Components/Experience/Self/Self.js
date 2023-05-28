import { useEffect, useRef } from 'react';

import ChessBg from '../../../Assets/assets/education/Self/chessBg.png';

import Knight from '../../../Assets/assets/education/Self/Knight.png';

import './Self.css'
import gsap from 'gsap';

const Self = () => {

        const selfTimeline = useRef();

        useEffect(()=> {

            selfTimeline.current = gsap.timeline();
            
            selfTimeline.current
                .to('.knightContainer', {
                    xPercent: 200, 
                    yPercent: 100,
                    delay: 2
                  })
                .to('.knightContainer', {
                    xPercent: 0,
                    yPercent: 200,
                    delay: 2      
                })
                .to('.knightContainer', {
                    xPercent: -200, 
                    yPercent: 100,
                    delay: 2
                  })
                .to('.knightContainer', {
                    xPercent: 0,
                    yPercent: 0,
                    delay: 2
                })

            selfTimeline.current.repeat(-1);
        })

        return <div className="selfMain">
                    <div className='selfContainer'>
                        <div className='knightContainer'> 
                            <img src={Knight} alt ="knight" width={"100%"} height={"100%"}/>
                        </div>

                        <div className='chessBackground'> 
                            <img src={ChessBg} alt = "chess_background" width={"100%"} height={"100%"}/>
                        </div>
                    </div>

                    <div className='justJumpTag'>
                        <h3> Self-Taught </h3>
                    </div>
                    
                    <div>
                        <div className="internetAndBooks">
                        
                        {//Internet and Books}
                        }
                            <div>
                                <h1> Internet and Books </h1>                      
                            </div>
                            
                            <div>
                                <h3> Full Stack Web Development </h3>
                                <h3> Guitar </h3>
                                <h3> Digital Art </h3>
                            </div>      
                        </div>

                        <div className='centerJustified'>
                            <div className='whiteLine'>
                            </div>
                        </div>
                    </div>
                </div>
                }   

export default Self;