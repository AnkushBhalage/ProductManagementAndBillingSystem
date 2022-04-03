import React from 'react';
import { useState } from 'react';

function Allcourses() {
    const [course,setCourse]=useState(
        [
            { title:"Java Curse"},
            {title:"Python Course"},
            {title:"C++ Course"},
            {title:"Javascript Course"}
        ]
    );
  return (<div>
      <h1>Select courses</h1>
      
{
          course.length>0?course.map((item)=>
              <course course={item}/>
          ):"No courses"

}      

  </div>);
}

export default Allcourses;
