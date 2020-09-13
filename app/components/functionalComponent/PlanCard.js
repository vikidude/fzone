import React from 'react';
import { View, Text, Image, Dimensions, FlatList } from 'react-native';
import EllipticalButton from './EllipticalButton';
import { font } from '../../consts/fontFamily';
const { height, width } = Dimensions.get('screen');

const PlanCard = (props) => {

    return (
        <View
            style={{
                flexDirection: 'column', backgroundColor: 'white', height: null, width: props.width,
                borderRadius: props.width / 16,
            }}>
            {props.planImg !== '' && <Image source={{ uri: props.planImg }}
                style={{ height: (props.height) / 1.5, width: (props.width) }} />
            }
            <View style={{ marginVertical: 3, flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: width * 0.03 }}>
                <Text style={{ fontSize: props.btnSize, flexGrow: 1, color: 'black', fontFamily: font.regular }}>
                    {props.planName}
                </Text>
                <Text style={{ fontSize: props.btnSize, flexGrow: 1, color: 'black', textAlign: 'right', fontFamily: font.regular }}>
                    {props.planLimit}
                </Text>
            </View>
            <Text style={{ fontSize: props.btnSize, flexGrow: 1, color: 'black', paddingHorizontal: width * 0.03, fontFamily: font.regular }}>
                {props.planBy}
            </Text>
            <FlatList
                data={props.timeSlots}
                contentContainerStyle={{ flexDirection: 'row', marginVertical: height * 0.02, paddingLeft: width * 0.025 }}
                renderItem={({ item, index }) => (
                    <View style={{ marginLeft: index !== 0 ? 10 : 0 }}>
                        <EllipticalButton
                            ellipticClick={() => { }}
                            width={width * 0.25}
                            height={height * 0.048}
                            btnImg={''}
                            btnSize={props.btnSize}
                            btnText={item.time}
                            labelColor='black'
                            bgColor='lightgrey'
                            showDot={item.showDot}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default PlanCard;