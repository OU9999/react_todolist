import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
    }
  *{
    box-sizing: border-box;
  }
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default Root;
