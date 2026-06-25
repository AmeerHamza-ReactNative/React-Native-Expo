import { formatCurrency } from '@/lib/utils'
import { theme } from '@/theme/theme'
import React from 'react'
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native'
const UpcomingSubscriptionCard = ({name, price, amount, daysLeft,currency,icon}:UpcompingSubscription) => {
  return (
    <View style={theme.components.upcoming.card as ViewStyle}>
      <View style={theme.components.upcoming.row as ViewStyle}>
        <Image source={icon} style={theme.components.upcoming.icon} />
        <View>
            <Text style={theme.components.upcoming.price}>
                {formatCurrency(price,currency)}
            </Text>
            <Text style={theme.components.upcoming.meta} numberOfLines={1}>
                {daysLeft > 1 ? `${daysLeft} days left` : 'Last day'}
            </Text>
        </View>
      </View>
      <Text style={theme.components.upcoming.name} numberOfLines={1}>
        {name}
      </Text>
    </View>
  )
}

export default UpcomingSubscriptionCard

const styles = StyleSheet.create({})