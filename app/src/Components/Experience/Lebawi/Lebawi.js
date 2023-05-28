import Wave from '../../../Assets/assets/education/Lebawi/wave.gif';

import './Lebawi.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Lebawi = () => {
    return  <div className='lebawiMain'>
                <div className='lebawiTag'>
                    <h1> Highschool Diploma from Lebawi Academy </h1>
                </div>

                <div className='lebawiWave'>
                    <img src={Wave}/>
                </div>
            </div>
            }

export default Lebawi;