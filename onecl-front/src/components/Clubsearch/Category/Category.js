import React, {Component} from 'react';
import Select from 'react-select';
import './Category.css'

const options = [
    { label: 'dept1' },
    { label: 'dept2' },
    { label: 'dept3' },
    { label: 'dept4' },
    { label: 'dept5' },
];

const deptOptions = (deptList) => {
    if(deptList === null) return(
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
    if(categoryList === null) return(
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

            <form id="app-cover">
            <div className="Category-box">
                <div className="Select-box">
                    <Select className="Dept-select"
                        value={selectedDept}
                        onChange={handleChangeDept}
                        options={deptOptions(deptList)}
                        // options={options}
                        styles={customStyles}
                    />
                    <Select className="Cat-select"
                            value={selectedCategory}
                            onChange={handleChangeCategory}
                            options={categoryOptions(categoryList)}
                        // options={options}
                            styles={customStyles}
                    />
                    <button className="search-button" onClick={() => handleGetClubList(selectedDept, selectedCategory)}> Search! </button>
                </div>
            </div>
            </form>
        );
    }
}

export default Category;
