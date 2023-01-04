import logo from "./logo.svg";

function ProductFunc(props){
    return(
        <div className="container">
                <div className="r1">
                    <img className="rounded-5"  src={props.submitterAvatarUrl} alt=""></img>
                    <div>
                        <p><img className='lg ' src={logo}/><strong>{props.id}</strong></p>
                        <a href="#">{props.title}</a>
                        <p>{props.description}</p>
                        <br/>
                        
                        <p>{props.url}
                        {props.votes}

                        <img className='lg' src={logo}/>
                        {/* <img className='lg' src="0-circle-fill.svg"/> */}
                        </p>

                    </div>
                    
                </div>
            </div>
    );
}

export default ProductFunc;