import { useState } from "react";
import "../css/Accordion.css";
import questionsData from "../data/QuestionsData";
import Question from "../components/Question";
function AccordionPage() {
  const [questions, setQuestions] = useState(questionsData);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default AccordionPage;