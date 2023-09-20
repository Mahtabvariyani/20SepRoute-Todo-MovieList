import React from 'react'
import { Button,TextField,AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div>
 <Button color="primary" variant="contained"> Press me </Button> 
 <hr />
 <TextField id="name" label="Name" variant="outlined" />
<hr />
 <AppBar position='static'>
         <Toolbar>
             <Typography><h1>Test Text</h1></Typography>
         </Toolbar>
      </AppBar>

    </div>
  )
}
