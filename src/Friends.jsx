import { use } from "react"
import Friend from "./Friend"

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise)
    console.log(friends)
    return(
        <div className="first">
            <h3> friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}