import React   from 'react';
import { Divider, IconButton,  Menu as MMenu , MenuItem as MMenuItem} from '@material-ui/core';
import { IProps } from '@element/Menu/MenuInterface';
import  useStyles  from '@element/Menu/MenuStyle';
import { MenuItem } from 'types/MenuItem';

const Menu: React.FunctionComponent<IProps> = (props: IProps) => { 
    const classes = useStyles(props);

     return (
        <MMenu
         anchorEl={props.anchorEl}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         id={props.menuId}
         keepMounted
         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={props.isMenuOpen}
         onClose={props.onClose}
        >
            <MMenuItem>
                <p className={classes.header}> Welcome, {props.name}</p>
            </MMenuItem> 
            <Divider />
        {props.ListMenuItems.map((_item: MenuItem, index: number) => {
            return (
                <MMenuItem onClick={_item.onClick} key={index} className={classes.item}>
                    <IconButton 
                        aria-label={_item.label} 
                        color="inherit"
                        edge="start"
                        className={classes.menuIcon}>
                        {_item.icon}
                    </IconButton>
                    <p>{_item.text}</p>
                </MMenuItem>);
            })}
       </MMenu>

    );
}
export default Menu;
