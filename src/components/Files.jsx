import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

function Files() {
  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Achievements</h2>
      </motion.div>
      <button className="btn">
        <a
          href={
            "https://drive.google.com/drive/folders/1EHHerlPry4lNg3GEnjL1mB99O-VsN0ay?usp=drive_link"
          }
        >
          <motion.div>
            <h3 className={styles.sectionSubText}>My Achievements</h3>
          </motion.div>
        </a>
      </button>
    </>
  );
}

export default SectionWrapper(Files, "");
