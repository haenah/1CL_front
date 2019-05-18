import React, {Component} from 'react';
import Select from 'react-select';

const deptOptions = (deptList) => {
    if(deptList === null || deptList === undefined) return(
        [
            { label : "waiting for dept..."},
        ]
    );

    return deptList.results.map(
        (dept) => {
            return {
                label: dept.name
            }
        }
    )
};

const categoryOptions = (categoryList) => {
    if(categoryList === null || categoryList === undefined) return(
        [
            { label : "waiting for category..."},
        ]
    );

    return categoryList.results.map(
        (category) => {
            return {
                label: category.name
            }
        }
    )
};

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        padding: 10,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200,
    }),
};

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
    };

    handleClubRegister = async () => {
        const {selectedCategory, selectedDept, clubName} = this.state;
        const { onClubRegister, registerSuccess, history } = this.props;

        await onClubRegister(clubName, selectedDept.label, selectedCategory.label);
        console.log(registerSuccess);
        if(registerSuccess){
            alert("동아리 등록에 성공하였습니다.");
            history.push("/");
        }
    };

    render() {
        const { selectedDept, selectedCategory } = this.state;
        const { deptList, categoryList } = this.props;
        const { handleChangeDept, handleChangeCategory, handleChangeInput, handleClubRegister } = this;
        return (
            <div>
                <div>
                    <p className='clubNameLabel'>동아리 이름</p>
                    <input className='clubNameInput' type='text' onChange={handleChangeInput}/>
                </div>
                <div>
                    <p className='deptLabel'>학과</p>
                    <Select
                        value={selectedDept}
                        onChange={handleChangeDept}
                        options={deptOptions(deptList)}
                        // options={options}
                        styles={customStyles}
                    />
                </div>
                <div>
                    <p className='categoryLabel'>분류</p>
                    <Select
                        value={selectedCategory}
                        onChange={handleChangeCategory}
                        options={categoryOptions(categoryList)}
                        // options={options}
                        styles={customStyles}
                    />
                </div>
                <button className='registerButton' type='button' onClick={handleClubRegister}>등록</button>
            </div>
        );
    }
}

export default ClubRegister;

