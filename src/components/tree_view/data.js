const data = {
  name: "Footwear",
  type: [
    {
      name: "Sandals",
    },
    {
      name: "Flipflops",
    },
    {
      name: "Shoes",
      type: [
        {
          name: "Formal",
        },
        {
          name: "Boots",
        },
        {
          name: "Casual",
          type: [
            {
              name: "Sneakers",
            },
            {
              name: "Boat",
            },
          ],
        },
      ],
    },
  ],
};

export default data;
