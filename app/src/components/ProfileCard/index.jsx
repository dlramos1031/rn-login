import {Text, View} from "react-native";
import ProfilePicture from "../ProfilePicture/index";

export default function ProfileCard() {
  return (
    <View>
      <View style={{paddingBottom: 30}}>
        <ProfilePicture />
      </View>
      
      <Text style={{fontSize: 40, fontWeight: "bold"}}>
          Linus
      </Text>
      <Text style={{fontSize: 40, color: "#808080"}}>
          Torvalds
      </Text>
    </View>
  );
}