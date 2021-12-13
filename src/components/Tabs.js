import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Tweet from './EmbedTweet';
import Chart from "react-google-charts";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { CardActionArea } from '@mui/material';
import { TagCloud } from 'react-tagcloud'

// export default function TabsComponent({tweets}) {
export default function TabsComponent({tweets}, {news}) {
  const tweetArray = tweets['data']['docs']
  let isTweet = false
  if(tweetArray.length > 0) {
    isTweet = true
  }
  let hashtags = []
  for (let h in tweets['data']['hashtags']) {
    let hashobj = {value : h, count: tweets['data']['hashtags'][h]}
    hashtags.push(hashobj)
  }
  console.log(tweetArray.length)
  const [noOfPages, setnoOfPages] = React.useState(
    Math.ceil(tweetArray.length / 10)
  );
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  React.useEffect(()=>{
    setnoOfPages( Math.ceil(tweetArray.length / 10))
    setPage(1)
  },[tweets])
  return (
    <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%", margin: 5, marginBottom: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <center><b>Tweets</b></center>
            <br/>
          <Paper sx={{ p: '4px', display: 'block', alignItems: 'center', maxHeight:500, overflow: 'auto'}}>
          {isTweet ? <div>
            <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' ,maxHeight:'90%'}}>
            {tweetArray.slice((page - 1) * 10, page * 10).map((value => (
              <ListItem
              key={value.id}>
              <Tweet id = {value.id} sentiment = {value['sentiment']}/>
              </ListItem>
            )))}
            </List>
            <br/>
            <Box sx = {{width: '100%', alignItems: 'center'}}>
              <Pagination count={noOfPages} variant="outlined" color="secondary" onChange={handleChange} />
            </Box> </div>:  <center><Typography  variant="h6" component="div">No tweets </Typography></center>}
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <center><b>News</b></center>
        <br/>
        <Paper sx={{ p: '4px', display: 'flex', alignItems: 'center', maxHeight:500, overflow: 'auto'}}>
        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' ,maxHeight:500 }}>
        {tweets['data']['articles'].map((value =>(
            <ListItem key = {['title']}>
               <Card sx={{ maxWidth: 345 }}>
               <CardActionArea href={value.url} target = "_blank">
                <CardMedia
                  component="img"
                  height="140"
                  image={value['urlToImage']}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {value['title']}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value['description']}
                  </Typography>
                </CardContent>
                <CardActions>
                <Typography variant="h8" color="text.secondary">
                    {value['source']['name']}
                  </Typography>
                </CardActions>
              </CardActionArea>
              </Card>
            </ListItem>  
              )))}
          
          </List>
            <br/>
          </Paper>
        </Grid>
        <Grid item xs={4}> 
        <center><b>Analytics</b></center>
            <br/>
        <Paper sx = {{ p: '4px', display: 'block', alignItems: 'center', maxHeight:500, overflow: 'auto'}}>
          {isTweet ? <div><center>          <Chart
            loader={<div>Loading Chart</div>}
              data={[
                    ['Type', 'Sentiment'],
                    ['Postive', tweets['data']['sentiments']['pos']],
                    ['Negative', tweets['data']['sentiments']['neg']],
                    ['Neutral', tweets['data']['sentiments']['neu']]
                  ]}
                    width={'100%'}
                    height={'350'}
                    chartType="PieChart"
                    options={{
                        title: 'Sentiment Analysis',
                    }}
                />
          </center>
        <br/>
          <br/>
          <Chart
                  loader={<div>Loading Chart</div>}
                  data={[
                      ['Language', 'Number of Tweets'],
                      ['English', tweets['data']['language']['en']],
                      ['Spanish', tweets['data']['language']['es']],
                      ['Hindi', tweets['data']['language']['hi']]
                  ]}
                  width={'100%'}
                  height={'100%'}
                  chartType="PieChart"
                  options={{
                      title: 'Language wise tweet distribution',
                  }}
              />
            <br/>
            <br/>
            <Chart
                  loader={<div>Loading Chart</div>}
                  data={[
                      ['Country', 'Number of Tweets'],
                      ['USA', tweets['data']['country']['usa']],
                      ['India', tweets['data']['country']['india']],
                      ['Mexico', tweets['data']['country']['mexico']]
                  ]}
                  width={'100%'}
                  height={'100%'}
                  chartType="PieChart"
                  options={{
                      title: 'Country tweet distribution',
                  }}
              />
          <center>
          <Typography gutterBottom variant="h6" component="div">
            WordCloud of Hashtags
          </Typography>
          </center>
          <center>
          <TagCloud
            minSize={12}
            maxSize={35}
            tags={hashtags}
          />
          </center>
        <br/>
       
          <br/></div> : <center><Typography  variant="h6" component="div">No tweets </Typography></center>} 
      </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
