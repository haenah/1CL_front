import React, {Component} from 'react'
import './AssignMaster.css'

class AssignMaster extends Component {
    memberSearchHandler = () => {

    };

    masterAssignHandler = () => {

    };

    returnButtonHandler = () => {
        this.props.history.push(`/club/${this.props.id}`);
    };

    render(){
        const message1 = '회장 위임을 신청하면, 위임 받을 멤버가 위임을 수락한 날부터 7일간의 유예기간 후에 위임됩니다.';
        const message2 = '위임 받을 멤버가 위임을 수락한 후에도 유예기간 동안은 위임 취소가 가능합니다.';
        const message3 = '위임 완료 또는 위임 취소가 된 경우, 완료 또는 취소일로부터 7일동안은 회장 위임이 불가합니다.';
        return(
            <div className='limiter'>
                <div className='container-login100'>
                    <div className='wrap-login100'>
                        <div className={'assignMasterWrapper'}>
                            <p className={'clubApplyTitle'}><strong>동아리 회장 위임</strong></p>
                            <hr/>
                            <div className={'message'}>
                                <li>{message1}</li>
                                <li>{message2}</li>
                                <li>{message3}</li>
                            </div>

                            <div className='catName'>
                              <span>
                                <input style={{'margin' : '20px'}} placeholder={'위임 받을 멤버의 이름을 입력하세요.'} />
                                <span className="focus-fix"></span>
                                    <span className="symbol-fix">
                                      <i className="fa fa-cogs" aria-hidden="true"></i>
                                    </span>
                              </span>
                            </div>

                            <button style={{'border-radius' : '10px'}} onClick={this.memberSearchHandler}>검색</button>
                            <hr/>
                            <button style={{'marginRight' : '20px', 'border-radius' : '10px'}} onClick={this.masterAssignHandler}>위임하기</button>
                            <button style={{'border-radius' : '10px'}} onClick={this.returnButtonHandler}>돌아가기</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AssignMaster;
