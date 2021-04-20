import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Introduction from './Introduction';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalExp from './ProfessionalExp';
import Qualification from './Qualification';
import GenerateResume from './GenerateResume';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Introduction', 'Technical Skills', 'Professional Experience','Qualification','Generate Resume'];
}
let state={
  intro:{
    label:'',
    content:[]
  }
}
function getStepContent(stepIndex,handleIntroSave,handleSkillSave,handleProfExpSave,handleQualificationSave,content) {
  switch (stepIndex) {
    case 0:
      return <Introduction handleSave={handleIntroSave} content={content}></Introduction>;
    case 1:
      return <TechnicalSkills handleSave={handleSkillSave} content={content}></TechnicalSkills>;
    case 2:
      return <ProfessionalExp handleSave={handleProfExpSave} content={content}></ProfessionalExp>;
    case 3:
      return <Qualification handleSave={handleQualificationSave} content={content}></Qualification>;
    default:
      return 'Error';
  }
}
let resume={
  basics: {
    "name": "Adrián Deccico",
    "label": "DevOps Consultant",
    "picture": "/darumatic_logo_transparent.png",
    "email": "hello@darumatic.com",
    "phone": "P: 02-82 948 067",
    "company": "Darumatic Pty Ltd DevOps Consulting"
  },
  intro:{
    label:"Introduction",
    content:[
    ]
  },
  skill:{
    label:"Technical Skills",
    content: [
    ]
  },
  works:{
    label:"Professional Experience",
    content: [
    ]
  },
  qualifications: {
    label:"Qualification",
    content:[]
  }
};
export default function ResumeWizard() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [content, setContent] = React.useState(resume);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleIntroSave = (newcontent) => {
    setContent((prevState) => ({
      ...prevState,
      intro: {
        content: [...prevState.intro.content ,newcontent]
      }
    }));
  };
  const handleQualificationSave = (newcontent) => {
    setContent((prevState) => ({
      ...prevState,
      qualifications: {
        content: [...prevState.qualifications.content ,newcontent]
      }
    }));
  };
  const handleSkillSave = (newcontent) => {
    setContent((prevState) => ({
      ...prevState,
      skill: {
        content: [...prevState.skill.content ,newcontent]
      }
    }));
  };
  const handleProfExpSave = (newcontent) => {
    setContent((prevState) => ({
      ...prevState,
      works: {
        content: [...prevState.works.content ,newcontent]
      }
    }));
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 4 ? (
          <GenerateResume content={content}></GenerateResume>
        ) : (
          <div>
            {getStepContent(activeStep,handleIntroSave,handleSkillSave,handleProfExpSave,handleQualificationSave,content)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <span>{content.into}</span>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === 3 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
