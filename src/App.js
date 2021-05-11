import './App.css';
import { Component } from 'react';
import {Cardlist} from './componets/card-list/card-list.componet';
import {SearchBox} from './componets/searchBox/search-box.component';

class App extends Component {

  constructor(){
    super();

    this.state ={
      monsters: [],
      searchField: ''
    };

  
  }
  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters: users}));
  

  }

  render(){
    //destructuing pull property 
    const { monsters, searchField} = this.state;
    const filtermosters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    
      return(
      <div className = 'App'>
      <h1>Monster Rolodex</h1>
       <SearchBox
       placeholder = 'search monster'
       handleChange ={this.handleChange}
       /> 
      <Cardlist monsters ={filtermosters}>
      </Cardlist>
      </div>
    )
  }
  
}

export default App;
