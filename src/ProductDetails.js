import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from './ProductData.js';
const ProductDetails =(props)=>{
  const colorOptions = props.data.colorOptions.map((item,pos)=> {
   
      const classArr=[classes.ProductImage]
      if(pos===props.currentPreviewImagePos){
        classArr.push(classes.SelectedProductImage)
      }
     

    return (
      <img  key ={pos} className={classArr.join(' ')} src={item.imageUrl} onClick={()=> props.onColorOptionClick(pos)}></img>
    );
  })

  const featureList = props.data.featureList.map((item,pos)=>{
    const classArr= [classes.FeatureItem];
    if(pos === 1 && props.showHeartBeatSection){
      classArr.push(classes.SelectedFeatureItem);
    } else if (pos===0 && !props.showHeartBeatSection){
      classArr.push(classes.SelectedFeatureItem);
    }
    return (
      <button onClick={()=>props.onFeatureItemClick(pos)} key ={pos} className={classArr.join(' ')}>{item}</button>
    )
  }
   
  )

    return (

        <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
        <p className={classes.ProductDescription}>
          {props.data.description}
        </p>
        <h3 className={classes.SectionHeading}>
          Select Color
        </h3>
        <div>
          {colorOptions}
          

        </div>
        <div>
          {featureList}
          {/* <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}> Time</button>
          <button className={classes.FeatureItem}> Heart Rate</button> */}
        </div>
        <button  className={classes.PrimaryButton}>Buy Now</button>
        </div>
      
    )
}
export default ProductDetails ;