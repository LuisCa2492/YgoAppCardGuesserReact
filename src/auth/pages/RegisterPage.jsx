import React, { useMemo, useState } from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Google from '@mui/icons-material/Google';
import Button from '@mui/material/Button'
import Grid2 from '@mui/material/Grid2'
import Link from '@mui/material/Link'
import TextField  from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterUserEmailPassword } from '../../store/auth';
import Alert  from '@mui/material/Alert';


const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
  email:[(value) => value.includes('@'),'El email debe tener un @'],
  password:[(value) => value.length >= 4,'El password debe tener al menos 4 caracteres'],
  displayName:[(value) => value.length >= 2,'El nombre es requerido'],
  
}

export const RegisterPage = () => {
  
  const [formSubmitted, setformSubmitted] = useState(false);
  const {status,errorMessage} = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const dispatch = useDispatch();

  const {
    displayName,
    email,
    password,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
    onInputChange,
    formState} = useForm(formData,formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    if(!isFormValid) return;
    dispatch(startRegisterUserEmailPassword(formState));
    setformSubmitted(true);
  };

  return (
    <>
        <AuthLayout title='Register'> 
        <form onSubmit={onSubmit} className='animate__animated animate__fadeInDown__faster'>
                    <Grid2 container>
                        <Grid2  size={12} sx={{ mt: 1 }}>
                            <TextField
                                label="Nombre Completo"
                                type="text"
                                placeholder="nombre completo"
                                fullWidth
                                name='displayName'
                                value={displayName}
                                onChange={onInputChange}
                                error={!!displayNameValid && formSubmitted}
                                helperText={displayNameValid}
                            />                      
                        </Grid2>
                        <Grid2  size={12} sx={{ mt: 1 }}>
                            <TextField
                                label="Correo electrónico"
                                type="email"
                                placeholder="correo@google.com"
                                fullWidth
                                name='email'
                                value={email}
                                onChange={onInputChange}
                                error={!!emailValid && formSubmitted}
                                helperText={emailValid}
                            />                      
                        </Grid2>
                        <Grid2 size={12} sx={{ mt: 1 }}>
                            <TextField 
                            label='Contraseña' 
                            type='password'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                            />
                        </Grid2>
                        <Grid2 container spacing={2} sx={{mb:2, mt:2}} size={12}>
                            <Grid2 size={{ xs:12 }} display={!!errorMessage ? '' : 'none'}>
                              <Alert severity='error'>
                                {errorMessage}
                              </Alert>
                            </Grid2>
                            <Grid2 size={{ xs:12 }}>
                                <Button variant='contained' type='submit' fullWidth disabled={isCheckingAuthentication}>Create account</Button>
                            </Grid2>
                        </Grid2>
                        <Grid2 
                            container 
                            direction='row' 
                            justifyContent='end'>
                              <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
                                <Link component={RouterLink} color='inherit' to='/auth/login'>
                                  Iniciar sesión
                                </Link>
                        </Grid2>
                    </Grid2>
                </form>
        </AuthLayout>
    </>
  )
}