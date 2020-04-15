import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import questions from './questions.json'

const TITLE_STATE = 0
const QUESTION_STATE = 1

const styles = StyleSheet.create({

  button:{
    width: 300,
    color: "black",
    padding: 10,
    margin: "auto"
  },
  text: {
    fontSize: 30,
    fontFamily:"Helvetica",
    padding: 15,
    textAlign: 'center',
  }
})

export default class Quiz extends React.Component {

  constructor(props) {
  super()
  this.state = {
    currentState: TITLE_STATE,
    counter: 0,
    currentQuestion: 0
  }
}

nextQuestion(q) {
  if (q.correct){
    this.setState ({counter: this.state.counter + 1})
  }
  this.setState({currentQuestion: this.state.currentQuestion + 1})
}

render () {
  return (
    <View>
      {(this.state.currentState === TITLE_STATE) ?
        <View>
          <Text style={styles.text}> State Flowers Test </Text>
          <Button
          style={styles.button}
          title = "Start"
          onPress={ () => this.setState({ currentState: QUESTION_STATE})}
          />
         </View>
         : (this.state.currentQuestion < questions.length) ?
         <View>
           <Text style={styles.text}>{questions[this.state.currentQuestion].question}</Text> 
           <View>
            {questions[this.state.currentQuestion].possibleAnswers.map((ans, i) => {
            return <Button style={styles.button} title={ans.text}
            key={i} onClick={() => this.nextQuestion(ans)} />
            })}
        </View>
    </View>
    :
    <View>
        <Text style={styles.text}>Test Completed!</Text>
        <Text style={styles.text}>Your score is: {this.state.counter}/{questions.length}</Text>
        <Button style={styles.button} title="Start Over" onClick={() => 
        this.setState ({currentState: TITLE_STATE, currentQuestion: 0, counter: 0})} />
    </View>
    }
  </View>
  )
  }
}