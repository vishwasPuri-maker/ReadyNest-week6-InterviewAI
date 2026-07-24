import React, { useState } from 'react'
import "./auth.form.scss"
import { useNavigate, Link } from "react-router"
import { useAuth } from "../hooks/useAuth"


const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate("/");
    }

    if (loading) {
        return (
            <main className='loading-screen'>
                <h1>Loading...</h1>
            </main>
        )
    }

    return (
        <div className='auth-page'>

            {/* Left — Brand Panel */}
            <div className='auth-brand'>
                <div className='auth-brand__content'>
                    <div className='auth-brand__logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                        <span>InterviewAI</span>
                    </div>
                    <h1>Your interview<br />success starts here.</h1>
                    <p>Create your free account and get personalized interview strategies powered by AI.</p>

                    <div className='auth-brand__stats'>
                        <div className='auth-brand__stat'>
                            <span className='auth-brand__stat-value'>10K+</span>
                            <span className='auth-brand__stat-label'>Reports</span>
                        </div>
                        <div className='auth-brand__stat'>
                            <span className='auth-brand__stat-value'>95%</span>
                            <span className='auth-brand__stat-label'>Satisfaction</span>
                        </div>
                        <div className='auth-brand__stat'>
                            <span className='auth-brand__stat-value'>30s</span>
                            <span className='auth-brand__stat-label'>Generation</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right — Form Panel */}
            <div className='auth-form-panel'>
                <div className='auth-form-container'>
                    <div className='auth-form-header'>
                        <h2>Create your account</h2>
                        <p>Get started with InterviewAI for free</p>
                    </div>

                    <form onSubmit={handleSubmit} className='auth-form'>
                        <div className="auth-input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                id='username'
                                name='username'
                                placeholder='johndoe'
                            />
                        </div>
                        <div className="auth-input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id='email'
                                name='email'
                                placeholder='you@example.com'
                            />
                        </div>
                        <div className="auth-input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id='password'
                                name='password'
                                placeholder='Create a strong password'
                            />
                        </div>
                        <button type='submit' className="button primary-button auth-submit-btn">
                            Create Account
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </button>
                    </form>

                    <p className='auth-switch'>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register