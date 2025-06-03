import classes from "./CardContent.module.css";

export default function CardContent() {
  return (
    <div className={classes.container}>
      <p className={`${classes["content-tag"]} ${classes["text-preset-4"]}`}>
        Learning
      </p>
      <p className={classes["text-preset-3"]}>Published 21 Dec 2023</p>
      <p className={`${classes["text-preset-1"]} card-title`}>HTML & CSS foundations</p>
      <p className={classes["text-preset-2"]}>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
}
