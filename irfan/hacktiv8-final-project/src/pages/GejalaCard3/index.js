import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import {Slide} from "react-awesome-reveal"

const styles = {
    card: {
        width: 170,
        display: "inline-block",
        height: 230,
    }
  };

  function GejalaCard3(props) {
    const { classes } = props;
  
    return (
      <div style={{ display: "inline-block" }}>
        <Slide>
        <Card className={classes.card}>
         <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
            Gangguan Pernapasan
            </Typography>
            <Typography variant="body2" component="p">
            Sulit untuk bernafas sering ditemukan di pasien yang punya riwayat penyakit pernapasan.
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Slide>
      </div>
    );
  }
  
  GejalaCard3.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(GejalaCard3);