export default function Friend({friend}){
    console.log(friend)
    const  {name,email} = friend

   return(
    <div className="first">
        <h2>Name: {name}</h2>
        <h4>Email: { email}</h4>
    </div>
   )
}