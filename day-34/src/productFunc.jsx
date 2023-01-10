import { useState } from "react";
import logo from "./logo.svg";
import Product from "./Product";
import { Rating } from 'react-simple-star-rating'


// const [votes, setVotes] = useState(props.votes)
// function handleUpVote(props) {

//     setVotes(votes + 1)
//     // // console.log(props.id);
//     // const [votes, setVotes] = useState()
//     // const foundProduct = products.filter(product => {
//     //     if (product.id == props.id) {
//     //         product.votes = products.votes + 1
//     //     }
//     //     return product
//     // })
//     // console.log(foundProduct);


// }

// function handleUpVote(props) {

// }
function ProductFunc(props) {
    const [stars, setStars] = useState(props.stars)
    const [votes, setVotes] = useState(props.votes)
    // const 
    function handleUpVote(props) {
        setVotes(votes + 1)

        if (stars >= 5) {
            setStars(5)
        } else {
            setStars(stars + 1)
        }


    }
    function handDownVote(params) {
        setStars(stars - 1)

    }
    return (
        <div className="container">
            <div className="r1">
                <img className="rounded-5" src={props.submitterAvatarUrl} alt=""></img>
                <div>
                    <p><img onClick={() => { handleUpVote(props) }} className='lg ' src={logo} /><strong>{votes}</strong></p>
                    <a href="#">{props.title}</a>
                    <p>{props.description}</p>
                    <br />

                    <p>{props.url}
                        {stars}
                        <img className='lg' src={logo} onClick={() => { handDownVote() }} />
                        {/* <img className='lg' src="0-circle-fill.svg"/> */}
                    </p>
                    <Rating
                        initialValue={stars}
                    />

                </div>

            </div>
        </div>
    );
}

export default ProductFunc;