import React, {Component} from 'react';
import { fetch } from 'whatwg-fetch';
import Loader from '../../components/loader'

const SeriesDetail = ({ show }) => {
	return (
		<div>
			<p>{show.name}</p>
			<p>Premiered - {show.premiered}</p>
			<p>Rating - {show.rating.average}</p>
			<p>Episodes - {show._embedded.episodes.length}</p>
			<p>
				<img alt="Show" src={show.image.medium} />
			</p>
		</div>
		);
}

class SingleSeries extends Component {
	state = {
		show: null
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
		.then(response => response.json())
		.then(json => this.setState({ show: json }));
	}


	render() {
		const { show } = this.state;
		console.log(show)

		return (
			<div>
				{ show === null && <Loader /> }
				{
					show !== null
					&&
					<SeriesDetail show={show} />
				}
			</div>
		)
	}
}

export default SingleSeries;