export default function Post({post}){
    const {id, body} = post
    return(
        <div className="first">
            <p> {id}</p>
            <h1>post : {post.title} </h1>
            <h2>{body}</h2>

        </div>
    )
}