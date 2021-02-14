import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Fade} from "react-awesome-reveal";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },

  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: [
      'Georgia',
      '"Times New Roman"',
      'Times',
      'serif'
     ]
  },
  paragraph: {
    fontFamily: [
      'Georgia',
      '"Times New Roman"',
      'Times',
      'serif'
     ],
  }
}));


export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Fade>
    <h1>Pencegahan Covid-19</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography className={classes.heading}>
            Sering cuci tangan dan pakai sabun
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.paragraph}>
          Cuci tangan menggunakan sabun dengan durasi 20 detik bisa membunuh virus corona yang menemepel di tangan. 
          Dilakukan sebelum makan, minum, dan menyentuh wajah.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Menggunakan masker</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.paragraph}>
          Masker bisa mencegah masuknya virus lewat hidung atau mulut. Hindari menggunakan masker berulang-ulang 
              dan menggantinya setiap 4 jam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Konsumsi gizi seimbang, perbanyak sayur dan buah</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.paragraph}>
          Mengkonsumsi makanan sehat teruatam sayur dan buah bisa meningkatkan imunitas tubuh dan melawan virus
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Bila mengalami gejala covid-19, segera ke fasilitas kesehatan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.paragraph}>
          Jika mengalami gejala covid-19, segera pergi ke fasilitas kesehatan terdekat 
          </Typography>
        </AccordionDetails>
      </Accordion>      
    </Fade>
    </div>
  );
}

