export function setTitle(course) {
    document.getElementById('courseName').textContent = course.title;
    document.getElementById('courseCode').textContent = course.code;
}

export function renderSections(sections) {
    const tbody = document.getElementById('sections');
    tbody.innerHTML = '';
    sections.forEach(section => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${section.name}</td>
      <td>${section.students.length}</td>
      <td>${section.instructor}</td>
    `;
        tbody.appendChild(row);
    });
}