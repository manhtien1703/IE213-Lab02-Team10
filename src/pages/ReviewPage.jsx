import Review from "../components/Review";
import styles from "../css/Reviews.module.css";
function ReviewPage() {
  return (
    <div className={styles["main"]}>
      <section className={styles["container"]}>
        <div className={styles["title"]}>
          <h2>our reviews</h2>
          <div className={styles["underline"]}></div>
        </div>
        <Review />
      </section>
    </div>
  );
}

export default ReviewPage;