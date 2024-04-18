import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "../css/Tabs.module.css";

const url = "https://course-api.com/react-tabs-project";
function TabsPage() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    fetch("https://cors-anywhere.herokuapp.com/" + url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className={`${styles["section"]} ${styles["loading"]}`}>
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className={styles["section"]}>
      <div className={styles["title"]}>
        <h2>experience</h2>
        <div className={styles["underline"]}></div>
      </div>
      <div className={styles["jobs-center"]}>
        {/* btn container */}
        <div className={styles["btn-container"]}>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`${styles["job-btn"]} ${index === value && styles["active-btn"]}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className={styles["job-info"]}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={styles["job-date"]}>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className={styles["job-desc"]}>
                <FaAngleDoubleRight className={styles["job-icon"]}></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className={styles["btn"]}>
        more info
      </button>
    </section>
  );
}

export default TabsPage;