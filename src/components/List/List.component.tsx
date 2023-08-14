import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import { removeItem } from "store";
import { RootState } from "store/store";
import EditIcon from "assets/icons/Edit";
import DeleteIcon from "assets/icons/Delete";
import { ListProps } from "./List.props";
import styles from "./List.module.css";

export const List = ({ setEditingId, inputRef, setColorName, setFontFamilyName, ...props }: ListProps) => {
  const list = useSelector((s: RootState) => s.main.list);
  const dispatch = useDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeItem({ id }));
  };

  const handleEdit = (id: string) => {
    if (!inputRef.current) return;
    const currentValue = list.find((item) => item.id === id);
    if (!currentValue) return;
    inputRef.current.value = currentValue?.title;
    inputRef.current.focus();
    setEditingId(id);
    setColorName(currentValue?.color);
    setFontFamilyName(currentValue?.font);
  };

  return (
    <ul className={cn(styles.list)} {...props}>
      {!!list.length &&
        list.map((item) => {
          return (
            <li className={cn(styles.list__item)} key={item.id} style={{ fontFamily: item.font, color: item.color }}>
              <p>{item.title}</p>

              <div>
                <button className={cn(styles.list__item__button, styles.edit)} onClick={() => handleEdit(item.id)}>
                  <EditIcon />
                </button>

                <button className={cn(styles.list__item__button, styles.delete)} onClick={() => handleRemove(item.id)}>
                  <DeleteIcon />
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
