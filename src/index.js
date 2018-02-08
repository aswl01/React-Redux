/**
 * Created by sweilun on 2/8/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDxHG6dPRxU7M9Omr0Kf_ZG86EpByL3QcM';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));