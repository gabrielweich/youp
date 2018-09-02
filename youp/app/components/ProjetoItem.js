import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StackedAvatars from './StackedAvatars';

const ProjetoItem = ({ uri, name, description, date, detalhe }) => {

    return (
        <View
        	style={{
        		height: 200,
        		flex: 1,
			    alignItems: 'stretch',
			    justifyContent: 'center',
				marginTop: 20,
				marginHorizontal: 20
        	}}>
			
        	<LinearGradient 
        		start={{x: 0, y: 0}} 
        		end={{x: 1, y: 0}}
        		colors={['#000000', '#000000']}
        		style={{
        			height: '100%',
  					opacity: 0.9,
  					borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
        		}}
        	>
			<TouchableOpacity onPress={detalhe}>
	        	<Image
	                style={{
	                    height: '100%',
	                    borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                    	borderBottomRightRadius: 10,
	                }}
	                source={{uri}}
	                resizeMode="cover"
	            />
			</TouchableOpacity>
			</LinearGradient>
			<Text style={{
        		position: 'absolute',
        		left: 15,
        		top: 115,
        		margin : 0,
        		color: 'white',
        		fontFamily: 'Arial',
        		fontWeight: 'bold',
        		fontSize: 20
        	}}>
				NOME DO PROJETO SOCIAL
			</Text>
			<StackedAvatars
				user_ids={["http://i.imgur.com/dQJyd06b.jpg", "http://i.imgur.com/dQJyd06b.jpg"]}
				minStackCount={2}
				style={{
					position: 'absolute',
		    		left: 15,
		    		top: 130,
					width: '100%',
					height: 50
				}}
			/>
			
			
        </View>
    )
}

export default ProjetoItem;
