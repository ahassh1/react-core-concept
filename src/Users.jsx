import { use } from "react"

export default function Users({fatchUsers}){

    const users =use(fatchUsers)

    console.log(users)
    return(
        <div className="first">
                  <h1>Users:{users.length} </h1>
        </div>
    )
}