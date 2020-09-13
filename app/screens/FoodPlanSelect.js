import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { Colors } from '../consts/colors';
import { workout_1 } from '../consts/images';
import EllipticalButton from '../components/functionalComponent/EllipticalButton';
import { font } from '../consts/fontFamily';

const FoodPlanSelect = (props) => {
    const plan =  props.navigation.state.params? props.navigation.state.params.plan : 'VEG'
    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white' }]}>
            <View style={{ alignSelf: 'center', marginVertical: height * 0.03 }}>
                <EllipticalButton
                    ellipticClick={() => {}}
                    width={width * 0.38}
                    height={height * 0.07}
                    btnImg={''}
                    btnSize={width * 0.055}
                    btnText={plan}
                    bgColor={plan === 'VEG'? Colors.dark_green: Colors.medium_red}
                    labelColor='white'
                />
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                contentContainerStyle={{ margin: width * 0.05 }}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={workout_1} style={{ width: width * 0.4, height: width * 0.27 }} />
                        <View style={{ marginLeft: width * 0.03, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: width * 0.04, fontWeight: 'bold',fontFamily: font.regular }}>Name</Text>
                            <Text style={{ fontSize: width * 0.04, color: 'grey',fontFamily: font.regular }}>Qty</Text>
                            <Text style={{ fontSize: width * 0.04, color: 'grey',fontFamily: font.regular }}>Calories</Text>
                            <Text style={{ fontSize: width * 0.04, color: 'grey',fontFamily: font.regular }}>Time of the day</Text>
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={()=>(
                    <View style={{marginTop: height * 0.02}} />
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default FoodPlanSelect;