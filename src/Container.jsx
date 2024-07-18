import {React} from 'react';
import imgbg from './res/imgbg01.png';
import img01 from './res/img01.png'

function Container(){
    return(
        <div className="container">
            <div className="Container-01">
            <img src={imgbg} className='m-101'/>
            <img src={imgbg} className='m-102'/>
            <img src={imgbg} className='m-103'/>
            <img src={imgbg} className='m-104'/>
            <img src={imgbg} className='m-105'/>
            <img src={img01} className='models'/>
            <div>
            <div className='text-106'>
                <h2>
                Let’s Learn & Earn
                </h2>
                
            </div>
             <div className='text-107'>
             <p>
                Get a chance to win up-to <strong style={{color:"#1A73E8"}}> Rs. 15,000 </strong>
                </p>
                
            </div>
            </div>

            <button className='referbtn btn'>Refer Now</button>


            </div>
            <div className="Container-02">





            </div>

        </div>
    )
}
export default Container;