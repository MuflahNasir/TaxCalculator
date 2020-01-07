import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
  
class TaxSlab1s extends Component {
      render(){
          var picture= require('./assets/bullet.png');
             return(
                 <ScrollView>
                 <View style={styles.container}>
                     <Text style={styles.title}>Income Tax for Salaried Person</Text>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income does not exceed Rs. 600,000 the rate of income tax is 0%.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 600,000 but does not exceed Rs. 1,200,000 the rate of income tax is 5% of the amount exceeding Rs. 600,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 1,200,000 but does not exceed Rs. 1,800,000 the rate of income tax is Rs. 30,000 + 10% of the amount exceeding Rs. 1,200,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 1,800,000 but does not exceed Rs. 2,500,000 the rate of income tax is Rs. 90,000 + 15% of the amount exceeding Rs. 1,800,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 2,500,000 but does not exceed Rs. 3,500,000 the rate of income tax is Rs. 195,000 + 17.5% of the amount exceeding Rs. 2,500,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 3,500,000 but does not exceed Rs. 5,000,000 the rate of income tax is Rs. 370,000 + 20% of the amount exceeding Rs. 3,500,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 5,000,000 but does not exceed Rs. 8,000,000 the rate of income tax is Rs. 670,000 + 22.5% of the amount exceeding Rs. 5,000,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 8,000,000 but does not exceed Rs. 12,000,000 the rate of income tax is Rs. 1,345,000 + 25% of the amount exceeding Rs. 8,000,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 12,000,000 but does not exceed Rs. 30,000,000 the rate of income tax is Rs. 2,345,000 + 27.5% of the amount exceeding Rs. 12,000,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 30,000,000 but does not exceed Rs. 50,000,000 the rate of income tax is Rs. 7,295,000 + 30% of the amount exceeding Rs. 30,000,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 50,000,000 but does not exceed Rs. 75,000,000 the rate of income tax is Rs. 13,295,000 + 32.5% of the amount exceeding Rs. 50,000,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where the taxable salary income exceeds Rs. 75,000,000 the rate of income tax is Rs. 21,420,000 + 35% of the amount exceeding Rs. 75,000,000.</Text>
                     </View>

                     <View>
                     <Text style={styles.title}>Income Tax for UnSalaried Person</Text>
                     </View>

                     <View style={[styles.next, marginTop= 10]}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income does not exceed Rs. 400,000 the rate of income tax is 0%.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income exceeds Rs. 400,000 but does not exceed Rs. 600,000 the rate of income tax is 5% of the amount exceeding Rs. 400,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income exceeds Rs. 600,000 but does not exceed Rs. 1,200,000 the rate of income tax is Rs. 10,000 plus 10% of the amount exceeding Rs. 600,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income exceeds Rs. 1,200,000 but does not exceed Rs. 2,400,000 the rate of income tax is Rs. 70,000 plus 15% of the amount exceeding Rs. 1,200,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income exceeds Rs. 2,400,000 but does not exceed Rs. 3,000,000 the rate of income tax is Rs. 250,000 plus 20% of the amount exceeding Rs. 2,400,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income exceeds Rs. 3,000,000 but does not exceed Rs. 4,000,000 the rate of income tax is Rs. 370,000 plus 25% of the amount exceeding Rs. 3,000,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income exceeds Rs. 4,000,000 but does not exceed Rs. 6,000,000 the rate of income tax is Rs. 620,000 plus 30% of the amount exceeding Rs. 4,000,000.</Text>
                     </View>

                     <View style={styles.next}>
                     <Image style={styles.image} source={picture}></Image>
                     <Text>Where taxable income exceeds Rs. 6,000,000 the rate of income tax is Rs. 1,220,000 plus 35% of the amount exceeding Rs. 6,000,000.</Text>
                     </View>
                     <View style={{height: 10}}></View>
                 </View>
                 </ScrollView>
             );
        }
}
const styles = StyleSheet.create({
    container: {
        width: 450,
        marginTop: 10,
        paddingLeft: 10
    },
    title: {
        fontSize: 20,
        justifyContent: 'center',
        marginLeft: 30,
        fontWeight: 'bold',
        color: '#ff7f00'
    },
    next: {
        marginTop: 25,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 130,
    },
    image: {
        width: 12,
        height: 11,
        marginTop: 3,
        marginRight: 10
    },
    divider: {
        backgroundColor: '#ff7f00', 
        marginTop: 15, 
        marginRight: 100,
        marginBottom: 10
    }
});

export default TaxSlab1s