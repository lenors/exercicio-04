import React, {Component} from 'react'
export default class desafio extends Component{
  arrow = () => {
    return(
          <div>
            <h1>Olá, mundo</h1>
          </div>
    )
    
  }
  soma = () =>{ 
    return (
      <div>
        <h2>{4*2}</h2>
      </div>
    )
  }
  render(){
    return(
      <div>
        {this.arrow()}
        {this.soma()}
      </div>
    )
  }

}