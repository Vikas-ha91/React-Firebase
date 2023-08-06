import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../Config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { Input } from './components/Input';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography';
// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';

const LoginPage = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    var logCheck = auth?.currentUser
    useEffect(() => {
        if(auth?.currentUser !== null){
            console.log(';;;;;;;', auth)
            setIsLoggedIn(true)
        }
    },[(logCheck)])

    console.log(auth?.currentUser)
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = async() =>{
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    const logOut = async() =>{
        try {
            await signOut(auth)
            console.log(auth?.currentUser)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    console.log(auth?.currentUser, isLoggedIn)
    let userLoggedIn = auth?.currentUser?.email !== undefined 
    return (
        // <div>
        //     <label>Find Resume</label>
        //     <div>
        //         <input type='email' placeholder='Email...' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        //     </div>
        //     <div>
        //         <input type='password' placeholder='Password...' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        //     </div>
        //     <button disabled={password.length < 6} onClick={signIn}>Sign In</button>
        // </div>

        <div>
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <ArticleIcon size="large" />
                <label style={{ fontFamily: 'revert-layer', fontSize: '20px' }}> Find Resume </label>
            </div>
            <div style={{ margin: '10px' }}>
                <TextField
                    style={{ width: '25%' }}
                    size="small"
                    required
                    id="outlined-required"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <Input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} /> */}
            </div>
            <div style={{ margin: '10px' }}>
                <TextField
                    style={{ width: '25%' }}
                    size="small"
                    required
                    type='password'
                    id="outlined-required"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button
                variant="contained"
                href="#outlined-buttons"
                size="small"
                disabled={password.length < 6}
                onClick={signIn}>Log In</Button>

            <Button
                variant="outlined"
                href="#outlined-buttons"
                size="small"
                style={{marginLeft:'15px'}}
                // disabled={password.length < 6}
                onClick={signInWithGoogle}>Log In with Google</Button>

            {isLoggedIn &&
                <Button
                    variant="outlined"
                    href="#outlined-buttons"
                    size="small"
                    style={{marginLeft:'15px'}}
                    // disabled={password.length < 6}
                    onClick={logOut}
                    >
                        Logout
                </Button>}
        </div>
    )
}


export default LoginPage;
