import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/lib/utils'
import { theme } from '@/theme/theme'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'

const SubscriptionCard = ({name,price,currency,icon,billing,color,category,plan,renewalDate,onPress,expanded,paymentMethod,startDate,status}: SubscriptionCardProps) => {
  return (
    <Pressable onPress={onPress} style={[theme.components.sub.card,!expanded && color ? {backgroundColor: color} : undefined , expanded ? theme.components.sub.cardExpanded : undefined]}>
      <View style={theme.components.sub.head as ViewStyle}>
        <View style={theme.components.sub.main as ViewStyle}>
          <Image source={icon} style={theme.components.sub.icon} />
          <View style={theme.components.sub.copy}>
            <Text numberOfLines={1} style={theme.components.sub.title}>{name}</Text>
            <Text numberOfLines={1} style={theme.components.sub.meta}>
              {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : '')}
            </Text>
          </View>
        </View>
        <View style={theme.components.sub.priceBox as ViewStyle}>
          <Text style={theme.components.sub.price}>{formatCurrency(price, currency)}</Text>
          <Text style={theme.components.sub.billing}>{billing}</Text>
        </View>
      </View>
      {
        expanded && (
          <View style={theme.components.sub.body}>
            <View style={theme.components.sub.details}>
              <View style={theme.components.sub.row as ViewStyle}>
                <View style={theme.components.sub.rowCopy as ViewStyle}>
                  <Text style={theme.components.sub.label}>Payment :</Text>
                  <Text style={theme.components.sub.value} ellipsizeMode='tail' numberOfLines={1}>
                    {paymentMethod?.trim()}
                  </Text>
                </View>
              </View>
              <View style={theme.components.sub.row as ViewStyle}>
                <View style={theme.components.sub.rowCopy as ViewStyle}>
                  <Text style={theme.components.sub.label}>Category :</Text>
                  <Text style={theme.components.sub.value} ellipsizeMode='tail' numberOfLines={1}>
                    {category?.trim() ||  plan?.trim()}
                  </Text>
                </View>
              </View>
              <View style={theme.components.sub.row as ViewStyle}>
                <View style={theme.components.sub.rowCopy as ViewStyle}>
                  <Text style={theme.components.sub.label}>Started :</Text>
                  <Text style={theme.components.sub.value} ellipsizeMode='tail' numberOfLines={1}>
                    { startDate ? formatSubscriptionDateTime(startDate) : ''}
                  </Text>
                </View>
              </View>
              <View style={theme.components.sub.row as ViewStyle}>
                <View style={theme.components.sub.rowCopy as ViewStyle}>
                  <Text style={theme.components.sub.label}>Renewal Date :</Text>
                  <Text style={theme.components.sub.value} ellipsizeMode='tail' numberOfLines={1}>
                    {renewalDate ? formatSubscriptionDateTime(renewalDate) : ''}
                  </Text>
                </View>
              </View>
              <View style={theme.components.sub.row as ViewStyle}>
                <View style={theme.components.sub.rowCopy as ViewStyle}>
                  <Text style={theme.components.sub.label}>Status :</Text>
                  <Text style={theme.components.sub.value} ellipsizeMode='tail' numberOfLines={1}>
                    {status ? formatStatusLabel(status) : ''}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )
      }
    </Pressable>
  )
}

export default SubscriptionCard

const styles = StyleSheet.create({})