import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography';
import TabsComponent from './Tabs';
import axios from 'axios';


function Search() {
  const [checked, setChecked] = React.useState(false);
  const [query, setQuery] = React.useState(null)
  const [poiValue , setPoi] = React.useState([])
  const [countryValue , setCountry] = React.useState([])
  const [langValue , setLanguage] = React.useState([])
  const [tweets, setTweets] = React.useState(null)
  const [news, setNews] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const handleChange = () => {
      setChecked((prev) => !prev);
  }
 const handleQueryChange = (event) => {
   setQuery(event.target.value)
  }
 const handlePoiChange = (event, value) => {
   let pois = []
   for (let x of value) {
    pois.push(x.screen_name)
   }
   setPoi(pois)
  }
  const handleCountryChange = (event, value ) => {
  let c = []
   for (let x of value) {
    c.push(x.country)
   }
   setCountry(c)
  }
  const handleLanguageChange = (event, value ) => {
    let lang = []
    for (let x of value) {
      lang.push(x.lang)
     }
     setLanguage(lang)
  }

const submitHandler = async () => {
  setLoading(true)
  if(query!==null) {
    let url = `http://127.0.0.1:5000/tweets?query=${query}`
    let newsUrl = `https://newsapi.org/v2/everything?q=${query}&sortBy=relevancy&apiKey=7b68fb36cbd144b4bccab639e9247928`
    if(poiValue.length!==0) {
      console.log(poiValue)
      const poiValueUrl = poiValue.join()
      url+=`&poi=${poiValueUrl}`
    }
    if(countryValue.length!==0) {
      const countryValueUrl = countryValue.join()
      url+=`&country=${countryValueUrl}`
    }
    if(langValue.length!==0) {
      const langValueUrl = langValue.join()
      url+=`&lang=${langValueUrl}`
    }
    var request = {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":'GET,PUT,POST,DELETE,PATCH,OPTIONS'},
      withCredentials: false,
      url: url,
    }
    const newsRequest = {
      method: 'GET',
      url: newsUrl
    }
  const dataArray = await Promise.all([axios.request(request), axios.request(newsRequest)])
    // console.log(url)
  // const dataArray = await Promise.all([axios.request(request)])
  // console.log(dataArray)
  setTweets(dataArray[0])
  // setNews([])
  setNews(dataArray[1])
  setLoading(false)
  
  }
}

const poi = [
    {name : "Narendra Modi", screen_name: "narendramodi"},
    {name : "Amit Shah", screen_name: "AmitShah"},
    {name : "Ministry of Health of India", screen_name: "MoHFW_INDIA"},
    // {name : "Dr. Raghu Sharma", screen_name: "RaghusharmaINC"},
    {name : "Mansukh Mandaviya", screen_name: "mansukhmandviya"},
    {name : "Joe Biden" , screen_name : "JoeBiden"},
    {name : "CDC", screen_name: "CDCgov"},
    {name : "Andrew Cuomo", screen_name: "NYGovCuomo"},
    {name : "Vice President Of USA", screen_name: "VP"},
    {name : "Andrés Manuel López Obrador", screen_name: "lopezobrador_"},
    {name : "Secretaría de Salud de México", screen_name: "SSalud_mx"},
    // {name : "Porfirio Muñoz Ledo", screen_name: "pmunozledo"},
    {name : "Marcelo Ebrard", screen_name: "m_ebrard"},
    {name : "Claudia Sheinbaum", screen_name: "Claudiashein"},
    {name : "Kamala Harris", screen_name: "KamalaHarris"},
    {name : "Kathy Hochul", screen_name: "GovKathyHochul"},
    {name : "Gobierno de México", screen_name: "GobiernoMX"},
    {name : "Xavier Becerra", screen_name: "SecBecerra"}
  ]
const countries = [
  { code: 'IN', label: 'India', phone: '91', country: 'India' },
  { code: 'MX', label: 'Mexico', phone: '52', country: 'Mexico' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
    country: 'USA'
  }
]
const language = [
    {label: "English", lang: 'en'},
    {label: "Hindi", lang: 'hi'},
    {label : "Spanish", lang: 'es'}
]
const topics = [
    "topic1",
    "topic2",
    "topic3"
  ]
  return(
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%", margin: 5, marginBottom: 0 }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search'}}
            onChange = {handleQueryChange}
          />
      <IconButton  sx={{ p: '10px' }} aria-label="search" onClick = {submitHandler}>
        <SearchIcon />
      </IconButton>
      </Paper>
        <Box sx={{ p: '2px 4px', display: 'flex', flexDirection: 'row-reverse', width: "90%", margin: 5, marginTop: 0 }}>
          <FormControlLabel
            sx = {{marginRight: 0 }}
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Filters"
          />
        </Box> 
      {checked && <Box>
      
        <Fade in={checked}>
        <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%", margin: 5, marginTop: 0, backgroundColor: "white"}}> 
          <Autocomplete
            multiple
            disablePortal
            onChange = {handlePoiChange}
            id="combo-box-demo"
            options={poi}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300, margin: 2 }}
            renderInput={(params) => <TextField {...params} label="POI" />}
          />
          <Autocomplete
            id="country-select-demo"
            multiple
            sx={{ width: 300, margin: 2 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange = {handleCountryChange}
            renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
            {option.label} ({option.code})
          </Box>
          )}
          renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', 
              }}
            />
          )}
        />
        <Autocomplete
          multiple
          disablePortal
          id="combo-box-demo"
          options={language}
          sx={{ width: 300, margin: 2 }}
          onChange = {handleLanguageChange}
          renderInput={(params) => <TextField {...params} label="Language" />}
        />
        <Autocomplete
          multiple
          disablePortal
          id="combo-box-demo"
          options={topics}
          sx={{ width: 300, margin: 2 }}
          renderInput={(params) => <TextField {...params} label="Topic" />}
        />
        <Button variant="outlined" startIcon={<SearchIcon />} size = "large" sx={{ width: 300, margin: 2,  height: 55}} onClick = {submitHandler}>
          Search
        </Button>
        </Box>
      </Fade>
      </Box>}
    {loading && <Box sx={{ p: '2px 4px', display: 'flex', justifyContent:'center',  alignItems: 'center', width: "90%", margin: 5, marginTop: 0}}>
      <center><CircularProgress /></center>
    </Box>}
    {tweets && news ? <TabsComponent tweets = {tweets} news = {news}/> : <Box sx={{ p: '2px 4px', display: 'flex', justifyContent:'center',  alignItems: 'center', width: "90%", margin: 5, marginTop: 0}}>
      <center><Typography  variant="h6" component="div"> Please enter query </Typography></center></Box>
    }
    <br/>
    <br/>
    </div>)

}

export default Search;
