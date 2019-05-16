import React from 'react';
import {Link} from 'react-router-dom';

const ClubItem = ({name, id, department, category}) => {
    const style = {
        display:'inline-block',
        width:'200px',
        textAlign: 'center',
    };

    const style2 = {
        display:'inline-block',
        width:'500px',
        textAlign: 'center',
    };

    return(
        <div style={{borderBottom:'1px solid black'}}>
            <p style={style}>{department}</p>|
            <p style={style}>{category}</p>|
            <h2 style={style2}><Link to={`/club/${id}`}>{name}</Link></h2>
        </div>
    )
};

const Clublist = ({clubs}) => {
    // const temp_clubs = [
    //     {
    //         id: 1,
    //         name: 'HIS',
    //         department: 'central',
    //         category: 'dance',
    //     },
    //     {
    //         id: 2,
    //         name: 'waffle studio',
    //         department: 'CSE',
    //         category: 'sw development',
    //     },
    //     {
    //         id: 3,
    //         name: 'soccer301',
    //         department: 'CSE',
    //         category: 'sports',
    //     },
    //     {
    //         id: 4,
    //         name: 'sajahoo',
    //         department: 'central',
    //         category: 'dance',
    //     },
    // ];
    if(clubs === null){
        return(
            <div> 동아리를 검색하세요! </div>
        )
    }

    const style1 = {
        backgroundColor: '#1E90FF',
        display: 'inline-block',
        width: '200px',
        textAlign: 'center',
        border: '2px solid white',
        color: 'white',
    }

    const style2 = {
        backgroundColor: '#1E90FF',
        display: 'inline-block',
        width: '500px',
        textAlign: 'center',
        border: '2px solid white',
        color: 'white',
    }

    const clubList = clubs.results.map(
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
        <div>
            <p style={style1}>department</p>
            <p style={style1}>category</p>
            <p style={style2}>club name</p>
            <div>
                {clubList}
            </div>
        </div>
    )
};

export default Clublist;

