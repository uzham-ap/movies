import React, {useState} from 'react';
import './home.styles.css'
import Header from '../../components/header/header.component'
import datas from '../../data'
import SearchBar from '../../components/search-bar/search-bar.component'
import MovieContainer from '../../components/movie-container/movie-container.component'

const Home = () => {
    let data = datas
    const [searchField, changeSearchField] = useState("")

    const onChange = (e) => {
        changeSearchField(e.target.value, )
    }
    data = datas.filter(mov => mov.name.toLowerCase().includes(searchField))
    return ( 
    <div className="HomePage">
        <Header />
            <SearchBar value={searchField} onChange={onChange}/>
        <div className="Moviesgrid">
            {
                data.map((mov, idx) => {
                    return (
                    <MovieContainer link={mov.link} img={mov.img} ratings={mov.ratings} name={mov.name} year={mov.year} key={idx}/>
                    ) 
                })
            }
        </div>
    </div>
     );
}
 
export default Home;