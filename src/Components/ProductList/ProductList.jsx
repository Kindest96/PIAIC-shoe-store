import React, { useContext } from 'react';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { GlobalContext } from '../../API/GlobalState';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const { shoes, addItem } = useContext(GlobalContext);
  const navigate = useNavigate();
  
  // console.log(shoes)

  const add = (slug) => {
    const newPurchase = {
      id:     Math.floor(Math.random() * 100000000),
      product: slug,
    };
    addItem(newPurchase);
  }

  return (
    <Grid container direction='row' justify='flex-start' alignItems='center' spacing={3} style={{ padding:'25px', marginLeft:'auto', marginRight:'auto'}} md={9}>
            {Object.entries(shoes).map(([slug, { img, name, price }]) =>
              <Grid item sm={6} md={3}>
                <Card raised={true} key={slug}>
                <CardActionArea onClick={() => navigate(`/products/${slug}`)}>
                      <CardMedia component="img" alt={name} height="280" image={img} title={name} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {name}
                      </Typography>
                      <Typography gutterBottom variant="body1" component="h2">
                      Price: ${price}
                    </Typography>
                      </CardContent>
                </CardActionArea>
                    <CardActions>
                  <Button size="small" color="primary" onClick={() => navigate(`/products/${slug}`)}>
                          Details
                  </Button>
                  <Button size="small" color="primary" onClick={() => {add(slug)}} style={{marginLeft:'auto'}}>
                          Add to Cart
                  </Button>
                </CardActions>
              </Card>
              </Grid>    
            )}
        </Grid>
    )
}

export default ProductList
