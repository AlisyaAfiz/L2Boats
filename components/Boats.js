import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    boats: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    desc: {
        textAlign: 'center',
        margin: 10,
        fontStyle: 'italic',
        backgroundColor: 'skyblue',
        padding: 8
    },
    img: {
        width:350,
        height:250
    }
});

const Boat = ({name, description, icon_name, picture})=> {
    return (
        <View style={styles.boats}>
            <View style={{marginTop: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Icon name={icon_name} size={30} color="#4a49b6"/>
                    <Text style={{fontWeight: 'bold', color: '#4a49b6', fontSize: 27, padding: 5}}>{name}</Text>
            </View>
            <Text style={styles.desc}>
                {description}
            </Text>
            <Image source={picture} style={styles.img}/>
        </View>
    );
};

export default Boat;
