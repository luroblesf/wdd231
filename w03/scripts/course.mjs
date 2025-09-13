const byuiCourse = {
    title: 'Web Frontend Development',
    code: 'CIT 230',
    sections: [
        { id: '1', name: 'Section A', instructor: 'Jane Smith', students: [] },
        { id: '2', name: 'Section B', instructor: 'John Doe', students: [] }
    ],
    enroll(student, sectionId) {
        const section = this.sections.find(s => s.id === sectionId);
        if (section) section.students.push(student);
    },
    drop(student, sectionId) {
        const section = this.sections.find(s => s.id === sectionId);
        if (section) section.students = section.students.filter(s => s !== student);
    },
    changeEnrollment(student, oldSectionId, newSectionId) {
        this.drop(student, oldSectionId);
        this.enroll(student, newSectionId);
        // Removed: renderSections(this.sections);
    }
};

export default byuiCourse;