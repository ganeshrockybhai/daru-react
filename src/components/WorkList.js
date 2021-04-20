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

class WorkList extends React.Component {
  state = { open: {} };

  render() {
    const { lists, classes } = this.props;
  
    return (
      <div className={classes.root}>
          {
              lists.length>0?
                   (<h1>Professional Experience</h1>)
              :''
          }

          {lists.map(( work,index ) => {
            return (
                            <div class="exp_container">
                                <div class="exp_header">
                                    <div class="exp_header_info">
                                        <h4>{work.startDate} - {work.endDate}</h4>
                                    </div>
                                    <div class="exp_header_info">
                                        <h4>{work.position}</h4>
                                    </div>
                                    <div class="exp_header_info">
                                        <h4>{work.company}, {work.location}</h4>
                                    </div>
                                </div>
                                <div class="exp_content">
                                    <div class="exp_content_title">
                                        <p class="p">Description:</p>
                                    </div>
                                    <div class="exp_content_desc">
                                    {work.description.map(( desc,index ) => {
                                            return(    <p class="p">{desc}</p>)
                                    })}
                                    </div>
                                </div>
                                <div class="exp_content">
                                    <div class="exp_content_title">
                                        <p class="p">Technologies:</p>
                                    </div>
                                    <div class="exp_content_desc">
                                    {work.technologies.map(( tech,index ) => {
                                            return(    <p class="p">{tech}</p>)
                                    })}
                                </div>
                                <div class="exp_content">
                                    <div class="exp_content_title">
                                        <p class="p">Achievements:</p>
                                    </div>
                                    <div class="exp_content_desc">
                                    {work.achievements.map(( achievement,index ) => {
                                        if(achievement.types==0){
                                            return(    <li>{achievement.desc}</li>)
                                        } else {
                                            return(  <p class="p">{achievement.desc}</p>)
                                        }
                                           
                                    })}
                                    </div>
                                </div>
                            </div>            
                            </div>            
          )})}
      </div>
     )
     
  }
}


export default withStyles(styles)(WorkList);
