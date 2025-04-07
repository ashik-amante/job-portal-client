import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const AppliedJob = () => {
    const { id } = useParams()
    const { user } = useAuth()
    console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value
        const data = { linkedin, github, resume }
        const jobApplication = {
            jb_id: id,
            application_email: user.email,
            linkedin,
            github,
            resume
        }
        console.log(data);

        fetch('http://localhost:5000/job_applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully Applied!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (


        <div className="card w-full  shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Apply job and good luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linked In URL</span>
                    </label>
                    <input type="url" name='linkedin' placeholder="Linked in url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub Url</span>
                    </label>
                    <input type="url" name='github' placeholder="Github url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume Url </span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>

    );
};

export default AppliedJob;