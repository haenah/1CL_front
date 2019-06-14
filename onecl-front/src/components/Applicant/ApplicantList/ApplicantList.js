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

    returnButtonHandler = () => {
        this.props.history.push(`/club/${this.props.id}`);
    };

    render(){
        return(
            <div>
                {this.state.applicantList.map(
                    (applicant) => {
                        return(
                            <div>
                                <p style={{'display': 'inline-block'}}>{applicant.user}</p>
                                <a style={{'display': 'inline-block'}} href={applicant.file}>{applicant.name}</a>
                                <button >합격</button>
                                <button>불합격</button>
                            </div>
                        )
                    }
                )}
                <hr />
                <button onClick={this.returnButtonHandler}>돌아가기</button>
            </div>
        )
    }
}

export default ApplicantList;
