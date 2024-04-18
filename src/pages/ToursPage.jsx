import { useState, useEffect } from "react";
import styles from "../css/Tours.module.css";
import Loading from "../components/Loading";
import Tours from "../components/Tours";

const url = "https://course-api.com/react-tours-project";

function ToursPage() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    fetch("https://cors-anywhere.herokuapp.com/" + url)
      .then((response) => response.json())
      .then((data) => {
        setTours((preState) => [...preState, ...data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
        <div className={styles["main"]}>
          <Loading />
        </div>
    );
  }
  console.log(styles);
  if (tours.length === 0) {
    return (
        <div className={styles["main"]}>
          <div className={styles["title"]}>
            <h2>no tours left</h2>
            <button className={styles["btn"]} onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </div>
    );
  }
  return (
      <div className={styles["main"]}>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
  );
}

export default ToursPage;
