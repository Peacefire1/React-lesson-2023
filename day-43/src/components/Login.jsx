

export default function Login() {
    return (
        <div>
            <h1>It's login page</h1>
            <form action="">
                <label htmlFor="email">email:</label>
                <input name="email" type="email" /><br />
                <label htmlFor="Password">Password:</label>
                <input name="password" type="password" />
                <br />
                <button>sign in</button>
            </form>
        </div>
    )
}