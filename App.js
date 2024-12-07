import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import profile from './assets/raman.jpg';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Bio-Native App</Text>
      
      <Image source={profile} style={styles.profile} />
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Ramandeep Kaur Dhaliwal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>dramandeep202@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contact:</Text>
          <Text style={styles.value}>+1 (234) 567-8901</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Skills:</Text>
          <Text style={styles.value}>C++, Python, React Native</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Interests:</Text>
          <Text style={styles.value}>Mobile Development, Web Development</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Light blue background color
    padding: 20,
  },
  title: {
    fontSize: 24, // Set title size to 24
    fontWeight: 'bold',
    marginBottom: 20, // Space below the title
    color: '#003366', // Dark blue color
    textAlign: 'center',
  },
  profile: {
    width: 200, // Adjust size as needed
    height: 200,
    borderRadius: 4, // Makes the image circular
    marginBottom: 10,
  },
  tableContainer: {
    width: '90%',
    backgroundColor: '#ffffff', // White background for the table
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Add shadow for Android
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Light gray line between rows
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b', // Dark teal for labels
  },
  value: {
    fontSize: 16,
    color: '#37474f', // Dark gray for values
    textAlign: 'left'
  },
});