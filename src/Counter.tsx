import React, { useEffect, useState } from "react";
import "./Counter.css";
import { Tablo } from "./Tablo";
import { SetFrame } from "./SetFrame";

export const Counter = () => {


  const [tabloData, setTabloData] = useState(0);

  const[maxvalue,SetMaxvalue] = useState(0)
  const[minvalue,SetMinvalue] = useState(0)

  

  const[error,SetError] = useState<string>("")


  const getValuesFromLocalStorage = () => {
    //достать значения min & max из LocalStorage и 'засетать' их
    let MaxAsString = localStorage.getItem("maxvalueInLS");
    let MaxValue = MaxAsString && JSON.parse(MaxAsString);
    SetMaxvalue(MaxValue);

    let MinAsString = localStorage.getItem("minvalueInLS");
    let MinValue = MinAsString && JSON.parse(MinAsString);
    SetMinvalue(MinValue);
    setTabloData(MinValue)
  }

  useEffect(()=>{getValuesFromLocalStorage()},[])


// видимость окон
  let [visibilityTablo, SetvisibilityTablo] = useState("none");

  let [visibilitySettingsFrame, SetVisibilitySettingsFrame] = useState("");
  //         end

                       // BLL(pureFunctions)




  const switchVisibility = () => {
    switch (visibilityTablo) {
      case "":
        SetvisibilityTablo("none");
        SetVisibilitySettingsFrame("");
        break;
      default:
        SetvisibilityTablo("");
        SetVisibilitySettingsFrame("none");
    }
  };

  const onChangeMaxInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
    let maxvalue = e.currentTarget.valueAsNumber
  

    if(maxvalue === minvalue || maxvalue < minvalue){
      SetMaxvalue(maxvalue)
      SetError("Error !!!")
    }else{
      SetError("") 
      SetMaxvalue(maxvalue)

      localStorage.setItem("maxvalueInLS", JSON.stringify(maxvalue));
     
    }  
  }

  const onChangeMinInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    let minvalue = e.currentTarget.valueAsNumber

    if(minvalue === maxvalue || minvalue > maxvalue){
      SetMinvalue(minvalue)
      SetError("Error !!!")
    }else{
      SetError("") 
      SetMinvalue(minvalue)
      setTabloData(minvalue)

      localStorage.setItem("minvalueInLS", JSON.stringify(minvalue));
     
    }  
  }
 

  
//         end



  

  return (
    <main>
      <SetFrame
        visibilitySettingsFrame={visibilitySettingsFrame}
        MAXDATA={maxvalue}
        MINDATA={minvalue}
        switchVisibility={switchVisibility}
        error={error}
        SetError={SetError}
        onChangeMaxInput={onChangeMaxInput}
        onChangeMinInput={onChangeMinInput}
        
      />

      <Tablo
        visibilityTablo={visibilityTablo}
        classname={tabloData >= maxvalue ? "error" : "data"}
        tabloData={tabloData}
        MAXDATA={maxvalue}
        MINDATA={minvalue}
        setData={setTabloData}
        switchVisibility={switchVisibility}
        error={error}
        SetError={SetError}
      />
    </main>
  );
};
