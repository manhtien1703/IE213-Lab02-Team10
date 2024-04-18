import styles from "../css/Tours.module.css";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className={styles["title"]}>
        <h2>our tours</h2>
        <div className={styles["underline"]}></div>
      </div>
      <div>
        {tours.map((tour, index) => {
          return <Tour key={index} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;