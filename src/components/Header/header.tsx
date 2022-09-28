import React from "react";
import { HeaderProps } from "./header.props";
import styles from "./header.module.scss";

export const Header = (props: HeaderProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.navLinks}>Nav-Links</div>
    </div>
  );
};
