import React, {Component} from 'react';
import {connect} from 'react-redux';

import{addCard} from '../../actions/cards'

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      titleInput:'',
      priorityInput: '',
      createdByInput: '',
      assignedToInput: '',
      statusInput:''
    }

  }
    handleSubmit(event){
      event.preventDefault();
      let newCard = {
        title:this.state.titleInput,
        priority: this.state.priorityInput || "Low",
        created_by: this.state.createdByInput,
        assigned_to: this.state.assignedToInput,
        status:this.state.assignedToInput || "Queue"
      }
      this.props.addCard(newCard)

      this.setState({
        titleInput:'',
        priorityInput: '',
        createdByInput: '',
        assignedToInput: '',
        statusInput:''
      })
    }

    handleChangeTitle(event){
      this.setState({
        titleInput: event.target.value
      })
    }

    handleChangePriority(event){
      this.setState({
        priorityInput: event.target.value
      })
    }

    handleChangeCreatedBy(event){
      this.setState({
        createdByInput: event.target.value
      })
    }

    handleChangeAssignedToInput(event){
      this.setState({
        assignedToInput: event.target.value
      })
    }

    handleChangeAssignedToStatus(event){
      this.setState({
        statusInput: event.target.value
      })
    }

    render(){
      console.log(this.props.addCard)
      return (
        <div className="NewCardForm">
          <h3>{this.props.quote}</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Add New Card</h3><br/>
            <p>Title:</p> <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/><br/>
            <p>Priority:</p><select
              name="priority"
              value={this.state.priorityInput}
              onChange={this.handleChangePriority.bind(this)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Blocker">Blocker</option>
            </select><br/>
            <p>Created By</p><input type="text" placeholder="Created By" value={this.state.createdByInput} onChange={this.handleChangeCreatedBy.bind(this)}/><br/>
            <h4>Assigned To</h4><input type="text" placeholder="Assigned To" value={this.state.assignedToInput} onChange={this.handleChangeAssignedToInput.bind(this)}/><br/>
            <p>Status:</p> <select
            value= {this.state.statusInput}
            onChange={this.handleChange}>
            <option value="3">Queue</option>
          </select>
            <input type="submit" value="Add Card"/>
          </form>
        </div>
      )
    }
}

const mapDispatchtoProps = (dispatch)=> {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}
//it should always be 2 arguments , if one is not required then put null
const ConnectedNewCardForm = connect(
  null,
  mapDispatchtoProps
)(NewCardForm)



export default ConnectedNewCardForm;