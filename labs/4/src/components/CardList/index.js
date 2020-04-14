import React from 'react'
import Card from '../Card'
import Data from './data.json'


class CardList extends React.Component{


    constructor(props)
    {
      super(props)
      console.log(Data.card)
      this.state = {
        cards : Data.cards.map((v, i) => {
          v.id = i
          return v
          }
        
        ),
  
      }
    }

    clickMe(id){
      console.log("hi" + id)
      console.log(this.state.cards)
      let cards = this.state.cards.filter((v) => v.id !== id)
      console.log(cards)
      this.setState({cards:cards})
    }
  
render(){
    return(
    
    this.state.cards.map((v,i) =>
      <Card key={v.id} clickMe={() => this.clickMe(v.id)} id={v.id} content={v.content} title={v.title}/>
    )
     
    );
  }
}


export default CardList;