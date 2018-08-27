import React, {Component} from 'react';
import { Container, Table, Button} from 'reactstrap';
import '../css/index.css';
import { connect } from 'react-redux';
import {getItems, deleteItem ,sortItems} from '../actions';


 class TodoList extends Component {
   constructor(props){
     super(props);
      this.state = {
        items: [],
        priority:'',
        direction: {
           date: 'asc',
       }
     }
   }
   componentWillMount(){
     this.props.getItems();
   }
   /*componentWillReceiveProps(nextProps){
     if(nextProps.items){
       this.setState({
         items: nextProps.items
       })
     }
   }*/

  searchTodos = (e) => {
    this.setState({
      priority: e.target.value
    })
  }
   onDelete = (id) => {
      this.props.deleteItem(id);
    }


  /*sortByDate = (key) => {
    let sortitems = this.props.items;
    this.setState({
      items: sortitems.sort((a, b) =>
        this.state.direction[key] === 'asc'
        ? parseInt(a[key], 10) - parseInt(b[key], 10)
        : parseInt(b[key], 10) - parseInt(a[key], 10)
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc'
        ?  'desc'
        :  'asc'
       }
     })
   }*/


  render() {
    const items = this.props.items;
    return (
      <Container>
        <input type='text'
           className='form-control mb-3'
           placeholder='Search Todo'
           value={this.state.priority}
           onChange={this.searchTodos}/>
           <div className='selectTodos'>
            <h5>Select Todos</h5>
             <select
                     value={this.state.priority}
                     onChange={this.searchTodos}
                     className='select'>
               <option  className='option'></option>
               <option  className='option' value='low'>Low</option>
               <option  className='option' value='medium'>Medium</option>
               <option  className='option' value='high'>High</option>
            </select>
          </div>
       <Table>
         <thead>
           <tr>
             <th>Name</th>
             <th><button className='btn btn-danger'onClick={() => this.props.sortItems()}>Date</button></th>
             <th>Priority</th>
           </tr>
         </thead>
         <tbody>
            {items && items.filter(item => (
                      item.priority.toLowerCase().includes(this.state.priority)
             )).map(item => (
               <tr key={item._id}>
                 <td>{item.name}</td>
                 <td>{item.date}</td>
                 <td>{item.priority}</td>
                 <td><Button
                      className='btn btn-danger btn-sm'
                      onClick={() => {this.onDelete(item._id)}}>&times;</Button>
                </td>
              </tr>))}
         </tbody>
       </Table>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    items:state.items.items
  }
}
export default connect(mapStateToProps,{getItems, deleteItem ,sortItems})(TodoList);
