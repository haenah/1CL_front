import React, {Component} from 'react';
import {Input} from "reactstrap";
import './ClubRegister.css'

// const deptOptions = (deptList) => {
//     if(deptList === null || deptList === undefined) return(
//         [
//             { label : "waiting for dept..."},
//         ]
//     );
//
//     return deptList.results.map(
//         (dept) => {
//             return {
//                 label: dept.name
//             }
//         }
//     )
// };
//
// const categoryOptions = (categoryList) => {
//     if(categoryList === null || categoryList === undefined) return(
//         [
//             { label : "waiting for category..."},
//         ]
//     );
//
//     return categoryList.results.map(
//         (category) => {
//             return {
//                 label: category.name
//             }
//         }
//     )
// };
//
// const customStyles = {
//     option: (provided, state) => ({
//         ...provided,
//         borderBottom: '1px dotted pink',
//         padding: 10,
//     }),
//     control: () => ({
//         // none of react-select's styles are passed to <Control />
//         width: 200,
//     }),
// };

class ClubRegister extends Component {
    state = {
        selectedDept: null,
        selectedCategory: null,
        clubName: null,
    };

    handleChangeDept = (selectedOption) => {
        this.setState({ selectedDept : selectedOption });
    };

    handleChangeCategory = (selectedOption) => {
        this.setState({ selectedCategory : selectedOption });
    };

    handleChangeInput = (e) => {
        this.setState({ clubName : e.target.value})
    };

    GetCategory = () => {
        const { onGetCategory } = this.props;
        onGetCategory();
    };

    GetDepartment = () => {
        const { onGetDepartment } = this.props;
        onGetDepartment();
    };

    componentDidMount() {
        const { GetCategory, GetDepartment } = this;
        GetCategory();
        GetDepartment();
        this.props.setFlag(false);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.registerSuccess) {
            alert('동아리 등록에 성공하였습니다.');
            this.props.history.push('/');
        }
    }

    handleClubRegister = async () => {
        const {selectedCategory, selectedDept, clubName} = this.state;
        const { onClubRegister, registerSuccess, history } = this.props;

        onClubRegister(clubName, selectedDept, selectedCategory);
        // console.log(registerSuccess);
        // if(registerSuccess){
        //     alert("동아리 등록에 성공하였습니다.");
        //     history.push("/");
        // }
    };

    render() {
        const { selectedDept, selectedCategory } = this.state;
        const { deptList, categoryList } = this.props;
        const { handleChangeDept, handleChangeCategory, handleChangeInput, handleClubRegister } = this;
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-clubRegister">
                            <form>
                                <span className="clubRegister-form-title">
                                  <h2>동아리 등록</h2>
                                </span>
                                <div>
                                    <p className='clubNameLabel'  style={{'textAlign':'left'}}>동아리 이름</p>
                                </div>
                                <div className='club_name'>
                                    <span>
                                    <input className='name-input' name='name' type='text' placeholder='동아리 이름' onChange={handleChangeInput} />
                                    <span className="focus-input100"></span>
                                      <span className="symbol-input100">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                      </span>
                                    </span>
                                </div>
                                <div>
                                    <p className='deptLabel' style={{'textAlign':'left'}}>학과</p>
                                    {/*<Select*/}
                                        {/*value={selectedDept}*/}
                                        {/*onChange={handleChangeDept}*/}
                                        {/*options={deptOptions(deptList)}*/}
                                        {/*// options={options}*/}
                                        {/*styles={customStyles}*/}
                                    {/*/>*/}
                                    <Input className={'deptSelect'} type={'select'} value={selectedDept} onChange={e => this.setState({selectedDept: e.target.value})} name={'department'}>
                                        {deptList && deptList.results.map(dept => <option key={dept.name} value={dept.name}>{dept.name}</option>)}
                                    </Input>
                                </div>
                                <div>
                                    <p className='categoryLabel' style={{'textAlign':'left'}}>분류</p>
                                    {/*<Select*/}
                                        {/*value={selectedCategory}*/}
                                        {/*onChange={handleChangeCategory}*/}
                                        {/*options={categoryOptions(categoryList)}*/}
                                        {/*// options={options}*/}
                                        {/*styles={customStyles}*/}
                                    {/*/>*/}
                                    <Input className={'catSelect'} type={'select'} value={selectedCategory} onChange={e => this.setState({selectedCategory: e.target.value})} name={'category'}>
                                        {categoryList && categoryList.results.map(category => <option key={category.name} value={category.name}>{category.name}</option>)}
                                    </Input>
                                </div>
                                <button className='registerButton' type='button' onClick={handleClubRegister}>등록</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClubRegister;

