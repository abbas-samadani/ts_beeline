import './App.css'
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";


function App() {
  return (
    <div className="App" >
      <Header />
      <div className="row">
        <Main />
        <Basket />
      </div>

    </div>

  );
}

export default App;
