const postRequest = document.querySelector('#post')
const readRequest = document.querySelector('#readAll')
const readRequest = document.querySelector('#read')
const updateRequest = document.querySelector('#update')
const deleteRequest = document.querySelector('#delete')
const marca = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const cilindrada = document.querySelector('#cilindrada')
const combustible = document.querySelector('#combustible')


const blogData = {
    marca: 'Hummer',
    modelo: 'H2',
    cilindrada: '5000cc',
    combustible: 'Gasolina'

}

form.addEventListener('submit', async (e)=>{
    console.log(e.target)
    e.preventDefault()
    const blogData = await axios.post ('https://blog-express-gabi.herokuapp.com/api/blogs', {
        marca: e.target.elements.marca.value,
        modelo: e.target.elements.modelo.value,
        cilindrada: e.target.elements.cilindrada.value,
        combustible: e.target.elements.combustible.value,
    });
    console.log(blogData);
})


postRequest.addEventListener('click', async(e)=>{
    e.preventDefault()
   const blogData = await axios.post('https://blog-express-gabi.herokuapp.com/api/blogs/', blogData)
})
readAllRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const blogData = await axios.get('https://blog-express-gabi.herokuapp.com/api/blogs/')
    console.log(blogData);
})
readRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const blogData = await axios.get('https://blog-express-gabi.herokuapp.com/api/blogs/5fbbaf3e72dc32001794327e')
    console.log(blogData);
})
updateRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const blogData = await axios.patch('https://blog-express-gabi.herokuapp.com/api/blogs/5fbf637591bbb0001789780c',{marca: 'Opela'})
    console.log(blogData);
})
deleteRequest.addEventListener('click', async (e)=>{
    e.preventDefault()
    const blogData = await axios.delete('https://blog-express-gabi.herokuapp.com/api/blogs/5fbbaf3e72dc32001794327e')
    console.log(blogData);
})