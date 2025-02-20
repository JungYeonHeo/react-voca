import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<DayList />
					</Route>
					<Route path="/day/:day">
						<Day />
					</Route>
					<Route>
						<EmptyPage />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
