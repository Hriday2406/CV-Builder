import { useState } from "react";
import Icon from '@mdi/react';
import { mdiChevronDown,mdiChevronUp,mdiDelete,mdiWindowClose } from '@mdi/js';

function FormFieldComponent({ id,title,value,handleInputChange,index }) {
    return (
        <div className="formFields">
            <label htmlFor={id}>{title}</label>
            <input 
                type="text"
                id={id} 
                name={id}
                value={value}
                onChange={(e) => {
                    handleInputChange(e, index)
                }}
            />
        </div>
    )
}

function DetailsComponent({ infoArr,setInfoArr,index }) {
    function handleInputChange(e, index) {
        const {name, value} = e.target;
        let stateArr = [...infoArr];
        stateArr[index] = {...stateArr[index], [name]:value};
        setInfoArr(stateArr);
    }

    return (
        <div className="detailsContainer ">
            <button 
                className="deleteComponentBtn btn"
                style={{

                }}
                onClick={() => {
                    let arr = [...infoArr];
                    arr.splice(index, 1);
                    setInfoArr(arr);
                }}
            >
                <Icon path={mdiWindowClose} size={1} />
            </button>
            <div className="editorFields inputFields">
                <FormFieldComponent
                    id='name'
                    title='Name'
                    value={infoArr[index].name}
                    handleInputChange={handleInputChange}
                    index={index}
                />
                <FormFieldComponent
                    id='time'
                    title='Time'
                    value={infoArr[index].time}
                    handleInputChange={handleInputChange}
                    index={index}
                />
                <FormFieldComponent
                    id='description'
                    title='Description'
                    value={infoArr[index].description}
                    handleInputChange={handleInputChange}
                    index={index}
                />

                {infoArr[index].details.map((detail, i) => {
                    return (
                        <div className="formFields" key={i}>
                            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                <button
                                    className="deleteBtn btn"
                                    onClick={(e) => {
                                        let arr = infoArr[index].details;
                                        arr.splice(i, 1);

                                        let stateArr = [...infoArr];
                                        stateArr[index] = {...stateArr[index], details:arr};
                                        setInfoArr(stateArr);
                                    }}
                                >
                                    <Icon path={mdiDelete} size={0.9} style={{color:'red'}}/>
                                </button>
                                <span>Detail {i + 1}</span>
                            </div>
                            <input 
                                type="text" 
                                value={detail}
                                onChange={(e) => {
                                    let arr = infoArr[index].details;
                                    arr[i] = e.target.value;

                                    let stateArr = [...infoArr];
                                    stateArr[index] = {...stateArr[index], details:arr};
                                    setInfoArr(stateArr);
                                }}
                            />
                        </div>
                    )
                })}
            </div>
            <button
                className="addNewBtn btn"
                onClick={() => {
                    let arr = infoArr[index].details;
                    arr.push(' ');

                    let stateArr = [...infoArr];
                    stateArr[index] = {...stateArr[index], details:arr};
                    setInfoArr(stateArr);
                }}
            >
                Add New Detail
            </button>
        </div>
    )
}

export default function InfoEditorComponent({ title, infoArr, setInfoArr}) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="editorComponent">
            <div className="componentTitle" style={{
                display: 'flex'
            }}>
                <h2>{title}</h2>
                <button 
                    className="closeBtn btn"
                    onClick={() => {
                        setShowInfo(!showInfo);
                    }}
                >
                    {showInfo ? <Icon path={mdiChevronUp} size={1.5} /> : <Icon path={mdiChevronDown} size={1.5} />}
                </button>
            </div>

            {showInfo && (
                <>
                    {infoArr.map((info, index) => {
                        return <DetailsComponent infoArr={infoArr} setInfoArr={setInfoArr} index={index} key={title + index} />;
                    })}
                    <button
                        className="addComponentBtn btn"
                        onClick={() => {
                            let arr = [...infoArr];
                            arr.push({
                                name: " ",
                                time: " ",
                                description: " ",
                                details: [" "]
                            });
                            setInfoArr(arr);
                        }}
                    >
                        Add New Section
                    </button>
                </>
            )}
        </div>
    )
}
