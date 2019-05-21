import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
import {Input, Container, Header} from 'reactstrap';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: null,
      clubs: null,
    }
  }

  componentWillMount() {
    this.props.fetchClubs("전체", "전체");
  }

  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps);
    this.setState({clubs: nextProps.clubs.results});
  }

  handleSearch(search) {
    const {clubs} = this.props;
    console.log('search', clubs.results.filter(c => c.name === search), "농구".includes(search));
    if (!search) {
      this.setState({clubs: this.props.clubs.results});
    }
    search && this.setState({clubs: clubs.results.filter(c => c.name.includes(search))});
  }

  render() {
    console.log(this.state);
    console.log('componentWillMount', this.props.clubs);
    return(
      <div className={'app'}>

        <div>
          <div className='heading-space'>
            <div className='heading'>
              <div className='options'>
                <a href={'/'}>logo</a>
                <div className='search-bar'>
                  <div className='search'>
                    <input className='search-type' maxLength='2048' type='text' placeholder='검색'/>
                  </div>
                </div>
                <div className='login-section'>
                  <div className='line' />
                  <a className='login' href='/login'>Login</a>
                  <a className='signup' href='/register'>Sign Up Here</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Sidebar
            sidebar={
              <div>
                <div style={{backgroundColor: 'lightblue', padding: '16px'}}>
                 동아리 리스트
                </div>
                <Input className={'search'} type={'text'} value={this.state.search} onChange={e => this.handleSearch(e.target.value)} placeholder={'검색'} />
                <div style={{margin: '8px', height: '1px', backgroundColor: 'black'}} />
                <div>
                  {this.state.clubs && this.state.clubs.map(c =>
                    <div key={c.id} style={{display: 'block', textAlign: 'center', justifyContent: 'center', borderBottom: '1px solid lightgrey', padding: '16px', color: 'grey'}}>
                      <a style={{textDecoration: 'none'}} href={c.id}>{c.name}</a>
                    </div>
                    )
                  }
                </div>
              </div>
            }
            docked
            shadow={false}
            styles={
              {
                sidebar: {
                  background: "white",
                }
              }
            }
          >
            <div />
          </Sidebar>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  clubs: PropTypes.object,
  fetchClubs: PropTypes.func,
};

export default Main;
