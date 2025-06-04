# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/Blog%20preview%20card.png)

### Links

- Solution URL: [https://github.com/Praise25/Blog-preview-card](https://github.com/Praise25/Blog-preview-card)
- Live Site URL: [https://blog-preview-card-three-murex.vercel.app/](https://blog-preview-card-three-murex.vercel.app/)

## My process

### Built with

- React
- Typescript

### What I learned

My major learning experience in this project was working with the motion library for animating react apps. I got stuck in the process of 
learning how to work with variants in typescript. Was able to get my issue pointed out by a fellow community member and from there
I was back in the game. Animation has always been a big part of frontend for me, I love it, so it felt really good to learn more
about working with motion. I see myself using it a whole lot in the near future. 

Also learnt how to implement a fading in/fading out transition for elements, which I almost wrote off as impossible since there was no
mention of it in the motion docs. Eventually had the idea to create 2 shadows instead after some reading and research, then use varaints
to hide one and show the other, and switch them when the card was hovered over. It was a really fun learning experience. Code snippet for the files showcasing the implementation is shown below.


Card.module.css
```css
.container {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  max-width: calc(335rem / 16);
  padding: calc(23em / 16);
  border: 1px solid black;
  border-radius: calc(20rem / 16);
  box-shadow: 8px 8px 0 0 #000000;
}

.shadow-container {
  border-radius: calc(20rem / 16);
  box-shadow: 8px 8px 0 0 #000000;
}
```


Card.tsx
```js
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

```

### Continued development

Similarly to what I mentioned before, I'm going to keep working on implementing really complex, fun and fluid animations. 

### Useful resources

- [Motion for React docs](https://motion.dev/docs/react-animation) - This helped me get started with creating complex and fluid animations. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Praise25](https://www.frontendmentor.io/profile/Praise25)
- LinkedIn - [Anene Praise](https://www.linkedin.com/in/praise-anene-07776416a/)
