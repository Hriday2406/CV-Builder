import '../styles/cvContainer.css';

function DisplayInfo({ title,state,classes }) {
    if(state.length === 0)
        return null;
    return (
        <div className={classes}>
            <h1>{title}</h1>
            <hr />
            {state.map((item) => {
                return (
                    <div className='infoContainer' >
                        <div className="firstLine" style={{display:'flex', gap:'100px'}}>
                            <h2>{item.name}</h2>
                            <h2>{item.time}</h2>
                        </div>
                        <p className='infoDescription' >{item.description}</p>
                        <ul className='infoDetails' >
                            {item.details.map((detail, index) => {
                                return <li key={title + index} >{detail}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default function CvContainer({ personalInfo, educationInfo, experienceInfo, projectsInfo, isLinksArr }) {
    return (
        <div className='cvContainer'>
            <div className="container" >
                <div className="personalInfo">
                    <h1>{personalInfo.fName + ' ' + personalInfo.lName}</h1>
                    <ul className='personalInfoList' >
                        <li style={{listStyleType: 'none'}} >{personalInfo.email}</li>
                        <li>{personalInfo.phone}</li>
                        <li>{personalInfo.place}</li>
                    </ul>
                    <ul className='personalInfoList' >
                        {personalInfo.extras.map((detail, index) => {
                            if(index == 0){
                                return (
                                    <li key={'personalInfo '+index}  style={{listStyleType: 'none'}} >
                                        {isLinksArr[index].status ? <a href={detail} target='_blank' >{isLinksArr[index].text}</a> : detail}
                                    </li>
                                )
                            }
                            return (
                                <li key={'personalInfo '+index} >
                                    {isLinksArr[index].status ? <a href={detail} target='_blank' >{isLinksArr[index].text}</a> : detail}
                                </li>
                            )
                        })}
                    </ul>
                </div> 
                <DisplayInfo 
                    title={'Education'}
                    state={educationInfo}
                    classes={'educationInfo categoryContainer'}
                />
                <DisplayInfo 
                    title={'Experience'}
                    state={experienceInfo}
                    classes={'experienceInfo categoryContainer'}
                />
                <DisplayInfo 
                    title={'Project'}
                    state={projectsInfo}
                    classes={'projectsInfo categoryContainer'}
                />
            </div>
        </div>
    )
}
