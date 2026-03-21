import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default function App() {
  const [statusText, setStatusText] = useState("Initializing System...");
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1. Initializing
    setTimeout(() => setStatusText("Locating ALT Pairing File..."), 1000);
    
    // 2. Start Progress Bar
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000, // 5 seconds of "work"
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    // 3. Update Text based on time
    setTimeout(() => setStatusText("Establishing LocalDevVPN Tunnel..."), 2500);
    setTimeout(() => setStatusText("Mounting DDI / Injecting JIT..."), 4000);
    setTimeout(() => setStatusText("JIT TUNNEL ACTIVE"), 5000);
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>R3ALCYB3R // LOCALJIT</Text>
      
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width }]} />
      </View>
      
      <Text style={styles.status}>{statusText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#a020f0',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textShadowColor: 'rgba(160, 32, 240, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  progressContainer: {
    width: '80%',
    height: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#a020f0',
    shadowColor: '#a020f0',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  status: {
    color: '#666',
    marginTop: 15,
    fontSize: 12,
    letterSpacing: 1,
  },
});
