import Tabs from "./Tabs";
import Box from "@material-ui/core/Box";
import React from "react";

function Files() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Tabs/>
      <Box display="none">
        <input type="file" id="openFile" />
      </Box>
    </div>
  );
}

export default Files;
