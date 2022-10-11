import React from "react";
import {Button, Text, View} from 'react-native';

const Member = ({navigation}) => {
    return(
        <View>
            <Text>MEMBER</Text>
            <Button title="Go MemberDetail" onPress={() => navigation.navigate('MemberDetailPage')}/>
            <Button title="Go Profile" onPress={() => navigation.navigate('ProfilePage')}/>
        </View>
    );
}

export default Member;