import React from "react";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class TechList extends React.Component {

  render() {
    const { lists, classes } = this.props;
  
    return (
      <div className={classes.root}>
        {lists.length>0?
                   ( <h1>Technical Skills</h1>)
              :''
        }  
          {lists.map(( tech,index ) => {
            return (
              <div key={index} >
              <h4>{tech.name}</h4>
              <ul>
                  {tech.keywords.map(( keyword,index2 ) => {
                    return (<li key={index2}>{keyword}</li>)
                  })}                 
              </ul>
          </div>          
          )})}
      </div>
     )
     
  }
}


export default withStyles(styles)(TechList);
