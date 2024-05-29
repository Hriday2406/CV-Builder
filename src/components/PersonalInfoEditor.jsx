import { useState } from "react";
import Icon from '@mdi/react';
import { mdiChevronDown,mdiChevronUp,mdiDelete,mdiLinkVariant } from '@mdi/js';

function FormFieldComponent({ id,title,value,handleInputChange }) {
    return (
        <div className="formFields">
            <label htmlFor={id}>{title}</label>
            <input 
                type="text"
                id={id} 
                name={id}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default function PersonalInfoEditor({ pInfo, setPInfo, isLinksArr, setIsLinksArr }) {

    const [showPersonalInfo, setshowPersonalInfo] = useState(false);
    // const [isLink, setIsLink] = useState(false);

    function handleInputChange(e) {
        const {name, value} = e.target;
        setPInfo({...pInfo, [name]:value });
    }

    return (
        <div className="personal editorComponent">
            <div className="componentTitle" >
                <h2>Personal Information</h2>
                <button 
                    className="closeBtn btn"
                    onClick={() => {
                        setshowPersonalInfo(!showPersonalInfo);
                    }}
                >
                    {showPersonalInfo ? <Icon path={mdiChevronUp} size={1.5} /> : <Icon path={mdiChevronDown} size={1.5} />}
                    
                </button>
            </div>
            {showPersonalInfo && (
                <>
                    <div className="personalFields inputFields" >
                        <FormFieldComponent
                            id='fName'
                            title='First Name'
                            value={pInfo.fName}
                            handleInputChange={handleInputChange}
                        />
                        <FormFieldComponent
                            id='lName'
                            title='Last Name'
                            value={pInfo.lName}
                            handleInputChange={handleInputChange}
                        />
                        <FormFieldComponent
                            id='email'
                            title='Email'
                            value={pInfo.email}
                            handleInputChange={handleInputChange}
                        />
                        <FormFieldComponent
                            id='phone'
                            title='Phone'
                            value={pInfo.phone}
                            handleInputChange={handleInputChange}
                        />
                        <FormFieldComponent
                            id='place'
                            title='Place'
                            value={pInfo.place}
                            handleInputChange={handleInputChange}
                        />

                        {pInfo.extras.map((detail, index) => {
                            return (
                                <div className="formFields" key={index}>
                                    <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                        <button
                                            className="deleteBtn btn"
                                            onClick={() => {
                                                let arr = pInfo.extras;
                                                arr.splice(index, 1);
                                                setPInfo({...pInfo, extras: arr});
                                                let newArr = [...isLinksArr];
                                                newArr.splice(index, 1);
                                                setIsLinksArr(newArr);
                                            }}
                                        >
                                            <Icon path={mdiDelete} size={0.9} style={{color:'red'}}/>
                                        </button>
                                        <span>New Contact {index + 1}</span>
                                        <button
                                            className="linkBtn btn"
                                            onClick={() => { 
                                                let newArr = [...isLinksArr];
                                                newArr[index].status = !newArr[index].status;
                                                setIsLinksArr(newArr);
                                                let arr = pInfo.extras;
                                                arr[index] = "";
                                                setPInfo({...pInfo, extras: arr});
                                                let newArr1 = [...isLinksArr];
                                                newArr1[index].text = "";
                                                setIsLinksArr(newArr1);
                                            }}
                                        >
                                            <Icon path={mdiLinkVariant} size={0.8} />
                                        </button>
                                    </div>
                                    <div className="inputLinkFields">
                                        <input
                                            type="text"
                                            placeholder={isLinksArr[index].status ? "Link" : "" }
                                            value={detail}
                                            name={'extras ' + index}
                                            onChange={(e) => {
                                                let arr = pInfo.extras;
                                                arr[index] = e.target.value;
                                                setPInfo({...pInfo, extras: arr});
                                            }}
                                        />
                                        {isLinksArr[index].status ?
                                            (<input
                                                type="text"
                                                placeholder="Text"
                                                value={isLinksArr[index].text}
                                                onChange={(e) => {
                                                    let newArr = [...isLinksArr];
                                                    newArr[index].text = e.target.value;
                                                    setIsLinksArr(newArr);
                                                }}
                                            />)
                                        :
                                            (null)
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button
                        className="addNewBtn btn"
                        onClick={() => {
                            let arr = pInfo.extras;
                            arr.push(' ');
                            setPInfo({...pInfo, extras: arr});
                            let newArr = [...isLinksArr];
                            newArr.push({status:false, text:''});
                            setIsLinksArr(newArr);
                        }}
                    >
                        Add New Contact
                    </button>
                </>
            )}
        </div>
    )
}
