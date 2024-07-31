import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='Login'>
            <div className='MA'>
                <h1>MY ACCOUNT</h1>
            </div>
            <div className='Login-container'>
                <div className='lg'>
                    <h1>
                        Login
                    </h1>
                    <div className='form'>
                        <form action="">
                            <div className='contact-input'>
                                <div>
                                    <input type="text" />
                                    <label htmlFor="">Username or email address*</label>
                                </div>
                                <div>
                                    <input type="text" />
                                    <label htmlFor="">Password</label>
                                </div>
                            </div>
                            <div>
                                <div className='Login-button'>
                                    <button>
                                        Log in
                                    </button>
                                </div>

                                <div className='Forgot-button'>
                                    <button >
                                        Lost your password?
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login