import CardImage from "./CardImage"
import CardContent from "./CardContent"
import CardFooter from "./CardFooter"

import classes from "./Card.module.css"

export default function Card() {
  return (
    <div className={classes.container}>
      <CardImage />
      <CardContent />
      <CardFooter />
    </div>
  )
}