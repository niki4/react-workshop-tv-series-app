import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/series';
import SingleSeries from '../../containers/singleSeries';

const Main = props => (
	<Switch>
		<Route exact path="/" component={Series} />
		<Route path="/series/:id" component={SingleSeries} />
	</Switch>
);

export default Main;