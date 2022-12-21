import React from 'react'
import MatchList from '../../components/MatchList/MatchList'


class Current extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                Liste des matchs actuels

                <MatchList url="https://worldcupjson.net/matches/today" />
            </>
        )
    }
}

export default Current