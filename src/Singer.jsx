import "./App.css"
export default function Singer({singer}){
    return(
        <div className="first">
            <h2>Name: {singer.name}</h2>
            <h4>age: {singer.age}</h4>
        </div>
    )
}
