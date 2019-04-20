import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Constants from './constants';
import AddComponent from './components/AddComponent'
import SubtractComponent from "./components/SubtractComponent";
import MultiplyComponent from "./components/MultiplyComponent";
import DivideComponent from "./components/DivideComponent";
import PowerComponent from "./components/PowerComponent";
import SqrtComponent from "./components/SqrtComponent";
import QrtComponent from "./components/QrtComponent";
import FactorialComponent from "./components/FactorialComponent";


class App extends Component {


  constructor(props){
    super(props);
    this.state = {
        stats : [],
        isLoaded: false,
    }
  }

  componentDidMount(){
      fetch(Constants.BASE_URL+"/stats")
          .then(res => res.json())
          .then(json => {
            this.setState({
                isLoaded:true,
                items: json
            })
          });
  }

  render() {

      const {isLoaded, items} = this.state;

      if(!isLoaded){
          return (<div> Loading... </div>)
      }
      else{
          return (
              <div className="App">
                  <div className="row">
                      <div className="col-lg-6"><strong>Operation</strong></div>
                      <div className="col-lg-6"><strong>Total</strong></div>
                  </div>
                  {items.map(item=>(

                      <div className="row">
                          <div className="col-lg-6">{item._id}</div>
                          <div className="col-lg-6">{item.total}</div>
                      </div>


                  ))};

                  <div className="row">
                      <div className="col-lg-6">
                            <AddComponent/>
                      </div>
                      <div className="col-lg-6">
                            <SubtractComponent/>
                      </div>

                  </div>
                  <div className="row">
                      <div className="col-lg-6">
                          <MultiplyComponent/>
                      </div>
                      <div className="col-lg-6">
                          <DivideComponent/>
                      </div>

                  </div>

                  <div className="row">
                      <div className="col-lg-6">
                          <PowerComponent/>
                      </div>
                      <div className="col-lg-6">
                            <SqrtComponent/>
                      </div>

                  </div>
                  <div className="row">
                      <div className="col-lg-6">
                          <QrtComponent/>
                      </div>
                      <div className="col-lg-6">
                          <FactorialComponent/>
                      </div>

                  </div>
              </div>
          );
      }

  }
}

export default App;
