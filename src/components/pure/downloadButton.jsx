import React from 'react';
import '../../styles/customButton.css';

const downloadFileFromUrl = (url) => {

    const fileName = url.split("/").pop();
    const aTag = document.createElement('a');
    aTag.href=url
    aTag.setAttribute('download' ,fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 

};

const DownloadButton = ({fileUrl, fileText}) => {
    return(
        <button className="downloadButton" onClick={()=> {downloadFileFromUrl(fileUrl, fileText)}}> <i className='fa fa-download'></i> {fileText}</button>
    )
};





export default DownloadButton;
