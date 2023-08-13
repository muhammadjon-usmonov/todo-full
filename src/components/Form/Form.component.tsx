import { forwardRef, ForwardedRef } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";

import { addItem, editItem } from "store";

import { colors } from "data/color.data";
import { fonts } from "data/font.data";

import { FormProps } from "./Form.props";

import styles from "./Form.module.css";

export const Form = forwardRef(
  ({ editingId, setEditingId, colorName, fontFamilyName, setColorName, setFontFamilyName, ...props }: FormProps, ref: ForwardedRef<HTMLInputElement>) => {
    const dispatch = useDispatch();

    const handleSubmit = (evt: any) => {
      evt.preventDefault();

      const { title, font, color } = evt.target.elements;

      const newItem = {
        color: color.value.trim(),
        font: font.value.trim(),
        title: title.value.trim(),
      };

      if (!editingId) {
        dispatch(addItem(newItem));

        evt.target.reset();
      } else {
        dispatch(
          editItem({
            id: editingId,
            ...newItem,
          })
        );

        if (!setEditingId) return;
        setEditingId("");

        evt.target.reset();
      }
    };

    return (
      <form className={cn(styles.form)} onSubmit={handleSubmit} {...props}>
        <div className={cn(styles.form__top)}>
          <select className={cn(styles.form__family)} name="font" value={fontFamilyName} onChange={e => setFontFamilyName(e.target.value)}>
            {fonts.map((font, index) => (
              <option value={font.name} style={{ fontFamily: font.name }} key={index}>
                {font.name}
              </option>
            ))}
          </select>

          <select className={cn(styles.form__color)} name="color" value={colorName} onChange={e => setColorName(e.target.value)}>
            {colors.map((color, index) => (
              <option value={color.name} style={{ color: color.name }} key={index}>
                {color.name}
              </option>
            ))}
          </select>
        </div>

        <div className={cn(styles.form__bottom)}>
          <input
            className={cn(styles.form__input)}
            type="text"
            name="title"
            ref={ref}
            placeholder={editingId ? "Editing..." : "Creating..."}
            required
          />

          <button type="submit" className={cn(styles.form__button)}>
            {editingId ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    );
  }
);
