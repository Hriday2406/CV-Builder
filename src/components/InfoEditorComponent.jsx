import { useState } from "react";

function DetailsComponent({ infoArr,setInfoArr,index }) {
    function handleInputChange(e, index) {
        const {name, value} = e.target;
        let stateArr = [...infoArr];
        stateArr[index] = {...stateArr[index], [name]:value};
        setInfoArr(stateArr);
    }

    return (
        <div className="detailsContainer">
            <button 
                className="deleteBtn"
                onClick={() => {
                    let arr = [...infoArr];
                    arr.splice(index, 1);
                    setInfoArr(arr);
                }}
            >
                'X'
            </button>
            <div className="editorFields" style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="formFields">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={infoArr[index].name}
                        onChange={(e) => {
                            handleInputChange(e, index)
                        }}
                    />
                </div>
                <div className="formFields">
                    <label htmlFor="time">Time</label>
                    <input 
                        type="text" 
                        id="time" 
                        name="time" 
                        value={infoArr[index].time}
                        onChange={(e) => {
                            handleInputChange(e, index)
                        }}
                    />
                </div>
                <div className="formFields">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        id="description" 
                        name="description" 
                        value={infoArr[index].description}
                        onChange={(e) => {
                            handleInputChange(e, index)
                        }}
                    />
                </div>

                {infoArr[index].details.map((detail, i) => {
                    return (
                        <div className="formFields" key={i}>
                            <button
                                onClick={(e) => {
                                    let arr = infoArr[index].details;
                                    arr.splice(i, 1);

                                    let stateArr = [...infoArr];
                                    stateArr[index] = {...stateArr[index], details:arr};
                                    setInfoArr(stateArr);
                                }}
                            >
                                X
                            </button>
                            <span>Detail {i + 1}</span>
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
                <button
                    onClick={() => {
                        let arr = infoArr[index].details;
                        arr.push(' ');

                        let stateArr = [...infoArr];
                        stateArr[index] = {...stateArr[index], details:arr};
                        setInfoArr(stateArr);
                    }}
                >
                    Add New
                </button>
            </div>
        </div>
    )
}

function InfoEditorComponent({ title, infoArr, setInfoArr}) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="editorComponent">
            <div className="componentTitle" style={{
                display: 'flex'
            }}>
                <h2>{title}</h2>
                <button 
                    className="closeBtn"
                    onClick={() => {
                        setShowInfo(!showInfo);
                    }}
                >
                    'V'
                </button>
            </div>

            {showInfo && (
                <>
                    {infoArr.map((info, index) => {
                        return <DetailsComponent infoArr={infoArr} setInfoArr={setInfoArr} index={index} key={title + index} />;
                    })}
                    <button
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
                        Add
                    </button>
                </>
            )}
        </div>
    )
}

export default InfoEditorComponent;