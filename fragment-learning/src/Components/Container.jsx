import styles from "./container.module.css";

const Container = (props) => {
  return <div className={styles.Box}>{props.children}</div>;
};

export default Container;
