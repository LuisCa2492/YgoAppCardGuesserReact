import {Link as RouterLink, useNavigate} from 'react-router-dom'
import Google from '@mui/icons-material/Google';
import Button from '@mui/material/Button'
import Grid2 from '@mui/material/Grid2'
import Link from '@mui/material/Link'
import TextField  from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useEffect, useMemo } from 'react'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginEmailPassword } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const {status,errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const {email,password,onInputChange} = useForm(formData);

    useEffect(() => {
      
        if( status === 'authenticated') navigate('/');
     
    }, [status])
    

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(checkingAuthentication('ddd','rrr'));
        dispatch(startLoginEmailPassword(email,password));
        
    };

    const onGoogleSignIn = () => {
        
        dispatch(startGoogleSignIn());
    }

  return (
            <AuthLayout title='Login'>  
                <form onSubmit={onSubmit}>
                    <Grid2 container>
                        <Grid2  size={12} sx={{ mt: 1 }}>
                            <TextField
                                label="Correo electrónico"
                                type="email"
                                placeholder="correo@google.com"
                                fullWidth
                                name='email'
                                value={email}
                                onChange={onInputChange}
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
                            />
                        </Grid2>
                        <Grid2 container spacing={2} sx={{mb:2, mt:2}} size={12}>
                            <Grid2 size={{ xs:12 }} display={!!errorMessage ? '' : 'none'}>
                              <Alert severity='error'>
                                {errorMessage}
                              </Alert>
                            </Grid2>
                            <Grid2 size={{ xs:12, sm:6 }}>
                                <Button disabled={isAuthenticating} variant='contained' fullWidth type='submit'>Login</Button>
                            </Grid2>
                            <Grid2 size={{ xs:12, sm:6 }}>
                                <Button 
                                disabled={isAuthenticating}
                                variant='contained' 
                                fullWidth
                                onClick={onGoogleSignIn}
                                >
                                    <Google/>
                                    <Typography sx={{ml:1}}>Google</Typography>
                                </Button>
                            </Grid2>
                        </Grid2>
                        <Grid2 
                            container 
                            direction='row' 
                            justifyContent='end'>
                                <Link component={RouterLink} color='inherit' to='/auth/register'>
                                Crear cuenta
                                </Link>
                        </Grid2>
                    </Grid2>
                </form>
            </AuthLayout>
            
  )
}