import { createStackNavigator } from 'react-navigation';


import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import {capitalizeFirstLetter} from './src/util';

export default createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = capitalizeFirstLetter( navigation.state.params.people.name.first);
      
      return ({
        title: peopleName,
        headerTitleStyle: {
          fontSize: 30,
          color: '#FFF'
        }
      });
    }
  }
}, {
  navigationOptions: {
    title: 'Vans Conquista',
    headerTintColor: '#FFF',
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
