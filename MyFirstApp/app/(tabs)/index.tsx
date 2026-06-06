import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

// Menu data array with details and prices matching your laboratory guidelines
const menuItems = [
  { id: '1', category: 'Hot Drinks', name: 'Americano', price: '₱120', description: 'Bold and strong black coffee brewed with espresso shots.' },
  { id: '2', category: 'Hot Drinks', name: 'Latte', price: '₱160', description: 'Rich espresso balanced with steamed milk and a light layer of foam.' },
  { id: '3', category: 'Desserts', name: 'Cheesecake', price: '₱180', description: 'Creamy New York style cheesecake with a classic graham cracker crust.' },
  { id: '4', category: 'Desserts', name: 'Brownie', price: '₱110', description: 'Fudgy and rich chocolate brownie served warm.' },
  { id: '5', category: 'Cold Drinks', name: 'Iced Matcha Latte', price: '₱170', description: 'Pure Japanese matcha whisked with cold milk over ice.' },
];

export default function MenuScreen() {
  const router = useRouter();

  const handleViewDetails = (item: typeof menuItems[0]) => {
    // route.params working: passing data dynamically to the detail view
    router.push({
      pathname: '/details',
      params: { name: item.name, price: item.price, category: item.category, description: item.description }
    });
  };

  const renderItem = ({ item }: { item: typeof menuItems[0] }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.categoryText}>{item.category}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price}</Text>
      
      {/* navigation.navigate working: Tapping an item routes to details */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handleViewDetails(item)}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>thisisretro cafe</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3B441F', paddingTop: 20 },
  appTitle: { fontSize: 32, fontWeight: 'bold', color: '#F4F1EA', paddingHorizontal: 20, marginBottom: 25 },
  listContainer: { paddingHorizontal: 20 },
  itemContainer: { marginBottom: 15 },
  categoryText: { fontSize: 11, color: '#C2C8A4', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 },
  nameText: { fontSize: 19, fontWeight: 'bold', color: '#F4F1EA' },
  priceText: { fontSize: 14, color: '#C2C8A4', marginBottom: 8, fontWeight: '500' },
  button: { alignSelf: 'flex-start', backgroundColor: '#262C14', borderRadius: 4, paddingVertical: 6, paddingHorizontal: 14, marginBottom: 15 },
  buttonText: { color: '#F4F1EA', fontSize: 13, fontWeight: '600' },
  separator: { height: 1, backgroundColor: '#4B5529', width: '100%' },
});