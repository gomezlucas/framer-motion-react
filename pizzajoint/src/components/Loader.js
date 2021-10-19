import React from 'react'
import { motion, useCycle } from 'framer-motion'


const loadervariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                duration: 0.5,
                yoyo: Infinity,
            },
            y: {
                duration: 0.25,
                yoyo: Infinity,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
        
            y: {
                duration: 0.25,
                yoyo: Infinity,
                ease: 'easeOut'
            }
        }
    },
}


export default function Loader() {
    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')
    return (<>
        <motion.div className="loader"
            variants={loadervariants}
            animate={animation}
        >
        </motion.div>
            <div onClick={()=>cycleAnimation()}>Cycle loader</div>
            </>
    )
}
