import React from 'react';

const Addjob = () => {

    const handleJob = e=>{
        e.preventDefault()
        const formData = new FormData (e.target)
        console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);

        const {min,max,currency, ...newJob} = initialData;
        console.log(newJob);
        newJob.salaryRange = {min,max,currency}
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);
    }
        return (
        <div>
            <h2 className="text-3xl">Add a new Job</h2>

            <form onSubmit={handleJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Loaction</span>
                    </label>
                    <input type="text" name='location' placeholder="Location" className="input input-bordered" required />

                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job type</span>
                    </label>
                    <select name='type' className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick a job type</option>
                        <option>full-time</option>
                        <option>part time</option>
                        <option>Intern</option>
                    </select>

                </div>
                {/* job field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job field</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Teaching</option>
                        <option>Architect</option>
                    </select>
                </div>

                {/* salary range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />

                    </div>

                    <div className="form-control">

                        <select name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>

                        </select>
                    </div>
                </div>

                {/* job Descruiption */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered" required placeholder="Bio"></textarea>
                </div>

                {/* company name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company name</span>
                    </label>
                    <input type="text" name='company' placeholder="company Name" className="input input-bordered" required />
                </div>

                {/* job requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='requirements' required placeholder="Put each req in new line "></textarea>
                </div>
                {/* job responsibility */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='responsibilities' required placeholder="Write each responsibility in new line "></textarea>
                </div>

                {/* hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Hr Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Hr email" className="input input-bordered" required />
                </div>
                {/* hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Hr name</span>
                    </label>
                    <input type="text" name='name' placeholder="Hr name" className="input input-bordered" required />
                </div>
                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company logo</span>
                    </label>
                    <input type="url" name='logo' placeholder="Logo url" className="input input-bordered" required />
                </div>

                {/* submit area */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Addjob;