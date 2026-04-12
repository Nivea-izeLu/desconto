import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SeletorCliente  from "./components/seletor/SeletorCliente";
import EntradaValor from "./components/entrada/EntradaValor";
import BotaoCalcular from "./components/botao/BotaoCalcular";
import Resultado from "./components/resultado/Resultado";

function App() {

  return (
    
    
    <div>

      <Header />

        <div>
          
            <EntradaValor />
            <SeletorCliente />
            <BotaoCalcular />
            <Resultado />

            <h4> Você recebeu um ótimo desconto! </h4>
        </div>

      <Footer />

    </div>
  );
}

export default App;