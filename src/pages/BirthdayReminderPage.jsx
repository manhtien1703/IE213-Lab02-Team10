import { useState } from "react";
import "../css/BirthdayReminder.css";
import List from "../components/List";
import birthdayReminderData from "../data/BirthdayReminderData";
function BirthdayReminder() {
  const [people, setPeople] = useState(birthdayReminderData);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default BirthdayReminder;