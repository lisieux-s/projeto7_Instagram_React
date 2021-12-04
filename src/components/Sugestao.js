export default function Sugestao(props) {
  <div class="sugestao">
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <div class="nome">{props.nome}</div>
        <div class="razao">{props.razao}</div>
      </div>
    </div>

    <div class="seguir">Seguir</div>
  </div>;
}
