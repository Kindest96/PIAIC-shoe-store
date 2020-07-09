import React from 'react'
import { Grid, Typography } from '@material-ui/core';

const NotFound = () => {
    return (
        <Grid container direction="column" justify="center" alignItems="center" style={{ height: '80vh' }}>
            <Typography variant='h2'>Error 404</Typography>
            <Typography variant='body1'>The page you are trying to access does not exist :(</Typography>
        </Grid>
    )
}

export default NotFound
