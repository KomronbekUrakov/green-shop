"use client";
import { InputNumberProps, Slider } from "antd";
import React, { FC, useState } from "react";


interface RangeType {
  setRangeValue:(value: number[]) => void;
} 

export const RangeSlide:React.FC<RangeType> = ({setRangeValue}) =>  {
    const [value, setValue] = useState<number[]>([39, 1250]);
    const onChangeComplete = (value: number[]) => {
        setValue(value);
        setRangeValue(value);
        
    };

  return (
    <div>
      <Slider
        range
        step={10}
        max={1500}
        defaultValue={[39, 1250]}
        onChangeComplete={onChangeComplete}
      />
      <div>
      <p><span className=" text-[15px] leading-[16px]">Price:</span> <span className=" font-semibold text-[#46a358]">{value[0]}$</span> - <span className=" font-semibold text-[#46a358]">{value[1]}$</span></p>
      </div>
    </div>
  );
}

export default RangeSlide;
