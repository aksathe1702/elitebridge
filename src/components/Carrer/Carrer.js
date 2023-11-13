import React from 'react'
import './Carrer.css'
import { useState } from 'react';
import 'firebase/storage'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const Carrer = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPortfolioFile, setSelectedPortfolioFile] = useState(null);

  const storage = firebase.storage();


  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };
  const handleFileUpload = async (file) => {
    try {
      // Create a storage reference with a unique file name
      const storageRef = storage.ref().child(`files/${file.name}`);

      // Upload the file to Firebase Storage
      const snapshot = await storageRef.put(file);

      // Get the download URL of the uploaded file
      const downloadURL = await snapshot.ref.getDownloadURL();

      return downloadURL

      console.log('File uploaded and download URL stored in setSelectedPortfolioFile.');
      console.log("URL", downloadURL)
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    //setSelectedPortfolioFile(file);
    const downloadURL = handleFileUpload(file);
    console.log('File uploaded and download URL stored in setSelectedPortfolioFile.');
    const URL = downloadURL.then((data => setSelectedPortfolioFile(data)))
    //setSelectedPortfolioFile(downloadURL)
    console.log("URL", URL)
  };

  const handleSubmit = (e) => {
    //navigate('/bussiness')
    e.preventDefault();

    if (
      name.trim() === '' ||
      mobile.trim() === '' ||
      selectedPortfolioFile === null ||
      email.trim() === '' ||
      selectedJob.trim() === ''
    ) {
      // Set an error state or display an error message indicating that all fields are required
      console.error('Please fill in all the required fields.');
      alert('Please fill in all the required fields.');
      return;
    }


    firebase.firestore().collection('studentapplydata').add({
      email,
      name,
      mobile,
      selectedPortfolioFile,
      email, selectedJob
    });
    console.log("Job Daata add")

    // Clear form inputs
    setEmail('');
    setName('');
    setMessage('');
    setSelectedJob('');
    setSelectedPortfolioFile('');
    setMobile('');
  };
  return (
    <>

      <div className="row">
        <div className="col">
          <div className='career img-fluid'>
            <div className='lets'>
              <h1 className='l1'>LET'S START</h1>
              <h1 className='l2'>CAREERS</h1>
              <h1 className='l3'>HERE</h1>
              <button className='hiring'>We are hiring</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className='carrer_discription'>
            <div className='job_title'>Sales Engineer</div>
            <p className="p">Pune | Ahmednagar | 5+ years | BE/B.Tech | Cutting Tools | Consumables</p>

            <div className="job_title">Market Research Analyst</div>
            <p className="p">Pune | Mumbai | 5+ years | BE/B.Tech/BBA/MBA</p>

            <div className="job_title">CAE Engineer</div>
            <p className="p">Pune | 3+ years | BE/B.Tech | Meshing | ANSA | Hypermesh</p>
            <div className="job_title">Intern - Digital Marketingr</div>
            <p className="p">Pune | 0-1years | BE/B.Tech/BBA/MBA | SEO | Content Writing | Web- Analytics</p>
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col">
          <div className="apply_now">
            <h1>Apply Now</h1>
            <input type="text" placeholder="Enter Your Name*:" value={name} pattern='[a-zA-Z]' onChange={(e) => setName(e.target.value)} /><br />
            <input type="text" placeholder="Enter Your Mobile No*:" value={mobile} onChange={(e) => setMobile(e.target.value)} pattern="[0-9]{9}" maxLength={10} /><br />
            <input type="email" placeholder="Enter Your Email id*:" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <textarea type="text" col="8" placeholder="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)} /><br />
            <select className="dropdown" value={selectedJob} onChange={handleJobChange}>
              <option value="">Select a job position*</option>
              <option value="Sales Engineer">Sales Engineer</option>
              <option value="Market Research Analyst">Market Research Analyst</option>
              <option value="CAE Engineer">CAE Engineer</option>
              <option value="Intern - Digital Marketing">Intern - Digital Marketing</option>
            </select><br />
            <div className="upload-btn-wrapper" onChange={handleFileChange}>
              <button className={`btn ${selectedPortfolioFile ? 'uploaded' : ''}`}>
                {selectedPortfolioFile ? 'Uploaded' : 'Upload Resume'}
              </button>
              <input type="file" name="myfile" accept="application/pdf ,.doc,.docx,application/msword" required />
            </div><br></br>

            <button className="submit" onClick={handleSubmit} onSubmit={handleSubmit}>Submit</button>
          </div>
          {/* <h6 className='google_privacy'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</h6> */}


        </div>

        <div className="col">
          <div className='apply img-fluid'>

          </div>
        </div>


      </div>
    </>
  )
}

export default Carrer