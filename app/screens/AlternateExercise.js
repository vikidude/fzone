import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity,Text } from 'react-native'
import { workout_1 } from '../consts/images';
import { useDispatch,useSelector } from 'react-redux';
import { font } from '../consts/fontFamily';
const { height, width } = Dimensions.get('screen');

const AlternateExercises = (props) => {
    const {alternate_exercise} = useSelector(state=>state.WorkoutReducer)
    const dispatch = useDispatch();
    
    const setAlternate = (item) => {
        let value = {
            exercise_name: item.exercise_name, sets: item.sets, reps: item.reps, youtube: item.youtube_link,
            workout_image: item.workout_image, exercise_id: item.exercise_id,alternate_exercise_id: item.alternate_exercise_id
        }

        dispatch({ type: 'ALTERNATE_PICKED', isAlternateSet: true, picked_alternate: value })
    }

    return (
        <View style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }]}>
            
                <FlatList
                    data={alternate_exercise}
                    contentContainerStyle={{paddingTop: height * 0.01,justifyContent: 'center',flex: 1}}
                    ListEmptyComponent={()=>(
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{}}>NO DATA</Text>
                        </View>
                    )}
                    renderItem={({item,index})=>(
                        <TouchableOpacity activeOpacity={0.6} style={{alignItems: 'center'}} 
                            onPress={()=> [console.log(item.alternate_exercise_id),
                            setAlternate(item)]}>
                            {item.workout_image !=='' ?
                                <Image source={{ uri: 'data:image/png;base64,' + item.workout_image }}
                                    style={{ width: width * 0.6, height: width * 0.3, resizeMode: 'stretch' }} />
                                :
                                <Image source={workout_1} style={{ width: width * 0.6, height: width * 0.3, resizeMode: 'stretch' }} />
                            }
                            <Text style={{fontFamily: font.regular, fontSize: width * 0.04}}>
                                {item.exercise_name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={()=>(
                        <View style={{marginVertical: height * 0.01}} />
                    )}
                    keyExtractor={(item,index)=>index}
                />
            
            {/* <View style={{
                borderColor: '#ffd152', borderWidth: width * 0.025, borderRadius: width * 0.07,
                paddingVertical: height * 0.1, width: width * 0.5, marginVertical: height * 0.07
            }} />
            <View style={{
                borderColor: 'red', borderWidth: width * 0.025, borderRadius: width * 0.07,
                paddingVertical: height * 0.1, width: width * 0.5
            }} /> */}
        </View>
    );
}

export default AlternateExercises;