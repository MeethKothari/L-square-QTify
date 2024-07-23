import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from './components/Section/Section';
import axios from "axios";
import { useEffect, useState } from "react";



function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songsData, setSongsData]=useState([])

  let fetchTopAlbum = async()=>{
    let url = "https://qtify-backend-labs.crio.do/albums/top";
    try {
      let res = await axios.get(url);
      setTopAlbum(res.data);
      //console.log("Top Album",res.data);
    } catch (error) {
      alert(error.message);
      //console.log(error.message);
    }
  }

  let fetchNewAlbum = async()=>{
    let url = "https://qtify-backend-labs.crio.do/albums/new";
    try {
      let res = await axios.get(url);
      setNewAlbum(res.data);
      //console.log("New Album",res.data);
    } catch (error) {
      alert(error.message);
      //console.log(error.message);
    }
  }

  let fetchAllSongs = async()=>{
    let url = "https://qtify-backend-labs.crio.do/songs";
    try {
      let res = await axios.get(url);
      setSongsData(res.data);
      //console.log("New Album",res.data);
    } catch (error) {
      alert(error.message);
      //console.log(error.message);
    }
  }

 
  
  
  useEffect(()=>{
    fetchTopAlbum();
    fetchNewAlbum();
    fetchAllSongs();
  },[])
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section data={topAlbum}  title="Top Album" type="album"/>
      <hr />
      <Section data={newAlbum}  title="New Album" type="album"/>
      <hr />
      <div>
        <Section data={songsData} title="Songs" type="song"/>
      </div>
    </div>
  );
}

export default App;
