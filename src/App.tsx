import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import About from './pages/About';
import DisplayContextProvider from './context/DisplayContext';

function App() {
	return (
		<DisplayContextProvider>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/:id'>
						<Item />
					</Route>
				</Switch>
			</Router>
		</DisplayContextProvider>
	);
}

export default App;
