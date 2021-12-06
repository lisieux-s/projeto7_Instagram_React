import User from "./User";
import Sugestoes from "./Sugestoes";

const user = {
  imgURL: "assets/img/catanacomics.svg",
  username: "catanacomics",
  name: "Catana",
};

export default function Sidebar() {
  return (
    //sugestao é elemento repetitivo, então sugiro props
    //use map (for logged in user)
    <div class="sidebar">
      {User(user)}
      <Sugestoes />
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
