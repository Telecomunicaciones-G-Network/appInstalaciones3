const getToday=()=>{
    const date = new Date()
    const today=`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    
    
    return today
}