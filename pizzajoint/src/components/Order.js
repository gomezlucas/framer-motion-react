import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'


const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '120',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    }
  } ,
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  }
}




const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true)

  setTimeout(() => {
    setShowTitle(false)
  }, 3000);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000);
 
  }, [setShowModal])

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AnimatePresence>
        {
          showTitle &&
            <motion.h2
              exit={{x:'-100vw'}}
            >Thank you for your order :)</motion.h2>
          
        }
      </AnimatePresence>
      <motion.p variants={childVariants} > You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;