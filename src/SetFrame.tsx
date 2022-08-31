import React from 'react'
import {Button} from './Button'

type SetFramePropsType ={
  visibilitySettingsFrame: string
  MAXDATA: number
  MINDATA: number
  switchVisibility:()=>void
  error: string
  SetError: (error: string)=>void
  onChangeMaxInput:(e:React.ChangeEvent<HTMLInputElement>)=>void
  onChangeMinInput: (e:React.ChangeEvent<HTMLInputElement>)=>void
}


export function SetFrame(props:SetFramePropsType){

  
const onChangeMaxInputHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
  
  props.onChangeMaxInput(e)
  
}


const onChangeMinInputHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
  
  props.onChangeMinInput(e)
 
}






return(
  <div style = {{display: props.visibilitySettingsFrame}}>


<div className="container" >


   <div className="maxvalue">
      <span>max value: </span>

      <input 
      className={props.error ? "error" : ""}

        type="number" 
        id="quantity1" 
        name="quantity1" 
        min="0"
        // max="10"
        onChange={onChangeMaxInputHandler} 
        value={props.MAXDATA}
        />
  </div> 
  

   <div className="minvalue">
      <span>start value: </span>
      <input 
        className={props.error ? "error" : ""}

        type="number"
        id="quantity2"
        name="quantity2"
        min="0"
        // max="10"
        onChange={onChangeMinInputHandler} 
        value={props.MINDATA}
        />
  </div> 

  
  


      <div className="button-wrapper">
        
        <Button
          disabled={props.error ? true : false}
          buttonNick={'💾'}
          callBack = {props.switchVisibility}
          
        />


    </div>
  </div>
</div>


)
}