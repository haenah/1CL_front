import React, {Component} from 'react';
import Select from 'react-select';

const options = [
    { label: 'dept1' },
    { label: 'dept2' },
    { label: 'dept3' },
    { label: 'dept4' },
    { label: 'dept5' },
];

const deptOptions = (deptList) => {
    return deptList.map(
        (dept) => {
            return {
                label: dept
            }
        }
    )
};

const categoryOptions = (categoryList) => {
    return categoryList.map(
        (category) => {
            return {
                label: category
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

const style = {
    display:'inline-block',
    height: '30px'
};

class Category extends Component {
    state = {
        selectedDept: null,
        selectedCategory: null,
    };

    handleChangeDept = (selectedOption) => {
        this.setState({ selectedDept : selectedOption });
    };

    handleChangeCategory = (selectedOption) => {
        this.setState({ selectedCategory : selectedOption });
    };

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
        const { handleChangeDept, handleChangeCategory, handleGetClubList } = this;
        return (
            <div>
                <div style = {style}>
                    <Select
                        value={selectedDept}
                        onChange={handleChangeDept}
                        options={options}
                        styles={customStyles}
                    />
                </div>
                <div style = {style}>
                    <Select
                        value={selectedCategory}
                        onChange={handleChangeCategory}
                        options={options}
                        styles={customStyles}
                    />
                </div>
                <div style = {style}>
                    <button onClick={() => handleGetClubList(selectedDept, selectedCategory)}> Search! </button>
                </div>
            </div>
        );
    }
}

export default Category;
