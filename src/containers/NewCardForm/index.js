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
        titleInput:this.state.titleInput,
        priorityInput: this.state.priorityInput,
        createdByInput: this.state.createdByInput,
        assignedToInput: this.state.assignedToInput
      }
      this.props.addCard(addCard)

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
      console.log(this.props.addBook)
      return (
        <div className="NewCardForm">
          <h3>{this.props.quote}</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>
            <input type="text" placeholder="author" value={this.state.authorInput} onChange={this.handleChangeAuthor.bind(this)}/>
            <input type="submit" value="Add Book"/>
          </form>
        </div>
      )
    }
}

const mapDispatchtoProps = (dispatch)=> {
  return {
    addBook: (book) => {
      dispatch(addBook(book))
    }
  }
}
//it should always be 2 arguments , if one is not required then put null
const ConnectedNewCardForm = connect(
  null,
  mapDispatchtoProps
)(NewCardForm)



export default ConnectedNewBookForm;