import React from 'react';
import { Text, View, Dimensions, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fzone_logo, people_icon_1 } from '../consts/images';
import { Colors } from '../consts/colors';
const primarycolor = '#20d6a5'
const { width, height } = Dimensions.get('screen')
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { font } from '../consts/fontFamily';

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
                <FlatList
                    data={items}
                    contentContainerStyle={{ paddingTop: height * 0.02, paddingBottom: height * 0.065 }}
                    renderItem={({ item, index }) => (
                        <ProfileCard
                            index = {index}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ paddingTop: width * 0.03 }} />
                    )}
                />
                <View style={{
                    width: width, backgroundColor: Colors.green_odd, height: height * 0.07, justifyContent: 'center',
                    position: 'absolute', bottom: 0,
                }}>
                    <Text style={{ textAlign: 'center',fontFamily: font.regular }}>{items.length} Active Users</Text>
                </View>
            </View>
        );
    }
}

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const items = [1, 2, 3, 4, 5, 6]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
                <FlatList
                    data={items}
                    contentContainerStyle={{ paddingTop: height * 0.02, paddingBottom: height * 0.065 }}
                    renderItem={({ item, index }) => (
                        <ProfileCard
                            index = {index}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ paddingTop: width * 0.03 }} />
                    )}
                />
                <View style={{
                    width: width, backgroundColor: Colors.green_odd, height: height * 0.07, justifyContent: 'center',
                    position: 'absolute', bottom: 0,
                }}>
                    <Text style={{ textAlign: 'center',fontFamily: font.regular }}>{items.length} Active Users</Text>
                </View>
            </View>
        );
    }
}


class Local extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const items = [1, 2, 3]
        return (
            <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
                <FlatList
                    data={items}
                    contentContainerStyle={{ paddingTop: height * 0.02, paddingBottom: height * 0.065 }}
                    renderItem={({ item, index }) => (
                        <ProfileCard
                            index = {index}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ paddingTop: width * 0.03 }} />
                    )}
                />
                <View style={{
                    width: width, backgroundColor: Colors.green_odd, height: height * 0.07, justifyContent: 'center',
                    position: 'absolute', bottom: 0,
                }}>
                    <Text style={{ textAlign: 'center',fontFamily: font.regular }}>{items.length} Active Users</Text>
                </View>
            </View>
        );
    }
}

const ProfileCard = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey', alignItems: 'center', paddingBottom: width * 0.03 }}>
            <Text style={{ textAlign: 'left', paddingLeft: width * 0.04, fontSize: width * 0.05,fontFamily: font.regular }}>
                #{props.index + 1}
            </Text>
            <Image source={people_icon_1}
                style={{
                    width: width * 0.125,
                    height: width * 0.125,
                    borderRadius: (width * 0.125) / 2,
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "lightgrey", marginHorizontal: width * 0.065
                }} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: width * 0.04,fontFamily: font.regular }}>Michelle</Text>
                <Text style={{ fontSize: width * 0.04, color: 'grey',fontFamily: font.regular }}>142 677 stage</Text>
            </View>
        </View>
    );
}

class CustomTabBar extends React.Component {

    render() {
  
      const {navigation} = this.props;    
      const routes = navigation.state.routes;
      console.log(navigation.state.routes)
      return (
        <SafeAreaView style={{backgroundColor: Colors.green_odd}}>
          <View style={{flexDirection:'row',marginVertical: height * 0.02}}>
            <TouchableOpacity onPress={()=>{}}>
          <FontAwesome5 name = 'bars' size = {width * 0.065} color='white' style={{marginLeft: width * 0.03}} />
          </TouchableOpacity>
          <Text style={{color:'white', marginLeft: width * 0.03, fontSize: width * 0.055,fontFamily: font.regular}}>LEADERBOARD</Text>
          </View>
          <View style={styles.container}>
            <FlatList
                data = {routes}
                horizontal={true}
                renderItem = {({item,index})=>(
                <View style={styles.tabBarItem}>
                  <CustomTabBarIcon
                    key={item.key}
                    routeName={item.routeName}
                    onPress={() => this.navigationHandler(item.routeName)}
                    focused={navigation.state.index === index}
                    index={index}
                  />
                </View>
                )}
              />
          </View>
        </SafeAreaView>
      );
    }
  
    navigationHandler = (routeName) => {
      this.props.navigation.navigate(routeName);
    }
  }
  
  const styles = StyleSheet.create({
  
    container: {
      flexDirection: 'row',
      alignContent: 'center',
      height: height * 0.07,
      width: width,
      paddingHorizontal: 16,
      backgroundColor: Colors.green_odd,
    },
    tabBarItem: {
      flex: 1,
      alignItems: 'center',
      width: width * 0.3,
      fontSize: 25
    }
  });

  class CustomTabBarIcon extends React.PureComponent {

    render() {
      const {index, focused, routeName} = this.props; 
      return (
        <TouchableWithoutFeedback
          onPress={() => this.onSelect(routeName)}
        >
          <View style={[styles1.container, focused ? styles1.active : styles1.inactive]}> 
            <Text style={styles1.textStyle}>{routeName}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  
    onSelect = (routeName) => {    
      this.props.onPress(routeName);
    }
  }
  
  const styles1 = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: 'center',
    },
    active: {
      borderBottomWidth: 3,
      borderColor: Colors.dark_blue
    },
    inactive: {
      // borderBottomWidth: 3,
      // borderColor: 'blue'  
    },
    textStyle: {
      color: 'white',
      fontSize: width * 0.05,
      fontFamily: font.regular
    }
  });

const LeaderBoard = createMaterialTopTabNavigator({
    Top: Top,
    Friends: Friends,
    Local: Local
}, {
    initialRouteName: 'Top',
    tabBarOptions: {
        tabStyle:{backgroundColor: Colors.green_odd,},
        labelStyle:{color:'black', fontWeight:'bold'}
    },
    tabBarComponent: props=> <SafeAreaView>
    <CustomTabBar {...props} />
    {/* <MaterialTopTabBar {...props} /> */}
  </SafeAreaView>
});

export default createAppContainer(LeaderBoard);