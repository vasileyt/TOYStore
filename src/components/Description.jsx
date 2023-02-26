import React from 'react'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <div>
    <div>Description</div>

      <motion.img 
      width={'15%'}
      src='/img/icon.png'
      alt=''

        //анимация
        animate={{rotate:360}}
        transition={{
          delay:1,
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType:'reverse',
          type:'inertia'
        }}
        />

        <motion.p
        initial={{
          x:-1000,
          opacity:0
        }}

        animate={{
            x: 500,
            opacity: 1
        }}
        transition={{
          delay:1,
          duration: 2,
          type:'tween'
        }}
        >
            Текст который появится 
        </motion.p>

    </div>
  )
}

export default Description