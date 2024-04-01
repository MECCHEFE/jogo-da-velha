import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const EndGameDialog = ({resultText, isOpen, onClickYes, onClickNo}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>
                    {resultText}
                </Text>
                <Text style={styles.modalText}>
                    {'Deseja jogar novamente?'}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', gap: '30px'}}>
                  <Pressable
                      style={[styles.button, styles.buttonYes]}
                      onPress={onClickYes}
                  >
                      <Text style={styles.buttonText}>
                          Sim
                      </Text>
                  </Pressable>
                  <Pressable
                      style={[styles.button, styles.buttonNo]}
                      onPress={onClickNo}
                  >
                      <Text style={styles.buttonText}>
                          Não
                      </Text>
                  </Pressable>
                </View>
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'lightgreen',
    borderWidth: 3,
    borderColor: 'white',
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonYes: {
    backgroundColor: 'white',
  },
  buttonNo: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default EndGameDialog;