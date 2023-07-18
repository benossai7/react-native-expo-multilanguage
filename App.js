import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { en, es, ja } from './languages/localization';
import { useState } from 'react';
import * as Loacalization from 'expo-localization';
import i18n from 'i18n-js';

export default function App() {
  console.log('locale', Loacalization.locale);
  const [locale, setLocale] = useState(Loacalization.local);
  i18n.fallbacks = true;
  i18n.translations = { en, es, ja };
  i18n.locale = locale;

  return (
    <View style={styles.container}>
      <Text>{i18n.t('appName')}</Text>
      <Text>{i18n.t('welcome')}</Text>
      <Button
        title="English"
        onPress={() => {
          setLocale('en');
        }}
      />
      <Button
        title="Spanish"
        onPress={() => {
          setLocale('es');
        }}
      />
      <Button
        title="Japanese"
        onPress={() => {
          setLocale('ja');
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
