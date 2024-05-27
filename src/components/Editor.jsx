import { useState } from "react";
import '../styles/editor.css'
import PersonalInfoEditor from "./PersonalInfoEditor";
import InfoEditorComponent from "./InfoEditorComponent";
import {samplePersonalInfo, sampleEducationInfo, sampleDetails2, sampleDetails3, emptyPersonalInfo, emptyDetails} from "./sampleDetails";

function Editor({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo, projectsInfo, setProjectsInfo }) {

    return (
        <div className="editor">
            <h1 className="heading">BUILD YOUR OWN RESUME</h1>
            <div className="editorBtns">
                <button
                    onClick={() => {
                        setPersonalInfo(emptyPersonalInfo);
                        setEducationInfo(emptyDetails);
                        setExperienceInfo(emptyDetails);
                        setProjectsInfo(emptyDetails);
                    }}
                >
                    New
                </button>
                <button
                    onClick={() => {
                        setPersonalInfo(samplePersonalInfo);
                        setEducationInfo(sampleEducationInfo);
                        setExperienceInfo(sampleDetails2);
                        setProjectsInfo(sampleDetails3);
                    }}
                >
                    Sample
                </button>
            </div>

            <PersonalInfoEditor 
                pInfo={personalInfo}
                setPInfo={setPersonalInfo}
            />
            <hr />
            <InfoEditorComponent
                title={'Education'}
                infoArr={educationInfo}
                setInfoArr={setEducationInfo}
            />
            <hr />
            <InfoEditorComponent
                title={'Experience'}
                infoArr={experienceInfo}
                setInfoArr={setExperienceInfo}
            />
            <hr />
            <InfoEditorComponent
                title={'Projects'}
                infoArr={projectsInfo}
                setInfoArr={setProjectsInfo}
            />
        </div>
    )

}

export default Editor;