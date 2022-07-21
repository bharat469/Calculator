import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const History = () => {
  const data = useSelector(state => state.Calculator.fulldata);


  console.log(total);
  return (
    <View style={styles.historyView}>
      <Text
        style={{
          color: '#fff',
          padding: 12,
          fontSize: hp('2.5%'),
          textAlign: 'center',
        }}>
        History
      </Text>
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.historyList}>
                <Text style={styles.HistoryText}>{item.first}</Text>
                <Text style={styles.signText}>{item.sig}</Text>
                <Text style={styles.HistoryText}>{item.second}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  historyView: {
    flex: 1,
    backgroundColor: '#01161e',
  },
  historyList: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 12,
    margin: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  HistoryText: {
    fontSize: hp('2.9%'),
    color: '#000',
    fontWeight: '800',
    padding: 12,
  },
  signText: {
    fontSize: hp('2.9%'),
    color: 'red',
    padding: 12,
    fontWeight: '800',
  },
});
