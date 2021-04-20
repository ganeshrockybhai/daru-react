import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    },

  },
  textcontainer: {
    padding: '24px',
  },
  buttoncontainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
}));

export default function Introduction(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const content = props.content.intro.content;
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSaved = (event) => {
    props.handleSave(value);
    setValue('')
  };
  
  return (
    <div className={classes.textcontainer}>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Introduction"
          multiline
          rows={4}
          width={1}
          onChange={handleChange}
          variant="outlined"
        />
        </div>
        <div className={classes.buttoncontainer}>
        <Button variant="contained" color="primary" onClick={handleSaved}>
                Save
        </Button>
        </div>
        
      </div>
    </form>
    <IntroList content={content} />
    </div>
    
  );
}
function IntroList(props) {
  const content = props.content;
  const listItems = content.map((text,index) =>
    // Wrong! The key should have been specified here:
    <ListItem key={index}>
    <ListItemAvatar>
      <Avatar>
        <BookmarkBorderIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={text}/>
  </ListItem>
);
  return (
    <List>
      {listItems}
    </List>
  );
}