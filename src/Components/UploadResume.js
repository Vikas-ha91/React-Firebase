import React, { useState, useEffect } from  'react';
import { storage, db } from '../Config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { v4 } from 'uuid';


const UploadResume = () => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ uploadFile, setUploadFile ] = useState(null)
    const resumeCollectionRef = collection(db, 'resumes')
    
    const attachFile = async() => {
        try{
            let fileName = firstName + lastName
            if(uploadFile === null) return null;
            const storageRef = ref(storage, `resumes/${fileName}`);
            uploadBytes(storageRef, uploadFile)
            alert('Image Uploaded Successfuly')
            setFirstName('')
            setLastName('')
            setUploadFile(null)
            await addDoc(resumeCollectionRef, {
                'firstName': firstName,
                'lastName': lastName,
                'resume': fileName
            })
        } catch(error) {
            alert(error)
        }
    }

    return (
        <div>
            <label>Upload Your Resume</label>
            <div>
                <input type='text' placeholder='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <input type='file' onChange={(e) => setUploadFile(e.target.files[0])}/>
            <div>
                <button onClick={attachFile}>Upload Resume</button>
            </div>
        </div>
    )
}

export default UploadResume;