import React from 'react'
import Modal from "react-native-modal";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ConquistaModal = (props) => (
    <Modal isVisible={props.isVisible}>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, paddingTop: 15, flex: 1, borderRadius: 30, borderWidth: 4, borderColor: '#7504AE' }}>

            <Text style={{ color: '#7504AE', fontSize: 48, textAlign: 'center', marginTop: 20, fontFamily: 'Baloo-Regular' }}>
                Parabéns!
            </Text>
            <Text style={{ color: '#7504AE', fontSize: 18, textAlign: 'center', marginTop: 25, fontFamily: 'Lato-Light' }}>
                VOCÊ ACABOU DE CONQUISTAR
                SUA PRIMEIRA HONRARIA.
            </Text>
            <Image source={require('../images/Mascote.png')} style={{width: 250, height: 250, marginTop: 20, justifyContent: 'center', alignSelf: 'center'}} />
            <TouchableOpacity onPress={props.closeModal} style={{ backgroundColor: '#7504AE', position: 'absolute', bottom: 0, right: 0, paddingHorizontal: 25, borderTopLeftRadius: 25, borderBottomRightRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name='ios-close' size={70} color='#fff' />
            </TouchableOpacity>


        </View>
    </Modal>

)

export default ConquistaModal;