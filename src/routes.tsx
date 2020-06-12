import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Options from "./pages/Options";

const AppStack = createStackNavigator();

const Routes =() => {
    return(
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor:'#f0f0f5'
                    }
                }}
            >
                <AppStack.Screen name="Welcome" component={Welcome}/>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="Options" component={Options}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;