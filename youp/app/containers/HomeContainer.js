import React from 'react'
import { Text, FlatList, View, Image } from 'react-native'
import ProjetoItem from '../components/ProjetoItem'
import CategoriaItem from '../components/CategoriaItem'

export default class HomeContainer extends React.Component {
    state = {
        projetos: [
            {
                id_projeto: '1',
                uri: 'https://i.imgur.com/lUAsGMU.jpg',
                name: 'Mãos à Dobra',
                category: 'Animais',
                description: 'Ajude a transformar a escola Rui Barbosa com uma reforma no campinho',
                date: '14/09/2018'
            },
            {
                id_projeto: '2',
                category: 'Saúde',
                uri: 'https://i.imgur.com/lUAsGMU.jpg',
                name: 'Mãos à Dobra 2',
                description: 'Ajude a transformar a escola Rui Barbosa com uma reforma no campinho',
                date: '14/09/2018'
            }
        ],
        categorias: [
            { id_categoria: '1', name: 'Animais', icon: 'ios-paw', color: 'blue' },
            { id_categoria: '2', name: 'Saúde', icon: 'ios-medical', color: 'blue'},
            { id_categoria: '3', name: 'Educação', icon: 'ios-book', color: 'blue'},
            { id_categoria: '4', name: 'Saúde', icon: 'ios-medical', color: 'blue'}
        ],
        selected: '2'
    }

    selectCategoriaHandler = (idCategoria) => {
        // console.warn(idCategoria)
        this.setState({selected: idCategoria})
    }
    //7504AE
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <Image style={{ alignSelf: 'center', width: 100, height: 60, justifyContent: 'center' }} resizeMode="contain" source={require('../images/YoUP.gif')} />
                <View
                    style={{
                        height: 2,
                        opacity: 0.3,
                        width: "100%",
                        backgroundColor: "#CED0CE",
                    }}
                />
                <FlatList
                    extraData={this.state}
                    data={this.state.categorias}
                    renderItem={({ item }) => <CategoriaItem {...item} selected={this.state.selected == item.id_categoria} select={this.selectCategoriaHandler}/>}
                    keyExtractor={(item, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View style={{marginVertical: 5}}/>
                <FlatList
                    data={this.state.projetos}
                    renderItem={({ item }) => <ProjetoItem {...item} detalhe={() => this.props.navigation.navigate('DetalheScreen', {projeto: item})}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}