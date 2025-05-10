
import { useNavigation } from "expo-router";
import { PrimaryButton } from "../components/button";
import { LayoutCenter } from "../components/container";
export default function Home() {
const navigation = useNavigation()

const goBack = () => {
  if (navigation.canGoBack()) {
    navigation.goBack();
  }
};






  return (
    <LayoutCenter style={{
    paddingTop:32,
      flex: 1,
     justifyContent: "space-between",
      alignItems: "center",
    }}
    >

    <PrimaryButton label="Calcular" onPress={goBack} />
    </LayoutCenter>
  );
};