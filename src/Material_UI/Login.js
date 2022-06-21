import * as React from 'react';
import {useHistory} from 'react-router-dom'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import '../App.css'
import Api from '../Api';
export default function Login() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [email,setEmail] = React.useState()
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const h = useHistory()
  const logar = async()=>{
    
    let usuario =await Api.jwt(email,values.password)
    if(usuario){
      localStorage.setItem('usuarioLogado',usuario.usuario[0].id)
      h.push('/chat')
    } 
    // setTimeout(() => {
    //   h.push('/')
    // }, 5000);
    // console.log(usuario)

  }
  return (
    <Box
        sx={{display:'flex',alignItems:"center",justifyContent:"center",height:"100vh"}}
        noValidate
        autoComplete="off"    
    >
      <div className='loginContainer'>
        <h3>Sign in</h3>
        <div style={{color:"grey",marginBottom:"20px"}}>Entre com sua conta</div>

        <TextField
        sx={{ display: 'flex',width:'100% ',margin:""}}
          required
          id="outlined-required"
          label="usuario"
          defaultValue={email}
          onChange={e=>setEmail(e.target.value)}
        />
     
        <FormControl sx={{ m: 1, width: '100%',margin:"30px 0px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button onClick={logar} variant="contained" sx={{ display: 'flex',width:'100% '}}>logar</Button>
        <div style={{marginTop:"20px"}}>Não tem uma conta ? <span style={{color:"blue", cursor:'pointer'}}>cadastre-se</span></div>
      </div>
      <div>
   
    
      </div>
    </Box>
  );
}
