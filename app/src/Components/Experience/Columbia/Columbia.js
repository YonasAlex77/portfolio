import Butler from '../../../Assets/assets/education/Butler/Butler.png';



import './Columbia.css';

function Columbia(){
    return  <div className='columbiaContainer'>
                <div className='studentTag'>
                    <h1> Student at <em>Columbia University</em> </h1>
                </div>
                <div className="butlerContainer">
                    <img src={Butler} />
                </div>
            </div>
}

export default Columbia;