import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      scrollSnapAlign: "start",
      scrollBehavior: "smooth",
      height: "100dvh",
    },

    slideImage1: {
      position: "absolute",
      width: { xs: "90%", lg: "50%" },
      left: { xs: "5%", lg: "-20%" },
      bottom: { xs: "-20%", lg: "-20%" },
      height: { xs: "50%", lg: "100%" },
      zIndex: 5,
    },
    slideImage2: {
      position: "absolute",
      width: { xs: "90%", lg: "50%" },
      left: { xs: "5%", lg: "0%" },
      bottom: { xs: "0%", lg: "-15%" },
      height: { xs: "50%", lg: "100%" },
      zIndex: 4,
    },
    slideImage3: {
      position: "absolute",
      width: { xs: "90%", lg: "75%" },
      left: { xs: 0, lg: "-5%" },
      bottom: { xs: "20%", lg: "-17%" },
      height: { xs: "50%", lg: "100%" },
      zIndex: 3,
    },
    slideImage4: {
      position: "absolute",
      width: { xs: "90%", lg: "100%" },
      left: { xs: 0, lg: "5%" },
      bottom: { xs: "40%", lg: "-15%" },
      height: { xs: "50%", lg: "100%" },
      zIndex: 2,
    },
    content1: {
      top: "30%",
      left: { xs:"70%", md: "55%", lg: "70%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-30%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    content2: {
      top: "20%",
      left: {xs:"70%", md: "55%", lg: "70%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-20%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    content3: {
      top: "20%",
      left: { xs:"75%",md: "60%", lg: "80%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-15%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    content4: {
      top: "25%",
      left: { xs:"75%", md: "60%", lg: "72%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-15%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: -1,
    },
    container: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexDirection: { xs: "column", lg: "row" },
      pb: 3,
      pt: { xs: 10, lg: 0 },
    },
  };

  return classes;
};

export default useStyles;
