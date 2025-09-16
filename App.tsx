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
import LinearGradient from 'react-native-linear-gradient';

// const profile = require('./assets/profile.JPG');

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
      {/* added gradient backgrounds using third-party libraries */}
      <LinearGradient colors={['#34dbb4ff', '#2ecc71']} style={styles.header}>
        <Text style={styles.title}>Welcome to CPAN 213</Text>
        <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
      </LinearGradient>
      <View style={styles.content}>
        <Text style={styles.greeting}>Hello, I'm Ema!</Text>
        <Text style={styles.info}>Student ID: N01678730</Text>
        <Text style={styles.info}>Program: Computer Programming</Text>
        <View style={styles.goalsContainer}>
          <View style={styles.goals}>
            <Text style={styles.sectionTitle}>My Course Goals:</Text>
            <Text style={styles.goal}>• Learn React Native fundamentals</Text>
            <Text style={styles.goal}>• Build cross-platform mobile apps</Text>
            <Text style={styles.goal}>
              • Master state management with Redux
            </Text>
            <Text style={styles.goal}>• Deploy apps to app stores</Text>
            <View style={styles.buttonContainer}>
              {/* added a Button component that changes text when a local image*/}
              <Button
                title={displayText ? 'Hide message' : 'Show message'}
                onPress={handlePress}
              />
            </View>
            {displayText !== '' && (
              <Text style={styles.dynamicText}>{displayText}</Text>
            )}
          </View>
          {/* <View style={styles.imageContainer}>
          <Image source={profile} style={styles.image} />
        </View> */}
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
  goalsContainer: {
    // flexbox layouts
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonContainer: {
    marginTop: 10,
    width: '60%',
    alignSelf: 'center',
  },
  // imageContainer: {
  //   marginTop: 40,
  //   alignItems: 'center',
  // },
  // image: {
  //   width: 300,
  //   height: 200,
  //   borderRadius: 10,
  // },
});
export default App;
