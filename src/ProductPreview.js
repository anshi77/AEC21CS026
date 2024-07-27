import React from 'react';
import classes from './ProductPreview.module.css';
import ProductDetails from './ProductDetails';
const ProductPreview =(props)=>{
    const currenthour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
  const currentminutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
    return (<div>
        
        <div className={classes.ProductPreview}>
          <img src={props.currentPreviewImage}></img>

          {
            props.showHeartBeatSection ?
            <div className={classes.HeartBeat}>
          <i class="fa-solid fa-heart-pulse"></i>
            <p> 78</p></div> 
            :
            <div className={classes.TimeSection}><p> {currenthour}:{currentminutes}</p></div>
          }
          
          
        </div>
        </div>
    )
}
export default ProductPreview;