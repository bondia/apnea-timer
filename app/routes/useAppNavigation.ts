import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './Routes';

type AppStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const useAppNavitation = () => useNavigation<AppStackNavigation>();

export default useAppNavitation;
