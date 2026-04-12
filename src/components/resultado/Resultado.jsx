import SimularDesconto from "../../services/SimularDesconto";
import EntradaValor from "../entrada/EntradaValor";
import SeletorCliente from "../seletor/SeletorCliente";

export function Resultado () {

    const desconto = SimularDesconto()
    const valor = EntradaValor()
    const cliente = SeletorCliente()

    if (cliente === "comum") {

        return (`Você é um cliente comum com 5% de desconto. Valor Final: R$ ${desconto}`)

    }else if (cliente === "parceiro") {

        return (`Você é um cliente parceiro com 15% de desconto. Valor Final: R$ ${desconto}`)
    
    } else if (cliente === "funcionario") {

        return (`Você é um cliente funcionário com 30% de desconto. Valor Final: R$ ${desconto}`)   
    
    } else if (cliente === "vip") {

        return (`Você é um cliente VIP com 20% de desconto. Valor Final: R$ ${desconto}`)
    }

   

}