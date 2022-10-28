import './App.css';
import React  from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/*NAVBAR  */}
      <Nav />
      {/* BANNER */}
      <Banner />
      {/* ROW */}
      <Row 
      title="NETFLIX ORIGNALS" 
      fetchUrl={requests.fetchNetflixOrignals} 
      isLargeRow />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
    </div>
  );
}

export default App;
