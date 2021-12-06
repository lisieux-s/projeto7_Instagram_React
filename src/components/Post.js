import Comentario from "./Comentario";

export default function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgURL} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.postURL} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidoPorURL} />
          <div class="texto">
            Curtido por <strong>{props.curtidoPor}</strong> e{" "}
            <strong>outras {props.nCurtidas} pessoas</strong>
          </div>
        </div>
        <div class="comentarios">
          {props.comentarios.map((comentario) => Comentario(comentario))}
          <div class="publicar-comentario">
            <div>
              <img src={props.loggedUserImgURL} />
              <input type="text" placeholder="Adicione um comentário..." />
              </div>
            <button>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
