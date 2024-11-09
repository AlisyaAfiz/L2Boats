import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Boat from './components/Boats';

const styles = StyleSheet.create({
        title: {
            fontSize: 30,
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'skyblue',
            fontWeight: 'bold',
            padding: 20,
            borderRadius: 10
        }
});

const AllBoats =() => {
  return (
      <View style={{backgroundColor: '#4a49b6', padding: 10}}>
      <ScrollView>
              <View style={{marginTop: 30, marginBottom: 10}}>
          <Text style={styles.title}>GetABoat - For Sale</Text>
              </View>
          <Boat icon_name="boat" name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture={require('./img/sea_ray.jpg')}/>
          <Boat icon_name="boat" name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." picture={require('./img/four_winns.jpg')}/>
          <Boat icon_name="boat" name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture={require('./img/flipper.jpg')}/>
          <Boat icon_name="boat" name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." picture={require('./img/princess.jpg')}/>
          <Boat icon_name="boat" name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture={require('./img/bayliner.jpg')}/>
          <Boat icon_name="boat" name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture={require('./img/fairline.jpg')}/>
      </ScrollView>
      </View>
  );
}

export default AllBoats;
