import Post from '../models/bestcouples';

// model => id, userId, userName, imageUri (temporal)

export const POSTS = [
  new Post(
    'b1',
    'user1',
    'userName1',
    '../assets/bf1.jpg'
  ),

  new Post(
    'b3',
    'user3',
    'userName3',
    '../assets/bf3.jpg',
  ),

  new Post (
    'b4',
    'user4',
    'userName4',
    '../assets/bf4.jpg',
  ),

  new Post (
    'b2',
    'user2',
    'userName2',
    '../assets/bf2.jpg',
  ),
]