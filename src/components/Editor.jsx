import '../styles/editor.css'
import PersonalInfoEditor from "./PersonalInfoEditor";
import InfoEditorComponent from "./InfoEditorComponent";
import {samplePersonalInfo, sampleEducationInfo, sampleExperienceInfo, sampleProjectInfo, emptyPersonalInfo, emptyDetails} from "./sampleDetails";

export default function Editor({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo, projectsInfo, setProjectsInfo }) {

    return (
        <div className="editor">
            <h1 className="heading">Build Your Resume</h1>
            <div className="editorBtns">
                <button
                    className="btn"
                    onClick={() => {
                        setPersonalInfo(emptyPersonalInfo);
                        setEducationInfo(emptyDetails);
                        setExperienceInfo(emptyDetails);
                        setProjectsInfo(emptyDetails);
                    }}
                >
                    New CV
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        setPersonalInfo(samplePersonalInfo);
                        setEducationInfo(sampleEducationInfo);
                        setExperienceInfo(sampleExperienceInfo);
                        setProjectsInfo(sampleProjectInfo);
                    }}
                >
                    Sample CV
                </button>
            </div>

            <PersonalInfoEditor 
                pInfo={personalInfo}
                setPInfo={setPersonalInfo}
            />
            <InfoEditorComponent
                title='Education'
                infoArr={educationInfo}
                setInfoArr={setEducationInfo}
            />
            <InfoEditorComponent
                title='Experience'
                infoArr={experienceInfo}
                setInfoArr={setExperienceInfo}
            />
            <InfoEditorComponent
                title='Projects'
                infoArr={projectsInfo}
                setInfoArr={setProjectsInfo}
            />
        </div>
    )

}
