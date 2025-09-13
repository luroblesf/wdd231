export function setSectionSelection(sections) {
    const select = document.getElementById('sectionNumber');
    select.innerHTML = '<option value="0" disabled selected>--</option>';
    sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section.id;
        option.textContent = section.name;
        select.appendChild(option);
    });
}