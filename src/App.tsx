import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import About from './pages/About';
import FilmsContextProvider from './state/films/filmsProvider';
import Navbar from './components/header/navbar/Navbar';
import { PaginationProvider } from './state/pagination/paginationProvider';

function App() {
	return (
		<FilmsContextProvider>
			<PaginationProvider>
				<Router>
					<Navbar />
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
		</FilmsContextProvider>
	);
}

export default App;
