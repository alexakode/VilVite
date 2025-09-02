import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { passwordForm } from "./passwordForm.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <form id="myLoginForm">
      <input type="text" name="email" placeholder="Enter your email" />
      <input type="password" name="password" id="password" placeholder="Enter your password" />
      <button type="submit">Login</button>
    </form>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="generate-uuid" type="button">Generate UUID</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
passwordForm;
generateUUIDButton(document.querySelector("#app"));
setupCounter(document.querySelector("#counter"));
passwordForm(document.querySelector("#myLoginForm"));
generateUUIDButton(document.querySelector("#generate-uuid"));
