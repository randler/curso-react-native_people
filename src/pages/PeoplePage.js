import React from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';

import PeopleList from '../components/PeopleList';
import ErrorComponent from '../components/ErrorComponent';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      peoples : [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
      axios.get('https://randomuserTEM_ERRO.me/api/?nat=br&results=20')
      .then(response => {
        const {results} =  response.data;
        this.setState({
          peoples: results,
          loading: false
        });
      })
      .catch(error =>{
        this.setState({ 
          error: true, 
          loading: false 
        });
      })
  }

  /*renderLoading() {
    return this.state.loading ? (<ActivityIndicator size="large" color="#007891" />) : null;
  }*/

  render() {
    return (
      <View style={styles.container}>
        { /*this.renderLoading() */}
        {
          this.state.loading ? 
            <ActivityIndicator size="large" color="#007891" /> 
                : this.state.error 
                  ?<ErrorComponent reload={() => this.componentDidMount()} /> 
                  :<PeopleList
                    peoples={this.state.peoples}
                    onPressItem={(page, pageParams) => {
                      this.props.navigation.navigate(page, pageParams);
                    } } />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
