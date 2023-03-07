import { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';

import { Palette } from '../../constants/Colors';
import Products from '../../constants/Products';
import { setPad, setDailyPad, setTampon } from '../../features/products/productsSlice';
import ProductSlider from '../ProductSlider';

const PadScreen = () => {
  const pads = Products[0].models;
  const counts = useSelector((state) => state.products['PAD']);
  const dispatch = useDispatch();
  return (
    <View style={{ backgroundColor: Palette.yellow }}>
      {pads.map((item, i) => (
        <ProductSlider
          key={i}
          title={item.screen_name}
          maximum={item.maximum_order}
          type={item.name}
          setFunc={setPad}
          dispatch={dispatch}
          count={counts[item.name]}
        />
      ))}
    </View>
  );
};

const DailyPadScreen = () => {
  const daily_pads = Products[1].models;
  const counts = useSelector((state) => state.products['DAILYPAD']);
  const dispatch = useDispatch();
  return (
    <View style={{ backgroundColor: Palette.yellow }}>
      {daily_pads.map((item, i) => (
        <ProductSlider
          key={i}
          title={item.screen_name}
          maximum={item.maximum_order}
          type={item.name}
          setFunc={setDailyPad}
          dispatch={dispatch}
          count={counts[item.name]}
        />
      ))}
    </View>
  );
};

const TamponScreen = () => {
  const tampons = Products[2].models;
  const counts = useSelector((state) => state.products['TAMPON']);
  const dispatch = useDispatch();
  return (
    <View style={{ backgroundColor: Palette.yellow }}>
      {tampons.map((item, i) => (
        <ProductSlider
          key={i}
          title={item.screen_name}
          maximum={item.maximum_order}
          type={item.name}
          setFunc={setTampon}
          dispatch={dispatch}
          count={counts[item.name]}
        />
      ))}
    </View>
  );
};

const renderScene = SceneMap({
  PadScreen,
  DailyPadScreen,
  TamponScreen,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: Palette.black_secondary }}
    style={{ backgroundColor: Palette.yellow }}
    activeColor={Palette.black}
    inactiveColor={Palette.black_secondary}
    labelStyle={{
      textTransform: 'none',
      textAlign: 'center',
      fontFamily: 'Gordita-Regular',
      fontSize: 14,
      lineHeight: 20,
    }}
  />
);

export default function ProductTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'PadScreen', title: 'beije Pad' },
    { key: 'DailyPadScreen', title: 'beije Günlük Pad' },
    { key: 'TamponScreen', title: 'beije Tampon' },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      swipeEnabled={false}
    />
  );
}
