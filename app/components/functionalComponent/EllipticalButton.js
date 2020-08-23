import React from 'react';
import {View,Text,TouchableOpacity, Image} from 'react-native';

const EllipticalButton = (props) => {

    return(
        <TouchableOpacity onPress={()=>props.ellipticClick()} 
            style = {{flexDirection: 'row',backgroundColor: props.bgColor || 'white',height:props.height, width: props.width, 
            paddingHorizontal: props.width * 0.05,alignItems:'center', borderRadius: props.width/2 }}>
            {props.btnImg !== ''&& <Image source = {props.btnImg} 
                style={{height: 25, width: 25}} />
            }
            {props.showDot &&<View style={{width: 4, height: 4, borderRadius: 2, backgroundColor:'red',left:2}} />}
            <Text style={{fontSize: props.btnSize, textAlign:'center',flexGrow:1,color: props.labelColor || 'white' }}>
                {props.btnText}
            </Text>
        </TouchableOpacity>
    );
}

export default EllipticalButton;