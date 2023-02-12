import { Text, View, TextInput, Image, TouchableOpacity, ScrollView } from "react-native"
import axios from "axios"
import {useState} from "react"
const AdminUser = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [load, setLoad] = useState(false)
    const baseUrl = "https://backend-hackaton-production.up.railway.app/adminUser"

    const datas = async () => {
      try {
        console.log(email)
        console.log(password)
        const login = await axios.post(`${baseUrl}/adminLogin`, {
            email: email,
            password: password,
        })
        console.log(login.data)
        if(login.data.status == 200) {
            console.log("login")
            navigation.navigate('AdminProduct')
        }
      }
      catch (e) {
        console.log(e, "err")
        setLoad(!load)
      }
    }


    return (
        <ScrollView>
            <View style={{ height: 840, alignItems: "center" }}>
                <View style={{ flex: .3, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#61B846", fontSize: 30, fontWeight: "bold" }}>SAYLANI WELFARE</Text>
                    <Text style={{ color: "#024F9D", fontSize: 15, fontWeight: "bold" }}>ONLINE DISCOUNT STORE</Text>
                </View>
                <View style={{ flex: .4, justifyContent: "center" }}>
                  {load && <Text style={{color: "red", textAlign: "center"}}>Email Password Not Correct</Text> }
                    <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TextInput placeholder="Email" style={{ width: 250 }} onChangeText={(e) => setEmail(e)} />
                        <Image
                            source={require("../assets/Emailicon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TextInput placeholder="Password" style={{ width: 250 }} onChangeText={(e) => setPassword(e)} />
                        <Image
                            source={require("../assets/Passwordicon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => {datas()}} style={{ backgroundColor: "#61B846", paddingVertical: 20, paddingHorizontal: 100, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 50, backgroundColor: "#61B846", paddingVertical: 20, paddingHorizontal: 100, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>User Panel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};
export default AdminUser