SeletorCliente.jsx


import { useState } from "react";

function SeletorCliente(){

    const  [status, setStatus] = useState("visitante");

    const verificarUsuario = () => {

        if(status === "vip"){
            return "Você terá 20% de desconto";
        }
        else if (status === "funcionario"){
            return "Você terá 30% de desconto";
        }
         else if (status === "parceiro"){
            return "Você terá 15% de desconto";
        }
        else if (status === "comum"){
            return "Você terá 5% de desconto";
        }

        else {
            return "Escolha um tipo de cliente ";
        }

    }

   
        
          


 return(

         <div>

  <h2>Selecione o tipo de cliente</h2>
                      <select onChange={(e) => setStatus(e.target.value)}>
                <option value="vip">VIP</option>
             <option value="funcionario">Funcionário</option>
                <option value="parceiro">Parceiro</option>
                  <option value="comum">Comum</option>

                            </select>

                            <p>{verificarUsuario()}</p>
        
        </div>
    );
}



export default SeletorCliente;