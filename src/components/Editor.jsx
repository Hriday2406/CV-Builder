import { useState } from "react";
import '../styles/editor.css'
import PersonalInfoEditor from "./PersonalInfoEditor";
import InfoEditorComponent from "./InfoEditorComponent";

function Editor() {
    const samplePersonalInfo = {
        fName: "Hriday",
        lName: "Budhiraja",
        email: "hriday2602@gmail.com",
        phone: "9958026543",
        place: "Delhi, India",
        extras: ["github.com/Hriday2406"]
    };
    const emptyPersonalInfo = {
        fName: " ",
        lName: " ",
        email: " ",
        phone: " ",
        place: " ",
        extras: [ ]
    };
    const sampleDetails = [
        {
        name: "School",
        time: "Mar 2006 - Mar 2021",
        description: "Above average scores in both 10th and 12th",
        details: ["85% in 10th", "90% in 12th"]
        }
    ];
    const sampleDetails2 = [
        {
        name: "School",
        time: "Mar 2006 - Mar 2021",
        description: "Above average scores in both 10th and 12th",
        details: ["85% in 10th", "90% in 12th"]
        },
        {
            name: "School",
            time: "Mar 2006 - Mar 2021",
            description: "Above average scores in both 10th and 12th",
            details: ["85% in 10th", "90% in 12th"]
        }
    ];

    const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);
    const [educationInfo, setEducationInfo] = useState(sampleDetails);
    const [experienceInfo, setExperienceInfo] = useState(sampleDetails2);

    return (
        <div className="editor">
            <h1 className="heading">BUILD YOUR OWN RESUME</h1>
            <div className="editorBtns">
                <button
                    onClick={() => {setPersonalInfo(emptyPersonalInfo)}}
                >
                    New
                </button>
                <button
                    // onClick={() => {setPersonalInfo(samplePersonalInfo)}}
                    onClick={() => {console.log(personalInfo)}}
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
        </div>
    )

}

export default Editor;