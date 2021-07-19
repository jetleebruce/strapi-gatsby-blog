import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {VscArrowRight} from 'react-icons/vsc';

const query = graphql`
  {
    allStrapiJob {
        nodes {
          company
          descr {
            id
            name
          }
          id
          position
          date
        }
      }
  }
`

const Job = () => {
    const data = useStaticQuery(query);
    console.log(data)
    const [value, setValue] = useState(false);
    const { allStrapiJob: { nodes:jobs } } = data;
    const {company, position, date, descr} = jobs[0];

    const handleClick = () => {

    }


    return (
        <div className='px-6'>
             <h1>Job component</h1>
            <h3>{company}</h3>
            <h4>{position}</h4>
            <div className='flex flex-row justify-between'>
              {jobs.map((item, index) => {
                return (
                  <div className='flex flex-row mb-2'>
                    <span className='flex items-center'>
                      <VscArrowRight/>
                    </span>
                    <button key={index} onClick={handleClick} className='flex flex-row'>
                      {item.company}
                    </button>
                  </div>               
                )
              })}
            </div>
        </div>
    )
}

export default Job
