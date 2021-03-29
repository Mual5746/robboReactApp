//import React, { useState, useEffect, Component } from 'react';
import React, {  Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        //searchField: state.searchRobots.searchField,
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
    
}

class App extends Component {

      //redux don need constructor 
      /*
      constructor() {
        super()
        this.state = {
            robots: [],
            //searchfield: ''
        }
      } 
      */


    // const [robots, setRobots] = useState([])
    // const [searchfield, setSearchfield] = useState('')
    // const [count, setCount] = useState(0)
    componentDidMount() {
        //console.log(this.props.store.getState())  //-->searchfield: ''
        //  fetch('https:  //jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => { this.setState({ robots: users }) });

        this.props.onRequestRobots();

    }
    // useEffect( () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => { setRobots( users) });
    //     console.log(count)
    // }, [count]) //only run when the count changes

    // const onSearchChange = (event) => {
    //     setSearchfield(event.target.value )
    // }

     /*
    //replae by redux
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }
      */

    render() {
        //const { robots } = this.state;
        const {  searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //return !robots.length ?
        //redux---
        return isPending?
          <h1>Loading</h1> :
          (
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                <CardList robots={filteredRobots} />
              </Scroll>
            </div>
          );
      }
    }
    //redux clear 
    // render() {
    //     const { robots, searchfield } = this.state;
    //     const filteredRobots = robots.filter(robot => {
    //         return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    //     })
    //     console.log(robots, searchfield)
    //     return !robots.length ?
    //         <h1>Loading</h1> :
    //         (
    //             <div className='tc'>
    //                 <h1 className='f1'>RoboFriends</h1>
    //                 <button onClick = {()=>setCount(count+1)}  > Click Me! </button>
    //                 <SearchBox searchChange={onSearchChange} />
    //                 <Scroll>
    //                     <CardList robots={filteredRobots} />
    //                 </Scroll>
    //             </div>
    //         );
    // }


export default connect(mapStateToProps, mapDispatchToProps)(App);