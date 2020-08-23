import React from 'react';
import { Text, View, Dimensions, FlatList, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fzone_logo, people_icon_1 } from '../consts/images';
const primarycolor = '#20d6a5'
const { width, height } = Dimensions.get('screen')

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
                    width: width, backgroundColor: primarycolor, height: height * 0.07, justifyContent: 'center',
                    position: 'absolute', bottom: 0,
                }}>
                    <Text style={{ textAlign: 'center' }}>{items.length} Active Users</Text>
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
                    width: width, backgroundColor: primarycolor, height: height * 0.07, justifyContent: 'center',
                    position: 'absolute', bottom: 0,
                }}>
                    <Text style={{ textAlign: 'center' }}>{items.length} Active Users</Text>
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
                    width: width, backgroundColor: primarycolor, height: height * 0.07, justifyContent: 'center',
                    position: 'absolute', bottom: 0,
                }}>
                    <Text style={{ textAlign: 'center' }}>{items.length} Active Users</Text>
                </View>
            </View>
        );
    }
}

const ProfileCard = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey', alignItems: 'center', paddingBottom: width * 0.03 }}>
            <Text style={{ textAlign: 'left', paddingLeft: width * 0.04, fontSize: width * 0.05 }}>
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
                <Text style={{ fontSize: width * 0.04 }}>Michelle</Text>
                <Text style={{ fontSize: width * 0.04, color: 'grey' }}>142 677 stage</Text>
            </View>
        </View>
    );
}

class CustomTabBar extends React.Component {

    render() {
  
      const {navigation} = this.props;    
      const routes = navigation.state.routes;
  
      return (
        <SafeAreaView style={{backgroundColor: 'blue'}}>
          <View style={styles.container}>
            <FlatList
                data = {routes}
                horizontal={true}
                renderItem = {({item,index})=>(
                <View style={styles.tabBarItem}>
                  <CustomTabBarIcon
                    key={item.key}
                    routeName={item.routeName}
                    onPress={() => this.navigationHandler(index)}
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
      height: 56,
      width: '100%',
      paddingHorizontal: 16,
      backgroundColor: 'blue',
    },
    tabBarItem: {
      flex: 1,
      alignItems: 'center'
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
      alignItems: 'center'
    },
    active: {
      borderTopWidth: 3,
      borderColor: 'white'
    },
    inactive: {
      borderTopWidth: 3,
      borderColor: 'blue'  
    },
    textStyle: {
      color: 'white',
      fontSize: 13
    }
  });

const LeaderBoard = createMaterialTopTabNavigator({
    Top: Top,
    Friends: Friends,
    Local: Local
}, {
    initialRouteName: 'Top',
    tabBarOptions: {
        tabStyle:{backgroundColor: primarycolor,},
        labelStyle:{color:'black', fontWeight:'bold'}
    },
    tabBarComponent: props=> <SafeAreaView>
    {/* <CustomTabBar {...props} /> */}
    <MaterialTopTabBar {...props} />
  </SafeAreaView>
});

export default createAppContainer(LeaderBoard);