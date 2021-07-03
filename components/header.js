import React from 'react';
import { View,Text } from 'react-native';

export const Header = ({name,age}) => {
    const student=["abc","xyxz"]
    const [a,b]=student
    return(
        <View>
            <Text>{a}</Text>
        </View>
    )
}

