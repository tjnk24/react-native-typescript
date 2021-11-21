import React from 'react';
import {Image} from 'react-native';

import samplePhoto from './samplePhoto.png';

const TestImage = () => {
    return (
        <Image source={samplePhoto}/>
    );
};

export default TestImage;
