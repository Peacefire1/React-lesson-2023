export default function Button() {
    // function handleClick() {
    //     alert("You clicked me!");
    // }
    return (
        // <button onClick={handleClick}>
        //     Clcik me
        // </button>
        <button onClick={() => {
            alert("you clicked me")
        }}>
            Click me
        </button>
    )
}


