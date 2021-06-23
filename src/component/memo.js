import React, {Component} from 'react' ;
import './memo.css' ;
import MemoEdit from './memoEdit' ;

class Memo extends Component {

	state = {
		edition : false,
		done: false,
	}

	dblClick(index){
		this.setState({
			edition : true,
		})
	}

	updateValue(index){
		this.setState({
			edition : false,
		})
	}

	checkMemoDone(index){
		this.setState({
			done: (this.state.done === true) ? false : true,			
		})
	}

	render() {

		const {index, data, removeMemo, updateMemo} = this.props
		// Affichage standard
		var classValue = (this.state.done === true) ? 'memo memoDone' : 'memo';
		
		if (this.state.edition === false) {
			return (
				<div className={classValue} onDoubleClick={ () => this.dblClick(index)}>					
					<MemoElement label={data.label}/>
					<button className="btn btn-danger btn-sm" onClick={() => removeMemo(index)}>X</button>
					<CheckMemo test={ () => this.checkMemoDone(index) } status={this.state.done}/>					
				</div>
			)
		}
		// Mode edition
		else{
			return (
				<div className={classValue}>
					<MemoEdit data={data.label} index={index} updateMemo={updateMemo} handleSubmit={() => this.updateValue(index)}/>
				</div>
			)
		}
	}
}

const MemoElement = (props) => {
	return <span>{props.label}</span> ;
}

const CheckMemo = (props) => {	
	// TODO
	if(props.status === true){
		return (
			<button onClick={props.test} className="memoCheck btn btn-info btn-sm">
				<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
				<path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
				</svg>
			</button>
			) ;
	}
	// DONE
	else{
		return (
			<button onClick={props.test} className="memoCheck btn btn-info btn-sm">
				<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
				</svg>
			</button>
			) ;
	}
}

export default Memo ;