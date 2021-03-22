import React from "react"
import Tabs from "./Tabs";
import Box from '@material-ui/core/Box';

const Files = () => (
    <div style={{width: "100%", height: "100%"}}>
        <Tabs/>
      <Box display="none">
        <input type="file" id="openFile" />
      </Box>
    </div>
);

export default Files;
