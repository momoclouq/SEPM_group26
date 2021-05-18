import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#7209b7",
    color: "white",
    display: "inline-block",
    width: (props) => (props.width ? props.width : "25%"),
    "&:hover": {
      backgroundColor: "#7209b7",
      boxShadow: " 0 10px 20px rgba(33,33,33,.2)",
    },
  },
});

function InvertedButton(props) {
  const classes = useStyles(props);

  return (
    <Button
      classes={{ root: classes.button }}
      variant="contained"
      size="large"
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default InvertedButton;
