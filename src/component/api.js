import React, {Component} from 'react'
import './api.css'

// http://localhost:3000/manifest.json

class Api extends Component{

	state = {
		data:[],
	}

	// React lifecycle method 
	componentDidMount(){
		//const url = 'http://localhost:3000/manifest.json'
		const url = 'https://fr.wikipedia.org/w/api.php?action=opensearch&search=linux&format=json&origin=*'

		fetch(url)
		.then( 
			result => result.json()
		)
		.then( 
			json => {
				this.setState({
					data : json[1] ,
				})
			}
		)
		.catch(err => {
			console.log( 'Erreur de connexion reseau, impossible de recupérer : '+url)
		})
	}

	render(){
		const {data} = this.state
		//const data = this.state.data

		const result = data.map( (entry, index) => {
			return <li key={index}>{entry}</li>
		})
		return <ul id="apiResult">{result}</ul>
	}

}

export default Api
