import { Add } from "@mui/icons-material";
import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import React from "react";

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  aoClicarEmNovo,
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
}) => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            disableElevation
            color="primary"
            endIcon={<Add />}
            onClick={aoClicarEmNovo}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
