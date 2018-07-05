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
      axios.get('https://randomuser.me/api/?nat=br&results=20')
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

  renderPage() {
    if(this.state.loading) {
      return <ActivityIndicator size="large" color="#007891" />;
    }

    if(this.state.error) {
      return <ErrorComponent reload={() => this.componentDidMount()} />;
    }

    return (
      <PeopleList
        peoples={this.state.peoples}
        onPressItem={(page, pageParams) => {
          this.props.navigation.navigate(page, pageParams);
          } 
        } 
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderPage() }
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
