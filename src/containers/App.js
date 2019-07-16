import React from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actioncreators'




class App extends React.Component{

  componentWillMount(){
    this.props.getMovies()
    //console.log(this.props);
  }

  render(){
    debugger;
    const movieList = this.props.data ? this.props.data.map(i => <li>i</li>) : null;
    return(      
      <div>
        <h1>Nothing Bad for being ugly</h1>
        <p>Its my life</p>
        {movieList}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMovies: () => {
      dispatch(moviesList())
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
