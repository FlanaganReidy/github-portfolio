import logo from '../logo.svg';
import Header from '../components/Header/Header.js';
import styled, {createGlobalStyle} from 'styled-components';
import Profile from './Profile.js';

const AppWrapper = styled.div`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -mox-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const App = () => {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <Header logo={logo} />
      <Profile />
    </AppWrapper>
    </>
  );
}

export default App;
