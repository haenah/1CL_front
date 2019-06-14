import React, {Component} from 'react'
import axios from 'axios'
import './FileSubmit.css'

class FileSubmit extends Component{
    state={
        selectedFile : null,
    };

    fileSelectHandler = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    };

    fileSubmitHandler = async () => {
        const {clubID} = this.props;
        const url = `http://127.0.0.1:8000/upload/file/?clubID=${clubID}`;
        const tokenString = 'token ' + sessionStorage.getItem('token');
        const config = {
            headers: {
                'content-type' : 'multipart/form-data',
                'authorization' : tokenString,
            }
        };
        const fd = new FormData();
        fd.append('file', this.state.selectedFile, this.state.selectedFile.name);

        try{
            await axios.post(url, fd, config);
            alert('동아리 지원이 완료되었습니다.');
            this.props.history.push(`/club/${clubID}`)
        } catch(e){
            alert('에러가 발생했습니다. :' + e);
        }
    };

    // componentDidMount(){
    //     const {getApplyMessage, clubID} = this.props;
    //     getApplyMessage(clubID);
    // };

    render(){
        // const {applyMessage} = this.props;
        const tmp_message = '파일 제출 형식 : \n 이름 : (학번)_(이름)_지원서.pdf (ex: 2019-12345_홍길동_지원서.pdf) \n 반드시 pdf로 변환 후 제출해주세요.';
        return(
            <div className={'fileSubmitWrapper'}>
                <p className={'clubApplyTitle'}><strong>동아리 지원</strong></p>
                <div className={'applyMessage'}>
                    {
                        tmp_message.split('\n').map( line => {
                            return (<span>{line}<br/></span>)
                        })
                    }
                </div>
                <hr/>
                <input type={'file'} style={{'marginBottom' : '20px'}} onChange={this.fileSelectHandler} />
                <button style={{'marginRight' : '20px'}} onClick={this.fileSubmitHandler}>제출</button>
                <button onClick={() => {this.props.history.push(`/club/${this.props.clubID}`)}}>돌아가기</button>
            </div>
        )
    }
}

export default FileSubmit;
