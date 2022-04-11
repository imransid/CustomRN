import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const SocialCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
        <Image style={styles.image} source={{ uri: 'https://img.icons8.com/color/240/000000/facebook-new.png' }} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Facebook</Text>
          <Text style={styles.count}>dfgdfgdfg</Text>
          <TouchableOpacity style={styles.followButton} onPress={() => console.log("Hello")}>
            <Text style={styles.followButtonText}>Open App</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
        <Image style={styles.image} source={{ uri: "https://img.icons8.com/fluency/240/000000/linkedin-circled.png" }} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Linkedin</Text>
          <Text style={styles.count}>dfgdfgdfg</Text>
          <TouchableOpacity style={styles.followButton} onPress={() => console.log("Hello")}>
            <Text style={styles.followButtonText}>Open App</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
        <Image style={styles.image} source={{ uri: "https://img.icons8.com/color/240/000000/twitter-circled--v1.png" }} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Twitter</Text>
          <Text style={styles.count}>dfgdfgdfg</Text>
          <TouchableOpacity style={styles.followButton} onPress={() => console.log("Hello")}>
            <Text style={styles.followButtonText}>Open App</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
        <Image style={styles.image} source={{ uri: "https://img.icons8.com/office/160/000000/whatsapp--v1.png" }} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>WhatsApp</Text>
          <Text style={styles.count}>dfgdfgdfg</Text>
          <TouchableOpacity style={styles.followButton} onPress={() => console.log("Hello")}>
            <Text style={styles.followButtonText}>Open App</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
        <Image style={styles.image} source={{ uri: "https://img.icons8.com/color/240/000000/skype--v1.png" }} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Skype</Text>
          <Text style={styles.count}>dfgdfgdfg</Text>
          <TouchableOpacity style={styles.followButton} onPress={() => console.log("Hello")}>
            <Text style={styles.followButtonText}>Open App</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default SocialCard

const styles = StyleSheet.create({
    // container:{
  //   flex:1,
  //   marginTop:20,
  //   backgroundColor:"#ebf0f7"
  // },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#3399ff",
    fontWeight: 'bold'
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#33B5E5",
  },
  followButtonText: {
    color: "#1E1E1E",
    fontSize: 12,
  },
})