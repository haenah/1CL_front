import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Clublist.css'
import ReactTable from "react-table";


// const ClubItem = ({name, id, department, category}) => {
//
//     return(
//         <tr>
//             <td className="column1">{department}</td>
//             <td className="column2">{category}</td>
//             <td className="column3"><Link to={`/club/${id}`}>{name}</Link></td>
//         </tr>
//     )
// };

class Clublist extends Component {
  constructor(props) {
    super(props);
  }

  handleRowClick = (id) => {
    this.props.history.push(`/club/${id}`)
  }

  render() {
    const clubs = this.props.clubs;
    return(
      <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
              {/*<table>*/}
              {/*<thead>*/}
              {/*<tr className="table100-head">*/}
              {/*<th className="column1">Department</th>*/}
              {/*<th className="column2">Category</th>*/}
              {/*<th className="column3">Club Name</th>*/}
              {/*</tr>*/}
              {/*</thead>*/}
              {/*<tbody>*/}
              {/*{clubList}*/}
              {/*</tbody>*/}
              {/*</table>*/}
              {clubs && <ReactTable
                getTrProps={(state, rowInfo) => ({
                  onClick: () => this.handleRowClick(rowInfo.original.id)
                })}
                data={clubs.results}
                columns={[
                  {
                    Header: "동아리",
                    accessor: "name",
                  },
                  {
                    Header: "분류",
                    accessor: 'category',
                  },
                  {
                    Header: "소속",
                    accessor: 'dept',
                  },
                ]}
                defaultPageSize={20}
                style={{
                  height: '400px',
                }}
                className={'-striped -highlight'}
              />}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
// ({clubs}) => {
//      // const temp_clubs = [
//      //     {
//      //         id: 1,
//      //         name: 'HIS',
//      //         department: 'Central',
//      //         category: 'Dance',
//      //     },
//      //     {
//      //         id: 2,
//      //         name: 'Waffle Studio',
//      //         department: 'CSE',
//      //         category: 'SW Development',
//      //     },
//      //     {
//      //         id: 3,
//      //         name: 'Soccer301',
//      //         department: 'CSE',
//      //         category: 'Sports',
//      //     },
//      //     {
//      //         id: 4,
//      //         name: 'Sajahoo',
//      //         department: 'Central',
//      //         category: 'Dance',
//      //     },
//      // ];
//     if(clubs === null){
//         return(
//             <div> 동아리를 검색하세요! </div>
//         )
//     }
//
//
//     const clubList = clubs && clubs.results.map(
//         (club) => {
//             return(
//                     <ClubItem
//                         key = {club.id}
//                         name = {club.name}
//                         id = {club.id}
//                         department = {club.dept}
//                         category = {club.category}
//                     />
//             )
//         }
//     );
//
//
//     return(
//         /*<div className='heading-space'>
//             <div className='heading'>
//                 <div className='options'>
//                     <div className='search-bar'>
//                         <div className='search'>
//                             <input className='search-type' maxLength='2048' type='text' placeholder='Search'></input>
//                         </div>
//                     </div>
//                     <div className='login-section'>
//                         <div className='line'></div>
//                         <a className='login' href='/login'>Login</a>
//                         <a className='signup' href='/register'>Sign Up Here</a>
//                     </div>
//                 </div>
//             </div>*/
//
//
//         <div className="limiter">
//             <div className="container-table100">
//                 <div className="wrap-table100">
//                     <div className="table100">
//                         {/*<table>*/}
//                             {/*<thead>*/}
//                             {/*<tr className="table100-head">*/}
//                                 {/*<th className="column1">Department</th>*/}
//                                 {/*<th className="column2">Category</th>*/}
//                                 {/*<th className="column3">Club Name</th>*/}
//                             {/*</tr>*/}
//                             {/*</thead>*/}
//                             {/*<tbody>*/}
//                             {/*{clubList}*/}
//                             {/*</tbody>*/}
//                         {/*</table>*/}
//                       {clubs && <ReactTable
//                         getTrProps={(state, rowInfo) => ({
//                           onClick: () => this.props.history.push(`/club/${rowInfo.original.id}`)
//                         })}
//                         data={clubs.results}
//                         columns={[
//                           {
//                             Header: "동아리",
//                             accessor: "name",
//                           },
//                           {
//                             Header: "분류",
//                             accessor: 'category',
//                           },
//                           {
//                             Header: "소속",
//                             accessor: 'dept',
//                           },
//                         ]}
//                         defaultPageSize={20}
//                         style={{
//                           height: '400px',
//                         }}
//                         className={'-striped -highlight'}
//                       />}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         /*</div>*/
//     )
// };

export default Clublist;

