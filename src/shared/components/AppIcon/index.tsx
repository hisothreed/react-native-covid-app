import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';

interface Props {
  style?;
  size?;
  color?;
  name;
}

const AppIcon = {
  ['Ionicons']: (props: Props) => (
    <Ionicons
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['Fontisto']: (props: Props) => (
    <Fontisto
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['EvilIcons']: (props: Props) => (
    <EvilIcons
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['FontAwesome']: (props: Props) => (
    <FontAwesome
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['Feather']: (props: Props) => (
    <Feather
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['SimpleLineIcons']: (props: Props) => (
    <SimpleLineIcons
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['Entypo']: (props: Props) => (
    <Entypo
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['MaterialIcons']: (props: Props) => (
    <MaterialIcons
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['AntDesign']: (props: Props) => (
    <AntDesign
      name={props.name}
      style={props.style}
      size={props.size}
      color={props.color}
    />
  ),
  ['Custom']: (props: Props) => (
    <Image
      source={props.name}
      resizeMode={'contain'}
      style={[
        {height: props.size, width: props.size, tintColor: props.color},
        props.style,
      ]}
    />
  ),
};

export default AppIcon;
