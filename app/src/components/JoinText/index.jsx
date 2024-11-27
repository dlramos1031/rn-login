import {Text, View} from "react-native";

export default function JoinText() {
  return (
    <View style={{marginTop: 30}}>
      <View>
        <Text style={{fontSize: 20, color: "#808080"}}>
          Joined
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
          7 years ago
        </Text>
      </View>
    </View>
  );
}