import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  editingId?: string;
  setEditingId?: (editingId: string) => void;
  colorName?: string;
  fontFamilyName?: string;
  setColorName: React.Dispatch<React.SetStateAction<string>>;
  setFontFamilyName: React.Dispatch<React.SetStateAction<string>>;
}
