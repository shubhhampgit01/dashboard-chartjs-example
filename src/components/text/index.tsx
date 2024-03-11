import React from "react";
import styles from "./styles.module.css";
import { Colors } from "../../constant/color";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}
const Text = ({
  children,
  color = Colors.primary_text_color,
  fontSize = 14,
  fontWeight = 400,
}: TextProps) => {
  return (
    <p
      className={styles.text}
      style={{
        color: color,
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
