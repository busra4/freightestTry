// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';

import {useNavigation} from '@react-navigation/native';

const deviceSize = Dimensions.get('window');
const AllShipment = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString(copiedText);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    alert('kopylandi');
  };

  const [notfVisible, setnotfVisible] = useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');

  const [loading, setLoading] = useState(false);

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  useEffect(() => {
    /*
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); */

    fetch('https://jsonplaceholder.typicode.com/todos?_start=8&_limit=5')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource

      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <View>
        <View
          style={{
            borderWidth: 1.6,
            borderColor: '#cccccc',
           justifyContent:'center',
           margin:deviceSize.width/80,
           marginTop:deviceSize.height/40,
            borderRadius: 16,
          }}>
            
          <View
            style={{
              flexDirection: 'row',
              margin: 10,
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#1C7BDB', fontWeight: 'bold'}}>
                  İstanbul
                </Text>
                <Icon
                  name="arrow-forward"
                  style={{margin: 5, color: '#1C7BDB'}}
                />
                <Text style={{color: '#1C7BDB', fontWeight: 'bold'}}>
                  İzmir
                </Text>
              </View>

              <Text style={{right: 4, top: deviceSize.height / 50}}>
                {' '}
                <Image source={require('../assets/packageBox.png')} /> 13.00 kg
              </Text>
            </View>

            <View
              style={{
                width: deviceSize.width / 5,
                marginLeft: deviceSize.width / 2.5,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{alignSelf: 'stretch'}}
                onPress={() => navigation.navigate('PaymentPage')}>
                {item.completed ? (
                  <View
                    style={{
                      alignContent: 'center',
                      backgroundColor: '#F6FFED',
                      borderWidth: 1,
                      borderRadius: 8,
                      borderColor: '#5ECE6E',
                    }}>
                    <Text style={{color: '#5ECE6E', margin: 2}}>
                      Successfull
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      backgroundColor: '#FFF7E6',
                      borderColor: '#F99368',
                      borderWidth: 1,
                      borderRadius: 8,
                    }}>
                    <Text style={{color: '#F99368'}}>Waiting</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
          <SafeAreaView>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 8,
              }}>
              <TouchableOpacity
                onPress={copyToClipboard}
                style={{
                  margin: 10,
                  height: deviceSize.height / 16,
                  width: deviceSize.height / 2.5,
                  backgroundColor: '#e9ecef',
                  borderColor: '#ced4da',
                  borderWidth: 2,
                  borderRadius: 10,
                }}>
                <View>
                  <Text>{copiedText}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#e9ecef',
                  marginTop: 9,
                  right: 6,
                  borderColor: '#ced4da',
                  borderWidth: 2,
                  borderRadius: 10,
                  alignItems: 'center',

                  height: deviceSize.height / 16,
                  width: deviceSize.height / 14,
                }}
                onPress={fetchCopiedText}>
                <Icon style={{margin: 6}} size={25} name="copy-outline" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <View
            style={{
              margin: 10,
              alignSelf: 'center',
              height: deviceSize.height / 9,
              width: deviceSize.width / 1.12,
              borderRadius: 16,
              backgroundColor: '#EEEEEE',
              borderColor: '#1C7BDB',
              borderWidth: 0.7,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                margin: deviceSize.width / 24,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: deviceSize.height / 45,
              }}
              onPress={() => getItem(item)}>
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'flex-start',
                  fontSize: 22,
                  margin: deviceSize.width / 60,
                  fontWeight: 'bold',
                }}>
                2.500 ₺
              </Text>
              {item.completed ? (
                <View
                  style={{
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: '#E5E5E5',
                    alignSelf: 'flex-end',
                    height: deviceSize.height / 14,
                    width: deviceSize.width / 3,
                  }}>
                  <Text style={{color: '#1C7BDB', margin: 12}}>
                    View Details
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundColor: '#1C7BDB',
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: '#E5E5E5',
                    alignSelf: 'flex-end',
                    height: deviceSize.height / 14,
                    width: deviceSize.width / 3,
                  }}>
                  <Text style={{color: 'white', margin: 12}}>
                    Payment Details
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'white',
        }}
      />
    );
  };

  const getItem = item => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <View style={styles.container}>
            <Searchbar
              round
              searchIcon={{size: 24}}
              iconColor="#D5D7DB"
              onChangeText={text => searchFilterFunction(text)}
              onClear={text => searchFilterFunction('')}
              placeholder="Search Shipments"
              placeholderTextColor="#D5D7DB"
              value={search}
              style={{width: deviceSize.width / 1.1, alignSelf: 'center'}}
            />
            <ScrollView horizontal={true}>
              <FlatList
                style={{height: '100%', paddingBottom: 50}}
                nestedScrollEnabled={true}
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              />
            </ScrollView>
            <>
              {filteredDataSource.length > 0 ? (
                <Text />
              ) : (
                <View
                  style={{
                    width: deviceSize.width / 1,
                    height: deviceSize.height / 1.63,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{alignSelf: 'center', margin: 20}}
                    source={require('../assets/box.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      paddingTop: 20,
                      margin: 20,
                      marginHorizontal: 85,
                      fontWeight: 'bold',
                      color: '#6c757d',
                    }}>
                    You Don't Have Any Orders In Progress Yet
                  </Text>
                  <Text
                    style={{
                      margin: 20,
                      marginHorizontal: 85,
                      textAlign: 'center',
                      fontSize: 15,
                      color: '#adb5bd',
                    }}>
                    Lorem ipsum sit amet, consectetur adkdgj elit, phereaesg etu
                    sgd kdjgşs fjak at.
                  </Text>
                </View>
              )}
            </>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default AllShipment;
