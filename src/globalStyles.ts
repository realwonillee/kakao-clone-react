import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: white;
    padding: 10px 20px;
    color: #020202;
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  main {
    animation: fadeIn 0.5s ease-in-out;
  }
`;

export default GlobalStyles;
