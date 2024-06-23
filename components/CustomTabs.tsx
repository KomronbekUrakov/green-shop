import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import axios from "axios";

interface TabsType {
  id: string;
  title: string;
  path:string | null;
}
interface PropsType {
  handleTabclick(value: string): void;
}
const CustomTabs: React.FC<PropsType> = ({handleTabclick}) => {
  const onChange = (key: string) => {
    handleTabclick(key);
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/tag-navbar")
      .then((response) => {
        setItems(
          response.data.map((item: TabsType) => ({
            key: item.id,
            label: item.title,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <Tabs defaultActiveKey="1" items={items}  onChange={onChange} />;
};

export default CustomTabs;
