import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState([]);
    const ValidateEmail=()=>{
        const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailPattern.test(email)){
            setmessage("valid email address!!");
        }else{
            setmessage("invalid email address!!");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile([...profile, { name, email }]);
        // Reset the form fields
        setName('');
        setEmail('');
        // Keep the form visible for further input
    };

    return (
        <div>
            <form onSubmit={handleSubmit} class="form">
                <div>
                    <label>Name:</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'onClick={ValidateEmail}>submit</button>
            </form>
            <h2>Profile Details</h2>
            <ul>
                {profile.map((profile, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {profile.name}, <strong>Email:</strong> {profile.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;
