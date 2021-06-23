import React, {Component} from 'react' ;
import './memo.css' ;


class MemoEdit extends Component {

	// state = {
	// 	memoValue : '',
	// }

	constructor(props){
		super(props);
		const {data} = props;
		
		this.state = {
			memoValue : data ,
		}
	}

	handleChange = (event) => {
		this.setState({memoValue: event.target.value}) ;
	}

	handleSubmit = (event) => {
		event.preventDefault() ;
		const {index} = this.props ;
		this.props.updateMemo(index, this.state.memoValue) ;
		this.props.handleSubmit(index) ;
	}

	render() {

		const {memoValue} = this.state ;

		return (
			<form id="memoEdit">
				<input type="text" value={memoValue} onChange={this.handleChange}/>
				<button className="btn btn-success btn-sm" onClick={this.handleSubmit}>Valider</button>
			</form>
		)		
	}
}

export default MemoEdit ;