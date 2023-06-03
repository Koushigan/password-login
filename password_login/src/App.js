import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EmailSent from "./pages/EmailSent";
import { StyledContainer } from "./components/Styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";


function App({ checked }) {
  return (
    <Router>
     {checked && (
      <StyledContainer>
        <Switch>
          <BasicRoute path ="/emailsent/:userEmail">
            <EmailSent />
          </BasicRoute>
          <BasicRoute path ="/signup">
            <Signup />
          </BasicRoute>
          <BasicRoute path ="/login/:userEmail">
            <Login />
          </BasicRoute>
          <AuthRoute path ="/dashboard">
            <Dashboard />
          </AuthRoute>
          <Route path ="/">
            <Home />
          </Route>
        </Switch>
      </StyledContainer>
     )}
    </Router>
  );
     }
     const mapStateToProps = ({ session }) => ({
      checked: session.checked,
     });
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


export default App;
