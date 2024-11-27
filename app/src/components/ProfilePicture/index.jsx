import { Image } from "react-native";

export default function ProfilePicture() {
  return(
    <Image 
    source={require('../../assets/images/linus.jpg')}
    style={{width: 120, height: 120, borderRadius: 60}}
    />
  );
}