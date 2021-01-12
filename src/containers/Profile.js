import React, {Component} from 'react';
import './Profile.css';
import Link from '../components/Link/Link.js';
import List from '../components/List/List.js';

class Profile extends Component {
    constructor(){
    super();
    this.state = {
        data:[],
        loading: true,
    }
}
async componentDidMount() {
    const profile = await fetch('https://api.github.com/users/flanaganreidy');
    const profileJSON = await profile.json();

    if (profileJSON){
        this.setState({
            data: profileJSON,
            loading: false
        })
        }
    }
    render(){
        const {data, loading} = this.state;
        if (loading){
            return <div>Loading...</div>
        }
        const items =[{label : 'html_url', value: <Link url={data.html_url} title="Github URL" />},
        {label:'repos_url', value: data.repos_url},{label:'Name', value:data.name},{label:'Location', value: data.location},
        {label:'Email', value:data.email}, {label:'Bio', value:data.bio}
        ];

        return(
            <div>
                <div className='Profile-container'>
                    <img className='Profile-avatar' src={data.avatar_url} alt='avatar' />
                    <List items={items} />
            </div>
            </div>
        )
    }
}

export default Profile;