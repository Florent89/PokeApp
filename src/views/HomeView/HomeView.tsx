import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

const HomeView = () => {
  const name: string = 'Pikachu';
  const level: number = 15;
  const isMale: boolean = false;

  return (
    <View>
      <PokemonInfo
        name={name}
        level={level}
        isMale={isMale}
        src={require('../../assets/images/25.png')}
      />
      <PokemonInfo
        name={'Draco'}
        level={32}
        isMale={true}
        src={require('../../assets/images/146.png')}
      />
    </View>
  );
};

const PokemonInfo = ({name, level, isMale, src}: PokemonInfoType) => {
  return (
    <View>
      <Text> This is a Pokemon</Text>
      <Text>
        {' '}
        His name is {name}, his level is {level}.
      </Text>
      {isMale ? <Text>This is a male</Text> : <Text> This is a female</Text>}
      <Image source={src} style={styles.image} />
    </View>
  );
};

type PokemonInfoType = {
  name: string;
  level: number;
  isMale: boolean;
  src: ImageSourcePropType;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default HomeView;
