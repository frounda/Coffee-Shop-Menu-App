import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Your Orders</Text>
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>No active orders currently placed.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3B441F', paddingTop: 20 },
  titleText: { fontSize: 32, fontWeight: 'bold', color: '#F4F1EA', paddingHorizontal: 20, marginBottom: 25 },
  centerContainer: { flex: 0.7, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#C2C8A4', fontSize: 16 },
});