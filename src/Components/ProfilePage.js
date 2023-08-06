import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'

const ProfilePage = () => {

    return (
        <PDFViewer 
            document={{
                url: ''
            }}
            />
    )
}
export default ProfilePage;