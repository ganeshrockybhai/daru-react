import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
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
    justifyContent: 'center'
  },
  textboxes: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin:'10px'
  },
}));


export default function GenerateResume(props) {
  const classes = useStyles();
  const [resumeurl, setResumeurl] = React.useState('');
  const [downloadReady, setDownloadReady] = React.useState(false);

  const content = props;
  function RequestResume(){
    axios({
      method: 'post',
      url: 'http://45.76.117.24:3001/uploadjson',
      headers: {"Access-Control-Allow-Origin": "*"},
      data: content.content
    }).then(response => {
      console.log(response);
      setResumeurl("http://45.76.117.24:3001/"+response.data.file);
      setDownloadReady(true);
  });
  }
  return (
    <div>
      <Typography className={classes.root}>
        {
          (downloadReady===true)?
             (      <Link href={resumeurl}>
              Download Resume
            </Link>):''
        }
    </Typography>
    <div className={classes.buttoncontainer}>
      <Button variant="contained" color="primary" onClick={RequestResume}>
                Generate Resume
      </Button>
      </div>
    </div>
    
  );
}
