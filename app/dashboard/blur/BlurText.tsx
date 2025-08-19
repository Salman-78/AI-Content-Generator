"use client";

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BlurText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState<string[]>([]);

  useEffect(() => {
    setDisplayText(text.split("")); // Break into individual letters
  }, [text]);

  return (
    <div style={{ display: "flex", gap: "4px", fontSize: "2rem", fontWeight: "bold" }}>
      {displayText.map((char, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(5px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
