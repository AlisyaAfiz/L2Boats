import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    boats: {
        flex: 1,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 3,
        margin: 10,
        alignItems:'center',
        padding: 10,
        backgroundColor: 'lightblue'
    },
    desc: {
        textAlign: 'center',
        margin: 10,
        fontStyle: 'italic',
        backgroundColor: 'skyblue',
        padding: 7,
        borderColor: 'black',
        borderWidth: 2
    },
    img: {
        width:350,
        height:250
    }
});

const Boat = ({name, description, icon_name, picture})=> {
    return (
        <View style={styles.boats}>
            <Text style={{marginTop: 15, marginBottom: 15}}>
                <Icon name={icon_name} size={30} color="black"><Text> </Text>{name}</Icon>
            </Text>
            <Text style={styles.desc}>
                {description}
            </Text>
            <Image source={picture} style={styles.img}/>
        </View>
    );
};

export default Boat;
