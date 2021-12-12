import * as React from 'react';
import Chart from "react-google-charts";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { TagCloud } from 'react-tagcloud'
export default function POI() {
    const [hashTags, setHashtags] = React.useState([])
    const [poi, setPoi] = React.useState(null)
    const [data, setData] = React.useState(null)
    const handlePoiChange = (event, value) => {
        if(value) {
            console.log(value.screen_name)
            setPoi(value.screen_name)
        }
        else {
            setPoi(null)
        }
    }
    React.useEffect(async ()=>{
        if(poi) {
            let url = `http://3.87.211.154:9999/tweets?poi=${poi}`
            var request = {
                method: 'GET',
                headers: {
                 "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":'GET,PUT,POST,DELETE,PATCH,OPTIONS'},
                withCredentials: false,
                url: url,
            }
            const data = await axios.request(request)
            console.log(data)
            setData(data)
            let hashtags = []
            for (let h in data['data']['hashtags']) {
                let hashobj = {value : h, count: data['data']['hashtags'][h]}
                hashtags.push(hashobj)
            }
            setHashtags(hashtags)
            
        } 
    },[poi])

    const poiData = [
        {name : "Narendra Modi", screen_name: "narendramodi"},
        {name : "Amit Shah", screen_name: "AmitShah"},
        {name : "Ministry of Health of India", screen_name: "MoHFW_INDIA"},
        {name : "Mansukh Mandaviya", screen_name: "mansukhmandviya"},
        {name : "Joe Biden" , screen_name : "JoeBiden"},
        {name : "CDC", screen_name: "CDCgov"},
        {name : "Andrew Cuomo", screen_name: "NYGovCuomo"},
        {name : "Vice President Of USA", screen_name: "VP"},
        {name : "Andrés Manuel López Obrador", screen_name: "lopezobrador_"},
        {name : "Secretaría de Salud de México", screen_name: "SSalud_mx"},
        {name : "Marcelo Ebrard", screen_name: "m_ebrard"},
        {name : "Claudia Sheinbaum", screen_name: "Claudiashein"},
        {name : "Kamala Harris", screen_name: "KamalaHarris"},
        {name : "Kathy Hochul", screen_name: "GovKathyHochul"},
        {name : "Gobierno de México", screen_name: "GobiernoMX"},
        {name : "Xavier Becerra", screen_name: "SecBecerra"}
      ]
    return (
    <Box sx={{ p: '2px 4px', display: 'block', alignItems: 'center', width: "90%", margin: 5, backgroundColor: "white"}}> 
    <Autocomplete
        disablePortal
        onChange = {handlePoiChange}
        id="combo-box-demo"
        options={poiData}
        getOptionLabel={(option) => option.name}
        sx={{ p: '2px 4px', width: '95%', margin: 2 }}
        renderInput={(params) => <TextField {...params} label=" Select POI" />}
      />
      {
          poi && data && <div><br/>
          <br/>
      <Grid container spacing={2} padding = {2}>
          <Grid item xs={6} minHeight = {350} >
              <Chart
                  loader={<div>Loading Chart</div>}
                  data={[
                      ['Type', 'Sentiment'],
                      ['Positvie', data['data']['sentiments']['pos']],
                      ['Negative', data['data']['sentiments']['neg']],
                      ['Neutral', data['data']['sentiments']['neu']]
                  ]}
                  width={'100%'}
                  height={'100%'}
                  chartType="PieChart"
                  options={{
                      title: 'Sentiment Analysis',
                  }}
              />
          </Grid>
          <Grid item xs={6} minHeight = {350}>
              <Chart
                  loader={<div>Loading Chart</div>}
                  data={[
                      ['Language', 'Number of Tweets'],
                      ['English', data['data']['language']['en']],
                      ['Spanish', data['data']['language']['es']],
                      ['Hindi', data['data']['language']['hi']]
                  ]}
                  width={'100%'}
                  height={'100%'}
                  chartType="PieChart"
                  options={{
                      title: 'Language wise tweet distribution',
                  }}
              />
          </Grid>
      </Grid>
      <TagCloud
            minSize={12}
            maxSize={35}
            tags={hashTags}
          />
      <br/></div>
      }
      </Box>

    )

}