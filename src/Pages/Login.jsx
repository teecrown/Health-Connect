import React from 'react'
import Doctor from '../assets/Doctor.png'

const Login = () => {
    return (
        <div>
            <section className='flex justify-between ml-13 my-15 mr-23 '>
                <div>
                    <img src={Doctor} alt='Doctor' className='' />
                </div>
                <div className='my-15' >
                    <div className='block justify-center items-center'>
                        <h1 className='font-manrope font-bold text-[35px] leading-100% '> Login </h1>
                        <p className='font-manrope font-normal text-[20px] leading-100%'> Welcome back. Log into Your account </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login