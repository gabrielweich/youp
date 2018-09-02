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
                name: 'Grifes Para o Bem',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo enim diam, sed varius nisl bibendum at. Vestibulum faucibus magna in eros sagittis dapibus. Duis tincidunt arcu id dolor convallis dictum. Sed eu turpis nisi. Pellentesque sollicitudin purus eget turpis facilisis vehicula. Cras eu urna sit amet ex fringilla placerat eu non nibh. Cras mattis elit eu purus consectetur lobortis.'
                    + 'Nam bibendum tempor consectetur. Ut semper ac ligula eget finibus. Pellentesque eget velit vulputate, consectetur elit nec, placerat purus. Maecenas sed orci et augue maximus hendrerit. Duis molestie gravida tempor. Donec neque urna, varius vel tempus efficitur, dapibus id dui. Donec egestas venenatis felis et blandit.',
                date: '27/08/2018'
            },
            {
                id_projeto: '2',
                category: 'Animais',
                uri: 'https://www.kickante.com.br/sites/default/files/styles/campaign_pitch_image/public/financiamento-coletivo/pitch/projeto_novo_lar_resgatando_animais_de_rua-588581.jpg?itok=R55MH9TT',
                name: 'Um Lar Para o Meu Amigo',
                description: 'Ajude a cuidar de cães abandonados. Alimentação, cuidados veterinários e lares carinhosos serão bem vindo.',
                date: '15/08/2018'
            },
            {
                id_projeto: '3',
                uri: 'http://www.thejunctionworks.org/site/DefaultSite/filesystem/images/Franklin-Templeton-Volunteers.jpg',
                name: 'Fome Social',
                category: 'Saúde',
                description: 'Ajude a combater a fome e na inclusão social de pessoas com deficiência.',
                date: '14/09/2018'
            },
            {
                id_projeto: '4',
                category: 'Artes',
                uri: 'https://artsedge.kennedy-center.org/~/media/ArtsEdge/Images/Articles/Families/article-specific/parent-volunteer169.jpg?as=1&dmc=0&w=610',
                name: 'Projeto Aquarela',
                description: 'Ajude a transformar a vida de milhares de crianças através da arte: pintura, música e teatro.',
                date: '11/08/2018'
            },
            {
                id_projeto: '5',
                uri: 'http://s2.glbimg.com/_yvRRSOs48Ste9g76xCO_Yd1a1E=/0x0:689x389/690x0/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/apis/a3f1a7300d674bf495a87432fa802cd0/boneco-inclusivo-2.jpg',
                name: 'Teatro e Direitos Humanos',
                category: 'Artes',
                description: 'Colabore com uma peça que utiliza bonecos para promover direitos humanos com foco em pessoas com deficiência.',
                date: '07/06/2018'
            }
        ],
        categorias: [
            { id_categoria: '1', name: 'Animais', icon: 'ios-paw', color: '#7784E4' },
            { id_categoria: '2', name: 'Saúde', icon: 'ios-medical', color: '#F5879B' },
            { id_categoria: '3', name: 'Educação', icon: 'ios-book', color: '#53DCD2' },
        ],
        selected: '2'
    }

    selectCategoriaHandler = (idCategoria) => {
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
                <FlatList
                    extraData={this.state}
                    data={this.state.categorias}
                    renderItem={({ item }) => <CategoriaItem {...item} selected={this.state.selected == item.id_categoria} select={this.selectCategoriaHandler} />}
                    keyExtractor={(item, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View style={{ marginVertical: 5 }} />
                <FlatList
                    data={this.state.projetos}
                    renderItem={({ item }) => <ProjetoItem {...item} detalhe={() => this.props.navigation.navigate('DetalheScreen', { projeto: item })} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}