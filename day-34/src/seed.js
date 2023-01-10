
function generateVoteCount(props) {
  return Math.floor((Math.random() * 50) + 15);
}





const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
    productImageUrl: 'images/products/image-aqua.png',
    stars: 1,
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReZioDRbgaGh1DqANENA6XTgtbvTQIk-ehaixfqChxnY6U4_WRkDniLRlILfyNOh-oaI&usqp=CAU',
    productImageUrl: 'images/products/image-rose.png',
    stars: 2,
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Mnl_Pw6A7QIYnXrEyZVYo6lWoIc1CE3hTIZLMJC7uTSMqHchY1V46EJQ2aBOAaRF8S0&usqp=CAU',
    productImageUrl: 'images/products/image-steel.png',
    stars: 3,
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbcV7-gr3QKbs8UHoOpS2i6CpPmLZIEzL8YzpD_GSVe0WDmF9Tn7kyYgxlopUbgmeRtA&usqp=CAU',
    productImageUrl: 'images/products/image-yellow.png',
    stars: 4,
  },
];


export default products
