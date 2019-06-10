import React from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log("clear memory");
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(digit) {
    console.log(digit)
  }

  render() {
    return (
      <div className="calculator">
        <Display value={100}/>
        <Button label="AC" click={() => this.clearMemory()} tripple/>
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit}/>
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </div>  
    )
  }
}