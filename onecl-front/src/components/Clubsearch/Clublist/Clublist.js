import React from 'react';
import {Link} from 'react-router-dom';
import './Clublist.css'


const ClubItem = ({name, id, department, category}) => {

    return(
        <tr>
            <td className="column1">{department}</td>
            <td className="column2">{category}</td>
            <td className="column3"><Link to={`/club/${id}`}>{name}</Link></td>
        </tr>
    )
};

const Clublist = ({clubs}) => {
     // const temp_clubs = [
     //     {
     //         id: 1,
     //         name: 'HIS',
     //         department: 'Central',
     //         category: 'Dance',
     //     },
     //     {
     //         id: 2,
     //         name: 'Waffle Studio',
     //         department: 'CSE',
     //         category: 'SW Development',
     //     },
     //     {
     //         id: 3,
     //         name: 'Soccer301',
     //         department: 'CSE',
     //         category: 'Sports',
     //     },
     //     {
     //         id: 4,
     //         name: 'Sajahoo',
     //         department: 'Central',
     //         category: 'Dance',
     //     },
     // ];

    if(clubs === null || clubs && clubs.count === 0){
        return (
            <div className="limiter">
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div className="table100">
                            <table>
                                <thead>
                                <tr className="table100-head">
                                    <th className="column1">Department</th>
                                    <th className="column2">Category</th>
                                    <th className="column3">Club Name</th>
                                </tr>
                                </thead>
                                <tr></tr>
                            </table>

                            {clubs === null &&
                            <div style={{
                                'background':'white',
                                'text-align':'center',
                                'font-size':'40px',
                            }}>동아리를 검색하세요!</div>}

                            {(clubs && clubs.count === 0) &&
                            <div style={{
                                'background':'white',
                                'text-align':'center',
                                'font-size':'40px',
                            }}>조건에 맞는 동아리가 없습니다.</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const clubList = clubs && clubs.results.map(
        (club) => {
            return(
                <ClubItem
                    key = {club.id}
                    name = {club.name}
                    id = {club.id}
                    department = {club.dept}
                    category = {club.category}
                />
            )
        }
    );


    return(
        /*<div className='heading-space'>
            <div className='heading'>
                <div className='options'>
                    <div className='search-bar'>
                        <div className='search'>
                            <input className='search-type' maxLength='2048' type='text' placeholder='Search'></input>
                        </div>
                    </div>
                    <div className='login-section'>
                        <div className='line'></div>
                        <a className='login' href='/login'>Login</a>
                        <a className='signup' href='/register'>Sign Up Here</a>
                    </div>
                </div>
            </div>*/


        <div className="limiter">
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className="table100">
                        <table>
                            <thead>
                            <tr className="table100-head">
                                <th className="column1">Department</th>
                                <th className="column2">Category</th>
                                <th className="column3">Club Name</th>
                            </tr>
                            </thead>
                            <tbody>{clubList}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        /*</div>*/
    )
};

export default Clublist;

