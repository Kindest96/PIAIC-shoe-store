import React, {useState} from 'react'
import { Grid, Slide, Typography } from '@material-ui/core'

const Home = () => {
    const [nextSlide, setnextSlide] = useState(false)
    const [nextSlide2, setnextSlide2] = useState(false)

    return (
        <Grid container direction="column" justify="center" alignItems="center" style={{height:'80vh'}}>
            <Slide direction='right' in={true} timeout={1000} onEntered={() => setnextSlide(true)} mountOnEnter>
                <Typography variant='h2'>Welcome</Typography>
            </Slide>
            <Slide direction='right' in={nextSlide} timeout={1000} onEntered={() => setnextSlide2(true)} mountOnEnter>
                <Typography variant='h2'>to</Typography>
            </Slide>
            <Slide direction='right' in={nextSlide2} timeout={1000} mountOnEnter>
                <Typography variant='h2'>PIAIC Shoe Store</Typography>
            </Slide>
        </Grid>
    )
}

export default Home
