import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChipInput from "material-ui-chip-input";
import TextField from '@material-ui/core/TextField';
import WorkList from './WorkList';
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


export default function ProfessionalExp(props) {
  const classes = useStyles();
  const content = props.content.works.content;
  const [location, setLocation] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [desc, setDesc] = React.useState([]);
  const [tech, setTech] = React.useState([]);
  const handleChange = (event) => {
    if(event.target.name=="location"){
      setLocation(event.target.value);
    } else if(event.target.name=="position"){
      setPosition (event.target.value);
    }  else if(event.target.name=="company"){
      setCompany (event.target.value);
    }  else if(event.target.name=="startDate"){
      setStartDate (event.target.value);
    }  else if(event.target.name=="endDate"){
      setEndDate (event.target.value);
    } 
  };
  const handleSaved = (event) => {
    props.handleSave({location: location,
    description: desc,
    position: position,
    company:company,
    startDate: startDate,
    endDate: endDate,
    technologies: tech,
    achievements:[]
  });
  setCompany('')
  setDesc([])
  setEndDate('')
  setLocation('')
  setPosition('')
  setStartDate('')
  setTech([])
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
      
      <TextField className={classes.textboxes} value={location} id="standard-basic" label="Location"  name="location" onChange={handleChange}/>
      <TextField className={classes.textboxes} value={position} id="standard-basic" label="Position"  name="position"  onChange={handleChange}/>
      <TextField className={classes.textboxes} value={company} id="standard-basic" label="Company"  name="company"  onChange={handleChange}/>
      <TextField className={classes.textboxes} value={startDate} id="standard-basic" label="Start Date"   name="startDate"  onChange={handleChange}/>
      <TextField className={classes.textboxes} value={endDate} id="standard-basic" label="End Date"   name="endDate"  onChange={handleChange}/>
      <ChipInput className={classes.textboxes} value={desc} onAdd={(chip) => {
        setDesc([...desc,chip]);
      }}
      onDelete={(chip, index) => {
        var dupdesc = [...desc];
        dupdesc.splice(index, 1);
        setDesc(dupdesc);
      }}
       label="Description"  fullWidth/>

      <ChipInput className={classes.textboxes} value={tech} onAdd={(chip) => {
        setTech([...tech,chip]);
      }}
      onDelete={(chip, index) => {
        var duptech = [...tech];
        duptech.splice(index, 1);
        setTech(duptech);
      }}  label="Technologies"  fullWidth/>

    </form>
    <div className={classes.buttoncontainer}>
      <Button variant="contained" color="primary" onClick={handleSaved}>
                Save
      </Button>
      </div>
    <WorkList lists={content} ></WorkList>
    </div>
    
  );
}
