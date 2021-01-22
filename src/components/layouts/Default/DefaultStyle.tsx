import { makeStyles, Theme } from '@material-ui/core/styles';
import {IState } from '@layout/Default/DefaultInterface';

const useStyles = makeStyles<Theme, IState>((theme) => ({

drawer: {
    width: props => `${props.drawerwidth}px` ,
    flexShrink: 0,
},
paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
})
);

export default useStyles;