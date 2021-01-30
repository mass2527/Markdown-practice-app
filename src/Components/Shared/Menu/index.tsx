import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickHeading = () => {
    history.push('/heading');
    handleClose();
  };

  const clickParagraph = () => {
    history.push('/paragraph');
    handleClose();
  };

  const clickTextAttributes = () => {
    history.push('/textAttributes');
    handleClose();
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={clickHeading}>Heading</MenuItem>
        <MenuItem onClick={clickParagraph}>Paragraph</MenuItem>
        <MenuItem onClick={clickTextAttributes}>Text attributes</MenuItem>
      </Menu>
    </div>
  );
}
