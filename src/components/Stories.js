import Story from "./Story";
export default function Stories() {
  const stories = 
  [
    { imgURL: "assets/img/9gag.svg", user: "9gag" },
    { imgURL: "assets/img/meowed.svg", user: "meowed" },
    { imgURL: "assets/img/barked.svg", user: "barked" },
    { imgURL: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
    { imgURL: "assets/img/wawawicomics.svg", user: "wawawicomics" },
    { imgURL: "assets/img/respondeai.svg", user: "respondeai" },
    { imgURL: "assets/img/filomoderna.svg", user: "filomoderna" },
    { imgURL: "assets/img/memeriagourmet.svg", user: "memeriagourmet" },
  ];
  return (
    <div class="stories">
      {stories.map((story) => (Story(story)
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
        
}