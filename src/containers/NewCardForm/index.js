import React, {Component} from 'react';
import {connect} from 'react-redux';
import{addCard} from '../../actions/cards';
import  UserList from '../UserList';
import {loadUsers} from '../../actions/users';

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      titleInput:'',
      priorityInput: '',
      createdByInput: '',
      assignedToInput: '',
      statusInput: "3"
    }

  }

  componentDidMount(){

  }


    handleSubmit(event){
      event.preventDefault();
      let newCard = {
        title:this.state.titleInput,
        priority_id: this.state.priorityInput,
        created_by_id: this.state.createdByInput,
        assigned_to_id: this.state.assignedToInput,
        status_id:this.state.statusInput
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
      return (
        <div className="NewCardForm">
          <h3>{this.props.quote}</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Add New Card</h3>
            <div className="formText">
              Title: <input
                        type="text"
                        placeholder="title"
                        value={this.state.titleInput}
                        onChange={this.handleChangeTitle.bind(this)}
                      /> <br/>
              {/*Created By:<select
                        value={this.state.createdByInput}
                        onChange={this.handleChangeCreatedBy.bind(this)}
                        users={this.props.users}>
                        <UserList/>
                        </select>*/}
              Assigned To:<UserList
                        users={this.props.users}
                        //value={this.state.assignedToInput}
                        changeAssigned={this.handleChangeAssignedToInput.bind(this)}/>

              Created By:<UserList
                        users={this.props.users}
                        //value={this.state.assignedToInput}
                        changeAssigned={this.handleChangeCreatedBy.bind(this)}/>

              {/*Created By<input
                        type="text"
                        placeholder="Created By"
                        value={this.state.createdByInput}
                        onChange={this.handleChangeCreatedBy.bind(this)}
                        />*/}
              {/*Assigned To<input
                        type="text"
                        placeholder="Assigned To"
                        value={this.state.assignedToInput}
                        onChange={this.handleChangeAssignedToInput.bind(this)}
                        />*/}
            </div>
            <div className="formSelect">
              Priority:<select
                        name="priority"
                        value={this.state.priorityInput}
                        onChange={this.handleChangePriority.bind(this)}
                        defaultValue="Select">
                        <option value="4">Low</option>
                        <option value="3">Medium</option>
                        <option value="2">High</option>
                        <option value="1">Blocker</option>
              </select>
              {/*Status: <select
                                name="status"
                                value= {this.state.statusInput}
                                onChange={this.handleChangeAssignedToStatus.bind(this)}
                                placeholder = >
                                <option value="3">Queue</option>
              </select>*/}
            </div>
            <input type="submit" value="Add Card"/>
          </form>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.userList,
  }
}

const mapDispatchtoProps = (dispatch)=> {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    },
    loadUsers:(users) => {
      dispatch(loadUsers(users));
    }
  }
}
//it should always be 2 arguments , if one is not required then put null
const ConnectedNewCardForm = connect(
  mapStateToProps,
  mapDispatchtoProps
)(NewCardForm)



export default ConnectedNewCardForm;