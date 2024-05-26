function DetailsComponent({ infoArr,setInfoArr,index }) {

    // function handleNameChange(e) {
    //     setInfo({...info, name: e.target.value});
    // }
    // function handleTimeChange(e) {
    //     setInfo({...info, time: e.target.value});
    // }
    // function handleDescriptionChange(e) {
    //     setInfo({...info, description: e.target.value});
    // }

    function handleInputChange(e, index) {
        const {name, value} = e.target;
        let stateArr = [...infoArr];
        stateArr[index] = {...stateArr[index], [name]:value};
        setInfoArr(stateArr);
    }

    return (
        <div className="detailsContainer">
            <button className="deleteBtn">'X'</button>
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
                        // onChange={handleNameChange}
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
                        // onChange={handleTimeChange}
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
                        // onChange={handleDescriptionChange}
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
                    onClick={(e) => {
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
    return (
        <div className="editorComponent">
            <div className="componentTitle" style={{
                display: 'flex'
            }}>
                <h2>{title}</h2>
                <button className="closeBtn">'V'</button>
            </div>

            {infoArr.map((info, index) => {
                return <DetailsComponent infoArr={infoArr} setInfoArr={setInfoArr} index={index} />;
            })}
        </div>
    )
}

export default InfoEditorComponent;