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
    },
    errorMessage: {
        marginLeft: "28px",
        marginRight: "14px",
        marginTop: "-5px",
        fontSize: "0.75rem",
        color: "red",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "20px",
        paddingRight: "20px",
        startIcon: "none",
    },
    header: {
        marginBottom: "20px"
    },
    contentForm: {
        paddingLeft: "20px",
        paddingRight: "20px"
    },
    donasi: {
        margin: "10px",
        "& .MuiInputBase-input": {
            paddingLeft: "40px",
        }
    }
});