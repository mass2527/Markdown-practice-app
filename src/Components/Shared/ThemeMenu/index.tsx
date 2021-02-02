import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useThemeState, useThemeDispatch } from 'store/ThemeContext';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      width: '170px',
      border: '1px solid lightgray',
    },
  })
);

export default function ThemeMenu() {
  const classes = useStyles();
  const { theme } = useThemeState();
  const dispatch = useThemeDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    return () => handleClose();
  }, [theme]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {theme}
      </Button>

      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem className="blackboard" onClick={() => dispatch({ type: 'CHANGE', payload: 'blackboard' })}>
          Blackboard
        </MenuItem>
        <MenuItem className="material" onClick={() => dispatch({ type: 'CHANGE', payload: 'material' })}>
          Material
        </MenuItem>
        <MenuItem className="cobalt" onClick={() => dispatch({ type: 'CHANGE', payload: 'cobalt' })}>
          Cobalt
        </MenuItem>
        <MenuItem className="paraiso-light" onClick={() => dispatch({ type: 'CHANGE', payload: 'paraiso-light' })}>
          Paraiso-light
        </MenuItem>
        <MenuItem className="duotone-light" onClick={() => dispatch({ type: 'CHANGE', payload: 'duotone-light' })}>
          Duotone-light
        </MenuItem>
        <MenuItem className="neat" onClick={() => dispatch({ type: 'CHANGE', payload: 'neat' })}>
          Neat
        </MenuItem>
      </Menu>
    </div>
  );
}
