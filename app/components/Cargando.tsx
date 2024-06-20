import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator, StyleSheet, View, Modal, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { theme } from '../../App';

export const Cargando = () => {
  const {isOpen}= useSelector((d:RootState)=>d.splash)
  return (
    <Modal transparent animationType="fade" visible={isOpen}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator animating={true} size={50} color={theme.colors.primary} />
          <Text style={styles.espereUnMomento}>Cargando...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // Fondo translúcido con opacidad 0.5
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  activityIndicator: {
    marginTop: 20,
  },
  espereUnMomento: {
    fontSize: 16,
    fontWeight: "500",
    marginTop:10,
    color: "#fff",
    textAlign: "left"
    }
});
