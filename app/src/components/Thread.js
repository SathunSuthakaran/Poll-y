import React, { useState } from "react";

const Thread = () => {
  const [lastClickedItem, setLastClickedItem] = useState(null);
  
  return (
    <main className="Thread">
      <Typography>
        {lastClickedItem == null
          ? 'No item click recorded'
          : `Last clicked item: ${lastClickedItem}`}
      </Typography>
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        <RichTreeView
          items={MUI_X_PRODUCTS}  
          
          onItemClick={(event, itemId) => setLastClickedItem(itemId)}
        />
      </Box>
    </main>
  );
};
export default Thread;
