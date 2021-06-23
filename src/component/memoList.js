/**
 *
 */
import React, {Component} from 'react' ;
import './memoList.css' ;
import Memo from './memo.js' ;
import { ExitStatus } from 'typescript';


const orderButtons = [
	{
		label:"A -&gt; Z",
		type:"asc"
	},
	{
		label:"Z -&gt; A",
		type:"desc"
	}
]
/**
 *
 */
class MemoList extends Component {

	render (){

		const { memoListData, removeMemo, updateMemo, orderbyMemo } = this.props ;		
		const nb = memoListData.length ;
		const rows = memoListData.map( 
			(row,index) => {
				return <Memo key={index} 
							data={row} 
							index={index}
							removeMemo={removeMemo} 
							updateMemo={updateMemo}/>
			}
		)

		return (
			<div id="list">
				<Title nb={nb} orderbyMemo={orderbyMemo}/>
				{rows}
				<br/>
			</div>
		)
	}
}

/**
 * Composant titre
 */
const Title  = (props) => {
	if(props.nb === 0){
		return null
	}
	return (
		<div>
			<h2>
			<svg id="memoIcon" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-checklist" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
				<path fillRule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
			</svg>
				Liste des mémos
			</h2>
			{ props.nb >1}
			<div id="toolbar">
				<div id="nbMemo">Nombre de mémos en cours : {props.nb} </div>
				<label>Classé par : </label>
				{
					orderButtons.map(button => <button className="btn btn-primary btn-sm" data={button.type} onClick={props.orderbyMemo}>{button.label}</button>)
				}
			</div>
		</div>
	)
}

export default MemoList ;