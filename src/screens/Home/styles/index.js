import { StyleSheet, Platform } from "react-native";
/*
...Platform.select({
  web: {

  },
  android: {
    
  },
}),*/

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  container: {
    ...Platform.select({
      web: {
        height: "100%",
        width: "100%",
      },
      android: {
        height: "100%",
        width: "100%",
      },
      ios: {
        height: "90%",
        width: "100%",
      },
    }),
  },
  header: {
    ...Platform.select({
      web: {
        height: "35%",
      },
      android: {
        height: "35%",
      },
      ios: {
        height: "25%",
      },
    }),
  },
  background: {
    ...Platform.select({
      web: {
        width: "100%",
      },
      android: {
        justifyContent: "center",
        alignItems: "center",
      },
      ios: {
        justifyContent: "center",
        alignItems: "center",
      },
    }),
  },
  backlogos: {
    ...Platform.select({
      web: {
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "cover", // ou 'stretch' dependendo do comportamento desejado
        flexDirection: "column",
        width: "100%",
        backgroundColor: "",
      },
      android: {
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "cover", // ou 'stretch' dependendo do comportamento desejado
        flexDirection: "column",
        width: "100%",
        marginTop: 20
      },
      ios: {
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "cover", // ou 'stretch' dependendo do comportamento desejado
        flexDirection: "column",
        width: "95%",
      },
    }),
  },
  menu: {
    marginTop: "2%",
    marginLeft: "90%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  titulo:{
    fontSize: 30,
    fontWeight: "bold",
  },
  backtitle: {
    alignItems: "center",
  },
  title: {
    width: '130%',
    textAlign: 'left',
    marginLeft: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    paddingTop: 20,
  },
  MsgB: {
    ...Platform.select({
      web: {
        fontSize: 20,
      },
      android: {
        fontSize: 35,
        height: "10%",
        marginTop: 30,
        marginLeft: 15,
      },
      ios: {
        fontSize: 52,
        height: "10%",
        marginTop: 5,
        marginLeft: 15,
      }
    }),
  },
  Msg: {
    ...Platform.select({
      web: {
        fontSize: 20,
      },
      android: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 10,
      },
      ios: {
        fontSize: 17,
        marginLeft: 1,
        marginTop: 17,
      },
    }),
  },
  main: {
    height: "50%",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  mainMiddle: {
    flexDirection: "row",
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  mainButtons: {
    height: "100%",
    justifyContent: "center",
    marginVertical: 30,
    width: "50%",
  },
  Btn: {
    height: 40,
    width: 150,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#212529",
    alignItems: "center",
    marginLeft: 50,
    marginTop: 10,
  },
  txtBtn: {
    color: "white",
    fontSize: 14,
  },
  mainImage: {
    marginLeft: "40%",
  },

  twoGear: {},
});
export default styles;
