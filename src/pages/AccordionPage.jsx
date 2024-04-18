import { useState } from "react";
import styles from "../css/Accordion.module.css";
import questionsData from "../data/QuestionsData";
import Question from "../components/Question";
function AccordionPage() {
  const [questions, setQuestions] = useState(questionsData);
  return (
    <div className={styles["body"]}>
      <div className={styles["main"]}>
        <div className={styles["container"]}>
          <h3>questions and answers about login</h3>
          <section className={styles["info"]}>
            {questions.map((question) => {
              return <Question key={question.id} {...question}></Question>;
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default AccordionPage;
