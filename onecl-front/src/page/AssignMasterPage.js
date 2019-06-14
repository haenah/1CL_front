import React from 'react';
import AssignMaster from '../components/AssignMaster/AssignMaster'
const AssignMasterPage = ({history, match}) => {
    const {id} = match.params;

    return(
        <div>
            <AssignMaster id={id} history={history}/>
        </div>
    )
};

export default AssignMasterPage;
