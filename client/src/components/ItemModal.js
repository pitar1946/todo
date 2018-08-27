import React, {Component} from 'react';
import moment from 'moment';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Container
} from 'reactstrap';

import DateTime from 'react-datetime';
import '../css/date-time.css';
import { connect } from 'react-redux';
import {addItem} from '../actions';

class ItemModal extends Component{
  constructor(){
    super();
    this.state = {
      modal: false,
      name: '',
      priority:'',
      date: ''
    }
  }
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


  onInputChange = (e) =>{
   this.setState({
     [e.target.name]: e.target.value
   });
 }
  handleDate = (date) => {
    this.setState({date:date._d});
}

 onFormSubmit = (e) => {
   e.preventDefault();
   const newItem = {
         name:this.state.name,
         priority: this.state.priority,
         date: moment(this.state.date).format('DD-MM-YY')
       };
    this.props.addItem(newItem);
    this.setState({name: '', date:'', priority: ''});
    this.toggleModal();
 }

  render(){
    return(
       <div>
        <Container>
          <Button
           color='dark'
           style={{marginTop: '20px', marginBottom: '20px'}}
           onClick={this.toggleModal}
           >Add Todo
          </Button>
           <Modal isOpen={this.state.modal}>
             <ModalHeader  toggle={this.toggleModal}>Add To List</ModalHeader>
             <ModalBody>
               <Form onSubmit={this.onFormSubmit}>
                 <FormGroup>
                     <Input
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='Todo'
                        onChange={this.onInputChange}/>
                      <DateTime
                        onChange={this.handleDate}
                        inputProps={{ placeholder: 'Date' }}/>
                      <Input
                        type='text'
                        name='priority'
                        value={this.state.priority}
                        placeholder='Priority'
                        onChange={this.onInputChange}/>
                  </FormGroup>
                 <Button
                      className='btn btn-danger btn-sm float-right'
                       type='submit'
                       onSubmit={this.onFormSubmit}>Submit</Button>
               </Form>
             </ModalBody>
           </Modal>
          </Container>
       </div>
    )
  }
}
export default connect(null,{addItem})(ItemModal);
