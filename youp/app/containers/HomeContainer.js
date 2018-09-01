import React from 'react'
import { Text, FlatList, View } from 'react-native'
import ProjetoItem from '../components/ProjetoItem'
import CategoriaItem from '../components/CategoriaItem'

export default class HomeContainer extends React.Component {
    state = {
        projetos: [
            {
                id: '1',
                uri: 'http://shhkids.org/wp-content/uploads/2013/03/Tiffany2.jpg',
                name: 'Mãos à Dobra',
                description: 'Ajude a transformar a escola Rui Barbosa com uma reforma no campinho',
                date: '14/09/2018'
            },
            {
                id: '2',
                uri: 'http://shhkids.org/wp-content/uploads/2013/03/Tiffany2.jpg',
                name: 'Mãos à Dobra 2',
                description: 'Ajude a transformar a escola Rui Barbosa com uma reforma no campinho',
                date: '14/09/2018'
            }
        ],
        categorias: [
            { id: '1', name: 'Animais', icon: 'ios-paw' },
            { id: '2', name: 'Saúde', icon: 'ios-medical' },
            { id: '3', name: 'Educação', icon: 'ios-medical' },
            { id: '4', name: 'saúde', icon: 'ios-medical' },
            { id: '5', name: 'saúde', icon: 'ios-medical' },
            { id: '6', name: 'saúde', icon: 'ios-medical' },
            { id: '7', name: 'saúde', icon: 'ios-medical' },

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
                    showsHorizontalScrollIndicator={false}
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