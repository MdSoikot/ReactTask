import React from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

function arrowGenerator(color) {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: "-0.95em",
            width: "2em",
            height: "1em",
            "&::before": {
                borderWidth: "0 1em 1em 1em",
                borderColor: `transparent transparent ${color} transparent`
            }
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: "-0.95em",
            width: "2em",
            height: "1em",
            "&::before": {
                borderWidth: "1em 1em 0 1em",
                borderColor: `${color} transparent transparent transparent`
            }
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: "-0.95em",
            height: "2em",
            width: "1em",
            "&::before": {
                borderWidth: "1em 1em 1em 0",
                borderColor: `transparent ${color} transparent transparent`
            }
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: "-0.95em",
            height: "2em",
            width: "1em",
            "&::before": {
                borderWidth: "1em 0 1em 1em",
                borderColor: `transparent transparent transparent ${color}`
            }
        }
    };
}

const useStylesBootstrap = makeStyles(theme => ({
    arrow: {
        position: "absolute",
        fontSize: 8,
        "&::before": {
            content: '""',
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            borderStyle: "solid"
        }
    },
    popper: arrowGenerator("#031b4e"),
    tooltip: {
        fontWeight: "bold",
        fontSize: 14,
        padding: "5px 20px",
        position: "relative",
        backgroundColor: "#031b4e"
    },
    tooltipPlacementLeft: {
        margin: "0 8px"
    },
    tooltipPlacementRight: {
        margin: "0 8px"
    },
    tooltipPlacementTop: {
        margin: "8px 0"
    },
    tooltipPlacementBottom: {
        margin: "1px 0"
    }
}));

function Tooltips(props) {
    const { children, open, value } = props;
    const { arrow, ...classes } = useStylesBootstrap();
    const [arrowRef, setArrowRef] = React.useState(null);
  
    const popperRef = React.useRef(null);
    React.useEffect(() => {
      if (popperRef.current) {
        popperRef.current.update();
      }
    });
  
    return (
      <Tooltip
        classes={classes}
        className
        PopperProps={{
          popperRef,
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(arrowRef),
                element: arrowRef
              }
            }
          }
        }}
        open={open}
        enterTouchDelay={0}
        placement="bottom"
        title={
          <React.Fragment>
              <span>+{value} TB</span>
            
            <span className={arrow} ref={setArrowRef} />
          </React.Fragment>
        }
      >
        {children}
      </Tooltip>
    );
  }

export default Tooltips