import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import ImageDiv from './ImageDiv';
class App extends Component {
  state={
    img_cat1:undefined,
    img_cat2:undefined,
    img_cat3:undefined,
    img_cat4:undefined,
    img_cat5:undefined,
    img_cat6:undefined,
    isOpen:false,
  };
  getCat=async(e)=>{
    e.preventDefault();
    const cat1= await fetch("https://api.thecatapi.com/v1/images/search");
    const cat2= await fetch("https://api.thecatapi.com/v1/images/search");
    const cat3= await fetch("https://api.thecatapi.com/v1/images/search");
    const cat4= await fetch("https://api.thecatapi.com/v1/images/search");
    const cat5= await fetch("https://api.thecatapi.com/v1/images/search");
    const cat6= await fetch("https://api.thecatapi.com/v1/images/search");
    const data1=await cat1.json();
    const data2=await cat2.json();
    const data3=await cat3.json();
    const data4=await cat4.json();
    const data5=await cat5.json();
    const data6=await cat6.json();
    console.log(data1[0].url);
    if (this.state.isOpen===false){
      this.setState({
        isOpen:true
      });
    }else{
      this.setState({
        isOpen:false
      });
    }
    this.setState({
      img_cat1: data1[0].url,
      img_cat2: data2[0].url,
      img_cat3: data3[0].url,
      img_cat4: data4[0].url,
      img_cat5: data5[0].url,
      img_cat6: data6[0].url,
    });
  }
  render() {
    return (
      <div>
        <div>
          <Button variant="outline-primary" as="input" type="reset" value="reset" size="lg" block onClick={this.getCat}></Button>
        </div>
        <div>
          <ImageDiv url1={this.state.img_cat1}
          url2={this.state.img_cat2}
          url3={this.state.img_cat3}
          url4={this.state.img_cat4}
          url5={this.state.img_cat5}
          url6={this.state.img_cat6}
          isOpen={this.state.isOpen}
          />
        </div>

      </div>
    );
  }
}

export default App;
