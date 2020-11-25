const postRequest = document.querySelector('#post')
const readRequest = document.querySelector('#readAll')
const readRequest = document.querySelector('#read')
const updateRequest = document.querySelector('#update')
const deleteRequest = document.querySelector('#delete')


const blogData = {
    marca: 'Hummer',
    modelo: 'H2',
    cilindrada: '5000cc',
    combustible: 'Gasolina'

}


<form id="blog" action="/api/blogs" method="POST">
   <ul> 
     <li><label for="marca">Marca:</label>
    <textarea id="marca" name="marca" required rows="2" cols="70"></textarea></li>
    <li><label for="modelo">Modelo:</label>
    <textarea id="modelo" name="modelo" required rows="2" cols="70"></textarea></li>
    <li><label for="cilindrada">Cilindrada:</label>
    <textarea id="cilindrada" name="cilindrada" required rows="2" cols="70"></textarea></li>
    <li><label for="combustible">Combustible:</label>
    <textarea id="combustible" name="combustible" required rows="2" cols="70"></textarea></li>
   
    
    <li><input type="submit" value="Crear nuevo coche"></li>
  </ul>
  </form>
  

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