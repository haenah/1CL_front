import React, {Component} from 'react';
import Select from 'react-select';
import {Input} from 'reactstrap';

// const options = [
//     { label: 'dept1' },
//     { label: 'dept2' },
//     { label: 'dept3' },
//     { label: 'dept4' },
//     { label: 'dept5' },
// ];

// const deptOptions = (deptList) => {
//     if(deptList === null) return(
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
//     if(categoryList === null) return(
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


class Category extends Component {
    state = {
        selectedDept: '전체',
        selectedCategory: '전체',
    };

    // handleChangeDept = (selectedOption) => {
    //     this.setState({ selectedDept : selectedOption });
    // };
    //
    // handleChangeCategory = (selectedOption) => {
    //     this.setState({ selectedCategory : selectedOption });
    // };

    GetCategory = () => {
        const { onGetCategory } = this.props;
        onGetCategory();
    };

    GetDepartment = () => {
        const { onGetDepartment } = this.props;
        onGetDepartment();
    };

    GetClub = (dept, category) => {
        const { onGetClub } = this.props;
        onGetClub(dept, category);
    };

    componentDidMount() {
        const { GetCategory, GetDepartment } = this;
        GetCategory();
        GetDepartment();
    };

    handleGetClubList = (dept, category) => {
        const{ GetClub } = this;
        GetClub(dept, category);
    };

    render() {
        const { selectedDept, selectedCategory } = this.state;
        const { deptList, categoryList } = this.props;
        const { handleGetClubList } = this;
        return (

            <div className="limiter-cat">
                {/*<div className="container-clubregister">*/}
                    <div className="wrap-cat">
                        <form id="app-cover">
                            <div className="Category-box">
                                <div className="Dept-box">
                                    {/*<Select className="Dept-select"*/}
                                        {/*value={selectedDept}*/}
                                        {/*onChange={handleChangeDept}*/}
                                        {/*options={deptOptions(deptList)}*/}
                                        {/*// options={options}*/}
                                        {/*styles={customStyles}*/}
                                    {/*/>*/}
                                    <span className="clubSearch-form-title">
                                      <h3>동아리 검색</h3>
                                    </span>
                                    <div className='naming' style={{'textAlign':'left'}}>학과</div>
                                    <Input type={'select'} className={'deptSelect'} value={selectedDept} onChange={e => this.setState({selectedDept: e.target.value})}>
                                        <option value={'전체'}>All</option>
                                        {deptList && deptList.results.map(department => <option key={department.name} value={department.name}>{department.name}</option>)}
                                    </Input>
                                </div>
                                <div className="Cat-box">
                                    {/*<Select className="Cat-select"*/}
                                        {/*value={selectedCategory}*/}
                                        {/*onChange={handleChangeCategory}*/}
                                        {/*options={categoryOptions(categoryList)}*/}
                                        {/*// options={options}*/}
                                        {/*styles={customStyles}*/}
                                    {/*/>*/}
                                    <div className='naming' style={{'textAlign':'left'}}>분류</div>
                                    <Input type={'select'} className={'catSelect'} value={selectedCategory} onChange={e => this.setState({selectedCategory: e.target.value})}>
                                        <option value={'전체'}>All</option>
                                        {categoryList && categoryList.results.map(category => <option key={category.name} value={category.name}>{category.name}</option>)}
                                    </Input>
                                </div>
                                <div>
                                    <button type={'button'} className="search-button" style={{'float':'right', 'margin-right':'30px'}} onClick={() => handleGetClubList(selectedDept, selectedCategory)}> Search! </button>
                                </div>
                            </div>
                        </form>
                    </div>
                {/*</div>*/}
            </div>
        );
    }
}

export default Category;
