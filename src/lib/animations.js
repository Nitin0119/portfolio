export const customEase = [0.19, 1, 0.22, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
