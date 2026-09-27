async function loadStudents() {

    const loadingMessage =
        document.getElementById("loading-message");

    const errorMessage =
        document.getElementById("error-message");

    const studentCount =
        document.getElementById("student-count");

    const tableBody =
        document.getElementById("student-table-body");


    try {

        // Show loading message
        loadingMessage.textContent = "Loading students...";

        // Clear previous error
        errorMessage.textContent = "";


        // Get student data from Django API
        const response =
            await fetch("/api/students/");


        // Check HTTP response
        if (!response.ok) {

            // Check authentication
            if (response.status === 401) {

                throw new Error(
                    "Authentication required. Please log in."
                );

            }

            // Other HTTP errors
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }


        // Convert response to JSON
        const data =
            await response.json();


        // Display total students
        studentCount.textContent =
            data.count;


        // Clear table
        tableBody.innerHTML = "";


        // Check if there are no students
        if (data.students.length === 0) {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td colspan="5">
                    No Student records found.
                </td>
            `;

            tableBody.appendChild(row);

        } else {

            // Display students
            data.students.forEach(student => {

                const row =
                    document.createElement("tr");


                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.student_name}</td>
                    <td>${student.program}</td>
                    <td>${student.year_level}</td>
                    <td>${student.email}</td>
                `;


                tableBody.appendChild(row);

            });
        }


        // Remove loading message
        loadingMessage.textContent = "";


    } catch (error) {

        // Remove loading message
        loadingMessage.textContent = "";


        // Display error
        errorMessage.textContent =
            error.message;


        // Display error in Console
        console.error(
            "Student loading error:",
            error
        );
    }
}


// Run the function
loadStudents();