import React from 'react';
import axios from 'axios'

class MatchList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            api_url: props.url,
            matches: this.getMatches(props.url)
        }
        
    }

    getMatches(api_url){
        return axios.get(api_url).then(response => response.data)
    }

    render(){
        return(
            <>
                {console.log(this.getMatches(this.state.api_url))}
                {this.state.matches?.map((match) => <li>match</li>)}
            </>
        )
    }
}

export default MatchList