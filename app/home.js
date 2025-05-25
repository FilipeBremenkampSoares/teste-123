
import { useNavigation } from "expo-router";
import { FlatList, View } from "react-native";
import { CircleButton, PrimaryButton, RoundedButton } from "../components/button";
import { Card } from "../components/card";
import { LayoutCenter, LayoutLeft } from "../components/container";
import { Title } from "../components/text";
import { TextBold } from "../components/text/styles";

export default function Home() {
const navigation = useNavigation();

const goBack = () => {
  if (navigation.canGoBack()) {
    navigation.goBack();
  };
};

const tipOptions = [2, 5, 10, 15, 20, 25, 30];

 return (
  <LayoutCenter style={{
      flex: 1,
      justifyContent: "space-between",
      aligmItems: "center",
    }}
    >
    <Title text="Pagamento"/> 
    <Card title="R$523,00" subtitle="Total da Conta"/>

    <LayoutLeft>
    <Title text="Gorjeta" />


    <FlatList 
    data={tipOptions}
    horizontal
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={<View style={{width: 8 }}></View>}
    renderItem={({ item }) =>{
      const label = `${item}%`;
      return <RoundedButton label={label}/>;
    }} />
    

    <Title text="Pessoas na mesa" />

    <View style={{ 
      flexDirection: "row",
      alignSelf: "stretch", 
      alignItems: "center",
      justifyContent: "center",
      }}>
    <CircleButton label="-" />
    <TextBold fontSize={32}>1</TextBold>
    <CircleButton label="+" />
    
    </View>    
    </LayoutLeft>

  
    <PrimaryButton label="Voltar" onPress={goBack} />
    </LayoutCenter>
  );
};