import React from "react"

return(<Typography>
  {lastClickedItem == null
    ? 'No item click recorded'
    : `Last clicked item: ${lastClickedItem}`}
</Typography>
<Box sx={{ minHeight: 352, minWidth: 250 }}>
  <RichTreeView
    items={MUI_X_PRODUCTS}
    onItemClick={(event, itemId) => setLastClickedItem(itemId)}
  />
</Box>)

