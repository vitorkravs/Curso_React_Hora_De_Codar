import {useState} from 'react'

function FormS() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('cadastrou usuario')
    }

    const [name, setName] = useState()


  return (
    <div>
        <form onSubmit={cadastrarUsuario}>
            <label htmlFor="name">nome: </label>
            <input type="text" name='name' id='name' placeholder='Digite seu nome: 'onChange={(e) => setName(e.target.value)} />
            <label htmlFor="password">senha:  </label>
            <input type="password" id='password' name='password' placeholder='Digite a sua senha: '/>
            <button onClick={evento}>ativar</button>
        </form>
    </div>
  )
}

export default Form