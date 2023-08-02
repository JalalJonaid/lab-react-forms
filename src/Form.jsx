import React from "react";
import "./Form.css";
import App from "./App";
import { useState } from "react";

function Form() {

  const [input, setInput] = useState("");
  const [operation, setOperation] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleOperation = (e) => {
    setOperation(e.target.value)
  }

  const calculate = (e) => {
    e.preventDefault();
    let result = 0;
    if(operation == "sum") {
      let numberList = input.split(',').map(function(item) {
        return parseInt(item, 10);
      });
      console.log(numberList);
      for (let num of numberList) {
        result += num;
      }
     // return result;
      console.log(result);
    }
    else if (operation == "average") {
      let numberList = input.split(',').map(function(item) {
        return parseInt(item, 10);
      });
      console.log(numberList);
      for (let num of numberList) {
        result += num;
      }
     // return result;
     result /= numberList.length;
     console.log(result);
    }
    else if (operation == "mode") {
      let numberList = input.split(',').map(function(item) {
        return parseInt(item, 10);
      });
      console.log(numberList);
      
      numberList.sort();

      let max_count = 1, res = numberList[0];
      let curr_count = 1;
          
      for (let i = 1; i < numberList.length; i++)
      {
        if (arr[i] == arr[i - 1]){
            curr_count++;}
        else {
            curr_count = 1;}
           
        if (curr_count > max_count)
        {
            max_count = curr_count;
            res = arr[i - 1];
        }
      }   
      console.log(res)
      //return res;
    }
     // return result;
    //  result /= numberList.length;
    //  console.log(result);
    }
  }

  return (
    <>
      <form>
        <input id="values" onChange={handleInput} name="values" type="text" />
        <select id="operation" onChange={handleOperation} name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={calculate}>Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;
