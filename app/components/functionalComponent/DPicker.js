import React from 'react';
import {View,Text,Dimensions,Platform} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { font } from '../../consts/fontFamily';
const {width,height} = Dimensions.get('screen');

const Dpicker = (props) => {
    const radius = (width * 0.5) / 2
    return (
        <View style={{...(Platform.OS !== 'android' && {
            zIndex: 10
        })}}>
            {props.dLabel !== ''?
            <Text style={{ marginBottom: props.dLabel !== ''? width * 0.02:0, fontSize: width * 0.04, color: 'white',fontFamily: font.regular }}>
                {props.dLabel}
            </Text>: null}
            <DropDownPicker
                zIndex={props.zIndex}
                items={props.items}
                defaultValue={props.dValue}
                placeholder={props.placeholder}
                placeholderStyle={{color:'grey', fontSize: width * 0.045,}}
                containerStyle={{ height: height * 0.06, width: width * 0.9 }}
                style={{
                    backgroundColor: '#fafafa', borderTopLeftRadius: radius, borderTopRightRadius: radius,
                    borderBottomLeftRadius: radius, borderBottomRightRadius: radius,
                }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa',marginTop:2 }}
                onChangeItem={(item) => props.changeDValue(item)}
            />
            <Text style={{color:'black', position:'absolute', left: width * 0.03,
                 top: height * 0.01, fontSize: width * 0.045,fontFamily: font.regular}}>{props.dValue}</Text>
        </View>
    );
}

export default Dpicker;