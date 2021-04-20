import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChipInput from "material-ui-chip-input";
import TextField from '@material-ui/core/TextField';
import QualificationList from './QualificationList';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'end',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  buttoncontainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  textboxes: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin:'10px'
  },
}));


export default function Qualification(props) {
  const classes = useStyles();
  const content = props.content.qualifications.content;
  const [location, setLocation] = React.useState('');
  const [studytype, setStudytype] = React.useState('');
  const [year, setYear] = React.useState('');
 

  const handleChange = (event) => {
    if(event.target.name=="location"){
      setLocation(event.target.value);
    } else if(event.target.name=="studytype"){
      setStudytype (event.target.value);
    }  else if(event.target.name=="year"){
      setYear(event.target.value);
    }
  };
  const handleSaved = (event) => {
    props.handleSave({location: location,
            studytype: studytype,
            year: year,
    });
    setLocation('');
    setStudytype('')
    setYear('')
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
      
      <TextField className={classes.textboxes} value={studytype} id="standard-basic" label="Study"  name="studytype" onChange={handleChange}/>
      <TextField className={classes.textboxes} value={year} id="standard-basic" label="Year"   name="year"  onChange={handleChange}/>
      <TextField className={classes.textboxes} value={location} id="standard-basic" label="location"   name="location"  onChange={handleChange}/>
      
    </form>
    <div className={classes.buttoncontainer}>
      <Button variant="contained" color="primary" onClick={handleSaved}>
                Save
      </Button>
      </div>
    <QualificationList lists={content} ></QualificationList>
    </div>
    
  );
}
