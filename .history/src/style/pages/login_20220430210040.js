import { makeStyles } from '@material-ui/core/styles';
export const useLoginStyles = makeStyles({
    boxContainer: {
        margin: "20px 40px",
        padding: "40px",
        display: "flex",
        borderRadius: "25px",
        minWidth: "500px",
        height: "470px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        placeContent: "center start",
    },
    donasiContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
        "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
            appearance: "none",
            margin: "0"
        }
    }
});