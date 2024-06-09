document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  const modalElems = document.querySelectorAll(".modal");
  M.Modal.init(modalElems);

  const selectElems = document.querySelectorAll("select");
  M.FormSelect.init(selectElems);

  document
    .getElementById("view-companies")
    .addEventListener("click", function () {
      const companyDetails = document.getElementById("company-details");
      if (companyDetails.classList.contains("hidden")) {
        companyDetails.innerHTML = `
            <div class="company">
              <p>Company A</p>
              <p>CGPA Cutoff: 8.0</p>
              <p>CTC: 10 LPA</p>
              <p>Job Role:Data Scientist</p>
              <p>Job Description:Should handle all machine learning objectives</p>
              <p>Location: Bangalore</p>
              <p>Internship Duration: 6 months</p>
            </div>
            <div class="company">
              <p>Company B</p>
              <p>CGPA Cutoff: 7.5</p>
              <p>CTC: 12 LPA</p>
              <p>Job Role:Java Developer</p>
              <p>Job Description:planning designing and managing java based applications</p>
              <p>Location: Mumbai</p>
              <p>Internship Duration: 3 months</p>
            </div>
            <div class="company">
              <p>Company C</p>
              <p>CGPA Cutoff: 7.5</p>
              <p>CTC: 11 LPA</p>
              <p>Job Role:Data Scientist</p>
              <p>Job Description:Should handle all machine learning objectives</p>
              <p>Location: Mumbai</p>
              <p>Internship Duration: 9 months</p>
            </div>
            <div class="company">
              <p>Company D</p>
              <p>CGPA Cutoff: 7.5</p>
              <p>CTC: 8 LPA</p>
              <p>Job Role:Salesforce app developer</p>
              <p>Job Description:apex cloud and salesforce cpq management</p>
              <p>Location: Mumbai</p>
              <p>Internship Duration: 12 months</p>
            </div>
            <div class="company">
              <p>Company E</p>
              <p>CGPA Cutoff: 7.5</p>
              <p>CTC: 17 LPA</p>
              <p>Job Role:Data Scientist</p>
              <p>Job Description:Should handle all machine learning objectives</p>
              <p>Location: Mumbai</p>
              <p>Internship Duration: 11 months</p>
            </div>
            <!-- Add more company details as needed -->
          `;
        companyDetails.classList.remove("hidden");
      } else {
        companyDetails.classList.add("hidden");
      }
    });

  document
    .getElementById("view-students")
    .addEventListener("click", function () {
      const studentDetails = document.getElementById("student-details");
      if (studentDetails.classList.contains("hidden")) {
        studentDetails.innerHTML = `
            <div class="student">
              <p>USN: 1</p>
              <p>Name: Alice</p>
              <p>Sem: 6</p>
              <p>Section: C</p>
              <p>CGPA: 9.0</p>
              <p>Backlogs: 2</p>
              <p>Department: CSE</p>
              <p>Resume Link:</p>
             
            </div>
            <div class="student">
              <p>USN: 2</p>
              <p>Name: Bob</p>
              <p>Sem: 6</p>
              <p>Section: C</p>
              <p>CGPA: 8.5</p>
              <p>Backlogs: 2</p>
              <p>Department: CSE</p>
              <p>Resume Link:</p>
              
            </div>
            <div class="student">
              <p>USN: 3</p>
              <p>Name: Marley</p>
               <p>Sem: 6</p>
              <p>Section: C</p>
              <p>CGPA: 8.90</p>
              <p>Backlogs: 2</p>
              <p>Department: CSE</p>
              <p>Resume Link:</p>
              
            </div>
            <div class="student">
              <p>USN: 4</p>
              <p>Name: KJ Jackson</p>
               <p>Sem: 6</p>
              <p>Section: C</p>
              <p>CGPA: 9.5</p>
              <p>Backlogs: 2</p>
              <p>Department: CSE</p>
              <p>Resume Link:</p>
              
            </div>
            <div class="student">
              <p>USN: 5</p>
              <p>Name: Bunty</p>
               <p>Sem: 6</p>
              <p>Section: C</p>
              <p>CGPA: 7.5</p>
              <p>Backlogs: 2</p>
              <p>Department: CSE</p>
              <p>Resume Link:</p>
             
            </div>
            <!-- Add more student details as needed -->
          `;
        studentDetails.classList.remove("hidden");
      } else {
        studentDetails.classList.add("hidden");
      }
    });

  document.getElementById("view-alerts").addEventListener("click", function () {
    const alertsDetails = document.getElementById("alerts-details");
    if (alertsDetails.classList.contains("hidden")) {
      alertsDetails.innerHTML = `
            <div class="alert">
              <p>Backlogs must be cleared to sit for placements.</p>
            </div>
            <div class="alert">
              <p>Update your resume on the portal.</p>
            </div>
            <div class="alert">
              <p>Attend the pre-placement training sessions.</p>
            </div>
            <!-- Add more alerts as needed -->
          `;
      alertsDetails.classList.remove("hidden");
    } else {
      alertsDetails.classList.add("hidden");
    }
  });

  document
    .getElementById("company-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const companyDetails = document.getElementById("company-details");
      const companyName = document.getElementById("company-name").value;
      const companyCgpa = document.getElementById("company-cgpa").value;
      const companyCtc = document.getElementById("company-ctc").value;
      const jobrole = document.getElementById("jobrole").value;
      const jobdescription = document.getElementById("jobdescription").value;
      const companyLocation = document.getElementById("company-location").value;
      const companyInternship =
        document.getElementById("company-internship").value;

      const newCompany = `
          <div class="company">
            <p>${companyName}</p>
            <p>CGPA Cutoff: ${companyCgpa}</p>
            <p>CTC: ${companyCtc} LPA</p>
             <p>jobrole: ${jobrole} </p>
              <p>jobdescription: ${jobdescription} </p>
            <p>Location: ${companyLocation}</p>
            <p>Internship Duration: ${companyInternship} months</p>
          </div>
        `;

      companyDetails.innerHTML += newCompany;
      companyDetails.classList.remove("hidden");

      M.Modal.getInstance(document.getElementById("add-company-modal")).close();
      document.getElementById("company-form").reset();
    });
  document
    .getElementById("view-shortlisted")
    .addEventListener("click", function () {
      const shortlistedDetails = document.getElementById(
        "shortlisted-students"
      );
      if (shortlistedDetails.classList.contains("hidden")) {
        shortlistedDetails.innerHTML = `
              <div class="shortlisted">
                <p>Company: Company A</p>
                <p>Student: Alice</p>
                <p>Status: 
                  <select class="status-edit">
                    <option value="applied">Applied</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="placed">Placed</option>
                  </select>
                </p>
              </div>
              <div class="shortlisted">
                <p>Company: Company B</p>
                <p>Student: Bob</p>
                <p>Status: 
                  <select class="status-edit">
                    <option value="applied">Applied</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="placed">Placed</option>
                  </select>
                </p>
              </div>
              <!-- Add more shortlisted students as needed -->
            `;
        shortlistedDetails.classList.remove("hidden");

        const selectElems = document.querySelectorAll(".status-edit");
        M.FormSelect.init(selectElems);

        document.querySelectorAll(".status-edit").forEach((select) => {
          select.addEventListener("change", function () {
            const selectedOption = this.value;
            const studentName =
              this.parentElement.previousElementSibling.textContent.split(
                ": "
              )[1];
            M.toast({
              html: `${studentName} status updated to ${selectedOption}`,
            });
          });
        });
      } else {
        shortlistedDetails.classList.add("hidden");
      }
    });

  document
    .getElementById("student-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const studentDetails = document.getElementById("student-details");
      const studentUsn = document.getElementById("student-usn").value;
      const studentName = document.getElementById("student-name").value;
      const studentSem = document.getElementById("student-sem").value;
      const studentSection = document.getElementById("student-section").value;
      const studentCgpa = document.getElementById("student-cgpa").value;
      const studentBacklogs = document.getElementById("student-backlogs").value;
      const studentDept = document.getElementById("student-department").value;
      const studentResume = document.getElementById("student-resume").value;

      const newStudent = `
          <div class="student">
            <p>USN: ${studentUsn}</p>
            <p>Name: ${studentName}</p>
            <p>Sem: ${studentSem}</p>
            <p>Section: ${studentSection}</p>
            <p>CGPA: ${studentCgpa}</p>
            <p>Backlogs: ${studentBacklogs}</p>
            <p>Department: ${studentDept}</p>
            <p>Resume link: ${studentResume}</p>
           
          </div>
        `;

      studentDetails.innerHTML += newStudent;
      studentDetails.classList.remove("hidden");

      M.Modal.getInstance(document.getElementById("add-student-modal")).close();
      document.getElementById("student-form").reset();

      document.querySelectorAll(".status").forEach((status) => {
        status.addEventListener("click", function () {
          M.toast({
            html: this.dataset.status === "placed" ? "Placed" : "Not Placed",
          });
        });
      });
    });
});
