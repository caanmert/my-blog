import React from "react";
import type { MainLayoutProps } from "./main-layout.props";
import styles from "./main-layout.module.scss";

const MainLayout = (props: MainLayoutProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>{props.header}</div>
      <div className={styles.sliderContainer}>{props.slider}</div>
      <div className={styles.sidebarContainer}> {props.sidebar}</div>
      <div className={styles.contentContainer}> {props.content}</div>
    </div>
  );
};

export default MainLayout;