const postRequest = document.querySelector('#post')
const readRequest = document.querySelector('#readAll')
const readRequest = document.querySelector('#read')
const updateRequest = document.querySelector('#update')
const deleteRequest = document.querySelector('#delete')

postRequest.addEventListener('click', async(e)=>{
    e.preventDefault()
   const resultado = await axios.post('https://blog-express-gabi.herokuapp.com/api/blogs/', blogData)
})
readAllRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const resultado = await axios.get('https://blog-express-gabi.herokuapp.com/api/blogs/')
    console.log(resultado);
})
readRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const resultado = await axios.get('https://blog-express-gabi.herokuapp.com/api/blogs/5fbbaf3e72dc32001794327e')
    console.log(resultado);
})
updateRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const resultado = await axios.patch('https://blog-express-gabi.herokuapp.com/api/blogs/5fbbaf3e72dc32001794327e',{blogData: {marca: 'Opela'}})
    console.log(resultado);
})
deleteRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const resultado = await axios.delete('https://blog-express-gabi.herokuapp.com/api/blogs/5fbbaf3e72dc32001794327e')
    console.log(resultado);
})