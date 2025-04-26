function Movie(props){
    const {
        Title: title, 
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return  <div id={id} className="card movie">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
            {
                poster === 'N/A' ? 
                <img src={'https://via.placeholder.com/300x150?text=${title}'}/>
                : <img src={poster}/>
            }
          
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{year} <span className="right">{type}</span> </p>
        </div>
      </div>
    </div>
  </div>
}

export {Movie}