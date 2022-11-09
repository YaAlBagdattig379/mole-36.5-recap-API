//..1.. random user example 
const userData = () => {
    const url = 'https://randomuser.me/api/'
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}
userData()
const displaySingleUser = user =>{
//    console.log(user)
}
