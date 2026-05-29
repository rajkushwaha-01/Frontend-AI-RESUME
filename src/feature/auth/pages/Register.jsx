import React from 'react'

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <button className="button primary-button" type="submit">Login</button>
                </form>
            </div>
        </main>
  )
}

export default Register

