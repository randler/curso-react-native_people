import { createStackNavigator } from 'react-navigation';


import PeoplePage from './src/pages/PeoplePage';

export default createStackNavigator({
  'Main': {
    screen: PeoplePage
  }
}, {
  navigationOptions: {
    title: 'Vans Conquista',
    headerStyle: {
      backgroundColor: '#00667a',
      borderBottomWidth: 1,
      borderBottomColor: '#004a59'
    },
    headerTitleStyle: {
      fontSize: 30,
      color: '#FFF',
      flex: 1,
      textAlign: 'center'
    }
  }
});
