import * as React from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';  
import { IoMenuSharp } from "react-icons/io5";
import { Link, MenuItem } from '@mui/material';


export default function MenuHamburguer() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='sm:hidden flex flex-col'>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IoMenuSharp/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className='flex flex-col gap-5'
      >
        <MenuItem  onClick={handleClose}><Link href={"/"}>Home</Link></MenuItem>
        <MenuItem  onClick={handleClose}><Link href={"/profile"}>Profile</Link></MenuItem>
        <MenuItem  onClick={handleClose}><Link href={"/about"}>About</Link></MenuItem>
      </Menu>
    </div>
  );
}
