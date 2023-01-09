export default function ParentToolBar() {
    return (
        <div className="Toolbar" onClick={() => {
            alert("you clicked on the toolbar!");
        }}>
            <button onClick={(e) => {
                e.stopPropagation();
                alert("Playing!")
            }}
            >Play Movie</button>
            <button onClick={() => alert("Uplaoding!")}>Uplaod Image</button>
        </div>
    )
}