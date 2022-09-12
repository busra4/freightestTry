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
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';

const deviceSize = Dimensions.get('window');
const DenemeKaybetme = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString('hello worldsasada');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
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
            margin: 20,
            borderRadius: 16,
          }}>
          <View
            style={{
              alignSelf: 'center',
              height: deviceSize.height / 2,
              width: deviceSize.width / 1.12,
              borderRadius: 16,
              backgroundColor: 'blue',
            }}>
            <Image
              onPress={() => getItem(item)}
              style={{
                height: deviceSize.height / 2.5,
                width: deviceSize.width / 1.12,
                borderRadius: 16,
              }}
              source={{
                uri: item.url,
              }}></Image>
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
              {item.id}
              {'.'}
              {item.title.toUpperCase()}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', margin: 10, marginHorizontal: 20}}>
            <Text style={{color: 'blue'}}>İstanbul</Text>
            <Icon name="arrow-forward" style={{margin: 5, color: 'blue'}} />
            <Text style={{color: 'blue'}}>İzmir</Text>
          </View>

          <View style={{flexDirection: 'row', margin: 5}}>
            <Image
              source={require('../assets/trolley.png')}
              style={{marginHorizontal: 14}}
            />
            <Text>Order date:</Text>
            <Text style={{fontWeight: 'bold'}}> 10 June Friday</Text>
          </View>

          <SafeAreaView>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 5,
              }}>
              <TouchableOpacity
                onPress={fetchCopiedText}
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
                onPress={copyToClipboard}>
                <Icon style={{margin: 6}} size={25} name="copy-outline" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
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
          backgroundColor: '#C8C8C8',
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
      <View style={styles.container}>
        <Searchbar
          round
          searchIcon={{size: 24}}
          onChangeText={text => searchFilterFunction(text)}
          onClear={text => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
          style={{width:deviceSize.width/1.1,
        alignSelf:'center'}}
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
      </View>
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

export default DenemeKaybetme;
