import React from 'react'
import data from "../../instructor.json"

export const Instructor = () => {
  return (
    <div className='instructor-MainDiv'>
        <div className='instruction-DivOne' >
            <h2>Meet Your Instructors</h2>
            <p>With extensive industry experience, the Masai Curriculum Team is a group of expert instructors.</p>
        </div>
        <div className='instruction-DivTwo'>
            {data.map((e,i)=>
            <div className='instruction-DivTwo-one'>
                <img className='profile' src={e.profile} alt="" />
                <h3>{e.name}</h3>
                <p>{e.position}</p>
                <hr />
                <img className='company' src={e.excompany} alt="" />
            </div>
            )}
        </div>
        <button>See More </button>
    </div>
  )
}
