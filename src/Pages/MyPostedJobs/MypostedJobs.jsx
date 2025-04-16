import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MypostedJobs = () => {
    const [jobs,setJobs] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setJobs(data)
        })
    }, [user.email])
    return (
        <div>
            <h2>My posted jobs:{jobs.length} </h2>
        </div>
    );
};

export default MypostedJobs;