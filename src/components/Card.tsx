import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import classes from "./Card.module.css";

import { motion, type Variants } from "motion/react";

const shadowVariant1: Variants = {
  initial: {
    boxShadow: "16px 16px 0 0 rgba(0, 0, 0, 0)",
    transition: { duration: 0.5 },
  },
  hover: {
    boxShadow: "16px 16px 0 0 rgba(0, 0, 0, 1)",
    transition: { duration: 0.5 },
  },
};

const shadowVariant2: Variants = {
  initial: {
    boxShadow: "8px 8px 0 0 rgba(0, 0, 0, 1)",
    transition: { duration: 0.5 },
  },
  hover: {
    boxShadow: "8px 8px 0 0 rgba(0, 0, 0, 0)",
    transition: { duration: 0.5 },
  },
};

export default function Card() {
  return (
    <motion.div
      className={classes["shadow-container"]}
      variants={shadowVariant1}
      initial="initial"
      animate="initial"
      whileHover="hover"
    >
      <motion.div variants={shadowVariant2} className={`${classes.container}`}>
        <CardImage />
        <CardContent />
        <CardFooter />
      </motion.div>
    </motion.div>
  );
}
