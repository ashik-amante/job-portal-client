import React from 'react';
import logo1 from '../../assets/logo1.png'
import { motion } from "motion/react"
import { easeInOut, easeOut } from 'motion';
import g1 from '../../assets/image/g1.webp'
import g2 from '../../assets/image/g2.jpg'

const Banner = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                    animate={{y:[0, 50,0]}}
                    transition={{duration:10,repeat:Infinity}}
                    src={g1} className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl" />
                    <motion.img
                    animate={{x:[100, 150,100]}}
                    transition={{duration:10,delay:5, repeat:Infinity}}
                    src={g2} className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl" />
                </div>
                
                <div className='flex-1'>
                    <motion.h1 
                    animate={{x: 50, color:['red']}}
                    transition={{duration:4, delay:2,repeat:Infinity,ease:easeOut}}
                    
                    className="text-5xl font-bold">Latest <motion.span 
                        animate= {{color: ['#ecff33','#4eb81b','#1bb837'],}}
                        transition={{repeat:Infinity , delay:3, duration:3}}
                    >Jobs</motion.span>
                    
                     For You!</motion.h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;