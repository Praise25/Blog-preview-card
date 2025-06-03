import imgHeader from "../assets/illustration-article.svg"
import classes from "./CardImage.module.css"

export default function CardImage() {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={imgHeader} alt="The Card Image Header" />
    </div>
  )
}