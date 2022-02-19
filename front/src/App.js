import './App.css';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { GitHub, LinkedIn, Email, Instagram, Delete } from '@mui/icons-material';
import {AspectRatio} from 'react-aspect-ratio';
import TextTransition, { presets } from "react-text-transition";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import { skillData } from './assets/data'
import InfiniteScroll from "react-infinite-scroll-component";
import ShowCard from './components/ShowCard/ShowCard'
const TEXTS = [
  "Game Developer",
  "Fullstack Developer",
  "Amateur Cook",
  "Cycling Enthusiast",
  
];

const COLORS = [
  '#57ffb0',
  '#57f7ff',
  '#e7f76f',
  '#f48fff'
];

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#84ffff'
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  }
);


const SearchTextField = styled(TextField) ({
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      color: 'white',
    },
    '& fieldset': {
      borderColor: 'white',
    },
    
    '&:hover fieldset': {
      borderColor: '#84ffff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#84ffff',
    },
  },
})


function SkillCard(props) {
  return (
    <div className="card-container" onClick={props.handleClick}>
      <div className="card-icon-container">
        <div className="icon-resizer">
        <object type="image/svg+xml" data={props.icon} className="what">
          Hello
        </object>
        </div>
      </div>
      <div className="card-media-container">
        <div className="card-info">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}



function App()  {
  const [index, setIndex] = React.useState(0);
  const [filter, setFilter] = React.useState("");
  function handleChange(event) {
    setFilter(event.target.value);
  };
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  var handleClick = (e) => {
    console.log('this is:' + this);
  };
  return (
      <div className="background-container">
        <div className="main-container-1">
          <div className="main-1-center-container" >
            <div className="main-1-container">
              
              <div className="profile-container">
                <AspectRatio ratio="4/3" style={{ maxWidth: '100%'  }}>
                  <div className="justified-profile-container">
                    <img src="https://i.imgur.com/YBBqVY3.jpg" className = "profile-image"></img>
                  <div className="profile-blur"></div></div>
                </AspectRatio>
              </div>
              <div className="blurb-container">
                <div className="blurb-center">
                  <div className="icon-container">
                    <IconButton sx={{ width: '6vw', height:'6vw'}} href="https://github.com/unkownfire"><GitHub   sx={{ color: '#ffffff', fontSize: "5vw" }} /></IconButton>
                    <IconButton sx={{ width: '6vw', height:'6vw'}} href="https://www.linkedin.com/in/camilo-catasus/"><LinkedIn sx={{ color: '#ffffff', fontSize: "5vw" }} /></IconButton>
                    <IconButton sx={{ width: '6vw', height:'6vw'}} href="mailto:camilomcatasus@gmail.com"><Email  sx={{ color: '#ffffff', fontSize: "5vw" }} /></IconButton>
                    <IconButton sx={{ width: '6vw', height:'6vw'}} href="https://www.instagram.com/unkownfire/"><Instagram  sx={{ color: '#ffffff', fontSize: "5vw" }} /></IconButton>
                  </div>
                  <div className="seperator"></div>
                  <svg viewBox="0 0 168 60">
                    <text x="0" y="15">
                      Hello, my name is  
                    </text>
                    <text x="0" y="35">Camilo Catasus
                    </text>
                    <text x="0" y="55">and I am a(n):
                    </text>
                  </svg>
                  <div className="center-text">
                  <h2>
                    <TextTransition
                      text={ TEXTS[index % TEXTS.length] }
                      springConfig={ presets.gentle }
                      style={{
                        'color': COLORS[index % COLORS.length], 
                        'whiteSpace': 'nowrap'      
                      }}
                    />
                  </h2>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="main-container-2">
          <div className="search-bar-container">
            <div className="search-bar-width-container">
            <ThemeProvider theme={theme}>
              <SearchTextField fullWidth label="Search" id="fullWidth" onChange={handleChange}/>
            </ThemeProvider>
            </div>
          </div>
          <div className="center">
            <div className="search-area-container">

              {skillData.filter(card => card.title.toLowerCase().includes(filter)).map((data, key) => {
                  return (<ShowCard title={data.title} description={data.description} icon={"/icons/" + data.icon} handleClick={handleClick} key ={data.title}/>);
              }
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
