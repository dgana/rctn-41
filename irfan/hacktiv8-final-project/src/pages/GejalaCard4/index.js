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

  function GejalaCard4(props) {
    const { classes } = props;
  
    return (
      <div style={{ display: "inline-block" }}>
        <Slide>
        <Card className={classes.card}>
         <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
            Sakit Tenggorokan
            </Typography>
            <Typography variant="body2" component="p">
            Merasakan sakit saat menelan sering dialami pasien covid-19 dengan gejala ringan, sering disertai dengan batuk dan pilek.
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Slide>
      </div>
    );
  }
  
  GejalaCard4.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(GejalaCard4);