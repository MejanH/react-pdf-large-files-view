import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  const [file, setFile] = useState('./sample.pdf');
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event: any) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages }: {numPages: any}) {
    setNumPages(numPages);
  }
  
  console.log(file);
  

  return (
    <div className="" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' , alignItems: 'center'}}>
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{' '}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page scale={2} key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

export default App;
