import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const [baseWidth, baseHeight] = [426, 881];

/*
    These base measurements refers to iPhone 11 screen pixel size.
    Designers generally using iPhone 11 screen for design.
    12 px space in iPhone 11 screen not equal with 12 px space in Samsung Galaxy S22.
    So, this function gives actual ratios of designed space. Thus ratio is protected.
*/

const getWidth = (unit = baseWidth) => (unit / baseWidth) * width;
const getHeight = (unit = baseHeight) => (unit / baseHeight) * height;

export { getWidth, getHeight };
