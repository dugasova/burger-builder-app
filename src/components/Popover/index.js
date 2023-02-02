import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const style = {
    backgroundColor: "chocolate",
    borderRadius: "20%",
    boxShadow: "2px 2px 2px #fff",
    marginBottom: "50px"
}

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}
      style={style}>Details</Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 3 }} component="div"
        style={{
            background: "linear-gradient(90deg, #f4bd57 0%, #d08412 100%)",
        }}
          ><h2 style={{color: "#3c1414", marginBottom: "20px"}}>Details of order</h2>{props.children}</Typography>
      </Popover>
    </div>
  );
};