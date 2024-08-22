import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#0c0c0c",
        secondary: "#000000",
        tertiary: "#ffffff",
        quaternary: "#4528ad",

    }
};

interface ThemeDefaultProps {
    children: React.ReactNode;
}
function ThemeDefault({ children }: ThemeDefaultProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault;




