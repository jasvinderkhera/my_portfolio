import React from 'react'

function Experience() {
  return (
    <div>
    <div className='display-6 mb-3'>Experience</div>
      <div className="py-2">
 <h4>Adaan Digital Solutions Pvt. Ltd.</h4>
    <p>Working as SaaS Web Builder from Mar 2025 to Present</p>
</div>
     <hr />
    <div className="py-2">
    <h4>Unified Mentor</h4>
    <p>Worked as Web Developer Intern from Oct 2024 to Dec 2024</p>
    <p>Major Projects:</p>
    <h5 className='text-primary'>TaskHive</h5>
    <p>Web Application for Task Management</p>
    <ul className='ps-2'>
      <li className='pb-2'>Developed <strong>TaskHive</strong>, a full-stack web application that allows users to create, edit, and delete daily tasks, with seamless access across devices.</li>
      <li className='pb-2'>Used <strong>React.js</strong> for the frontend, enabling a dynamic and responsive user interface.</li>
      <li className='pb-2'>Integrated <strong>Google Firebase</strong> for <strong>authentication</strong>, <strong>real-time database</strong>, and <strong>hosting</strong> from <strong>vercel</strong>, simplifying backend setup and ensuring user data synchronization across devices.</li>
      <li className='pb-2'>Implemented Firebase Realtime Database to store and manage user tasks, ensuring real-time updates and easy access from any platform.</li>
    </ul>
    <h5 className='text-primary'>Cloud-Linker</h5>
    <p>Cloud Storage and Document Management Web App</p>
    <ul className='ps-2'>
      <li className='pb-2'>Built <strong>Cloud-Linker</strong>, a cloud-based document and image storage platform, enabling users to upload, store, and access files securely from anywhere.</li>
      <li className='pb-2'>Used <strong>Google Firebase</strong> as the backend to handle user authentication, file storage, and real-time synchronization.</li>
      <li className='pb-2'>Integrated <strong>Firebase Realtime Database</strong> for efficient file uploading and retrieval, ensuring that documents and images are safely stored in the database.</li>
      <li className='pb-2'>Ensured data security with Google’s security protocols, reducing the risks of losing or compromising important documents.</li>
    </ul>
    <h5 className='text-primary'>KrishiSahayak</h5>
    <p>A Web App to manage government schemes provided to the farmers. </p>
    <ul className='ps-2'>
      <li className='pb-2'>Developed <strong>KrishiSahayak</strong>, A platform to simplify the implementation and management of government schemes for farmers.</li>
      <li className='pb-2'>Used <strong>Google Firebase</strong> as the backend to handle user authentication, <strong>Role-based access</strong> for admin and users.Admins can post schemes, view applicants, and approve/reject applications. Users can browse schemes, view detailed information, and apply via customizable forms.</li>
      <li className='pb-2'>Integrated <strong>Firebase Realtime Database</strong> for Real-time updates of application status.</li>
      <li className='pb-2'>used <strong>React.js</strong> for a responsive and dynamic user interface. Focus on improving scheme accessibility for farmers.
      Scalable architecture with seamless admin-user interaction.</li>
    </ul>
    </div>

    <hr />
    <div className="py-2">
    <h4>PolicyBazaar.com</h4>
    <p>Worked at Policybazaar.com as an Associate Sales Consultant from July 2022 to Oct 2023</p>
    </div>

   
    </div>
  )
}

export default Experience