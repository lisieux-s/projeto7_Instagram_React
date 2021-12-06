export default function Comentario(props) {
  return (
    <div class="comentario">
      
        <p>
          <strong>{props.commentUser} </strong>{props.commentText}
        </p>
        <button>
          <ion-icon name="heart-outline"></ion-icon>
        </button>
      

    </div>
  );
}
