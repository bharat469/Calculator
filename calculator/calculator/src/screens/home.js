import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {data} from '../props/data/data';
import {useDispatch, useSelector} from 'react-redux';
import {calculateAction} from '../redux/slice/calculator';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const Total = useSelector(state => state.Calculator.total);
  const [fnum, setfnum] = useState('');
  const [snum, setSnum] = useState('');
  const [sign, setSign] = useState('');
  const [total, setTtotal] = useState('');

  const setFunction = (first, second, sig) => {
    switch (sig) {
      case '+':
        setTtotal(parseFloat(first) + parseFloat(second));
        dispatch(calculateAction.add({first, sig, second, Total}));
        break;
      case '-':
        setTtotal(parseFloat(first) - parseFloat(second));
        dispatch(calculateAction.Sub({first, sig, second, total}));

        break;
      case '*':
        setTtotal(parseFloat(first) * parseFloat(second));
        dispatch(calculateAction.multi({first, sig, second, total}));

        break;
      case '/':
        setTtotal(parseFloat(first) / parseFloat(second));
        dispatch(calculateAction.div({first, sig, second, total}));

        break;
      case '%':
        setTtotal(parseFloat(first) % parseFloat(second));
        dispatch(calculateAction.per({first, sig, second, total}));

        break;

      default:
        break;
    }
  };
  console.log('caluclate', Total);

  const setOperation = title => {
    if (title === 'Del') {
      Delete();
    } else if (title === 'C') {
      clear();
    } else if (title === '⟳') {
      navigation.navigate('History');
    } else {
      setSign(title);
    }
  };

  const setNumber = title => {
    if (sign === '' || null) {
      if (title.length < 10) {
        setfnum(fnum + title);
        console.log('Fum', fnum + title);
      }
    } else {
      if (title.length < 10) {
        setSnum(snum + title);
        console.log('Second', snum + title);
      }
    }
  };

  const clear = () => {
    setfnum('');
    setSnum('');
    setSign('');

    dispatch(calculateAction.clear());
  };

  const Delete = () => {
    if (sign === '' || null) {
      setfnum(fnum.slice(0, -1));
    } else {
      if (snum === '' || null) {
        setSign('');
      } else {
        setSnum(snum.slice(0, -1));
      }
    }
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.screens}>
        <View style={styles.calculation}>
          <Text style={styles.number}>{fnum}</Text>
          <Text style={styles.number}>{sign}</Text>
          <Text style={styles.number}>{snum}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.numberResult}>{Total ? `= ${Total}` : ''}</Text>
        </View>
      </View>
      <View style={styles.button}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.titleBtn,
                item.function
                  ? {backgroundColor: '#0f4c5c'}
                  : {backgroundColor: '#fff'},
              ]}
              onPress={() =>
                item.title === '='
                  ? setFunction(fnum, snum, sign)
                  : item.function
                  ? setOperation(item.title)
                  : setNumber(item.title)
              }>
              <Text
                style={[
                  styles.titleText,
                  item.function ? {color: '#fff'} : {color: '#000'},
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#01161e',
  },
  screens: {
    backgroundColor: '#fff',
    padding: 12,
    height: wp('40%'),
    justifyContent: 'center',
  },
  calculation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  },
  number: {
    color: '#000',
    fontSize: hp('3%'),
    // padding: 12,
  },
  numberResult: {
    color: '#000',
    fontSize: hp('3.4%'),
    paddingRight: 12,
  },
  button: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('2%'),
  },
  titleBtn: {
    margin: 15,
    padding: 14,
    borderRadius: 12,
    width: wp('17%'),
    alignItems: 'center',
  },
  titleText: {
    fontSize: hp('3%'),
    fontWeight: '800',
  },
});
