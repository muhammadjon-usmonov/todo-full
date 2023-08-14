import { useRef, useState } from "react";
import cn from "classnames";
import { Form, List } from "components";
import { MainProps } from "./Main.props";
import styles from "./Main.module.css";
import { colors } from '../../data/color.data';
import { fonts } from '../../data/font.data';
export const Main = ({ ...props }: MainProps) => {
  const [editingId, setEditingId] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [colorName, setColorName] = useState<string>(colors[0].name);
  const [fontFamilyName, setFontFamilyName] = useState<string>(fonts[0].name);

  return (
    <div className={cn(styles.container)} {...props}>
      <Form
        editingId={editingId}
        setEditingId={setEditingId}
        ref={inputRef}
        colorName={colorName}
        fontFamilyName={fontFamilyName}
        setColorName={setColorName}
        setFontFamilyName={setFontFamilyName}
      />
      <List
        setEditingId={setEditingId}
        inputRef={inputRef}
        setColorName={setColorName}
        setFontFamilyName={setFontFamilyName}
      />
    </div>
  );
};
