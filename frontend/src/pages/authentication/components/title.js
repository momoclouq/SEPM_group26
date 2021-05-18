import { makeStyles, Typography, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Title } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    color: "#7209b7",
    fontSize: (props) => (props.fontSize ? props.fontSize : "30px"),
  },
});

function StyleTitle(props) {
  const classes = useStyles(props);

  return (
    <Typography variant={props.variant} className={classes.root}>
      {" "}
      {props.children}{" "}
    </Typography>
  );
}

export default StyleTitle;
