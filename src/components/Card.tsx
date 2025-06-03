import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import classes from "./Card.module.css";

import { motion, type Variants } from "motion/react";

const colorVariants: Variants = {
  initial: { color: "#111111" },
  hover: { color: "#f4d04e" },
};

export default function Card() {
  return (
    <motion.div
      variants={colorVariants}
      initial="initial"
      animate="initial"
      whileHover="hover"
      className={`${classes.container} card-container`}
    >
      <CardImage />
      <CardContent />
      <CardFooter />
    </motion.div>
  );
}
