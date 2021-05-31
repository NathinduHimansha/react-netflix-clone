import Row from "./Row";
import Navbar from "./Navbar";
import Banner from "./Banner";
import "./App.css";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/*nav*/}
      <Navbar />
      {/*banner*/}
      <Banner />
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
