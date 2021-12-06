import Sugestao from "./Sugestao";
export default function Sugestoes() {
  //PARASTE AQUI OH RAYOS
  //fazer array maneiro pras sugestoes
  const sugestoes = [
    {
      imgURL: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      imgURL: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      imgURL: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      imgURL: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      imgURL: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((sugestao) => (Sugestao(sugestao)))}
    </div>
  );
}
