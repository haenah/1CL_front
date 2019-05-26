import React, {Component} from 'react'

const Document = ({title}) => {
    return(
        <div>
            <p>{title}</p>
        </div>
    );
};

class Board extends Component{
    render() {
        const {DocumentList} = this.props;

        return(
            DocumentList && DocumentList.map(
                (document) => {
                    return(
                        <Document
                            key={document.id}
                            title={document.title}
                        />
                    )
                }
            )
        )
    }
}

export default Board
