function markAttendance() {
  const attendanceInput = document.getElementById("attendance").value;
  const attendanceArr = attendanceInput.split(",").map((str) => str.trim());

  // Check if the number of entries matches the number of students
  if (attendanceArr.length !==10) {
    alert("Invalid attendance! Please enter attendance for all students.");
    return;
  }

  // Check if the values are valid (either "Present" or "Absent")
  if (
    !attendanceArr.every(
      (value) => value === "p" || value === "ab" || value === "late"
    )
  ) {
    alert("Invalid attendance! Please enter attendance for all students.");
    return;
  }

  // Update attendance in the table
  document.getElementById("jeevan-attendance").textContent = attendanceArr[0];
  document.getElementById("supriya-attendance").textContent = attendanceArr[1];
  document.getElementById("suprith-attendance").textContent = attendanceArr[2];
  document.getElementById("yuktha-attendance").textContent = attendanceArr[3];
  document.getElementById("manoj-attendance").textContent = attendanceArr[4];
  document.getElementById("ravi-attendance").textContent = attendanceArr[5];
  document.getElementById("roopa-attendance").textContent = attendanceArr[6];
  document.getElementById("bhoomika-attendance").textContent = attendanceArr[7];
  document.getElementById("kushal-attendance").textContent = attendanceArr[8];
  document.getElementById("ganesh-attendance").textContent = attendanceArr[9];

  // Clear the attendance input field
  
}