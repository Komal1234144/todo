import React, { useState } from 'react'
import './LoginPage.css';

const LoginPage = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return (
        <div className='container fluid my-5'>
            <br />
            <div className='row'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div className='col-12  text-center'>
                    <h2>Login Page</h2>
                </div>
                <br />
                <div className='col-6'>
                    <label >Username</label>
                    <input type="text"
                        className='form-control'
                        value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <br />
                <div className='col-6'>
                    <label >Password</label>
                    <input type="text"
                        className='form-control'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                {
                    error &&
                    <div className='col-6'>
                        {error}
                    </div>
                }
            </div>
        </div>
    )
}

export default LoginPage