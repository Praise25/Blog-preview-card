import CardImage from "./CardImage"
import classes from "./Card.module.css"

export default function Card() {
  return (
    <div className={classes.container}>
      <CardImage />
      <div>
        Card Content
      </div>
    </div>
  )
}