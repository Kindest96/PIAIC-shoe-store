import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../API/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    demo: {
      width: '60%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Cart = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { item, shoes, deleteItem } = useContext(GlobalContext);

    const getTotal = (products) => {
        return products.reduce((total, items) => total + shoes[items.product].price, 0)
    }

  return (item.length !== 0 ? 
      <Grid container item direction='column' justify='flex-start' alignItems='center' xs={12} lg={12} style={{ padding: '25px' }}>
              <Typography variant='h4'>Bill: ${getTotal(item)}</Typography>
              <div className={classes.demo}>
              <List>
                  {item.map((items) =>
                      (
                          <ListItem key={items.id} style={{ height: '100px' }}>
                              <ListItemAvatar>
                                  <Avatar style={{ height: '64px', width: '64px' }}>
                                      <img src={shoes[items.product].img} alt={shoes[items.product].name} style={{ height: '64px', width: '64px' }} />
                                  </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                  primary={
                                      <Button onClick={() => navigate(`/products/${items.product}`)}>
                                          <Typography variant='h6'>
                                              {shoes[items.product].name}  (${shoes[items.product].price})
                                          </Typography>
                                      </Button>
                                  }
                                  style={{ textAlign: 'center' }}
                              />
                              <ListItemSecondaryAction>
                                  <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(items.id)}>
                                      <DeleteIcon />
                                  </IconButton>
                              </ListItemSecondaryAction>
                          </ListItem>
                      )
                  )}{console.log(item)}
              </List> 
              </div>
        </Grid> : <Grid container item direction='column' justify='center' alignItems='center' xs={12} lg={12} style={{ padding:'25px', height:'80vh'}}><Typography variant='h4'>Nothing to show :'(</Typography></Grid>
  );
}



export default Cart
