import React from 'react'
import AdicionaContainer from '../containers/AdicionaContainer';

export default class AdicionaScreen extends React.Component{
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render(){
        return(
            <AdicionaContainer navigation={this.props.navigation}/>
        )
    }
}