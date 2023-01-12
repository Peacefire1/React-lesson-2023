import { useState } from "react"

export default function UpdatingObjects() {

    // const user = { age: 18, name: "Dorj" };
    // user.age = 20;
    // console.log(user);

    const [user, setUser] = useState({ age: 18, name: "dorj" })
    const check = () => {
        // user.age = + 20
        // setUser({ age: user.age + 20, name: "dorj" })
        const newUser = { ...user }
        newUser.age += 20
        setUser(newUser)
    }

    return (
        <div>
            Updating Objects
            <button onClick={check}>
                User age is {user.age}
            </button>
            <button>s</button>
            <button>s</button>
            <button>s</button>
            <button>s</button>
        </div>
    )
}