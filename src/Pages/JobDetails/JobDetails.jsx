import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const {title,company,deadline} = job
    return (
        <div>
            <p>JOb detail of {title} </p>
            <p>Apply for : {company}</p>
            <p>Dead Line : {deadline}</p>
            <button className='btn'> Apply Now </button>
        </div>
    );
};

export default JobDetails;