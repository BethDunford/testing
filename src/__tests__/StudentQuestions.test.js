import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import StudentQuestions from "../components/StudentQuestions";
import App from "../App";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

test("StudentQuestions should render on the screen", () => {
act(()=> {
    ReactDOM.render(<StudentQuestions questions={[
    "Where am I?",
    "What year is it?",
    "How did you get in my house?"
    ]} />, container);
})

const h1 = container.querySelector("h1:nth-child(1)");
expect(h1.textContent).toBe("1: Where am I?");
const h1Second = container.querySelector("h1:nth=child(2)");
expect(h1Second.textContent).toBe("2: What year is it?");
})


//afterEach
//beforeEach
test("Updates when a new question is added", () => {
    act(() => {
        ReactDOM.render(<App />, container);
    })

    const inputField = container.querySelector("input")
    const button = container.querySelector("button.ask-button");
    inputField.value = "I have a question!"
    Simulate.change(inputField);
    Simulate.click(button);
    expect(container.querySelector("h1").textContent).toBe("1: I have a question!");
})