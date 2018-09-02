import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
/**
 * Renders a series of user avatars stacked over each other.
 */
export default class StackedAvatars extends Component {
  render() {
    const { user_ids, minStackCount } = this.props;

    const shouldStack = user_ids.length >= minStackCount; // below this count they won't stack

    const avatarWidth = 35; // from the avatar's style
    const spacing = 5;
    const overlap = 20;

    const shift = shouldStack ? overlap : avatarWidth + spacing;
    const totalWidth = shouldStack
      ? avatarWidth + user_ids.length * (avatarWidth - shift)
      : (avatarWidth + spacing) * user_ids.length - spacing;

    return (
      <View style={StyleSheet.flatten([styles.stack, { width: totalWidth }])}>
        {user_ids.map((id, index) => {
          return (
            <View style={StyleSheet.flatten([styles.item, { left: shift * index, zIndex: -index }])}>
              <Image 
                style={{
                  width: '100%',
                  height: '100%'
                }}
                resizeMode="cover"
                source={{id}} />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stack: {
    flexDirection: 'row',
    height: 35
  },
  item: {
    position: 'absolute',
    borderRadius: 17,
    borderWidth: 1
  }
});

StackedAvatars.defaultProps = {
  minStackCount: 4
};

StackedAvatars.propTypes = {
  user_ids: PropTypes.arrayOf(PropTypes.string),
  minStackCount: PropTypes.number
};
