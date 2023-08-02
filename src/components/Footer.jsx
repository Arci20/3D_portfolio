import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

function Footer() {
  return (
    <>
     <motion.div variants= {textVariant()}>
      <h2 className={styles.sectionHeadText}>All Rights Reserved</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Footer, "");


