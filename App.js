import React,{useState} from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }

  


  
  render(){
  return (
    <div className="App">
    <form className="form">
      <div className="form-inner">
        <h2 className="h2">LOGIN</h2>
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input type="text" id="name" name="name" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Pasword:</label>
          <input type="text" id="password" name="password" className="input" />
        </div>
        <input type="submit" value="LOGIN" className="inputbutton"/>
      </div>
    </form>
    </div>
  );
  }
}
export default App;