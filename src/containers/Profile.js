import React, {Component} from 'react';
import styled from 'styled-components';
import Link from '../components/Link/Link.js';
import List from '../components/List/List.js';

const ProfileContainer = styled.div`
width: 50%;
margin: 10px auto;
`;

const ProfileAvatar = styled.img`
width: 150px;
`;

class Profile extends Component {
    constructor(){
    super();
    this.state = {
        data:[],
        repos: [],
        loading: true,
    }
}
async componentDidMount() {
    const profile = await fetch('https://api.github.com/users/flanaganreidy');
    const profileJSON = await profile.json();

    if (profileJSON){
        const repos = await fetch(`https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${profileJSON.login}`);
        const reposJSON = await repos.json();
        this.setState({
            data: profileJSON,
            repos: reposJSON,
            loading: false
        })
        }
    }

render(){
        const {data, repos, loading} = this.state;
        if (loading){
            return <div>Loading...</div>
        }
        const items =[{label : 'html_url', value: <Link url={data.html_url} title="Github URL" />},
        {label:'repos_url', value: data.repos_url},{label:'Name', value:data.name},{label:'Location', value: data.location},
        {label:'Email', value:data.email}, {label:'Bio', value:data.bio}
        ];

        const projects = repos.map(repo => ({
            label: repo.repo,
            value: <Link url={repo.link} title='Github URL'/>
        }));

        return(
            <div>
                <ProfileContainer>
                    <ProfileAvatar className='Profile-avatar' src={data.avatar_url} alt='avatar' />
                    <List items={items} />
                    <List items={projects} />
            </ProfileContainer>
            </div>
        )
    }
}

export default Profile;