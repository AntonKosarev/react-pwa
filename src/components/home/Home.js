import React, {Component} from "react";
import PsPdf from "./../pdf/PsPdf";
import FileUploader from "./../../utils/FileUploader";
import readFileAsArrayBuffer from "./../../utils/readFileAsArrayBuffer";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import UploadSvg from "./../../utils/UploadSvg";

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filesLoaded: [],
    };

    this.file = this.file.bind(this);
  }

  file(file) {
    const self      = this;
    let filesLoaded = this.state.filesLoaded;
    readFileAsArrayBuffer(file)
      .then((blobArray) => {
        filesLoaded.push(blobArray);
        self.setState({filesLoaded: filesLoaded});
      }).catch((error) => {
      console.error(error.message);
    });
  }

  componentDidUpdate(prevProps) {
    const nextProps = this.state;
  };

  render() {
    const elements = this.state.filesLoaded; //..some array
    const items    = [];
    if (elements.length > 0) {
      for (const [index, value] of elements.entries()) {
        const _container   = "#defaultPdf" + index;
        const _containerId = "defaultPdf" + index;
        items.push(
          <Grid className="gridPdf" xs={12} sm={6} xl={6} item={true} key={index}>
            <Paper style={{width: "100%", height: "520px", position: "static"}}>
              <PsPdf containerId={_containerId} container={_container} document={value} pdfStyle="6"/>
            </Paper>
          </Grid>
        );
      }
    }
    return (
      <div>
        <main>
          <Container maxWidth={false}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={7} md={5} xl={4} className="buttonItem">
                <Paper className="buttonPaper">
                  <div>
                    <UploadSvg/>
                    <p>Upload your file</p>
                    <FileUploader className="button" callback={this.file}/>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth={false}>
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
