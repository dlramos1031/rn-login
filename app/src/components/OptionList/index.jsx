import { List } from 'react-native-paper';
import { Text } from 'react-native-paper';

export default function OptionList() {
  return (
    <>
    <List.Section>
      <List.Subheader style={{fontSize: 25, fontWeight: "bold"}}>Profile</List.Subheader>
      <List.Item
        title={props => <Text {...props} variant='titleLarge'>Manage User</Text>}
        left={props => <List.Icon {...props} icon="account" color="#ff7f50"/>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
    </List.Section> 

    <List.Section>
      <List.Subheader style={{fontSize: 25, fontWeight: "bold"}}>Settings</List.Subheader>
      <List.Item
        title={props => <Text {...props} variant='titleLarge'>Notifications</Text>}
        left={props => <List.Icon {...props} icon="bell" color="#8a2be2"/>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item
        title={props => <Text {...props} variant='titleLarge'>Dark Mode</Text>}
        left={props => <List.Icon {...props} icon="moon-waning-crescent" color="#696969"/>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={() => console.log('Sign Out Button Pressed')}
      />
    </List.Section> 
    </>
  );
}