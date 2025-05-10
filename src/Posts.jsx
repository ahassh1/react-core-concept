import { use } from "react"
import Post from "./Post"

export default function Posts({postsPromise}){
    const posts = use(postsPromise)
    console.log(posts)

    return(
        <div className="first">
            <h2> Name: {posts.length} </h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}