function PersonalInfoEditor({ pInfo, setPInfo }) {

    // function handleFirstNameChange(e) {
    //     setPInfo({...pInfo, fName: e.target.value});
    // }
    // function handleLastNameChange(e) {
    //     setPInfo({...pInfo, lName: e.target.value});
    // }
    // function handleEmailChange(e) {
    //     setPInfo({...pInfo, email: e.target.value});
    // }
    // function handlePhoneChange(e) {
    //     setPInfo({...pInfo, phone: e.target.value});
    // }
    // function handlePlaceChange(e) {
    //     setPInfo({...pInfo, place: e.target.value});
    // }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setPInfo({...pInfo, [name]:value });
    }

    return (
        <div className="personal editorComponent">
            <div className="componentTitle" style={{
                display: 'flex'
            }}>
                <h2>Personal Information</h2>
                <button className="closeBtn">'V'</button>
            </div>
            <div className="personalFields" style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="formFields">
                    <label htmlFor="fName">First Name</label>
                    <input 
                        type="text" 
                        id="fName" 
                        name="fName"
                        value={pInfo.fName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="formFields">
                    <label htmlFor="lName">Last Name</label>
                    <input 
                        type="text" 
                        id="lName" 
                        name="lName"
                        value={pInfo.lName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="formFields">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        value={pInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="formFields">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone"
                        value={pInfo.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="formFields">
                    <label htmlFor="place">Place</label>
                    <input 
                        type="text" 
                        id="place" 
                        name="place"
                        value={pInfo.place}
                        onChange={handleInputChange}
                    />
                </div>

                {pInfo.extras.map((detail, index) => {
                    return (
                        <div className="formFields" key={index}>
                            <button
                                onClick={() => {
                                    let arr = pInfo.extras;
                                    arr.splice(index, 1);
                                    setPInfo({...pInfo, extras: arr});
                                }}
                            >
                                X
                            </button>
                            <span>New Contact {index + 1}</span>
                            <input 
                                type="text" 
                                value={detail}
                                name={'extras ' + index}
                                onChange={(e) => {
                                    let arr = pInfo.extras;
                                    arr[index] = e.target.value;
                                    setPInfo({...pInfo, extras: arr});
                                }}
                            />
                        </div>
                    )
                })}
            </div>
            <button
                onClick={(e) => {
                    let arr = pInfo.extras;
                    arr.push(' ');

                    setPInfo({...pInfo, extras: arr});
                }}
            >
                Add New
            </button>
        </div>
    )
}

export default PersonalInfoEditor;