import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/92690625?v=4"
              className="profile"
              alt="profile pic"
            ></img>
            <div>
              <h3>Laura Gularte</h3>
              <span>@laurabgularte</span>
              <p>trying to learn some new stuff</p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default App;
