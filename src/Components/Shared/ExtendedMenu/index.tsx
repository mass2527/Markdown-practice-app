import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useLocation } from 'react-router-dom';

export default function ExtendedMenu() {
  const history = useHistory();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    return () => handleClose();
  }, [location.pathname]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Extended
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => history.push('/table')}>1. Table</MenuItem>
        <MenuItem onClick={() => history.push('/headingId')}>2. Heading ID</MenuItem>
        <MenuItem onClick={() => history.push('/taskList')}>3. Task List</MenuItem>
        <MenuItem onClick={() => history.push('/html')}>4. HTML</MenuItem>
      </Menu>
    </div>
  );
}
