import Story from "./Story";
export default function Stories() {
  //array de stories
  const stories = []
  return (
    //ok now do it using map
    <div class="stories">
      <Story imgURL="assets/img/9gag.svg" user="9gag" />
      <Story imgURL="assets/img/meowed.svg" user="meowed" />
      <Story imgURL="assets/img/barked.svg" user="barked" />
      <Story imgURL="assets/img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet" />
      <Story imgURL="assets/img/wawawicomics.svg" user="wawawicomics" />
      <Story imgURL="assets/img/respondeai.svg" user="respondeai" />
      <Story imgURL="assets/img/filomoderna.svg" user="filomoderna" />
      <Story imgURL="assets/img/memeriagourmet.svg" user="memeriagourmet" />
      
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
    
    
  );
}