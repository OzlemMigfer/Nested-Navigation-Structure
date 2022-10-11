import React from "react";
// import {Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Member from "./pages/member/Member";
import Profile from "./pages/profile/Profile";
import MemberDetail from "./pages/member/MemberDetail";
import MemberUpdate from "./pages/member/MemberUpdate";
import ProfileEdit from "./pages/profile/ProfileEdit";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MemberStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="MemberPage" component={Member}/>
      <Stack.Screen name="MemberDetailPage" component={MemberDetail}/>
      <Stack.Screen name="MemberUpdatePage" component={MemberUpdate}/>
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={Profile}/>
      <Stack.Screen name="ProfileEditPage" component={ProfileEdit}/>
    </Stack.Navigator>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown:false }} initialRouteName="Profile">
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;