import React, { Component } from 'react';
import './App.css';

const list = [
<<<<<<< HEAD
	{
		title: 'React',
		url: 'https://reactjs.org',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'https://redux.js.org',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	},
];
=======
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
} ];
>>>>>>> fcbf044de7e5ab234f99f33987d43a42474a5383

class App extends Component {
  render() {
  	const helloWorld = 'Welcome to the Road to Learn React';
    return (
      <div className="App">
<<<<<<< HEAD
      	{list.map(item => 
      		<div key={item.objectID}>
      			<span>
      				<a href={item.url}>{item.title}</a>
      			</span>
      			<span>{item.author}</span>
      			<span>{item.num_comments}</span>
      			<span>{item.points}</span>
      		</div>
      	)}
=======
      	{list.map(function(item) {
          return <div>{item.title}</div>
        })}
>>>>>>> fcbf044de7e5ab234f99f33987d43a42474a5383
      </div>
    );
  }
}

export default App;
