import React, { Component } from 'react';
import styled from 'styled-components';
import  {ButtonToolbar, Button}  from 'react-bootstrap'
import gql from 'graphql-tag'

const FullPageDiv = styled.div`
display: flex
border: 2px solid red
height: 95vh
width: 100%
padding: 5px;
flex-direction: row


`

const DivForm = styled.div `
border: 1px solid black
display:flex;
width: 60%
height: 30%
padding: 10px


`
const HistoryDiv = styled.div `
display: flex
border: 2px solid blue
width: 40%
height: 100%
padding: 10px

`



class Log extends Component {

  constructor(props) {
    super(props)
    this.state={
      exercise: '',
      date: '',
      weight: '',
      reps: '',
      bodytype: '',

    }
  }

      handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
      } 

      handleInputChange = (event) => {
          event.preventDefault()
          this.setState({
            [event.target.name]: event.target.value
          })
    }
  render() {
    console.log(this.state)
    return (
      <FullPageDiv>
        <HistoryDiv>
          <div class="justify-content-center"><h3>Workout History</h3>
          </div>
        </HistoryDiv>
      <DivForm>
        <form onSubmit={this.handleSubmit} class="form-row">
            <div class="form-group col-md-6" >
            <label for="exercise">Excerise</label>
            <input type="text" class="form-control" name="exercise"  onChange={this.handleInputChange} placeholder="Exercise"></input>
            </div>
            <div class="form-group col-md-6">
            <label for="BodyType">Body Part</label>
            <select class="custom-select" name="bodytype" onChange={this.handleInputChange}>
              <option selected>Select</option>
              <option value="chest">Chest</option>
              <option value="legs">Legs</option>
              <option value="back">Back</option>
              <option value="shoulders">Shoulders</option>
              <option value="abs">Abs</option>
              <option value="arms">Arms</option>
          </select>
          </div>
          <div class="form-group col-md-4">
          <label for="date">Date</label>
            <input type="Date" name="date" class="form-control" onChange={this.handleInputChange}></input>
          </div>
          <div class="form-group col-md-4">
          <label for="Weight">Weight</label>
            <input type="Number" name="weight" class="form-control" onChange={this.handleInputChange} placeholder="Weight"></input>
          </div>
          <div class="form-group col-md-4"> 
          <label for="Reps">Reps</label>
            <input type="Number" name="reps"class="form-control" onChange={this.handleInputChange} placeholder="Reps"></input>
            </div>
            <div class="text-center">
            <Button type="submit" className="text-right" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
            </div>
        </form>
      </DivForm>
      </FullPageDiv>
    );
  }
}

export default Log;
