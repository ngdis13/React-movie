function Movie(props){
    const {
        Title: title, 
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return  <div id={id} className="card movie deep-purple lighten-3">

      <div className="card">
        <div className="card-image">
            {
                poster === 'N/A' ? 
                  <img src={'https://via.placeholder.com/300x150?text=${title}'}/>
                : (
                  <div className="card-box-image">
                    <span className="type-movie">{type}</span>
                    <img src={poster}/>
                    <a class="add-btn btn-floating halfway-fab waves-effect waves-light deep-purple lighten-3"><i class="material-icons">+</i></a>
                  </div>

                )
            }

        </div>
        
        <span className="card-title">{title}</span>

        <div className="card-content">
          <p>{year} </p>
        </div>
      </div>

  </div>
}

export {Movie}