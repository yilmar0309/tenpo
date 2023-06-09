import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface SafeAreaViewComponentProps {
  children: React.ReactNode;
  backgroundColor?: string;
  paddingHorizontal?: number;
}

export const SafeAreaViewComponent = ({
  children,
  backgroundColor = 'white',
}: SafeAreaViewComponentProps) => {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
