import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { people_icon_1 } from '../consts/images';
import { Colors } from '../consts/colors';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { font } from '../consts/fontFamily';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {getGlobalLeaderBoardAPI} from '../reducers/auth/service-calls';
import { useDispatch, useSelector } from 'react-redux';

const Top = (props) => {
  const [initialLoading,setInitialLoading] = React.useState(false);
  const {globalLeaderBoard,isGlobalLeaderRequesting} = useSelector(state=> state.AuthReducer)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    getGlobalLeaderBoardAPI('198').then(res=>{
      console.log('Success leaderboard: ',res)
    }).catch(ex=>{
      console.log('Error leaderboard: ',ex);
    })
  },[])

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (
    <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
      <FlatList
        data={items}
        contentContainerStyle={{ paddingTop: hp('2.5%'), paddingBottom: hp('6%') }}
        renderItem={({ item, index }) => (
          <ProfileCard
            index={index}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ paddingTop: wp('2%') }} />
        )}
      />
      <View style={{
        width: wp('100%'), backgroundColor: Colors.green_odd, paddingVertical: hp('2.5%'), justifyContent: 'center',
        position: 'absolute', bottom: 0,
      }}>
        <Text style={{ textAlign: 'center', fontFamily: font.regular }}>{items.length} Active Users</Text>
      </View>
    </View>
  );
}

const Friends = (props) => {

  const items = [1, 2, 3, 4, 5, 6]
  return (
    <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
      <FlatList
        data={items}
        contentContainerStyle={{ paddingTop: hp('2.5%'), paddingBottom: hp('6%') }}
        renderItem={({ item, index }) => (
          <ProfileCard
            index={index}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ paddingTop: wp('2%') }} />
        )}
      />
      <View style={{
        width: wp('100%'), backgroundColor: Colors.green_odd, paddingVertical: hp('2.5%'), justifyContent: 'center',
        position: 'absolute', bottom: 0,
      }}>
        <Text style={{ textAlign: 'center', fontFamily: font.regular }}>{items.length} Active Users</Text>
      </View>
    </View>
  );
}


const Local = props => {

  const items = [1, 2, 3]
  return (
    <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
      <FlatList
        data={items}
        contentContainerStyle={{ paddingTop: hp('2.5%'), paddingBottom: hp('6%') }}
        renderItem={({ item, index }) => (
          <ProfileCard
            index={index}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ paddingTop: wp('2%') }} />
        )}
      />
      <View style={{
        width: wp('100%'), backgroundColor: Colors.green_odd, paddingVertical: hp('2.5%'), justifyContent: 'center',
        position: 'absolute', bottom: 0,
      }}>
        <Text style={{ textAlign: 'center', fontFamily: font.regular }}>{items.length} Active Users</Text>
      </View>
    </View>
  );
}

const ProfileCard = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey', alignItems: 'center', paddingBottom: wp('4%') }}>
      <Text style={{ textAlign: 'left', paddingLeft: wp('4%'), fontSize: wp('5.5%'), fontFamily: font.regular }}>
        #{props.index + 1}
      </Text>
      <Image source={people_icon_1}
        style={{
          width: wp('12%'),
          height: wp('12%'),
          borderRadius: (wp('12%')) / 2,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "lightgrey",
          marginHorizontal: wp('6%')
        }} />
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: wp('4%'), fontFamily: font.regular }}>Michelle</Text>
        <Text style={{ fontSize: wp('4%'), color: 'grey', fontFamily: font.regular }}>142 677 stage</Text>
      </View>
    </View>
  );
}

const CustomTabBar = props => {
  const { navigation } = props;
  const routes = navigation.state.routes;
  console.log(navigation.state.routes)
  const navigationHandler = (routeName) => {
    props.navigation.navigate(routeName);
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.green_odd }}>
      <View style={{ flexDirection: 'row', marginVertical: hp('2.5%'), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { }}>
          <FontAwesome5 name='bars' size={wp('5%')} color='white' style={{ marginLeft: wp('3.5%') }} />
        </TouchableOpacity>
        <Text style={{ color: 'white', marginLeft: wp('3%'), fontSize: wp('5%'), fontFamily: font.regular }}>
          LEADERBOARD
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={routes}
          horizontal={true}
          renderItem={({ item, index }) => (
            <View style={styles.tabBarItem}>
              <CustomTabBarIcon
                key={item.key}
                routeName={item.routeName}
                onPress={() => navigationHandler(item.routeName)}
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

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignContent: 'center',
    height: hp('6%'),
    width: wp('100%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: Colors.green_odd,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    width: wp('30%'),
    fontSize: wp('5%')
  }
});

const CustomTabBarIcon = props => {

  const { index, focused, routeName } = props;
  const onSelect = (routeName) => {
    props.onPress(routeName);
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => onSelect(routeName)}
    >
      <View style={[styles1.container, focused ? styles1.active : styles1.inactive]}>
        <Text style={styles1.textStyle}>{routeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
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
    fontSize: wp('5%'),
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
    tabStyle: { backgroundColor: Colors.green_odd, },
    labelStyle: { color: 'black', fontWeight: 'bold' }
  },
  tabBarComponent: props => <SafeAreaView>
    <CustomTabBar {...props} />
  </SafeAreaView>
});

export default createAppContainer(LeaderBoard);