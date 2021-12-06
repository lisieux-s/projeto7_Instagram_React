import Comentarios from "./Comentario";
import Post from "./Post";
export default function Posts() {
  const posts = [
    {
      imgURL: "assets/img/meowed.svg",
      user: "meowed",
      postURL: "assets/img/gato-telefone.svg",
      curtidoPorURL: "assets/img/respondeai.svg",
      curtidoPor: "respondeai",
      nCurtidas: "101.523",
      comentarios: [],
      loggedUserImgURL: "assets/img/catanacomics.svg"
    },

    {
      imgURL: "assets/img/barked.svg",
      user: "barked",
      postURL: "assets/img/dog.svg",
      curtidoPorURL: "assets/img/adorable_animals.svg",
      curtidoPor: "adorable_animals",
      nCurtidas: "99.159",
      comentarios: [
        {
          commentUser: "meowed", 
          commentText: "meow",
        },
        {
          commentUser: "barked", 
          commentText: "bork bork",
        }
      ],
      loggedUserImgURL: "assets/img/catanacomics.svg"
    },
  ];
  return <div class="posts">{posts.map((post) => Post(post))}</div>;
}
