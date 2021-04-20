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

class QualificationList extends React.Component {

  render() {
    const { lists, classes } = this.props;
  
    return (
      <div className={classes.root}>
            {lists.length>0?
                   ( <h1>Qualification</h1>)
              :''
        }  
          {lists.map(( qualification,index ) => {
            return (
                <div class="exp_container">
                <div class="exp_content">
                    <div class="exp_content_title">
                        <p class="p">{qualification.year}</p>
                    </div>
                    <div class="exp_content_desc">
                        <p class="p">{qualification.studytype} 
                            <span>, {qualification.location}</span>
                        </p>
                    </div>
                </div>
            </div>          
          )})}
      </div>
     )
     
  }
}


export default withStyles(styles)(QualificationList);
