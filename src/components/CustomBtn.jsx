/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
// import { _COLORS } from "../constant";

export const CustomBtn = ({
  childComp,
  bg,
  color,
  text,
  border,
  width,
  height,
  handleClick,
  loading,
  type,
  disabled,
  fontSize,
  // letterSpacing,
  p,
  boxShadow,
}) => {
  return (
    <Button
      rightIcon={childComp}
      // width="100%"
      color={color || "white"}
      bg={bg || "#05A51F"}
      borderRadius={"7px"}
      p={p}
      boxShadow={boxShadow}
      height={height}
      width={width}
      fontSize={fontSize}
      border={border}
      // letterSpacing={letterSpacing}
      type={type}
      _hover={{
        bg: bg
      }}
      onClick={handleClick}
      isLoading={loading}
      isDisabled={disabled}
    >
      {text}
    </Button>
  );
};
