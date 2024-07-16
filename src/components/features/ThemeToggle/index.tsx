import { Container, Cover } from "./styled-components";
import Sun from "../../base/Iconography/Sun";
import Moon from "../../base/Iconography/Moon";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const stateLabels: ["light", "dark"] = ["light", "dark"];
const iconProps = { height: 24, width: 24 };

export const Toggle = () => {
  const colorSchemeFromMQ = useMediaQuery("(prefers-color-scheme: dark)")
    ? stateLabels[1]
    : stateLabels[0];
  const [selectedState, setSelectedState] = useLocalStorage(
    "local-color-scheme",
    colorSchemeFromMQ
  );
  return (
    <Container
      aria-checked={selectedState === "dark" ? "true" : "false"}
      aria-label={"Dark/Light theme toggle"}
      onClick={toggleSwitch}
      role="switch"
      $theme={selectedState}
    >
      <Cover $theme={selectedState}>
        {selectedState === "light" ? (
          <Sun {...iconProps} />
        ) : (
          <Moon {...iconProps} />
        )}
      </Cover>
    </Container>
  );
  function toggleSwitch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSelectedState((prev: "light" | "dark") =>
      prev === stateLabels[0] ? stateLabels[1] : stateLabels[0]
    );
  }
};

export default Toggle;
