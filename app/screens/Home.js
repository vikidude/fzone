import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';
import PlanCard from '../components/functionalComponent/PlanCard';

const { height, width } = Dimensions.get('screen');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={[{ flex: 1, paddingLeft: width * 0.035, alignItems: 'center', backgroundColor: 'red' }]}>
                <ScrollView>
                    <Text style={{ color: 'white', fontSize: height * 0.05, textAlign: 'center', paddingVertical: height * 0.015 }}>
                        Home
                    </Text>
                    <FlatList
                        data={[1, 2, 3]}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <PlanCard
                                height={height * 0.4}
                                width={width * 0.9}
                                planImg={'https://i.ytimg.com/vi/clFVVaXyLio/hqdefault.jpg'}
                                planName={'Relax Yoga: Spine & Breathwork'}
                                planLimit={'1h'}
                                btnSize={width * 0.04}
                                planBy={'by Anvita Dixit | BEGINNER'}
                                timeSlots={[{ time: '07:00 PM', showDot: true }, { time: '08:00 PM', showDot: false }, { time: 'MORE', showDot: false }]}
                            />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginLeft: width * 0.03 }} />
                        )}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default Home;