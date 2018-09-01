import React from 'react'
import { Text, FlatList, View } from 'react-native'
import ProjetoItem from '../components/ProjetoItem'
import CategoriaItem from '../components/CategoriaItem'

export default class HomeContainer extends React.Component {
    state = {
        projetos: [
            {
                id: '1',
                url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_zJXZxZrdAhXMg5AKHXKNAn0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.thejobnetwork.com%2Fcan-volunteer-work-help-your-resume%2F&psig=AOvVaw2vXWesXAiJmbUhIOIb2-aF&ust=1535916670791778',
                name: 'Mãos à Dobra',
                description: 'Ajude a transformar a escola Rui Barbosa com uma reforma no campinho',
                date: '14/09/2018'
            }
        ],
        categorias: [
            { id: '1', name: 'animais', icon: 'ios-paw' },
            { id: '2', name: 'saúde', icon: 'ios-medical' },
        ]
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.categorias}
                    renderItem={({ item }) => <CategoriaItem {...item} />}
                    keyExtractor={item => item.id}
                    horizontal
                />

                <FlatList
                    data={this.state.projetos}
                    renderItem={({ item }) => <ProjetoItem {...item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}