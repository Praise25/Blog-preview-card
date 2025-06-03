import classes from "./CardContent.module.css";

import { motion, type Variants } from "motion/react";

const colorVariants: Variants = {
  initial: { color: "#111111", transition: { duration: 0.5 } },
  hover: { color: "#f4d04e", transition: { duration: 0.5 } },
};

export default function CardContent() {
  return (
    <div className={classes.container}>
      <p className={`${classes["content-tag"]} ${classes["text-preset-4"]}`}>
        Learning
      </p>
      <p className={classes["text-preset-3"]}>Published 21 Dec 2023</p>
      <motion.p
        className={`${classes["text-preset-1"]}`}
        variants={colorVariants}
      >
        HTML & CSS foundations
      </motion.p>
      <p className={classes["text-preset-2"]}>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
}
