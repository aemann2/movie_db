import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import About from './pages/About';
import DisplayContextProvider from './state/DisplayContext';
import { PaginationProvider } from './state/pagination/paginationProvider';

function App() {
	return (
		<DisplayContextProvider>
			<PaginationProvider>
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
			</PaginationProvider>
		</DisplayContextProvider>
	);
}

export default App;
