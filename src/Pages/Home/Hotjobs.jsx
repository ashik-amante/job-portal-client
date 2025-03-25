import React, { useEffect, useState } from 'react';
import HotjobsCard from './HotjobsCard';

const Hotjobs = () => {
    const [jobs ,setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            setJobs(data)
        })
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                jobs.map(job=> <HotjobsCard key={job._id} job={job}></HotjobsCard>)
            }
        </div>
    );
};

export default Hotjobs;