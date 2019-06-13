import React, {Component} from 'react'
import './ApplicantList.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ApplicantList extends Component{
    state={
        applicantList : [],
    };

    initialize = async () => {
        const url = `http://127.0.0.1:8000/upload/file/?clubID=${this.props.id}`
        try{
            const data = await axios.get(url);
            console.log(data);
            this.setState({
                applicantList: data.data.results,
            });
        }catch (e) {
            alert('an error was caught :' + e);
        }
    };

    componentDidMount(){
        this.initialize();
    };

    render(){
        return(
            this.state.applicantList.map(
                (applicant) => {
                    return(
                        <div>
                            <p style={{'display': 'inline-block'}}>{applicant.user}</p>
                            <a style={{'display': 'inline-block'}} href={applicant.file}>{applicant.name}</a>
                        </div>
                    )
                }
            )
        )
    }
}

export default ApplicantList;
