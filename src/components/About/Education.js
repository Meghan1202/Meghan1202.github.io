import React from "react";


function Education() {
    return (
        /* Add the education text in two rows with years and GPA */
        <div style={{ padding: "20px" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '1rem' }}>

                <div style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                    <span style={{ color:"palevioletred" }}>Master of Science in Computer Science</span><br />
                    <span style={{ color:  "rgb(155 126 172)"}}>University of British Columbia, Vancouver, Canada</span><br />
                </div>
                <div>
                    <span>2022 - 2024</span><br />
                    <span>GPA: 4.33</span>
                </div>
            </div>
            <p class="mb-0" style={{ display: 'flex', textAlign: 'left' }}>Coursework includes - Convex Optimization and Non-smooth Analysis, Database System Implementation, Parallel Computing,
                Advanced Algorithms, Numerical Optimisation, Blockchain Technology.
            </p>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '1rem' }}>
            <div style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                    <span style={{ color: "palevioletred" }}>Bachelor Of Engineering in Computer Science</span><br />
                    <span style={{ color: "rgb(155 126 172)" }}>Anna University, Tamil Nadu, India</span><br />
                </div>
                <div>
                    <span>2017 - 2021</span><br />
                    <span>GPA: 4</span>
                </div>
            </div>
            <p class="mb-0" style={{ display: 'flex', textAlign: 'left' }}>Took electives including machine learning, graph theory, linear programming, special topics in databases.
            </p>
        </div>

        // <div class="container py-5">
        //     <div class="main-timeline">
        //         <div class="timeline left">
        //             <div class="education-card">
        //                 <div class="card-body p-4">
        //                     <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '1rem'}}>
        //                         <span>2022 - 2024</span>
        //                         <div>
        //                             <span style={{textTransform: 'uppercase'}}>Master of Science in Computer Science</span><br />
        //                             <span>University of British Columbia</span>
        //                         </div>
        //                     </h3>
        //                     <p class="mb-0" style={{ display: 'flex', textAlign: 'left'}}>Coursework includes - Convex Optimization and Non-smooth Analysis, Database System Implementation, Parallel Computing,
        //                         Advanced Algorithms, Numerical Optimisation, Blockchain Technology.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="timeline right">
        //             <div class="education-card">
        //             <div class="card-body p-4">
        //                     <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '1rem'}}>
        //                         <span>2017 - 2021</span>
        //                         <div>
        //                             <span style={{textTransform: 'uppercase'}}>Bachelor Of Engineering in Computer Science</span><br />
        //                             <span>Anna University</span>
        //                         </div>
        //                     </h3>
        //                     <p class="mb-0" style={{ display: 'flex', textAlign: 'left'}}>Took electives including machine learning, graph theory, linear programming, special topics in databases 
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Education;