import React from 'react'


export default function Login(){
return(
    <LoginComponente>
        <h1>Menu Login</h1>
        <div>
            <form onSubmit={logar}>
                <fieldset>
                    <legend>A seguir efetue o registro dentro da plataforma para ter acesso a mas informacoes </legend>
                    <div>
                        <label>RM</label>
                        <input type="text" name="rm" placeholder="Rm" value={usuario.rm} onChange={handleChange}/>
                    </div>
                    
                    <div>
                        <label>Usuario</label>
                        <input type="text" name="login" placeholder="Login" value={usuario.login} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" name="senha" placeholder="Senha" value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Logar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </LoginComponente>
)

}









// export default function Login() {
//     return (
//       <SectionLogin>
//           <Container>
//               <div className='Registro'></div>
//                   <h2>Ola, Seja Bem Vindo!</h2>
//                   <p>A segur efetue o registro dentro da plataforma para ter acesso a mas informacoes </p>
//                   <form>
//                       <div>
                          
//                       </div>
//                   </form>
//           </Container>
//       </SectionLogin>
//     )
//   }