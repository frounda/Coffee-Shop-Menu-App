import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

// 1. Array of Objects: Configured with your menu items and categories
const menuItems = [
  { id: '1', category: 'Hot Drinks', name: 'Americano' },
  { id: '2', category: 'Hot Drinks', name: 'Latte' },
  { id: '3', category: 'Desserts', name: 'Cheesecake' },
  { id: '4', category: 'Desserts', name: 'Brownie' },
  { id: '5', category: 'Cold Drinks', name: 'Iced Matcha Latte' }, // New Category & Item
  { id: '6', category: 'Cold Drinks', name: 'Cold Brew' },         // New Item
  { id: '7', category: 'Desserts', name: 'Chocolate Croissant' },  // New Item
];

export default function App() {
  
  // Basic interaction function to handle button clicks
  const handleAddToCart = (itemName: string) => {
    console.log(`Added to cart: ${itemName}`);
  };

  // 2. Render Item: Controls the layout for each menu item row
  const renderItem = ({ item }: { item: { id: string; category: string; name: string } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.categoryText}>{item.category}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
      
      {/* Interactive button updated to "Add to Cart" */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handleAddToCart(item.name)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 3. Your custom retro app title */}
      <Text style={styles.appTitle}>thisisretro cafe</Text>
      
      {/* 4. FlatList Component to render the list efficiently */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

// Custom styled theme featuring your requested Olive Green palette
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B441F', // Olive Green background color
    paddingTop: 40,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F4F1EA', // Cream/Off-white for a beautiful retro contrast
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 12,
    color: '#C2C8A4', // Lighter olive-tint for categories
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 3,
  },
  nameText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#F4F1EA',
    marginBottom: 8,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#262C14', // Darker olive green for the button depth
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  buttonText: {
    color: '#F4F1EA',
    fontSize: 13,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#4B5529', // Subtle separator lines
    width: '100%',
  },
});