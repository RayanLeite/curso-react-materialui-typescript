import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: string;
  mostrarBotaoVoltar?: string;
  mostrarBotaoApagar?: string;
  mostrarBotaoSalvar?: string;
  mostrarBotaoSalvarEFechar?: string;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
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
      {mostrarBotaoSalvar && (
        <Button
          variant="contained"
          disableElevation
          color="primary"
          onClick={aoClicarEmSalvar}
          startIcon={<Save />}
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarEFechar && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Save />}
        >
          Salvar e voltar
        </Button>
      )}
      {mostrarBotaoApagar && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmApagar}
          startIcon={<Delete />}
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmNovo}
          startIcon={<Add />}
        >
          {textoBotaoNovo}
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />

      {mostrarBotaoVoltar && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmVoltar}
          startIcon={<ArrowBack />}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
