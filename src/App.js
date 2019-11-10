import React,{Component} from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import getMember from './getMember/getMember';
import addMember from './addMember/addMember';
import getMembers from './getMembers/getMembers';
import home from "./Home/home";

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Router>
        <Route exact path="/" component={home}></Route>
        <Route exact path="/getMember" component={getMember}/>
        <Route exact path="/addMember" component={addMember}/>
        <Route exact path="/getMembers" component={getMembers}/>
      </Router>
    );
  }
}

export default App;
