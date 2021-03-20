import React, { Component } from 'react';
import { BaseHandler, ConsoleHandler, LogLevel, Logger, LoggerStore, TestHandler } from 'logging-library';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import Home from "./Home";

const file = 'http://example.com/image.png'
const type = 'png'

class BrowseExplorer extends Component {
    render() {
        return (
            <FileViewer
                fileType={type}
                filePath={file}
                errorComponent={CustomErrorComponent}
                onError={this.onError}/>
        );
    }

    onError(e) {
        logger.logError(e, 'error in file-viewer');
    }
}

export default BrowseExplorer;