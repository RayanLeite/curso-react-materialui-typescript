import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";

export const FerramentasDeDetalhe: React.FC = () => {
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
      <Button
        variant="contained"
        disableElevation
        color="primary"
        startIcon={<Save />}
      >
        Salvar
      </Button>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        startIcon={<Save />}
      >
        Salvar e voltar
      </Button>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        startIcon={<Delete />}
      >
        Apagar
      </Button>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        startIcon={<Add />}
      >
        Novo
      </Button>

      <Divider variant="middle" orientation="vertical" />

      <Button
        variant="outlined"
        disableElevation
        color="primary"
        startIcon={<ArrowBack />}
      >
        Voltar
      </Button>
    </Box>
  );
};
