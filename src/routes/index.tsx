import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, ListagemDeCidade } from "../pages";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página Inicial",
        path: "/pagina-inicial",
      },
      {
        label: "Cidades",
        path: "/cidades",
      },
    ]);
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/cidades" element={<ListagemDeCidade />} />
      {/* <Route path="/cidades/detalhe/:id" element={<Dashboard />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
