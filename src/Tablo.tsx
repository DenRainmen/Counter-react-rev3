import React from 'react'
import {Button} from './Button'

type TabloPropsType ={
tabloData: number
classname: string
visibilityTablo: string 
switchVisibility:()=>void
MAXDATA: number
MINDATA: number
setData: (tabloData: number) => void
error: string
SetError:(error: string)=>void
}


export function Tablo(props:TabloPropsType){


  const incrementCounter =()=>{
    
    if(props.MINDATA <= props.MAXDATA){
      props.setData(props.tabloData + 1)
    }
  }


  const resetCounter =()=>{
    props.setData(props.MINDATA)
   
  }



return(
  <div style = {{display: props.visibilityTablo}}>

  


  <div className="container">


    <div className={props.classname}> 
          {props.error ? "Error !" : props.tabloData}
    </div>

    <div className="button-wrapper">
        <Button 
        disabled={props.tabloData >= props.MAXDATA}
        buttonNick={'⤴️'}
        callBack = {incrementCounter}
        />

        <Button
          disabled={false}
          buttonNick={'⚙️'}
          callBack = {props.switchVisibility}
        />

        <Button
        disabled={props.tabloData <= props.MINDATA }
        buttonNick={'Reset'}
        callBack = {resetCounter}
        />


    </div>
  </div>

  </div>
)

}