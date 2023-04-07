export default function FanceButton(props:any){
    return(
        <div>
            <button className="button">{props.children}</button>
            <style jsx>
                {
                    `.button{
                        padding:1rem;
                        border-radius:1em;
                        border:none;
                        background:white;
                        color:black
                    }`
                }
            </style>
        </div>
    )
}