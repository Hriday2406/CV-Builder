const emptyPersonalInfo = {
    fName: " ",
    lName: " ",
    email: " ",
    phone: " ",
    place: " ",
    extras: [" "]
};
const emptyDetails = [
    {
        name: " ",
        time: " ",
        description: " ",
        details: [" "]
    }
];
const samplePersonalInfo = {
    fName: "Hriday",
    lName: "Budhiraja",
    email: "hriday2602@gmail.com",
    phone: "9958026543",
    place: "Delhi, India",
    extras: ["https://github.com/Hriday2406", "@Hriday2406"]
};
const sampleEducationInfo = [
    {
        name: "Laxman Public School, Hauz Khas, Delhi",
        time: "2006 - 2021",
        description: "Above average scores in both 10th and 12th",
        details: ["About 85% in 10th standard", "About 90% in 12th standard"]
    },
    {
        name: "MGM College of Engineering and Technology, Noida",
        time: "2021 - 2025",
        description: "Bachelor's degree in Computer Science - GPA: 7.5/10",
        details: ["Was part of College's Tech Club, 'Team Param'"]
    }
];
const sampleExperienceInfo = [
    {
        name: "International University - Vietnam National University, Ho Chi Minh city",
        time: "Jan 2023 - Aug 2023",
        description: "Peer-assisted Tutor - Principles of Database Management",
        details: ["Assisted 120 students with any problems related to theory or laboratory assignments.", "Prepared revision materials and conducted live lectures before examinations."]
    },
    {
        name: "International Univers1ty - Vietnam National University, Ho Chi Minh city",
        time: "Sep 2021 - Jan 2022",
        description: "Bachelor's degree in Computer Science",
        details: ["Helped students enhance learning outcomes and improved their grades from 63 (midterm) to 79 (final) on average."]
    },
];
const sampleProjectInfo = [
    {
        name: "CV Builder",
        time: "May 26, 2024 - May 28, 2024",
        description: "A website to easily make you CV / Resume",
        details: ["Made with React", "Simple and Elegant Design"]
    },
    {
        name: "To-Do List",
        time: "Dec 18, 2023 - Dec 24. 2023",
        description: "A simple and intuitive web app to create, organize, and manage your daily tasks.",
        details: ["Uses Local Storage to store data", "Elegant Design"]
    },
    {
        name: "Mausam (Weather App)",
        time: "Feb 27, 2024 - Mar 1, 2024",
        description: "Get real-time weather updates with our Weather App.",
        details: ["Responsive and Elegant design", "Filled with animated design", "Real Time data using API"]
    },
    {
        name: "Calculator",
        time: "Sep 12, 2023 - Sep 15, 2023",
        description: "A fast, elegant and easy-to-use calculator for all your calculation needs.",
        details: ["Simple and Easy to use"]
    }
];

export {samplePersonalInfo, sampleEducationInfo, sampleExperienceInfo, sampleProjectInfo, emptyPersonalInfo, emptyDetails}