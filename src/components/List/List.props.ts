import { DetailedHTMLProps, HTMLAttributes, RefObject } from "react";

export interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  editingId?: string;
  setEditingId: (editingId: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  setColorName: React.Dispatch<React.SetStateAction<string>>;
  setFontFamilyName: React.Dispatch<React.SetStateAction<string>>;
}
