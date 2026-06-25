import ListHeading from '@/components/ListHeading'
import SubscriptionCard from '@/components/SubscriptionCard'
import UpcomingSubscriptionCard from '@/components/UpcomingSubscriptionCard'
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from '@/constants/data'
import { icons } from '@/constants/icons'
import images from '@/constants/images'
import { formatCurrency } from '@/lib/utils'
import { theme } from '@/theme/theme'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  const [expandedSubscriptionId,setExpandedSubscriptionId] = useState<string|null>(null);

  return (
    <SafeAreaView style={[styles.main]}>
        <FlatList
          ListHeaderComponent={()=> (
            <>
              <View style={theme.components.home.header as ViewStyle}>
                <View style={theme.components.home.user as ViewStyle}>
                  <Image source={images.avatar} style={theme.components.home.avatar} />
                  <Text style={theme.components.home.userName}>{HOME_USER.name}</Text>
                </View>
                <Image source={icons.add} style={theme.components.home.addIcon} />
              </View>

              <View style={theme.components.home.balanceCard as ViewStyle}>
                <Text style={theme.components.home.balanceLabel}>Balance</Text>
                <View style={theme.components.home.balanceRow as ViewStyle}>
                  <Text style={theme.components.home.balanceAmount}>
                    {formatCurrency(HOME_BALANCE.amount)}
                  </Text>
                  <Text style={theme.components.home.balanceDate}>
                    {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
                  </Text>
                </View>
              </View>

              <View style={{marginBottom:8}}>
                <ListHeading title = 'Upcoming'/>
                <FlatList 
                  data={UPCOMING_SUBSCRIPTIONS} 
                  renderItem={({ item }) => 
                    <UpcomingSubscriptionCard {...item} />
                  }
                  keyExtractor={(item) => item.id}
                  horizontal
                ListEmptyComponent={<Text style={theme.components.home.emptyState}>No upcoming renewals yet</Text>}
                />
              </View>
              <ListHeading title = 'All Subscriptions'/>
            </>
          )}
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={( (item) => item.id)}
          renderItem={({item})=> ( 
            <SubscriptionCard {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() => setExpandedSubscriptionId((currentId) => (currentId === item.id ? null : item.id))}
            />
          )}
          extraData={expandedSubscriptionId}
          ItemSeparatorComponent={()=> <View style={{marginBottom:12}}/>}
          contentContainerStyle={{paddingBottom:80}}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text style={theme.components.home.emptyState}>No subscriptions yet.</Text>}
        />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  main:{
    flex:1,
    padding:theme.spacing[3],
    backgroundColor:theme.colors.background
  },
})