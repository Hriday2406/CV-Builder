import { useState } from "react";
import Editor from "./Editor";
import CvContainer from "./CvContainer";
import {samplePersonalInfo, sampleEducationInfo, sampleDetails2, sampleDetails3, emptyPersonalInfo, emptyDetails} from "./sampleDetails";

function App() {
    const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);
    const [educationInfo, setEducationInfo] = useState(sampleEducationInfo);
    const [experienceInfo, setExperienceInfo] = useState(sampleDetails2);
    const [projectsInfo, setProjectsInfo] = useState(sampleDetails3);

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
            // setPersonalInfo={setPersonalInfo}
            educationInfo={educationInfo}
            // setEducationInfo={setEducationInfo}
            experienceInfo={experienceInfo}
            // setExperienceInfo={setExperienceInfo}
            projectsInfo={projectsInfo}
            // setProjectsInfo={setProjectsInfo}
        />
        </>
    );

}

export default App;