export default function Header(props) {
    return (
        <div className="ui menu">
            <div className="right menu">
                <a className="item active">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i className="heart icon ">

                                {props.wishList.length}
                            </i>
                            <div className="menu">
                                {
                                    props.wishList.map((w, index) => {
                                        // if(setWishList){}
                                        return (
                                            <div key={index}>Choice {w.name} <button onClick={() => {
                                                console.log("remove frome wishlist");
                                                props.setWishList(
                                                    props.wishList.filter((wish) => wish.id !== w.id)
                                                )
                                            }}
                                            >x</button></div>
                                        )
                                    })
                                }
                                {/* <div class="item">Choice 1</div>
                                <div class="item">Choice 2</div>
                                <div class="item">Choice 3</div> */}
                            </div>
                        </div>
                    </div>

                </a>
                <a className="item"><i className="shopping basket icon"></i></a>
            </div>
        </div>
    )
}