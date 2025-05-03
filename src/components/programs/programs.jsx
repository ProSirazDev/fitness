import React from 'react';
import { programsData } from '../../data/programData';
import "./programs.css";
import RightArrow from '../../assests/rightArrow.png';

const programs = () => {
  return (
    <div className="programs" id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt='' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default programs
