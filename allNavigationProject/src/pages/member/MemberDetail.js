import React from "react";
import {Button, Text, View} from 'react-native';

const MemberDetail = ({navigation}) => {
    return(
        <View>
            <Text>MEMBERDetail</Text>
            <Button title="Go MemberUpdate" onPress={() => navigation.navigate('MemberUpdatePage')}/>
        </View>
    );
}

export default MemberDetail;