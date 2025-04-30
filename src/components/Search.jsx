import React from "react";

class Search extends React.Component{ 
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type)
        }    
    } 

    handleFilter = (event) => {
      this.setState(() => ({type: event.target.dataset.type}), () => {
        this.props.searchMovies(this.state.search, this.state.type)
      })
    }

    render(){
        return <> <div className="row">
        <div className="row">
          <div className="input-field col s12">
            <input 
                placeholder='search' 
                type="search" 
                className="validate"
                value = {this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}
            />
            <button className='btn search-btn deep-purple lighten-3' onClick={() => 
              this.props.searchMovies(this.state.search, this.state.type)}
              >Search</button>
          </div>
        </div>
    </div>

      <div>
      <label>
        <input 
            name="type" 
            type="radio" 
            data-type='all' 
            onChange={this.handleFilter}
            checked={this.state.type === 'all'}
        />
        <span>All</span>
      </label>

      <label>
        <input 
            name="type" 
            type="radio" 
            data-type='movie' 
            onChange={this.handleFilter}
            checked={this.state.type === 'movie'}
        />
        <span>Movies only</span>
      </label>

      <label>
        <input 
          className="radio"
          name="type" 
          type="radio" 
          data-type='series' 
          onChange={this.handleFilter}
          checked={this.state.type === 'series'}
        />
        <span>Serials only</span>
      </label>
  </div>

    </>

    }
}

export {Search}