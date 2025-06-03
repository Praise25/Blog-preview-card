import footerIcon from "../assets/image-avatar.webp"
import classes from "./CardFooter.module.css"

export default function CardFooter() {
  return (
    <div className={classes.container}>
      <div className={classes["footer-image"]}>
        <img src={footerIcon} alt="Author's display picture" />
      </div>
      <p className={classes["footer-text"]}>Greg Hooper</p>
    </div>
  )
}