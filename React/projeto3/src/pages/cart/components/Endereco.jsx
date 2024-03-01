import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Endereco() {

    const [address, setAddress] = React.useState({})

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="Cep"
                        name="Cep"
                        label="CEP"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"

                        onChange={(e) => {
                            setAddress({ ...address, cep: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="rua"
                        name="rua"
                        label="Rua"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                        onChange={(e) => {
                            setAddress({ ...address, rua: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="numero"
                        name="numero"
                        label="Número"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="outlined"
                        onChange={(e) => {
                            setAddress({ ...address, numero: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="complemento"
                        name="complemento"
                        label="Complemento"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => {
                            setAddress({ ...address, complemento: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="bairro"
                        name="bairro"
                        label="Bairro"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => {
                            setAddress({ ...address, bairro: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="cidade"
                        name="cidade"
                        label="Cidade"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => {
                            setAddress({ ...address, cidade: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        required
                        id="UF"
                        name="UF"
                        label="UF"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => {
                            setAddress({ ...address, uf: e.target.value })
                        }}
                    ></TextField>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}