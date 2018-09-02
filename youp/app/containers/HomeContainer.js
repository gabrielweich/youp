import React from 'react'
import { Text, FlatList, View, Image } from 'react-native'
import ProjetoItem from '../components/ProjetoItem'
import CategoriaItem from '../components/CategoriaItem'

export default class HomeContainer extends React.Component {
    state = {
        projetos: [
            {
                id: '1',
                uri: 'https://i.imgur.com/lUAsGMU.jpg',
                name: 'Mãos à Dobra',
                description: 'Ajude a transformar a escola Rui Barbosa com uma reforma no campinho',
                date: '14/09/2018'
            },
            {
                id: '2',
                uri: 'https://i.imgur.com/lUAsGMU.jpg',
                name: 'Mãos à Dobra 2',
                description: 'Ajude a transformar a escola Rui Barbosa com uma reforma no campinho',
                date: '14/09/2018'
            }
        ],
        categorias: [
            { id_categoria: '1', name: 'Animais', icon: 'ios-paw', color: 'blue', categoria: "animal" },
            { id_categoria: '2', name: 'Saúde', icon: 'ios-medical', color: 'blue', categoria: "saude" },
            { id_categoria: '3', name: 'Educação', icon: 'ios-medical', color: 'blue',  categoria: "educacao" },
            { id_categoria: '4', name: 'saúde', icon: 'ios-medical', color: 'blue',  categoria: "teste"}
        ],
        selected: 'teste'
    }

    selectCategoriaHandler = (idCategoria) => {
        console.warn(idCategoria)
        this.setState({selected: idCategoria})
    }
    //7504AE
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <Image style={{ alignSelf: 'center', width: 100, height: 80 }} resizeMode="contain" source={require('../images/YoUP.gif')} />
                <View
                    style={{
                        height: 2,
                        opacity: 0.3,
                        width: "100%",
                        backgroundColor: "#CED0CE",
                    }}
                />
                <FlatList
                extraData={this.props}
                    data={this.state.categorias}
                    renderItem={({ item }) => <CategoriaItem {...item} selected={this.state.selected == item.categoria} select={this.selectCategoriaHandler}/>}
                    keyExtractor={(item, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <FlatList
                    data={this.state.projetos}
                    style={{
                        paddingTop: 10
                    }}
                    renderItem={({ item }) => <ProjetoItem {...item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}