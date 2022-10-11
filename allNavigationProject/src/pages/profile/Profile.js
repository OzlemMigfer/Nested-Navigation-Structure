import React from "react";
import {Text, View, Button} from 'react-native';

const Profile = ({navigation}) => {
    return(
        <View>
            <Text>PROFILE</Text>
            <Button title="Go ProfileEdit" onPress={() => navigation.navigate('ProfileEditPage')}/>
        </View>
    );
}

export default Profile;