import React, {Component} from 'react'

const Document = ({title}) => {
    return(
        <div>
            <p>{title}</p>
        </div>
    );
};

const Member = ({name, auth_level}) => {
    const position = (auth_level) => {
        switch (auth_level){
            case 0 :
                return 'master';
            case 1 :
                return 'executive';
            case 2 :
                return 'normal member';
            default :
                return 'normal member';
        }
    };

    return(
        <div>
            <p style={{'display':'inline-block', 'width':'250px'}}>{name}</p>
            <p style={{'display':'inline-block', 'width':'250px'}}>{position(auth_level)}</p>
        </div>
    );
};


class Body extends Component{
    state = {
        isPost : false,
        docTitle : null,
        docContent : null,
        img : {
            image_src : 'https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg',
            name : 'NASA image',
        }
    };
    initialize = () => {
        const { getAuthLevel, getMemberList, getDocumentList, getInfoPost } = this.props;
        const {id} = this.props;

        getAuthLevel(id);
        getMemberList(id);
        getDocumentList(id);
        getInfoPost(id);
    };

    componentDidMount() {
        this.initialize();
    };

    postButtonHandler = () => {
        this.setState({
            isPost : true,
        })
    };

    returnButtonHandler = () => {
        this.setState({
            isPost : false,
        })
    };

    docTitleInputHandler = (e) => {
        this.setState({
            docTitle : e.target.value,
        });
    };

    docContentInputHandler = (e) => {
        this.setState({
            docContent : e.target.value,
        })
    };

    addImageToTextArea(img){
        let stringImage = `![${img.name}](${img.image_src})`;
        let {textArea} = this.refs;
        let value = textArea.value;
        let position = textArea.selectionStart;
        textArea.value = `${value.substr(0,position)}${stringImage}${value.substr(position)}`;
    }

    render() {
        const {componentStatus} = this.props;
        const {documentList, memberList, infoPost} = this.props;
        const tmp_docList = [
            {
                id: 1,
                title: 'first post',
            },
            {
                id: 2,
                title: 'second post',
            },
            {
                id: 3,
                title: 'third post',
            },
        ];
        const tmp_memList = [
            {
                id: 1,
                name: 'baek geun young',
                auth_level: 0,
            },
            {
                id: 2,
                name: 'ahn jae won',
                auth_level: 3,
            },
            {
                id: 3,
                name: 'seo jun won',
                auth_level: 2,
            },
        ];
        const tmp_infoPost = 'his information post';

        const docList = tmp_docList.map(
            (document) => {
                return(
                    <Document
                        key={document.id}
                        title={document.title}
                    />
                )
            }
        );

        if(componentStatus === 2){
            return(
                tmp_memList.map(
                    (member) => {
                        return(
                            <Member
                                key={member.id}
                                name={member.name}
                                auth_level={member.auth_level}
                            />
                        )
                    }
                )
            )
        }
        if(componentStatus === 1){
            if(this.state.isPost){
                return(
                    <div style={{
                        'marginTop' : '20px',
                    }}>
                        <input placeholder={'제목'} type={'text'} onChange={this.docTitleInputHandler}/>
                        <textarea
                            ref='textArea'
                            placeholder={'내용을 작성하세요'}
                            onChange={this.docContentInputHandler}
                            style={{
                                'height' : '300px',
                                'marginTop' : '25px',
                                'width' : '100%',
                            }}
                        />
                        <img
                            style={{'height' : '200px'}}
                            src={this.state.img.image_src}
                            onClick={() => this.addImageToTextArea(this.state.img)}
                        />
                        <button onClick={this.returnButtonHandler}>돌아가기</button>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <button onClick={this.postButtonHandler}>글쓰기</button>
                        <div>
                            {docList}
                        </div>
                    </div>
                )
            }
        }
        else{
            return(
                <div>
                    {/*{infoPost}*/}
                    {tmp_infoPost}
                </div>
            )
        }
    }
}

export default Body;
