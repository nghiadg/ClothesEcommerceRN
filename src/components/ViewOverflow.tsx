import * as React from "react";
import { FlatList } from "react-native";

const ViewOverflow: React.FC = ({ children }) => {
  return (
    <FlatList
      data={[{}]}
      keyExtractor={() => "dummy"}
      renderItem={() => <>{children}</>}
    />
  );
};

export default ViewOverflow;
