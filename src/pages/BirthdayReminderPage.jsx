import { useState } from "react";
import styles from "../css/BirthdayReminder.module.css";
import List from "../components/List";
import birthdayReminderData from "../data/BirthdayReminderData";
function BirthdayReminder() {
  const [people, setPeople] = useState(birthdayReminderData);
  return (
    <div className={styles["body"]}>
      <div className={styles["main"]}>
        <section className={styles["container"]}>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </div>
    </div>
  );
}

export default BirthdayReminder;
