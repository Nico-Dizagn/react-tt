import React , { Component } from 'react' ;
import './form.css' ;

/**
 * Class component
 */
class Form extends Component {

	state={
		memo: '',
	}

	/**
	 * Recupere la valeur d'un champs des qu'on change l'element
	 */
	handleChange = (event) => {
		const {name, value} = event.target ;
		
		this.setState({
			[name: value],
		}) ;
	}

	/**
	 *
	 */
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addMemo( this.state.memo ) ;
		// On réinitialise le chmaps une fois qu'il a été posté
		this.setState({ memo:''}) ;
	}

	//
	render(){
		return (
			<form className="form-inline">
				<div className="form-group">
					<label htmlFor="memo"> Mémo :</label> 
					<input className="form-control" 
						   maxLength="100" 
						   type="text" 
						   placeholder="Texte du mémo à ajouter" 
						   onChange={this.handleChange} 
						   id="memo" 
						   name="memo" 
						   value={this.state.memo} />
					<button className="btn btn-primary" 
							onClick={this.handleSubmit}>Ajouter</button>
				</div>
			</form>
		)
	}
}

/**
 * Simple component input
 */
// const InputText = () => {
// 	return <input type="text" name="memo" id="memo" />
// }

// const Button = ({handleSubmit}) => {
// 	return <button onClick={handleSubmit} >Add Memo</button>
// }

export default Form;