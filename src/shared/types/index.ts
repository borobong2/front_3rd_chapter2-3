interface PostsData {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reactions
  views: number
  userId: number
  author?: User
}

interface Reactions {
  likes: number
  dislikes: number
}

interface User {
  id: number
  username: string
  image: string
  firstName?: string
  lastName?: string
  age?: number
  email?: string
  phone?: string
  address?: {
    address: string
    city: string
    state: string
  }
  company?: {
    name: string
    title: string
  }
}

interface Comment {
  id: number
  body: string
  postId: number
  userId: number
  likes: number
  user: User
}

interface NewComment {
  body: string
  postId: number | null | undefined
  userId: number
}

interface Tag {
  url: string
  slug: string
}

interface NewPost {
  title: string
  body: string
  userId: number
}

interface URLParams {
  skip?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: string
  tag?: string
}

export type { PostsData, Post, Reactions, User, Comment, NewComment, Tag, NewPost, URLParams }
