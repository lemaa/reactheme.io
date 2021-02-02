import React   from 'react';
import { Divider, IconButton,  Menu as MuiMenu , MenuItem as MuiMenuItem} from '@material-ui/core';
import { IProps } from '@element/Menu/MenuType';
import  useStyles  from '@element/Menu/MenuStyle';
import { MenuItem } from '@customType/MenuItem';

const Menu: React.FunctionComponent<IProps> = (props: IProps) => { 
    const classes = useStyles(props);

     return (
        <MuiMenu
         anchorEl={props.anchorEl}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         id={props.menuId}
         keepMounted
         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={props.isMenuOpen}
         onClose={props.onClose}
        >
            <MuiMenuItem>
                <p className={classes.header}> Welcome, {props.name}</p>
            </MuiMenuItem> 
            <Divider />
            {props.ListMenuItems.map((_item: MenuItem, index: number) => {
            return (
                <MuiMenuItem onClick={_item.onClick} key={index} className={classes.item}>
                    <IconButton 
                        aria-label={_item.label} 
                        color="inherit"
                        edge="start"
                        className={classes.menuIcon}>
                        {_item.icon}
                    </IconButton>
                    <p>{_item.text}</p>
                </MuiMenuItem>);
            })}
       </MuiMenu>

    );
}
export default Menu;
