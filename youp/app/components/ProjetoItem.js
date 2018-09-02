import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StackedAvatars from './StackedAvatars';

const ProjetoItem = ({ uri, name, description, date, detalhe }) => {

	return (
		<View
			style={{
				height: 180,
				flex: 1,
				alignItems: 'stretch',
				justifyContent: 'center',
				marginTop: 10,
				marginHorizontal: 10
			}}>
			<TouchableOpacity style={{flex: 1}} onPress={detalhe}>
				<ImageBackground

					imageStyle={{ borderRadius: 20 }}
					style={{
						margin: 10,
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',//TODO: Importate para que la imagen abarque toda la pantalla
						backgroundColor: 'transparent'
					}} source={{ uri }}>
					
				</ImageBackground>
			</TouchableOpacity>


		</View>
	)
}

export default ProjetoItem;
