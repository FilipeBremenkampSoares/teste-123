
import { Image } from "react-native";
import { AppName, Subtitle } from "../components/text";

import { useNavigation } from "expo-router";
import Icon from "../assets/images/home-icon.png";
import { PrimaryButton } from "../components/button";
import { LayoutCenter } from "../components/container";

export default function Index() {

   const navigation = useNavigation();
   const goToHome = () => {
    navigation.navigate('home');
    };


  return (
 

    <LayoutCenter
    style={{
    paddingTop:32,
    flex: 1,
    justifyContent: "space-between",
    }}
    >

    <LayoutCenter>
    <AppName />
    <Subtitle text="Calcule a gorjeta e divida a conta"/>
    </LayoutCenter>

    <Image source={Icon} />

    <PrimaryButton label="Calcular" onPress={goToHome} />

    </LayoutCenter>
  );
};