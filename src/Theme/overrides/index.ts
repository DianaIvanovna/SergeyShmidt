// ** MUI Imports
import { Theme } from "@mui/material/styles";
import { SvgIcon } from "@/Theme/overrides/SvgIcon";

// ** Overrides Imports

export const muiComponents = (theme: Theme) => {
  // const switches = MuiSwitches(theme);
  // const listItemButton = MuiListItemButton(theme);
  // const formHelperText = MuiFormHelperText(theme);
  // const textField = MuiTextField(theme);
  // const inputLabel = MuiInputLabel(theme);
  // const inputBase = MuiInputBase(theme);
  // const outlinedInput = MuiOutlinedInput(theme);
  // const filledInput = MuiFilledInput(theme);
  // const menuItem = MuiMenuItem(theme);
  // const slider = MuiSlider(theme);
  // const button = MuiButton(theme);
  // const iconButton = MuiIconButton(theme);
  // const buttonGroup = MuiButtonGroup(theme);
  // const toggleButton = MuiToggleButton(theme);
  // const toggleButtonGroup = MuiToggleButtonGroup(theme);
  const svgIcon = SvgIcon(theme);
  // const checkbox = MuiCheckbox(theme);
  // const radio = MuiRadio(theme);
  // const select = Select(theme);
  // const autocomplete = MuiAutocomplete(theme);

  return Object.assign(
    // button,
    // select,
    // iconButton,
    // buttonGroup,
    // toggleButton,
    // toggleButtonGroup,
    // switches,
    // textField,
    // listItemButton,
    // inputLabel,
    // formHelperText,
    // inputBase,
    // outlinedInput,
    // filledInput,
    // menuItem,
    // slider,
    svgIcon
    // checkbox,
    // radio,
    // autocomplete
  );
};

