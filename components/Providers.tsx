import NavigationContainer from '@react-navigation/native/lib/typescript/src/NavigationContainer';
import React from 'react';
import {ProviderProps} from '../types';

const Providers: React.FC<ProviderProps> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default Providers;
