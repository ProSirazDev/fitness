import React from 'react';
import './Reasons.css';
import Image1 from '../../assests/image1.jpg';
import Image2 from '../../assests/image2.jpg';
import Image3 from '../../assests/image3.jpg';
import Image4 from '../../assests/image4.jpg';
import Tick from '../../assests/tick.png';
import Adidas from '../../assests/adidas.png';
import Puma from '../../assests/nb.png';
import Nike from '../../assests/nike.png';

const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
           <img src={Image1} alt='' />
           <img src={Image2} alt='' />
           <img src={Image3} alt='' />
           <img src={Image4} alt='' />
        </div>
        
        <div className="right-r">
            <span>some reasons</span>
            
            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>

            <div className="details-r">
                <div>
                    <img src={Tick} alt=''></img>
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={Tick} alt=''></img>
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={Tick} alt=''></img>
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={Tick} alt=''></img>
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>

            <span 
                style={{
                    color:"var(--gray)",
                    fontWeight:"normal",
                }}
            >
                OUR PARTNERS
            </span>

            <div className="partners">
                <img src={Adidas} alt='' />
                <img src={Puma} alt='' />
                <img src={Nike} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Reasons
