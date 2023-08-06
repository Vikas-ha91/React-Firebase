import React, {useState, useEffect} from 'react';
import {db, storage} from '../Config/firebase'
import {getDoc, collection} from 'firebase/firestore'
import { listAll, ref, getDownloadURL} from 'firebase/storage'
import PDFViewer from 'pdf-viewer-reactjs'

const SearchHome = () => {
    const [ resumeList, setResumeList ] = useState([])
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const resumeCollectionRef = collection(db, 'resumes')
    const fileName = firstName + lastName
    // useEffect(() => {
        //     const getResumes = async() => {
            //         try {
                //             const data = await getDoc(resumeCollectionRef)
                //             const filteredDoc = data.docs
                //             setResumeList(filteredDoc)
                //         } catch (error){
                    //             alert('error')
                    //         }
                    //     }
                    // },[])
                    
    const resumeRef = ref(storage, "resumes/")
    const getResume = () =>{
        console.log("::::fileName", fileName)

        listAll(resumeRef).then((response)=> {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setResumeList((prev) => [...prev, url])
                })
            })
        })
    }
    console.log('::::::', resumeList)
    let trimmedValue = firstName + lastName
    let searchableValue = trimmedValue.trim()
    return (
        <div>
            <label>Search Resume</label>
            <div>
                <input type='text' placeholder='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <button disabled={searchableValue.length == 0} onClick={getResume}>Search</button>
            <div>
                {
                    resumeList?.length > 0 && resumeList?.map((item)=> {
                        <div style={{backgroundColor:'red'}}>

                            </div>
                        // <PDFViewer 
                        //     document={{
                        //         url: item?.[0]
                        //     }}
                        //     />
                    })
                }
            </div>
        </div>
    )
}
export default SearchHome;