import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "GameZone",
          headerStyle: {
            backgroundColor: "#eee",
          },
          headerTintColor: "#444",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
          headerStyle: {
            backgroundColor: "#eee",
          },
          headerTintColor: "#444",
        }}
      />
    </Stack.Navigator>
  );
}
