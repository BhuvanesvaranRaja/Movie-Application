
import {useEffect,useState} from 'react'
import axios from 'axios';
import Moviescard from './Moviescard';
import NavBar from './NavBar'
import './App.css'
function App() {
const [Movies,setMovies]=useState([ ])
  const MoviesList=async()=>{
try {
  const {data}=await axios.get("https://movies-app.prakashsakari.repl.co/api/movies")
  setMovies(data)  
} catch (error) {
  console.log(error);
}
  }
  

  useEffect(()=>{
    MoviesList();
    
  },[])

  return (
    <>
    <NavBar/>
    
    <main className='main'>
      {
         Movies.map(movie => <Moviescard key={movie.id} movie={movie}/>)
      }
    </main>
    <Moviescard/>
    </>
  );
}

export default App;
