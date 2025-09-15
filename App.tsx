import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
function App() {
  const [displayText, setDisplayText] = useState('');

  const handlePress = () => {
    if (displayText == '') {
      setDisplayText('I will be familiar with React Native!');
    } else {
      setDisplayText('');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CPAN 213</Text>
        <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.greeting}>Hello, I'm Ema!</Text>
        <Text style={styles.info}>Student ID: N01678730</Text>
        <Text style={styles.info}>Program: Computer Programming</Text>
        <View style={styles.goals}>
          <Text style={styles.sectionTitle}>My Course Goals:</Text>
          <Text style={styles.goal}>• Learn React Native fundamentals</Text>
          <Text style={styles.goal}>• Build cross-platform mobile apps</Text>
          <Text style={styles.goal}>• Master state management with Redux</Text>
          <Text style={styles.goal}>• Deploy apps to app stores</Text>
          <View style={{ marginTop: 10 }}>
            <Button
              title={displayText == '' ? 'Show message' : 'Hide message'}
              onPress={handlePress}
            />
          </View>
          {displayText !== '' && (
            <Text style={styles.dynamicText}>{displayText}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#34dbb4ff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 5,
  },
  goals: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  goal: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
    lineHeight: 22,
  },
  dynamicText: {
    marginTop: 10,
    fontSize: 16,
    color: '#16a085',
    fontWeight: '600',
    textAlign: 'center',
  },
});
export default App;
