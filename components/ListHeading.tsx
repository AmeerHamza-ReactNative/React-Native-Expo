import { theme } from '@/theme/theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
const ListHeading = ({title}:ListHeadingProps) => {
  return (
    <View style={theme.components.list.head as ViewStyle}>
      <Text style={theme.components.list.title}>{title}</Text>
      <TouchableOpacity style={theme.components.list.action}>
        <Text style={theme.components.list.actionText}>View All</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeading

const styles = StyleSheet.create({})