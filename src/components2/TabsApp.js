import { Tabs } from "antd";
import React from "react";

export const TabsApp = () => {
  return (
    <div>
      <Tabs
        items={[
          {
            label: "Followers",
            key: "followers",
            children: <h1>followers</h1>,
          },
          {
            label: "Following",
            key: "following",
            children: <h1>following</h1>,
          },
          {
            label: "Suggestions",
            key: "suggestions",
            children: <h1>Suggestions</h1>,
          },
        ]}
      />
    </div>
  );
};
