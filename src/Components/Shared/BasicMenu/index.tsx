import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    margin-right: 16px;
  `,
};

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const location = useLocation();

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
    <S.Wrapper>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Basics
      </Button>

      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => history.push('/heading')}>1. Heading</MenuItem>
        <MenuItem onClick={() => history.push('/paragraph')}>2. Paragraph</MenuItem>
        <MenuItem onClick={() => history.push('/lineBreaks')}>3. Line Breaks</MenuItem>
        <MenuItem onClick={() => history.push('/textAttributes')}>4. Text attributes</MenuItem>
        <MenuItem onClick={() => history.push('/list')}>5. List</MenuItem>
        <MenuItem onClick={() => history.push('/link')}>6. Link</MenuItem>
        <MenuItem onClick={() => history.push('/image')}>7. Image</MenuItem>
        <MenuItem onClick={() => history.push('/blockquotes')}>8. Blockquotes</MenuItem>
      </Menu>
    </S.Wrapper>
  );
}
