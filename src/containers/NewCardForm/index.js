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
      assignedToInput: ''
    }

  }
    handleSubmit(event){
      event.preventDefault();
      let newCard = {
        title:this.state.titleInput,
        priority: this.state.priorityInput,
        created_by: this.state.createdByInput,
        assigned_to: this.state.assignedToInput
      }
      this.props.addCard(newCard)

      this.setState({
        titleInput:'',
        priorityInput: '',
        createdByInput: '',
        assignedToInput: ''
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

    render(){
      console.log(this.props.addCard)
      return (
        <div className="NewCardForm">
          <h3>{this.props.quote}</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Add New Card</h3><br/>
            <p>Title:</p> <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/><br/>
            <p>Priority:</p><select name="priority"/*value={this.state.priorityInput} */ onChange={this.handleChangePriority.bind(this)}>
              <option value={this.state.priorityInput}>Low</option>
              <option value={this.state.priorityInput}>Medium</option>
              <option value={this.state.priorityInput}>High</option>
              <option value={this.state.priorityInput}>Blocker</option>
            </select><br/>
            <p>Created By</p><input type="text" placeholder="Created By" value={this.state.createdByInput} onChange={this.handleChangeCreatedBy.bind(this)}/><br/>
            <h4>Assigned To</h4><input type="text" placeholder="Assigned To" value={this.state.assignedToInput} onChange={this.handleChangeAssignedToInput.bind(this)}/><br/>
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