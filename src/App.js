import React, {Component} from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData.js';

import Navbar from './Navbar'
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
class App extends Component {
  state ={
    productData : ProductData,
    
    currentPreviewImagePos : 0,
    showHeartBeatSection: false,
  }
  onColorOptionClick =(pos)=>{
    const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImagePos: pos});
  }
  onFeatureItemClick =(pos) =>{
    let updatedState = false;
    if(pos === 1 ){
      updatedState = true;
    }
    this.setState({showHeartBeatSection:updatedState});
  }
  render(){
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
        <ProductPreview  currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
        showHeartBeatSection ={this.state.showHeartBeatSection}
        />
        </div>
        <div className={classes.ProductData}>
        <ProductDetails data ={this.state.productData}
        onColorOptionClick={this.onColorOptionClick}
        currentPreviewImagePos= {this.state.currentPreviewImagePos}
        onFeatureItemClick ={this.onFeatureItemClick}
        showHeartBeatSection ={this.state.showHeartBeatSection}
        />
        </div>
      </div>


    </div>
  );
  }
}

export default App;
