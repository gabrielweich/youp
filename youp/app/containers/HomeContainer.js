import React from 'react'
import { Text, FlatList, View, Image, StatusBar } from 'react-native'
import ProjetoItem from '../components/ProjetoItem'
import CategoriaItem from '../components/CategoriaItem'

export default class HomeContainer extends React.Component {
    state = {
        projetos: [
            {
                id_projeto: '1',
                category: 'Sustentabilidade',
                uri: 'https://i.imgur.com/iquvGGg.png',
                uriDetalhe: 'https://i.imgur.com/ws1R430.jpg',
                uriProfile: 'https://i.imgur.com/gku2cvD.png',
                name: 'Grifes Para o Bem',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo enim diam, sed varius nisl bibendum at.\n\nVestibulum faucibus magna in eros sagittis dapibus. Duis tincidunt arcu id dolor convallis dictum. Sed eu turpis nisi. Pellentesque sollicitudin purus eget turpis facilisis vehicula. Cras eu urna sit amet ex fringilla placerat eu non nibh. Cras mattis elit eu purus consectetur lobortis.'
                    + 'Nam bibendum tempor consectetur. Ut semper ac ligula eget finibus. Pellentesque eget velit vulputate, consectetur elit nec, placerat purus. Maecenas sed orci et augue maximus hendrerit. Duis molestie gravida tempor. Donec neque urna, varius vel tempus efficitur, dapibus id dui. Donec egestas venenatis felis et blandit.',
                date: '27/08/2018'
            },
            {
                id_projeto: '2',
                category: 'Sustentabilidade',
                uri: 'https://i.imgur.com/dvX2uIg.png',
                uriDetalhe: 'https://i.imgur.com/z8XqERA.png',
                uriProfile: 'https://i.imgur.com/gku2cvD.png',
                name: 'Re-ciclo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo enim diam, sed varius nisl bibendum at.\n\nVestibulum faucibus magna in eros sagittis dapibus. Duis tincidunt arcu id dolor convallis dictum. Sed eu turpis nisi. Pellentesque sollicitudin purus eget turpis facilisis vehicula. Cras eu urna sit amet ex fringilla placerat eu non nibh. Cras mattis elit eu purus consectetur lobortis.'
                    + 'Nam bibendum tempor consectetur. Ut semper ac ligula eget finibus. Pellentesque eget velit vulputate, consectetur elit nec, placerat purus. Maecenas sed orci et augue maximus hendrerit. Duis molestie gravida tempor. Donec neque urna, varius vel tempus efficitur, dapibus id dui. Donec egestas venenatis felis et blandit.',
                date: '15/08/2018'
            },
            {
                id_projeto: '3',
                category: 'Sustentabilidade',
                uri: 'https://i.imgur.com/YkGhun7.png',
                uriDetalhe: 'https://i.imgur.com/n3VAgoZ.png',
                uriProfile: 'https://i.imgur.com/gku2cvD.png',
                name: 'Junte-tampinhas',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo enim diam, sed varius nisl bibendum at.\n\nVestibulum faucibus magna in eros sagittis dapibus. Duis tincidunt arcu id dolor convallis dictum. Sed eu turpis nisi. Pellentesque sollicitudin purus eget turpis facilisis vehicula. Cras eu urna sit amet ex fringilla placerat eu non nibh. Cras mattis elit eu purus consectetur lobortis.'
                    + 'Nam bibendum tempor consectetur. Ut semper ac ligula eget finibus. Pellentesque eget velit vulputate, consectetur elit nec, placerat purus. Maecenas sed orci et augue maximus hendrerit. Duis molestie gravida tempor. Donec neque urna, varius vel tempus efficitur, dapibus id dui. Donec egestas venenatis felis et blandit.',
                date: '24/07/2018'
            }
        ],
        categorias: [
            { id_categoria: '1', name: 'Sustentabilidade', image: require('../images/recycleSign.png'), color: '#53DCD2' },
            { id_categoria: '2', name: 'Artes', image: require('../images/mask.png'), color: '#7784E4' },
            { id_categoria: '3', name: 'Educação', image: require('../images/openMagazine.png'), color: '#F5879B' },
        ],
        selected: '2'
    }


    stateVazio = {
        projetos: [                 
        ],
        categorias: [
            { id_categoria: '1', name: 'Sustentabilidade', image: require('../images/recycleSign.png'), color: '#53DCD2' },
            { id_categoria: '2', name: 'Artes', image: require('../images/mask.png'), color: '#7784E4' },
            { id_categoria: '3', name: 'Educação', image: require('../images/openMagazine.png'), color: '#F5879B' },
        ],
        selected: '2'
    }

    componentDidMount(){
        this.stateOriginal = {...this.state};
    }

    selectCategoriaHandler = (idCategoria) => {

        if(idCategoria != 1)
            this.setState({projetos: this.stateVazio.projetos});
        else 
            this.setState({projetos: this.stateOriginal.projetos});



        // console.warn(idCategoria)
        this.setState({ selected: idCategoria })
    }
    //7504AE
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />
                <Image style={{ alignSelf: 'center', width: 100, height: 60, justifyContent: 'center' }} resizeMode="contain" source={require('../images/YoUP.gif')} />
                <View
                    style={{
                        height: 2,
                        opacity: 0.3,
                        width: "100%",
                        backgroundColor: "#CED0CE",
                    }}
                />
                <View style={{ alignItems: 'center', alignContent: 'center' }}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.categorias}
                        renderItem={({ item }) => <CategoriaItem {...item} selected={this.state.selected == item.id_categoria} select={this.selectCategoriaHandler} />}
                        keyExtractor={(item, index) => index}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
               
                <FlatList
                    data={this.state.projetos}
                    renderItem={({ item }) => <ProjetoItem {...item} detalhe={() => this.props.navigation.navigate('DetalheScreen', { projeto: item })} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}