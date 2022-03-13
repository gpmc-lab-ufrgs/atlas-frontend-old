import Collapsible from "react-collapsible";

import { useCollapsible } from "@store/index";

import "./styles.css";

const CollapsibleSection = ({ children, title }: any) => {
  const { collapsible, setCollapsible } = useCollapsible();

  const onOpen = (key: any) => updateIsOpen(key, true);
  const onClose = (key: any) => updateIsOpen(key, false);

  const isOpen = (key: string) => {
    //@ts-ignore
    const value = collapsible && collapsible[key];
    return value ?? false;
  };

  const updateIsOpen = (key: any, value: any) => {
    const newValue = { ...collapsible, [key]: value };
    setCollapsible(newValue);
  };

  return (
    <Collapsible
      trigger={title}
      open={isOpen(title)}
      onOpening={() => onOpen(title)}
      onClosing={() => onClose(title)}
      lazyRender={true}
    >
      {children}
    </Collapsible>
  );
};

export default CollapsibleSection;
