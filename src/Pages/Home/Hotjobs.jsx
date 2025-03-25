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
        <div>
            {
                jobs.map(job=> <HotjobsCard key={job._id} job={job}></HotjobsCard>)
            }
        </div>
    );
};

export default Hotjobs;