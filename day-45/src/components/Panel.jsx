import { useState } from "react"

export default function Pan({ title, children, OnShow , isActive }) {


    return (



        <div>
            <h3>{title}</h3>
            {
                isActive ? <p>{children}</p>
                    : <button onClick={OnShow}>Show</button>
            }

        </div>
    )


}