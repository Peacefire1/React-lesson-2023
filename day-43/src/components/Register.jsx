



export default function Register() {
    return (
        <div>
            <h1>It's register page</h1>
            <form action="">
                <label htmlFor="email">email:</label>
                <input name="email" type="email" value="" /><br />
                <label htmlFor="firstname">FirstName:</label>
                <input name="firstname" type="text" /> <br />
                <label htmlFor="lastname">LastName:</label>
                <input name="lastname" type="text" /> <br />
                <label htmlFor="Password">Password:</label>
                <input name="password" type="password" /><br />
                <label htmlFor="Password">Confirm Password:</label>
                <input name="password" type="password" /><br />
                <button>Register</button>

            </form>
        </div>
    )
}