export default function User(props) {
  return (
    <div class="usuario">
      <img src={props.imgURL} />
      <div class="texto">
        <strong>{props.username}</strong>
        {props.name}
      </div>
    </div>
  );
}
