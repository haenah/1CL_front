import React from 'react'
import ApplicantList from '../components/Applicant/ApplicantList'

const ApplicantListPage = ({match, history}) => {
    const {id} = match.params;

    return(
        <div>
            <ApplicantList
                id={id}
                history={history}
            />
        </div>
    )
};

export default ApplicantListPage;
