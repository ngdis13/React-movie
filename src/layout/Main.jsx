import React from "react"
import Movies from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=2051f233&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
          console.log(err)
          this.setState({loading: false})
        })
    }

    

    searchMovies = (str, type='all') => {
      this.setState({loading: true})

        fetch(`http://www.omdbapi.com/?apikey=2051f233&s=${str}${type !== 'all' ? `&type=${type}`: ''}`)
        .then(response => response.text()) // Получаем как текст
        .then(text => {
          console.log('Fetched text:', text); // Логируем текстовый ответ
          try {
            const data = JSON.parse(text); // Пробуем парсить как JSON
            if (data.Search) {
              this.setState({ movies: data.Search, loading: false });
            } else {
              this.setState({ movies: [], loading: false});
            }
          } catch (error) {
            console.error('JSON parse error:', error);
          }
        })
        .catch((err) => {
          console.log(err)
          this.setState({loading: false})
        });
      };


    render(){
        const {movies, loading} = this.state


        return <main className="container content"> 
            <Search searchMovies = {this.searchMovies}/>
            {loading ? <Preloader/>: <Movies movies= {movies} />}
            
            
        </main>
    }
}


export { Main }