let Card=({title,deadline,isImportant,description})=>{
    return <div>
        <h4>{title}</h4>
        <p>{`${deadline.hour} hrs ${deadline.minutes} mins on ${deadline.day}-${deadline.month}-${deadline.year}`}</p>
        {(isImportant==='true')?<p>Important</p>:<p>Not Important</p>}
        <p>{description}</p>
    </div>
}

export default Card;