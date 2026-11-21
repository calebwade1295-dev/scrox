import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";

const RED = "#FF2638";
const tabs = ["For You", "Following", "Trending"];
const clips = [
  { user: "@scroxcreator", title: "Welcome to Scrox ⚡", desc: "Your new place to discover what's next.", likes: "12.4K", tag: "#Scrox" },
  { user: "@pixelwave", title: "Make every moment count.", desc: "Create. Share. Repeat.", likes: "8,291", tag: "#Creators" },
  { user: "@nightshift", title: "The feed is yours.", desc: "Find your people and your next favorite video.", likes: "5,607", tag: "#ForYou" }
];

export default function App() {
  const [tab, setTab] = useState("For You");
  const [liked, setLiked] = useState({});
  const [screen, setScreen] = useState("Home");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#09090B" }}>
      <StatusBar barStyle="light-content" backgroundColor="#09090B" />
      <View style={{ height: 62, paddingHorizontal: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#24242A" }}>
        <Text style={{ color: RED, fontSize: 30, fontWeight: "900" }}>ϟ SCROX</Text>
        <Text style={{ color: "#A1A1AA", fontSize: 12, fontWeight: "700" }}>BETA</Text>
      </View>
      {screen === "Home" ? <>
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 28, padding: 16 }}>
          {tabs.map(t => <TouchableOpacity key={t} onPress={() => setTab(t)}>
            <Text style={{ color: tab === t ? "#FFFFFF" : "#71717A", fontWeight: "800", fontSize: 15 }}>{t}{tab === t ? " ━" : ""}</Text>
          </TouchableOpacity>)}
        </View>
        <ScrollView contentContainerStyle={{ padding: 14, paddingBottom: 30 }}>
          {clips.map((clip, i) => <View key={i} style={{ backgroundColor: "#17171C", borderRadius: 18, marginBottom: 18, overflow: "hidden", borderWidth: 1, borderColor: "#292930" }}>
            <View style={{ height: 300, backgroundColor: i === 0 ? "#251015" : "#171923", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: RED, fontSize: 76, fontWeight: "900" }}>ϟ</Text>
              <Text style={{ color: "#FFFFFF", fontSize: 17, fontWeight: "800", marginTop: 8 }}>{clip.title}</Text>
              <Text style={{ color: "#A1A1AA", marginTop: 6 }}>{clip.tag}</Text>
              <Text style={{ color: "#71717A", fontSize: 11, marginTop: 22 }}>DEMO POST · VIDEO PLAYER COMING NEXT</Text>
            </View>
            <View style={{ padding: 15 }}>
              <Text style={{ color: "#FFFFFF", fontWeight: "800", fontSize: 16 }}>{clip.user}</Text>
              <Text style={{ color: "#D4D4D8", marginTop: 5 }}>{clip.desc}</Text>
              <View style={{ flexDirection: "row", marginTop: 14, alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => setLiked(p => ({...p, [i]: !p[i]}))}>
                  <Text style={{ color: liked[i] ? RED : "#FFFFFF", fontWeight: "800" }}>{liked[i] ? "♥ Liked" : "♡ Like"} · {clip.likes}</Text>
                </TouchableOpacity>
                <Text style={{ color: "#A1A1AA" }}>💬 Comment</Text>
                <Text style={{ color: "#A1A1AA" }}>↗ Share</Text>
              </View>
            </View>
          </View>)}
        </ScrollView>
      </> : <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 28 }}>
        <Text style={{ color: RED, fontSize: 54, fontWeight: "900" }}>ϟ</Text>
        <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "900", marginTop: 12 }}>{screen}</Text>
        <Text style={{ color: "#A1A1AA", textAlign: "center", marginTop: 10 }}>This Scrox feature is part of the starter app. We'll build it out next.</Text>
      </View>}
      <View style={{ height: 66, borderTopWidth: 1, borderColor: "#24242A", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        {["Home", "Search", "Create", "Inbox", "Profile"].map((s, i) => <TouchableOpacity key={s} onPress={() => setScreen(s)} style={{ alignItems: "center" }}>
          <Text style={{ color: screen === s ? RED : "#A1A1AA", fontSize: 19 }}>{["⌂", "⌕", "+", "✉", "◉"][i]}</Text>
          <Text style={{ color: screen === s ? "#FFFFFF" : "#A1A1AA", fontSize: 10, marginTop: 3 }}>{s}</Text>
        </TouchableOpacity>)}
      </View>
    </SafeAreaView>
  );
}
