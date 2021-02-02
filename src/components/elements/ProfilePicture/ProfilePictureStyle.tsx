import { IProps } from '@element/ProfilePicture/ProfilePictureType';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, IProps>((theme: Theme) => createStyles({
 
grow: {
    flexGrow: 1,
},
ContainerText: {
    textAlign: "end",
    padding: "10px", 
},
name: {
    color: "#FFFFFF",
    fontWeight: 700,
    lineHeight: 1.5,
    textTransform: "capitalize",
    fontSize: '13px',
},
role: {
    color: "rgb(226 226 226 / 56%)",
    fontSize: "10px",
    textTransform: "capitalize",
},
})
);

export default useStyles;