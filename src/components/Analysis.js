import * as React from 'react';
import Chart from "react-google-charts";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import POI from './POI';
export default function Analysis() {
    return(
        <div>
            <br/>
            <br/>
        <Grid container spacing={2} padding = {2}>
            <Grid item xs={4} minHeight = {350} >
                <Chart
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Type', 'Number of Tweets'],
                        ['Covid', 13169],
                        ['Vaccination', 3587],
                        ['Others', 38294],
                    ]}
                    width={'100%'}
                    height={'100%'}
                    chartType="PieChart"
                    options={{
                        title: 'Tweet Distribution',
                    }}
                />
            </Grid>
            <Grid item xs={4} minHeight = {350}>
                <Chart
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['POI VS Non-POI', 'Number of Tweets'],
                        ['POI', 34826],
                        ['Non-POI', 19983]
                    ]}
                    width={'100%'}
                    height={'100%'}
                    chartType="PieChart"
                    options={{
                        title: 'POI vs Non-POI',
                    }}
                />
            </Grid>
            <Grid item xs={4} minHeight = {350}>
                <Chart
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Language', 'Number of Tweets'],
                        ['English', 29458],
                        ['Spanish', 18071],
                        ['Hindi', 8281]
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
        <br/>
        <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: 2, marginTop: 0, backgroundColor: "white" , minHeight:300}}>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['POI', 'Tweets'],
                    ['Narendra Modi', 2000],
                    ['Amit Shah', 3180],
                    ['Ministry of Health of India', 2879],
                    // ['Dr. Raghu Sharma', 2879],
                    ['Mansukh Mandaviya', 2000],
                    ['Joe Biden', 2000],
                    ['CDC', 3181],
                    ['Andrew Cuomo', 3200],
                    ['Vice President Of USA', 3218],
                    ['Andrés Manuel López Obrador', 2000],
                    ['Secretaría de Salud de México', 2000],
                    // ['Porfirio Muñoz Ledo',''],
                    ['Marcelo Ebrard',2000],
                    ['Claudia Sheinbaum',2000],
                    ['Kamala Harris',2000],
                    ['Kathy Hochul',2000],
                    ['Gobierno de México',2000],
                    ['Xavier Becerra',449]
                ]}
                options={{
                    chart: {
                        title: 'POI Tweets'
                    },
                }}AIzaSyCeg3jpCCuMLPHzpcFvlJyczNTaVG58dTA
            />  
         </Box>
         <br/>
         <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: 2, marginTop: 0, backgroundColor: "white" , height:350}}>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="GeoChart"
                data={[
                    ['Country', 'Tweets'],
                    ['India', 12087],
                    ['United States', 26018],
                    ['Mexico', 19803],
                ]}
            mapsApiKey="AIzaSyCeg3jpCCuMLPHzpcFvlJyczNTaVG58dTA"/>
         </Box>
         <br/>
        <POI/>
        </div>
    )
}