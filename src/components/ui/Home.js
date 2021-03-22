import React, {Component} from "react";
import PsPdf from "../pdf/PsPdf";
import FileUploader from "./FileUploader";
import LICENSE_KEY from "../pdf/license";
import PSPDFKit from "pspdfkit";
import readFileAsArrayBuffer from "../../utils/utils";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import UploadImg from './../../../public/img/upload_file.png';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fileLoaded: [],
            useStyles: makeStyles((theme) => ({
                root: {
                    display: 'flex',
                    justifyContent: "center",
                },
                content: {
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    margin: 0,
                },
                container: {
                    paddingTop: theme.spacing(4),
                    paddingBottom: theme.spacing(4),
                },
                gridPdf: {
                    padding: '10px',
                }
            })),
        };
        this.file = this.file.bind(this);

    }

    file(file) {
        const self = this;
        let fileLoaded = this.state.fileLoaded;
        readFileAsArrayBuffer(file)
            .then((blobArray) => {
                fileLoaded.push(blobArray);
                self.setState({fileLoaded: fileLoaded});
            }).catch((error) => {
            console.error(error.message);
        });
    }

    componentDidUpdate(prevProps) {
        const nextProps = this.state;
    };

    render() {
        const classes = this.state.useStyles;
        const elements = this.state.fileLoaded //..some array
        console.log('elements: ', elements);
        const items = []
        if (elements.length > 0) {
            for (const [index, value] of elements.entries()) {
                const _container = "#defaultPdf" + index;
                const _containerId = "defaultPdf" + index;
                items.push(
                    <Grid className="gridPdf" xs={12} sm={6} xl={6}>
                        <Paper style={{width: "100%", height: "520px", position: "static"}} item={true}
                               className={classes.item}>
                            <PsPdf containerId={_containerId} container={_container} document={value}/>
                        </Paper>
                    </Grid>
                );
            }
        }
        return (
            <div>
                <main className={classes.content}>
                    <Container maxWidth='false' className={classes.container}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={8} xl={4} className="buttonItem">
                                <Paper className="buttonPaper">
                                    <div>
                                        <img src={UploadImg} alt=""/>
                                        <p>Upload your file</p>
                                        <FileUploader className="button" callback={this.file}/>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth='false' className={classes.container}>
                        <Grid container spacing={0}>
                            {items}
                        </Grid>
                    </Container>
                </main>
            </div>
        );
    }
}

export default Home;