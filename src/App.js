import ParentComponent from "./ParentComponent";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstForm from "./FormComponents/FirstForm";
import SecondForm from "./FormComponents/SecondForm";

function App() {
  return (
    // <div className="App">
    //   <ParentComponent></ParentComponent>
    // </div>
    <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={FirstForm}/>
          <Route path="/SecondForm" component={SecondForm}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;