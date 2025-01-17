import './app.scss';
import RouterComp from './Router/Router';
import LoginProvider from './context/LoginContext';

function App() {

  return (
    <LoginProvider>

      <RouterComp />

    </LoginProvider>
  );
};

export default App;