import Post from '../models/bestcouples';

// model => id, userId, userName, imageUri (temporal)

export const POSTS = [
  new Post(
    'b1',
    'user1',
    'まさと',
    "https://pakutaso.cdn.rabify.me/shared/img/thumb/takebeIMGL3609.jpg?d=500"
  ),

  new Post(
    'b3',
    'user3',
    'ふみや',
    "https://pakutaso.cdn.rabify.me/shared/img/thumb/00_PP56_PP.jpg?d=500"
  ),

  new Post(
    'b4',
    'user4',
    'たつと',
    "https://pakutaso.cdn.rabify.me/shared/img/thumb/PAK85_kokubansotugyou15213559.jpg?d=500"
  ),

  new Post(
    'b2',
    'user2',
    'みのり',
    "https://www.pakutaso.com/shared/img/thumb/TAKEBEIMGL3652_TP_V.jpg"
  ),
]