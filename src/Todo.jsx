// export default function Todo({task, isTrue}){
//  return(
//   <div className="students">
//        <h2>Task: {task} </h2>
//        <h4>Correct:{isTrue}</h4>
//   </div>
//  )
// }

export default function Todo({task, isTrue,time=0}){
    if(isTrue ===true){
        return <h2>Done:{task} Duration :{time}</h2>
    }
    else{
        return <h3>Pending: {task}</h3>
    }
}