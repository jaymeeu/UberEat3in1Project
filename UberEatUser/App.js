import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/nagivation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native'
import AuthContextProvider from './src/contexts/AuthContext';
import BasketContextProvider from './src/contexts/BasketContext';
import OrderContextProvider from './src/contexts/OrderContext';

Amplify.configure({
  ...config, 
  Analytics: {
    disabled: true
  }});

function App() {
  return (
      <NavigationContainer>
        <AuthContextProvider>
          <BasketContextProvider>
            <OrderContextProvider>
              <RootNavigatior/>
            </OrderContextProvider>
          </BasketContextProvider>
          <StatusBar style="auto" /> 
        </AuthContextProvider>
      </NavigationContainer>
  );
}
export default withAuthenticator(App);
