import styles from "./Pulse.module.css";
const Pulse = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className={styles.pulse}></span>
      <span className={styles.knob}></span>
    </span>
  );
};

export default Pulse;
