import { tabs } from "@/constants/data";
import { theme } from "@/theme/theme";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = theme.components.tabBar;
const TabLayout = () => {
  const insets = useSafeAreaInsets();
  
    const TabIcon = ({ focused, icon }:TabIconProps) => {
      return (
        <View style={styles.tabsIcon}>
          <View style={[styles.tabsPill, focused && styles.tabsActive]}>
            <Image source={icon} resizeMode="contain" style={styles.tabsGlyph}/>
          </View>
        </View>
      )
    }

  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#838181',
        tabBarInactiveTintColor: '#838181',
        tabBarStyle: {
          position: 'absolute',
          // bottom : Math.max(insets.bottom, tabBar.horizontalInset),
          bottom : insets.bottom + 20,
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: theme.colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height/2 - tabBar.iconFrame/1.6,
        },
        tabBarIconStyle: {
          width:tabBar.iconFrame,
          height:tabBar.iconFrame,
          alignItems:'center',
        }
      }} 
    >
      {tabs.map((tab) => (
        <Tabs.Screen 
          key={tab.name} 
          name={tab.name} 
          options={{ 
            title: tab.title ,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            )
          }} />
      ))}
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabsIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsPill: {
    width: theme.components.tabBar.iconFrame,
    height: theme.components.tabBar.iconFrame,
    borderRadius: theme.components.tabBar.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsActive: {
    backgroundColor: theme.colors.accent, 
  },
  tabsGlyph: {
    width: 24,
    height: 24,
  }
});

export default TabLayout;