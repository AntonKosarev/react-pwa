import React from 'react';
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        marginRight: 50,
        alignSelf: 'center'
    },
    fileUploaderButton: {
        backgroundColor: '#390000',
        color: '#ffffff',
    }
}));

const FileUploader = props => {
    const classes = useStyles();


    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
        // props.handleFile(fileUploaded);
    };

    return (
        <div className={classes.root}>
            <Button onClick={handleClick} className={classes.fileUploaderButton}>
                Upload a file
            </Button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
            />
        </div>
    );
}
export default FileUploader;