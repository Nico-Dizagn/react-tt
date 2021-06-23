import React, {Component} from 'react';
import logo from './logo.svg'; // variable logo
import './App.css'; // ressource externe
import Form from './component/form.js' ;
import MemoList from './component/memoList.js' ;
//import Api from './component/api.js'


/**
 * 
 */
class App extends Component{

  // state
  state = {
    data:[]
  }

  /**
   * Suppression d'une entrée dans le tableau data
   * @param int index : Index du tableau à supprimer
   */
  removeMemo = (index) => {
    const {data} = this.state ;

    this.setState( {
        data: data.filter((data,i) => {
            return i!== index
        })
      }
    )
  }

  /**
   * updateMemo : Met a jour un memo 
   * @param int index : Index a editer dans le tableau
   * @param string memoValue : Nouvelle valeur du memo
   */
  updateMemo = (index, memoValue) => {
    
    const {data} = this.state ;
    data[index] = {label:memoValue};  

  }

  /**
   * Ajout d'un mémo dans la liste en passant par le statut de l'App modifié
   * par le state de form.
   * @param string memoData : Value of the memo
   */
  addMemo = (labelMemo) => {
    if(labelMemo !== '' ){
      var memo={
        uid:Date.now(),
        label:labelMemo,
        done:false,
      }
      // On insere le label et le status de la nouvelle entrée
      this.setState({data: [ ...this.state.data, memo] }) ;
    }
  }

  /**
   * 
   */
  orderbyMemo = (event) => {

    if(event.target.attributes.data.value === "asc"){
      this.setState( { data: this.state.data.sort() }) ;  
    }
    // type = desc
    else{
      this.setState( { data: this.state.data.sort().reverse() }) ;
    }
  }

  render (){
    // PROPS & STATE
    const {data} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo react" />
          <h1>Application React JS de test!</h1>
        </header>
        <div>
          <Form addMemo={this.addMemo} />
        </div>
        <div>
          <MemoList memoListData={data} removeMemo={this.removeMemo} updateMemo={this.updateMemo} orderbyMemo={this.orderbyMemo}/>
        </div>
        <div>
          {/*<api />*/}
        </div>
      </div>
    );
  }
}

export default App;
