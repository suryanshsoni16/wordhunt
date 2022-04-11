
import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definations from './components/Definations/Definations';
import Header from './components/Header/Header';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
 
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);
  useEffect(()=>{
    dictionaryApi();

  },[word, category])

  return (
    <div   className="App"
    style={{
      height: "100vh",
      backgroundColor: "#282c34",
      
      transition: "all 0.5s linear",
    }}>
     <Container 
       maxWidth="md" 
       style={{ 
         display: "flex",
         flexDirection: "column",
         height: "100vh",
         justifyContent: "space-evenly" }}
      > 
        <Header 
        setWord={setWord}
        category={category}
        setCategory={setCategory}
        word={word}
        />
        <Definations/>
     </Container>
     
       
    </div>
  );
}

export default App;
