import './Society.css'


const Society = () => {
    return  <div className='societyMain'>
                <div className='societyTagsContainer'>
                    <div className='societyTags'> 
                        <h2> 
                            Born and Raised in Addis Ababa.
                        </h2>
                    <div className='gapYear'>
                        <h3>
                            {"<2002 - 2020>"}
                        </h3>
                    </div>  
                     
                     <div className='movedToNewYork'>
                        <h2> 
                            Moved to New York for College.
                        </h2>
                        <h3>
                            {"<2020 - Present>"}
                        </h3>
                     </div>

                     
                    </div>
                    
                    <div className='note_to_self_container'>
                        <div className='note_to_self_tags'>
                            <h1> Note to Self: </h1>
                            <h3> # As I create more, # </h3>
                            <h3> # My shadow destructs more, # </h3>
                    
                            <h3> # It's Yonas Vs. Yonas # </h3>
                        </div>
                 </div>
                </div>
            </div>

    }


export default Society;