'use client'
import { fadeUpAnimationDelay } from '@/data/animation'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const FadeUpAnimationDelay = ({ children, className }) => {
  return (
    <motion.div variants={fadeUpAnimationDelay} initial="initial" animate="animate" className={className}>
      {children}
    </motion.div>
  )
}

FadeUpAnimationDelay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default FadeUpAnimationDelay
