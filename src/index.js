import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAsYu7d8xJq8jhFfN9RF2wfMxp65f53Zho';

// create a new component. This component should produce html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}



// Take this component's generated HTML and insert it into the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
