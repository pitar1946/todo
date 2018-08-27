import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavBar from './AppNavbar';
import TodoList from './TodoList';
import ItemModal from './ItemModal';

const  App = () =>  {
      return (
        <div>
            <AppNavBar/>
            <ItemModal/>
            <TodoList/>
        </div>
      );
  }
export default App;
