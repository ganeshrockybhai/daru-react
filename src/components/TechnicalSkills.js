import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import TextField from '@material-ui/core/TextField';
import TechList from './TechList';
import TechTags from './TechTags';
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
}));


export default function TechnicalSkills(props) {
  const classes = useStyles();
  const content = props.content.skill.content;
  const [value, setValue] = React.useState('');
  const [techs, setTechs] = React.useState([]);
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSaved = (event) => {
    props.handleSave({name:value,keywords:techs});
    setTechs([]);
    setValue('')
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
      
      <TextField id="standard-basic" value={value} label="Skill Title"    onChange={handleChange}/>
      <ChipInput value={techs} onAdd={(chip) => {
        setTechs([...techs,chip]);
      }}
      onDelete={(chip, index) => {
        var duptechs = [...techs];
          duptechs.splice(index, 1);
          setTechs(duptechs);
      }}
       label="Skills" fullWidth/>
    </form>
    <div className={classes.buttoncontainer}>
      <Button variant="contained" color="primary" onClick={handleSaved}>
                Save
      </Button>
      </div>
    <TechList lists={content} ></TechList>
    </div>
    
  );
}
