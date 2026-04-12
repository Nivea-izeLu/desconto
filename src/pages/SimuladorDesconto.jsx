import SeletorCliente from "../components/SeletorCliente";
import EntradaValor from "../components/EntradaValor";

export function SimuladorDesconto () {

    const tipoCliente = SeletorCliente()
    const valor = EntradaValor()

    if (tipoCliente === "comum") {

            desconto = valor * 5 / 100

    }else if (tipoCliente === "parceiro") {

            desconto = valor * 15 / 100
    }
    else if (tipoCliente === "funcionario") {

            desconto = valor * 30 / 100
            
    }else if (tipoCliente === "vip") {

            desconto = valor * 20 / 100
    }


    return ( desconto )
}