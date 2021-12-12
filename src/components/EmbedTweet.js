import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Tweet } from 'react-twitter-widgets'

export default function EmbedTweet({id,sentiment}) {
    return(
        <Container sx = {{margin: 1, alignItems: 'center' }}> 
            <Typography gutterBottom variant="h6" component="div">
                Sentiment: {sentiment}
          </Typography>
            <Tweet tweetId={id} />
        </Container>
    )
}