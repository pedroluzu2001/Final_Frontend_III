import { createContext, useReducer, useMemo } from "react";

// Estado inicial
export const initialState = {
  theme: "light", // Tema inicial
  data: [], // Datos iniciales (vacío hasta que se carguen de la API)
};

// Reducer para manejar acciones en el contexto global
const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload, // Actualiza el tema
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload, // Actualiza los datos
      };
    default:
      return state;
  }
};

// Crear el contexto global
export const ContextGlobal = createContext(undefined);

// Proveedor del contexto global
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Función para alternar el tema (light/dark)
  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: state.theme === "light" ? "dark" : "light", // Cambia el tema
    });
  };

  // Función para establecer los datos obtenidos de la API
  const setData = (data) => {
    dispatch({
      type: "SET_DATA",
      payload: data, // Establece los datos en el estado global
    });
  };

  // useMemo para memorizar los valores del contexto y evitar renders innecesarios
  const contextValue = useMemo(() => {
    return {
      theme: state.theme, // Tema actual
      data: state.data,   // Datos actuales de la API
      toggleTheme,        // Función para cambiar el tema
      setData,            // Función para establecer datos
    };
  }, [state.theme, state.data]);

  // Proveer el contexto a todos los componentes hijos
  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
