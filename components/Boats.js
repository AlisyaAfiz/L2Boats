import {View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Boat = ({name, description, icon_name, picture})=> {
    return (
        <View>
            <Text>
                <Icon name={icon_name} size={30} color="#90D5FF"><Text> </Text>{name}</Icon>
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={picture} style={{width:400, height:300}}/>
        </View>
    );
};

export default Boat;
