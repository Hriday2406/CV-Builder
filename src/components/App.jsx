import { useState } from "react";
import Editor from "./Editor";
import CvContainer from "./CvContainer";
import { samplePersonalInfo, sampleEducationInfo, sampleExperienceInfo, sampleProjectInfo } from "./sampleDetails";

function App() {
    const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);
    const [educationInfo, setEducationInfo] = useState(sampleEducationInfo);
    const [experienceInfo, setExperienceInfo] = useState(sampleExperienceInfo);
    const [projectsInfo, setProjectsInfo] = useState(sampleProjectInfo);

    return (
        <>
        <Editor 
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            experienceInfo={experienceInfo}
            setExperienceInfo={setExperienceInfo}
            projectsInfo={projectsInfo}
            setProjectsInfo={setProjectsInfo}
        />
        <CvContainer 
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
            projectsInfo={projectsInfo}
        />
        </>
    );

}

export default App;