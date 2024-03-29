import React from "react";
import { Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";


const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                     <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                        Photo Album
                     </Typography>
                     <Typography variant="h5" align="center" color="text.secondary" paragraph>
                     Hello everyone. This is a photo album and I'm trying to make this sentence as long as possible
                     </Typography>
                     <div>
                        <Grid container spacing={2} justifyContent={"center"}>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>

                        </Grid>
                     </div>
        

                    </Container>
                </div>

            </main>
        </>
    );
}

export default App;