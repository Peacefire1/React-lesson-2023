import { useState } from "react";

export default function Login(){

    const [user, setUser] = useState({
        loginName:"asdasd@gmail.com",
        password:"123456"
    })


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target.username.value);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Login name:</label>
                <input name="ssername" type="email" /><br />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
                <button>Sign in</button>
            </form>
        </div>
    )
}